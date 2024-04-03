"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameToAbi = exports.addressToName = exports.nameToAddress = void 0;
const abis_1 = require("../abis");
const contracts_json_1 = __importDefault(require("./contracts.json"));
const nameToAddress = (name) => {
    const foundMatch = contracts_json_1.default.find((el) => el.name == name);
    if (foundMatch)
        return foundMatch.address;
    return "";
};
exports.nameToAddress = nameToAddress;
const addressToName = (address) => {
    const foundMatch = contracts_json_1.default.find((el) => el.address.toLowerCase() == address.toLowerCase());
    if (foundMatch)
        return foundMatch.name;
    return "";
};
exports.addressToName = addressToName;
const nameToAbi = (name) => {
    try {
        const abiData = abis_1.abis[name];
        if (abiData !== undefined)
            return { data: abiData, status: "OK" };
        return { data: [], status: "No official Flare Network contract at this address" };
    }
    catch (e) {
        if (e instanceof TypeError) {
            return { data: [], status: "No official Flare Network contract at this address" };
        }
    }
    return { data: [], status: "Unknown error" };
};
exports.nameToAbi = nameToAbi;
//# sourceMappingURL=mapper.js.map