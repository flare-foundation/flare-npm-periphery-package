import { interfaceToAbi as interfaceToAbiCST, nameToAbi as nameToAbiCST } from "./coston";
import { interfaceToAbi as interfaceToAbiCST2, nameToAbi as nameToAbiCST2 } from "./coston2";
import { interfaceToAbi as interfaceToAbiFLR, nameToAbi as nameToAbiFLR } from "./flare";
import { interfaceToAbi as interfaceToAbiSGB, nameToAbi as nameToAbiSGB } from "./songbird";

import { ethers } from "ethers";

// This should never change
export const FlareContractRegistryAddress = "0xaD67FE66660Fb8dFE9d6b1b4240d8650e30F6019";

export const nameToAddress = async (name: string, network: string, provider: ethers.Provider): Promise<string> => {
    const fcrContract = new ethers.Contract(
        FlareContractRegistryAddress,
        nameToAbi("FlareContractRegistry", network),
        provider
    );
    return await fcrContract.getContractAddressByName(name);
};

export const namesToAddresses = async (
    names: string[],
    network: string,
    provider: ethers.Provider
): Promise<string[]> => {
    const fcrContract = new ethers.Contract(
        FlareContractRegistryAddress,
        nameToAbi("FlareContractRegistry", network),
        provider
    );
    return await fcrContract.getContractAddressesByName(names);
};

export const nameToAbi = (name: string, network: string): any => {
    switch (network.toLocaleLowerCase()) {
        case "flare":
            return nameToAbiFLR(name);
        case "songbird":
            return nameToAbiSGB(name);
        case "coston":
            return nameToAbiCST(name);
        case "coston2":
            return nameToAbiCST2(name);
    }
    throw new TypeError(
        `Unsupported network "${network}". Supported networks are flare, coston2, songbird and coston.`
    );
};

export const interfaceToAbi = (name: string, network: string): any => {
    switch (network.toLocaleLowerCase()) {
        case "flare":
            return interfaceToAbiFLR(name);
        case "songbird":
            return interfaceToAbiSGB(name);
        case "coston":
            return interfaceToAbiCST(name);
        case "coston2":
            return interfaceToAbiCST2(name);
    }
    throw new TypeError(
        `Unsupported network "${network}". Supported networks are flare, coston2, songbird and coston.`
    );
};

export * as coston from "./coston";
export * as coston2 from "./coston2";
export * as flare from "./flare";
export * as songbird from "./songbird";
