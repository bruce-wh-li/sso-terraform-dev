module "client_feb-3-test-team-access-to-files-4951" {
  source      = "github.com/bcgov/sso-terraform-keycloak-client?ref=dev"
  realm_id    = data.keycloak_realm.this.id
  client_name = "feb-3-test-team-access-to-files-4951"
  valid_redirect_uris = [
    "http://www.test.ca"
  ]
  description                = "CSS App Created"
  access_type                = "PUBLIC"
  pkce_code_challenge_method = "S256"
  web_origins = [
    "http://www.test.ca",
    "+"
  ]
}
