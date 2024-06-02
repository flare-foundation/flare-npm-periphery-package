"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeBigInts = exports.readAttestationTypeConfigs = exports.structsDeepEqual = exports.remapABIParsedToObjects = exports.decodeAttestationName = exports.encodeAttestationName = exports.isSupportedBasicSolidityType = exports.ZERO_BYTES_20 = exports.ZERO_BYTES_32 = exports.MIC_SALT = exports.DEFAULT_ATTESTATION_TYPE_CONFIGS_PATH = void 0;
const ethers_1 = require("ethers");
exports.DEFAULT_ATTESTATION_TYPE_CONFIGS_PATH = "./node_modules/@flarenetwork/flare-periphery-contract-artifacts/coston/StateConnector/configs/";
exports.MIC_SALT = "Flare";
exports.ZERO_BYTES_32 = ethers_1.ethers.zeroPadBytes("0x", 32);
exports.ZERO_BYTES_20 = ethers_1.ethers.zeroPadBytes("0x", 20);
/**
 * Compares values of Solidity elementary types when represented in JSON.
 * Checks the consistency of the types and the values.
 * @param val1
 * @param val2
 * @param type
 * @returns
 */
function compareElementaryTypes(val1, val2, type) {
    if (type.match(/^u?int\d+$/)) {
        // Input values could be number, BigInt or string representing decimal or hex (0x-prefixed).
        if (typeof val1 === "number" || typeof val1 === "bigint" || typeof val1 === "string") {
            // throws if the value is not parsable as a BigInt
            return BigInt(val1) === BigInt(val2);
        }
        throw new Error(`Invalid values for type '${type}': ${val1}, ${val2}`);
    }
    if (type.match(/^bool$/)) {
        // values must be true or false
        if ((val1 === true || val1 === false) && (val2 === true || val2 === false)) {
            return val1 === val2;
        }
        throw new Error(`Invalid values for type '${type}': ${val1}, ${val2}`);
    }
    if (type.match(/^bytes\d*$/) || type.match(/^byte$/) || type.match(/^address$/)) {
        // Input values must be be string or hex (0x-prefixed)
        if (typeof val1 === "string" && typeof val2 === "string") {
            const lower1 = val1.toLowerCase();
            const lower2 = val2.toLowerCase();
            if (/^0x[0-9a-f]+$/i.test(lower1) && /^0x[0-9a-f]+$/i.test(lower2)) {
                return lower1 === lower2;
            }
        }
        throw new Error(`Invalid values for type '${type}': '${val1}', '${val2}'`);
    }
    if (type.match(/^string$/)) {
        // Input values must be string
        if (typeof val1 === "string" && typeof val2 === "string") {
            return val1 === val2;
        }
        throw new Error(`Invalid values for type '${type}': '${val1}', '${val2}'`);
    }
    throw new Error(`Unknown or unsupported type '${type}'`);
}
/**
 * Checks if the type is one of the supported Solidity type names.
 * Note: the checks for supported numbers N in 'intN', 'uintN' and 'bytesN' is not implemented. The function is safe only under assumption
 * that the correct types supported by the Solidity compiler are used.
 * @param type
 * @returns
 */
function isSupportedBasicSolidityType(type) {
    //
    return (!!type.match(/^u?int\d+$/) ||
        !!type.match(/^bool$/) ||
        !!type.match(/^bytes\d*$/) ||
        !!type.match(/^byte$/) ||
        !!type.match(/^address$/) ||
        !!type.match(/^string$/));
}
exports.isSupportedBasicSolidityType = isSupportedBasicSolidityType;
/**
 * Encodes attestation type name or source id as a 32-byte hex string.
 * It takes the UTF-8 bytes of the name and pads them with zeros to 32 bytes.
 * @param attestationTypeName
 * @returns '0x'-prefixed hex string representing 32-bytes
 */
function encodeAttestationName(attestationTypeName) {
    if (typeof attestationTypeName !== "string") {
        throw new Error(`Attestation type name must be a string. Provided value ${attestationTypeName}`);
    }
    if (attestationTypeName.startsWith("0x") || attestationTypeName.startsWith("0X")) {
        throw new Error(`Attestation type name must not start with '0x'. Provided value '${attestationTypeName}'. Possible confusion with hex encoding.`);
    }
    const bytes = ethers_1.ethers.toUtf8Bytes(attestationTypeName);
    if (bytes.length > 32) {
        throw new Error(`Attestation type name ${attestationTypeName} is too long`);
    }
    return ethers_1.ethers.zeroPadBytes(bytes, 32);
}
exports.encodeAttestationName = encodeAttestationName;
/**
 * Decodes attestation type name or source id from a 32-byte hex string.
 * @param encoded Should be a '0x'-prefixed hex string representing exactly 32-bytes.
 * @returns
 */
function decodeAttestationName(encoded) {
    if (!/^0x[0-9a-fA-F]{64}$/i.test(encoded)) {
        throw new Error("Not a 0x-prefixed 32-byte hex string");
    }
    // strip trailing zeros
    let stripped = encoded.replace(/0+$/, "");
    // if the string is odd-length, add a zero to the end for full bytes
    stripped = stripped.length % 2 == 0 ? stripped : stripped + "0";
    const bytes = ethers_1.ethers.toBeArray(stripped);
    return ethers_1.ethers.toUtf8String(bytes);
}
exports.decodeAttestationName = decodeAttestationName;
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
function remapABIParsedToObjects(decoded, abi, ignoreArray = false) {
    if (abi.type == "tuple" || (abi.type == "tuple[]" && ignoreArray)) {
        const result = {};
        for (const [index, item] of abi.components.entries()) {
            const key = item.name;
            result[key] = remapABIParsedToObjects(decoded[index], item);
        }
        return result;
    }
    if (abi.type == "tuple[]") {
        const result = [];
        for (const item of decoded) {
            result.push(remapABIParsedToObjects(item, abi, true));
        }
        return result;
    }
    if (abi.type.match(/^.+(\[(\d*)\])(\[(\d*)\])$/) || abi.type.match(/^.+(\[(\d+)\])$/)) {
        throw new Error(`Nested arrays or fixed length arrays not supported. Type: ${abi.type}`);
    }
    // we assume here we have `type[]` where `type` is one of simple types.
    const match = abi.type.match(/^(.+)\[\]$/);
    if (match && isSupportedBasicSolidityType(match[1])) {
        const result = [];
        for (const item of decoded) {
            result.push(item);
            return result;
        }
        return decoded;
    }
}
exports.remapABIParsedToObjects = remapABIParsedToObjects;
/**
 * Checks whether the struct objects are deep equal. Objects should match the ABI definition.
 * @param struct1
 * @param struct2
 * @param abi
 * @returns
 */
function structsDeepEqual(struct1, struct2, abi) {
    if (Object.keys(struct1).length !== Object.keys(struct2).length) {
        return false;
    }
    for (const item of abi.components || []) {
        const key = item.name;
        const val1 = struct1[key];
        const val2 = struct2[key];
        if (val1 === undefined || val2 === undefined) {
            throw new Error(`Structs must not have undefined values for ${key}`);
        }
        if (item.type == "tuple") {
            if (!structsDeepEqual(struct1[key], struct2[key], item)) {
                return false;
            }
            continue;
        }
        if (item.type == "tuple[]") {
            if (val1.length != val2.length) {
                return false;
            }
            for (let i = 0; i < val1.length; i++) {
                if (!structsDeepEqual(val1[i], val2[i], item)) {
                    return false;
                }
            }
            continue;
        }
        if (item.components) {
            throw new Error("Components should not appear in non tuple ABI fragments");
        }
        if (item.type.match(/^.+(\[(\d*)\])(\[(\d*)\])$/) || item.type.match(/^.+(\[(\d+)\])$/)) {
            throw new Error(`Nested arrays or fixed length arrays not supported. Type: ${item.type}`);
        }
        // we assume here we have `type[]` where `type` is one of simple types.
        const match = item.type.match(/^(.+)\[\]$/);
        if (match && isSupportedBasicSolidityType(match[1])) {
            if (val1.length !== val2.length) {
                return false;
            }
            for (let i = 0; i < val1.length; i++) {
                if (!compareElementaryTypes(val1[i], val2[i], item.type.slice(0, -2))) {
                    return false;
                }
            }
            continue;
        }
        if (!compareElementaryTypes(val1, val2, item.type)) {
            return false;
        }
    }
    return true;
}
exports.structsDeepEqual = structsDeepEqual;
/**
 * Loader of the attestation type definition configs
 * @returns a map from attestation types to definition configs
 */
function readAttestationTypeConfigs(configsPath = exports.DEFAULT_ATTESTATION_TYPE_CONFIGS_PATH) {
    const typeRecMap = new Map();
    typeRecMap.set("AddressValidity", {
        "name": "AddressValidity",
        "fullComment": " @custom:name AddressValidity\n @custom:id 0x05\n @custom:supported BTC, DOGE, XRP, testBTC, testDOGE, testXRP\n @author Flare\n @notice An assertion whether a string represents a valid address on an external chain.\n @custom:verification The address is checked against all validity criteria of the chain with `sourceId`.\n Indicator of validity is provided.\n If the address is valid, its standard form and standard hash are computed.\n Validity criteria for each supported chain:\n - [BTC](/specs/attestations/external-chains/address-validity/BTC.md)\n - [DOGE](/specs/attestations/external-chains/address-validity/DOGE.md)\n - [XRPL](/specs/attestations/external-chains/address-validity/XRPL.md)\n @custom:lut `0xffffffffffffffff` ($2^{64}-1$ in hex)",
        "description": "An assertion whether a string represents a valid address on an external chain.",
        "supported": [
            "BTC",
            "DOGE",
            "XRP",
            "testBTC",
            "testDOGE",
            "testXRP"
        ],
        "verification": "The address is checked against all validity criteria of the chain with `sourceId`.\n Indicator of validity is provided.\n If the address is valid, its standard form and standard hash are computed.\n Validity criteria for each supported chain:\n - [BTC](/specs/attestations/external-chains/address-validity/BTC.md)\n - [DOGE](/specs/attestations/external-chains/address-validity/DOGE.md)\n - [XRPL](/specs/attestations/external-chains/address-validity/XRPL.md)\n ",
        "lut": "`0xffffffffffffffff` ($2^{64}-1$ in hex)",
        "proof": {
            "name": "Proof",
            "description": "Toplevel proof",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel proof\n @param merkleProof Merkle proof corresponding to the attestation response.\n @param data Attestation response.",
            "params": [
                {
                    "name": "merkleProof",
                    "type": "bytes32[]",
                    "typeSimple": "bytes32[]",
                    "comment": "Merkle proof corresponding to the attestation response."
                },
                {
                    "name": "data",
                    "type": "struct AddressValidity.Response",
                    "typeSimple": "Response",
                    "comment": "Attestation response."
                }
            ]
        },
        "request": {
            "name": "Request",
            "description": "Toplevel request",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel request\n @param attestationType ID of the attestation type.\n @param sourceId Id of the data source.\n @param messageIntegrityCode `MessageIntegrityCode` that is derived from the expected response.\n @param requestBody Data defining the request. Type (struct) and interpretation is determined by the `attestationType`.",
            "params": [
                {
                    "name": "attestationType",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "ID of the attestation type."
                },
                {
                    "name": "sourceId",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Id of the data source."
                },
                {
                    "name": "messageIntegrityCode",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "`MessageIntegrityCode` that is derived from the expected response."
                },
                {
                    "name": "requestBody",
                    "type": "struct AddressValidity.RequestBody",
                    "typeSimple": "RequestBody",
                    "comment": "Data defining the request. Type (struct) and interpretation is determined by the `attestationType`."
                }
            ]
        },
        "response": {
            "name": "Response",
            "description": "Toplevel response",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel response\n @param attestationType Extracted from the request.\n @param sourceId Extracted from the request.\n @param votingRound The ID of the State Connector round in which the request was considered.\n @param lowestUsedTimestamp The lowest timestamp used to generate the response.\n @param requestBody Extracted from the request.\n @param responseBody Data defining the response. The verification rules for the construction of the response body and the type are defined per specific `attestationType`.",
            "params": [
                {
                    "name": "attestationType",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "sourceId",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "votingRound",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The ID of the State Connector round in which the request was considered."
                },
                {
                    "name": "lowestUsedTimestamp",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The lowest timestamp used to generate the response."
                },
                {
                    "name": "requestBody",
                    "type": "struct AddressValidity.RequestBody",
                    "typeSimple": "RequestBody",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "responseBody",
                    "type": "struct AddressValidity.ResponseBody",
                    "typeSimple": "ResponseBody",
                    "comment": "Data defining the response. The verification rules for the construction of the response body and the type are defined per specific `attestationType`."
                }
            ]
        },
        "requestBody": {
            "name": "RequestBody",
            "description": "Request body for AddressValidity attestation type",
            "above": "",
            "below": "",
            "fullComment": " @notice Request body for AddressValidity attestation type\n @param addressStr Address to be verified.",
            "params": [
                {
                    "name": "addressStr",
                    "type": "string",
                    "typeSimple": "string",
                    "comment": "Address to be verified."
                }
            ]
        },
        "responseBody": {
            "name": "ResponseBody",
            "description": "Response body for AddressValidity attestation type",
            "above": "",
            "below": "",
            "fullComment": " @notice Response body for AddressValidity attestation type\n @param isValid Boolean indicator of the address validity.\n @param standardAddress If `isValid`, standard form of the validated address. Otherwise an empty string.\n @param standardAddressHash If `isValid`, standard address hash of the validated address. Otherwise a zero bytes32 string.",
            "params": [
                {
                    "name": "isValid",
                    "type": "bool",
                    "typeSimple": "bool",
                    "comment": "Boolean indicator of the address validity."
                },
                {
                    "name": "standardAddress",
                    "type": "string",
                    "typeSimple": "string",
                    "comment": "If `isValid`, standard form of the validated address. Otherwise an empty string."
                },
                {
                    "name": "standardAddressHash",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "If `isValid`, standard address hash of the validated address. Otherwise a zero bytes32 string."
                }
            ]
        },
        "requestStructs": [],
        "responseStructs": [],
        "requestAbi": {
            "components": [
                {
                    "internalType": "bytes32",
                    "name": "attestationType",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "sourceId",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "messageIntegrityCode",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "addressStr",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct AddressValidity.RequestBody",
                    "name": "requestBody",
                    "type": "tuple"
                }
            ],
            "internalType": "struct AddressValidity.Request",
            "name": "_request",
            "type": "tuple"
        },
        "responseAbi": {
            "components": [
                {
                    "internalType": "bytes32",
                    "name": "attestationType",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "sourceId",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint64",
                    "name": "votingRound",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "lowestUsedTimestamp",
                    "type": "uint64"
                },
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "addressStr",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct AddressValidity.RequestBody",
                    "name": "requestBody",
                    "type": "tuple"
                },
                {
                    "components": [
                        {
                            "internalType": "bool",
                            "name": "isValid",
                            "type": "bool"
                        },
                        {
                            "internalType": "string",
                            "name": "standardAddress",
                            "type": "string"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "standardAddressHash",
                            "type": "bytes32"
                        }
                    ],
                    "internalType": "struct AddressValidity.ResponseBody",
                    "name": "responseBody",
                    "type": "tuple"
                }
            ],
            "internalType": "struct AddressValidity.Response",
            "name": "_response",
            "type": "tuple"
        },
        "proofAbi": {
            "components": [
                {
                    "internalType": "bytes32[]",
                    "name": "merkleProof",
                    "type": "bytes32[]"
                },
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "attestationType",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "sourceId",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint64",
                            "name": "votingRound",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "lowestUsedTimestamp",
                            "type": "uint64"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "string",
                                    "name": "addressStr",
                                    "type": "string"
                                }
                            ],
                            "internalType": "struct AddressValidity.RequestBody",
                            "name": "requestBody",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "bool",
                                    "name": "isValid",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "string",
                                    "name": "standardAddress",
                                    "type": "string"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "standardAddressHash",
                                    "type": "bytes32"
                                }
                            ],
                            "internalType": "struct AddressValidity.ResponseBody",
                            "name": "responseBody",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct AddressValidity.Response",
                    "name": "data",
                    "type": "tuple"
                }
            ],
            "internalType": "struct AddressValidity.Proof",
            "name": "_proof",
            "type": "tuple"
        }
    });
    typeRecMap.set("BalanceDecreasingTransaction", {
        "name": "BalanceDecreasingTransaction",
        "fullComment": " @custom:name BalanceDecreasingTransaction\n @custom:id 0x02\n @custom:supported BTC, DOGE, XRP, testBTC, testDOGE, testXRP\n @author Flare\n @notice A detection of a transaction that either decreases the balance for some address or is signed by the source address.\n Such an attestation could prove a violation of an agreement and therefore provides grounds to liquidate some funds locked by a smart contract on Flare.\n A transaction is considered “balance decreasing” for the address, if the balance after the transaction is lower than before or the address is among the signers of the transaction (even if its balance is greater than before the transaction).\n @custom:verification The transaction with `transactionId` is fetched from the API of the source blockchain node or relevant indexer.\n If the transaction cannot be fetched or the transaction is in a block that does not have a sufficient [number of confirmations](/specs/attestations/configs.md#finalityconfirmation), the attestation request is rejected.\n Once the transaction is received, the response fields are extracted if the transaction is balance decreasing for the indicated address.\n Some of the request and response fields are chain specific as described below.\n The fields can be computed with the help of a [balance decreasing summary](/specs/attestations/external-chains/transactions.md#balance-decreasing-summary).\n ### UTXO (Bitcoin and Dogecoin)\n - `sourceAddressIndicator` is the the index of the transaction input in hex padded to a 0x prefixed 32-byte string.\n If the indicated input does not exist or the indicated input does not have the address, the attestation request is rejected.\n The `sourceAddress` is the address of the indicated transaction input.\n - `spentAmount` is the sum of values of all inputs with sourceAddress minus the sum of all outputs with `sourceAddress`.\n Can be negative.\n - `blockTimestamp` is the mediantime of a block.\n ### XRPL\n - `sourceAddressIndicator` is the [standard address hash](/specs/attestations/external-chains/standardAddress.md#standard-address-hash) of the address whose balance has been decreased.\n If the address indicated by `sourceAddressIndicator` is not among the signers of the transaction and the balance of the address was not lowered in the transaction, the attestation request is rejected.\n - `spentAmount` is the difference between the balance of the indicated address after and before the transaction.\n Can be negative.\n - `blockTimestamp` is the close_time of a ledger converted to unix time.\n @custom:lut `blockTimestamp`",
        "description": "A detection of a transaction that either decreases the balance for some address or is signed by the source address.\n Such an attestation could prove a violation of an agreement and therefore provides grounds to liquidate some funds locked by a smart contract on Flare.\n A transaction is considered “balance decreasing” for the address, if the balance after the transaction is lower than before or the address is among the signers of the transaction (even if its balance is greater than before the transaction).",
        "supported": [
            "BTC",
            "DOGE",
            "XRP",
            "testBTC",
            "testDOGE",
            "testXRP"
        ],
        "verification": "The transaction with `transactionId` is fetched from the API of the source blockchain node or relevant indexer.\n If the transaction cannot be fetched or the transaction is in a block that does not have a sufficient [number of confirmations](/specs/attestations/configs.md#finalityconfirmation), the attestation request is rejected.\n Once the transaction is received, the response fields are extracted if the transaction is balance decreasing for the indicated address.\n Some of the request and response fields are chain specific as described below.\n The fields can be computed with the help of a [balance decreasing summary](/specs/attestations/external-chains/transactions.md#balance-decreasing-summary).\n ### UTXO (Bitcoin and Dogecoin)\n - `sourceAddressIndicator` is the the index of the transaction input in hex padded to a 0x prefixed 32-byte string.\n If the indicated input does not exist or the indicated input does not have the address, the attestation request is rejected.\n The `sourceAddress` is the address of the indicated transaction input.\n - `spentAmount` is the sum of values of all inputs with sourceAddress minus the sum of all outputs with `sourceAddress`.\n Can be negative.\n - `blockTimestamp` is the mediantime of a block.\n ### XRPL\n - `sourceAddressIndicator` is the [standard address hash](/specs/attestations/external-chains/standardAddress.md#standard-address-hash) of the address whose balance has been decreased.\n If the address indicated by `sourceAddressIndicator` is not among the signers of the transaction and the balance of the address was not lowered in the transaction, the attestation request is rejected.\n - `spentAmount` is the difference between the balance of the indicated address after and before the transaction.\n Can be negative.\n - `blockTimestamp` is the close_time of a ledger converted to unix time.\n ",
        "lut": "`blockTimestamp`",
        "proof": {
            "name": "Proof",
            "description": "Toplevel proof",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel proof\n @param merkleProof Merkle proof corresponding to the attestation response.\n @param data Attestation response.",
            "params": [
                {
                    "name": "merkleProof",
                    "type": "bytes32[]",
                    "typeSimple": "bytes32[]",
                    "comment": "Merkle proof corresponding to the attestation response."
                },
                {
                    "name": "data",
                    "type": "struct BalanceDecreasingTransaction.Response",
                    "typeSimple": "Response",
                    "comment": "Attestation response."
                }
            ]
        },
        "request": {
            "name": "Request",
            "description": "Toplevel request",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel request\n @param attestationType ID of the attestation type.\n @param sourceId ID of the data source.\n @param messageIntegrityCode `MessageIntegrityCode` that is derived from the expected response.\n @param requestBody Data defining the request. Type (struct) and interpretation is determined by the `attestationType`.",
            "params": [
                {
                    "name": "attestationType",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "ID of the attestation type."
                },
                {
                    "name": "sourceId",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "ID of the data source."
                },
                {
                    "name": "messageIntegrityCode",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "`MessageIntegrityCode` that is derived from the expected response."
                },
                {
                    "name": "requestBody",
                    "type": "struct BalanceDecreasingTransaction.RequestBody",
                    "typeSimple": "RequestBody",
                    "comment": "Data defining the request. Type (struct) and interpretation is determined by the `attestationType`."
                }
            ]
        },
        "response": {
            "name": "Response",
            "description": "Toplevel response",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel response\n @param attestationType Extracted from the request.\n @param sourceId Extracted from the request.\n @param votingRound The ID of the State Connector round in which the request was considered. This is a security measure to prevent a collision of attestation hashes.\n @param lowestUsedTimestamp The lowest timestamp used to generate the response.\n @param requestBody Extracted from the request.\n @param responseBody Data defining the response. The verification rules for the construction of the response body and the type are defined per specific `attestationType`.",
            "params": [
                {
                    "name": "attestationType",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "sourceId",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "votingRound",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The ID of the State Connector round in which the request was considered. This is a security measure to prevent a collision of attestation hashes."
                },
                {
                    "name": "lowestUsedTimestamp",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The lowest timestamp used to generate the response."
                },
                {
                    "name": "requestBody",
                    "type": "struct BalanceDecreasingTransaction.RequestBody",
                    "typeSimple": "RequestBody",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "responseBody",
                    "type": "struct BalanceDecreasingTransaction.ResponseBody",
                    "typeSimple": "ResponseBody",
                    "comment": "Data defining the response. The verification rules for the construction of the response body and the type are defined per specific `attestationType`."
                }
            ]
        },
        "requestBody": {
            "name": "RequestBody",
            "description": "Request body for BalanceDecreasingTransaction attestation type",
            "above": "",
            "below": "",
            "fullComment": " @notice Request body for BalanceDecreasingTransaction attestation type\n @param transactionId ID of the payment transaction.\n @param sourceAddressIndicator The indicator of the address whose balance has been decreased.",
            "params": [
                {
                    "name": "transactionId",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "ID of the payment transaction."
                },
                {
                    "name": "sourceAddressIndicator",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "The indicator of the address whose balance has been decreased."
                }
            ]
        },
        "responseBody": {
            "name": "ResponseBody",
            "description": "Response body for BalanceDecreasingTransaction attestation type.",
            "above": "",
            "below": "",
            "fullComment": " @notice Response body for BalanceDecreasingTransaction attestation type.\n @param blockNumber The number of the block in which the transaction is included.\n @param blockTimestamp The timestamp of the block in which the transaction is included.\n @param sourceAddressHash Standard address hash of the address indicated by the `sourceAddressIndicator`.\n @param spentAmount Amount spent by the source address in minimal units.\n @param standardPaymentReference Standard payment reference of the transaction.",
            "params": [
                {
                    "name": "blockNumber",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The number of the block in which the transaction is included."
                },
                {
                    "name": "blockTimestamp",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The timestamp of the block in which the transaction is included."
                },
                {
                    "name": "sourceAddressHash",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Standard address hash of the address indicated by the `sourceAddressIndicator`."
                },
                {
                    "name": "spentAmount",
                    "type": "int256",
                    "typeSimple": "int256",
                    "comment": "Amount spent by the source address in minimal units."
                },
                {
                    "name": "standardPaymentReference",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Standard payment reference of the transaction."
                }
            ]
        },
        "requestStructs": [],
        "responseStructs": [],
        "requestAbi": {
            "components": [
                {
                    "internalType": "bytes32",
                    "name": "attestationType",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "sourceId",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "messageIntegrityCode",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "transactionId",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "sourceAddressIndicator",
                            "type": "bytes32"
                        }
                    ],
                    "internalType": "struct BalanceDecreasingTransaction.RequestBody",
                    "name": "requestBody",
                    "type": "tuple"
                }
            ],
            "internalType": "struct BalanceDecreasingTransaction.Request",
            "name": "_request",
            "type": "tuple"
        },
        "responseAbi": {
            "components": [
                {
                    "internalType": "bytes32",
                    "name": "attestationType",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "sourceId",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint64",
                    "name": "votingRound",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "lowestUsedTimestamp",
                    "type": "uint64"
                },
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "transactionId",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "sourceAddressIndicator",
                            "type": "bytes32"
                        }
                    ],
                    "internalType": "struct BalanceDecreasingTransaction.RequestBody",
                    "name": "requestBody",
                    "type": "tuple"
                },
                {
                    "components": [
                        {
                            "internalType": "uint64",
                            "name": "blockNumber",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "blockTimestamp",
                            "type": "uint64"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "sourceAddressHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "int256",
                            "name": "spentAmount",
                            "type": "int256"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "standardPaymentReference",
                            "type": "bytes32"
                        }
                    ],
                    "internalType": "struct BalanceDecreasingTransaction.ResponseBody",
                    "name": "responseBody",
                    "type": "tuple"
                }
            ],
            "internalType": "struct BalanceDecreasingTransaction.Response",
            "name": "_response",
            "type": "tuple"
        },
        "proofAbi": {
            "components": [
                {
                    "internalType": "bytes32[]",
                    "name": "merkleProof",
                    "type": "bytes32[]"
                },
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "attestationType",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "sourceId",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint64",
                            "name": "votingRound",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "lowestUsedTimestamp",
                            "type": "uint64"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "bytes32",
                                    "name": "transactionId",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "sourceAddressIndicator",
                                    "type": "bytes32"
                                }
                            ],
                            "internalType": "struct BalanceDecreasingTransaction.RequestBody",
                            "name": "requestBody",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint64",
                                    "name": "blockNumber",
                                    "type": "uint64"
                                },
                                {
                                    "internalType": "uint64",
                                    "name": "blockTimestamp",
                                    "type": "uint64"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "sourceAddressHash",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "int256",
                                    "name": "spentAmount",
                                    "type": "int256"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "standardPaymentReference",
                                    "type": "bytes32"
                                }
                            ],
                            "internalType": "struct BalanceDecreasingTransaction.ResponseBody",
                            "name": "responseBody",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct BalanceDecreasingTransaction.Response",
                    "name": "data",
                    "type": "tuple"
                }
            ],
            "internalType": "struct BalanceDecreasingTransaction.Proof",
            "name": "_proof",
            "type": "tuple"
        }
    });
    typeRecMap.set("ConfirmedBlockHeightExists", {
        "name": "ConfirmedBlockHeightExists",
        "fullComment": " @custom:name ConfirmedBlockHeightExists\n @custom:id 0x02\n @custom:supported BTC, DOGE, XRP, testBTC, testDOGE, testXRP\n @author Flare\n @notice An assertion that a block with `blockNumber` is confirmed.\n It also provides data to compute the block production rate in the given time range.\n @custom:verification It is checked that the block with `blockNumber` is confirmed by at least `numberOfConfirmations`.\n If it is not, the request is rejected. We note a block on the tip of the chain is confirmed by 1 block.\n Then `lowestQueryWindowBlock` is determined and its number and timestamp are extracted.\n  Current confirmation heights consensus:\n | `Chain` | `chainId` | `numberOfConfirmations` | `timestamp ` |\n | ------- | --------- | ----------------------- | ------------ |\n | `BTC`   | 0         | 6                       | mediantime   |\n | `DOGE`  | 2         | 60                      | mediantime   |\n | `XRP`   | 3         | 3                       | close_time   |\n @custom:lut `lowestQueryWindowBlockTimestamp`",
        "description": "An assertion that a block with `blockNumber` is confirmed.\n It also provides data to compute the block production rate in the given time range.",
        "supported": [
            "BTC",
            "DOGE",
            "XRP",
            "testBTC",
            "testDOGE",
            "testXRP"
        ],
        "verification": "It is checked that the block with `blockNumber` is confirmed by at least `numberOfConfirmations`.\n If it is not, the request is rejected. We note a block on the tip of the chain is confirmed by 1 block.\n Then `lowestQueryWindowBlock` is determined and its number and timestamp are extracted.\n  Current confirmation heights consensus:\n | `Chain` | `chainId` | `numberOfConfirmations` | `timestamp ` |\n | ------- | --------- | ----------------------- | ------------ |\n | `BTC`   | 0         | 6                       | mediantime   |\n | `DOGE`  | 2         | 60                      | mediantime   |\n | `XRP`   | 3         | 3                       | close_time   |\n ",
        "lut": "`lowestQueryWindowBlockTimestamp`",
        "proof": {
            "name": "Proof",
            "description": "Toplevel proof",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel proof\n @param merkleProof Merkle proof corresponding to the attestation response.\n @param data Attestation response.",
            "params": [
                {
                    "name": "merkleProof",
                    "type": "bytes32[]",
                    "typeSimple": "bytes32[]",
                    "comment": "Merkle proof corresponding to the attestation response."
                },
                {
                    "name": "data",
                    "type": "struct ConfirmedBlockHeightExists.Response",
                    "typeSimple": "Response",
                    "comment": "Attestation response."
                }
            ]
        },
        "request": {
            "name": "Request",
            "description": "Toplevel request",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel request\n @param attestationType ID of the attestation type.\n @param sourceId ID of the data source.\n @param messageIntegrityCode `MessageIntegrityCode` that is derived from the expected response as defined.\n @param requestBody Data defining the request. Type (struct) and interpretation is determined by the `attestationType`.",
            "params": [
                {
                    "name": "attestationType",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "ID of the attestation type."
                },
                {
                    "name": "sourceId",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "ID of the data source."
                },
                {
                    "name": "messageIntegrityCode",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "`MessageIntegrityCode` that is derived from the expected response as defined."
                },
                {
                    "name": "requestBody",
                    "type": "struct ConfirmedBlockHeightExists.RequestBody",
                    "typeSimple": "RequestBody",
                    "comment": "Data defining the request. Type (struct) and interpretation is determined by the `attestationType`."
                }
            ]
        },
        "response": {
            "name": "Response",
            "description": "Toplevel response",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel response\n @param attestationType Extracted from the request.\n @param sourceId Extracted from the request.\n @param votingRound The ID of the State Connector round in which the request was considered.\n @param lowestUsedTimestamp The lowest timestamp used to generate the response.\n @param requestBody Extracted from the request.\n @param responseBody Data defining the response. The verification rules for the construction of the response body and the type are defined per specific `attestationType`.",
            "params": [
                {
                    "name": "attestationType",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "sourceId",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "votingRound",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The ID of the State Connector round in which the request was considered."
                },
                {
                    "name": "lowestUsedTimestamp",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The lowest timestamp used to generate the response."
                },
                {
                    "name": "requestBody",
                    "type": "struct ConfirmedBlockHeightExists.RequestBody",
                    "typeSimple": "RequestBody",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "responseBody",
                    "type": "struct ConfirmedBlockHeightExists.ResponseBody",
                    "typeSimple": "ResponseBody",
                    "comment": "Data defining the response. The verification rules for the construction of the response body and the type are defined per specific `attestationType`."
                }
            ]
        },
        "requestBody": {
            "name": "RequestBody",
            "description": "Request body for ConfirmedBlockHeightExistsType attestation type",
            "above": "",
            "below": "",
            "fullComment": " @notice Request body for ConfirmedBlockHeightExistsType attestation type\n @param blockNumber The number of the block the request wants a confirmation of.\n @param queryWindow The length of the period in which the block production rate is to be computed.",
            "params": [
                {
                    "name": "blockNumber",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The number of the block the request wants a confirmation of."
                },
                {
                    "name": "queryWindow",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The length of the period in which the block production rate is to be computed."
                }
            ]
        },
        "responseBody": {
            "name": "ResponseBody",
            "description": "Response body for ConfirmedBlockHeightExistsType attestation type",
            "above": "",
            "below": "`blockNumber`, `lowestQueryWindowBlockNumber`, `blockTimestamp` and `lowestQueryWindowBlockTimestamp` can be used to compute the average block production time in the specified block range.",
            "fullComment": " @notice Response body for ConfirmedBlockHeightExistsType attestation type\n @custom:below `blockNumber`, `lowestQueryWindowBlockNumber`, `blockTimestamp` and `lowestQueryWindowBlockTimestamp` can be used to compute the average block production time in the specified block range.\n @param blockTimestamp The timestamp of the block with `blockNumber`.\n @param numberOfConfirmations The depth at which a block is considered confirmed depending on the chain. All attestation providers must agree on this number.\n @param lowestQueryWindowBlockNumber The block number of the latest block that has a timestamp strictly smaller than `blockTimestamp` - `queryWindow`.\n @param lowestQueryWindowBlockTimestamp The timestamp of the block at height `lowestQueryWindowBlockNumber`.",
            "params": [
                {
                    "name": "blockTimestamp",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The timestamp of the block with `blockNumber`."
                },
                {
                    "name": "numberOfConfirmations",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The depth at which a block is considered confirmed depending on the chain. All attestation providers must agree on this number."
                },
                {
                    "name": "lowestQueryWindowBlockNumber",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The block number of the latest block that has a timestamp strictly smaller than `blockTimestamp` - `queryWindow`."
                },
                {
                    "name": "lowestQueryWindowBlockTimestamp",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The timestamp of the block at height `lowestQueryWindowBlockNumber`."
                }
            ]
        },
        "requestStructs": [],
        "responseStructs": [],
        "requestAbi": {
            "components": [
                {
                    "internalType": "bytes32",
                    "name": "attestationType",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "sourceId",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "messageIntegrityCode",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "uint64",
                            "name": "blockNumber",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "queryWindow",
                            "type": "uint64"
                        }
                    ],
                    "internalType": "struct ConfirmedBlockHeightExists.RequestBody",
                    "name": "requestBody",
                    "type": "tuple"
                }
            ],
            "internalType": "struct ConfirmedBlockHeightExists.Request",
            "name": "_request",
            "type": "tuple"
        },
        "responseAbi": {
            "components": [
                {
                    "internalType": "bytes32",
                    "name": "attestationType",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "sourceId",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint64",
                    "name": "votingRound",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "lowestUsedTimestamp",
                    "type": "uint64"
                },
                {
                    "components": [
                        {
                            "internalType": "uint64",
                            "name": "blockNumber",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "queryWindow",
                            "type": "uint64"
                        }
                    ],
                    "internalType": "struct ConfirmedBlockHeightExists.RequestBody",
                    "name": "requestBody",
                    "type": "tuple"
                },
                {
                    "components": [
                        {
                            "internalType": "uint64",
                            "name": "blockTimestamp",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "numberOfConfirmations",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "lowestQueryWindowBlockNumber",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "lowestQueryWindowBlockTimestamp",
                            "type": "uint64"
                        }
                    ],
                    "internalType": "struct ConfirmedBlockHeightExists.ResponseBody",
                    "name": "responseBody",
                    "type": "tuple"
                }
            ],
            "internalType": "struct ConfirmedBlockHeightExists.Response",
            "name": "_response",
            "type": "tuple"
        },
        "proofAbi": {
            "components": [
                {
                    "internalType": "bytes32[]",
                    "name": "merkleProof",
                    "type": "bytes32[]"
                },
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "attestationType",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "sourceId",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint64",
                            "name": "votingRound",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "lowestUsedTimestamp",
                            "type": "uint64"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint64",
                                    "name": "blockNumber",
                                    "type": "uint64"
                                },
                                {
                                    "internalType": "uint64",
                                    "name": "queryWindow",
                                    "type": "uint64"
                                }
                            ],
                            "internalType": "struct ConfirmedBlockHeightExists.RequestBody",
                            "name": "requestBody",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint64",
                                    "name": "blockTimestamp",
                                    "type": "uint64"
                                },
                                {
                                    "internalType": "uint64",
                                    "name": "numberOfConfirmations",
                                    "type": "uint64"
                                },
                                {
                                    "internalType": "uint64",
                                    "name": "lowestQueryWindowBlockNumber",
                                    "type": "uint64"
                                },
                                {
                                    "internalType": "uint64",
                                    "name": "lowestQueryWindowBlockTimestamp",
                                    "type": "uint64"
                                }
                            ],
                            "internalType": "struct ConfirmedBlockHeightExists.ResponseBody",
                            "name": "responseBody",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct ConfirmedBlockHeightExists.Response",
                    "name": "data",
                    "type": "tuple"
                }
            ],
            "internalType": "struct ConfirmedBlockHeightExists.Proof",
            "name": "_proof",
            "type": "tuple"
        }
    });
    typeRecMap.set("EVMTransaction", {
        "name": "EVMTransaction",
        "fullComment": " @custom:name EVMTransaction\n @custom:id 0x06\n @custom:supported ETH, FLR, SGB, testETH, testFLR, testSGB\n @author Flare\n @notice A relay of a transaction from an EVM chain.\n This type is only relevant for EVM-compatible chains.\n @custom:verification If a transaction with the `transactionId` is in a block on the main branch with at least `requiredConfirmations`, the specified data is relayed.\n If an indicated event does not exist, the request is rejected.\n @custom:lut `timestamp`",
        "description": "A relay of a transaction from an EVM chain.\n This type is only relevant for EVM-compatible chains.",
        "supported": [
            "ETH",
            "FLR",
            "SGB",
            "testETH",
            "testFLR",
            "testSGB"
        ],
        "verification": "If a transaction with the `transactionId` is in a block on the main branch with at least `requiredConfirmations`, the specified data is relayed.\n If an indicated event does not exist, the request is rejected.\n ",
        "lut": "`timestamp`",
        "proof": {
            "name": "Proof",
            "description": "Toplevel proof",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel proof\n @param merkleProof Merkle proof corresponding to the attestation response.\n @param data Attestation response.",
            "params": [
                {
                    "name": "merkleProof",
                    "type": "bytes32[]",
                    "typeSimple": "bytes32[]",
                    "comment": "Merkle proof corresponding to the attestation response."
                },
                {
                    "name": "data",
                    "type": "struct EVMTransaction.Response",
                    "typeSimple": "Response",
                    "comment": "Attestation response."
                }
            ]
        },
        "request": {
            "name": "Request",
            "description": "Toplevel request",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel request\n @param attestationType ID of the attestation type.\n @param sourceId  ID of the data source.\n @param messageIntegrityCode `MessageIntegrityCode` that is derived from the expected response.\n @param requestBody Data defining the request. Type (struct) and interpretation is determined by the `attestationType`.",
            "params": [
                {
                    "name": "attestationType",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "ID of the attestation type."
                },
                {
                    "name": "sourceId",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "ID of the data source."
                },
                {
                    "name": "messageIntegrityCode",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "`MessageIntegrityCode` that is derived from the expected response."
                },
                {
                    "name": "requestBody",
                    "type": "struct EVMTransaction.RequestBody",
                    "typeSimple": "RequestBody",
                    "comment": "Data defining the request. Type (struct) and interpretation is determined by the `attestationType`."
                }
            ]
        },
        "response": {
            "name": "Response",
            "description": "Toplevel response",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel response\n @param attestationType Extracted from the request.\n @param sourceId Extracted from the request.\n @param votingRound The ID of the State Connector round in which the request was considered.\n @param lowestUsedTimestamp The lowest timestamp used to generate the response.\n @param requestBody Extracted from the request.\n @param responseBody Data defining the response. The verification rules for the construction of the response body and the type are defined per specific `attestationType`.",
            "params": [
                {
                    "name": "attestationType",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "sourceId",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "votingRound",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The ID of the State Connector round in which the request was considered."
                },
                {
                    "name": "lowestUsedTimestamp",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The lowest timestamp used to generate the response."
                },
                {
                    "name": "requestBody",
                    "type": "struct EVMTransaction.RequestBody",
                    "typeSimple": "RequestBody",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "responseBody",
                    "type": "struct EVMTransaction.ResponseBody",
                    "typeSimple": "ResponseBody",
                    "comment": "Data defining the response. The verification rules for the construction of the response body and the type are defined per specific `attestationType`."
                }
            ]
        },
        "requestBody": {
            "name": "RequestBody",
            "description": "Request body for EVM transaction attestation type",
            "above": "",
            "below": "Note that events (logs) are indexed in block not in each transaction. The contract that uses the attestation should specify the order of event logs as needed and the requestor should sort `logIndices`\n with respect to the set specifications. If possible, the contact should only require one `logIndex`.",
            "fullComment": " @notice Request body for EVM transaction attestation type\n @custom:below Note that events (logs) are indexed in block not in each transaction. The contract that uses the attestation should specify the order of event logs as needed and the requestor should sort `logIndices`\n with respect to the set specifications. If possible, the contact should only require one `logIndex`.\n @param transactionHash Hash of the transaction(transactionHash).\n @param requiredConfirmations The height at which a block is considered confirmed by the requestor.\n @param provideInput If true, \"input\" field is included in the response.\n @param listEvents If true, events indicated by `logIndices` are included in the response. Otherwise, no events are included in the response.\n @param logIndices If `listEvents` is `false`, this should be an empty list, otherwise, the request is rejected. If `listEvents` is `true`, this is the list of indices (logIndex) of the events to be relayed (sorted by the requestor). The array should contain at most 50 indices. If empty, it indicates all events in order capped by 50.",
            "params": [
                {
                    "name": "transactionHash",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Hash of the transaction(transactionHash)."
                },
                {
                    "name": "requiredConfirmations",
                    "type": "uint16",
                    "typeSimple": "uint16",
                    "comment": "The height at which a block is considered confirmed by the requestor."
                },
                {
                    "name": "provideInput",
                    "type": "bool",
                    "typeSimple": "bool",
                    "comment": "If true, \"input\" field is included in the response."
                },
                {
                    "name": "listEvents",
                    "type": "bool",
                    "typeSimple": "bool",
                    "comment": "If true, events indicated by `logIndices` are included in the response. Otherwise, no events are included in the response."
                },
                {
                    "name": "logIndices",
                    "type": "uint32[]",
                    "typeSimple": "uint32[]",
                    "comment": "If `listEvents` is `false`, this should be an empty list, otherwise, the request is rejected. If `listEvents` is `true`, this is the list of indices (logIndex) of the events to be relayed (sorted by the requestor). The array should contain at most 50 indices. If empty, it indicates all events in order capped by 50."
                }
            ]
        },
        "responseBody": {
            "name": "ResponseBody",
            "description": "Response body for EVM transaction attestation type",
            "above": "",
            "below": "The fields are in line with [transaction](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionbyhash) provided by EVM node.",
            "fullComment": " @notice Response body for EVM transaction attestation type\n @custom:below The fields are in line with [transaction](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionbyhash) provided by EVM node.\n @param blockNumber Number of the block in which the transaction is included.\n @param timestamp Timestamp of the block in which the transaction is included.\n @param sourceAddress The address (from) that signed the transaction.\n @param isDeployment Indicate whether it is a contract creation transaction.\n @param receivingAddress The address (to) of the receiver of the initial transaction. Zero address if `isDeployment` is `true`.\n @param value The value transferred by the initial transaction in wei.\n @param input If `provideInput`, this is the data send along with the initial transaction. Otherwise it is the default value `0x00`.\n @param status Status of the transaction 1 - success, 0 - failure.\n @param events If `listEvents` is `true`, an array of the requested events. Sorted by the logIndex in the same order as `logIndices`. Otherwise, an empty array.",
            "params": [
                {
                    "name": "blockNumber",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "Number of the block in which the transaction is included."
                },
                {
                    "name": "timestamp",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "Timestamp of the block in which the transaction is included."
                },
                {
                    "name": "sourceAddress",
                    "type": "address",
                    "typeSimple": "address",
                    "comment": "The address (from) that signed the transaction."
                },
                {
                    "name": "isDeployment",
                    "type": "bool",
                    "typeSimple": "bool",
                    "comment": "Indicate whether it is a contract creation transaction."
                },
                {
                    "name": "receivingAddress",
                    "type": "address",
                    "typeSimple": "address",
                    "comment": "The address (to) of the receiver of the initial transaction. Zero address if `isDeployment` is `true`."
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "typeSimple": "uint256",
                    "comment": "The value transferred by the initial transaction in wei."
                },
                {
                    "name": "input",
                    "type": "bytes",
                    "typeSimple": "bytes",
                    "comment": "If `provideInput`, this is the data send along with the initial transaction. Otherwise it is the default value `0x00`."
                },
                {
                    "name": "status",
                    "type": "uint8",
                    "typeSimple": "uint8",
                    "comment": "Status of the transaction 1 - success, 0 - failure."
                },
                {
                    "name": "events",
                    "type": "struct EVMTransaction.Event[]",
                    "typeSimple": "Event[]",
                    "comment": "If `listEvents` is `true`, an array of the requested events. Sorted by the logIndex in the same order as `logIndices`. Otherwise, an empty array."
                }
            ]
        },
        "requestStructs": [],
        "responseStructs": [
            {
                "name": "Event",
                "description": "Event log record",
                "above": "An `Event` is a struct with the following fields:",
                "below": "The fields are in line with [EVM event logs](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges).",
                "fullComment": " @notice Event log record\n @custom:above An `Event` is a struct with the following fields:\n @custom:below The fields are in line with [EVM event logs](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges).\n @param logIndex The consecutive number of the event in block.\n @param emitterAddress The address of the contract that emitted the event.\n @param topics An array of up to four 32-byte strings of indexed log arguments.\n @param data Concatenated 32-byte strings of non-indexed log arguments. At least 32 bytes long.\n @param removed It is `true` if the log was removed due to a chain reorganization and `false` if it is a valid log.",
                "params": [
                    {
                        "name": "logIndex",
                        "type": "uint32",
                        "typeSimple": "uint32",
                        "comment": "The consecutive number of the event in block."
                    },
                    {
                        "name": "emitterAddress",
                        "type": "address",
                        "typeSimple": "address",
                        "comment": "The address of the contract that emitted the event."
                    },
                    {
                        "name": "topics",
                        "type": "bytes32[]",
                        "typeSimple": "bytes32[]",
                        "comment": "An array of up to four 32-byte strings of indexed log arguments."
                    },
                    {
                        "name": "data",
                        "type": "bytes",
                        "typeSimple": "bytes",
                        "comment": "Concatenated 32-byte strings of non-indexed log arguments. At least 32 bytes long."
                    },
                    {
                        "name": "removed",
                        "type": "bool",
                        "typeSimple": "bool",
                        "comment": "It is `true` if the log was removed due to a chain reorganization and `false` if it is a valid log."
                    }
                ]
            }
        ],
        "requestAbi": {
            "components": [
                {
                    "internalType": "bytes32",
                    "name": "attestationType",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "sourceId",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "messageIntegrityCode",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "transactionHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint16",
                            "name": "requiredConfirmations",
                            "type": "uint16"
                        },
                        {
                            "internalType": "bool",
                            "name": "provideInput",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "listEvents",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint32[]",
                            "name": "logIndices",
                            "type": "uint32[]"
                        }
                    ],
                    "internalType": "struct EVMTransaction.RequestBody",
                    "name": "requestBody",
                    "type": "tuple"
                }
            ],
            "internalType": "struct EVMTransaction.Request",
            "name": "_request",
            "type": "tuple"
        },
        "responseAbi": {
            "components": [
                {
                    "internalType": "bytes32",
                    "name": "attestationType",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "sourceId",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint64",
                    "name": "votingRound",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "lowestUsedTimestamp",
                    "type": "uint64"
                },
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "transactionHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint16",
                            "name": "requiredConfirmations",
                            "type": "uint16"
                        },
                        {
                            "internalType": "bool",
                            "name": "provideInput",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "listEvents",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint32[]",
                            "name": "logIndices",
                            "type": "uint32[]"
                        }
                    ],
                    "internalType": "struct EVMTransaction.RequestBody",
                    "name": "requestBody",
                    "type": "tuple"
                },
                {
                    "components": [
                        {
                            "internalType": "uint64",
                            "name": "blockNumber",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "timestamp",
                            "type": "uint64"
                        },
                        {
                            "internalType": "address",
                            "name": "sourceAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "isDeployment",
                            "type": "bool"
                        },
                        {
                            "internalType": "address",
                            "name": "receivingAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes",
                            "name": "input",
                            "type": "bytes"
                        },
                        {
                            "internalType": "uint8",
                            "name": "status",
                            "type": "uint8"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint32",
                                    "name": "logIndex",
                                    "type": "uint32"
                                },
                                {
                                    "internalType": "address",
                                    "name": "emitterAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes32[]",
                                    "name": "topics",
                                    "type": "bytes32[]"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "data",
                                    "type": "bytes"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "removed",
                                    "type": "bool"
                                }
                            ],
                            "internalType": "struct EVMTransaction.Event[]",
                            "name": "events",
                            "type": "tuple[]"
                        }
                    ],
                    "internalType": "struct EVMTransaction.ResponseBody",
                    "name": "responseBody",
                    "type": "tuple"
                }
            ],
            "internalType": "struct EVMTransaction.Response",
            "name": "_response",
            "type": "tuple"
        },
        "proofAbi": {
            "components": [
                {
                    "internalType": "bytes32[]",
                    "name": "merkleProof",
                    "type": "bytes32[]"
                },
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "attestationType",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "sourceId",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint64",
                            "name": "votingRound",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "lowestUsedTimestamp",
                            "type": "uint64"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "bytes32",
                                    "name": "transactionHash",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint16",
                                    "name": "requiredConfirmations",
                                    "type": "uint16"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "provideInput",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "listEvents",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "uint32[]",
                                    "name": "logIndices",
                                    "type": "uint32[]"
                                }
                            ],
                            "internalType": "struct EVMTransaction.RequestBody",
                            "name": "requestBody",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint64",
                                    "name": "blockNumber",
                                    "type": "uint64"
                                },
                                {
                                    "internalType": "uint64",
                                    "name": "timestamp",
                                    "type": "uint64"
                                },
                                {
                                    "internalType": "address",
                                    "name": "sourceAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "isDeployment",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "address",
                                    "name": "receivingAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "value",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bytes",
                                    "name": "input",
                                    "type": "bytes"
                                },
                                {
                                    "internalType": "uint8",
                                    "name": "status",
                                    "type": "uint8"
                                },
                                {
                                    "components": [
                                        {
                                            "internalType": "uint32",
                                            "name": "logIndex",
                                            "type": "uint32"
                                        },
                                        {
                                            "internalType": "address",
                                            "name": "emitterAddress",
                                            "type": "address"
                                        },
                                        {
                                            "internalType": "bytes32[]",
                                            "name": "topics",
                                            "type": "bytes32[]"
                                        },
                                        {
                                            "internalType": "bytes",
                                            "name": "data",
                                            "type": "bytes"
                                        },
                                        {
                                            "internalType": "bool",
                                            "name": "removed",
                                            "type": "bool"
                                        }
                                    ],
                                    "internalType": "struct EVMTransaction.Event[]",
                                    "name": "events",
                                    "type": "tuple[]"
                                }
                            ],
                            "internalType": "struct EVMTransaction.ResponseBody",
                            "name": "responseBody",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct EVMTransaction.Response",
                    "name": "data",
                    "type": "tuple"
                }
            ],
            "internalType": "struct EVMTransaction.Proof",
            "name": "_proof",
            "type": "tuple"
        }
    });
    typeRecMap.set("Payment", {
        "name": "Payment",
        "fullComment": " @custom:name Payment\n @custom:id 0x01\n @custom:supported BTC, DOGE, XRP, testBTC, testDOGE, testXRP\n @author Flare\n @notice A relay of a transaction on an external chain that is considered a payment in a native currency.\n Various blockchains support different types of native payments. For each blockchain, it is specified how a payment\n transaction should be formed to be provable by this attestation type.\n The provable payments emulate traditional banking payments from entity A to entity B in native currency with an optional payment reference.\n @custom:verification The transaction with `transactionId` is fetched from the API of the blockchain node or relevant indexer.\n If the transaction cannot be fetched or the transaction is in a block that does not have a sufficient [number of confirmations](/specs/attestations/configs.md#finalityconfirmation), the attestation request is rejected.\n Once the transaction is received, the [payment summary](/specs/attestations/external-chains/transactions.md#payment-summary) is computed according to the rules for the source chain.\n If the summary is successfully calculated, the response is assembled from the summary.\n `blockNumber` and `blockTimestamp` are retrieved from the block if they are not included in the transaction data.\n For Bitcoin and Dogecoin, `blockTimestamp` is mediantime of the block.\n For XRPL, `blockTimestamp` is close time of the ledger converted to UNIX time.\n If the summary is not successfully calculated, the attestation request is rejected.\n @custom:lut `blockTimestamp`",
        "description": "A relay of a transaction on an external chain that is considered a payment in a native currency.\n Various blockchains support different types of native payments. For each blockchain, it is specified how a payment\n transaction should be formed to be provable by this attestation type.\n The provable payments emulate traditional banking payments from entity A to entity B in native currency with an optional payment reference.",
        "supported": [
            "BTC",
            "DOGE",
            "XRP",
            "testBTC",
            "testDOGE",
            "testXRP"
        ],
        "verification": "The transaction with `transactionId` is fetched from the API of the blockchain node or relevant indexer.\n If the transaction cannot be fetched or the transaction is in a block that does not have a sufficient [number of confirmations](/specs/attestations/configs.md#finalityconfirmation), the attestation request is rejected.\n Once the transaction is received, the [payment summary](/specs/attestations/external-chains/transactions.md#payment-summary) is computed according to the rules for the source chain.\n If the summary is successfully calculated, the response is assembled from the summary.\n `blockNumber` and `blockTimestamp` are retrieved from the block if they are not included in the transaction data.\n For Bitcoin and Dogecoin, `blockTimestamp` is mediantime of the block.\n For XRPL, `blockTimestamp` is close time of the ledger converted to UNIX time.\n If the summary is not successfully calculated, the attestation request is rejected.\n ",
        "lut": "`blockTimestamp`",
        "proof": {
            "name": "Proof",
            "description": "Toplevel proof",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel proof\n @param merkleProof Merkle proof corresponding to the attestation response.\n @param data Attestation response.",
            "params": [
                {
                    "name": "merkleProof",
                    "type": "bytes32[]",
                    "typeSimple": "bytes32[]",
                    "comment": "Merkle proof corresponding to the attestation response."
                },
                {
                    "name": "data",
                    "type": "struct Payment.Response",
                    "typeSimple": "Response",
                    "comment": "Attestation response."
                }
            ]
        },
        "request": {
            "name": "Request",
            "description": "Toplevel request",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel request\n @param attestationType ID of the attestation type.\n @param sourceId ID of the data source.\n @param messageIntegrityCode `MessageIntegrityCode` that is derived from the expected response.\n @param requestBody Data defining the request. Type (struct) and interpretation is determined by the `attestationType`.",
            "params": [
                {
                    "name": "attestationType",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "ID of the attestation type."
                },
                {
                    "name": "sourceId",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "ID of the data source."
                },
                {
                    "name": "messageIntegrityCode",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "`MessageIntegrityCode` that is derived from the expected response."
                },
                {
                    "name": "requestBody",
                    "type": "struct Payment.RequestBody",
                    "typeSimple": "RequestBody",
                    "comment": "Data defining the request. Type (struct) and interpretation is determined by the `attestationType`."
                }
            ]
        },
        "response": {
            "name": "Response",
            "description": "Toplevel response",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel response\n @param attestationType Extracted from the request.\n @param sourceId Extracted from the request.\n @param votingRound The ID of the State Connector round in which the request was considered.\n @param lowestUsedTimestamp The lowest timestamp used to generate the response.\n @param requestBody Extracted from the request.\n @param responseBody Data defining the response. The verification rules for the construction of the response body and the type are defined per specific `attestationType`.",
            "params": [
                {
                    "name": "attestationType",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "sourceId",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "votingRound",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The ID of the State Connector round in which the request was considered."
                },
                {
                    "name": "lowestUsedTimestamp",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The lowest timestamp used to generate the response."
                },
                {
                    "name": "requestBody",
                    "type": "struct Payment.RequestBody",
                    "typeSimple": "RequestBody",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "responseBody",
                    "type": "struct Payment.ResponseBody",
                    "typeSimple": "ResponseBody",
                    "comment": "Data defining the response. The verification rules for the construction of the response body and the type are defined per specific `attestationType`."
                }
            ]
        },
        "requestBody": {
            "name": "RequestBody",
            "description": "Request body for Payment attestation type",
            "above": "",
            "below": "",
            "fullComment": " @notice Request body for Payment attestation type\n @param transactionId ID of the payment transaction.\n @param inUtxo For UTXO chains, this is the index of the transaction input with source address. Always 0 for the non-utxo chains.\n @param utxo For UTXO chains, this is the index of the transaction output with receiving address. Always 0 for the non-utxo chains.",
            "params": [
                {
                    "name": "transactionId",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "ID of the payment transaction."
                },
                {
                    "name": "inUtxo",
                    "type": "uint256",
                    "typeSimple": "uint256",
                    "comment": "For UTXO chains, this is the index of the transaction input with source address. Always 0 for the non-utxo chains."
                },
                {
                    "name": "utxo",
                    "type": "uint256",
                    "typeSimple": "uint256",
                    "comment": "For UTXO chains, this is the index of the transaction output with receiving address. Always 0 for the non-utxo chains."
                }
            ]
        },
        "responseBody": {
            "name": "ResponseBody",
            "description": "Response body for Payment attestation type",
            "above": "",
            "below": "",
            "fullComment": " @notice Response body for Payment attestation type\n @param blockNumber Number of the block in which the transaction is included.\n @param blockTimestamp The timestamp of the block in which the transaction is included.\n @param sourceAddressHash Standard address hash of the source address.\n @param receivingAddressHash Standard address hash of the receiving address. The zero 32-byte string if there is no receivingAddress (if `status` is not success).\n @param intendedReceivingAddressHash Standard address hash of the intended receiving address. Relevant if the transaction is unsuccessful.\n @param spentAmount Amount in minimal units spent by the source address.\n @param intendedSpentAmount Amount in minimal units to be spent by the source address. Relevant if the transaction status is unsuccessful.\n @param receivedAmount Amount in minimal units received by the receiving address.\n @param intendedReceivedAmount Amount in minimal units intended to be received by the receiving address. Relevant if the transaction is unsuccessful.\n @param standardPaymentReference [Standard payment reference](/specs/attestations/external-chains/standardPaymentReference.md) of the transaction.\n @param oneToOne Indicator whether only one source and one receiver are involved in the transaction.\n @param status  [Succes status](/specs/attestations/external-chains/transactions.md#transaction-success-status) of the transaction: 0 - success, 1 - failed by sender's fault,x  2 - failed by receiver's fault.",
            "params": [
                {
                    "name": "blockNumber",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "Number of the block in which the transaction is included."
                },
                {
                    "name": "blockTimestamp",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The timestamp of the block in which the transaction is included."
                },
                {
                    "name": "sourceAddressHash",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Standard address hash of the source address."
                },
                {
                    "name": "receivingAddressHash",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Standard address hash of the receiving address. The zero 32-byte string if there is no receivingAddress (if `status` is not success)."
                },
                {
                    "name": "intendedReceivingAddressHash",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Standard address hash of the intended receiving address. Relevant if the transaction is unsuccessful."
                },
                {
                    "name": "spentAmount",
                    "type": "int256",
                    "typeSimple": "int256",
                    "comment": "Amount in minimal units spent by the source address."
                },
                {
                    "name": "intendedSpentAmount",
                    "type": "int256",
                    "typeSimple": "int256",
                    "comment": "Amount in minimal units to be spent by the source address. Relevant if the transaction status is unsuccessful."
                },
                {
                    "name": "receivedAmount",
                    "type": "int256",
                    "typeSimple": "int256",
                    "comment": "Amount in minimal units received by the receiving address."
                },
                {
                    "name": "intendedReceivedAmount",
                    "type": "int256",
                    "typeSimple": "int256",
                    "comment": "Amount in minimal units intended to be received by the receiving address. Relevant if the transaction is unsuccessful."
                },
                {
                    "name": "standardPaymentReference",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "[Standard payment reference](/specs/attestations/external-chains/standardPaymentReference.md) of the transaction."
                },
                {
                    "name": "oneToOne",
                    "type": "bool",
                    "typeSimple": "bool",
                    "comment": "Indicator whether only one source and one receiver are involved in the transaction."
                },
                {
                    "name": "status",
                    "type": "uint8",
                    "typeSimple": "uint8",
                    "comment": "[Succes status](/specs/attestations/external-chains/transactions.md#transaction-success-status) of the transaction: 0 - success, 1 - failed by sender's fault,x  2 - failed by receiver's fault."
                }
            ]
        },
        "requestStructs": [],
        "responseStructs": [],
        "requestAbi": {
            "components": [
                {
                    "internalType": "bytes32",
                    "name": "attestationType",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "sourceId",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "messageIntegrityCode",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "transactionId",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "inUtxo",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "utxo",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Payment.RequestBody",
                    "name": "requestBody",
                    "type": "tuple"
                }
            ],
            "internalType": "struct Payment.Request",
            "name": "_request",
            "type": "tuple"
        },
        "responseAbi": {
            "components": [
                {
                    "internalType": "bytes32",
                    "name": "attestationType",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "sourceId",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint64",
                    "name": "votingRound",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "lowestUsedTimestamp",
                    "type": "uint64"
                },
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "transactionId",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "inUtxo",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "utxo",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Payment.RequestBody",
                    "name": "requestBody",
                    "type": "tuple"
                },
                {
                    "components": [
                        {
                            "internalType": "uint64",
                            "name": "blockNumber",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "blockTimestamp",
                            "type": "uint64"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "sourceAddressHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "receivingAddressHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "intendedReceivingAddressHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "int256",
                            "name": "spentAmount",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "intendedSpentAmount",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "receivedAmount",
                            "type": "int256"
                        },
                        {
                            "internalType": "int256",
                            "name": "intendedReceivedAmount",
                            "type": "int256"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "standardPaymentReference",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bool",
                            "name": "oneToOne",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint8",
                            "name": "status",
                            "type": "uint8"
                        }
                    ],
                    "internalType": "struct Payment.ResponseBody",
                    "name": "responseBody",
                    "type": "tuple"
                }
            ],
            "internalType": "struct Payment.Response",
            "name": "_response",
            "type": "tuple"
        },
        "proofAbi": {
            "components": [
                {
                    "internalType": "bytes32[]",
                    "name": "merkleProof",
                    "type": "bytes32[]"
                },
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "attestationType",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "sourceId",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint64",
                            "name": "votingRound",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "lowestUsedTimestamp",
                            "type": "uint64"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "bytes32",
                                    "name": "transactionId",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "inUtxo",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "utxo",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Payment.RequestBody",
                            "name": "requestBody",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint64",
                                    "name": "blockNumber",
                                    "type": "uint64"
                                },
                                {
                                    "internalType": "uint64",
                                    "name": "blockTimestamp",
                                    "type": "uint64"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "sourceAddressHash",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "receivingAddressHash",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "intendedReceivingAddressHash",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "int256",
                                    "name": "spentAmount",
                                    "type": "int256"
                                },
                                {
                                    "internalType": "int256",
                                    "name": "intendedSpentAmount",
                                    "type": "int256"
                                },
                                {
                                    "internalType": "int256",
                                    "name": "receivedAmount",
                                    "type": "int256"
                                },
                                {
                                    "internalType": "int256",
                                    "name": "intendedReceivedAmount",
                                    "type": "int256"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "standardPaymentReference",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "oneToOne",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "uint8",
                                    "name": "status",
                                    "type": "uint8"
                                }
                            ],
                            "internalType": "struct Payment.ResponseBody",
                            "name": "responseBody",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct Payment.Response",
                    "name": "data",
                    "type": "tuple"
                }
            ],
            "internalType": "struct Payment.Proof",
            "name": "_proof",
            "type": "tuple"
        }
    });
    typeRecMap.set("ReferencedPaymentNonexistence", {
        "name": "ReferencedPaymentNonexistence",
        "fullComment": " @custom:name ReferencedPaymentNonexistence\n @custom:id 0x04\n @custom:supported BTC, DOGE, XRP, testBTC, testDOGE, testXRP\n @author Flare\n @notice Assertion that an agreed-upon payment has not been made by a certain deadline.\n A confirmed request shows that a transaction meeting certain criteria (address, amount, reference) did not appear in the specified block range.\n \n \n This type of attestation can be used to e.g. provide grounds to liquidate funds locked by a smart contract on Flare when a payment is missed. \n @custom:verification If `firstOverflowBlock` cannot be determined or does not have a sufficient [number of confirmations](/specs/attestations/configs.md#finalityconfirmation), the attestation request is rejected.\n If `firstOverflowBlockNumber` is higher or equal to `minimalBlockNumber`, the request is rejected.\n The search range are blocks between heights including `minimalBlockNumber` and excluding `firstOverflowBlockNumber`.\n If the verifier does not have a view of all blocks from `minimalBlockNumber` to `firstOverflowBlockNumber`, the attestation request is rejected.\n The request is confirmed if no transaction meeting the specified criteria is found in the search range.\n The criteria and timestamp are chain specific.\n ### UTXO (Bitcoin and Dogecoin)\n Criteria for the transaction:\n - It is not coinbase transaction.\n - The transaction has the specified [standardPaymentReference](/specs/attestations/external-chains/standardPaymentReference.md#btc-and-doge-blockchains).\n - The sum of values of all outputs with the specified address minus the sum of values of all inputs with the specified address is greater than `amount` (in practice the sum of all values of the inputs with the specified address is zero).\n \n Timestamp is `mediantime`.\n ### XRPL\n Criteria for the transaction:\n - The transaction is of type payment.\n - The transaction has the specified [standardPaymentReference](/specs/attestations/external-chains/standardPaymentReference.md#xrp),\n - One of the following is true:\n   - Transaction status is `SUCCESS` and the amount received by the specified destination address is greater than the specified `value`.\n   - Transaction status is `RECEIVER_FAILURE` and the specified destination address would receive an amount greater than the specified `value` had the transaction been successful.\n \n Timestamp is `close_time` converted to UNIX time.\n @custom:lut `minimalBlockTimestamp`",
        "description": "Assertion that an agreed-upon payment has not been made by a certain deadline.\n A confirmed request shows that a transaction meeting certain criteria (address, amount, reference) did not appear in the specified block range.\n \n \n This type of attestation can be used to e.g. provide grounds to liquidate funds locked by a smart contract on Flare when a payment is missed.",
        "supported": [
            "BTC",
            "DOGE",
            "XRP",
            "testBTC",
            "testDOGE",
            "testXRP"
        ],
        "verification": "If `firstOverflowBlock` cannot be determined or does not have a sufficient [number of confirmations](/specs/attestations/configs.md#finalityconfirmation), the attestation request is rejected.\n If `firstOverflowBlockNumber` is higher or equal to `minimalBlockNumber`, the request is rejected.\n The search range are blocks between heights including `minimalBlockNumber` and excluding `firstOverflowBlockNumber`.\n If the verifier does not have a view of all blocks from `minimalBlockNumber` to `firstOverflowBlockNumber`, the attestation request is rejected.\n The request is confirmed if no transaction meeting the specified criteria is found in the search range.\n The criteria and timestamp are chain specific.\n ### UTXO (Bitcoin and Dogecoin)\n Criteria for the transaction:\n - It is not coinbase transaction.\n - The transaction has the specified [standardPaymentReference](/specs/attestations/external-chains/standardPaymentReference.md#btc-and-doge-blockchains).\n - The sum of values of all outputs with the specified address minus the sum of values of all inputs with the specified address is greater than `amount` (in practice the sum of all values of the inputs with the specified address is zero).\n \n Timestamp is `mediantime`.\n ### XRPL\n Criteria for the transaction:\n - The transaction is of type payment.\n - The transaction has the specified [standardPaymentReference](/specs/attestations/external-chains/standardPaymentReference.md#xrp),\n - One of the following is true:\n   - Transaction status is `SUCCESS` and the amount received by the specified destination address is greater than the specified `value`.\n   - Transaction status is `RECEIVER_FAILURE` and the specified destination address would receive an amount greater than the specified `value` had the transaction been successful.\n \n Timestamp is `close_time` converted to UNIX time.\n ",
        "lut": "`minimalBlockTimestamp`",
        "proof": {
            "name": "Proof",
            "description": "Toplevel proof",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel proof\n @param merkleProof Merkle proof corresponding to the attestation response.\n @param data Attestation response.",
            "params": [
                {
                    "name": "merkleProof",
                    "type": "bytes32[]",
                    "typeSimple": "bytes32[]",
                    "comment": "Merkle proof corresponding to the attestation response."
                },
                {
                    "name": "data",
                    "type": "struct ReferencedPaymentNonexistence.Response",
                    "typeSimple": "Response",
                    "comment": "Attestation response."
                }
            ]
        },
        "request": {
            "name": "Request",
            "description": "Toplevel request",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel request\n @param attestationType ID of the attestation type.\n @param sourceId ID of the data source.\n @param messageIntegrityCode `MessageIntegrityCode` that is derived from the expected response as defined.\n @param requestBody Data defining the request. Type (struct) and interpretation is determined by the `attestationType`.",
            "params": [
                {
                    "name": "attestationType",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "ID of the attestation type."
                },
                {
                    "name": "sourceId",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "ID of the data source."
                },
                {
                    "name": "messageIntegrityCode",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "`MessageIntegrityCode` that is derived from the expected response as defined."
                },
                {
                    "name": "requestBody",
                    "type": "struct ReferencedPaymentNonexistence.RequestBody",
                    "typeSimple": "RequestBody",
                    "comment": "Data defining the request. Type (struct) and interpretation is determined by the `attestationType`."
                }
            ]
        },
        "response": {
            "name": "Response",
            "description": "Toplevel response",
            "above": "",
            "below": "",
            "fullComment": " @notice Toplevel response\n @param attestationType Extracted from the request.\n @param sourceId Extracted from the request.\n @param votingRound The ID of the State Connector round in which the request was considered.\n @param lowestUsedTimestamp The lowest timestamp used to generate the response.\n @param requestBody Extracted from the request.\n @param responseBody Data defining the response. The verification rules for the construction of the response body and the type are defined per specific `attestationType`.",
            "params": [
                {
                    "name": "attestationType",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "sourceId",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "votingRound",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The ID of the State Connector round in which the request was considered."
                },
                {
                    "name": "lowestUsedTimestamp",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The lowest timestamp used to generate the response."
                },
                {
                    "name": "requestBody",
                    "type": "struct ReferencedPaymentNonexistence.RequestBody",
                    "typeSimple": "RequestBody",
                    "comment": "Extracted from the request."
                },
                {
                    "name": "responseBody",
                    "type": "struct ReferencedPaymentNonexistence.ResponseBody",
                    "typeSimple": "ResponseBody",
                    "comment": "Data defining the response. The verification rules for the construction of the response body and the type are defined per specific `attestationType`."
                }
            ]
        },
        "requestBody": {
            "name": "RequestBody",
            "description": "Request body for ReferencePaymentNonexistence attestation type",
            "above": "",
            "below": "The `standardPaymentReference` should not be zero (as a 32-byte sequence).",
            "fullComment": " @notice Request body for ReferencePaymentNonexistence attestation type\n @param minimalBlockNumber The start block of the search range.\n @param deadlineBlockNumber The blockNumber to be included in the search range.\n @param deadlineTimestamp The timestamp to be included in the search range.\n @param destinationAddressHash The standard address hash of the address to which the payment had to be done.\n @param amount The requested amount in minimal units that had to be payed.\n @param standardPaymentReference The requested standard payment reference.\n @custom:below The `standardPaymentReference` should not be zero (as a 32-byte sequence).",
            "params": [
                {
                    "name": "minimalBlockNumber",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The start block of the search range."
                },
                {
                    "name": "deadlineBlockNumber",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The blockNumber to be included in the search range."
                },
                {
                    "name": "deadlineTimestamp",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The timestamp to be included in the search range."
                },
                {
                    "name": "destinationAddressHash",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "The standard address hash of the address to which the payment had to be done."
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "typeSimple": "uint256",
                    "comment": "The requested amount in minimal units that had to be payed."
                },
                {
                    "name": "standardPaymentReference",
                    "type": "bytes32",
                    "typeSimple": "bytes32",
                    "comment": "The requested standard payment reference."
                }
            ]
        },
        "responseBody": {
            "name": "ResponseBody",
            "description": "Response body for ReferencePaymentNonexistence attestation type.",
            "above": "",
            "below": "`firstOverflowBlock` is the first block that has block number higher than `deadlineBlockNumber` and timestamp later than `deadlineTimestamp`.\n The specified search range are blocks between heights including `minimalBlockNumber` and excluding `firstOverflowBlockNumber`.",
            "fullComment": " @notice Response body for ReferencePaymentNonexistence attestation type.\n @param minimalBlockTimestamp The timestamp of the minimalBlock.\n @param firstOverflowBlockNumber The height of the firstOverflowBlock.\n @param firstOverflowBlockTimestamp The timestamp of the firstOverflowBlock.\n @custom:below `firstOverflowBlock` is the first block that has block number higher than `deadlineBlockNumber` and timestamp later than `deadlineTimestamp`.\n The specified search range are blocks between heights including `minimalBlockNumber` and excluding `firstOverflowBlockNumber`.",
            "params": [
                {
                    "name": "minimalBlockTimestamp",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The timestamp of the minimalBlock."
                },
                {
                    "name": "firstOverflowBlockNumber",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The height of the firstOverflowBlock."
                },
                {
                    "name": "firstOverflowBlockTimestamp",
                    "type": "uint64",
                    "typeSimple": "uint64",
                    "comment": "The timestamp of the firstOverflowBlock."
                }
            ]
        },
        "requestStructs": [],
        "responseStructs": [],
        "requestAbi": {
            "components": [
                {
                    "internalType": "bytes32",
                    "name": "attestationType",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "sourceId",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "messageIntegrityCode",
                    "type": "bytes32"
                },
                {
                    "components": [
                        {
                            "internalType": "uint64",
                            "name": "minimalBlockNumber",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "deadlineBlockNumber",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "deadlineTimestamp",
                            "type": "uint64"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "destinationAddressHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "standardPaymentReference",
                            "type": "bytes32"
                        }
                    ],
                    "internalType": "struct ReferencedPaymentNonexistence.RequestBody",
                    "name": "requestBody",
                    "type": "tuple"
                }
            ],
            "internalType": "struct ReferencedPaymentNonexistence.Request",
            "name": "_request",
            "type": "tuple"
        },
        "responseAbi": {
            "components": [
                {
                    "internalType": "bytes32",
                    "name": "attestationType",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "sourceId",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint64",
                    "name": "votingRound",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "lowestUsedTimestamp",
                    "type": "uint64"
                },
                {
                    "components": [
                        {
                            "internalType": "uint64",
                            "name": "minimalBlockNumber",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "deadlineBlockNumber",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "deadlineTimestamp",
                            "type": "uint64"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "destinationAddressHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "standardPaymentReference",
                            "type": "bytes32"
                        }
                    ],
                    "internalType": "struct ReferencedPaymentNonexistence.RequestBody",
                    "name": "requestBody",
                    "type": "tuple"
                },
                {
                    "components": [
                        {
                            "internalType": "uint64",
                            "name": "minimalBlockTimestamp",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "firstOverflowBlockNumber",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "firstOverflowBlockTimestamp",
                            "type": "uint64"
                        }
                    ],
                    "internalType": "struct ReferencedPaymentNonexistence.ResponseBody",
                    "name": "responseBody",
                    "type": "tuple"
                }
            ],
            "internalType": "struct ReferencedPaymentNonexistence.Response",
            "name": "_response",
            "type": "tuple"
        },
        "proofAbi": {
            "components": [
                {
                    "internalType": "bytes32[]",
                    "name": "merkleProof",
                    "type": "bytes32[]"
                },
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "attestationType",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "sourceId",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint64",
                            "name": "votingRound",
                            "type": "uint64"
                        },
                        {
                            "internalType": "uint64",
                            "name": "lowestUsedTimestamp",
                            "type": "uint64"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint64",
                                    "name": "minimalBlockNumber",
                                    "type": "uint64"
                                },
                                {
                                    "internalType": "uint64",
                                    "name": "deadlineBlockNumber",
                                    "type": "uint64"
                                },
                                {
                                    "internalType": "uint64",
                                    "name": "deadlineTimestamp",
                                    "type": "uint64"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "destinationAddressHash",
                                    "type": "bytes32"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "amount",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bytes32",
                                    "name": "standardPaymentReference",
                                    "type": "bytes32"
                                }
                            ],
                            "internalType": "struct ReferencedPaymentNonexistence.RequestBody",
                            "name": "requestBody",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "uint64",
                                    "name": "minimalBlockTimestamp",
                                    "type": "uint64"
                                },
                                {
                                    "internalType": "uint64",
                                    "name": "firstOverflowBlockNumber",
                                    "type": "uint64"
                                },
                                {
                                    "internalType": "uint64",
                                    "name": "firstOverflowBlockTimestamp",
                                    "type": "uint64"
                                }
                            ],
                            "internalType": "struct ReferencedPaymentNonexistence.ResponseBody",
                            "name": "responseBody",
                            "type": "tuple"
                        }
                    ],
                    "internalType": "struct ReferencedPaymentNonexistence.Response",
                    "name": "data",
                    "type": "tuple"
                }
            ],
            "internalType": "struct ReferencedPaymentNonexistence.Proof",
            "name": "_proof",
            "type": "tuple"
        }
    });
    return typeRecMap;
}
exports.readAttestationTypeConfigs = readAttestationTypeConfigs;
/**
 * Helper function serializing bigints to strings recursively.
 * @param obj
 * @returns
 */
function serializeBigInts(obj) {
    return JSON.parse(JSON.stringify(obj, (key, value) => (typeof value === "bigint" ? value.toString() : value)));
}
exports.serializeBigInts = serializeBigInts;
//# sourceMappingURL=utils.js.map