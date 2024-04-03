export declare function seededRandHex(n: number, seed?: string): string;
/**
 * Helper random value generator for Solidity type values used in in randomized attestation requests or responses.
 * Primarily used for testing
 * @param typeName solidity type (e.g. uint256)
 * @returns
 */
export declare function randSol(typeName: string, seed?: string): string | boolean;
//# sourceMappingURL=random.d.ts.map