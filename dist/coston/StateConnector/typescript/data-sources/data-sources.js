"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSources = void 0;
var DataSources;
(function (DataSources) {
    DataSources.BTC = "BTC";
    DataSources.testBTC = "testBTC";
    DataSources.DOGE = "DOGE";
    DataSources.testDOGE = "testDOGE";
    DataSources.XRP = "XRP";
    DataSources.testXRP = "testXRP";
    DataSources.ETH = "ETH";
    DataSources.testETH = "testETH";
    DataSources.FLR = "FLR";
    DataSources.testFLR = "testFLR";
    DataSources.SGB = "SGB";
    DataSources.testSGB = "testSGB";
    DataSources.descriptions = {
        BTC: `Bitcoin mainnet`,
        testBTC: `Bitcon testnet`,
        DOGE: `Dogecoin mainnet`,
        testDOGE: `Dogecoin testnet`,
        XRP: `XRPL mainnet`,
        testXRP: `XRPL testnet`,
        ETH: `Ethereum mainnet`,
        testETH: `Sepolia testnet`,
        FLR: `Flare mainnet`,
        testFLR: `Coston 2 testnet`,
        SGB: `Songbird mainnet`,
        testSGB: `Coston testnet`,
    };
})(DataSources || (exports.DataSources = DataSources = {}));
//# sourceMappingURL=data-sources.js.map