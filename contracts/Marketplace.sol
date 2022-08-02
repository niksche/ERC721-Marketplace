//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC721.sol";

contract Marketplace {
    address NFT; 

    constructor(address _nft) {
        NFT = _nft;
    }

    function createItem(string memory _URI) public returns(uint) {
        return INFTcontract(NFT).mint(_URI);
    }
}


// Test: create instanse of mp
// crete instance of nft
// mint token