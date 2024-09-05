import { ethers } from "ethers";
/**
 * Converts a hex-encoded string back to its original string format.
 *
 * @param data - The hex-encoded string.
 * @returns The decoded string.
 */
export function fromHex(data: string): string {
  // Remove the '0x.' prefix if it exists
  data = data.replace(/^(0x\.)/, "");

  // Split the string into pairs of hex digits, convert them to characters, and join them into a string
  return data
    .split(/(\w\w)/g)
    .filter((p) => !!p)
    .map((c) => String.fromCharCode(parseInt(c, 16)))
    .join("");
}

/**
 * Converts a string to its hexadecimal representation.
 *
 * @param data - The string to be converted to hex.
 * @returns The hex-encoded string.
 */
export function toHex(data: string): string {
  let result = "";
  for (let i = 0; i < data.length; i++) {
    result += data.charCodeAt(i).toString(16);
  }
  return result;
}

/**
 * Prepares an attestation response by sending a request to the specified network.
 *
 * @param attestationType - The type of attestation being prepared.
 * @param network - The network on which the attestation is being processed.
 * @param sourceId - The source identifier related to the attestation.
 * @param requestBody - The body of the request containing necessary details.
 * @returns A promise that resolves to an AttestationResponse.
 */

export interface AttestationResponse {
  // Define the expected fields in the response
  // Modify these types based on the actual API response structure
  status: string;
  message: string;
  data: any;
}

export async function prepareAttestationResponse(
  attestationType: string,
  network: string,
  sourceId: string,
  requestBody: any
): Promise<AttestationResponse> {
  const attestationUrl = process.env.ATTESTATION_URL;
  const apiKey = process.env.ATTESTATION_API_KEY;

  if (!attestationUrl || !apiKey) {
    throw new Error("ATTESTATION_URL or ATTESTATION_API_KEY is not set");
  }

  const response = await fetch(
    `${attestationUrl}/verifier/${network}/${attestationType}/prepareResponse`,
    {
      method: "POST",
      headers: {
        "X-API-KEY": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attestationType: toHex(attestationType),
        sourceId: toHex(sourceId),
        requestBody: requestBody,
      }),
    }
  );

  const data: AttestationResponse = await response.json();
  return data;
}

/**
 * Verifies the Merkle proof for a specific State Connector (SC) round.
 *
 * @param scRound - The State Connector round number to verify.
 * @returns A promise that resolves to the payment data if verification is successful, or undefined if the round is not finalized.
 */
export async function checkMerkleProof(scRound: number): Promise<any> {
  // Initialize the StateConnector contract instance
  const stateConnector = await ethers.getContractAt(
    flareLib.nameToAbi("IStateConnector", "coston").data,
    flareLib.nameToAddress("StateConnector", "coston")
  );

  // Retrieve the last finalized round ID
  const lastFinalized: number = await stateConnector.lastFinalizedRoundId();

  // Check if the provided scRound is finalized
  if (scRound > lastFinalized) {
    console.log(`scRound: ${scRound} is not finalized yet.`);
    return;
  }

  // Request Merkle proof for the specified scRound
  const response = await requestMerkleProof(scRound);

  // Prepare payment data for verification
  const payment = {
    data: response.data.response,
    merkleProof: response.data.merkleProof,
  };

  // Initialize the PaymentVerification contract instance
  const paymentVerifier = await ethers.getContractAt(
    flareLib.nameToAbi("IPaymentVerification", "coston").data,
    flareLib.nameToAddress("IPaymentVerification", "coston")
  );

  // Verify the payment using the paymentVerifier contract
  const tx = await paymentVerifier.verifyPayment(payment);
  console.log("Verification transaction:", tx);

  return payment;
}

// --------------------------------- ATTESTATION FUNCTIONS ----------------------------------------

// TODO: Import necessary modules and dependencies for attestation functions

// const ATTESTATION_URL = process.env.ATTESTATION_URL; // URL for attestation API
// const API_KEY = process.env.API_KEY; // API key for authentication

export async function verifyAddressValidity(
  attestationType: string,
  sourceId: string,
  addressStr: string
): Promise<AddressValidityResponse> {
  const requestBody: AddressValidityRequestBody = {
    addressStr,
  };

  const requestData: AddressValidityRequest = {
    attestationType: toHex(attestationType),
    sourceId: toHex(sourceId),
    messageIntegrityCode: "", // This would be derived based on your specific implementation
    requestBody,
  };

  const response = await fetch(
    `${ATTESTATION_URL}/verifier/${sourceId}/${attestationType}/verifyAddress`,
    {
      method: "POST",
      headers: {
        "X-API-KEY": API_KEY as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    }
  );

  const data: AddressValidityResponse = await response.json();
  console.log("Address Validity Response:", data);

  return data;
}

// ---------------

export async function checkBalanceDecreasingTransaction(
  attestationType: string,
  sourceId: string,
  transactionId: string,
  sourceAddressIndicator: string
): Promise<BalanceDecreasingTransactionResponse> {
  const requestBody: BalanceDecreasingTransactionRequestBody = {
    transactionId: toHex(transactionId),
    sourceAddressIndicator: toHex(sourceAddressIndicator),
  };

  const requestData: BalanceDecreasingTransactionRequest = {
    attestationType: toHex(attestationType),
    sourceId: toHex(sourceId),
    messageIntegrityCode: "", // Derived based on your specific implementation
    requestBody,
  };

  const response = await fetch(
    `${ATTESTATION_URL}/verifier/${sourceId}/${attestationType}/checkBalanceDecreasingTransaction`,
    {
      method: "POST",
      headers: {
        "X-API-KEY": API_KEY as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    }
  );

  const data: BalanceDecreasingTransactionResponse = await response.json();
  console.log("Balance Decreasing Transaction Response:", data);

  return data;
}

// ------------------------------------------------------

export async function verifyConfirmedBlockHeight(
  attestationType: string,
  sourceId: string,
  blockNumber: number,
  queryWindow: number
): Promise<ConfirmedBlockHeightExistsResponse> {
  const requestBody: ConfirmedBlockHeightExistsRequestBody = {
    blockNumber: blockNumber,
    queryWindow: queryWindow,
  };

  const requestData: ConfirmedBlockHeightExistsRequest = {
    attestationType: toHex(attestationType),
    sourceId: toHex(sourceId),
    messageIntegrityCode: "", // Derived based on your specific implementation
    requestBody,
  };

  const response = await fetch(
    `${ATTESTATION_URL}/verifier/${sourceId}/${attestationType}/verifyConfirmedBlockHeight`,
    {
      method: "POST",
      headers: {
        "X-API-KEY": API_KEY as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    }
  );

  const data: ConfirmedBlockHeightExistsResponse = await response.json();
  console.log("Confirmed Block Height Response:", data);

  return data;
}

// -------------------------
// Import necessary modules and dependencies

export async function verifyEVMTransaction(
  attestationType: string,
  sourceId: string,
  transactionHash: string,
  requiredConfirmations: number,
  provideInput: boolean,
  listEvents: boolean,
  logIndices: number[] = []
): Promise<EVMTransactionResponse> {
  const requestBody: EVMTransactionRequestBody = {
    transactionHash: transactionHash,
    requiredConfirmations: requiredConfirmations,
    provideInput: provideInput,
    listEvents: listEvents,
    logIndices: logIndices,
  };

  const requestData: EVMTransactionRequest = {
    attestationType: toHex(attestationType),
    sourceId: toHex(sourceId),
    messageIntegrityCode: "", // Derived based on your specific implementation
    requestBody,
  };

  const response = await fetch(
    `${ATTESTATION_URL}/verifier/${sourceId}/${attestationType}/verifyEVMTransaction`,
    {
      method: "POST",
      headers: {
        "X-API-KEY": API_KEY as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    }
  );

  const data: EVMTransactionResponse = await response.json();
  console.log("EVM Transaction Response:", data);

  return data;
}

// ------------------------------
// Import necessary modules and dependencies

export async function verifyReferencedPaymentNonexistence(
  attestationType: string,
  sourceId: string,
  minimalBlockNumber: number,
  deadlineBlockNumber: number,
  deadlineTimestamp: number,
  destinationAddressHash: string,
  amount: string,
  standardPaymentReference: string
): Promise<ReferencedPaymentNonexistenceResponse> {
  const requestBody: ReferencedPaymentNonexistenceRequestBody = {
    minimalBlockNumber,
    deadlineBlockNumber,
    deadlineTimestamp,
    destinationAddressHash: toHex(destinationAddressHash),
    amount,
    standardPaymentReference: toHex(standardPaymentReference),
  };

  const requestData: ReferencedPaymentNonexistenceRequest = {
    attestationType: toHex(attestationType),
    sourceId: toHex(sourceId),
    messageIntegrityCode: "", // Derived based on your specific implementation
    requestBody,
  };

  const response = await fetch(
    `${ATTESTATION_URL}/verifier/${sourceId}/${attestationType}/verifyReferencedPaymentNonexistence`,
    {
      method: "POST",
      headers: {
        "X-API-KEY": API_KEY as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    }
  );

  const data: ReferencedPaymentNonexistenceResponse = await response.json();
  console.log("Referenced Payment Nonexistence Response:", data);

  return data;
}
