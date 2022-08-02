//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

interface INFTcontract {
    function mint(string memory _tokenURI) external returns(uint);
}

contract MyNFT is ERC721URIStorage, INFTcontract {

    uint tokenAmount;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    function mint(string memory _tokenURI) public override returns (uint) {
        _mint(msg.sender, tokenAmount++);
        _setTokenURI(tokenAmount - 1, _tokenURI);
        return tokenAmount - 1;
    }
}
