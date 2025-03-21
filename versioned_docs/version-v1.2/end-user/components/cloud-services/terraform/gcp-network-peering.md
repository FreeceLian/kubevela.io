---
title:  Gcp-Network-Peering
---

## Description

GCP Network-Peering

## Specification


### Properties

 Name | Description | Type | Required | Default 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 cluster_name | Name of the DC/OS cluster |  | true |  
 local_network_name | Local network name, used for naming the peering | string | true |  
 local_network_self_link | Local network self_link | string | true |  
 remote_network_name | Remote network name, used for naming the peering | string | true |  
 remote_network_self_link | Remote network self_link | string | true |  
 wait_for_peering_id | The peering ID we need to wait for, before we can create another peering |  | false |  
 writeConnectionSecretToRef | The secret which the cloud resource connection will be written to | [writeConnectionSecretToRef](#writeConnectionSecretToRef) | false |  


#### writeConnectionSecretToRef

 Name | Description | Type | Required | Default 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 name | The secret name which the cloud resource connection will be written to | string | true |  
 namespace | The secret namespace which the cloud resource connection will be written to | string | false |  
