pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract SolidityFirstExample {
     // this is "STATE" variable that is used to whole contract
    constructor() {}

    function getResult() public pure returns (uint256) {
        // bool status = true;  // this is local variable

        uint256 a = 10; // local variable
        uint256 b = 20;
        uint256 result = a + b;
        return result;
    }
}
