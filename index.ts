import { interfaceToAbi as interfaceToAbiCST, nameToAbi as nameToAbiCST } from "./coston";
import { interfaceToAbi as interfaceToAbiCST2, nameToAbi as nameToAbiCST2 } from "./coston2";
import { interfaceToAbi as interfaceToAbiFLR, nameToAbi as nameToAbiFLR } from "./flare";
import { interfaceToAbi as interfaceToAbiSGB, nameToAbi as nameToAbiSGB } from "./songbird";

import { ethers } from "ethers";

// This should never change
export const FlareContractRegistryAddress = "0xaD67FE66660Fb8dFE9d6b1b4240d8650e30F6019";

export const nameToAddress = async (name: string, provider: ethers.JsonRpcApiProvider): Promise<string> => {
  const fcrContract = new ethers.Contract(FlareContractRegistryAddress, nameToAbi("FlareContractRegistry", "flare"), provider);
  return await fcrContract.getContractAddressByName(name);
};

export const namesToAddresses = async (names: string[], provider: ethers.JsonRpcApiProvider): Promise<string[]> => {
  const fcrContract = new ethers.Contract(FlareContractRegistryAddress, nameToAbi("FlareContractRegistry", "flare"), provider);
  return await fcrContract.getContractAddressesByName(names);
};


export const nameToAbi = (
  name: string,
  network: string,
): any => {
  if (network.toLowerCase() == "flare") return nameToAbiFLR(name);
  if (network.toLowerCase() == "songbird") return nameToAbiSGB(name);
  if (network.toLowerCase() == "coston") return nameToAbiCST(name);
  if (network.toLowerCase() == "coston2") return nameToAbiCST2(name);
  throw new Error(`Unsupported network "${network}". Supported networks are flare, coston2, songbird and coston.`)
};

export const interfaceToAbi = (
  name: string,
  network: string,
): any => {
  if (network.toLowerCase() == "flare") return interfaceToAbiFLR(name);
  if (network.toLowerCase() == "songbird") return interfaceToAbiSGB(name);
  if (network.toLowerCase() == "coston") return interfaceToAbiCST(name);
  if (network.toLowerCase() == "coston2") return interfaceToAbiCST2(name);
  throw new Error(`Unsupported network "${network}". Supported networks are flare, coston2, songbird and coston.`)
};

export * as coston from "./coston";
export * as coston2 from "./coston2";
export * as flare from "./flare";
export * as songbird from "./songbird";

