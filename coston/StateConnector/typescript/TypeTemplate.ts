export namespace TypeTemplate {
    export const NAME = "TypeTemplate";
    export const TYPE = "0x5479706554656d706c6174650000000000000000000000000000000000000000";

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
     * Request body for TypeTemplate attestation type
     */
    export interface RequestBody {
        /**
         * example bytes32 field with explanation
         */
        bytes32Field: string;

        /**
         * example bool field field with explanation
         */
        boolField: boolean;

        /**
         * example RequestSubstruct1 field with explanation
         */
        requestSubstruct1: RequestSubstruct1;

        /**
         * example RequestSubstruct2 array field with explanation*
         */
        requestSubstruct2Array: RequestSubstruct2[];
    }

    /**
     * Additional struct first used in Request body fields
     */
    export interface RequestSubstruct1 {
        /**
         * example bytes32 field with explanation
         */
        templateStructField: string;

        /**
         * example uint256 array field with explanation
         */
        uintArrayField: string[];

        /**
         * example bool array field with explanation*
         */
        boolArrayField: boolean[];
    }
    /**
     * Additional struct first used in Request body fields
     */
    export interface RequestSubstruct2 {
        /**
         * example bytes32 field with explanation
         */
        templateStructField: string;

        /**
         * example int256 array field with explanation
         */
        intArrayField: string[];

        /**
         * example bool array field with explanation*
         */
        boolArrayField: boolean[];
    }

    /**
     * Response body for TypeTemplate attestation type.
     */
    export interface ResponseBody {
        /**
         * example bytes32 field with explanation
         */
        templateResponseField: string;

        /**
         * example ResponseSubstruct1 array field with explanation*
         */
        responseSubstruct1Array: ResponseSubstruct1[];
    }

    /**
     * Additional struct first used in Response body fields
     */
    export interface ResponseSubstruct1 {
        /**
         * description*
         */
        templateStructField: string;
    }

    export type RequestNoMic = Omit<Request, "messageIntegrityCode">;
}
