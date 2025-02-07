# Flare smart contracts periphery

This package contains ABIs, typechain artifacts and addresses for smart contracts on Flare networks Flare, Songbird,
Coston and Coston2.

Enjoy


## Features
This library exposes the following names at top level:
 * `nameToAbi(name:string, network: string): any` and `interfaceToAbi(name: string, network: string): any` - 
 return abi an array of objects.
    Name is the name of contract/interface and network can be one of coston, coston2, songbird and flare. 
 * `nameToAddress(name: string, provider: ethers.JsonRpcApiProvider): Promise<string>` and `namesToAddresses(names: string[], provider: ethers.JsonRpcApiProvider): Promise<string[]>`.
  Provider is used to get contract address(es). They are read from FlareContractRegistryLibrary on chain.
 * `FlareContractRegistryAddress` - hardcoded address constant, the same for all chains and should never change.
 * `coston`, `coston2`, `flare` and `songbird` - namespaces with 4 exports:
    - `products` - an object exposing contracts through `.ContractName` syntax. They have fields
    `name`, `interface` - interface's name and `abi`, and method `getAddress(provider: JsonRpcProvider): Promise<string>`.
    - `interfaceAbis` - a class allowing access to abis using `.InterfaceName` syntax. Interface names are
    usually contract names prefixed with capital letter `I`.
    - `nameToAbi(name: string): any` and `interfaceToAbi(name: string): any` - the same as top level functions, with omitted network argument

Additionally typechain artifacts are stored in `artifacts/contracts` folders for every chain.