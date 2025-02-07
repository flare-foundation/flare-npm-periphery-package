import { interfaceAbis, products } from "./abis";


export const nameToAbi = (name: string): any => {
  try {
    const abiData = products[name]?.abi;
    if (abiData !== undefined) return abiData;
    throw new TypeError(`No official Flare Network contract with name "${name}".`);

  } catch (e) {
    if (e instanceof TypeError) {
      throw new TypeError(`No official Flare Network contract with name "${name}".`);
    }
  }

  throw new Error(`Unknown exception occured. Could not find any official Flare Network contract with name "${name}".`);
};

export const interfaceToAbi = (name: string): any => {
  try {
    const abiData = interfaceAbis[name];
    if (abiData !== undefined) return abiData;
    throw new TypeError(`No official Flare Network interface with name "${name}".`);

  } catch (e) {
    if (e instanceof TypeError) {
      throw new TypeError(`No official Flare Network interface with name "${name}".`);
    }
  }

  throw new Error(`Unknown exception occured. Could not find any official Flare Network interface with name "${name}".`);
};
