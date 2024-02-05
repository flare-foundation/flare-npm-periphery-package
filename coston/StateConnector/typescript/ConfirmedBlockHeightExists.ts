export namespace ConfirmedBlockHeightExists {
    export const NAME = "ConfirmedBlockHeightExists";
    export const TYPE = "0x436f6e6669726d6564426c6f636b486569676874457869737473000000000000";

    /**
     * Toplevel request
     */
    export interface Request {
        /**
         * ID of the attestation type.
         */
        attestationType: string;

        /**
         * ID of the data source.
         */
        sourceId: string;

        /**
         * `MessageIntegrityCode` that is derived from the expected response as defined.
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
     * Request body for ConfirmedBlockHeightExistsType attestation type
     */
    export interface RequestBody {
        /**
         * The number of the block the request wants a confirmation of.
         */
        blockNumber: string;

        /**
         * The length of the period in which the block production rate is to be computed.
         */
        queryWindow: string;
    }

    /**
     * Response body for ConfirmedBlockHeightExistsType attestation type
     */
    export interface ResponseBody {
        /**
         * The timestamp of the block with `blockNumber`.
         */
        blockTimestamp: string;

        /**
         * The depth at which a block is considered confirmed depending on the chain. All attestation providers must agree on this number.
         */
        numberOfConfirmations: string;

        /**
         * The block number of the latest block that has a timestamp strictly smaller than `blockTimestamp` - `queryWindow`.
         */
        lowestQueryWindowBlockNumber: string;

        /**
         * The timestamp of the block at height `lowestQueryWindowBlockNumber`.
         */
        lowestQueryWindowBlockTimestamp: string;
    }

    export type RequestNoMic = Omit<Request, "messageIntegrityCode">;
}
