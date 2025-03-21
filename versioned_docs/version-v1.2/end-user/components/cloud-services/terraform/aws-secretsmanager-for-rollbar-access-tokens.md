---
title:  AWS SECRETSMANAGER-FOR-ROLLBAR-ACCESS-TOKENS
---

## Description

Terraform module creating a SecretsManager for Rollbar project access tokens

## Specification


### Properties

 Name | Description | Type | Required | Default 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 tags | Tags which will be assigned to all resources. | map(string) | false |  
 name_prefix | Name prefix for the SecretsManager. The full name will be ${var.name_prefix}.rollbar_access_tokens. | string | true |  
 rollbar_project_name | Name of the Rollbar project to load the project access tokens from. | string | true |  
 rollbar_access_token_names | List of name of Rollbar access tokens which shall be loaded into the SecretsManager. | list(string) | false |  
 writeConnectionSecretToRef | The secret which the cloud resource connection will be written to | [writeConnectionSecretToRef](#writeConnectionSecretToRef) | false |  


#### writeConnectionSecretToRef

 Name | Description | Type | Required | Default 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 name | The secret name which the cloud resource connection will be written to | string | true |  
 namespace | The secret namespace which the cloud resource connection will be written to | string | false |  
