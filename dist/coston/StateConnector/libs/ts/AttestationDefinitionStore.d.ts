import { TypeRecord } from "./config-types";
import { ethers } from "ethers";
import { ARBase, ARESBase } from "./interfaces";
/**
 * Attestation definition store. Contains all the attestation type definitions
 * that are contained in the folder, from which the store was initialized.
 */
export declare class AttestationDefinitionStore {
    definitions: Map<string, TypeRecord>;
    coder: ethers.AbiCoder;
    constructor(configsPath?: string);
    /**
     * Initializes the store by reading the attestation type definition configs from the
     * provided path.
     * @param configsPath
     */
    private initialize;
    /**
     * Returns the attestation type definition for the provided attestation type id.
     * @param attestationType
     * @returns
     */
    getDefinitionForDecodedAttestationType(attestationType: string): TypeRecord | undefined;
    getABIsForDecodedAttestationType(attestationTypeId: string): {
        requestAbi: any;
        responseAbi: any;
        proofAbi: any;
    };
    /**
     * Calculated usual or salted hash of the attestation response.
     * The function throws an error if an attestation type is not supported or
     * the response does not match the provided ABI definition.
     * @param response
     * @param salt
     * @returns
     */
    attestationResponseHash<T extends ARESBase>(response: T, salt?: string): string;
    /**
     * Extracts the attestation type prefix from the provided attestation request.
     * The prefix consists of 3 x 32 bytes: attestation type, source id and message integrity code.
     * The rest of the bytes define ABI encoded request body.
     * @param bytes
     * @param decodeAttestationTypeName
     * @returns
     */
    static extractPrefixFromRequest(bytes: string, decodeAttestationTypeName?: boolean): ARBase;
    /**
     * Encodes attestation request.
     * The request must have the attestation type encoded into 32-byte 0x-prefixed string.
     * @param request
     * @returns
     */
    encodeRequest(request: ARBase): string;
    /**
     * Parses attestation request.
     * @param bytes
     * @returns
     */
    parseRequest<AR extends ARBase>(bytes: string, decodeAttestationTypeName?: boolean): AR;
    /**
     * Compares two attestation requests.
     * @param request1
     * @param request2
     * @returns
     */
    equalsRequest(request1: ARBase, request2: ARBase): boolean;
}
//# sourceMappingURL=AttestationDefinitionStore.d.ts.map