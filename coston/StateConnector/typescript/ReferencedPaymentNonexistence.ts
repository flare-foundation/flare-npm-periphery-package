export namespace ReferencedPaymentNonexistence {
    export const NAME = "ReferencedPaymentNonexistence";
    export const TYPE = "0x5265666572656e6365645061796d656e744e6f6e6578697374656e6365000000";

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
     * Request body for ReferencePaymentNonexistence attestation type
     */
    export interface RequestBody {
        /**
         * The start block of the search range.
         */
        minimalBlockNumber: string;

        /**
         * The blockNumber to be included in the search range.
         */
        deadlineBlockNumber: string;

        /**
         * The timestamp to be included in the search range.
         */
        deadlineTimestamp: string;

        /**
         * The standard address hash of the address to which the payment had to be done.
         */
        destinationAddressHash: string;

        /**
         * The requested amount in minimal units that had to be payed.
         */
        amount: string;

        /**
         * The requested standard payment reference.
         */
        standardPaymentReference: string;
    }

    /**
     * Response body for ReferencePaymentNonexistence attestation type.
     */
    export interface ResponseBody {
        /**
         * The timestamp of the minimalBlock.
         */
        minimalBlockTimestamp: string;

        /**
         * The height of the firstOverflowBlock.
         */
        firstOverflowBlockNumber: string;

        /**
         * The timestamp of the firstOverflowBlock.
         */
        firstOverflowBlockTimestamp: string;
    }

    export type RequestNoMic = Omit<Request, "messageIntegrityCode">;
}
