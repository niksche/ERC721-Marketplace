import { ContractReceipt, ContractTransaction, Transaction } from "ethers";
import { task } from "hardhat/config";

import myNFTAbi from "../artifacts/contracts/ERC721.sol/MyNFT.json"

task("mint", "mints the nft based on the someone who called it")
    .addParam("address", "the address of nft to mint")
    .addParam("tokenuri", "tokenURI to set")
    .setAction( async (taskArgs, hre) => {
    const [owner, account1] = await hre.ethers.getSigners();


    // const provider = new hre.ethers.providers.JsonRpcProvider();

    // const iface = new hre.ethers.utils.Interface(myNFTAbi.abi);

    // const providerCode = await provider.getCode(taskArgs.contractAddress);

    // if (providerCode) {
    //     if (providerCode === "0x") {
    //       console.log("Contract with such an address does not exist");
    //       return;
    //     }
    //   }

    console.log("owner is", owner.address);
    console.log("account 1 is", account1.address);
    // console.log("heh:", myNFTAbi.abi);
    const nftContract = new hre.ethers.Contract(taskArgs.address, myNFTAbi.abi, owner);

    // const data = 

    const transferTx: ContractTransaction = await nftContract.connect(owner).mint(taskArgs.tokenuri);

    // const heh = await data.wait();
    console.log("data:", transferTx);

// ``
    // const receipt: ContractReceipt = await data.wait();


    // step1. Get contract instance;

    // step2. Call the mint method, pass the parameters;
    
})