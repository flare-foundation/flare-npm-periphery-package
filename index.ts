import {
  addressToName as addressToNameCST,
  nameToAbi as nameToAbiCST,
  nameToAddress as nameToAddressCST,
} from "./coston";
import {
  addressToName as addressToNameCST2,
  nameToAbi as nameToAbiCST2,
  nameToAddress as nameToAddressCST2,
} from "./coston2";
import {
  addressToName as addressToNameFLR,
  nameToAbi as nameToAbiFLR,
  nameToAddress as nameToAddressFLR,
} from "./flare";
import {
  addressToName as addressToNameSGB,
  nameToAbi as nameToAbiSGB,
  nameToAddress as nameToAddressSGB,
} from "./songbird";

export const nameToAddress = (name: string, network: string): string => {
  if (network.toLowerCase() == "flare") return nameToAddressFLR(name);
  if (network.toLowerCase() == "songbird") return nameToAddressSGB(name);
  if (network.toLowerCase() == "coston") return nameToAddressCST(name);
  if (network.toLowerCase() == "coston2") return nameToAddressCST2(name);
  return "";
};

export const addressToName = (address: string, network: string): string => {
  if (network.toLowerCase() == "flare") return addressToNameFLR(address);
  if (network.toLowerCase() == "songbird") return addressToNameSGB(address);
  if (network.toLowerCase() == "coston") return addressToNameCST(address);
  if (network.toLowerCase() == "coston2") return addressToNameCST2(address);
  return "";
};

export const nameToAbi = (
  name: string,
  network: string,
): { data: any; status: string } => {
  if (network.toLowerCase() == "flare") return nameToAbiFLR(name);
  if (network.toLowerCase() == "songbird") return nameToAbiSGB(name);
  if (network.toLowerCase() == "coston") return nameToAbiCST(name);
  if (network.toLowerCase() == "coston2") return nameToAbiCST2(name);
  return { data: [], status: "Please select a network" };
};

export * as coston from "./coston";
export * as coston2 from "./coston2";
export * as flare from "./flare";
export * as songbird from "./songbird";

