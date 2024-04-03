/**
 * There are several variants for hashing sequences in Merkle trees in cases when there is odd number of hashes on some level.
 * - Bitcoin hashes remaining hash with itself
 * - Ethereum community was considering this:
 *     https://github.com/proofchains/python-proofmarshal/blob/efe9b58921b9a306f2b3552c30b84e1043ab866f/proofmarshal/mmr.py#L96
 * - This review shows various options and in particular it describes the "Monero way", which gives balanced trees but they
 *   had some issues with bugs
 *     https://medium.com/coinmonks/merkle-trees-concepts-and-use-cases-5da873702318
 *
 * The current implementation is a derivation and simplification of "Monero" way. It uses ideas
 * from binary heaps represented in array. This significantly simplifies the construction both of a Merkle tree and a proof.
 *
 * Important formulas for a left-aligned full tree represented in an array for n hashes as leafs
 * - array has exactly 2*n - 1 nodes (n leafs other internal)
 * - array[0] is merkle root, array[n-1, ..., 2*n - 2] contains leaf hashes in order
 * - given tree array of length l = 2*n - 1, then n = floor((l + 1)/2) --- be careful with 1 element
 * - parent(i) = Math.floor((i - 1) / 2);
 * - left(i) = 2*i + 1
 * - right(i) = 2*i + 2
 *
 * Importants: all input strings should represent bytes32, hence should be 32-byte padded hex strings.
 */
/**
 * Single value hash function. Uses keccak function compatible with the one used in Solidity
 * It is supposed to be used with `0x`-prefixed 32-byte strings as hex values
 * @param val input hash in form of the string `0x` prefixed.
 * @returns hash of the input value
 */
export declare function singleHash(val: string): string;
/**
 * Helper function for constructing the commit hash used with StateConnector.sol contract
 * @param merkleRoot merkle root (`0x`-prefixed 32-byte hex string)
 * @param randomNumber secure random number (`0x`-prefixed 32-byte hex string)
 * @param address addres (`0x`-prefixed 20-byte hex string)
 * @returns `0x`-prefixed 32-byte hex string (hash)
 */
export declare function commitHash(merkleRoot: string, randomNumber: string, address: string): string;
/**
 * A sorted hash of two 32-byte strings
 * @param x first `0x`-prefixed 32-byte hex string
 * @param y second `0x`-prefixed 32-byte hex string
 * @returns the sorted hash
 */
export declare function sortedHashPair(x: string, y: string): string;
/**
 * Merkle tree implementation with all the helper function for constructing the tree and extracting the root and proofs for every leaf.
 */
export declare class MerkleTree {
    _tree: string[];
    constructor(values: string[]);
    /**
     * Merkle root
     */
    get root(): string | undefined;
    /**
     * The array representing full tree (length is `2*hashCount - 1`)
     */
    get tree(): string[];
    /**
     * Number of leaves in the Merkle tree
     */
    get hashCount(): number;
    /**
     * Returns leaves in array of the length `hashCount` sorted as `0x`-prefixed 32-byte hex strings.
     */
    get sortedHashes(): string[];
    /**
     * Parent index of the node at index `i` in array
     * @param i index of a node in the Merkle tree
     * @returns parent index
     */
    parent(i: number): number;
    /**
     * Given an array of leave hashes (`0x`-prefixed 32-byte hex strings) it builds the Merkle tree.
     * @param values
     */
    private build;
    /**
     * Returns the hash of the `i`-th leaf (index determined by sorting and positioning in the build)
     * @param i
     * @returns
     */
    getHash(i: number): string | undefined;
    /** Binary search
     * Famously prone to subtle bugs, so over-documented with proof
     */
    private binarySearch;
    /**
     * Extracts the Merkle proof for the given hash, if it is in the tree
     * @param hashOrIndex the hash whose proof to return
     * @returns the Merkle proof - a list of `0x`-prefixed 32-byte hex strings
     */
    getProof(hashOrIndex: string | number): string[] | undefined;
}
/**
 * Verifies a Merkle proof for a given leaf
 * @param leaf leaf as (`0x`-prefixed 32-byte hex string)
 * @param proof Merkle proof (a list of `0x`-prefixed 32-byte hex strings)
 * @param root Merkle root (`0x`-prefixed 32-byte hex string)
 * @returns `true` if the proof is valid, `false` otherwise
 */
export declare function verifyWithMerkleProof(leaf: string, proof: string[], root: string): boolean;
//# sourceMappingURL=MerkleTree.d.ts.map