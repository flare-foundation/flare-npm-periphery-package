# Flare Smart Contracts Periphery

This package contains ABIs and addresses for smart contracts deployed on [Flare networks](https://dev.flare.network/network/solidity-reference):

- Flare Mainnet
- Songbird Canary Network
- Songbird Testnet Coston
- Flare Testnet Coston2

## Installation

```bash
npm install @flarenetwork/flare-periphery-contract
# or
yarn add @flarenetwork/flare-periphery-contract
```

## Features

### Top Level Exports

#### ABI Access Functions

- `nameToAbi(name: string, network: string): any` - get full smart contract functionality;
- `interfaceToAbi(name: string, network: string): any` - interact with the contract's public API.

Both functions return an ABI array. The `network` parameter must be one of: 

- `"coston"`
- `"coston2"`
- `"songbird"`
- `"flare"`

```typescript
import { nameToAbi, interfaceToAbi } from "@flarenetwork/flare-periphery-contract";

const fullAbi = nameToAbi("FtsoManager", "flare");
const interfaceAbi = interfaceToAbi("IFtsoManager", "flare");
```

#### Address Resolution

- `nameToAddress(name: string, provider: ethers.JsonRpcApiProvider): Promise<string>`
- `namesToAddresses(names: string[], provider: ethers.JsonRpcApiProvider): Promise<string[]>`

These functions fetch contract addresses from the on-chain FlareContractRegistryLibrary.

```typescript
import { nameToAddress } from "@flarenetwork/flare-periphery-contract";
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://flare-api.flare.network/ext/C/rpc");
const address = await nameToAddress("FtsoManager", provider);
```

#### Constants

- `FlareContractRegistryAddress`: Hardcoded registry address (same for all chains)

### Network-Specific Namespaces

Each network (`coston`, `coston2`, `flare`, `songbird`) exports:

#### 1. Products

Access contract information through `.ContractName` syntax:

```typescript
import { flare } from "@flarenetwork/flare-periphery-contract";

const ftsoManager = flare.products.FtsoManager;
console.log(ftsoManager.name);        // Contract name
console.log(ftsoManager.interface);   // Interface name
console.log(ftsoManager.abi);         // Contract ABI

// Get deployed address
const address = await ftsoManager.getAddress(provider);
```

#### 2. Interface ABIs

Access interface ABIs using `.InterfaceName` syntax:

```typescript
import { flare } from "@flarenetwork/flare-periphery-contract";

const abi = flare.interfaceAbis.IFtsoManager;
```

#### 3. Network-Specific ABI Functions

It is same as top-level functions but with the pre-set network:

```typescript
import { flare } from "@flarenetwork/flare-periphery-contract";

const abi = flare.nameToAbi("FtsoManager");      // Network already known
const iAbi = flare.interfaceToAbi("IFtsoManager");
```

## Support

For issues and feature requests, please visit our [GitHub repository](https://github.com/flare-foundation/flare-smart-contracts-periphery).