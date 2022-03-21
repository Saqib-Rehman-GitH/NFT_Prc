// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import '@openzepplin/contracts/token/ERC721/ERC721.sol'
import '@openzepplin/contracts/utils/Counters.sol'
import '@openzepplin/contracts/access/Ownable.sol'
import '@openzepplin/contracts/token/ERC721/extensions/ERC721URIStorage.sol'

// - LIBRARIES 
// 1-dotenv -> connect Metamask And Alchemy.    


contract MyNFT is ERC721URIStorage , Ownable {

    using Counters from Counters.Counter;
    Counters.Counter private _tokenIds;
    constructor()ERC721("Saqib NFT","S NFT"){

    }


    //MINTING -> Creating NFT.
    function mintNFT(address recepient , string memory tokenURI) public onlyOwner return(uint256)
    {   
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recepient,newItemId); // api given by PROTOCOL ERC271 
        _setToeknURI(newItemId,tokenURI); // api Given by PROTOCOL ERC271.
        return newItemId;
    }
}