interface AddressValidityRequestBody {
  addressStr: string;
}

interface AddressValidityResponseBody {
  isValid: boolean;
  standardAddress: string;
  standardAddressHash: string;
}

interface AddressValidityRequest {
  attestationType: string;
  sourceId: string;
  messageIntegrityCode: string;
  requestBody: AddressValidityRequestBody;
}

interface AddressValidityResponse {
  attestationType: string;
  sourceId: string;
  votingRound: number;
  lowestUsedTimestamp: number;
  requestBody: AddressValidityRequestBody;
  responseBody: AddressValidityResponseBody;
}

interface BalanceDecreasingTransactionRequestBody {
  transactionId: string;
  sourceAddressIndicator: string;
}

interface BalanceDecreasingTransactionResponseBody {
  blockNumber: number;
  blockTimestamp: number;
  sourceAddressHash: string;
  spentAmount: number;
  standardPaymentReference: string;
}

interface BalanceDecreasingTransactionRequest {
  attestationType: string;
  sourceId: string;
  messageIntegrityCode: string;
  requestBody: BalanceDecreasingTransactionRequestBody;
}

interface BalanceDecreasingTransactionResponse {
  attestationType: string;
  sourceId: string;
  votingRound: number;
  lowestUsedTimestamp: number;
  requestBody: BalanceDecreasingTransactionRequestBody;
  responseBody: BalanceDecreasingTransactionResponseBody;
}

interface ConfirmedBlockHeightExistsRequestBody {
  blockNumber: number;
  queryWindow: number;
}

interface ConfirmedBlockHeightExistsResponseBody {
  blockTimestamp: number;
  numberOfConfirmations: number;
  lowestQueryWindowBlockNumber: number;
  lowestQueryWindowBlockTimestamp: number;
}

interface ConfirmedBlockHeightExistsRequest {
  attestationType: string;
  sourceId: string;
  messageIntegrityCode: string;
  requestBody: ConfirmedBlockHeightExistsRequestBody;
}

interface ConfirmedBlockHeightExistsResponse {
  attestationType: string;
  sourceId: string;
  votingRound: number;
  lowestUsedTimestamp: number;
  requestBody: ConfirmedBlockHeightExistsRequestBody;
  responseBody: ConfirmedBlockHeightExistsResponseBody;
}

interface EVMTransactionRequestBody {
  transactionHash: string; // Use string for easier handling in TypeScript
  requiredConfirmations: number;
  provideInput: boolean;
  listEvents: boolean;
  logIndices: number[]; // Array of log indices
}

interface EVMTransactionResponseBody {
  blockNumber: number;
  timestamp: number;
  sourceAddress: string;
  isDeployment: boolean;
  receivingAddress: string;
  value: string; // Use string to handle large numbers (wei)
  input: string; // Hex string of input data
  status: number; // 1 for success, 0 for failure
  events: Event[];
}

interface Event {
  logIndex: number;
  emitterAddress: string;
  topics: string[]; // Array of hex strings
  data: string; // Hex string of concatenated data
  removed: boolean;
}

interface EVMTransactionRequest {
  attestationType: string;
  sourceId: string;
  messageIntegrityCode: string;
  requestBody: EVMTransactionRequestBody;
}

interface EVMTransactionResponse {
  attestationType: string;
  sourceId: string;
  votingRound: number;
  lowestUsedTimestamp: number;
  requestBody: EVMTransactionRequestBody;
  responseBody: EVMTransactionResponseBody;
}

interface ReferencedPaymentNonexistenceRequestBody {
  minimalBlockNumber: number;
  deadlineBlockNumber: number;
  deadlineTimestamp: number;
  destinationAddressHash: string; // Hexadecimal string representing the address hash
  amount: string; // Use string for handling large amounts (in minimal units)
  standardPaymentReference: string; // Hexadecimal string
}

interface ReferencedPaymentNonexistenceResponseBody {
  minimalBlockTimestamp: number;
  firstOverflowBlockNumber: number;
  firstOverflowBlockTimestamp: number;
}

interface ReferencedPaymentNonexistenceRequest {
  attestationType: string;
  sourceId: string;
  messageIntegrityCode: string;
  requestBody: ReferencedPaymentNonexistenceRequestBody;
}

interface ReferencedPaymentNonexistenceResponse {
  attestationType: string;
  sourceId: string;
  votingRound: number;
  lowestUsedTimestamp: number;
  requestBody: ReferencedPaymentNonexistenceRequestBody;
  responseBody: ReferencedPaymentNonexistenceResponseBody;
}
