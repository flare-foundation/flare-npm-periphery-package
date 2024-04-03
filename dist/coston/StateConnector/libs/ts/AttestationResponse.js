"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttestationResponse = exports.AttestationResponseStatus = void 0;
/**
 * Attestation status
 */
var AttestationResponseStatus;
(function (AttestationResponseStatus) {
    /**
     * Attestation request is valid.
     */
    AttestationResponseStatus["VALID"] = "VALID";
    /**
     * Attestation request is invalid.
     */
    AttestationResponseStatus["INVALID"] = "INVALID";
    /**
     * Attestation request cannot be confirmed neither rejected by the verifier at the moment.
     */
    AttestationResponseStatus["INDETERMINATE"] = "INDETERMINATE";
})(AttestationResponseStatus || (exports.AttestationResponseStatus = AttestationResponseStatus = {}));
/**
 * Object returned as a result of attestation.
 * If status is 'VALID' then parameters @param response contains attestation response.
 * Otherwise, @param response is undefined.
 */
class AttestationResponse {
}
exports.AttestationResponse = AttestationResponse;
//# sourceMappingURL=AttestationResponse.js.map