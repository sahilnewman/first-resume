terraform {
  required_providers {
    aws = {
      version =">=4.9.0"
      source = "hashicorp/aws"
    }
  }
}
provider "aws" {
  profile ="default"
  access_key = "AKIA6MO3FNN7E6S2XJGU"
  secret_key = "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"
  region = "ap-south-1"
}