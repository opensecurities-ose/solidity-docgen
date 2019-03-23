>Dividents for bonds security token  
### balanceOf  
?>get balance of user's token  
#### Params:  

- `_token` token address  
- `_user` user address  

#### Returns:  
the amount of token  

### claim  
?>claim dividents  
#### Params:  

- `_token` token to claim  

### config  
?>config  
#### Params:  


### depositETH  
?>deposit ETH to this contract  
#### Params:  


### depositToken  
?>deposit token(security token which is compatible with erc20) to this contract.  
#### Params:  

- `_amount` amount to deposit  
- `_token` token address  

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

### withdraw  
?>withdraw token from this contract.when first call this method, user has to wait at least `WITHDRAW_BLOCK_NUM` blocks and call this method again to reclaim the tokens.  
#### Params:  

- `_amount` amount to withdraw  
- `_token` token address  

