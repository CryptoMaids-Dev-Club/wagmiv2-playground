import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EnsRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const ensRegistryAbi = [
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'node', type: 'bytes32' }],
    name: 'resolver',
    outputs: [{ name: '', type: 'address' }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'node', type: 'bytes32' }],
    name: 'owner',
    outputs: [{ name: '', type: 'address' }],
  },
  {
    constant: false,
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'node', type: 'bytes32' },
      { name: 'label', type: 'bytes32' },
      { name: 'owner', type: 'address' },
    ],
    name: 'setSubnodeOwner',
    outputs: [],
  },
  {
    constant: false,
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'node', type: 'bytes32' },
      { name: 'ttl', type: 'uint64' },
    ],
    name: 'setTTL',
    outputs: [],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'node', type: 'bytes32' }],
    name: 'ttl',
    outputs: [{ name: '', type: 'uint64' }],
  },
  {
    constant: false,
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'node', type: 'bytes32' },
      { name: 'resolver', type: 'address' },
    ],
    name: 'setResolver',
    outputs: [],
  },
  {
    constant: false,
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'node', type: 'bytes32' },
      { name: 'owner', type: 'address' },
    ],
    name: 'setOwner',
    outputs: [],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', type: 'bytes32', indexed: true },
      { name: 'owner', type: 'address', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', type: 'bytes32', indexed: true },
      { name: 'label', type: 'bytes32', indexed: true },
      { name: 'owner', type: 'address', indexed: false },
    ],
    name: 'NewOwner',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', type: 'bytes32', indexed: true },
      { name: 'resolver', type: 'address', indexed: false },
    ],
    name: 'NewResolver',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'node', type: 'bytes32', indexed: true },
      { name: 'ttl', type: 'uint64', indexed: false },
    ],
    name: 'NewTTL',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const ensRegistryAddress = {
  1: '0x314159265dD8dbb310642f98f50C066173C1259b',
  11155111: '0x112234455C3a32FD11230C42E7Bccd4A84e02010',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const ensRegistryConfig = {
  address: ensRegistryAddress,
  abi: ensRegistryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensRegistryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useReadEnsRegistry = /*#__PURE__*/ createUseReadContract({
  abi: ensRegistryAbi,
  address: ensRegistryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"resolver"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useReadEnsRegistryResolver = /*#__PURE__*/ createUseReadContract({
  abi: ensRegistryAbi,
  address: ensRegistryAddress,
  functionName: 'resolver',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useReadEnsRegistryOwner = /*#__PURE__*/ createUseReadContract({
  abi: ensRegistryAbi,
  address: ensRegistryAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"ttl"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useReadEnsRegistryTtl = /*#__PURE__*/ createUseReadContract({
  abi: ensRegistryAbi,
  address: ensRegistryAddress,
  functionName: 'ttl',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useWriteEnsRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: ensRegistryAbi,
  address: ensRegistryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setSubnodeOwner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useWriteEnsRegistrySetSubnodeOwner =
  /*#__PURE__*/ createUseWriteContract({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    functionName: 'setSubnodeOwner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setTTL"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useWriteEnsRegistrySetTtl = /*#__PURE__*/ createUseWriteContract({
  abi: ensRegistryAbi,
  address: ensRegistryAddress,
  functionName: 'setTTL',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setResolver"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useWriteEnsRegistrySetResolver =
  /*#__PURE__*/ createUseWriteContract({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    functionName: 'setResolver',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setOwner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useWriteEnsRegistrySetOwner = /*#__PURE__*/ createUseWriteContract(
  {
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    functionName: 'setOwner',
  },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useSimulateEnsRegistry = /*#__PURE__*/ createUseSimulateContract({
  abi: ensRegistryAbi,
  address: ensRegistryAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setSubnodeOwner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useSimulateEnsRegistrySetSubnodeOwner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    functionName: 'setSubnodeOwner',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setTTL"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useSimulateEnsRegistrySetTtl =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    functionName: 'setTTL',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setResolver"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useSimulateEnsRegistrySetResolver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    functionName: 'setResolver',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"setOwner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useSimulateEnsRegistrySetOwner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    functionName: 'setOwner',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensRegistryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useWatchEnsRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensRegistryAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useWatchEnsRegistryTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensRegistryAbi}__ and `eventName` set to `"NewOwner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useWatchEnsRegistryNewOwnerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    eventName: 'NewOwner',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensRegistryAbi}__ and `eventName` set to `"NewResolver"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useWatchEnsRegistryNewResolverEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    eventName: 'NewResolver',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensRegistryAbi}__ and `eventName` set to `"NewTTL"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x112234455c3a32fd11230c42e7bccd4a84e02010)
 */
export const useWatchEnsRegistryNewTtlEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    eventName: 'NewTTL',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })
