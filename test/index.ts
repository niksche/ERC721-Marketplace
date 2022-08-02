import { expect } from "chai";
import { ContractReceipt, ContractTransaction } from "ethers";
import { ethers } from "hardhat";

describe("ERC721", function () {
  it("Should return proper name and symbol for the contract", async function () {
    const nftConctract = await ethers.getContractFactory("MyNFT");
    const _nft = await nftConctract.deploy("Shitty token", 'f');

    const deplTo = await _nft.deployed();

    console.log("deplTo: ", deplTo.address);

    const name = await _nft.name();
    console.log("name", name);

    const mpContract = await ethers.getContractFactory("Marketplace");

    const _mp = await mpContract.deploy(deplTo.address);

    const deplto2 = await _mp.deployed();
    console.log("deplTo: ", deplto2.address);


    const createItemTx: ContractTransaction = await deplto2.createItem("ipfs://QmPF2wahpCZgu8ZbeHVqoBvNL1rwNYurX1QNjSJzLZR1Gc");

    const txReceipt: ContractReceipt = await createItemTx.wait();


    const token0URI = await _nft.tokenURI(0);
    console.log("token0URI", token0URI);




    // // Gotta use specific link so openSea could easyly catch the file
    // const tx: ContractTransaction = await _nft.mint("ipfs://QmPF2wahpCZgu8ZbeHVqoBvNL1rwNYurX1QNjSJzLZR1Gc");
    // console.log("tx", tx);

    // const txReceipt: ContractReceipt = await tx.wait();

    // console.log("receipt: ", txReceipt);

    // const tokenURItx: string = await _nft.tokenURI(0);

    // console.log("TOKENURI IS ", tokenURItx);





  });
});
