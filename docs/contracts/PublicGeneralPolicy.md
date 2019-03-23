### batchModifyWhitelist  
#### Params:  

- `_canTransfer` An array of boolean values  
- `_expiryTimes` An array of the moment till investors KYC will be validated. After that investor need to do re-KYC  
- `_fromTimes` An array of the moment when the sale lockup period ends and the investor can freely sell his tokens  
- `_investors` List of the addresses to whitelist  
- `_toTimes` An array of the moment when the purchase lockup period ends and the investor can freely purchase tokens from others  

### modifyWhitelist  
#### Params:  

- `_canTransfer` is used to know whether the investor is restricted investor or not.  
- `_expiryTime` is the moment till investors KYC will be validated. After that investor need to do re-KYC  
- `_fromTime` is the moment when the sale lockup period ends and the investor can freely sell his tokens  
- `_investor` is the address to whitelist  
- `_toTime` is the moment when the purchase lockup period ends and the investor can freely purchase tokens from others  

