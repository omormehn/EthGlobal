// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    uint256 constant initialSupply = 1000000000 * (10**18);
    constructor() ERC20("Hackathon", "KBM") {
        _mint(msg.sender, initialSupply);
    }
}