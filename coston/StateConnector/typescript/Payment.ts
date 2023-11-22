export namespace Payment {
    export const NAME = "Payment";
    export const TYPE = "0x5061796d656e7400000000000000000000000000000000000000000000000000";

    /**
     * Toplevel request
     */
    export interface Request {
        /**
         * Id of the attestation type.
         */
        attestationType: string;

        /**
         * Id of the data source.
         */
        sourceId: string;

        /**
         * `MessageIntegrityCode` that is derived from the expected response as defined [here](/specs/attestations/hash-MIC.md#message-integrity-code).
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
    export interface Response {
        /**
         * Extracted from the request.
         */
        attestationType: string;

        /**
         * Extracted from the request.
         */
        sourceId: string;

        /**
         * The id of the state connector round in which the request was considered.
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
    export interface Proof {
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
    export interface RequestBody {
        /**
         * Id of the payment transaction.
         */
        transactionId: string;

        /**
         * For UTXO, this is the index of the transaction input with source address. Always 0 for the non-utxo chains.
         */
        inUtxo: string;

        /**
         * For UTXO, this is the index of the transaction output with receiving address. Always 0 for the non-utxo chains.
         */
        utxo: string;
    }

    /**
     * Response body for Payment attestation type
     */
    export interface ResponseBody {
        /**
         * Number of the block in which the transaction is included.
         */
        blockNumber: string;

        /**
         * The timestamps of the block in which the transaction is included.
         */
        blockTimestamp: string;

        /**
         * Standard address hash of the source address.
         */
        sourceAddressHash: string;

        /**
         * Standard address hash of the receiving address. Zero 32-byte string if there is no receivingAddress (if `status` is not success).
         */
        receivingAddressHash: string;

        /**
         * Standard address hash of the intended receiving address. Relevant if the transaction was unsuccessful.
         */
        intendedReceivingAddressHash: string;

        /**
         * Amount in minimal units spent by the source address.
         */
        spentAmount: string;

        /**
         * Amount in minimal units to be spent by the source address. Relevant if the transaction status is not success.
         */
        intendedSpentAmount: string;

        /**
         * Amount in minimal units received by the receiving address.
         */
        receivedAmount: string;

        /**
         * Amount in minimal units intended to be received by the receiving address. Relevant if the transaction was unsuccessful.
         */
        intendedReceivedAmount: string;

        /**
         * Identifier of the transaction as defined [here](/specs/attestations/external-chains/standardPaymentReference.md).
         */
        standardPaymentReference: string;

        /**
         * Indicator whether only one source and one receiver are involved in the transaction.
         */
        oneToOne: boolean;

        /**
         * Status of the transaction as described [here](/specs/attestations/external-chains/transactions.md#transaction-success-status):
         */
        status: string;
    }

    export type RequestNoMic = Omit<Request, "messageIntegrityCode">;
}
