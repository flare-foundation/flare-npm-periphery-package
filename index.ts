import {
  nameToAddress as nameToAddressFLR,
  addressToName as addressToNameFLR,
  nameToAbi as nameToAbiFLR,
} from "./flare"
import {
  nameToAddress as nameToAddressSGB,
  addressToName as addressToNameSGB,
  nameToAbi as nameToAbiSGB,
} from "./songbird";
import {
  nameToAddress as nameToAddressCST,
  addressToName as addressToNameCST,
  nameToAbi as nameToAbiCST,
} from "./coston";
import {
  nameToAddress as nameToAddressCST2,
  addressToName as addressToNameCST2,
  nameToAbi as nameToAbiCST2,
} from "./coston2";

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
