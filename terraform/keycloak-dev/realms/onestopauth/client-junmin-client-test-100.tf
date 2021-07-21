module "client_junmin-client-test-100" {
  source      = "../../../modules/openid-client"
  realm_id    = data.keycloak_realm.this.id
  client_name = "junmin-client-test-100"
  valid_redirect_uris = [
    "http://example.com"
  ]
}
