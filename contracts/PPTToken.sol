//SPDX-License-Identifier: MIT

pragma solidity 0.8.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PPTToken is ERC20 {
    constructor() ERC20("Passport", "PPT") {
        _mint(msg.sender, 1000000 * 10**18);
    }

    function mintMinerReward() public {
        _mint(block.coinbase, 1);
    }
}
