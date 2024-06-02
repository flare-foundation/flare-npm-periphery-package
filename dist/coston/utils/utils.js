"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function getFeedId(category, name) {
    var result = category.padStart(2, "0");
    for (var i = 0; i < name.length; i++) {
        result += name.charCodeAt(i).toString(16);
    }
    return "0x" + result.padEnd(42, "0");
}

function getCryptoFeedId(name) {
    return getFeedId("01", name)
}

exports.getCryptoFeedId = getCryptoFeedId;
exports.getFeedId = getFeedId;