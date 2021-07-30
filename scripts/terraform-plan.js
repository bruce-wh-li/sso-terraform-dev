const axios = require('axios');

const realms = ['onestopauth', 'onestopauth-basic', 'onestopauth-both', 'onestopauth-business'];
const modules = ['keycloak_dev', 'keycloak_test', 'keycloak_prod'];
const TF_ADDITIONS_ALLOWED = 6;
const TF_DELETIONS_ALLOWED = 6;
const TF_UPDATES_ALLOWED = 6;
const FILE_CHANGES_ALLOWED = 3;

const checkChangedResources = (numberChanged, limit, message) => {
  if (numberChanged > limit)
    throw new Error(message);
}

const mergeIfValidPlan = (data, github, repository) => {
  const { planDetails, prNumber, planSuccess } = data;
  if (!planSuccess) throw new Error('terraform plan failed');
  const { changedFiles, tfAdditions, tfUpdates, tfDeletions } = planDetails;
  const owner = repository.owner.login;
  const repo = repository.name;

  checkChangedResources(changedFiles, FILE_CHANGES_ALLOWED, 'too many files changed')
  checkChangedResources(tfAdditions, TF_ADDITIONS_ALLOWED, 'too many terraform resoures added')
  checkChangedResources(tfUpdates, TF_UPDATES_ALLOWED, 'too many terraform resoures updated')
  checkChangedResources(tfDeletions, TF_DELETIONS_ALLOWED, 'too many terraform resoures deleted')

  try {
    github.pulls.merge({
      owner,
      repo,
      pull_number: prNumber,
    });
    return [true, null]
  } catch (error) {
    return [false, error]
  }
};

module.exports = async ({ github, context }) => {
  const {
    payload: { pull_request, repository },
  } = context;
  const { changed_files: changedFiles, additions: prAdditions, deletions: prDeletions } = pull_request;
  const { PLAN, API_URL, PR_NUMBER, PLAN_OUTCOME, AUTHORIZATION, PR_LABELS } = process.env;
  const isAutoGenerated = JSON.parse(PR_LABELS).map(label => label.name).includes('auto_generated');
  console.log('===================', isAutoGenerated)
  if (!isAutoGenerated) return;
  try {
    console.log(API_URL, PLAN_OUTCOME, PR_NUMBER);

    const moduleMatchRegex = /# module.(.*?\n)/g;
    const resourceStrings = PLAN.match(moduleMatchRegex);
    const resources = [];

    resourceStrings &&
      resourceStrings.forEach((resource) => {
        const realm = realms.filter((realm) => resource.includes(`.${realm}.`));
        if (realm.length > 1) throw new Error('Matched multiple realms');

        const module = modules.filter((module) => resource.includes(`.${module}.`));
        if (module.length > 1) throw new Error('Matched multiple modules');

        const client = resource.match(/module.client_(.*?)(\.)/) ? resource.match(/module.client_(.*?)(\.)/)[1] : 0;
        const action = resource.match(/will be (.*?)(\n)/) ? resource.match(/will be (.*?)(\n)/)[1] : 0;

        const parsedResource = { module: module[0], client, realm: realm[0], action };
        resources.push(parsedResource);
      });
    const tfAdditions = PLAN.match(/Plan: (\d+) to add/) ? PLAN.match(/Plan: (\d+) to add/)[1] : 0;
    const tfUpdates = PLAN.match(/add, (\d+) to change/) ? PLAN.match(/add, (\d+) to change/)[1] : 0;
    const tfDeletions = PLAN.match(/change, (\d+) to destroy/) ? PLAN.match(/change, (\d+) to destroy/)[1] : 0;
    const planDetails = {
      changedFiles,
      prAdditions,
      prDeletions,
      resources,
      tfAdditions,
      tfUpdates,
      tfDeletions,
    };
    const data = {
      prNumber: PR_NUMBER,
      planSuccess: PLAN_OUTCOME !== 'failure',
      planDetails,
    };

    const [merged, error] = mergeIfValidPlan(data, github, repository);
    if (error) throw new Error(error);

    console.log('sending data,', JSON.stringify(data));
    await axios.put(`${API_URL}?status=plan`, data, { headers: { Authorization: AUTHORIZATION } });

  } catch (error) {
    await axios.put(
      `${API_URL}?status=plan`,
      { prNumber: PR_NUMBER, planSuccess: false, planDetails: {error} },
      { headers: { Authorization: AUTHORIZATION } }
    );
    return { error };
  }
};
