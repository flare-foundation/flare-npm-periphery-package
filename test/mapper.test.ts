import { ethers } from "ethers";
import { FlareContractRegistryAddress, coston, coston2, flare, nameToAddress, namesToAddresses, songbird } from "../index";


const name_to_module: { [key: string]: typeof coston } = {
    "coston": coston,
    "coston2": coston2,
    "flare": flare,
    "songbird": songbird,
};


[
    "coston",
    "coston2",
    "flare",
    "songbird",
].map(chainName => describe(`${chainName} adress getter`, () => {
    let jsonRPC: ethers.JsonRpcProvider;
    let network: string = chainName;

    beforeAll(async () => {
        jsonRPC = new ethers.JsonRpcProvider(`https://${network}-api.flare.network/ext/bc/C/rpc`);
    });

    test("Name to address", async () => {
        let fcrAddress = await nameToAddress("FlareContractRegistry", jsonRPC);
        let fcrAddress2 = await name_to_module[network].products.FlareContractRegistry.getAddress(jsonRPC);
        expect(fcrAddress2).toBe(FlareContractRegistryAddress);
        expect(fcrAddress).toBe(FlareContractRegistryAddress);
    });

    test("Get addresses", async () => {
        let addresses = await namesToAddresses(["FlareContractRegistry", "FtsoRewardManager"], jsonRPC);
        expect(addresses.length).toBe(2);
        expect(addresses[0]).toBe(FlareContractRegistryAddress);
    });

    test("Get nonexistent address", async () => {
        let address = await nameToAddress("sejhfusdhgiluhflgrh", jsonRPC);
        expect(address).toBe("0x0000000000000000000000000000000000000000");
    });

    test("Get nonexistent addresses", async () => {
        let addresses = await namesToAddresses(["dhbshdlfsdgrf", "orsdjigopaijro", "uhsdfiud"], jsonRPC);
        expect(addresses.length).toBe(3);
        expect(addresses[0]).toBe("0x0000000000000000000000000000000000000000");
        expect(addresses[1]).toBe("0x0000000000000000000000000000000000000000");
        expect(addresses[2]).toBe("0x0000000000000000000000000000000000000000");
    });

    test("Invalid input", async () => {
        // @ts-ignore
        await expect(nameToAddress(5, jsonRPC)).rejects.toThrow();
        // @ts-ignore
        await expect(namesToAddresses("FlareContractRegistry", jsonRPC)).rejects.toThrow();
    });
}));


describe("Special tests", () => {
    test("Non-standard interface name", async () => {
        let jsonRPC = new ethers.JsonRpcProvider(`https://coston2-api.flare.network/ext/bc/C/rpc`);
        let addr = await coston2.products.ValidatorRewardManager.getAddress(jsonRPC);
        expect(addr).not.toBe("0x0000000000000000000000000000000000000000");

        let cAbi = coston2.products.ValidatorRewardManager.abi;
        let iAbi = coston2.interfaceAbis.IGenericRewardManager;
        expect(cAbi).toBe(iAbi);
    });
});