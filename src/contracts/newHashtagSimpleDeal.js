export default [
  {
    constant: true,
    inputs: [],
    name: "payoutAddress",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x5b8d02d7"
  },
  {
    constant: true,
    inputs: [],
    name: "hashtagName",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x65dab005"
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x715018a6"
  },
  {
    constant: true,
    inputs: [],
    name: "reputationPerItem",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x7f64150a"
  },
  {
    constant: true,
    inputs: [],
    name: "hashtagMetadataHash",
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x822bbec6"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "providerReputation",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x88537d06"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x8da5cb5b"
  },
  {
    constant: true,
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x8f32d59b"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "seekerReputation",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x919ca595"
  },
  {
    constant: true,
    inputs: [],
    name: "deployBlock",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xa3ec191a"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "items",
    outputs: [
      {
        name: "status",
        type: "uint64"
      },
      {
        name: "replyCount",
        type: "uint64"
      },
      {
        name: "creationBlock",
        type: "uint128"
      },
      {
        name: "hashtagFee",
        type: "uint128"
      },
      {
        name: "itemValue",
        type: "uint128"
      },
      {
        name: "seekerAddress",
        type: "address"
      },
      {
        name: "providerAddress",
        type: "address"
      },
      {
        name: "itemMetadataHash",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xbfb231d2"
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xf2fde38b"
  },
  {
    constant: true,
    inputs: [],
    name: "hashtagFee",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xfb3b8a00"
  },
  {
    constant: true,
    inputs: [],
    name: "token",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xfc0c546a"
  },
  {
    inputs: [
      {
        name: "_token",
        type: "address"
      },
      {
        name: "_hashtagName",
        type: "string"
      },
      {
        name: "_hashtagFee",
        type: "uint256"
      },
      {
        name: "_hashtagMetadataHash",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        name: "itemId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "itemValue",
        type: "uint256"
      },
      {
        indexed: false,
        name: "itemMetadataHash",
        type: "bytes32"
      }
    ],
    name: "NewItem",
    type: "event",
    signature:
      "0x7ccb939cf84ae76ff9ca91207ea665114d27f6c234cc5aed47be6aec7a18728b"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "replier",
        type: "address"
      },
      {
        indexed: true,
        name: "itemId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "replyMetadataHash",
        type: "bytes32"
      }
    ],
    name: "ReplyItem",
    type: "event",
    signature:
      "0x983627e194bafca1ef6fab2aafea98bc198943608966760cad4c1f060535b6ab"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "itemId",
        type: "uint256"
      },
      {
        indexed: false,
        name: "status",
        type: "uint8"
      },
      {
        indexed: false,
        name: "providerAddress",
        type: "address"
      }
    ],
    name: "ItemChange",
    type: "event",
    signature:
      "0x763e78637c521d196616bd4390794feffa55732e03b6b5971c9fadb95650ecc8"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "payoutAddress",
        type: "address"
      }
    ],
    name: "PayoutAddressSet",
    type: "event",
    signature:
      "0x8442bcb3c78bbc2d0a1a10dd2c2ba99ef8058b97c2843a976f7ca7edbfe9d3f1"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "hashtagFee",
        type: "uint256"
      }
    ],
    name: "HashtagFeeSet",
    type: "event",
    signature:
      "0xe58612d3ec26074dcda06c8554cb4bba8d8292c2a88d634c83f58edc316eee78"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "hashtagMetadataHash",
        type: "bytes32"
      }
    ],
    name: "MetadataHashSet",
    type: "event",
    signature:
      "0xc5900deaecce8c58edbdd0726968f722e08cc4390ffd6c41c54bc82b2f5d7ef0"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event",
    signature:
      "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_payoutAddress",
        type: "address"
      }
    ],
    name: "setPayoutAddress",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x33ea51a8"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_newHashtagFee",
        type: "uint256"
      }
    ],
    name: "setHashtagFee",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xe94176d0"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_hashtagMetadataHash",
        type: "bytes32"
      }
    ],
    name: "setMetadataHash",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x90578c81"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_msgsender",
        type: "address"
      },
      {
        name: "_amount",
        type: "uint256"
      },
      {
        name: "_extraData",
        type: "bytes"
      }
    ],
    name: "onTokenTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xa4c0ed36"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_itemId",
        type: "uint256"
      },
      {
        name: "_replyMetadataHash",
        type: "bytes32"
      }
    ],
    name: "replyItem",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xdd970edf"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_itemId",
        type: "uint256"
      },
      {
        name: "_selectedReplier",
        type: "address"
      }
    ],
    name: "selectReplier",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x90c045df"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_itemId",
        type: "uint256"
      }
    ],
    name: "payoutItem",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x46b6b069"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_itemId",
        type: "uint256"
      }
    ],
    name: "cancelItem",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x51563f8e"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_itemId",
        type: "uint256"
      }
    ],
    name: "disputeItem",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x738e2d26"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_itemId",
        type: "uint256"
      },
      {
        name: "_seekerFraction",
        type: "uint256"
      }
    ],
    name: "resolveItem",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xdf376ea7"
  },
  {
    constant: true,
    inputs: [],
    name: "getItemCount",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x7749cf23"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_itemId",
        type: "uint256"
      }
    ],
    name: "getItem",
    outputs: [
      {
        name: "_status",
        type: "uint64"
      },
      {
        name: "_replyCount",
        type: "uint64"
      },
      {
        name: "_creationBlock",
        type: "uint128"
      },
      {
        name: "_hashtagFee",
        type: "uint128"
      },
      {
        name: "_itemValue",
        type: "uint128"
      },
      {
        name: "_seekerAddress",
        type: "address"
      },
      {
        name: "_providerAddress",
        type: "address"
      },
      {
        name: "_itemMetadataHash",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x3129e773"
  }
];
