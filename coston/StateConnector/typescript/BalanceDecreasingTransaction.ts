export namespace BalanceDecreasingTransaction {
    export const NAME = "BalanceDecreasingTransaction";
    export const TYPE = "0x42616c616e636544656372656173696e675472616e73616374696f6e00000000";

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
         * The id of the state connector round in which the request was considered. This is a security measure to prevent a collision of attestation hashes.
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
     * Request body for BalanceDecreasingTransaction attestation type
     */
    export interface RequestBody {
        /**
         * Id of the payment transaction.
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
    export interface ResponseBody {
        /**
         * The number of the block in which the transaction is included.
         */
        blockNumber: string;

        /**
         * The timestamps of the block in which the transaction is included.
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

    export type RequestNoMic = Omit<Request, "messageIntegrityCode">;
}
