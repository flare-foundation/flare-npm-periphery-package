"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPackageRoot = exports.serializeBigInts = exports.readAttestationTypeConfigs = exports.structsDeepEqual = exports.remapABIParsedToObjects = exports.decodeAttestationName = exports.encodeAttestationName = exports.isSupportedBasicSolidityType = exports.ZERO_BYTES_20 = exports.ZERO_BYTES_32 = exports.MIC_SALT = exports.DEFAULT_ATTESTATION_TYPE_CONFIGS_PATH = void 0;
const ethers_1 = require("ethers");
const fs_1 = require("fs");
const path = __importStar(require("path"));
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
        }
        return result;
    }
    return decoded;
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
    const files = (0, fs_1.readdirSync)(configsPath);
    files.forEach((fileName) => {
        const name = path.basename(fileName, ".json");
        typeRecMap.set(name, JSON.parse((0, fs_1.readFileSync)(`${configsPath}/${fileName}`, "utf8")));
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
/**
 * Find the package root than contains the directory.
 * @param moduleDir the directory of a module, typically use `__dirname`
 * @returns the directory of the modules's package root.
 */
function findPackageRoot(moduleDir) {
    let dir = path.resolve(moduleDir);
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const packageJson = path.resolve(dir, "package.json");
        const hasPackageJson = (0, fs_1.existsSync)(packageJson) && (0, fs_1.statSync)(packageJson).isFile();
        const nodeModules = path.resolve(dir, "node_modules");
        const hasNodeModules = (0, fs_1.existsSync)(nodeModules) && (0, fs_1.statSync)(nodeModules).isDirectory();
        if (hasPackageJson && hasNodeModules) {
            return dir;
        }
        if (path.dirname(dir) === dir) {
            // arrived at filesystem root without finding package root
            throw new Error("Cannot find package root");
        }
        dir = path.dirname(dir);
    }
}
exports.findPackageRoot = findPackageRoot;
//# sourceMappingURL=utils.js.map