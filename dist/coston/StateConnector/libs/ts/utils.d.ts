import { TypeRecord } from "./config-types";
/**
 * ABIFragment is a subset of ethers ABIFragment. It is used to define the ABI fragments
 */
export interface ABIFragment {
    components?: ABIFragment[];
    internalType: string;
    name: string;
    type: string;
}
export declare const DEFAULT_ATTESTATION_TYPE_CONFIGS_PATH = "./node_modules/@flarenetwork/flare-periphery-contract-artifacts/coston/StateConnector/configs/";
export declare const MIC_SALT = "Flare";
export declare const ZERO_BYTES_32: string;
export declare const ZERO_BYTES_20: string;
/**
 * Checks if the type is one of the supported Solidity type names.
 * Note: the checks for supported numbers N in 'intN', 'uintN' and 'bytesN' is not implemented. The function is safe only under assumption
 * that the correct types supported by the Solidity compiler are used.
 * @param type
 * @returns
 */
export declare function isSupportedBasicSolidityType(type: string): boolean;
/**
 * Encodes attestation type name or source id as a 32-byte hex string.
 * It takes the UTF-8 bytes of the name and pads them with zeros to 32 bytes.
 * @param attestationTypeName
 * @returns '0x'-prefixed hex string representing 32-bytes
 */
export declare function encodeAttestationName(attestationTypeName: string): string;
/**
 * Decodes attestation type name or source id from a 32-byte hex string.
 * @param encoded Should be a '0x'-prefixed hex string representing exactly 32-bytes.
 * @returns
 */
export declare function decodeAttestationName(encoded: string): string;
/**
 * Given a ABI decoded object (with tuples) based on the provided JSON ABI definition,
 * it creates a possibly nested Javascript object compatible with the ABI definitions.
 * The function assumes that the decoded objects matches the ABI. If this is not the case,
 * function may behave in strange ways.
 * This is auxiliary function not intended to be used directly.
 * @param decoded
 * @param abi
 * @param ignoreArray parameter for recursion call when handling of arrays are needed.
 * @returns
 */
export declare function remapABIParsedToObjects(decoded: any, abi: ABIFragment, ignoreArray?: boolean): any;
/**
 * Checks whether the struct objects are deep equal. Objects should match the ABI definition.
 * @param struct1
 * @param struct2
 * @param abi
 * @returns
 */
export declare function structsDeepEqual(struct1: any, struct2: any, abi: ABIFragment): boolean;
/**
 * Loader of the attestation type definition configs
 * @returns a map from attestation types to definition configs
 */
export declare function readAttestationTypeConfigs(configsPath?: string): Map<string, TypeRecord>;
/**
 * Helper function serializing bigints to strings recursively.
 * @param obj
 * @returns
 */
export declare function serializeBigInts(obj: any): any;
//# sourceMappingURL=utils.d.ts.map