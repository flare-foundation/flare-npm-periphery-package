import AgentInfo from "./artifacts/contracts/userInterfaces/data/AgentInfo.sol/AgentInfo.json";
import AgentSettings from "./artifacts/contracts/userInterfaces/data/AgentSettings.sol/AgentSettings.json";
import AssetManagerSettings from "./artifacts/contracts/userInterfaces/data/AssetManagerSettings.sol/AssetManagerSettings.json";
import AvailableAgentInfo from "./artifacts/contracts/userInterfaces/data/AvailableAgentInfo.sol/AvailableAgentInfo.json";
import CollateralType from "./artifacts/contracts/userInterfaces/data/CollateralType.sol/CollateralType.json";
import ContractRegistry from "./artifacts/contracts/ContractRegistry.sol/ContractRegistry.json";
import FtsoV2Interface from "./artifacts/contracts/FtsoV2Interface.sol/FtsoV2Interface.json";
import IAddressValidity from "./artifacts/contracts/IAddressValidity.sol/IAddressValidity.json";
import IAddressValidityVerification from "./artifacts/contracts/IAddressValidityVerification.sol/IAddressValidityVerification.json";
import IAgentPing from "./artifacts/contracts/IAgentPing.sol/IAgentPing.json";
import IAssetManager from "./artifacts/contracts/IAssetManager.sol/IAssetManager.json";
import IAssetManagerEvents from "./artifacts/contracts/IAssetManagerEvents.sol/IAssetManagerEvents.json";
import IBalanceDecreasingTransaction from "./artifacts/contracts/IBalanceDecreasingTransaction.sol/IBalanceDecreasingTransaction.json";
import IBalanceDecreasingTransactionVerification from "./artifacts/contracts/IBalanceDecreasingTransactionVerification.sol/IBalanceDecreasingTransactionVerification.json";
import ICChainStake from "./artifacts/contracts/ICChainStake.sol/ICChainStake.json";
import ICChainVotePower from "./artifacts/contracts/ICChainVotePower.sol/ICChainVotePower.json";
import IClaimSetupManager from "./artifacts/contracts/IClaimSetupManager.sol/IClaimSetupManager.json";
import ICollateralizable from "./artifacts/contracts/mockXAsset/interfaces/ICollateralizable.sol/ICollateralizable.json";
import IConfirmedBlockHeightExists from "./artifacts/contracts/IConfirmedBlockHeightExists.sol/IConfirmedBlockHeightExists.json";
import IConfirmedBlockHeightExistsVerification from "./artifacts/contracts/IConfirmedBlockHeightExistsVerification.sol/IConfirmedBlockHeightExistsVerification.json";
import IDelegationAccount from "./artifacts/contracts/IDelegationAccount.sol/IDelegationAccount.json";
import IDiamondLoupe from "./artifacts/contracts/diamond/interfaces/IDiamondLoupe.sol/IDiamondLoupe.json";
import IEVMTransaction from "./artifacts/contracts/IEVMTransaction.sol/IEVMTransaction.json";
import IEVMTransactionVerification from "./artifacts/contracts/IEVMTransactionVerification.sol/IEVMTransactionVerification.json";
import IEntityManager from "./artifacts/contracts/IEntityManager.sol/IEntityManager.json";
import IFastUpdateIncentiveManager from "./artifacts/contracts/IFastUpdateIncentiveManager.sol/IFastUpdateIncentiveManager.json";
import IFastUpdater from "./artifacts/contracts/IFastUpdater.sol/IFastUpdater.json";
import IFastUpdatesConfiguration from "./artifacts/contracts/IFastUpdatesConfiguration.sol/IFastUpdatesConfiguration.json";
import IFdcHub from "./artifacts/contracts/IFdcHub.sol/IFdcHub.json";
import IFdcInflationConfigurations from "./artifacts/contracts/IFdcInflationConfigurations.sol/IFdcInflationConfigurations.json";
import IFdcRequestFeeConfigurations from "./artifacts/contracts/IFdcRequestFeeConfigurations.sol/IFdcRequestFeeConfigurations.json";
import IFdcVerification from "./artifacts/contracts/IFdcVerification.sol/IFdcVerification.json";
import IFeeCalculator from "./artifacts/contracts/IFeeCalculator.sol/IFeeCalculator.json";
import IFlareAssetRegistry from "./artifacts/contracts/IFlareAssetRegistry.sol/IFlareAssetRegistry.json";
import IFlareContractRegistry from "./artifacts/contracts/IFlareContractRegistry.sol/IFlareContractRegistry.json";
import IFlareDaemonize from "./artifacts/contracts/genesis/interfaces/IFlareDaemonize.sol/IFlareDaemonize.json";
import IFlareSystemsCalculator from "./artifacts/contracts/IFlareSystemsCalculator.sol/IFlareSystemsCalculator.json";
import IFlareSystemsManager from "./artifacts/contracts/IFlareSystemsManager.sol/IFlareSystemsManager.json";
import IFtso from "./artifacts/contracts/IFtso.sol/IFtso.json";
import IFtsoFeedDecimals from "./artifacts/contracts/IFtsoFeedDecimals.sol/IFtsoFeedDecimals.json";
import IFtsoFeedIdConverter from "./artifacts/contracts/IFtsoFeedIdConverter.sol/IFtsoFeedIdConverter.json";
import IFtsoFeedPublisher from "./artifacts/contracts/IFtsoFeedPublisher.sol/IFtsoFeedPublisher.json";
import IFtsoGenesis from "./artifacts/contracts/genesis/interfaces/IFtsoGenesis.sol/IFtsoGenesis.json";
import IFtsoInflationConfigurations from "./artifacts/contracts/IFtsoInflationConfigurations.sol/IFtsoInflationConfigurations.json";
import IFtsoManager from "./artifacts/contracts/IFtsoManager.sol/IFtsoManager.json";
import IFtsoManagerGenesis from "./artifacts/contracts/genesis/interfaces/IFtsoManagerGenesis.sol/IFtsoManagerGenesis.json";
import IFtsoRegistry from "./artifacts/contracts/IFtsoRegistry.sol/IFtsoRegistry.json";
import IFtsoRegistryGenesis from "./artifacts/contracts/genesis/interfaces/IFtsoRegistryGenesis.sol/IFtsoRegistryGenesis.json";
import IFtsoRewardManager from "./artifacts/contracts/IFtsoRewardManager.sol/IFtsoRewardManager.json";
import IFtsoRewardOffersManager from "./artifacts/contracts/IFtsoRewardOffersManager.sol/IFtsoRewardOffersManager.json";
import IGenericRewardManager from "./artifacts/contracts/IGenericRewardManager.sol/IGenericRewardManager.json";
import IGovernanceSettings from "./artifacts/contracts/IGovernanceSettings.sol/IGovernanceSettings.json";
import IGovernanceVotePower from "./artifacts/contracts/IGovernanceVotePower.sol/IGovernanceVotePower.json";
import IGovernor from "./artifacts/contracts/IGovernor.sol/IGovernor.json";
import IIAddressUpdatable from "./artifacts/contracts/addressUpdater/interfaces/IIAddressUpdatable.sol/IIAddressUpdatable.json";
import IIAddressUpdater from "./artifacts/contracts/addressUpdater/interfaces/IIAddressUpdater.sol/IIAddressUpdater.json";
import IIClaimSetupManager from "./artifacts/contracts/protocol/interfaces/IIClaimSetupManager.sol/IIClaimSetupManager.json";
import IICleanable from "./artifacts/contracts/token/interfaces/IICleanable.sol/IICleanable.json";
import IICleanupBlockNumberManager from "./artifacts/contracts/protocol/interfaces/IICleanupBlockNumberManager.sol/IICleanupBlockNumberManager.json";
import IICustomFeed from "./artifacts/contracts/customFeeds/interfaces/IICustomFeed.sol/IICustomFeed.json";
import IIERC20WithMetadata from "./artifacts/contracts/assetRegistry/interfaces/IIERC20WithMetadata.sol/IIERC20WithMetadata.json";
import IIEntityManager from "./artifacts/contracts/protocol/interfaces/IIEntityManager.sol/IIEntityManager.json";
import IIFastUpdaterView from "./artifacts/contracts/fscV1/interfaces/IIFastUpdaterView.sol/IIFastUpdaterView.json";
import IIFlareAssetRegistry from "./artifacts/contracts/assetRegistry/interfaces/IIFlareAssetRegistry.sol/IIFlareAssetRegistry.json";
import IIFlareAssetRegistryProvider from "./artifacts/contracts/assetRegistry/interfaces/IIFlareAssetRegistryProvider.sol/IIFlareAssetRegistryProvider.json";
import IIFlareSystemsCalculator from "./artifacts/contracts/protocol/interfaces/IIFlareSystemsCalculator.sol/IIFlareSystemsCalculator.json";
import IIFlareSystemsManager from "./artifacts/contracts/protocol/interfaces/IIFlareSystemsManager.sol/IIFlareSystemsManager.json";
import IIFtso from "./artifacts/contracts/ftso/interfaces/IIFtso.sol/IIFtso.json";
import IIFtsoFeedPublisher from "./artifacts/contracts/ftso/interfaces/IIFtsoFeedPublisher.sol/IIFtsoFeedPublisher.json";
import IIFtsoManager from "./artifacts/contracts/ftso/interfaces/IIFtsoManager.sol/IIFtsoManager.json";
import IIFtsoManagerProxy from "./artifacts/contracts/fscV1/interfaces/IIFtsoManagerProxy.sol/IIFtsoManagerProxy.json";
import IIFtsoManagerV1 from "./artifacts/contracts/ftso/interfaces/IIFtsoManagerV1.sol/IIFtsoManagerV1.json";
import IIFtsoRegistry from "./artifacts/contracts/utils/interfaces/IIFtsoRegistry.sol/IIFtsoRegistry.json";
import IIFtsoRegistryV1 from "./artifacts/contracts/utils/interfaces/IIFtsoRegistryV1.sol/IIFtsoRegistryV1.json";
import IIFtsoRewardManager from "./artifacts/contracts/tokenPools/interfaces/IIFtsoRewardManager.sol/IIFtsoRewardManager.json";
import IIGovernanceVotePower from "./artifacts/contracts/token/interfaces/IIGovernanceVotePower.sol/IIGovernanceVotePower.json";
import IIGovernorProposer from "./artifacts/contracts/governance/interfaces/IIGovernorProposer.sol/IIGovernorProposer.json";
import IIInflationAllocation from "./artifacts/contracts/inflation/interfaces/IIInflationAllocation.sol/IIInflationAllocation.json";
import IIInflationReceiver from "./artifacts/contracts/inflation/interfaces/IIInflationReceiver.sol/IIInflationReceiver.json";
import IIInflationReceiverV1 from "./artifacts/contracts/inflation/interfaces/IIInflationReceiverV1.sol/IIInflationReceiverV1.json";
import IIInflationV1 from "./artifacts/contracts/inflation/interfaces/IIInflationV1.sol/IIInflationV1.json";
import IINodePossessionVerifier from "./artifacts/contracts/protocol/interfaces/IINodePossessionVerifier.sol/IINodePossessionVerifier.json";
import IIPollingFoundation from "./artifacts/contracts/governance/interfaces/IIPollingFoundation.sol/IIPollingFoundation.json";
import IIPollingManagementGroup from "./artifacts/contracts/governance/interfaces/IIPollingManagementGroup.sol/IIPollingManagementGroup.json";
import IIPreInflationCalculation from "./artifacts/contracts/inflation/interfaces/IIPreInflationCalculation.sol/IIPreInflationCalculation.json";
import IIPriceSubmitter from "./artifacts/contracts/genesis/interfaces/IIPriceSubmitter.sol/IIPriceSubmitter.json";
import IIPublicKeyVerifier from "./artifacts/contracts/protocol/interfaces/IIPublicKeyVerifier.sol/IIPublicKeyVerifier.json";
import IIRNat from "./artifacts/contracts/rNat/interfaces/IIRNat.sol/IIRNat.json";
import IIRNatAccount from "./artifacts/contracts/rNat/interfaces/IIRNatAccount.sol/IIRNatAccount.json";
import IIRandomProvider from "./artifacts/contracts/utils/interfaces/IIRandomProvider.sol/IIRandomProvider.json";
import IIRelay from "./artifacts/contracts/protocol/interfaces/IIRelay.sol/IIRelay.json";
import IIRewardEpochSwitchoverTrigger from "./artifacts/contracts/protocol/interfaces/IIRewardEpochSwitchoverTrigger.sol/IIRewardEpochSwitchoverTrigger.json";
import IIRewardManager from "./artifacts/contracts/protocol/interfaces/IIRewardManager.sol/IIRewardManager.json";
import IISubmission from "./artifacts/contracts/protocol/interfaces/IISubmission.sol/IISubmission.json";
import IISupply from "./artifacts/contracts/inflation/interfaces/IISupply.sol/IISupply.json";
import IITokenPool from "./artifacts/contracts/tokenPools/interfaces/IITokenPool.sol/IITokenPool.json";
import IIVPContract from "./artifacts/contracts/token/interfaces/IIVPContract.sol/IIVPContract.json";
import IIVPToken from "./artifacts/contracts/token/interfaces/IIVPToken.sol/IIVPToken.json";
import IIVoterRegistrationTrigger from "./artifacts/contracts/protocol/interfaces/IIVoterRegistrationTrigger.sol/IIVoterRegistrationTrigger.json";
import IIVoterRegistry from "./artifacts/contracts/protocol/interfaces/IIVoterRegistry.sol/IIVoterRegistry.json";
import IIVoterWhitelister from "./artifacts/contracts/utils/interfaces/IIVoterWhitelister.sol/IIVoterWhitelister.json";
import IIncreaseManager from "./artifacts/contracts/IIncreaseManager.sol/IIncreaseManager.json";
import IInflationGenesis from "./artifacts/contracts/genesis/interfaces/IInflationGenesis.sol/IInflationGenesis.json";
import IJsonApi from "./artifacts/contracts/IJsonApi.sol/IJsonApi.json";
import IJsonApiVerification from "./artifacts/contracts/IJsonApiVerification.sol/IJsonApiVerification.json";
import IPayment from "./artifacts/contracts/IPayment.sol/IPayment.json";
import IPaymentVerification from "./artifacts/contracts/IPaymentVerification.sol/IPaymentVerification.json";
import IPollingManagementGroup from "./artifacts/contracts/IPollingManagementGroup.sol/IPollingManagementGroup.json";
import IPriceSubmitter from "./artifacts/contracts/IPriceSubmitter.sol/IPriceSubmitter.json";
import IRNat from "./artifacts/contracts/IRNat.sol/IRNat.json";
import IRNatAccount from "./artifacts/contracts/IRNatAccount.sol/IRNatAccount.json";
import IRandomProvider from "./artifacts/contracts/IRandomProvider.sol/IRandomProvider.json";
import IRedemptionTimeExtension from "./artifacts/contracts/IRedemptionTimeExtension.sol/IRedemptionTimeExtension.json";
import IReferencedPaymentNonexistence from "./artifacts/contracts/IReferencedPaymentNonexistence.sol/IReferencedPaymentNonexistence.json";
import IReferencedPaymentNonexistenceVerification from "./artifacts/contracts/IReferencedPaymentNonexistenceVerification.sol/IReferencedPaymentNonexistenceVerification.json";
import IRelay from "./artifacts/contracts/IRelay.sol/IRelay.json";
import IRewardManager from "./artifacts/contracts/IRewardManager.sol/IRewardManager.json";
import ISubmission from "./artifacts/contracts/ISubmission.sol/ISubmission.json";
import ITransferFees from "./artifacts/contracts/ITransferFees.sol/ITransferFees.json";
import ITypeTemplate from "./artifacts/contracts/fdc/interfaces/ITypeTemplate.sol/ITypeTemplate.json";
import ITypeTemplateVerification from "./artifacts/contracts/fdc/interfaces/ITypeTemplateVerification.sol/ITypeTemplateVerification.json";
import IUpdateValidators from "./artifacts/contracts/utils/interfaces/IUpdateValidators.sol/IUpdateValidators.json";
import IVPContractEvents from "./artifacts/contracts/IVPContractEvents.sol/IVPContractEvents.json";
import IVPToken from "./artifacts/contracts/IVPToken.sol/IVPToken.json";
import IValidatorRewardOffersManager from "./artifacts/contracts/IValidatorRewardOffersManager.sol/IValidatorRewardOffersManager.json";
import IVoterPreRegistry from "./artifacts/contracts/IVoterPreRegistry.sol/IVoterPreRegistry.json";
import IVoterRegistry from "./artifacts/contracts/IVoterRegistry.sol/IVoterRegistry.json";
import IVoterWhitelister from "./artifacts/contracts/IVoterWhitelister.sol/IVoterWhitelister.json";
import IWNat from "./artifacts/contracts/IWNat.sol/IWNat.json";
import IWNatDelegationFee from "./artifacts/contracts/IWNatDelegationFee.sol/IWNatDelegationFee.json";
import IWeb2Json from "./artifacts/contracts/IWeb2Json.sol/IWeb2Json.json";
import IWeb2JsonVerification from "./artifacts/contracts/IWeb2JsonVerification.sol/IWeb2JsonVerification.json";
import ProtocolsV2Interface from "./artifacts/contracts/ProtocolsV2Interface.sol/ProtocolsV2Interface.json";
import RandomNumberV2Interface from "./artifacts/contracts/RandomNumberV2Interface.sol/RandomNumberV2Interface.json";
import RedemptionTicketInfo from "./artifacts/contracts/userInterfaces/data/RedemptionTicketInfo.sol/RedemptionTicketInfo.json";
import RewardsV2Interface from "./artifacts/contracts/RewardsV2Interface.sol/RewardsV2Interface.json";
import TestFtsoV2Interface from "./artifacts/contracts/TestFtsoV2Interface.sol/TestFtsoV2Interface.json";

import { JsonRpcProvider } from "ethers";
import { nameToAddress } from "../index";

export const interfaceAbis: { [key: string]: any; } = {
  AgentInfo: AgentInfo,
  AgentSettings: AgentSettings,
  AssetManagerSettings: AssetManagerSettings,
  AvailableAgentInfo: AvailableAgentInfo,
  CollateralType: CollateralType,
  ContractRegistry: ContractRegistry,
  FtsoV2Interface: FtsoV2Interface,
  IAddressValidity: IAddressValidity,
  IAddressValidityVerification: IAddressValidityVerification,
  IAgentPing: IAgentPing,
  IAssetManager: IAssetManager,
  IAssetManagerEvents: IAssetManagerEvents,
  IBalanceDecreasingTransaction: IBalanceDecreasingTransaction,
  IBalanceDecreasingTransactionVerification: IBalanceDecreasingTransactionVerification,
  ICChainStake: ICChainStake,
  ICChainVotePower: ICChainVotePower,
  IClaimSetupManager: IClaimSetupManager,
  ICollateralizable: ICollateralizable,
  IConfirmedBlockHeightExists: IConfirmedBlockHeightExists,
  IConfirmedBlockHeightExistsVerification: IConfirmedBlockHeightExistsVerification,
  IDelegationAccount: IDelegationAccount,
  IDiamondLoupe: IDiamondLoupe,
  IEVMTransaction: IEVMTransaction,
  IEVMTransactionVerification: IEVMTransactionVerification,
  IEntityManager: IEntityManager,
  IFastUpdateIncentiveManager: IFastUpdateIncentiveManager,
  IFastUpdater: IFastUpdater,
  IFastUpdatesConfiguration: IFastUpdatesConfiguration,
  IFdcHub: IFdcHub,
  IFdcInflationConfigurations: IFdcInflationConfigurations,
  IFdcRequestFeeConfigurations: IFdcRequestFeeConfigurations,
  IFdcVerification: IFdcVerification,
  IFeeCalculator: IFeeCalculator,
  IFlareAssetRegistry: IFlareAssetRegistry,
  IFlareContractRegistry: IFlareContractRegistry,
  IFlareDaemonize: IFlareDaemonize,
  IFlareSystemsCalculator: IFlareSystemsCalculator,
  IFlareSystemsManager: IFlareSystemsManager,
  IFtso: IFtso,
  IFtsoFeedDecimals: IFtsoFeedDecimals,
  IFtsoFeedIdConverter: IFtsoFeedIdConverter,
  IFtsoFeedPublisher: IFtsoFeedPublisher,
  IFtsoGenesis: IFtsoGenesis,
  IFtsoInflationConfigurations: IFtsoInflationConfigurations,
  IFtsoManager: IFtsoManager,
  IFtsoManagerGenesis: IFtsoManagerGenesis,
  IFtsoRegistry: IFtsoRegistry,
  IFtsoRegistryGenesis: IFtsoRegistryGenesis,
  IFtsoRewardManager: IFtsoRewardManager,
  IFtsoRewardOffersManager: IFtsoRewardOffersManager,
  IGenericRewardManager: IGenericRewardManager,
  IGovernanceSettings: IGovernanceSettings,
  IGovernanceVotePower: IGovernanceVotePower,
  IGovernor: IGovernor,
  IIAddressUpdatable: IIAddressUpdatable,
  IIAddressUpdater: IIAddressUpdater,
  IIClaimSetupManager: IIClaimSetupManager,
  IICleanable: IICleanable,
  IICleanupBlockNumberManager: IICleanupBlockNumberManager,
  IICustomFeed: IICustomFeed,
  IIERC20WithMetadata: IIERC20WithMetadata,
  IIEntityManager: IIEntityManager,
  IIFastUpdaterView: IIFastUpdaterView,
  IIFlareAssetRegistry: IIFlareAssetRegistry,
  IIFlareAssetRegistryProvider: IIFlareAssetRegistryProvider,
  IIFlareSystemsCalculator: IIFlareSystemsCalculator,
  IIFlareSystemsManager: IIFlareSystemsManager,
  IIFtso: IIFtso,
  IIFtsoFeedPublisher: IIFtsoFeedPublisher,
  IIFtsoManager: IIFtsoManager,
  IIFtsoManagerProxy: IIFtsoManagerProxy,
  IIFtsoManagerV1: IIFtsoManagerV1,
  IIFtsoRegistry: IIFtsoRegistry,
  IIFtsoRegistryV1: IIFtsoRegistryV1,
  IIFtsoRewardManager: IIFtsoRewardManager,
  IIGovernanceVotePower: IIGovernanceVotePower,
  IIGovernorProposer: IIGovernorProposer,
  IIInflationAllocation: IIInflationAllocation,
  IIInflationReceiver: IIInflationReceiver,
  IIInflationReceiverV1: IIInflationReceiverV1,
  IIInflationV1: IIInflationV1,
  IINodePossessionVerifier: IINodePossessionVerifier,
  IIPollingFoundation: IIPollingFoundation,
  IIPollingManagementGroup: IIPollingManagementGroup,
  IIPreInflationCalculation: IIPreInflationCalculation,
  IIPriceSubmitter: IIPriceSubmitter,
  IIPublicKeyVerifier: IIPublicKeyVerifier,
  IIRNat: IIRNat,
  IIRNatAccount: IIRNatAccount,
  IIRandomProvider: IIRandomProvider,
  IIRelay: IIRelay,
  IIRewardEpochSwitchoverTrigger: IIRewardEpochSwitchoverTrigger,
  IIRewardManager: IIRewardManager,
  IISubmission: IISubmission,
  IISupply: IISupply,
  IITokenPool: IITokenPool,
  IIVPContract: IIVPContract,
  IIVPToken: IIVPToken,
  IIVoterRegistrationTrigger: IIVoterRegistrationTrigger,
  IIVoterRegistry: IIVoterRegistry,
  IIVoterWhitelister: IIVoterWhitelister,
  IIncreaseManager: IIncreaseManager,
  IInflationGenesis: IInflationGenesis,
  IJsonApi: IJsonApi,
  IJsonApiVerification: IJsonApiVerification,
  IPayment: IPayment,
  IPaymentVerification: IPaymentVerification,
  IPollingManagementGroup: IPollingManagementGroup,
  IPriceSubmitter: IPriceSubmitter,
  IRNat: IRNat,
  IRNatAccount: IRNatAccount,
  IRandomProvider: IRandomProvider,
  IRedemptionTimeExtension: IRedemptionTimeExtension,
  IReferencedPaymentNonexistence: IReferencedPaymentNonexistence,
  IReferencedPaymentNonexistenceVerification: IReferencedPaymentNonexistenceVerification,
  IRelay: IRelay,
  IRewardManager: IRewardManager,
  ISubmission: ISubmission,
  ITransferFees: ITransferFees,
  ITypeTemplate: ITypeTemplate,
  ITypeTemplateVerification: ITypeTemplateVerification,
  IUpdateValidators: IUpdateValidators,
  IVPContractEvents: IVPContractEvents,
  IVPToken: IVPToken,
  IValidatorRewardOffersManager: IValidatorRewardOffersManager,
  IVoterPreRegistry: IVoterPreRegistry,
  IVoterRegistry: IVoterRegistry,
  IVoterWhitelister: IVoterWhitelister,
  IWNat: IWNat,
  IWNatDelegationFee: IWNatDelegationFee,
  IWeb2Json: IWeb2Json,
  IWeb2JsonVerification: IWeb2JsonVerification,
  ProtocolsV2Interface: ProtocolsV2Interface,
  RandomNumberV2Interface: RandomNumberV2Interface,
  RedemptionTicketInfo: RedemptionTicketInfo,
  RewardsV2Interface: RewardsV2Interface,
  TestFtsoV2Interface: TestFtsoV2Interface,
};

export const products: { [key: string]: { name: string, interface: string, abi: any, getAddress: (provider: JsonRpcProvider) => Promise<string> } } = {
  ClaimSetupManager: {
    name: "ClaimSetupManager",
    interface: "IClaimSetupManager",
    abi: interfaceAbis.IClaimSetupManager,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("ClaimSetupManager", provider),
  },
  EntityManager: {
    name: "EntityManager",
    interface: "IEntityManager",
    abi: interfaceAbis.IEntityManager,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("EntityManager", provider),
  },
  FastUpdateIncentiveManager: {
    name: "FastUpdateIncentiveManager",
    interface: "IFastUpdateIncentiveManager",
    abi: interfaceAbis.IFastUpdateIncentiveManager,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("FastUpdateIncentiveManager", provider),
  },
  FastUpdater: {
    name: "FastUpdater",
    interface: "IFastUpdater",
    abi: interfaceAbis.IFastUpdater,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("FastUpdater", provider),
  },
  FastUpdatesConfiguration: {
    name: "FastUpdatesConfiguration",
    interface: "IFastUpdatesConfiguration",
    abi: interfaceAbis.IFastUpdatesConfiguration,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("FastUpdatesConfiguration", provider),
  },
  FeeCalculator: {
    name: "FeeCalculator",
    interface: "IFeeCalculator",
    abi: interfaceAbis.IFeeCalculator,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("FeeCalculator", provider),
  },
  FlareAssetRegistry: {
    name: "FlareAssetRegistry",
    interface: "IFlareAssetRegistry",
    abi: interfaceAbis.IFlareAssetRegistry,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("FlareAssetRegistry", provider),
  },
  FlareContractRegistry: {
    name: "FlareContractRegistry",
    interface: "IFlareContractRegistry",
    abi: interfaceAbis.IFlareContractRegistry,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("FlareContractRegistry", provider),
  },
  FlareSystemsCalculator: {
    name: "FlareSystemsCalculator",
    interface: "IFlareSystemsCalculator",
    abi: interfaceAbis.IFlareSystemsCalculator,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("FlareSystemsCalculator", provider),
  },
  FlareSystemsManager: {
    name: "FlareSystemsManager",
    interface: "IFlareSystemsManager",
    abi: interfaceAbis.IFlareSystemsManager,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("FlareSystemsManager", provider),
  },
  FtsoFeedDecimals: {
    name: "FtsoFeedDecimals",
    interface: "IFtsoFeedDecimals",
    abi: interfaceAbis.IFtsoFeedDecimals,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("FtsoFeedDecimals", provider),
  },
  FtsoFeedIdConverter: {
    name: "FtsoFeedIdConverter",
    interface: "IFtsoFeedIdConverter",
    abi: interfaceAbis.IFtsoFeedIdConverter,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("FtsoFeedIdConverter", provider),
  },
  FtsoFeedPublisher: {
    name: "FtsoFeedPublisher",
    interface: "IFtsoFeedPublisher",
    abi: interfaceAbis.IFtsoFeedPublisher,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("FtsoFeedPublisher", provider),
  },
  FtsoInflationConfigurations: {
    name: "FtsoInflationConfigurations",
    interface: "IFtsoInflationConfigurations",
    abi: interfaceAbis.IFtsoInflationConfigurations,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("FtsoInflationConfigurations", provider),
  },
  FtsoManager: {
    name: "FtsoManager",
    interface: "IFtsoManager",
    abi: interfaceAbis.IFtsoManager,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("FtsoManager", provider),
  },
  FtsoRegistry: {
    name: "FtsoRegistry",
    interface: "IFtsoRegistry",
    abi: interfaceAbis.IFtsoRegistry,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("FtsoRegistry", provider),
  },
  FtsoRewardManager: {
    name: "FtsoRewardManager",
    interface: "IFtsoRewardManager",
    abi: interfaceAbis.IFtsoRewardManager,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("FtsoRewardManager", provider),
  },
  FtsoRewardOffersManager: {
    name: "FtsoRewardOffersManager",
    interface: "IFtsoRewardOffersManager",
    abi: interfaceAbis.IFtsoRewardOffersManager,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("FtsoRewardOffersManager", provider),
  },
  GovernanceSettings: {
    name: "GovernanceSettings",
    interface: "IGovernanceSettings",
    abi: interfaceAbis.IGovernanceSettings,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("GovernanceSettings", provider),
  },
  GovernanceVotePower: {
    name: "GovernanceVotePower",
    interface: "IGovernanceVotePower",
    abi: interfaceAbis.IGovernanceVotePower,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("GovernanceVotePower", provider),
  },
  PriceSubmitter: {
    name: "PriceSubmitter",
    interface: "IPriceSubmitter",
    abi: interfaceAbis.IPriceSubmitter,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("PriceSubmitter", provider),
  },
  Relay: {
    name: "Relay",
    interface: "IRelay",
    abi: interfaceAbis.IRelay,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("Relay", provider),
  },
  RewardManager: {
    name: "RewardManager",
    interface: "IRewardManager",
    abi: interfaceAbis.IRewardManager,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("RewardManager", provider),
  },
  Submission: {
    name: "Submission",
    interface: "ISubmission",
    abi: interfaceAbis.ISubmission,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("Submission", provider),
  },
  VoterRegistry: {
    name: "VoterRegistry",
    interface: "IVoterRegistry",
    abi: interfaceAbis.IVoterRegistry,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("VoterRegistry", provider),
  },
  VoterWhitelister: {
    name: "VoterWhitelister",
    interface: "IVoterWhitelister",
    abi: interfaceAbis.IVoterWhitelister,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("VoterWhitelister", provider),
  },
  WNat: {
    name: "WNat",
    interface: "IWNat",
    abi: interfaceAbis.IWNat,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("WNat", provider),
  },
  WNatDelegationFee: {
    name: "WNatDelegationFee",
    interface: "IWNatDelegationFee",
    abi: interfaceAbis.IWNatDelegationFee,
    getAddress: async (provider: JsonRpcProvider) => await nameToAddress("WNatDelegationFee", provider),
  },
};