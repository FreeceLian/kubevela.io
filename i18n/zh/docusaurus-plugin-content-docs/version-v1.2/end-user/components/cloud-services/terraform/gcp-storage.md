---
title:  Gcp-Storage
---

## 描述

A basic terraform module example, which the example uses for a helm repo

## 参数说明


### 属性

 名称 | 描述 | 类型 | 是否必须 | 默认值 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 acl | Flag to create and ACL or not, alternative is to use a bucket policy/binding | number | false |  
 kms_key | Which key to encrypt with | string | false |  
 force_destroy | Flag to set to destroy buckets with content | bool | false |  
 project | The GCP projec name | string | true |  
 predefined_acl |  | string | false |  
 versioning |  | map(any) | false |  
 bucket_name | The name of the bucket | string | true |  
 location | Where the bucket is | string | false |  
 binding_role |  |  | true |  
 binding_members |  |  | true |  
 common_tags | This is to help you add tags to your cloud objects | map(any) | true |  
 writeConnectionSecretToRef | The secret which the cloud resource connection will be written to | [writeConnectionSecretToRef](#writeConnectionSecretToRef) | false |  


#### writeConnectionSecretToRef

 名称 | 描述 | 类型 | 是否必须 | 默认值 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 name | The secret name which the cloud resource connection will be written to | string | true |  
 namespace | The secret namespace which the cloud resource connection will be written to | string | false |  
