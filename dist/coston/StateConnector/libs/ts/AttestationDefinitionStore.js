"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttestationDefinitionStore = void 0;
const ethers_1 = require("ethers");
const utils_1 = require("./utils");
/**
 * Attestation definition store. Contains all the attestation type definitions
 * that are contained in the folder, from which the store was initialized.
 */
class AttestationDefinitionStore {
    constructor(configsPath = utils_1.DEFAULT_ATTESTATION_TYPE_CONFIGS_PATH) {
        this.initialize(configsPath);
    }
    /**
     * Initializes the store by reading the attestation type definition configs from the
     * provided path.
     * @param configsPath
     */
    initialize(configsPath) {
        this.definitions = (0, utils_1.readAttestationTypeConfigs)(configsPath);
        this.coder = ethers_1.ethers.AbiCoder.defaultAbiCoder();
    }
    /**
     * Returns the attestation type definition for the provided attestation type id.
     * @param attestationType
     * @returns
     */
    getDefinitionForDecodedAttestationType(attestationType) {
        return this.definitions.get(attestationType);
    }
    getABIsForDecodedAttestationType(attestationTypeId) {
        const definition = this.getDefinitionForDecodedAttestationType(attestationTypeId);
        if (!definition) {
            throw new Error(`Unsupported attestation type id: '${attestationTypeId}'`);
        }
        return {
            requestAbi: definition.requestAbi,
            responseAbi: definition.responseAbi,
            proofAbi: definition.proofAbi,
        };
    }
    /**
     * Calculated usual or salted hash of the attestation response.
     * The function throws an error if an attestation type is not supported or
     * the response does not match the provided ABI definition.
     * @param response
     * @param salt
     * @returns
     */
    attestationResponseHash(response, salt) {
        const attestationType = (0, utils_1.decodeAttestationName)(response.attestationType);
        const definition = this.getDefinitionForDecodedAttestationType(attestationType);
        if (!definition) {
            throw new Error(`Unsupported attestation type id: '${attestationType}'`);
        }
        let abiEncoded;
        if (salt) {
            abiEncoded = this.coder.encode([definition.responseAbi, "string"], [response, salt]);
        }
        else {
            abiEncoded = this.coder.encode([definition.responseAbi], [response]);
        }
        return ethers_1.ethers.keccak256(abiEncoded);
    }
    /**
     * Extracts the attestation type prefix from the provided attestation request.
     * The prefix consists of 3 x 32 bytes: attestation type, source id and message integrity code.
     * The rest of the bytes define ABI encoded request body.
     * @param bytes
     * @param decodeAttestationTypeName
     * @returns
     */
    static extractPrefixFromRequest(bytes, decodeAttestationTypeName = false) {
        if (!bytes) {
            throw new Error("Empty attestation request");
        }
        if (!bytes.match(/^0x[0-9a-fA-F]*$/)) {
            throw new Error("Not a '0x'-prefixed hex string");
        }
        if (bytes.length < 3 * 64 + 2) {
            throw new Error("Incorrectly formatted attestation request");
        }
        let attestationType = bytes.slice(0, 2 + 64);
        if (decodeAttestationTypeName) {
            attestationType = (0, utils_1.decodeAttestationName)(attestationType);
        }
        return {
            attestationType,
            sourceId: "0x" + bytes.slice(2 + 64, 2 + 2 * 64),
            messageIntegrityCode: "0x" + bytes.slice(2 + 2 * 64, 2 + 3 * 64),
            requestBody: "0x" + bytes.slice(2 + 3 * 64),
        };
    }
    /**
     * Encodes attestation request.
     * The request must have the attestation type encoded into 32-byte 0x-prefixed string.
     * @param request
     * @returns
     */
    encodeRequest(request) {
        const attestationType = (0, utils_1.decodeAttestationName)(request.attestationType);
        const definition = this.getDefinitionForDecodedAttestationType(attestationType);
        if (!definition) {
            throw new Error(`Unsupported attestation type id: '${request.attestationType}'`);
        }
        // custom encoding for the prefix
        const abiEncodePrefix = this.coder.encode(["bytes32", "bytes32", "bytes32"], [request.attestationType, request.sourceId, request.messageIntegrityCode || utils_1.ZERO_BYTES_32]);
        // ABI encoding for the request body
        const requestBodyAbi = definition.requestAbi.components.find((item) => item.name == "requestBody");
        if (!requestBodyAbi) {
            throw new Error(`Invalid request ABI for attestation type id: '${request.attestationType}'. No 'requestBody'.`);
        }
        const abiEncodeBody = this.coder.encode([requestBodyAbi], [request.requestBody]);
        return ethers_1.ethers.concat([abiEncodePrefix, abiEncodeBody]);
    }
    /**
     * Parses attestation request.
     * @param bytes
     * @returns
     */
    parseRequest(bytes, decodeAttestationTypeName = false) {
        var _a;
        const prefix = AttestationDefinitionStore.extractPrefixFromRequest(bytes);
        const attestationType = (0, utils_1.decodeAttestationName)(prefix.attestationType);
        const definition = this.getDefinitionForDecodedAttestationType(attestationType);
        if (!definition) {
            throw new Error(`Unsupported attestation type id: '${attestationType}'`);
        }
        const requestBodyAbi = (_a = definition.requestAbi) === null || _a === void 0 ? void 0 : _a.components.find((item) => item.name == "requestBody");
        if (!requestBodyAbi) {
            throw new Error(`Invalid request ABI for attestation type id: '${prefix.attestationType}'. No 'requestBody'.`);
        }
        const parsed = this.coder.decode([requestBodyAbi], "0x" + bytes.slice(2 + 3 * 64))[0];
        return (0, utils_1.serializeBigInts)({
            attestationType: decodeAttestationTypeName ? definition : prefix.attestationType,
            sourceId: prefix.sourceId,
            messageIntegrityCode: prefix.messageIntegrityCode,
            requestBody: (0, utils_1.remapABIParsedToObjects)(parsed, requestBodyAbi),
        });
    }
    /**
     * Compares two attestation requests.
     * @param request1
     * @param request2
     * @returns
     */
    equalsRequest(request1, request2) {
        var _a;
        if (request1.attestationType !== request2.attestationType) {
            return false;
        }
        if (request1.sourceId != request2.sourceId) {
            return false;
        }
        const attestationType = (0, utils_1.decodeAttestationName)(request1.attestationType);
        const requestAbi = (_a = this.getDefinitionForDecodedAttestationType(attestationType)) === null || _a === void 0 ? void 0 : _a.requestAbi;
        if (!requestAbi) {
            throw new Error(`Unsupported attestation type id: '${attestationType}'`);
        }
        return (0, utils_1.structsDeepEqual)(request1, request2, requestAbi);
    }
}
exports.AttestationDefinitionStore = AttestationDefinitionStore;
//# sourceMappingURL=AttestationDefinitionStore.js.map