import { ethers } from "ethers";
import * as periphery from "../index";

const chains = ["coston", "coston2", "flare", "songbird"] as const;

const modules: { [key: string]: typeof periphery.coston } = {
    coston: periphery.coston,
    coston2: periphery.coston2,
    flare: periphery.flare,
    songbird: periphery.songbird,
} as const;

describe("Testing top-level imports", () => {
    test("Index gets imported", () => {
        expect(periphery).toBeDefined();
    });

    test("Index imports constants", () => {
        expect(periphery.FlareContractRegistryAddress).toBeDefined();
        expect(periphery.FlareContractRegistryAddress).toBe("0xaD67FE66660Fb8dFE9d6b1b4240d8650e30F6019");
    });

    test("Index imports chains", () => {
        expect(periphery.coston).toBeDefined();
        expect(periphery.coston2).toBeDefined();
        expect(periphery.flare).toBeDefined();
        expect(periphery.songbird).toBeDefined();
    });

    test("Index imports getters", () => {
        expect(periphery.nameToAbi).toBeDefined();
        expect(periphery.interfaceToAbi).toBeDefined();

        expect(periphery.nameToAddress).toBeDefined();
        expect(periphery.namesToAddresses).toBeDefined();
    });
});

describe("Testing top-level address mapper", () => {
    chains.map(chain =>
        test(`nameToAddress for ${chain}`, async () => {
            const provider = new ethers.JsonRpcProvider(`https://${chain}-api.flare.network/ext/bc/C/rpc`);

            const address = await periphery.nameToAddress("FlareContractRegistry", chain, provider);
            expect(address).toBe(periphery.FlareContractRegistryAddress);
        })
    );

    chains.map(chain =>
        test(`namesToAddresses for ${chain}`, async () => {
            const provider = new ethers.JsonRpcProvider(`https://${chain}-api.flare.network/ext/bc/C/rpc`);

            const addresses = await periphery.namesToAddresses(
                ["FlareContractRegistry", "FtsoRewardManager"],
                chain,
                provider
            );
            expect(addresses.length).toBe(2);
            expect(addresses[0]).toBe(periphery.FlareContractRegistryAddress);
        })
    );

    chains.map(chain =>
        test(`nameToAddress for invalid name for ${chain}`, async () => {
            const provider = new ethers.JsonRpcProvider(`https://${chain}-api.flare.network/ext/bc/C/rpc`);

            const address = await periphery.nameToAddress("sejhfusdhgiluhflgrh", chain, provider);
            expect(address).toBe("0x0000000000000000000000000000000000000000");
        })
    );

    chains.map(chain =>
        test(`namesToAddresses for invalid names for ${chain}`, async () => {
            const provider = new ethers.JsonRpcProvider(`https://${chain}-api.flare.network/ext/bc/C/rpc`);

            const addresses = await periphery.namesToAddresses(
                ["dhbshdlfsdgrf", "orsdjigopaijro", "uhsdfiud"],
                chain,
                provider
            );
            expect(addresses.length).toBe(3);
            expect(addresses[0]).toBe("0x0000000000000000000000000000000000000000");
            expect(addresses[1]).toBe("0x0000000000000000000000000000000000000000");
            expect(addresses[2]).toBe("0x0000000000000000000000000000000000000000");
        })
    );

    chains.map(chain =>
        test(`nameToAddress for invalid input for ${chain}`, async () => {
            const provider = new ethers.JsonRpcProvider(`https://${chain}-api.flare.network/ext/bc/C/rpc`);

            // @ts-ignore
            expect(periphery.nameToAddress(12345, chain, provider)).rejects.toThrow("invalid string value");
        })
    );

    chains.map(chain =>
        test(`namesToAddresses for invalid input for ${chain}`, async () => {
            const provider = new ethers.JsonRpcProvider(`https://${chain}-api.flare.network/ext/bc/C/rpc`);

            // @ts-ignore
            expect(periphery.namesToAddresses("FlareContractRegistry", chain, provider)).rejects.toThrow(
                "invalid array value"
            );
        })
    );

    test("nameToAddress for invalid chain", () => {
        const provider = new ethers.JsonRpcProvider("https://flare-api.flare.network/ext/bc/C/rpc");
        expect(periphery.nameToAddress("FlareContractRegistry", "zeehehs", provider)).rejects.toThrow(
            "Unsupported network"
        );
    });

    test("namesToAddresses for invalid chain", () => {
        const provider = new ethers.JsonRpcProvider("https://flare-api.flare.network/ext/bc/C/rpc");
        expect(
            periphery.namesToAddresses(["FlareContractRegistry", "FtsoRewardManager"], "zeehehs", provider)
        ).rejects.toThrow("Unsupported network");
    });
});

describe("Testing top-level ABI mapper", () => {
    chains.map(chain =>
        test(`nameToAbi for ${chain}`, () => {
            const topLevelAbi = periphery.nameToAbi("FtsoRewardManager", chain);
            const chainAbi = modules[chain].nameToAbi("FtsoRewardManager");
            expect(topLevelAbi).toBe(chainAbi);
        })
    );

    chains.map(chain =>
        test(`interfaceToAbi for ${chain}`, () => {
            const topLevelAbi = periphery.interfaceToAbi("IFtsoRewardManager", chain);
            const chainAbi = modules[chain].interfaceToAbi("IFtsoRewardManager");
            expect(topLevelAbi).toBe(chainAbi);
        })
    );

    chains.map(chain =>
        test(`nameToAbi for invalid name for ${chain}`, () => {
            expect(() => periphery.nameToAbi("zeheszshszehd", chain)).toThrow("No official Flare Network contract");
        })
    );

    chains.map(chain =>
        test(`interfaceToAbi for invalid name for ${chain}`, () => {
            expect(() => periphery.interfaceToAbi("zeheszshszehd", chain)).toThrow(
                "No official Flare Network interface"
            );
        })
    );

    test("nameToAbi for invalid chain", () => {
        expect(() => periphery.nameToAbi("FlareContractRegistry", "rhrurzsd")).toThrow("Unsupported network");
    });

    test("interfaceToAbi for invalid chain", () => {
        expect(() => periphery.interfaceToAbi("IFlareContractRegistry", "rhrurzsd")).toThrow("Unsupported network");
    });
});
