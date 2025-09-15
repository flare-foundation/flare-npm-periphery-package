import { ethers } from "ethers";
import * as periphery from "../index";

const chains = ["coston", "coston2", "flare", "songbird"] as const;

const modules: { [key: string]: typeof periphery.coston } = {
    coston: periphery.coston,
    coston2: periphery.coston2,
    flare: periphery.flare,
    songbird: periphery.songbird,
} as const;

chains.map(chain =>
    describe(`Testing ${chain} imports`, () => {
        test(`Chain ${chain} imports ABIs`, async () => {
            expect(periphery[chain].interfaceAbis).toBeDefined();
            expect(periphery[chain].products).toBeDefined();
        });

        test(`Chain ${chain} imports getters`, async () => {
            expect(periphery[chain].nameToAbi).toBeDefined();
            expect(periphery[chain].interfaceToAbi).toBeDefined();

            expect(() => periphery[chain].nameToAbi("ijfadojfpis")).toThrow(TypeError);
            expect(() => periphery[chain].interfaceToAbi("ijfadojfpis")).toThrow(TypeError);
        });
    })
);

chains.map(chain =>
    describe(`Testing ${chain} special cases`, () => {
        test("Fixed FlareContractRegistry address", async () => {
            let provider = new ethers.JsonRpcProvider(`https://${chain}-api.flare.network/ext/bc/C/rpc`);
            let address = await modules[chain].products.FlareContractRegistry.getAddress(provider);
            expect(address).toBe(periphery.FlareContractRegistryAddress);
        });

        if (chain === "coston2" || chain === "flare") {
            test("Non-standard interface name", async () => {
                let provider = new ethers.JsonRpcProvider(`https://${chain}-api.flare.network/ext/bc/C/rpc`);
                let address = await modules[chain].products.ValidatorRewardManager.getAddress(provider);
                expect(address).not.toBe("0x0000000000000000000000000000000000000000");

                let cAbi = modules[chain].products.ValidatorRewardManager.abi;
                let iAbi = modules[chain].interfaceAbis.IGenericRewardManager;
                expect(cAbi).toBe(iAbi);
            });
        }
    })
);
