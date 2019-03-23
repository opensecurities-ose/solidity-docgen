### balanceOf  
?>get balance of user's token  
#### Params:  

- `_token` token address  
- `_user` user address  

#### Returns:  
the amount of token  

### cancelOrder  
?>cancel the order by user.  
#### Params:  

- `_amountGet` amountGet  
- `_amountGive` amountGive  
- `_base` the base token address  
- `_salt` the salt number of the order*  
- `_tokenGet` tokenGet address  
- `_tokenGive` tokenGive address  

### depositETH  
?>deposit ETH to this contract  
#### Params:  


### depositToken  
?>deposit token(security token which is compatible with erc20) to this contract.  
#### Params:  

- `_amount` amount to deposit  
- `_token` token address  

### generateOrderId  
?>generate the orderId from order info  
#### Params:  

- `amountGet` amountGet  
- `amountGive` amountGive  
- `base` the base token address  
- `salt` the salt number of the order*  
- `tokenGet` tokenGet address  
- `tokenGive` tokenGive address  

### modifyWithdrawBlock  
?>modify the block number of withdraw to wait.  
#### Params:  

- `_number` block number to wait  

### pause  
?>pause this contract to fill order when emergency.*  
#### Params:  


### registerToken  
?>register token as trade pair.only owner allowed.  
#### Params:  

- `_base` base token of trade pair.0 is ETH  
- `_quote` quote token.*  

### setRelayer  
?>set the relayer of the contract.  
#### Params:  

- `_bool` boolean to indicate that the relayer is enabled.  
- `_relayer` relayer address  

### settleOrder  
?>settle taker and maker's orders  
#### Params:  

- `_addresses` : - 0:token address of maker get; - 1:token address of taker get; - 2:token address of maker give; - 3:token address of  taker give; - 4:maker address; - 5:taker address; - 6:base token address of maker .default is 0 ,then base token is ETH; - 7:base token address of taker .default is 0 ,then base token is ETH;  
- `_makerSig` maker's signature in 65 bytes  
- `_takerSig` maker's signature in 65 bytes*  
- `_values` : - 0:amount of maker get - 1:amount of taker get - 2:amount of maker give - 3:amount of taker give - 4:fee(base token) that maker need to pay - 5:fee(base token) that taker need to pay - 6:maker's salt number - 7:taker's salt number - 8:amount of traded token  

### validateSignature  
?>valid the signature of _hash signed with _signer  
#### Params:  

- `_hash` hash to be signed  
- `_signature` signature provided*  
- `_signer` signer's address  

### withdraw  
?>withdraw token from this contract.when first call this method, user has to wait at least `WITHDRAW_BLOCK_NUM` blocks and call this method again to reclaim the tokens.  
#### Params:  

- `_amount` amount to withdraw  
- `_token` token address  

