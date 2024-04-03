export declare namespace BalanceDecreasingTransaction {
    const NAME = "BalanceDecreasingTransaction";
    const TYPE = "0x42616c616e636544656372656173696e675472616e73616374696f6e00000000";
    /**
     * Toplevel request
     */
    interface Request {
        /**
         * ID of the attestation type.
         */
        attestationType: string;
        /**
         * ID of the data source.
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
         * The ID of the State Connector round in which the request was considered. This is a security measure to prevent a collision of attestation hashes.
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
     * Request body for BalanceDecreasingTransaction attestation type
     */
    interface RequestBody {
        /**
         * ID of the payment transaction.
         */
        transactionId: string;
        /**
         * The indicator of the address whose balance has been decreased.
         */
        sourceAddressIndicator: string;
    }
    /**
     * Response body for BalanceDecreasingTransaction attestation type.
     */
    interface ResponseBody {
        /**
         * The number of the block in which the transaction is included.
         */
        blockNumber: string;
        /**
         * The timestamp of the block in which the transaction is included.
         */
        blockTimestamp: string;
        /**
         * Standard address hash of the address indicated by the `sourceAddressIndicator`.
         */
        sourceAddressHash: string;
        /**
         * Amount spent by the source address in minimal units.
         */
        spentAmount: string;
        /**
         * Standard payment reference of the transaction.
         */
        standardPaymentReference: string;
    }
    type RequestNoMic = Omit<Request, "messageIntegrityCode">;
}
//# sourceMappingURL=BalanceDecreasingTransaction.d.ts.map