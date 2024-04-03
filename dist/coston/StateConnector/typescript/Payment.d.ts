export declare namespace Payment {
    const NAME = "Payment";
    const TYPE = "0x5061796d656e7400000000000000000000000000000000000000000000000000";
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
     * Request body for Payment attestation type
     */
    interface RequestBody {
        /**
         * ID of the payment transaction.
         */
        transactionId: string;
        /**
         * For UTXO chains, this is the index of the transaction input with source address. Always 0 for the non-utxo chains.
         */
        inUtxo: string;
        /**
         * For UTXO chains, this is the index of the transaction output with receiving address. Always 0 for the non-utxo chains.
         */
        utxo: string;
    }
    /**
     * Response body for Payment attestation type
     */
    interface ResponseBody {
        /**
         * Number of the block in which the transaction is included.
         */
        blockNumber: string;
        /**
         * The timestamp of the block in which the transaction is included.
         */
        blockTimestamp: string;
        /**
         * Standard address hash of the source address.
         */
        sourceAddressHash: string;
        /**
         * Standard address hash of the receiving address. The zero 32-byte string if there is no receivingAddress (if `status` is not success).
         */
        receivingAddressHash: string;
        /**
         * Standard address hash of the intended receiving address. Relevant if the transaction is unsuccessful.
         */
        intendedReceivingAddressHash: string;
        /**
         * Amount in minimal units spent by the source address.
         */
        spentAmount: string;
        /**
         * Amount in minimal units to be spent by the source address. Relevant if the transaction status is unsuccessful.
         */
        intendedSpentAmount: string;
        /**
         * Amount in minimal units received by the receiving address.
         */
        receivedAmount: string;
        /**
         * Amount in minimal units intended to be received by the receiving address. Relevant if the transaction is unsuccessful.
         */
        intendedReceivedAmount: string;
        /**
         * [Standard payment reference](/specs/attestations/external-chains/standardPaymentReference.md) of the transaction.
         */
        standardPaymentReference: string;
        /**
         * Indicator whether only one source and one receiver are involved in the transaction.
         */
        oneToOne: boolean;
        /**
         * [Succes status](/specs/attestations/external-chains/transactions.md#transaction-success-status) of the transaction: 0 - success, 1 - failed by sender's fault,x  2 - failed by receiver's fault.
         */
        status: string;
    }
    type RequestNoMic = Omit<Request, "messageIntegrityCode">;
}
//# sourceMappingURL=Payment.d.ts.map