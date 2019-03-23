>ERC-721 Non-Fungible Token Standard  
### approve  
?>The zero address indicates there is no approved address.  Throws unless `msg.sender` is the current NFT owner, or an authorized  operator of the current owner.  
#### Params:  

- `_approved` The new approved NFT controller  
- `_tokenId` The NFT to approve  

### balanceOf  
?>NFTs assigned to the zero address are considered invalid, and this  function throws for queries about the zero address.  
#### Params:  

- `_owner` An address for whom to query the balance  

#### Returns:  
The number of NFTs owned by `_owner`, possibly zero  

### getApproved  
?>Throws if `_tokenId` is not a valid NFT.  
#### Params:  

- `_tokenId` The NFT to find the approved address for  

#### Returns:  
The approved address for this NFT, or the zero address if there is none  

### isApprovedForAll  
#### Params:  

- `_operator` The address that acts on behalf of the owner  
- `_owner` The address that owns the NFTs  

#### Returns:  
True if `_operator` is an approved operator for `_owner`, false otherwise  

### ownerOf  
?>NFTs assigned to zero address are considered invalid, and queries  about them do throw.  
#### Params:  

- `_tokenId` The identifier for an NFT  

#### Returns:  
The address of the owner of the NFT  

### safeTransferFrom  
?>This works identically to the other function with an extra data parameter,  except this function just sets data to "".  
#### Params:  

- `_from` The current owner of the NFT  
- `_to` The new owner  
- `_tokenId` The NFT to transfer  

### safeTransferFrom  
?>Throws unless `msg.sender` is the current owner, an authorized  operator, or the approved address for this NFT. Throws if `_from` is  not the current owner. Throws if `_to` is the zero address. Throws if  `_tokenId` is not a valid NFT. When transfer is complete, this function  checks if `_to` is a smart contract (code size > 0). If so, it calls  `onERC721Received` on `_to` and throws if the return value is not  `bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`.  
#### Params:  

- `_from` The current owner of the NFT  
- `_to` The new owner  
- `_tokenId` The NFT to transfer  
- `data` Additional data with no specified format, sent in call to `_to`  

### setApprovalForAll  
?>Emits the ApprovalForAll event. The contract MUST allow  multiple operators per owner.  
#### Params:  

- `_approved` True if the operator is approved, false to revoke approval  
- `_operator` Address to add to the set of authorized operators  

### transferFrom  
?>Throws unless `msg.sender` is the current owner, an authorized  operator, or the approved address for this NFT. Throws if `_from` is  not the current owner. Throws if `_to` is the zero address. Throws if  `_tokenId` is not a valid NFT.  
#### Params:  

- `_from` The current owner of the NFT  
- `_to` The new owner  
- `_tokenId` The NFT to transfer  

