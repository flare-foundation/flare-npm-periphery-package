import * as index from "../index";


describe('testing index file imports', () => {
    test('Index gets imported', async () => {
        expect(index).toBeDefined();
    });

    test('Index imports chains, getters', async () => {
        expect(index.coston).toBeDefined();
        expect(index.coston2).toBeDefined();
        expect(index.flare).toBeDefined();
        expect(index.songbird).toBeDefined();

        expect(index.nameToAbi).toBeDefined();
        expect(index.interfaceToAbi).toBeDefined();
        expect(index.nameToAddress).toBeDefined();
        expect(index.namesToAddresses).toBeDefined();
    });

    test('Coston imports abis, getters', async () => {
        expect(index.coston.interfaceAbis).toBeDefined();
        expect(index.coston.products).toBeDefined();
        expect(index.coston.nameToAbi).toBeDefined();
        expect(index.coston.interfaceToAbi).toBeDefined();
        expect(() => index.coston.nameToAbi("ijfadojfpis")).toThrow(TypeError);
        expect(() => index.coston.interfaceToAbi("ijfadojfpis")).toThrow(TypeError);
    });

    test('Coston2 imports abis, getters', async () => {
        expect(index.coston2.interfaceAbis).toBeDefined();
        expect(index.coston2.products).toBeDefined();
        expect(index.coston2.nameToAbi).toBeDefined();
        expect(index.coston2.interfaceToAbi).toBeDefined();
        expect(() => index.coston2.nameToAbi("ijfadojfpis")).toThrow(TypeError);
        expect(() => index.coston2.interfaceToAbi("ijfadojfpis")).toThrow(TypeError);
    });

    test('Flare imports abis, getters', async () => {
        expect(index.flare.interfaceAbis).toBeDefined();
        expect(index.flare.products).toBeDefined();
        expect(index.flare.nameToAbi).toBeDefined();
        expect(index.flare.interfaceToAbi).toBeDefined();
        expect(() => index.flare.nameToAbi("ijfadojfpis")).toThrow(TypeError);
        expect(() => index.flare.interfaceToAbi("ijfadojfpis")).toThrow(TypeError);
    });

    test('Songbird imports abis, getters', async () => {
        expect(index.songbird.interfaceAbis).toBeDefined();
        expect(index.songbird.products).toBeDefined();
        expect(index.songbird.nameToAbi).toBeDefined();
        expect(index.songbird.interfaceToAbi).toBeDefined();
        expect(() => index.songbird.nameToAbi("ijfadojfpis")).toThrow(TypeError);
        expect(() => index.songbird.interfaceToAbi("ijfadojfpis")).toThrow(TypeError);
    });
});
