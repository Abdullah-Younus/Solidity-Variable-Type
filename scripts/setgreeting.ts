import { ContractTransaction } from "ethers";
import { ethers } from "hardhat";
import { Greeter__factory, Greeter } from '../typechain';

async function main() {
    const Greeter: Greeter__factory = await ethers.getContractFactory("Greeter");
    const greeter: Greeter = await Greeter.attach("0x8a565C93D5D49955597e834746C23A7909417627");

    console.log('Greeter Deployed at:', greeter.address);



    const result: ContractTransaction = await greeter.setGreeting("Set Greeting Change");

    console.log('The result after changing = ', result);


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});