export declare namespace AddressValidity {
    const NAME = "AddressValidity";
    const TYPE = "0x4164647265737356616c69646974790000000000000000000000000000000000";
    /**
     * Toplevel request
     */
    interface Request {
        /**
         * ID of the attestation type.
         */
        attestationType: string;
        /**
         * Id of the data source.
         */
        sourceId: string;
        /**
         * `MessageIntegrityCode` that is derived from the expected response.
         */
        messageIntegrityCode: string;
        /**
         * Data defining the request. Type (struct) and interpretation is determined by the `attestationType`.
         */
        requestBody: RequestBody;
    }
    /**
     * Toplevel response
     */
    interface Response {
        /**
         * Extracted from the request.
         */
        attestationType: string;
        /**
         * Extracted from the request.
         */
        sourceId: string;
        /**
         * The ID of the State Connector round in which the request was considered.
         */
        votingRound: string;
        /**
         * The lowest timestamp used to generate the response.
         */
        lowestUsedTimestamp: string;
        /**
         * Extracted from the request.
         */
        requestBody: RequestBody;
        /**
         * Data defining the response. The verification rules for the construction of the response body and the type are defined per specific `attestationType`.
         */
        responseBody: ResponseBody;
    }
    /**
     * Toplevel proof
     */
    interface Proof {
        /**
         * Merkle proof corresponding to the attestation response.
         */
        merkleProof: string[];
        /**
         * Attestation response.
         */
        data: Response;
    }
    /**
     * Request body for AddressValidity attestation type
     */
    interface RequestBody {
        /**
         * Address to be verified.
         */
        addressStr: string;
    }
    /**
     * Response body for AddressValidity attestation type
     */
    interface ResponseBody {
        /**
         * Boolean indicator of the address validity.
         */
        isValid: boolean;
        /**
         * If `isValid`, standard form of the validated address. Otherwise an empty string.
         */
        standardAddress: string;
        /**
         * If `isValid`, standard address hash of the validated address. Otherwise a zero bytes32 string.
         */
        standardAddressHash: string;
    }
    type RequestNoMic = Omit<Request, "messageIntegrityCode">;
}
//# sourceMappingURL=AddressValidity.d.ts.map