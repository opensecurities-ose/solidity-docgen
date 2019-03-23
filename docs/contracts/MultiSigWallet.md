>Multisignature wallet - Allows multiple parties to agree on transactions before execution.  
### addOwner  
?>Allows to add a new owner. Transaction has to be sent by wallet.  
#### Params:  

- `owner` Address of new owner.  

### changeRequirement  
?>Allows to change the number of required confirmations. Transaction has to be sent by wallet.  
#### Params:  

- `_required` Number of required confirmations.  

### confirmTransaction  
?>Allows an owner to confirm a transaction.  
#### Params:  

- `transactionId` Transaction ID.  

### executeTransaction  
?>Allows anyone to execute a confirmed transaction.  
#### Params:  

- `transactionId` Transaction ID.  

### getConfirmationCount  
?>Returns number of confirmations of a transaction.  
#### Params:  

- `transactionId` Transaction ID.  

#### Returns:  
Number of confirmations.  

### getConfirmations  
?>Returns array with owner addresses, which confirmed transaction.  
#### Params:  

- `transactionId` Transaction ID.  

#### Returns:  
Returns array of owner addresses.  

### getOwners  
?>Returns list of owners.  
#### Params:  


#### Returns:  
List of owner addresses.  

### getTransactionCount  
?>Returns total number of transactions after filers are applied.  
#### Params:  

- `executed` Include executed transactions.  
- `pending` Include pending transactions.  

#### Returns:  
Total number of transactions after filters are applied.  

### getTransactionIds  
?>Returns list of transaction IDs in defined range.  
#### Params:  

- `executed` Include executed transactions.  
- `from` Index start position of transaction array.  
- `pending` Include pending transactions.  
- `to` Index end position of transaction array.  

#### Returns:  
Returns array of transaction IDs.  

### isConfirmed  
?>Returns the confirmation status of a transaction.  
#### Params:  

- `transactionId` Transaction ID.  

#### Returns:  
Confirmation status.  

### removeOwner  
?>Allows to remove an owner. Transaction has to be sent by wallet.  
#### Params:  

- `owner` Address of owner.  

### replaceOwner  
?>Allows to replace an owner with a new owner. Transaction has to be sent by wallet.  
#### Params:  

- `newOwner` Address of new owner.  
- `owner` Address of owner to be replaced.  

### revokeConfirmation  
?>Allows an owner to revoke a confirmation for a transaction.  
#### Params:  

- `transactionId` Transaction ID.  

### submitTransaction  
?>Allows an owner to submit and confirm a transaction.  
#### Params:  

- `data` Transaction data payload.  
- `destination` Transaction target address.  
- `value` Transaction ether value.  

#### Returns:  
Returns transaction ID.  

