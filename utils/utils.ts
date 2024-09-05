import { ethers } from "ethers";
import {
  addressToName as addressToNameCST,
  nameToAbi as nameToAbiCST,
  nameToAddress as nameToAddressCST,
} from "../coston";
import {
  addressToName as addressToNameCST2,
  nameToAbi as nameToAbiCST2,
  nameToAddress as nameToAddressCST2,
} from "../coston2";
import {
  addressToName as addressToNameFLR,
  nameToAbi as nameToAbiFLR,
  nameToAddress as nameToAddressFLR,
} from "../flare";
import {
  addressToName as addressToNameSGB,
  nameToAbi as nameToAbiSGB,
  nameToAddress as nameToAddressSGB,
} from "../songbird";

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

export async function verifyAddressValidity(
  attestationType: string,
  sourceId: string,
  addressStr: string,
  ATTESTATION_URL?: string,
  API_KEY?: string
): Promise<AddressValidityResponse> {
  const requestBody: AddressValidityRequestBody = {
    addressStr,
  };

  const requestData: AddressValidityRequest = {
    attestationType: toHex(attestationType),
    sourceId: toHex(sourceId),
    messageIntegrityCode: "",
    requestBody,
  };

  const url = `${
    ATTESTATION_URL || process.env.ATTESTATION_URL
  }/verifier/${sourceId}/${attestationType}/verifyAddress`;
  const apiKey = API_KEY || process.env.API_KEY;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "X-API-KEY": apiKey as string,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  const data: AddressValidityResponse = await response.json();
  console.log("Address Validity Response:", data);

  return data;
}

export async function checkBalanceDecreasingTransaction(
  attestationType: string,
  sourceId: string,
  transactionId: string,
  sourceAddressIndicator: string,
  ATTESTATION_URL?: string,
  API_KEY?: string
): Promise<BalanceDecreasingTransactionResponse> {
  const requestBody: BalanceDecreasingTransactionRequestBody = {
    transactionId: toHex(transactionId),
    sourceAddressIndicator: toHex(sourceAddressIndicator),
  };

  const requestData: BalanceDecreasingTransactionRequest = {
    attestationType: toHex(attestationType),
    sourceId: toHex(sourceId),
    messageIntegrityCode: "",
    requestBody,
  };

  const url = `${
    ATTESTATION_URL || process.env.ATTESTATION_URL
  }/verifier/${sourceId}/${attestationType}/checkBalanceDecreasingTransaction`;
  const apiKey = API_KEY || process.env.API_KEY;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "X-API-KEY": apiKey as string,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  const data: BalanceDecreasingTransactionResponse = await response.json();
  console.log("Balance Decreasing Transaction Response:", data);

  return data;
}

export async function verifyConfirmedBlockHeight(
  attestationType: string,
  sourceId: string,
  blockNumber: number,
  queryWindow: number,
  ATTESTATION_URL?: string,
  API_KEY?: string
): Promise<ConfirmedBlockHeightExistsResponse> {
  const requestBody: ConfirmedBlockHeightExistsRequestBody = {
    blockNumber,
    queryWindow,
  };

  const requestData: ConfirmedBlockHeightExistsRequest = {
    attestationType: toHex(attestationType),
    sourceId: toHex(sourceId),
    messageIntegrityCode: "",
    requestBody,
  };

  const url = `${
    ATTESTATION_URL || process.env.ATTESTATION_URL
  }/verifier/${sourceId}/${attestationType}/verifyConfirmedBlockHeight`;
  const apiKey = API_KEY || process.env.API_KEY;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "X-API-KEY": apiKey as string,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  const data: ConfirmedBlockHeightExistsResponse = await response.json();
  console.log("Confirmed Block Height Response:", data);

  return data;
}

export async function verifyEVMTransaction(
  attestationType: string,
  sourceId: string,
  transactionHash: string,
  requiredConfirmations: number,
  provideInput: boolean,
  listEvents: boolean,
  logIndices: number[] = [],
  ATTESTATION_URL?: string,
  API_KEY?: string
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
    messageIntegrityCode: "",
    requestBody,
  };

  const url = `${
    ATTESTATION_URL || process.env.ATTESTATION_URL
  }/verifier/${sourceId}/${attestationType}/verifyEVMTransaction`;
  const apiKey = API_KEY || process.env.API_KEY;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "X-API-KEY": apiKey as string,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  const data: EVMTransactionResponse = await response.json();
  console.log("EVM Transaction Response:", data);

  return data;
}

export async function verifyReferencedPaymentNonexistence(
  attestationType: string,
  sourceId: string,
  minimalBlockNumber: number,
  deadlineBlockNumber: number,
  deadlineTimestamp: number,
  destinationAddressHash: string,
  amount: string,
  standardPaymentReference: string,
  ATTESTATION_URL?: string,
  API_KEY?: string
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
    messageIntegrityCode: "",
    requestBody,
  };

  const url = `${
    ATTESTATION_URL || process.env.ATTESTATION_URL
  }/verifier/${sourceId}/${attestationType}/verifyReferencedPaymentNonexistence`;
  const apiKey = API_KEY || process.env.API_KEY;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "X-API-KEY": apiKey as string,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  const data: ReferencedPaymentNonexistenceResponse = await response.json();
  console.log("Referenced Payment Nonexistence Response:", data);

  return data;
}

export const nameToAddress = (name: string, network: string): string => {
  if (network.toLowerCase() == "flare") return nameToAddressFLR(name);
  if (network.toLowerCase() == "songbird") return nameToAddressSGB(name);
  if (network.toLowerCase() == "coston") return nameToAddressCST(name);
  if (network.toLowerCase() == "coston2") return nameToAddressCST2(name);
  return "";
};

export const addressToName = (address: string, network: string): string => {
  if (network.toLowerCase() == "flare") return addressToNameFLR(address);
  if (network.toLowerCase() == "songbird") return addressToNameSGB(address);
  if (network.toLowerCase() == "coston") return addressToNameCST(address);
  if (network.toLowerCase() == "coston2") return addressToNameCST2(address);
  return "";
};

export const nameToAbi = (
  name: string,
  network: string
): { data: any; status: string } => {
  if (network.toLowerCase() == "flare") return nameToAbiFLR(name);
  if (network.toLowerCase() == "songbird") return nameToAbiSGB(name);
  if (network.toLowerCase() == "coston") return nameToAbiCST(name);
  if (network.toLowerCase() == "coston2") return nameToAbiCST2(name);
  return { data: [], status: "Please select a network" };
};
