>store contract of the protocol.all recodes store here  
### balanceOf  
?>get balance of user's token  
#### Params:  

- `_token` token address  
- `_user` user address  

#### Returns:  
the amount of token  

### depositETH  
?>deposit ETH to this contract  
#### Params:  


### depositToken  
?>deposit token(security token which is compatible with erc20) to this contract.  
#### Params:  

- `_amount` amount to deposit  
- `_token` token address  

### withdraw  
?>withdraw token from this contract.when first call this method, user has to wait at least `WITHDRAW_BLOCK_NUM` blocks and call this method again to reclaim the tokens.  
#### Params:  

- `_amount` amount to withdraw  
- `_token` token address  

