Standard ERC20 token
Implementation of the basic standard token.https://github.com/ethereum/EIPs/issues/20
#### allowance(address,address)
Function to check the amount of mocks a spender is allowed to spend
##### Params:
            {"_owner":"address The address which owns the mocks","_spender":"address The address which will spend the mocks"}
##### Returns:
          A uint256 specifying the amount of mocks left available for the spender

#### approve(address,uint256)
Approves the passed address to spend the specified amount of mocks on behalf of msg.sender    * Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to reduce the spender's allowance to 0 first and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
##### Params:
            {"_spender":"The address which will spend the funds","_value":"The amount of mocks to be spent"}

#### balanceOf(address)
Returns the balance of the specified address
##### Params:
            {"_owner":"The address to query the the balance of"}
##### Returns:
          An uint256 representing the amount owned by the passed address

#### constructor
Constructor for token creationAssigns the totalSupply to the token contract
##### Params:
            undefined

#### decreaseApproval(address,uint256)
Decreases the amount of mocks that an owner has allowed a spender to spend    * approve should be called when allowed[_spender] == 0. To decrement allowed value, it is better to use this function to avoid 2 calls (and wait until the first transaction is mined) From MonolithDAO Token.sol
##### Params:
            {"_spender":"The address which will spend the funds","_subtractedValue":"The amount of mocks to decrease the allowance by"}

#### increaseApproval(address,uint256)
Increases the amount of mocks that an owner has allowed a spender to spend    * approve should be called when allowed[_spender] == 0. To increment allowed value, it is better to use this function to avoid 2 calls (and wait until the first transaction is mined) From MonolithDAO Token.sol
##### Params:
            {"_addedValue":"The amount of mocks to increase the allowance by.","_spender":"The address which will spend the funds."}

#### transfer(address,uint256)
Transfer token to a specified address
##### Params:
            {"_to":"The address to transfer mocks to","_value":"The amount to be transferred"}

#### transferFrom(address,address,uint256)
Transfers mocks from one address to another
##### Params:
            {"_from":"address The address to transfer mocks from","_to":"address The address to transfer mocks to","_value":"uint256 The amount of mocks to be transferred"}

