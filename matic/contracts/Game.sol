// SPDX-License-Identifier: Copyright
pragma solidity >= 0.7.0 < 0.8.0;
pragma experimental ABIEncoderV2;

import '@openzeppelin/contracts/access/Ownable.sol';

contract Game is Ownable {

  constructor() public {
  }

  // TYPE DECLARATIONS
  struct NFT {
    uint id;
    string name;
    string image;
    string meme;
    address owner;
    bool active;
    uint timestamp;
  }

  mapping (uint => Person) personIdToPerson;

}
