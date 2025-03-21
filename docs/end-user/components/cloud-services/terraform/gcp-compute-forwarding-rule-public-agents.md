---
title:  Gcp-Compute-Forwarding-Rule-Public-Agents
---

## Description

This module creates an GCP forwarding rule for DC/OS public agents

## Specification


### Properties

 Name | Description | Type | Required | Default 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 additional_rules | List of additional rules |  | false |  
 labels | Add custom labels to all resources | map | false |  
 disable | Do not create load balancer and its resources |  | false |  
 name_prefix | Name Prefix |  | false |  
 cluster_name | Name of the DC/OS cluster |  | true |  
 name_format | printf style format for naming the ELB. Gets truncated to 32 characters. (input cluster_name) |  | false |  
 public_agents_self_link | List of public agent instances self links | list | false |  
 writeConnectionSecretToRef | The secret which the cloud resource connection will be written to | [writeConnectionSecretToRef](#writeConnectionSecretToRef) | false |  


#### writeConnectionSecretToRef

 Name | Description | Type | Required | Default 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 name | The secret name which the cloud resource connection will be written to | string | true |  
 namespace | The secret namespace which the cloud resource connection will be written to | string | false |  
