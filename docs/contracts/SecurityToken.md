>Security Token contract  
### addRole  
?>add a role to an address  
#### Params:  

- `_action` the name of the role  
- `_operator` address of operator  

### allowance  
?>Function to check the amount of mocks that an owner allowed to a spender.  
#### Params:  

- `_owner` address The address which owns the funds.  
- `_spender` address The address which will spend the funds.  

#### Returns:  
A uint256 specifying the amount of mocks still available for the spender.  

### allowanceTransfer  
?>Function to check the amount of mocks that an owner allowed to a operator.  
#### Params:  

- `_operator` address The address which will operate the funds.  
- `_owner` address The address which owns the funds.  

#### Returns:  
A uint256 specifying the amount of mocks still available for the spender.  

### allowanceTransferTranche  
?>Function to check the amount of mocks that an owner allowed to a operator.  
#### Params:  

- `_operator` address The address which will operate the funds.  
- `_owner` address The address which owns the funds.  
- `_tranche` The tranche to allow the operate  

#### Returns:  
A uint256 specifying the amount of mocks still available for the spender.  

### approve  
?>Approve the passed address to spend the specified amount of mocks on behalf of msg.sender. Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729  
#### Params:  

- `_spender` The address which will spend the funds.  
- `_value` The amount of mocks to be spent.  

### approveTransfer  
?>Approve the passed address to operate the specified amount of mocks on behalf of msg.sender. Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729  
#### Params:  

- `_operator` The address which will operate the funds.  
- `_value` The amount of mocks to be spent.  

### approveTransferTranche  
?>Approve the passed address to operate the specified amount of mocks on behalf of msg.sender. Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729  
#### Params:  

- `_operator` The address which will operate the funds.  
- `_tranche` The tranche to allocate the saving balance  
- `_value` The amount of mocks to be spent.  

### balanceOf  
#### Params:  

- `_owner` An address for whom to query the balance  

#### Returns:  
The number of mocks owned by `_owner`, possibly zero  

### balanceOfAll  
#### Params:  

- `_owner` An address for whom to query the balance  

#### Returns:  
The number of mocks owned by `_owner`, possibly zero  

### balanceOfTranche  
#### Params:  

- `_owner` An address for whom to query the balance  
- `_tranche` The tranche for which to query the balance  

#### Returns:  
The number of mocks owned by `_owner` with the metadata associated with `_tranche`, possibly zero  

### batchMint  
?>Can only be called by the owner or STO attached to the token.  
#### Params:  

- `_investors` A list of addresses to whom the minted tokens will be dilivered  
- `_values` A list of number of tokens get minted and transfer to corresponding address of the investor from _investor[] list  

#### Returns:  
success  

### batchMintTranche  
?>Can only be called by the owner or STO attached to the token.  
#### Params:  

- `_investors` A list of addresses to whom the minted tokens will be dilivered  
- `_values` A list of number of tokens get minted and transfer to corresponding address of the investor from _investor[] list  

#### Returns:  
success  

### batchTransferTranche  
#### Params:  

- `_to` receiver of transfer  
- `_values` value of transfer  

#### Returns:  
bool success  

### changeGranularity  
#### Params:  

- `_granularity` granularity level of the token  

### changeTranche  
#### Params:  

- `_data` data to indicate validation  
- `_from` tranche from which to take mocks  
- `_to` tranche where to send mocks  
- `_value` amount of mocks to transfer  

### checkRole  
#### Params:  

- `_action` the name of the role  
- `_operator` address of operator  

### forceBurn  
#### Params:  

- `_data` data to indicate validation  
- `_from` address from which to take mocks  
- `_tranche` The tranche to allocate the increase in balance  
- `_value` amount of mocks to transfer  

### forceTransfer  
#### Params:  

- `_data` data to indicate validation  
- `_from` address from which to take mocks  
- `_to` address where to send mocks  
- `_tranche` The tranche to allocate the increase in balance  
- `_value` amount of mocks to transfer  

### getInvestorCount  
#### Params:  


#### Returns:  
Investor count  

### getPolicy  
#### Params:  

- `_tranche` address of policy  

### getTrancheTotalSupply  
#### Params:  

- `_tranche` The tranche for which to query the TotalSupply  

#### Returns:  
The number of tranche, possibly zero  

### iterateInvestors  
#### Params:  

- `_end` Position of investor to stop iteration at  
- `_start` Position of investor to start iteration from  

#### Returns:  
list of investors  

### mint  
#### Params:  

- `_investor` Address where the minted mocks will be delivered  
- `_value` Number of mocks be minted  

#### Returns:  
bool success  

### mintTranche  
#### Params:  

- `_data` data to indicate validation  
- `_investor` Address where the minted mocks will be delivered  
- `_tranche` The tranche to allocate the increase in balance  
- `_value` Number of mocks be minted  

#### Returns:  
bool success  

### registryPolicy  
#### Params:  

- `_policy` address of policy  

### removeRole  
?>remove a role from an address  
#### Params:  

- `_action` the name of the role  
- `_operator` address of operator  

### transfer  
#### Params:  

- `_to` receiver of transfer  
- `_value` value of transfer  

#### Returns:  
bool success  

### transferFrom  
#### Params:  

- `_from` sender of transfer  
- `_to` receiver of transfer  
- `_value` value of transfer  

#### Returns:  
bool success  

