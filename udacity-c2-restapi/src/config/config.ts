export const config = {
  "dev": {
    "username": "postgres",
    "password": "hvn12345",
    "database": "nghiatest",
    "host": "database-1.cartndvtlykb.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "my-bukket"
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
