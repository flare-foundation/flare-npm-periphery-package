import { abis } from "../abis";
import contracts from "./contracts.json";

export const nameToAddress = (name: string) => {
  const foundMatch = contracts.find((el: any) => el.name == name);
  if (foundMatch) return foundMatch.address;
  return "";
};

export const addressToName = (address: string) => {
  const foundMatch = contracts.find((el: any) => el.address.toLowerCase() == address.toLowerCase());
  if (foundMatch) return foundMatch.name;
  return "";
};

export const nameToAbi = (name: string): { data: any; status: string } => {
  try {
    const abiData = abis[name];
    if (abiData !== undefined) return { data: abiData, status: "OK" };
    return { data: [], status: "No official Flare Network contract at this address" };

  } catch (e) {
    if (e instanceof TypeError) {
      return { data: [], status: "No official Flare Network contract at this address" };
    }
  }

  return { data: [], status: "Unknown error" };
};
