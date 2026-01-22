// This file was generated automatically. Do not edit manually.

import { flare } from "../index";
import { nameToAbi, interfaceToAbi } from "../index";

describe("Testing flare ABIs", () => {
    test("Interface ABIs exist for all contracts", () => {
        expect(flare.interfaceAbis.AgentInfo).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.AgentSettings).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.AssetManagerSettings).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.AvailableAgentInfo).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.CollateralReservationInfo).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.CollateralType).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.ContractRegistry).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.EmergencyPause).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.FtsoV2Interface).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IAddressBinder).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IAddressValidity).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IAddressValidityVerification).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IAgentAlwaysAllowedMinters).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IAgentOwnerRegistry).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IAgentPing).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IAssetManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IAssetManagerController).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IAssetManagerEvents).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IBalanceDecreasingTransaction).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IBalanceDecreasingTransactionVerification).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.ICChainStake).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.ICChainVotePower).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IClaimSetupManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.ICollateralizable).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IConfirmedBlockHeightExists).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IConfirmedBlockHeightExistsVerification).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.ICoreVaultClient).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.ICoreVaultClientSettings).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IDelegationAccount).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IDiamondLoupe).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IDistributionToDelegators).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IEVMTransaction).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IEVMTransactionVerification).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IEntityManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFAsset).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFastUpdateIncentiveManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFastUpdater).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFastUpdatesConfiguration).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFdcHub).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFdcInflationConfigurations).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFdcRequestFeeConfigurations).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFdcVerification).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFeeCalculator).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFlareAssetRegistry).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFlareContractRegistry).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFlareDaemonize).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFlareSystemsCalculator).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFlareSystemsManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFtso).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFtsoFeedDecimals).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFtsoFeedIdConverter).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFtsoFeedPublisher).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFtsoGenesis).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFtsoInflationConfigurations).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFtsoManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFtsoManagerGenesis).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFtsoRegistry).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFtsoRegistryGenesis).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFtsoRewardManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IFtsoRewardOffersManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IGenericRewardManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IGovernanceSettings).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IGovernanceVotePower).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IGovernor).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIAddressUpdatable).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIAddressUpdater).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIClaimSetupManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IICleanable).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IICleanupBlockNumberManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IICombinedNatBalance).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IICustomFeed).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIERC20WithMetadata).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIEntityManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIFastUpdaterView).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIFlareAssetRegistry).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIFlareAssetRegistryProvider).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIFlareSystemsCalculator).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIFlareSystemsManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIFtso).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIFtsoFeedPublisher).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIFtsoManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIFtsoManagerProxy).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIFtsoManagerV1).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIFtsoRegistry).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIFtsoRewardManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIGenericRewardManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIGovernanceVotePower).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIGovernorProposer).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIIncentivePoolAllocation).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIIncentivePoolPercentageProvider).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIIncentivePoolReceiver).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIIncentivePoolSharingPercentageProvider).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIInflationAllocation).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIInflationReceiver).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIInflationReceiverV1).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIInflationV1).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IINodePossessionVerifier).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIPChainStakeMirrorVerifier).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIPollingFoundation).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIPollingManagementGroup).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIPreInflationCalculation).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIPriceSubmitter).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIPublicKeyVerifier).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIRNat).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIRNatAccount).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIRandomProvider).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIRelay).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIRewardEpochSwitchoverTrigger).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIRewardManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IISubmission).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IISupply).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IITokenPool).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIVPContract).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIVPToken).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIVoterRegistrationTrigger).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIVoterRegistry).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIVoterWhitelister).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IIncreaseManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IInflationGenesis).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IJsonApi).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IJsonApiVerification).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IPChainStakeMirror).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IPChainStakeMirrorMultiSigVoting).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IPChainStakeMirrorVerifier).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IPChainVotePower).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IPayment).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IPaymentVerification).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IPollingFtso).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IPollingManagementGroup).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IPriceSubmitter).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IRNat).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IRNatAccount).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IRandomProvider).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IRedemptionTimeExtension).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IReferencedPaymentNonexistence).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IReferencedPaymentNonexistenceVerification).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IRelay).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IRewardManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.ISubmission).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.ITypeTemplate).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.ITypeTemplateVerification).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IUpdateValidators).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IVPContractEvents).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IVPToken).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IValidatorRegistry).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IValidatorRewardOffersManager).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IVoterPreRegistry).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IVoterRegistry).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IVoterWhitelister).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IWNat).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IWNatDelegationFee).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IWeb2Json).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.IWeb2JsonVerification).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.ProtocolsV2Interface).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.RandomNumberV2Interface).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.RedemptionRequestInfo).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.RedemptionTicketInfo).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.RewardsV2Interface).toEqual(expect.any(Array));
        expect(flare.interfaceAbis.TestFtsoV2Interface).toEqual(expect.any(Array));
    });

    test("Contract names are set for all products", () => {
        expect(flare.products.AssetManagerController.name).toEqual("AssetManagerController");
        expect(flare.products.AssetManagerFXRP.name).toEqual("AssetManagerFXRP");
        expect(flare.products.ClaimSetupManager.name).toEqual("ClaimSetupManager");
        expect(flare.products.EntityManager.name).toEqual("EntityManager");
        expect(flare.products.FastUpdateIncentiveManager.name).toEqual("FastUpdateIncentiveManager");
        expect(flare.products.FastUpdater.name).toEqual("FastUpdater");
        expect(flare.products.FastUpdatesConfiguration.name).toEqual("FastUpdatesConfiguration");
        expect(flare.products.FdcHub.name).toEqual("FdcHub");
        expect(flare.products.FdcRequestFeeConfigurations.name).toEqual("FdcRequestFeeConfigurations");
        expect(flare.products.FdcVerification.name).toEqual("FdcVerification");
        expect(flare.products.FeeCalculator.name).toEqual("FeeCalculator");
        expect(flare.products.FlareAssetRegistry.name).toEqual("FlareAssetRegistry");
        expect(flare.products.FlareContractRegistry.name).toEqual("FlareContractRegistry");
        expect(flare.products.FlareSystemsCalculator.name).toEqual("FlareSystemsCalculator");
        expect(flare.products.FlareSystemsManager.name).toEqual("FlareSystemsManager");
        expect(flare.products.FtsoFeedDecimals.name).toEqual("FtsoFeedDecimals");
        expect(flare.products.FtsoFeedIdConverter.name).toEqual("FtsoFeedIdConverter");
        expect(flare.products.FtsoFeedPublisher.name).toEqual("FtsoFeedPublisher");
        expect(flare.products.FtsoInflationConfigurations.name).toEqual("FtsoInflationConfigurations");
        expect(flare.products.FtsoManager.name).toEqual("FtsoManager");
        expect(flare.products.FtsoRegistry.name).toEqual("FtsoRegistry");
        expect(flare.products.FtsoRewardManager.name).toEqual("FtsoRewardManager");
        expect(flare.products.FtsoRewardOffersManager.name).toEqual("FtsoRewardOffersManager");
        expect(flare.products.FtsoV2.name).toEqual("FtsoV2");
        expect(flare.products.GovernanceSettings.name).toEqual("GovernanceSettings");
        expect(flare.products.GovernanceVotePower.name).toEqual("GovernanceVotePower");
        expect(flare.products.PriceSubmitter.name).toEqual("PriceSubmitter");
        expect(flare.products.ProtocolsV2.name).toEqual("ProtocolsV2");
        expect(flare.products.RandomNumberV2.name).toEqual("RandomNumberV2");
        expect(flare.products.Relay.name).toEqual("Relay");
        expect(flare.products.RewardManager.name).toEqual("RewardManager");
        expect(flare.products.RewardsV2.name).toEqual("RewardsV2");
        expect(flare.products.Submission.name).toEqual("Submission");
        expect(flare.products.TestFtsoV2.name).toEqual("TestFtsoV2");
        expect(flare.products.ValidatorRewardManager.name).toEqual("ValidatorRewardManager");
        expect(flare.products.VoterRegistry.name).toEqual("VoterRegistry");
        expect(flare.products.VoterWhitelister.name).toEqual("VoterWhitelister");
        expect(flare.products.WNat.name).toEqual("WNat");
        expect(flare.products.WNatDelegationFee.name).toEqual("WNatDelegationFee");
    });

    test("Interface names are set for all products", () => {
        expect(flare.products.AssetManagerController.interface).toEqual("IAssetManagerController");
        expect(flare.products.AssetManagerFXRP.interface).toEqual("IAssetManager");
        expect(flare.products.ClaimSetupManager.interface).toEqual("IClaimSetupManager");
        expect(flare.products.EntityManager.interface).toEqual("IEntityManager");
        expect(flare.products.FastUpdateIncentiveManager.interface).toEqual("IFastUpdateIncentiveManager");
        expect(flare.products.FastUpdater.interface).toEqual("IFastUpdater");
        expect(flare.products.FastUpdatesConfiguration.interface).toEqual("IFastUpdatesConfiguration");
        expect(flare.products.FdcHub.interface).toEqual("IFdcHub");
        expect(flare.products.FdcRequestFeeConfigurations.interface).toEqual("IFdcRequestFeeConfigurations");
        expect(flare.products.FdcVerification.interface).toEqual("IFdcVerification");
        expect(flare.products.FeeCalculator.interface).toEqual("IFeeCalculator");
        expect(flare.products.FlareAssetRegistry.interface).toEqual("IFlareAssetRegistry");
        expect(flare.products.FlareContractRegistry.interface).toEqual("IFlareContractRegistry");
        expect(flare.products.FlareSystemsCalculator.interface).toEqual("IFlareSystemsCalculator");
        expect(flare.products.FlareSystemsManager.interface).toEqual("IFlareSystemsManager");
        expect(flare.products.FtsoFeedDecimals.interface).toEqual("IFtsoFeedDecimals");
        expect(flare.products.FtsoFeedIdConverter.interface).toEqual("IFtsoFeedIdConverter");
        expect(flare.products.FtsoFeedPublisher.interface).toEqual("IFtsoFeedPublisher");
        expect(flare.products.FtsoInflationConfigurations.interface).toEqual("IFtsoInflationConfigurations");
        expect(flare.products.FtsoManager.interface).toEqual("IFtsoManager");
        expect(flare.products.FtsoRegistry.interface).toEqual("IFtsoRegistry");
        expect(flare.products.FtsoRewardManager.interface).toEqual("IFtsoRewardManager");
        expect(flare.products.FtsoRewardOffersManager.interface).toEqual("IFtsoRewardOffersManager");
        expect(flare.products.FtsoV2.interface).toEqual("FtsoV2Interface");
        expect(flare.products.GovernanceSettings.interface).toEqual("IGovernanceSettings");
        expect(flare.products.GovernanceVotePower.interface).toEqual("IGovernanceVotePower");
        expect(flare.products.PriceSubmitter.interface).toEqual("IPriceSubmitter");
        expect(flare.products.ProtocolsV2.interface).toEqual("ProtocolsV2Interface");
        expect(flare.products.RandomNumberV2.interface).toEqual("RandomNumberV2Interface");
        expect(flare.products.Relay.interface).toEqual("IRelay");
        expect(flare.products.RewardManager.interface).toEqual("IRewardManager");
        expect(flare.products.RewardsV2.interface).toEqual("RewardsV2Interface");
        expect(flare.products.Submission.interface).toEqual("ISubmission");
        expect(flare.products.TestFtsoV2.interface).toEqual("TestFtsoV2Interface");
        expect(flare.products.ValidatorRewardManager.interface).toEqual("IGenericRewardManager");
        expect(flare.products.VoterRegistry.interface).toEqual("IVoterRegistry");
        expect(flare.products.VoterWhitelister.interface).toEqual("IVoterWhitelister");
        expect(flare.products.WNat.interface).toEqual("IWNat");
        expect(flare.products.WNatDelegationFee.interface).toEqual("IWNatDelegationFee");
    });

    test("Registry names are set for all products", () => {
        expect(flare.products.AssetManagerController.registry).toEqual("AssetManagerController");
        expect(flare.products.AssetManagerFXRP.registry).toEqual("AssetManagerFXRP");
        expect(flare.products.ClaimSetupManager.registry).toEqual("ClaimSetupManager");
        expect(flare.products.EntityManager.registry).toEqual("EntityManager");
        expect(flare.products.FastUpdateIncentiveManager.registry).toEqual("FastUpdateIncentiveManager");
        expect(flare.products.FastUpdater.registry).toEqual("FastUpdater");
        expect(flare.products.FastUpdatesConfiguration.registry).toEqual("FastUpdatesConfiguration");
        expect(flare.products.FdcHub.registry).toEqual("FdcHub");
        expect(flare.products.FdcRequestFeeConfigurations.registry).toEqual("FdcRequestFeeConfigurations");
        expect(flare.products.FdcVerification.registry).toEqual("FdcVerification");
        expect(flare.products.FeeCalculator.registry).toEqual("FeeCalculator");
        expect(flare.products.FlareAssetRegistry.registry).toEqual("FlareAssetRegistry");
        expect(flare.products.FlareContractRegistry.registry).toEqual("FlareContractRegistry");
        expect(flare.products.FlareSystemsCalculator.registry).toEqual("FlareSystemsCalculator");
        expect(flare.products.FlareSystemsManager.registry).toEqual("FlareSystemsManager");
        expect(flare.products.FtsoFeedDecimals.registry).toEqual("FtsoFeedDecimals");
        expect(flare.products.FtsoFeedIdConverter.registry).toEqual("FtsoFeedIdConverter");
        expect(flare.products.FtsoFeedPublisher.registry).toEqual("FtsoFeedPublisher");
        expect(flare.products.FtsoInflationConfigurations.registry).toEqual("FtsoInflationConfigurations");
        expect(flare.products.FtsoManager.registry).toEqual("FtsoManager");
        expect(flare.products.FtsoRegistry.registry).toEqual("FtsoRegistry");
        expect(flare.products.FtsoRewardManager.registry).toEqual("FtsoRewardManager");
        expect(flare.products.FtsoRewardOffersManager.registry).toEqual("FtsoRewardOffersManager");
        expect(flare.products.FtsoV2.registry).toEqual("FtsoV2");
        expect(flare.products.GovernanceSettings.registry).toEqual("GovernanceSettings");
        expect(flare.products.GovernanceVotePower.registry).toEqual("GovernanceVotePower");
        expect(flare.products.PriceSubmitter.registry).toEqual("PriceSubmitter");
        expect(flare.products.ProtocolsV2.registry).toEqual("ProtocolsV2");
        expect(flare.products.RandomNumberV2.registry).toEqual("RandomNumberV2");
        expect(flare.products.Relay.registry).toEqual("Relay");
        expect(flare.products.RewardManager.registry).toEqual("RewardManager");
        expect(flare.products.RewardsV2.registry).toEqual("RewardsV2");
        expect(flare.products.Submission.registry).toEqual("Submission");
        expect(flare.products.TestFtsoV2.registry).toEqual("FtsoV2");
        expect(flare.products.ValidatorRewardManager.registry).toEqual("ValidatorRewardManager");
        expect(flare.products.VoterRegistry.registry).toEqual("VoterRegistry");
        expect(flare.products.VoterWhitelister.registry).toEqual("VoterWhitelister");
        expect(flare.products.WNat.registry).toEqual("WNat");
        expect(flare.products.WNatDelegationFee.registry).toEqual("WNatDelegationFee");
    });

    test("ABIs exist for all products", () => {
        expect(flare.products.AssetManagerController.abi).toEqual(expect.any(Array));
        expect(flare.products.AssetManagerFXRP.abi).toEqual(expect.any(Array));
        expect(flare.products.ClaimSetupManager.abi).toEqual(expect.any(Array));
        expect(flare.products.EntityManager.abi).toEqual(expect.any(Array));
        expect(flare.products.FastUpdateIncentiveManager.abi).toEqual(expect.any(Array));
        expect(flare.products.FastUpdater.abi).toEqual(expect.any(Array));
        expect(flare.products.FastUpdatesConfiguration.abi).toEqual(expect.any(Array));
        expect(flare.products.FdcHub.abi).toEqual(expect.any(Array));
        expect(flare.products.FdcRequestFeeConfigurations.abi).toEqual(expect.any(Array));
        expect(flare.products.FdcVerification.abi).toEqual(expect.any(Array));
        expect(flare.products.FeeCalculator.abi).toEqual(expect.any(Array));
        expect(flare.products.FlareAssetRegistry.abi).toEqual(expect.any(Array));
        expect(flare.products.FlareContractRegistry.abi).toEqual(expect.any(Array));
        expect(flare.products.FlareSystemsCalculator.abi).toEqual(expect.any(Array));
        expect(flare.products.FlareSystemsManager.abi).toEqual(expect.any(Array));
        expect(flare.products.FtsoFeedDecimals.abi).toEqual(expect.any(Array));
        expect(flare.products.FtsoFeedIdConverter.abi).toEqual(expect.any(Array));
        expect(flare.products.FtsoFeedPublisher.abi).toEqual(expect.any(Array));
        expect(flare.products.FtsoInflationConfigurations.abi).toEqual(expect.any(Array));
        expect(flare.products.FtsoManager.abi).toEqual(expect.any(Array));
        expect(flare.products.FtsoRegistry.abi).toEqual(expect.any(Array));
        expect(flare.products.FtsoRewardManager.abi).toEqual(expect.any(Array));
        expect(flare.products.FtsoRewardOffersManager.abi).toEqual(expect.any(Array));
        expect(flare.products.FtsoV2.abi).toEqual(expect.any(Array));
        expect(flare.products.GovernanceSettings.abi).toEqual(expect.any(Array));
        expect(flare.products.GovernanceVotePower.abi).toEqual(expect.any(Array));
        expect(flare.products.PriceSubmitter.abi).toEqual(expect.any(Array));
        expect(flare.products.ProtocolsV2.abi).toEqual(expect.any(Array));
        expect(flare.products.RandomNumberV2.abi).toEqual(expect.any(Array));
        expect(flare.products.Relay.abi).toEqual(expect.any(Array));
        expect(flare.products.RewardManager.abi).toEqual(expect.any(Array));
        expect(flare.products.RewardsV2.abi).toEqual(expect.any(Array));
        expect(flare.products.Submission.abi).toEqual(expect.any(Array));
        expect(flare.products.TestFtsoV2.abi).toEqual(expect.any(Array));
        expect(flare.products.ValidatorRewardManager.abi).toEqual(expect.any(Array));
        expect(flare.products.VoterRegistry.abi).toEqual(expect.any(Array));
        expect(flare.products.VoterWhitelister.abi).toEqual(expect.any(Array));
        expect(flare.products.WNat.abi).toEqual(expect.any(Array));
        expect(flare.products.WNatDelegationFee.abi).toEqual(expect.any(Array));
    });

    test("nameToAbi finds every contract", () => {
        expect(nameToAbi("AssetManagerController", "flare")).toEqual(flare.interfaceAbis.IAssetManagerController);
        expect(nameToAbi("AssetManagerFXRP", "flare")).toEqual(flare.interfaceAbis.IAssetManager);
        expect(nameToAbi("ClaimSetupManager", "flare")).toEqual(flare.interfaceAbis.IClaimSetupManager);
        expect(nameToAbi("EntityManager", "flare")).toEqual(flare.interfaceAbis.IEntityManager);
        expect(nameToAbi("FastUpdateIncentiveManager", "flare")).toEqual(
            flare.interfaceAbis.IFastUpdateIncentiveManager
        );
        expect(nameToAbi("FastUpdater", "flare")).toEqual(flare.interfaceAbis.IFastUpdater);
        expect(nameToAbi("FastUpdatesConfiguration", "flare")).toEqual(flare.interfaceAbis.IFastUpdatesConfiguration);
        expect(nameToAbi("FdcHub", "flare")).toEqual(flare.interfaceAbis.IFdcHub);
        expect(nameToAbi("FdcRequestFeeConfigurations", "flare")).toEqual(
            flare.interfaceAbis.IFdcRequestFeeConfigurations
        );
        expect(nameToAbi("FdcVerification", "flare")).toEqual(flare.interfaceAbis.IFdcVerification);
        expect(nameToAbi("FeeCalculator", "flare")).toEqual(flare.interfaceAbis.IFeeCalculator);
        expect(nameToAbi("FlareAssetRegistry", "flare")).toEqual(flare.interfaceAbis.IFlareAssetRegistry);
        expect(nameToAbi("FlareContractRegistry", "flare")).toEqual(flare.interfaceAbis.IFlareContractRegistry);
        expect(nameToAbi("FlareSystemsCalculator", "flare")).toEqual(flare.interfaceAbis.IFlareSystemsCalculator);
        expect(nameToAbi("FlareSystemsManager", "flare")).toEqual(flare.interfaceAbis.IFlareSystemsManager);
        expect(nameToAbi("FtsoFeedDecimals", "flare")).toEqual(flare.interfaceAbis.IFtsoFeedDecimals);
        expect(nameToAbi("FtsoFeedIdConverter", "flare")).toEqual(flare.interfaceAbis.IFtsoFeedIdConverter);
        expect(nameToAbi("FtsoFeedPublisher", "flare")).toEqual(flare.interfaceAbis.IFtsoFeedPublisher);
        expect(nameToAbi("FtsoInflationConfigurations", "flare")).toEqual(
            flare.interfaceAbis.IFtsoInflationConfigurations
        );
        expect(nameToAbi("FtsoManager", "flare")).toEqual(flare.interfaceAbis.IFtsoManager);
        expect(nameToAbi("FtsoRegistry", "flare")).toEqual(flare.interfaceAbis.IFtsoRegistry);
        expect(nameToAbi("FtsoRewardManager", "flare")).toEqual(flare.interfaceAbis.IFtsoRewardManager);
        expect(nameToAbi("FtsoRewardOffersManager", "flare")).toEqual(flare.interfaceAbis.IFtsoRewardOffersManager);
        expect(nameToAbi("FtsoV2", "flare")).toEqual(flare.interfaceAbis.FtsoV2Interface);
        expect(nameToAbi("GovernanceSettings", "flare")).toEqual(flare.interfaceAbis.IGovernanceSettings);
        expect(nameToAbi("GovernanceVotePower", "flare")).toEqual(flare.interfaceAbis.IGovernanceVotePower);
        expect(nameToAbi("PriceSubmitter", "flare")).toEqual(flare.interfaceAbis.IPriceSubmitter);
        expect(nameToAbi("ProtocolsV2", "flare")).toEqual(flare.interfaceAbis.ProtocolsV2Interface);
        expect(nameToAbi("RandomNumberV2", "flare")).toEqual(flare.interfaceAbis.RandomNumberV2Interface);
        expect(nameToAbi("Relay", "flare")).toEqual(flare.interfaceAbis.IRelay);
        expect(nameToAbi("RewardManager", "flare")).toEqual(flare.interfaceAbis.IRewardManager);
        expect(nameToAbi("RewardsV2", "flare")).toEqual(flare.interfaceAbis.RewardsV2Interface);
        expect(nameToAbi("Submission", "flare")).toEqual(flare.interfaceAbis.ISubmission);
        expect(nameToAbi("TestFtsoV2", "flare")).toEqual(flare.interfaceAbis.TestFtsoV2Interface);
        expect(nameToAbi("ValidatorRewardManager", "flare")).toEqual(flare.interfaceAbis.IGenericRewardManager);
        expect(nameToAbi("VoterRegistry", "flare")).toEqual(flare.interfaceAbis.IVoterRegistry);
        expect(nameToAbi("VoterWhitelister", "flare")).toEqual(flare.interfaceAbis.IVoterWhitelister);
        expect(nameToAbi("WNat", "flare")).toEqual(flare.interfaceAbis.IWNat);
        expect(nameToAbi("WNatDelegationFee", "flare")).toEqual(flare.interfaceAbis.IWNatDelegationFee);

        expect(flare.nameToAbi("AssetManagerController")).toEqual(flare.interfaceAbis.IAssetManagerController);
        expect(flare.nameToAbi("AssetManagerFXRP")).toEqual(flare.interfaceAbis.IAssetManager);
        expect(flare.nameToAbi("ClaimSetupManager")).toEqual(flare.interfaceAbis.IClaimSetupManager);
        expect(flare.nameToAbi("EntityManager")).toEqual(flare.interfaceAbis.IEntityManager);
        expect(flare.nameToAbi("FastUpdateIncentiveManager")).toEqual(flare.interfaceAbis.IFastUpdateIncentiveManager);
        expect(flare.nameToAbi("FastUpdater")).toEqual(flare.interfaceAbis.IFastUpdater);
        expect(flare.nameToAbi("FastUpdatesConfiguration")).toEqual(flare.interfaceAbis.IFastUpdatesConfiguration);
        expect(flare.nameToAbi("FdcHub")).toEqual(flare.interfaceAbis.IFdcHub);
        expect(flare.nameToAbi("FdcRequestFeeConfigurations")).toEqual(
            flare.interfaceAbis.IFdcRequestFeeConfigurations
        );
        expect(flare.nameToAbi("FdcVerification")).toEqual(flare.interfaceAbis.IFdcVerification);
        expect(flare.nameToAbi("FeeCalculator")).toEqual(flare.interfaceAbis.IFeeCalculator);
        expect(flare.nameToAbi("FlareAssetRegistry")).toEqual(flare.interfaceAbis.IFlareAssetRegistry);
        expect(flare.nameToAbi("FlareContractRegistry")).toEqual(flare.interfaceAbis.IFlareContractRegistry);
        expect(flare.nameToAbi("FlareSystemsCalculator")).toEqual(flare.interfaceAbis.IFlareSystemsCalculator);
        expect(flare.nameToAbi("FlareSystemsManager")).toEqual(flare.interfaceAbis.IFlareSystemsManager);
        expect(flare.nameToAbi("FtsoFeedDecimals")).toEqual(flare.interfaceAbis.IFtsoFeedDecimals);
        expect(flare.nameToAbi("FtsoFeedIdConverter")).toEqual(flare.interfaceAbis.IFtsoFeedIdConverter);
        expect(flare.nameToAbi("FtsoFeedPublisher")).toEqual(flare.interfaceAbis.IFtsoFeedPublisher);
        expect(flare.nameToAbi("FtsoInflationConfigurations")).toEqual(
            flare.interfaceAbis.IFtsoInflationConfigurations
        );
        expect(flare.nameToAbi("FtsoManager")).toEqual(flare.interfaceAbis.IFtsoManager);
        expect(flare.nameToAbi("FtsoRegistry")).toEqual(flare.interfaceAbis.IFtsoRegistry);
        expect(flare.nameToAbi("FtsoRewardManager")).toEqual(flare.interfaceAbis.IFtsoRewardManager);
        expect(flare.nameToAbi("FtsoRewardOffersManager")).toEqual(flare.interfaceAbis.IFtsoRewardOffersManager);
        expect(flare.nameToAbi("FtsoV2")).toEqual(flare.interfaceAbis.FtsoV2Interface);
        expect(flare.nameToAbi("GovernanceSettings")).toEqual(flare.interfaceAbis.IGovernanceSettings);
        expect(flare.nameToAbi("GovernanceVotePower")).toEqual(flare.interfaceAbis.IGovernanceVotePower);
        expect(flare.nameToAbi("PriceSubmitter")).toEqual(flare.interfaceAbis.IPriceSubmitter);
        expect(flare.nameToAbi("ProtocolsV2")).toEqual(flare.interfaceAbis.ProtocolsV2Interface);
        expect(flare.nameToAbi("RandomNumberV2")).toEqual(flare.interfaceAbis.RandomNumberV2Interface);
        expect(flare.nameToAbi("Relay")).toEqual(flare.interfaceAbis.IRelay);
        expect(flare.nameToAbi("RewardManager")).toEqual(flare.interfaceAbis.IRewardManager);
        expect(flare.nameToAbi("RewardsV2")).toEqual(flare.interfaceAbis.RewardsV2Interface);
        expect(flare.nameToAbi("Submission")).toEqual(flare.interfaceAbis.ISubmission);
        expect(flare.nameToAbi("TestFtsoV2")).toEqual(flare.interfaceAbis.TestFtsoV2Interface);
        expect(flare.nameToAbi("ValidatorRewardManager")).toEqual(flare.interfaceAbis.IGenericRewardManager);
        expect(flare.nameToAbi("VoterRegistry")).toEqual(flare.interfaceAbis.IVoterRegistry);
        expect(flare.nameToAbi("VoterWhitelister")).toEqual(flare.interfaceAbis.IVoterWhitelister);
        expect(flare.nameToAbi("WNat")).toEqual(flare.interfaceAbis.IWNat);
        expect(flare.nameToAbi("WNatDelegationFee")).toEqual(flare.interfaceAbis.IWNatDelegationFee);
    });

    test("interfaceToAbi finds every contract", () => {
        expect(interfaceToAbi("AgentInfo", "flare")).toEqual(flare.interfaceAbis.AgentInfo);
        expect(interfaceToAbi("AgentSettings", "flare")).toEqual(flare.interfaceAbis.AgentSettings);
        expect(interfaceToAbi("AssetManagerSettings", "flare")).toEqual(flare.interfaceAbis.AssetManagerSettings);
        expect(interfaceToAbi("AvailableAgentInfo", "flare")).toEqual(flare.interfaceAbis.AvailableAgentInfo);
        expect(interfaceToAbi("CollateralReservationInfo", "flare")).toEqual(
            flare.interfaceAbis.CollateralReservationInfo
        );
        expect(interfaceToAbi("CollateralType", "flare")).toEqual(flare.interfaceAbis.CollateralType);
        expect(interfaceToAbi("ContractRegistry", "flare")).toEqual(flare.interfaceAbis.ContractRegistry);
        expect(interfaceToAbi("EmergencyPause", "flare")).toEqual(flare.interfaceAbis.EmergencyPause);
        expect(interfaceToAbi("FtsoV2Interface", "flare")).toEqual(flare.interfaceAbis.FtsoV2Interface);
        expect(interfaceToAbi("IAddressBinder", "flare")).toEqual(flare.interfaceAbis.IAddressBinder);
        expect(interfaceToAbi("IAddressValidity", "flare")).toEqual(flare.interfaceAbis.IAddressValidity);
        expect(interfaceToAbi("IAddressValidityVerification", "flare")).toEqual(
            flare.interfaceAbis.IAddressValidityVerification
        );
        expect(interfaceToAbi("IAgentAlwaysAllowedMinters", "flare")).toEqual(
            flare.interfaceAbis.IAgentAlwaysAllowedMinters
        );
        expect(interfaceToAbi("IAgentOwnerRegistry", "flare")).toEqual(flare.interfaceAbis.IAgentOwnerRegistry);
        expect(interfaceToAbi("IAgentPing", "flare")).toEqual(flare.interfaceAbis.IAgentPing);
        expect(interfaceToAbi("IAssetManager", "flare")).toEqual(flare.interfaceAbis.IAssetManager);
        expect(interfaceToAbi("IAssetManagerController", "flare")).toEqual(flare.interfaceAbis.IAssetManagerController);
        expect(interfaceToAbi("IAssetManagerEvents", "flare")).toEqual(flare.interfaceAbis.IAssetManagerEvents);
        expect(interfaceToAbi("IBalanceDecreasingTransaction", "flare")).toEqual(
            flare.interfaceAbis.IBalanceDecreasingTransaction
        );
        expect(interfaceToAbi("IBalanceDecreasingTransactionVerification", "flare")).toEqual(
            flare.interfaceAbis.IBalanceDecreasingTransactionVerification
        );
        expect(interfaceToAbi("ICChainStake", "flare")).toEqual(flare.interfaceAbis.ICChainStake);
        expect(interfaceToAbi("ICChainVotePower", "flare")).toEqual(flare.interfaceAbis.ICChainVotePower);
        expect(interfaceToAbi("IClaimSetupManager", "flare")).toEqual(flare.interfaceAbis.IClaimSetupManager);
        expect(interfaceToAbi("ICollateralizable", "flare")).toEqual(flare.interfaceAbis.ICollateralizable);
        expect(interfaceToAbi("IConfirmedBlockHeightExists", "flare")).toEqual(
            flare.interfaceAbis.IConfirmedBlockHeightExists
        );
        expect(interfaceToAbi("IConfirmedBlockHeightExistsVerification", "flare")).toEqual(
            flare.interfaceAbis.IConfirmedBlockHeightExistsVerification
        );
        expect(interfaceToAbi("ICoreVaultClient", "flare")).toEqual(flare.interfaceAbis.ICoreVaultClient);
        expect(interfaceToAbi("ICoreVaultClientSettings", "flare")).toEqual(
            flare.interfaceAbis.ICoreVaultClientSettings
        );
        expect(interfaceToAbi("IDelegationAccount", "flare")).toEqual(flare.interfaceAbis.IDelegationAccount);
        expect(interfaceToAbi("IDiamondLoupe", "flare")).toEqual(flare.interfaceAbis.IDiamondLoupe);
        expect(interfaceToAbi("IDistributionToDelegators", "flare")).toEqual(
            flare.interfaceAbis.IDistributionToDelegators
        );
        expect(interfaceToAbi("IEVMTransaction", "flare")).toEqual(flare.interfaceAbis.IEVMTransaction);
        expect(interfaceToAbi("IEVMTransactionVerification", "flare")).toEqual(
            flare.interfaceAbis.IEVMTransactionVerification
        );
        expect(interfaceToAbi("IEntityManager", "flare")).toEqual(flare.interfaceAbis.IEntityManager);
        expect(interfaceToAbi("IFAsset", "flare")).toEqual(flare.interfaceAbis.IFAsset);
        expect(interfaceToAbi("IFastUpdateIncentiveManager", "flare")).toEqual(
            flare.interfaceAbis.IFastUpdateIncentiveManager
        );
        expect(interfaceToAbi("IFastUpdater", "flare")).toEqual(flare.interfaceAbis.IFastUpdater);
        expect(interfaceToAbi("IFastUpdatesConfiguration", "flare")).toEqual(
            flare.interfaceAbis.IFastUpdatesConfiguration
        );
        expect(interfaceToAbi("IFdcHub", "flare")).toEqual(flare.interfaceAbis.IFdcHub);
        expect(interfaceToAbi("IFdcInflationConfigurations", "flare")).toEqual(
            flare.interfaceAbis.IFdcInflationConfigurations
        );
        expect(interfaceToAbi("IFdcRequestFeeConfigurations", "flare")).toEqual(
            flare.interfaceAbis.IFdcRequestFeeConfigurations
        );
        expect(interfaceToAbi("IFdcVerification", "flare")).toEqual(flare.interfaceAbis.IFdcVerification);
        expect(interfaceToAbi("IFeeCalculator", "flare")).toEqual(flare.interfaceAbis.IFeeCalculator);
        expect(interfaceToAbi("IFlareAssetRegistry", "flare")).toEqual(flare.interfaceAbis.IFlareAssetRegistry);
        expect(interfaceToAbi("IFlareContractRegistry", "flare")).toEqual(flare.interfaceAbis.IFlareContractRegistry);
        expect(interfaceToAbi("IFlareDaemonize", "flare")).toEqual(flare.interfaceAbis.IFlareDaemonize);
        expect(interfaceToAbi("IFlareSystemsCalculator", "flare")).toEqual(flare.interfaceAbis.IFlareSystemsCalculator);
        expect(interfaceToAbi("IFlareSystemsManager", "flare")).toEqual(flare.interfaceAbis.IFlareSystemsManager);
        expect(interfaceToAbi("IFtso", "flare")).toEqual(flare.interfaceAbis.IFtso);
        expect(interfaceToAbi("IFtsoFeedDecimals", "flare")).toEqual(flare.interfaceAbis.IFtsoFeedDecimals);
        expect(interfaceToAbi("IFtsoFeedIdConverter", "flare")).toEqual(flare.interfaceAbis.IFtsoFeedIdConverter);
        expect(interfaceToAbi("IFtsoFeedPublisher", "flare")).toEqual(flare.interfaceAbis.IFtsoFeedPublisher);
        expect(interfaceToAbi("IFtsoGenesis", "flare")).toEqual(flare.interfaceAbis.IFtsoGenesis);
        expect(interfaceToAbi("IFtsoInflationConfigurations", "flare")).toEqual(
            flare.interfaceAbis.IFtsoInflationConfigurations
        );
        expect(interfaceToAbi("IFtsoManager", "flare")).toEqual(flare.interfaceAbis.IFtsoManager);
        expect(interfaceToAbi("IFtsoManagerGenesis", "flare")).toEqual(flare.interfaceAbis.IFtsoManagerGenesis);
        expect(interfaceToAbi("IFtsoRegistry", "flare")).toEqual(flare.interfaceAbis.IFtsoRegistry);
        expect(interfaceToAbi("IFtsoRegistryGenesis", "flare")).toEqual(flare.interfaceAbis.IFtsoRegistryGenesis);
        expect(interfaceToAbi("IFtsoRewardManager", "flare")).toEqual(flare.interfaceAbis.IFtsoRewardManager);
        expect(interfaceToAbi("IFtsoRewardOffersManager", "flare")).toEqual(
            flare.interfaceAbis.IFtsoRewardOffersManager
        );
        expect(interfaceToAbi("IGenericRewardManager", "flare")).toEqual(flare.interfaceAbis.IGenericRewardManager);
        expect(interfaceToAbi("IGovernanceSettings", "flare")).toEqual(flare.interfaceAbis.IGovernanceSettings);
        expect(interfaceToAbi("IGovernanceVotePower", "flare")).toEqual(flare.interfaceAbis.IGovernanceVotePower);
        expect(interfaceToAbi("IGovernor", "flare")).toEqual(flare.interfaceAbis.IGovernor);
        expect(interfaceToAbi("IIAddressUpdatable", "flare")).toEqual(flare.interfaceAbis.IIAddressUpdatable);
        expect(interfaceToAbi("IIAddressUpdater", "flare")).toEqual(flare.interfaceAbis.IIAddressUpdater);
        expect(interfaceToAbi("IIClaimSetupManager", "flare")).toEqual(flare.interfaceAbis.IIClaimSetupManager);
        expect(interfaceToAbi("IICleanable", "flare")).toEqual(flare.interfaceAbis.IICleanable);
        expect(interfaceToAbi("IICleanupBlockNumberManager", "flare")).toEqual(
            flare.interfaceAbis.IICleanupBlockNumberManager
        );
        expect(interfaceToAbi("IICombinedNatBalance", "flare")).toEqual(flare.interfaceAbis.IICombinedNatBalance);
        expect(interfaceToAbi("IICustomFeed", "flare")).toEqual(flare.interfaceAbis.IICustomFeed);
        expect(interfaceToAbi("IIERC20WithMetadata", "flare")).toEqual(flare.interfaceAbis.IIERC20WithMetadata);
        expect(interfaceToAbi("IIEntityManager", "flare")).toEqual(flare.interfaceAbis.IIEntityManager);
        expect(interfaceToAbi("IIFastUpdaterView", "flare")).toEqual(flare.interfaceAbis.IIFastUpdaterView);
        expect(interfaceToAbi("IIFlareAssetRegistry", "flare")).toEqual(flare.interfaceAbis.IIFlareAssetRegistry);
        expect(interfaceToAbi("IIFlareAssetRegistryProvider", "flare")).toEqual(
            flare.interfaceAbis.IIFlareAssetRegistryProvider
        );
        expect(interfaceToAbi("IIFlareSystemsCalculator", "flare")).toEqual(
            flare.interfaceAbis.IIFlareSystemsCalculator
        );
        expect(interfaceToAbi("IIFlareSystemsManager", "flare")).toEqual(flare.interfaceAbis.IIFlareSystemsManager);
        expect(interfaceToAbi("IIFtso", "flare")).toEqual(flare.interfaceAbis.IIFtso);
        expect(interfaceToAbi("IIFtsoFeedPublisher", "flare")).toEqual(flare.interfaceAbis.IIFtsoFeedPublisher);
        expect(interfaceToAbi("IIFtsoManager", "flare")).toEqual(flare.interfaceAbis.IIFtsoManager);
        expect(interfaceToAbi("IIFtsoManagerProxy", "flare")).toEqual(flare.interfaceAbis.IIFtsoManagerProxy);
        expect(interfaceToAbi("IIFtsoManagerV1", "flare")).toEqual(flare.interfaceAbis.IIFtsoManagerV1);
        expect(interfaceToAbi("IIFtsoRegistry", "flare")).toEqual(flare.interfaceAbis.IIFtsoRegistry);
        expect(interfaceToAbi("IIFtsoRewardManager", "flare")).toEqual(flare.interfaceAbis.IIFtsoRewardManager);
        expect(interfaceToAbi("IIGenericRewardManager", "flare")).toEqual(flare.interfaceAbis.IIGenericRewardManager);
        expect(interfaceToAbi("IIGovernanceVotePower", "flare")).toEqual(flare.interfaceAbis.IIGovernanceVotePower);
        expect(interfaceToAbi("IIGovernorProposer", "flare")).toEqual(flare.interfaceAbis.IIGovernorProposer);
        expect(interfaceToAbi("IIIncentivePoolAllocation", "flare")).toEqual(
            flare.interfaceAbis.IIIncentivePoolAllocation
        );
        expect(interfaceToAbi("IIIncentivePoolPercentageProvider", "flare")).toEqual(
            flare.interfaceAbis.IIIncentivePoolPercentageProvider
        );
        expect(interfaceToAbi("IIIncentivePoolReceiver", "flare")).toEqual(flare.interfaceAbis.IIIncentivePoolReceiver);
        expect(interfaceToAbi("IIIncentivePoolSharingPercentageProvider", "flare")).toEqual(
            flare.interfaceAbis.IIIncentivePoolSharingPercentageProvider
        );
        expect(interfaceToAbi("IIInflationAllocation", "flare")).toEqual(flare.interfaceAbis.IIInflationAllocation);
        expect(interfaceToAbi("IIInflationReceiver", "flare")).toEqual(flare.interfaceAbis.IIInflationReceiver);
        expect(interfaceToAbi("IIInflationReceiverV1", "flare")).toEqual(flare.interfaceAbis.IIInflationReceiverV1);
        expect(interfaceToAbi("IIInflationV1", "flare")).toEqual(flare.interfaceAbis.IIInflationV1);
        expect(interfaceToAbi("IINodePossessionVerifier", "flare")).toEqual(
            flare.interfaceAbis.IINodePossessionVerifier
        );
        expect(interfaceToAbi("IIPChainStakeMirrorVerifier", "flare")).toEqual(
            flare.interfaceAbis.IIPChainStakeMirrorVerifier
        );
        expect(interfaceToAbi("IIPollingFoundation", "flare")).toEqual(flare.interfaceAbis.IIPollingFoundation);
        expect(interfaceToAbi("IIPollingManagementGroup", "flare")).toEqual(
            flare.interfaceAbis.IIPollingManagementGroup
        );
        expect(interfaceToAbi("IIPreInflationCalculation", "flare")).toEqual(
            flare.interfaceAbis.IIPreInflationCalculation
        );
        expect(interfaceToAbi("IIPriceSubmitter", "flare")).toEqual(flare.interfaceAbis.IIPriceSubmitter);
        expect(interfaceToAbi("IIPublicKeyVerifier", "flare")).toEqual(flare.interfaceAbis.IIPublicKeyVerifier);
        expect(interfaceToAbi("IIRNat", "flare")).toEqual(flare.interfaceAbis.IIRNat);
        expect(interfaceToAbi("IIRNatAccount", "flare")).toEqual(flare.interfaceAbis.IIRNatAccount);
        expect(interfaceToAbi("IIRandomProvider", "flare")).toEqual(flare.interfaceAbis.IIRandomProvider);
        expect(interfaceToAbi("IIRelay", "flare")).toEqual(flare.interfaceAbis.IIRelay);
        expect(interfaceToAbi("IIRewardEpochSwitchoverTrigger", "flare")).toEqual(
            flare.interfaceAbis.IIRewardEpochSwitchoverTrigger
        );
        expect(interfaceToAbi("IIRewardManager", "flare")).toEqual(flare.interfaceAbis.IIRewardManager);
        expect(interfaceToAbi("IISubmission", "flare")).toEqual(flare.interfaceAbis.IISubmission);
        expect(interfaceToAbi("IISupply", "flare")).toEqual(flare.interfaceAbis.IISupply);
        expect(interfaceToAbi("IITokenPool", "flare")).toEqual(flare.interfaceAbis.IITokenPool);
        expect(interfaceToAbi("IIVPContract", "flare")).toEqual(flare.interfaceAbis.IIVPContract);
        expect(interfaceToAbi("IIVPToken", "flare")).toEqual(flare.interfaceAbis.IIVPToken);
        expect(interfaceToAbi("IIVoterRegistrationTrigger", "flare")).toEqual(
            flare.interfaceAbis.IIVoterRegistrationTrigger
        );
        expect(interfaceToAbi("IIVoterRegistry", "flare")).toEqual(flare.interfaceAbis.IIVoterRegistry);
        expect(interfaceToAbi("IIVoterWhitelister", "flare")).toEqual(flare.interfaceAbis.IIVoterWhitelister);
        expect(interfaceToAbi("IIncreaseManager", "flare")).toEqual(flare.interfaceAbis.IIncreaseManager);
        expect(interfaceToAbi("IInflationGenesis", "flare")).toEqual(flare.interfaceAbis.IInflationGenesis);
        expect(interfaceToAbi("IJsonApi", "flare")).toEqual(flare.interfaceAbis.IJsonApi);
        expect(interfaceToAbi("IJsonApiVerification", "flare")).toEqual(flare.interfaceAbis.IJsonApiVerification);
        expect(interfaceToAbi("IPChainStakeMirror", "flare")).toEqual(flare.interfaceAbis.IPChainStakeMirror);
        expect(interfaceToAbi("IPChainStakeMirrorMultiSigVoting", "flare")).toEqual(
            flare.interfaceAbis.IPChainStakeMirrorMultiSigVoting
        );
        expect(interfaceToAbi("IPChainStakeMirrorVerifier", "flare")).toEqual(
            flare.interfaceAbis.IPChainStakeMirrorVerifier
        );
        expect(interfaceToAbi("IPChainVotePower", "flare")).toEqual(flare.interfaceAbis.IPChainVotePower);
        expect(interfaceToAbi("IPayment", "flare")).toEqual(flare.interfaceAbis.IPayment);
        expect(interfaceToAbi("IPaymentVerification", "flare")).toEqual(flare.interfaceAbis.IPaymentVerification);
        expect(interfaceToAbi("IPollingFtso", "flare")).toEqual(flare.interfaceAbis.IPollingFtso);
        expect(interfaceToAbi("IPollingManagementGroup", "flare")).toEqual(flare.interfaceAbis.IPollingManagementGroup);
        expect(interfaceToAbi("IPriceSubmitter", "flare")).toEqual(flare.interfaceAbis.IPriceSubmitter);
        expect(interfaceToAbi("IRNat", "flare")).toEqual(flare.interfaceAbis.IRNat);
        expect(interfaceToAbi("IRNatAccount", "flare")).toEqual(flare.interfaceAbis.IRNatAccount);
        expect(interfaceToAbi("IRandomProvider", "flare")).toEqual(flare.interfaceAbis.IRandomProvider);
        expect(interfaceToAbi("IRedemptionTimeExtension", "flare")).toEqual(
            flare.interfaceAbis.IRedemptionTimeExtension
        );
        expect(interfaceToAbi("IReferencedPaymentNonexistence", "flare")).toEqual(
            flare.interfaceAbis.IReferencedPaymentNonexistence
        );
        expect(interfaceToAbi("IReferencedPaymentNonexistenceVerification", "flare")).toEqual(
            flare.interfaceAbis.IReferencedPaymentNonexistenceVerification
        );
        expect(interfaceToAbi("IRelay", "flare")).toEqual(flare.interfaceAbis.IRelay);
        expect(interfaceToAbi("IRewardManager", "flare")).toEqual(flare.interfaceAbis.IRewardManager);
        expect(interfaceToAbi("ISubmission", "flare")).toEqual(flare.interfaceAbis.ISubmission);
        expect(interfaceToAbi("ITypeTemplate", "flare")).toEqual(flare.interfaceAbis.ITypeTemplate);
        expect(interfaceToAbi("ITypeTemplateVerification", "flare")).toEqual(
            flare.interfaceAbis.ITypeTemplateVerification
        );
        expect(interfaceToAbi("IUpdateValidators", "flare")).toEqual(flare.interfaceAbis.IUpdateValidators);
        expect(interfaceToAbi("IVPContractEvents", "flare")).toEqual(flare.interfaceAbis.IVPContractEvents);
        expect(interfaceToAbi("IVPToken", "flare")).toEqual(flare.interfaceAbis.IVPToken);
        expect(interfaceToAbi("IValidatorRegistry", "flare")).toEqual(flare.interfaceAbis.IValidatorRegistry);
        expect(interfaceToAbi("IValidatorRewardOffersManager", "flare")).toEqual(
            flare.interfaceAbis.IValidatorRewardOffersManager
        );
        expect(interfaceToAbi("IVoterPreRegistry", "flare")).toEqual(flare.interfaceAbis.IVoterPreRegistry);
        expect(interfaceToAbi("IVoterRegistry", "flare")).toEqual(flare.interfaceAbis.IVoterRegistry);
        expect(interfaceToAbi("IVoterWhitelister", "flare")).toEqual(flare.interfaceAbis.IVoterWhitelister);
        expect(interfaceToAbi("IWNat", "flare")).toEqual(flare.interfaceAbis.IWNat);
        expect(interfaceToAbi("IWNatDelegationFee", "flare")).toEqual(flare.interfaceAbis.IWNatDelegationFee);
        expect(interfaceToAbi("IWeb2Json", "flare")).toEqual(flare.interfaceAbis.IWeb2Json);
        expect(interfaceToAbi("IWeb2JsonVerification", "flare")).toEqual(flare.interfaceAbis.IWeb2JsonVerification);
        expect(interfaceToAbi("ProtocolsV2Interface", "flare")).toEqual(flare.interfaceAbis.ProtocolsV2Interface);
        expect(interfaceToAbi("RandomNumberV2Interface", "flare")).toEqual(flare.interfaceAbis.RandomNumberV2Interface);
        expect(interfaceToAbi("RedemptionRequestInfo", "flare")).toEqual(flare.interfaceAbis.RedemptionRequestInfo);
        expect(interfaceToAbi("RedemptionTicketInfo", "flare")).toEqual(flare.interfaceAbis.RedemptionTicketInfo);
        expect(interfaceToAbi("RewardsV2Interface", "flare")).toEqual(flare.interfaceAbis.RewardsV2Interface);
        expect(interfaceToAbi("TestFtsoV2Interface", "flare")).toEqual(flare.interfaceAbis.TestFtsoV2Interface);

        expect(flare.interfaceToAbi("AgentInfo")).toEqual(flare.interfaceAbis.AgentInfo);
        expect(flare.interfaceToAbi("AgentSettings")).toEqual(flare.interfaceAbis.AgentSettings);
        expect(flare.interfaceToAbi("AssetManagerSettings")).toEqual(flare.interfaceAbis.AssetManagerSettings);
        expect(flare.interfaceToAbi("AvailableAgentInfo")).toEqual(flare.interfaceAbis.AvailableAgentInfo);
        expect(flare.interfaceToAbi("CollateralReservationInfo")).toEqual(
            flare.interfaceAbis.CollateralReservationInfo
        );
        expect(flare.interfaceToAbi("CollateralType")).toEqual(flare.interfaceAbis.CollateralType);
        expect(flare.interfaceToAbi("ContractRegistry")).toEqual(flare.interfaceAbis.ContractRegistry);
        expect(flare.interfaceToAbi("EmergencyPause")).toEqual(flare.interfaceAbis.EmergencyPause);
        expect(flare.interfaceToAbi("FtsoV2Interface")).toEqual(flare.interfaceAbis.FtsoV2Interface);
        expect(flare.interfaceToAbi("IAddressBinder")).toEqual(flare.interfaceAbis.IAddressBinder);
        expect(flare.interfaceToAbi("IAddressValidity")).toEqual(flare.interfaceAbis.IAddressValidity);
        expect(flare.interfaceToAbi("IAddressValidityVerification")).toEqual(
            flare.interfaceAbis.IAddressValidityVerification
        );
        expect(flare.interfaceToAbi("IAgentAlwaysAllowedMinters")).toEqual(
            flare.interfaceAbis.IAgentAlwaysAllowedMinters
        );
        expect(flare.interfaceToAbi("IAgentOwnerRegistry")).toEqual(flare.interfaceAbis.IAgentOwnerRegistry);
        expect(flare.interfaceToAbi("IAgentPing")).toEqual(flare.interfaceAbis.IAgentPing);
        expect(flare.interfaceToAbi("IAssetManager")).toEqual(flare.interfaceAbis.IAssetManager);
        expect(flare.interfaceToAbi("IAssetManagerController")).toEqual(flare.interfaceAbis.IAssetManagerController);
        expect(flare.interfaceToAbi("IAssetManagerEvents")).toEqual(flare.interfaceAbis.IAssetManagerEvents);
        expect(flare.interfaceToAbi("IBalanceDecreasingTransaction")).toEqual(
            flare.interfaceAbis.IBalanceDecreasingTransaction
        );
        expect(flare.interfaceToAbi("IBalanceDecreasingTransactionVerification")).toEqual(
            flare.interfaceAbis.IBalanceDecreasingTransactionVerification
        );
        expect(flare.interfaceToAbi("ICChainStake")).toEqual(flare.interfaceAbis.ICChainStake);
        expect(flare.interfaceToAbi("ICChainVotePower")).toEqual(flare.interfaceAbis.ICChainVotePower);
        expect(flare.interfaceToAbi("IClaimSetupManager")).toEqual(flare.interfaceAbis.IClaimSetupManager);
        expect(flare.interfaceToAbi("ICollateralizable")).toEqual(flare.interfaceAbis.ICollateralizable);
        expect(flare.interfaceToAbi("IConfirmedBlockHeightExists")).toEqual(
            flare.interfaceAbis.IConfirmedBlockHeightExists
        );
        expect(flare.interfaceToAbi("IConfirmedBlockHeightExistsVerification")).toEqual(
            flare.interfaceAbis.IConfirmedBlockHeightExistsVerification
        );
        expect(flare.interfaceToAbi("ICoreVaultClient")).toEqual(flare.interfaceAbis.ICoreVaultClient);
        expect(flare.interfaceToAbi("ICoreVaultClientSettings")).toEqual(flare.interfaceAbis.ICoreVaultClientSettings);
        expect(flare.interfaceToAbi("IDelegationAccount")).toEqual(flare.interfaceAbis.IDelegationAccount);
        expect(flare.interfaceToAbi("IDiamondLoupe")).toEqual(flare.interfaceAbis.IDiamondLoupe);
        expect(flare.interfaceToAbi("IDistributionToDelegators")).toEqual(
            flare.interfaceAbis.IDistributionToDelegators
        );
        expect(flare.interfaceToAbi("IEVMTransaction")).toEqual(flare.interfaceAbis.IEVMTransaction);
        expect(flare.interfaceToAbi("IEVMTransactionVerification")).toEqual(
            flare.interfaceAbis.IEVMTransactionVerification
        );
        expect(flare.interfaceToAbi("IEntityManager")).toEqual(flare.interfaceAbis.IEntityManager);
        expect(flare.interfaceToAbi("IFAsset")).toEqual(flare.interfaceAbis.IFAsset);
        expect(flare.interfaceToAbi("IFastUpdateIncentiveManager")).toEqual(
            flare.interfaceAbis.IFastUpdateIncentiveManager
        );
        expect(flare.interfaceToAbi("IFastUpdater")).toEqual(flare.interfaceAbis.IFastUpdater);
        expect(flare.interfaceToAbi("IFastUpdatesConfiguration")).toEqual(
            flare.interfaceAbis.IFastUpdatesConfiguration
        );
        expect(flare.interfaceToAbi("IFdcHub")).toEqual(flare.interfaceAbis.IFdcHub);
        expect(flare.interfaceToAbi("IFdcInflationConfigurations")).toEqual(
            flare.interfaceAbis.IFdcInflationConfigurations
        );
        expect(flare.interfaceToAbi("IFdcRequestFeeConfigurations")).toEqual(
            flare.interfaceAbis.IFdcRequestFeeConfigurations
        );
        expect(flare.interfaceToAbi("IFdcVerification")).toEqual(flare.interfaceAbis.IFdcVerification);
        expect(flare.interfaceToAbi("IFeeCalculator")).toEqual(flare.interfaceAbis.IFeeCalculator);
        expect(flare.interfaceToAbi("IFlareAssetRegistry")).toEqual(flare.interfaceAbis.IFlareAssetRegistry);
        expect(flare.interfaceToAbi("IFlareContractRegistry")).toEqual(flare.interfaceAbis.IFlareContractRegistry);
        expect(flare.interfaceToAbi("IFlareDaemonize")).toEqual(flare.interfaceAbis.IFlareDaemonize);
        expect(flare.interfaceToAbi("IFlareSystemsCalculator")).toEqual(flare.interfaceAbis.IFlareSystemsCalculator);
        expect(flare.interfaceToAbi("IFlareSystemsManager")).toEqual(flare.interfaceAbis.IFlareSystemsManager);
        expect(flare.interfaceToAbi("IFtso")).toEqual(flare.interfaceAbis.IFtso);
        expect(flare.interfaceToAbi("IFtsoFeedDecimals")).toEqual(flare.interfaceAbis.IFtsoFeedDecimals);
        expect(flare.interfaceToAbi("IFtsoFeedIdConverter")).toEqual(flare.interfaceAbis.IFtsoFeedIdConverter);
        expect(flare.interfaceToAbi("IFtsoFeedPublisher")).toEqual(flare.interfaceAbis.IFtsoFeedPublisher);
        expect(flare.interfaceToAbi("IFtsoGenesis")).toEqual(flare.interfaceAbis.IFtsoGenesis);
        expect(flare.interfaceToAbi("IFtsoInflationConfigurations")).toEqual(
            flare.interfaceAbis.IFtsoInflationConfigurations
        );
        expect(flare.interfaceToAbi("IFtsoManager")).toEqual(flare.interfaceAbis.IFtsoManager);
        expect(flare.interfaceToAbi("IFtsoManagerGenesis")).toEqual(flare.interfaceAbis.IFtsoManagerGenesis);
        expect(flare.interfaceToAbi("IFtsoRegistry")).toEqual(flare.interfaceAbis.IFtsoRegistry);
        expect(flare.interfaceToAbi("IFtsoRegistryGenesis")).toEqual(flare.interfaceAbis.IFtsoRegistryGenesis);
        expect(flare.interfaceToAbi("IFtsoRewardManager")).toEqual(flare.interfaceAbis.IFtsoRewardManager);
        expect(flare.interfaceToAbi("IFtsoRewardOffersManager")).toEqual(flare.interfaceAbis.IFtsoRewardOffersManager);
        expect(flare.interfaceToAbi("IGenericRewardManager")).toEqual(flare.interfaceAbis.IGenericRewardManager);
        expect(flare.interfaceToAbi("IGovernanceSettings")).toEqual(flare.interfaceAbis.IGovernanceSettings);
        expect(flare.interfaceToAbi("IGovernanceVotePower")).toEqual(flare.interfaceAbis.IGovernanceVotePower);
        expect(flare.interfaceToAbi("IGovernor")).toEqual(flare.interfaceAbis.IGovernor);
        expect(flare.interfaceToAbi("IIAddressUpdatable")).toEqual(flare.interfaceAbis.IIAddressUpdatable);
        expect(flare.interfaceToAbi("IIAddressUpdater")).toEqual(flare.interfaceAbis.IIAddressUpdater);
        expect(flare.interfaceToAbi("IIClaimSetupManager")).toEqual(flare.interfaceAbis.IIClaimSetupManager);
        expect(flare.interfaceToAbi("IICleanable")).toEqual(flare.interfaceAbis.IICleanable);
        expect(flare.interfaceToAbi("IICleanupBlockNumberManager")).toEqual(
            flare.interfaceAbis.IICleanupBlockNumberManager
        );
        expect(flare.interfaceToAbi("IICombinedNatBalance")).toEqual(flare.interfaceAbis.IICombinedNatBalance);
        expect(flare.interfaceToAbi("IICustomFeed")).toEqual(flare.interfaceAbis.IICustomFeed);
        expect(flare.interfaceToAbi("IIERC20WithMetadata")).toEqual(flare.interfaceAbis.IIERC20WithMetadata);
        expect(flare.interfaceToAbi("IIEntityManager")).toEqual(flare.interfaceAbis.IIEntityManager);
        expect(flare.interfaceToAbi("IIFastUpdaterView")).toEqual(flare.interfaceAbis.IIFastUpdaterView);
        expect(flare.interfaceToAbi("IIFlareAssetRegistry")).toEqual(flare.interfaceAbis.IIFlareAssetRegistry);
        expect(flare.interfaceToAbi("IIFlareAssetRegistryProvider")).toEqual(
            flare.interfaceAbis.IIFlareAssetRegistryProvider
        );
        expect(flare.interfaceToAbi("IIFlareSystemsCalculator")).toEqual(flare.interfaceAbis.IIFlareSystemsCalculator);
        expect(flare.interfaceToAbi("IIFlareSystemsManager")).toEqual(flare.interfaceAbis.IIFlareSystemsManager);
        expect(flare.interfaceToAbi("IIFtso")).toEqual(flare.interfaceAbis.IIFtso);
        expect(flare.interfaceToAbi("IIFtsoFeedPublisher")).toEqual(flare.interfaceAbis.IIFtsoFeedPublisher);
        expect(flare.interfaceToAbi("IIFtsoManager")).toEqual(flare.interfaceAbis.IIFtsoManager);
        expect(flare.interfaceToAbi("IIFtsoManagerProxy")).toEqual(flare.interfaceAbis.IIFtsoManagerProxy);
        expect(flare.interfaceToAbi("IIFtsoManagerV1")).toEqual(flare.interfaceAbis.IIFtsoManagerV1);
        expect(flare.interfaceToAbi("IIFtsoRegistry")).toEqual(flare.interfaceAbis.IIFtsoRegistry);
        expect(flare.interfaceToAbi("IIFtsoRewardManager")).toEqual(flare.interfaceAbis.IIFtsoRewardManager);
        expect(flare.interfaceToAbi("IIGenericRewardManager")).toEqual(flare.interfaceAbis.IIGenericRewardManager);
        expect(flare.interfaceToAbi("IIGovernanceVotePower")).toEqual(flare.interfaceAbis.IIGovernanceVotePower);
        expect(flare.interfaceToAbi("IIGovernorProposer")).toEqual(flare.interfaceAbis.IIGovernorProposer);
        expect(flare.interfaceToAbi("IIIncentivePoolAllocation")).toEqual(
            flare.interfaceAbis.IIIncentivePoolAllocation
        );
        expect(flare.interfaceToAbi("IIIncentivePoolPercentageProvider")).toEqual(
            flare.interfaceAbis.IIIncentivePoolPercentageProvider
        );
        expect(flare.interfaceToAbi("IIIncentivePoolReceiver")).toEqual(flare.interfaceAbis.IIIncentivePoolReceiver);
        expect(flare.interfaceToAbi("IIIncentivePoolSharingPercentageProvider")).toEqual(
            flare.interfaceAbis.IIIncentivePoolSharingPercentageProvider
        );
        expect(flare.interfaceToAbi("IIInflationAllocation")).toEqual(flare.interfaceAbis.IIInflationAllocation);
        expect(flare.interfaceToAbi("IIInflationReceiver")).toEqual(flare.interfaceAbis.IIInflationReceiver);
        expect(flare.interfaceToAbi("IIInflationReceiverV1")).toEqual(flare.interfaceAbis.IIInflationReceiverV1);
        expect(flare.interfaceToAbi("IIInflationV1")).toEqual(flare.interfaceAbis.IIInflationV1);
        expect(flare.interfaceToAbi("IINodePossessionVerifier")).toEqual(flare.interfaceAbis.IINodePossessionVerifier);
        expect(flare.interfaceToAbi("IIPChainStakeMirrorVerifier")).toEqual(
            flare.interfaceAbis.IIPChainStakeMirrorVerifier
        );
        expect(flare.interfaceToAbi("IIPollingFoundation")).toEqual(flare.interfaceAbis.IIPollingFoundation);
        expect(flare.interfaceToAbi("IIPollingManagementGroup")).toEqual(flare.interfaceAbis.IIPollingManagementGroup);
        expect(flare.interfaceToAbi("IIPreInflationCalculation")).toEqual(
            flare.interfaceAbis.IIPreInflationCalculation
        );
        expect(flare.interfaceToAbi("IIPriceSubmitter")).toEqual(flare.interfaceAbis.IIPriceSubmitter);
        expect(flare.interfaceToAbi("IIPublicKeyVerifier")).toEqual(flare.interfaceAbis.IIPublicKeyVerifier);
        expect(flare.interfaceToAbi("IIRNat")).toEqual(flare.interfaceAbis.IIRNat);
        expect(flare.interfaceToAbi("IIRNatAccount")).toEqual(flare.interfaceAbis.IIRNatAccount);
        expect(flare.interfaceToAbi("IIRandomProvider")).toEqual(flare.interfaceAbis.IIRandomProvider);
        expect(flare.interfaceToAbi("IIRelay")).toEqual(flare.interfaceAbis.IIRelay);
        expect(flare.interfaceToAbi("IIRewardEpochSwitchoverTrigger")).toEqual(
            flare.interfaceAbis.IIRewardEpochSwitchoverTrigger
        );
        expect(flare.interfaceToAbi("IIRewardManager")).toEqual(flare.interfaceAbis.IIRewardManager);
        expect(flare.interfaceToAbi("IISubmission")).toEqual(flare.interfaceAbis.IISubmission);
        expect(flare.interfaceToAbi("IISupply")).toEqual(flare.interfaceAbis.IISupply);
        expect(flare.interfaceToAbi("IITokenPool")).toEqual(flare.interfaceAbis.IITokenPool);
        expect(flare.interfaceToAbi("IIVPContract")).toEqual(flare.interfaceAbis.IIVPContract);
        expect(flare.interfaceToAbi("IIVPToken")).toEqual(flare.interfaceAbis.IIVPToken);
        expect(flare.interfaceToAbi("IIVoterRegistrationTrigger")).toEqual(
            flare.interfaceAbis.IIVoterRegistrationTrigger
        );
        expect(flare.interfaceToAbi("IIVoterRegistry")).toEqual(flare.interfaceAbis.IIVoterRegistry);
        expect(flare.interfaceToAbi("IIVoterWhitelister")).toEqual(flare.interfaceAbis.IIVoterWhitelister);
        expect(flare.interfaceToAbi("IIncreaseManager")).toEqual(flare.interfaceAbis.IIncreaseManager);
        expect(flare.interfaceToAbi("IInflationGenesis")).toEqual(flare.interfaceAbis.IInflationGenesis);
        expect(flare.interfaceToAbi("IJsonApi")).toEqual(flare.interfaceAbis.IJsonApi);
        expect(flare.interfaceToAbi("IJsonApiVerification")).toEqual(flare.interfaceAbis.IJsonApiVerification);
        expect(flare.interfaceToAbi("IPChainStakeMirror")).toEqual(flare.interfaceAbis.IPChainStakeMirror);
        expect(flare.interfaceToAbi("IPChainStakeMirrorMultiSigVoting")).toEqual(
            flare.interfaceAbis.IPChainStakeMirrorMultiSigVoting
        );
        expect(flare.interfaceToAbi("IPChainStakeMirrorVerifier")).toEqual(
            flare.interfaceAbis.IPChainStakeMirrorVerifier
        );
        expect(flare.interfaceToAbi("IPChainVotePower")).toEqual(flare.interfaceAbis.IPChainVotePower);
        expect(flare.interfaceToAbi("IPayment")).toEqual(flare.interfaceAbis.IPayment);
        expect(flare.interfaceToAbi("IPaymentVerification")).toEqual(flare.interfaceAbis.IPaymentVerification);
        expect(flare.interfaceToAbi("IPollingFtso")).toEqual(flare.interfaceAbis.IPollingFtso);
        expect(flare.interfaceToAbi("IPollingManagementGroup")).toEqual(flare.interfaceAbis.IPollingManagementGroup);
        expect(flare.interfaceToAbi("IPriceSubmitter")).toEqual(flare.interfaceAbis.IPriceSubmitter);
        expect(flare.interfaceToAbi("IRNat")).toEqual(flare.interfaceAbis.IRNat);
        expect(flare.interfaceToAbi("IRNatAccount")).toEqual(flare.interfaceAbis.IRNatAccount);
        expect(flare.interfaceToAbi("IRandomProvider")).toEqual(flare.interfaceAbis.IRandomProvider);
        expect(flare.interfaceToAbi("IRedemptionTimeExtension")).toEqual(flare.interfaceAbis.IRedemptionTimeExtension);
        expect(flare.interfaceToAbi("IReferencedPaymentNonexistence")).toEqual(
            flare.interfaceAbis.IReferencedPaymentNonexistence
        );
        expect(flare.interfaceToAbi("IReferencedPaymentNonexistenceVerification")).toEqual(
            flare.interfaceAbis.IReferencedPaymentNonexistenceVerification
        );
        expect(flare.interfaceToAbi("IRelay")).toEqual(flare.interfaceAbis.IRelay);
        expect(flare.interfaceToAbi("IRewardManager")).toEqual(flare.interfaceAbis.IRewardManager);
        expect(flare.interfaceToAbi("ISubmission")).toEqual(flare.interfaceAbis.ISubmission);
        expect(flare.interfaceToAbi("ITypeTemplate")).toEqual(flare.interfaceAbis.ITypeTemplate);
        expect(flare.interfaceToAbi("ITypeTemplateVerification")).toEqual(
            flare.interfaceAbis.ITypeTemplateVerification
        );
        expect(flare.interfaceToAbi("IUpdateValidators")).toEqual(flare.interfaceAbis.IUpdateValidators);
        expect(flare.interfaceToAbi("IVPContractEvents")).toEqual(flare.interfaceAbis.IVPContractEvents);
        expect(flare.interfaceToAbi("IVPToken")).toEqual(flare.interfaceAbis.IVPToken);
        expect(flare.interfaceToAbi("IValidatorRegistry")).toEqual(flare.interfaceAbis.IValidatorRegistry);
        expect(flare.interfaceToAbi("IValidatorRewardOffersManager")).toEqual(
            flare.interfaceAbis.IValidatorRewardOffersManager
        );
        expect(flare.interfaceToAbi("IVoterPreRegistry")).toEqual(flare.interfaceAbis.IVoterPreRegistry);
        expect(flare.interfaceToAbi("IVoterRegistry")).toEqual(flare.interfaceAbis.IVoterRegistry);
        expect(flare.interfaceToAbi("IVoterWhitelister")).toEqual(flare.interfaceAbis.IVoterWhitelister);
        expect(flare.interfaceToAbi("IWNat")).toEqual(flare.interfaceAbis.IWNat);
        expect(flare.interfaceToAbi("IWNatDelegationFee")).toEqual(flare.interfaceAbis.IWNatDelegationFee);
        expect(flare.interfaceToAbi("IWeb2Json")).toEqual(flare.interfaceAbis.IWeb2Json);
        expect(flare.interfaceToAbi("IWeb2JsonVerification")).toEqual(flare.interfaceAbis.IWeb2JsonVerification);
        expect(flare.interfaceToAbi("ProtocolsV2Interface")).toEqual(flare.interfaceAbis.ProtocolsV2Interface);
        expect(flare.interfaceToAbi("RandomNumberV2Interface")).toEqual(flare.interfaceAbis.RandomNumberV2Interface);
        expect(flare.interfaceToAbi("RedemptionRequestInfo")).toEqual(flare.interfaceAbis.RedemptionRequestInfo);
        expect(flare.interfaceToAbi("RedemptionTicketInfo")).toEqual(flare.interfaceAbis.RedemptionTicketInfo);
        expect(flare.interfaceToAbi("RewardsV2Interface")).toEqual(flare.interfaceAbis.RewardsV2Interface);
        expect(flare.interfaceToAbi("TestFtsoV2Interface")).toEqual(flare.interfaceAbis.TestFtsoV2Interface);
    });
});

// This file was generated automatically. Do not edit manually.
