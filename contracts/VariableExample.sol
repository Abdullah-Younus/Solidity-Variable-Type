pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract VariableExample {
   uint storeData;  // state variable
    constructor() {
        storeData = 10;
    }

    function check() public view returns (uint256) {
        uint256 a = 1; // local Variable
        uint256 b = 2;
        uint256 result = a + b;
        return  result+storeData; // access the state variable
    }
}


