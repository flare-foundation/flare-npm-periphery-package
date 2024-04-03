export declare namespace EVMTransaction {
    const NAME = "EVMTransaction";
    const TYPE = "0x45564d5472616e73616374696f6e000000000000000000000000000000000000";
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
     * Request body for EVM transaction attestation type
     */
    interface RequestBody {
        /**
         * Hash of the transaction(transactionHash).
         */
        transactionHash: string;
        /**
         * The height at which a block is considered confirmed by the requestor.
         */
        requiredConfirmations: string;
        /**
         * If true, "input" field is included in the response.
         */
        provideInput: boolean;
        /**
         * If true, events indicated by `logIndices` are included in the response. Otherwise, no events are included in the response.
         */
        listEvents: boolean;
        /**
         * If `listEvents` is `false`, this should be an empty list, otherwise, the request is rejected. If `listEvents` is `true`, this is the list of indices (logIndex) of the events to be relayed (sorted by the requestor). The array should contain at most 50 indices. If empty, it indicates all events in order capped by 50.
         */
        logIndices: string[];
    }
    /**
     * Response body for EVM transaction attestation type
     */
    interface ResponseBody {
        /**
         * Number of the block in which the transaction is included.
         */
        blockNumber: string;
        /**
         * Timestamp of the block in which the transaction is included.
         */
        timestamp: string;
        /**
         * The address (from) that signed the transaction.
         */
        sourceAddress: string;
        /**
         * Indicate whether it is a contract creation transaction.
         */
        isDeployment: boolean;
        /**
         * The address (to) of the receiver of the initial transaction. Zero address if `isDeployment` is `true`.
         */
        receivingAddress: string;
        /**
         * The value transferred by the initial transaction in wei.
         */
        value: string;
        /**
         * If `provideInput`, this is the data send along with the initial transaction. Otherwise it is the default value `0x00`.
         */
        input: string;
        /**
         * Status of the transaction 1 - success, 0 - failure.
         */
        status: string;
        /**
         * If `listEvents` is `true`, an array of the requested events. Sorted by the logIndex in the same order as `logIndices`. Otherwise, an empty array.
         */
        events: Event[];
    }
    /**
     * Event log record
     */
    interface Event {
        /**
         * The consecutive number of the event in block.
         */
        logIndex: string;
        /**
         * The address of the contract that emitted the event.
         */
        emitterAddress: string;
        /**
         * An array of up to four 32-byte strings of indexed log arguments.
         */
        topics: string[];
        /**
         * Concatenated 32-byte strings of non-indexed log arguments. At least 32 bytes long.
         */
        data: string;
        /**
         * It is `true` if the log was removed due to a chain reorganization and `false` if it is a valid log.
         */
        removed: boolean;
    }
    type RequestNoMic = Omit<Request, "messageIntegrityCode">;
}
//# sourceMappingURL=EVMTransaction.d.ts.map