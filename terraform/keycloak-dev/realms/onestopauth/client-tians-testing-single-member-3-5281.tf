module "client_tians-testing-single-member-3-5281" {
  source      = "github.com/bcgov/sso-terraform-keycloak-client?ref=dev"
  realm_id    = data.keycloak_realm.this.id
  client_name = "tians-testing-single-member-3-5281"
  valid_redirect_uris = [
    "https://exampleddd"
  ]
  description = "CSS App Created"
}
