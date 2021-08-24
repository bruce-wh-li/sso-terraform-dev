module "client_testprojectjunmin-2222-aaaaeaav-39" {
  source      = "github.com/bcgov/sso-terraform-keycloak-client?ref=dev"
  realm_id    = data.keycloak_realm.this.id
  client_name = "testprojectjunmin-2222-aaaaeaav-39"
  valid_redirect_uris = [
    "http://localhost:1000"
  ]
}
