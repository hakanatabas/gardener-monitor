export default [
  {
    constant: true,
    inputs: [],
    name: 'trustedServer',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: '_trustedServer',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'id',
        type: 'bytes32',
      },
      {
        indexed: false,
        name: 'url',
        type: 'string',
      },
    ],
    name: 'DataRequested',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'id',
        type: 'bytes32',
      },
      {
        indexed: false,
        name: 'url',
        type: 'string',
      },
      {
        indexed: false,
        name: 'validFrom',
        type: 'uint256',
      },
    ],
    name: 'DelayedDataRequested',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'id',
        type: 'bytes32',
      },
      {
        indexed: false,
        name: 'value',
        type: 'string',
      },
      {
        indexed: false,
        name: 'errorCode',
        type: 'uint256',
      },
    ],
    name: 'RequestFulfilled',
    type: 'event',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_url',
        type: 'string',
      },
    ],
    name: 'request',
    outputs: [
      {
        name: 'id',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_url',
        type: 'string',
      },
      {
        name: '_delay',
        type: 'uint256',
      },
    ],
    name: 'delayedRequest',
    outputs: [
      {
        name: 'id',
        type: 'bytes32',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: '_id',
        type: 'bytes32',
      },
      {
        name: '_value',
        type: 'string',
      },
      {
        name: '_errorCode',
        type: 'uint256',
      },
    ],
    name: 'fillRequest',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
