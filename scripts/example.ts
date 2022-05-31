import { ethers } from "hardhat";
import { VariableExample, VariableExample__factory } from '../typechain';
async function main() {
    const VariableExample: VariableExample__factory = await ethers.getContractFactory("VariableExample");
    const variableexample: VariableExample = await VariableExample.deploy();


    await variableexample.deployed();

    console.log("THe Result is :", variableexample.address);

    const finalResult = variableexample.check();

    console.log('Final Result this is :', finalResult);

}