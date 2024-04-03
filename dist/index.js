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
exports.songbird = exports.flare = exports.coston2 = exports.coston = exports.nameToAbi = exports.addressToName = exports.nameToAddress = void 0;
const coston_1 = require("./coston");
const coston2_1 = require("./coston2");
const flare_1 = require("./flare");
const songbird_1 = require("./songbird");
const nameToAddress = (name, network) => {
    if (network.toLowerCase() == "flare")
        return (0, flare_1.nameToAddress)(name);
    if (network.toLowerCase() == "songbird")
        return (0, songbird_1.nameToAddress)(name);
    if (network.toLowerCase() == "coston")
        return (0, coston_1.nameToAddress)(name);
    if (network.toLowerCase() == "coston2")
        return (0, coston2_1.nameToAddress)(name);
    return "";
};
exports.nameToAddress = nameToAddress;
const addressToName = (address, network) => {
    if (network.toLowerCase() == "flare")
        return (0, flare_1.addressToName)(address);
    if (network.toLowerCase() == "songbird")
        return (0, songbird_1.addressToName)(address);
    if (network.toLowerCase() == "coston")
        return (0, coston_1.addressToName)(address);
    if (network.toLowerCase() == "coston2")
        return (0, coston2_1.addressToName)(address);
    return "";
};
exports.addressToName = addressToName;
const nameToAbi = (name, network) => {
    if (network.toLowerCase() == "flare")
        return (0, flare_1.nameToAbi)(name);
    if (network.toLowerCase() == "songbird")
        return (0, songbird_1.nameToAbi)(name);
    if (network.toLowerCase() == "coston")
        return (0, coston_1.nameToAbi)(name);
    if (network.toLowerCase() == "coston2")
        return (0, coston2_1.nameToAbi)(name);
    return { data: [], status: "Please select a network" };
};
exports.nameToAbi = nameToAbi;
exports.coston = __importStar(require("./coston"));
exports.coston2 = __importStar(require("./coston2"));
exports.flare = __importStar(require("./flare"));
exports.songbird = __importStar(require("./songbird"));
//# sourceMappingURL=index.js.map