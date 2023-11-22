export namespace AddressValidity {
    export const NAME = "AddressValidity";
    export const TYPE = "0x4164647265737356616c69646974790000000000000000000000000000000000";

    /**
     * Toplevel request
     */
    export interface Request {
        /**
         * Attestation type id as defined for each attestation type on [this repo](https://gitlab.com/flarenetwork/state-connector-protocol/)
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
     * Request body for AddressValidity attestation type
     */
    export interface RequestBody {
        /**
         * Address to be verified.
         */
        addressStr: string;
    }

    /**
     * Response body for AddressValidity attestation type
     */
    export interface ResponseBody {
        /**
         * Standard form of the validated address.
         */
        standardAddress: string;

        /**
         * Standard address hash of the validated address.
         */
        standardAddressHash: string;
    }

    export type RequestNoMic = Omit<Request, "messageIntegrityCode">;
}
