module "client_asdfasdf-5" {
  source      = "github.com/bcgov/sso-terraform-keycloak-client?ref=dev"
  realm_id    = data.keycloak_realm.this.id
  client_name = "asdfasdf-5"
  valid_redirect_uris = [
    "http://localhost:3000",
    "http://localhost:3001"
  ]
  description                = "CSS App Created"
  access_type                = "PUBLIC"
  pkce_code_challenge_method = "S256"
  web_origins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "+"
  ]
}
