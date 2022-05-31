import { ethers } from "hardhat";
import { SolidityFirstExample__factory, SolidityFirstExample } from '../typechain';
async function main() {
    const SolidityFirstExample: SolidityFirstExample__factory = await ethers.getContractFactory("SolidityFirstExample");
    const solidityFirstExample: SolidityFirstExample = await SolidityFirstExample.deploy();

    await solidityFirstExample.deployed();

    console.log("Solidity Test deployed at :", solidityFirstExample.address);

    const result = await solidityFirstExample.getResult();

    console.log("Sum Result IS :", result.toString());

}


main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
})
