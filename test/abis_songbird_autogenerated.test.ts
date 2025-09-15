// This file was generated automatically. Do not edit manually.

import { songbird } from "../index";
import { nameToAbi, interfaceToAbi } from "../index";

describe("Testing songbird ABIs", () => {
    test("Interface ABIs exist for all contracts", () => {
        expect(songbird.interfaceAbis.AgentInfo).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.AgentSettings).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.AssetManagerSettings).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.AvailableAgentInfo).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.CollateralReservationInfo).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.CollateralType).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.ContractRegistry).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.FtsoV2Interface).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IAddressValidity).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IAddressValidityVerification).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IAgentAlwaysAllowedMinters).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IAgentOwnerRegistry).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IAgentPing).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IAssetManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IAssetManagerController).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IAssetManagerEvents).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IBalanceDecreasingTransaction).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IBalanceDecreasingTransactionVerification).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.ICChainStake).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.ICChainVotePower).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IClaimSetupManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.ICollateralizable).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IConfirmedBlockHeightExists).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IConfirmedBlockHeightExistsVerification).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.ICoreVaultClient).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.ICoreVaultClientSettings).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IDelegationAccount).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IDiamondLoupe).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IEVMTransaction).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IEVMTransactionVerification).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IEntityManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFastUpdateIncentiveManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFastUpdater).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFastUpdatesConfiguration).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFdcHub).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFdcInflationConfigurations).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFdcRequestFeeConfigurations).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFdcVerification).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFeeCalculator).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFlareAssetRegistry).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFlareContractRegistry).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFlareDaemonize).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFlareSystemsCalculator).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFlareSystemsManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFtso).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFtsoFeedDecimals).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFtsoFeedIdConverter).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFtsoFeedPublisher).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFtsoGenesis).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFtsoInflationConfigurations).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFtsoManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFtsoManagerGenesis).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFtsoRegistry).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFtsoRegistryGenesis).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFtsoRewardManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IFtsoRewardOffersManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IGenericRewardManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IGovernanceSettings).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IGovernanceVotePower).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IGovernor).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIAddressUpdatable).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIAddressUpdater).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIClaimSetupManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IICleanable).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IICleanupBlockNumberManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IICustomFeed).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIERC20WithMetadata).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIEntityManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIFastUpdaterView).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIFlareAssetRegistry).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIFlareAssetRegistryProvider).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIFlareSystemsCalculator).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIFlareSystemsManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIFtso).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIFtsoFeedPublisher).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIFtsoManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIFtsoManagerProxy).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIFtsoManagerV1).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIFtsoRegistry).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIFtsoRegistryV1).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIFtsoRewardManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIGovernanceVotePower).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIGovernorProposer).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIInflationAllocation).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIInflationReceiver).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIInflationReceiverV1).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIInflationV1).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IINodePossessionVerifier).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIPollingFoundation).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIPollingManagementGroup).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIPreInflationCalculation).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIPriceSubmitter).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIPublicKeyVerifier).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIRNat).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIRNatAccount).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIRandomProvider).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIRelay).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIRewardEpochSwitchoverTrigger).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIRewardManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IISubmission).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IISupply).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IITokenPool).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIVPContract).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIVPToken).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIVoterRegistrationTrigger).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIVoterRegistry).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIVoterWhitelister).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IIncreaseManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IInflationGenesis).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IJsonApi).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IJsonApiVerification).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IPayment).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IPaymentVerification).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IPollingFtso).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IPollingManagementGroup).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IPriceSubmitter).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IRNat).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IRNatAccount).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IRandomProvider).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IRedemptionTimeExtension).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IReferencedPaymentNonexistence).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IReferencedPaymentNonexistenceVerification).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IRelay).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IRewardManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.ISubmission).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.ITypeTemplate).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.ITypeTemplateVerification).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IUpdateValidators).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IVPContractEvents).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IVPToken).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IValidatorRewardOffersManager).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IVoterPreRegistry).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IVoterRegistry).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IVoterWhitelister).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IWNat).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IWNatDelegationFee).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IWeb2Json).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.IWeb2JsonVerification).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.ProtocolsV2Interface).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.RandomNumberV2Interface).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.RedemptionRequestInfo).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.RedemptionTicketInfo).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.RewardsV2Interface).toEqual(expect.any(Array));
        expect(songbird.interfaceAbis.TestFtsoV2Interface).toEqual(expect.any(Array));
    });

    test("Contract names are set for all products", () => {
        expect(songbird.products.AssetManagerController.name).toEqual("AssetManagerController");
        expect(songbird.products.AssetManagerFXRP.name).toEqual("AssetManagerFXRP");
        expect(songbird.products.ClaimSetupManager.name).toEqual("ClaimSetupManager");
        expect(songbird.products.EntityManager.name).toEqual("EntityManager");
        expect(songbird.products.FastUpdateIncentiveManager.name).toEqual("FastUpdateIncentiveManager");
        expect(songbird.products.FastUpdater.name).toEqual("FastUpdater");
        expect(songbird.products.FastUpdatesConfiguration.name).toEqual("FastUpdatesConfiguration");
        expect(songbird.products.FdcHub.name).toEqual("FdcHub");
        expect(songbird.products.FdcRequestFeeConfigurations.name).toEqual("FdcRequestFeeConfigurations");
        expect(songbird.products.FdcVerification.name).toEqual("FdcVerification");
        expect(songbird.products.FeeCalculator.name).toEqual("FeeCalculator");
        expect(songbird.products.FlareAssetRegistry.name).toEqual("FlareAssetRegistry");
        expect(songbird.products.FlareContractRegistry.name).toEqual("FlareContractRegistry");
        expect(songbird.products.FlareSystemsCalculator.name).toEqual("FlareSystemsCalculator");
        expect(songbird.products.FlareSystemsManager.name).toEqual("FlareSystemsManager");
        expect(songbird.products.FtsoFeedDecimals.name).toEqual("FtsoFeedDecimals");
        expect(songbird.products.FtsoFeedIdConverter.name).toEqual("FtsoFeedIdConverter");
        expect(songbird.products.FtsoFeedPublisher.name).toEqual("FtsoFeedPublisher");
        expect(songbird.products.FtsoInflationConfigurations.name).toEqual("FtsoInflationConfigurations");
        expect(songbird.products.FtsoManager.name).toEqual("FtsoManager");
        expect(songbird.products.FtsoRegistry.name).toEqual("FtsoRegistry");
        expect(songbird.products.FtsoRewardManager.name).toEqual("FtsoRewardManager");
        expect(songbird.products.FtsoRewardOffersManager.name).toEqual("FtsoRewardOffersManager");
        expect(songbird.products.FtsoV2.name).toEqual("FtsoV2");
        expect(songbird.products.GovernanceSettings.name).toEqual("GovernanceSettings");
        expect(songbird.products.GovernanceVotePower.name).toEqual("GovernanceVotePower");
        expect(songbird.products.PriceSubmitter.name).toEqual("PriceSubmitter");
        expect(songbird.products.ProtocolsV2.name).toEqual("ProtocolsV2");
        expect(songbird.products.RandomNumberV2.name).toEqual("RandomNumberV2");
        expect(songbird.products.Relay.name).toEqual("Relay");
        expect(songbird.products.RewardManager.name).toEqual("RewardManager");
        expect(songbird.products.RewardsV2.name).toEqual("RewardsV2");
        expect(songbird.products.Submission.name).toEqual("Submission");
        expect(songbird.products.TestFtsoV2.name).toEqual("TestFtsoV2");
        expect(songbird.products.VoterRegistry.name).toEqual("VoterRegistry");
        expect(songbird.products.VoterWhitelister.name).toEqual("VoterWhitelister");
        expect(songbird.products.WNat.name).toEqual("WNat");
        expect(songbird.products.WNatDelegationFee.name).toEqual("WNatDelegationFee");
    });

    test("Interface names are set for all products", () => {
        expect(songbird.products.AssetManagerController.interface).toEqual("IAssetManagerController");
        expect(songbird.products.AssetManagerFXRP.interface).toEqual("IAssetManager");
        expect(songbird.products.ClaimSetupManager.interface).toEqual("IClaimSetupManager");
        expect(songbird.products.EntityManager.interface).toEqual("IEntityManager");
        expect(songbird.products.FastUpdateIncentiveManager.interface).toEqual("IFastUpdateIncentiveManager");
        expect(songbird.products.FastUpdater.interface).toEqual("IFastUpdater");
        expect(songbird.products.FastUpdatesConfiguration.interface).toEqual("IFastUpdatesConfiguration");
        expect(songbird.products.FdcHub.interface).toEqual("IFdcHub");
        expect(songbird.products.FdcRequestFeeConfigurations.interface).toEqual("IFdcRequestFeeConfigurations");
        expect(songbird.products.FdcVerification.interface).toEqual("IFdcVerification");
        expect(songbird.products.FeeCalculator.interface).toEqual("IFeeCalculator");
        expect(songbird.products.FlareAssetRegistry.interface).toEqual("IFlareAssetRegistry");
        expect(songbird.products.FlareContractRegistry.interface).toEqual("IFlareContractRegistry");
        expect(songbird.products.FlareSystemsCalculator.interface).toEqual("IFlareSystemsCalculator");
        expect(songbird.products.FlareSystemsManager.interface).toEqual("IFlareSystemsManager");
        expect(songbird.products.FtsoFeedDecimals.interface).toEqual("IFtsoFeedDecimals");
        expect(songbird.products.FtsoFeedIdConverter.interface).toEqual("IFtsoFeedIdConverter");
        expect(songbird.products.FtsoFeedPublisher.interface).toEqual("IFtsoFeedPublisher");
        expect(songbird.products.FtsoInflationConfigurations.interface).toEqual("IFtsoInflationConfigurations");
        expect(songbird.products.FtsoManager.interface).toEqual("IFtsoManager");
        expect(songbird.products.FtsoRegistry.interface).toEqual("IFtsoRegistry");
        expect(songbird.products.FtsoRewardManager.interface).toEqual("IFtsoRewardManager");
        expect(songbird.products.FtsoRewardOffersManager.interface).toEqual("IFtsoRewardOffersManager");
        expect(songbird.products.FtsoV2.interface).toEqual("FtsoV2Interface");
        expect(songbird.products.GovernanceSettings.interface).toEqual("IGovernanceSettings");
        expect(songbird.products.GovernanceVotePower.interface).toEqual("IGovernanceVotePower");
        expect(songbird.products.PriceSubmitter.interface).toEqual("IPriceSubmitter");
        expect(songbird.products.ProtocolsV2.interface).toEqual("ProtocolsV2Interface");
        expect(songbird.products.RandomNumberV2.interface).toEqual("RandomNumberV2Interface");
        expect(songbird.products.Relay.interface).toEqual("IRelay");
        expect(songbird.products.RewardManager.interface).toEqual("IRewardManager");
        expect(songbird.products.RewardsV2.interface).toEqual("RewardsV2Interface");
        expect(songbird.products.Submission.interface).toEqual("ISubmission");
        expect(songbird.products.TestFtsoV2.interface).toEqual("TestFtsoV2Interface");
        expect(songbird.products.VoterRegistry.interface).toEqual("IVoterRegistry");
        expect(songbird.products.VoterWhitelister.interface).toEqual("IVoterWhitelister");
        expect(songbird.products.WNat.interface).toEqual("IWNat");
        expect(songbird.products.WNatDelegationFee.interface).toEqual("IWNatDelegationFee");
    });

    test("Registry names are set for all products", () => {
        expect(songbird.products.AssetManagerController.registry).toEqual("AssetManagerController");
        expect(songbird.products.AssetManagerFXRP.registry).toEqual("AssetManagerFXRP");
        expect(songbird.products.ClaimSetupManager.registry).toEqual("ClaimSetupManager");
        expect(songbird.products.EntityManager.registry).toEqual("EntityManager");
        expect(songbird.products.FastUpdateIncentiveManager.registry).toEqual("FastUpdateIncentiveManager");
        expect(songbird.products.FastUpdater.registry).toEqual("FastUpdater");
        expect(songbird.products.FastUpdatesConfiguration.registry).toEqual("FastUpdatesConfiguration");
        expect(songbird.products.FdcHub.registry).toEqual("FdcHub");
        expect(songbird.products.FdcRequestFeeConfigurations.registry).toEqual("FdcRequestFeeConfigurations");
        expect(songbird.products.FdcVerification.registry).toEqual("FdcVerification");
        expect(songbird.products.FeeCalculator.registry).toEqual("FeeCalculator");
        expect(songbird.products.FlareAssetRegistry.registry).toEqual("FlareAssetRegistry");
        expect(songbird.products.FlareContractRegistry.registry).toEqual("FlareContractRegistry");
        expect(songbird.products.FlareSystemsCalculator.registry).toEqual("FlareSystemsCalculator");
        expect(songbird.products.FlareSystemsManager.registry).toEqual("FlareSystemsManager");
        expect(songbird.products.FtsoFeedDecimals.registry).toEqual("FtsoFeedDecimals");
        expect(songbird.products.FtsoFeedIdConverter.registry).toEqual("FtsoFeedIdConverter");
        expect(songbird.products.FtsoFeedPublisher.registry).toEqual("FtsoFeedPublisher");
        expect(songbird.products.FtsoInflationConfigurations.registry).toEqual("FtsoInflationConfigurations");
        expect(songbird.products.FtsoManager.registry).toEqual("FtsoManager");
        expect(songbird.products.FtsoRegistry.registry).toEqual("FtsoRegistry");
        expect(songbird.products.FtsoRewardManager.registry).toEqual("FtsoRewardManager");
        expect(songbird.products.FtsoRewardOffersManager.registry).toEqual("FtsoRewardOffersManager");
        expect(songbird.products.FtsoV2.registry).toEqual("FtsoV2");
        expect(songbird.products.GovernanceSettings.registry).toEqual("GovernanceSettings");
        expect(songbird.products.GovernanceVotePower.registry).toEqual("GovernanceVotePower");
        expect(songbird.products.PriceSubmitter.registry).toEqual("PriceSubmitter");
        expect(songbird.products.ProtocolsV2.registry).toEqual("ProtocolsV2");
        expect(songbird.products.RandomNumberV2.registry).toEqual("RandomNumberV2");
        expect(songbird.products.Relay.registry).toEqual("Relay");
        expect(songbird.products.RewardManager.registry).toEqual("RewardManager");
        expect(songbird.products.RewardsV2.registry).toEqual("RewardsV2");
        expect(songbird.products.Submission.registry).toEqual("Submission");
        expect(songbird.products.TestFtsoV2.registry).toEqual("FtsoV2");
        expect(songbird.products.VoterRegistry.registry).toEqual("VoterRegistry");
        expect(songbird.products.VoterWhitelister.registry).toEqual("VoterWhitelister");
        expect(songbird.products.WNat.registry).toEqual("WNat");
        expect(songbird.products.WNatDelegationFee.registry).toEqual("WNatDelegationFee");
    });

    test("ABIs exist for all products", () => {
        expect(songbird.products.AssetManagerController.abi).toEqual(expect.any(Array));
        expect(songbird.products.AssetManagerFXRP.abi).toEqual(expect.any(Array));
        expect(songbird.products.ClaimSetupManager.abi).toEqual(expect.any(Array));
        expect(songbird.products.EntityManager.abi).toEqual(expect.any(Array));
        expect(songbird.products.FastUpdateIncentiveManager.abi).toEqual(expect.any(Array));
        expect(songbird.products.FastUpdater.abi).toEqual(expect.any(Array));
        expect(songbird.products.FastUpdatesConfiguration.abi).toEqual(expect.any(Array));
        expect(songbird.products.FdcHub.abi).toEqual(expect.any(Array));
        expect(songbird.products.FdcRequestFeeConfigurations.abi).toEqual(expect.any(Array));
        expect(songbird.products.FdcVerification.abi).toEqual(expect.any(Array));
        expect(songbird.products.FeeCalculator.abi).toEqual(expect.any(Array));
        expect(songbird.products.FlareAssetRegistry.abi).toEqual(expect.any(Array));
        expect(songbird.products.FlareContractRegistry.abi).toEqual(expect.any(Array));
        expect(songbird.products.FlareSystemsCalculator.abi).toEqual(expect.any(Array));
        expect(songbird.products.FlareSystemsManager.abi).toEqual(expect.any(Array));
        expect(songbird.products.FtsoFeedDecimals.abi).toEqual(expect.any(Array));
        expect(songbird.products.FtsoFeedIdConverter.abi).toEqual(expect.any(Array));
        expect(songbird.products.FtsoFeedPublisher.abi).toEqual(expect.any(Array));
        expect(songbird.products.FtsoInflationConfigurations.abi).toEqual(expect.any(Array));
        expect(songbird.products.FtsoManager.abi).toEqual(expect.any(Array));
        expect(songbird.products.FtsoRegistry.abi).toEqual(expect.any(Array));
        expect(songbird.products.FtsoRewardManager.abi).toEqual(expect.any(Array));
        expect(songbird.products.FtsoRewardOffersManager.abi).toEqual(expect.any(Array));
        expect(songbird.products.FtsoV2.abi).toEqual(expect.any(Array));
        expect(songbird.products.GovernanceSettings.abi).toEqual(expect.any(Array));
        expect(songbird.products.GovernanceVotePower.abi).toEqual(expect.any(Array));
        expect(songbird.products.PriceSubmitter.abi).toEqual(expect.any(Array));
        expect(songbird.products.ProtocolsV2.abi).toEqual(expect.any(Array));
        expect(songbird.products.RandomNumberV2.abi).toEqual(expect.any(Array));
        expect(songbird.products.Relay.abi).toEqual(expect.any(Array));
        expect(songbird.products.RewardManager.abi).toEqual(expect.any(Array));
        expect(songbird.products.RewardsV2.abi).toEqual(expect.any(Array));
        expect(songbird.products.Submission.abi).toEqual(expect.any(Array));
        expect(songbird.products.TestFtsoV2.abi).toEqual(expect.any(Array));
        expect(songbird.products.VoterRegistry.abi).toEqual(expect.any(Array));
        expect(songbird.products.VoterWhitelister.abi).toEqual(expect.any(Array));
        expect(songbird.products.WNat.abi).toEqual(expect.any(Array));
        expect(songbird.products.WNatDelegationFee.abi).toEqual(expect.any(Array));
    });

    test("nameToAbi finds every contract", () => {
        expect(nameToAbi("AssetManagerController", "songbird")).toEqual(songbird.interfaceAbis.IAssetManagerController);
        expect(nameToAbi("AssetManagerFXRP", "songbird")).toEqual(songbird.interfaceAbis.IAssetManager);
        expect(nameToAbi("ClaimSetupManager", "songbird")).toEqual(songbird.interfaceAbis.IClaimSetupManager);
        expect(nameToAbi("EntityManager", "songbird")).toEqual(songbird.interfaceAbis.IEntityManager);
        expect(nameToAbi("FastUpdateIncentiveManager", "songbird")).toEqual(
            songbird.interfaceAbis.IFastUpdateIncentiveManager
        );
        expect(nameToAbi("FastUpdater", "songbird")).toEqual(songbird.interfaceAbis.IFastUpdater);
        expect(nameToAbi("FastUpdatesConfiguration", "songbird")).toEqual(
            songbird.interfaceAbis.IFastUpdatesConfiguration
        );
        expect(nameToAbi("FdcHub", "songbird")).toEqual(songbird.interfaceAbis.IFdcHub);
        expect(nameToAbi("FdcRequestFeeConfigurations", "songbird")).toEqual(
            songbird.interfaceAbis.IFdcRequestFeeConfigurations
        );
        expect(nameToAbi("FdcVerification", "songbird")).toEqual(songbird.interfaceAbis.IFdcVerification);
        expect(nameToAbi("FeeCalculator", "songbird")).toEqual(songbird.interfaceAbis.IFeeCalculator);
        expect(nameToAbi("FlareAssetRegistry", "songbird")).toEqual(songbird.interfaceAbis.IFlareAssetRegistry);
        expect(nameToAbi("FlareContractRegistry", "songbird")).toEqual(songbird.interfaceAbis.IFlareContractRegistry);
        expect(nameToAbi("FlareSystemsCalculator", "songbird")).toEqual(songbird.interfaceAbis.IFlareSystemsCalculator);
        expect(nameToAbi("FlareSystemsManager", "songbird")).toEqual(songbird.interfaceAbis.IFlareSystemsManager);
        expect(nameToAbi("FtsoFeedDecimals", "songbird")).toEqual(songbird.interfaceAbis.IFtsoFeedDecimals);
        expect(nameToAbi("FtsoFeedIdConverter", "songbird")).toEqual(songbird.interfaceAbis.IFtsoFeedIdConverter);
        expect(nameToAbi("FtsoFeedPublisher", "songbird")).toEqual(songbird.interfaceAbis.IFtsoFeedPublisher);
        expect(nameToAbi("FtsoInflationConfigurations", "songbird")).toEqual(
            songbird.interfaceAbis.IFtsoInflationConfigurations
        );
        expect(nameToAbi("FtsoManager", "songbird")).toEqual(songbird.interfaceAbis.IFtsoManager);
        expect(nameToAbi("FtsoRegistry", "songbird")).toEqual(songbird.interfaceAbis.IFtsoRegistry);
        expect(nameToAbi("FtsoRewardManager", "songbird")).toEqual(songbird.interfaceAbis.IFtsoRewardManager);
        expect(nameToAbi("FtsoRewardOffersManager", "songbird")).toEqual(
            songbird.interfaceAbis.IFtsoRewardOffersManager
        );
        expect(nameToAbi("FtsoV2", "songbird")).toEqual(songbird.interfaceAbis.FtsoV2Interface);
        expect(nameToAbi("GovernanceSettings", "songbird")).toEqual(songbird.interfaceAbis.IGovernanceSettings);
        expect(nameToAbi("GovernanceVotePower", "songbird")).toEqual(songbird.interfaceAbis.IGovernanceVotePower);
        expect(nameToAbi("PriceSubmitter", "songbird")).toEqual(songbird.interfaceAbis.IPriceSubmitter);
        expect(nameToAbi("ProtocolsV2", "songbird")).toEqual(songbird.interfaceAbis.ProtocolsV2Interface);
        expect(nameToAbi("RandomNumberV2", "songbird")).toEqual(songbird.interfaceAbis.RandomNumberV2Interface);
        expect(nameToAbi("Relay", "songbird")).toEqual(songbird.interfaceAbis.IRelay);
        expect(nameToAbi("RewardManager", "songbird")).toEqual(songbird.interfaceAbis.IRewardManager);
        expect(nameToAbi("RewardsV2", "songbird")).toEqual(songbird.interfaceAbis.RewardsV2Interface);
        expect(nameToAbi("Submission", "songbird")).toEqual(songbird.interfaceAbis.ISubmission);
        expect(nameToAbi("TestFtsoV2", "songbird")).toEqual(songbird.interfaceAbis.TestFtsoV2Interface);
        expect(nameToAbi("VoterRegistry", "songbird")).toEqual(songbird.interfaceAbis.IVoterRegistry);
        expect(nameToAbi("VoterWhitelister", "songbird")).toEqual(songbird.interfaceAbis.IVoterWhitelister);
        expect(nameToAbi("WNat", "songbird")).toEqual(songbird.interfaceAbis.IWNat);
        expect(nameToAbi("WNatDelegationFee", "songbird")).toEqual(songbird.interfaceAbis.IWNatDelegationFee);

        expect(songbird.nameToAbi("AssetManagerController")).toEqual(songbird.interfaceAbis.IAssetManagerController);
        expect(songbird.nameToAbi("AssetManagerFXRP")).toEqual(songbird.interfaceAbis.IAssetManager);
        expect(songbird.nameToAbi("ClaimSetupManager")).toEqual(songbird.interfaceAbis.IClaimSetupManager);
        expect(songbird.nameToAbi("EntityManager")).toEqual(songbird.interfaceAbis.IEntityManager);
        expect(songbird.nameToAbi("FastUpdateIncentiveManager")).toEqual(
            songbird.interfaceAbis.IFastUpdateIncentiveManager
        );
        expect(songbird.nameToAbi("FastUpdater")).toEqual(songbird.interfaceAbis.IFastUpdater);
        expect(songbird.nameToAbi("FastUpdatesConfiguration")).toEqual(
            songbird.interfaceAbis.IFastUpdatesConfiguration
        );
        expect(songbird.nameToAbi("FdcHub")).toEqual(songbird.interfaceAbis.IFdcHub);
        expect(songbird.nameToAbi("FdcRequestFeeConfigurations")).toEqual(
            songbird.interfaceAbis.IFdcRequestFeeConfigurations
        );
        expect(songbird.nameToAbi("FdcVerification")).toEqual(songbird.interfaceAbis.IFdcVerification);
        expect(songbird.nameToAbi("FeeCalculator")).toEqual(songbird.interfaceAbis.IFeeCalculator);
        expect(songbird.nameToAbi("FlareAssetRegistry")).toEqual(songbird.interfaceAbis.IFlareAssetRegistry);
        expect(songbird.nameToAbi("FlareContractRegistry")).toEqual(songbird.interfaceAbis.IFlareContractRegistry);
        expect(songbird.nameToAbi("FlareSystemsCalculator")).toEqual(songbird.interfaceAbis.IFlareSystemsCalculator);
        expect(songbird.nameToAbi("FlareSystemsManager")).toEqual(songbird.interfaceAbis.IFlareSystemsManager);
        expect(songbird.nameToAbi("FtsoFeedDecimals")).toEqual(songbird.interfaceAbis.IFtsoFeedDecimals);
        expect(songbird.nameToAbi("FtsoFeedIdConverter")).toEqual(songbird.interfaceAbis.IFtsoFeedIdConverter);
        expect(songbird.nameToAbi("FtsoFeedPublisher")).toEqual(songbird.interfaceAbis.IFtsoFeedPublisher);
        expect(songbird.nameToAbi("FtsoInflationConfigurations")).toEqual(
            songbird.interfaceAbis.IFtsoInflationConfigurations
        );
        expect(songbird.nameToAbi("FtsoManager")).toEqual(songbird.interfaceAbis.IFtsoManager);
        expect(songbird.nameToAbi("FtsoRegistry")).toEqual(songbird.interfaceAbis.IFtsoRegistry);
        expect(songbird.nameToAbi("FtsoRewardManager")).toEqual(songbird.interfaceAbis.IFtsoRewardManager);
        expect(songbird.nameToAbi("FtsoRewardOffersManager")).toEqual(songbird.interfaceAbis.IFtsoRewardOffersManager);
        expect(songbird.nameToAbi("FtsoV2")).toEqual(songbird.interfaceAbis.FtsoV2Interface);
        expect(songbird.nameToAbi("GovernanceSettings")).toEqual(songbird.interfaceAbis.IGovernanceSettings);
        expect(songbird.nameToAbi("GovernanceVotePower")).toEqual(songbird.interfaceAbis.IGovernanceVotePower);
        expect(songbird.nameToAbi("PriceSubmitter")).toEqual(songbird.interfaceAbis.IPriceSubmitter);
        expect(songbird.nameToAbi("ProtocolsV2")).toEqual(songbird.interfaceAbis.ProtocolsV2Interface);
        expect(songbird.nameToAbi("RandomNumberV2")).toEqual(songbird.interfaceAbis.RandomNumberV2Interface);
        expect(songbird.nameToAbi("Relay")).toEqual(songbird.interfaceAbis.IRelay);
        expect(songbird.nameToAbi("RewardManager")).toEqual(songbird.interfaceAbis.IRewardManager);
        expect(songbird.nameToAbi("RewardsV2")).toEqual(songbird.interfaceAbis.RewardsV2Interface);
        expect(songbird.nameToAbi("Submission")).toEqual(songbird.interfaceAbis.ISubmission);
        expect(songbird.nameToAbi("TestFtsoV2")).toEqual(songbird.interfaceAbis.TestFtsoV2Interface);
        expect(songbird.nameToAbi("VoterRegistry")).toEqual(songbird.interfaceAbis.IVoterRegistry);
        expect(songbird.nameToAbi("VoterWhitelister")).toEqual(songbird.interfaceAbis.IVoterWhitelister);
        expect(songbird.nameToAbi("WNat")).toEqual(songbird.interfaceAbis.IWNat);
        expect(songbird.nameToAbi("WNatDelegationFee")).toEqual(songbird.interfaceAbis.IWNatDelegationFee);
    });

    test("interfaceToAbi finds every contract", () => {
        expect(interfaceToAbi("AgentInfo", "songbird")).toEqual(songbird.interfaceAbis.AgentInfo);
        expect(interfaceToAbi("AgentSettings", "songbird")).toEqual(songbird.interfaceAbis.AgentSettings);
        expect(interfaceToAbi("AssetManagerSettings", "songbird")).toEqual(songbird.interfaceAbis.AssetManagerSettings);
        expect(interfaceToAbi("AvailableAgentInfo", "songbird")).toEqual(songbird.interfaceAbis.AvailableAgentInfo);
        expect(interfaceToAbi("CollateralReservationInfo", "songbird")).toEqual(
            songbird.interfaceAbis.CollateralReservationInfo
        );
        expect(interfaceToAbi("CollateralType", "songbird")).toEqual(songbird.interfaceAbis.CollateralType);
        expect(interfaceToAbi("ContractRegistry", "songbird")).toEqual(songbird.interfaceAbis.ContractRegistry);
        expect(interfaceToAbi("FtsoV2Interface", "songbird")).toEqual(songbird.interfaceAbis.FtsoV2Interface);
        expect(interfaceToAbi("IAddressValidity", "songbird")).toEqual(songbird.interfaceAbis.IAddressValidity);
        expect(interfaceToAbi("IAddressValidityVerification", "songbird")).toEqual(
            songbird.interfaceAbis.IAddressValidityVerification
        );
        expect(interfaceToAbi("IAgentAlwaysAllowedMinters", "songbird")).toEqual(
            songbird.interfaceAbis.IAgentAlwaysAllowedMinters
        );
        expect(interfaceToAbi("IAgentOwnerRegistry", "songbird")).toEqual(songbird.interfaceAbis.IAgentOwnerRegistry);
        expect(interfaceToAbi("IAgentPing", "songbird")).toEqual(songbird.interfaceAbis.IAgentPing);
        expect(interfaceToAbi("IAssetManager", "songbird")).toEqual(songbird.interfaceAbis.IAssetManager);
        expect(interfaceToAbi("IAssetManagerController", "songbird")).toEqual(
            songbird.interfaceAbis.IAssetManagerController
        );
        expect(interfaceToAbi("IAssetManagerEvents", "songbird")).toEqual(songbird.interfaceAbis.IAssetManagerEvents);
        expect(interfaceToAbi("IBalanceDecreasingTransaction", "songbird")).toEqual(
            songbird.interfaceAbis.IBalanceDecreasingTransaction
        );
        expect(interfaceToAbi("IBalanceDecreasingTransactionVerification", "songbird")).toEqual(
            songbird.interfaceAbis.IBalanceDecreasingTransactionVerification
        );
        expect(interfaceToAbi("ICChainStake", "songbird")).toEqual(songbird.interfaceAbis.ICChainStake);
        expect(interfaceToAbi("ICChainVotePower", "songbird")).toEqual(songbird.interfaceAbis.ICChainVotePower);
        expect(interfaceToAbi("IClaimSetupManager", "songbird")).toEqual(songbird.interfaceAbis.IClaimSetupManager);
        expect(interfaceToAbi("ICollateralizable", "songbird")).toEqual(songbird.interfaceAbis.ICollateralizable);
        expect(interfaceToAbi("IConfirmedBlockHeightExists", "songbird")).toEqual(
            songbird.interfaceAbis.IConfirmedBlockHeightExists
        );
        expect(interfaceToAbi("IConfirmedBlockHeightExistsVerification", "songbird")).toEqual(
            songbird.interfaceAbis.IConfirmedBlockHeightExistsVerification
        );
        expect(interfaceToAbi("ICoreVaultClient", "songbird")).toEqual(songbird.interfaceAbis.ICoreVaultClient);
        expect(interfaceToAbi("ICoreVaultClientSettings", "songbird")).toEqual(
            songbird.interfaceAbis.ICoreVaultClientSettings
        );
        expect(interfaceToAbi("IDelegationAccount", "songbird")).toEqual(songbird.interfaceAbis.IDelegationAccount);
        expect(interfaceToAbi("IDiamondLoupe", "songbird")).toEqual(songbird.interfaceAbis.IDiamondLoupe);
        expect(interfaceToAbi("IEVMTransaction", "songbird")).toEqual(songbird.interfaceAbis.IEVMTransaction);
        expect(interfaceToAbi("IEVMTransactionVerification", "songbird")).toEqual(
            songbird.interfaceAbis.IEVMTransactionVerification
        );
        expect(interfaceToAbi("IEntityManager", "songbird")).toEqual(songbird.interfaceAbis.IEntityManager);
        expect(interfaceToAbi("IFastUpdateIncentiveManager", "songbird")).toEqual(
            songbird.interfaceAbis.IFastUpdateIncentiveManager
        );
        expect(interfaceToAbi("IFastUpdater", "songbird")).toEqual(songbird.interfaceAbis.IFastUpdater);
        expect(interfaceToAbi("IFastUpdatesConfiguration", "songbird")).toEqual(
            songbird.interfaceAbis.IFastUpdatesConfiguration
        );
        expect(interfaceToAbi("IFdcHub", "songbird")).toEqual(songbird.interfaceAbis.IFdcHub);
        expect(interfaceToAbi("IFdcInflationConfigurations", "songbird")).toEqual(
            songbird.interfaceAbis.IFdcInflationConfigurations
        );
        expect(interfaceToAbi("IFdcRequestFeeConfigurations", "songbird")).toEqual(
            songbird.interfaceAbis.IFdcRequestFeeConfigurations
        );
        expect(interfaceToAbi("IFdcVerification", "songbird")).toEqual(songbird.interfaceAbis.IFdcVerification);
        expect(interfaceToAbi("IFeeCalculator", "songbird")).toEqual(songbird.interfaceAbis.IFeeCalculator);
        expect(interfaceToAbi("IFlareAssetRegistry", "songbird")).toEqual(songbird.interfaceAbis.IFlareAssetRegistry);
        expect(interfaceToAbi("IFlareContractRegistry", "songbird")).toEqual(
            songbird.interfaceAbis.IFlareContractRegistry
        );
        expect(interfaceToAbi("IFlareDaemonize", "songbird")).toEqual(songbird.interfaceAbis.IFlareDaemonize);
        expect(interfaceToAbi("IFlareSystemsCalculator", "songbird")).toEqual(
            songbird.interfaceAbis.IFlareSystemsCalculator
        );
        expect(interfaceToAbi("IFlareSystemsManager", "songbird")).toEqual(songbird.interfaceAbis.IFlareSystemsManager);
        expect(interfaceToAbi("IFtso", "songbird")).toEqual(songbird.interfaceAbis.IFtso);
        expect(interfaceToAbi("IFtsoFeedDecimals", "songbird")).toEqual(songbird.interfaceAbis.IFtsoFeedDecimals);
        expect(interfaceToAbi("IFtsoFeedIdConverter", "songbird")).toEqual(songbird.interfaceAbis.IFtsoFeedIdConverter);
        expect(interfaceToAbi("IFtsoFeedPublisher", "songbird")).toEqual(songbird.interfaceAbis.IFtsoFeedPublisher);
        expect(interfaceToAbi("IFtsoGenesis", "songbird")).toEqual(songbird.interfaceAbis.IFtsoGenesis);
        expect(interfaceToAbi("IFtsoInflationConfigurations", "songbird")).toEqual(
            songbird.interfaceAbis.IFtsoInflationConfigurations
        );
        expect(interfaceToAbi("IFtsoManager", "songbird")).toEqual(songbird.interfaceAbis.IFtsoManager);
        expect(interfaceToAbi("IFtsoManagerGenesis", "songbird")).toEqual(songbird.interfaceAbis.IFtsoManagerGenesis);
        expect(interfaceToAbi("IFtsoRegistry", "songbird")).toEqual(songbird.interfaceAbis.IFtsoRegistry);
        expect(interfaceToAbi("IFtsoRegistryGenesis", "songbird")).toEqual(songbird.interfaceAbis.IFtsoRegistryGenesis);
        expect(interfaceToAbi("IFtsoRewardManager", "songbird")).toEqual(songbird.interfaceAbis.IFtsoRewardManager);
        expect(interfaceToAbi("IFtsoRewardOffersManager", "songbird")).toEqual(
            songbird.interfaceAbis.IFtsoRewardOffersManager
        );
        expect(interfaceToAbi("IGenericRewardManager", "songbird")).toEqual(
            songbird.interfaceAbis.IGenericRewardManager
        );
        expect(interfaceToAbi("IGovernanceSettings", "songbird")).toEqual(songbird.interfaceAbis.IGovernanceSettings);
        expect(interfaceToAbi("IGovernanceVotePower", "songbird")).toEqual(songbird.interfaceAbis.IGovernanceVotePower);
        expect(interfaceToAbi("IGovernor", "songbird")).toEqual(songbird.interfaceAbis.IGovernor);
        expect(interfaceToAbi("IIAddressUpdatable", "songbird")).toEqual(songbird.interfaceAbis.IIAddressUpdatable);
        expect(interfaceToAbi("IIAddressUpdater", "songbird")).toEqual(songbird.interfaceAbis.IIAddressUpdater);
        expect(interfaceToAbi("IIClaimSetupManager", "songbird")).toEqual(songbird.interfaceAbis.IIClaimSetupManager);
        expect(interfaceToAbi("IICleanable", "songbird")).toEqual(songbird.interfaceAbis.IICleanable);
        expect(interfaceToAbi("IICleanupBlockNumberManager", "songbird")).toEqual(
            songbird.interfaceAbis.IICleanupBlockNumberManager
        );
        expect(interfaceToAbi("IICustomFeed", "songbird")).toEqual(songbird.interfaceAbis.IICustomFeed);
        expect(interfaceToAbi("IIERC20WithMetadata", "songbird")).toEqual(songbird.interfaceAbis.IIERC20WithMetadata);
        expect(interfaceToAbi("IIEntityManager", "songbird")).toEqual(songbird.interfaceAbis.IIEntityManager);
        expect(interfaceToAbi("IIFastUpdaterView", "songbird")).toEqual(songbird.interfaceAbis.IIFastUpdaterView);
        expect(interfaceToAbi("IIFlareAssetRegistry", "songbird")).toEqual(songbird.interfaceAbis.IIFlareAssetRegistry);
        expect(interfaceToAbi("IIFlareAssetRegistryProvider", "songbird")).toEqual(
            songbird.interfaceAbis.IIFlareAssetRegistryProvider
        );
        expect(interfaceToAbi("IIFlareSystemsCalculator", "songbird")).toEqual(
            songbird.interfaceAbis.IIFlareSystemsCalculator
        );
        expect(interfaceToAbi("IIFlareSystemsManager", "songbird")).toEqual(
            songbird.interfaceAbis.IIFlareSystemsManager
        );
        expect(interfaceToAbi("IIFtso", "songbird")).toEqual(songbird.interfaceAbis.IIFtso);
        expect(interfaceToAbi("IIFtsoFeedPublisher", "songbird")).toEqual(songbird.interfaceAbis.IIFtsoFeedPublisher);
        expect(interfaceToAbi("IIFtsoManager", "songbird")).toEqual(songbird.interfaceAbis.IIFtsoManager);
        expect(interfaceToAbi("IIFtsoManagerProxy", "songbird")).toEqual(songbird.interfaceAbis.IIFtsoManagerProxy);
        expect(interfaceToAbi("IIFtsoManagerV1", "songbird")).toEqual(songbird.interfaceAbis.IIFtsoManagerV1);
        expect(interfaceToAbi("IIFtsoRegistry", "songbird")).toEqual(songbird.interfaceAbis.IIFtsoRegistry);
        expect(interfaceToAbi("IIFtsoRegistryV1", "songbird")).toEqual(songbird.interfaceAbis.IIFtsoRegistryV1);
        expect(interfaceToAbi("IIFtsoRewardManager", "songbird")).toEqual(songbird.interfaceAbis.IIFtsoRewardManager);
        expect(interfaceToAbi("IIGovernanceVotePower", "songbird")).toEqual(
            songbird.interfaceAbis.IIGovernanceVotePower
        );
        expect(interfaceToAbi("IIGovernorProposer", "songbird")).toEqual(songbird.interfaceAbis.IIGovernorProposer);
        expect(interfaceToAbi("IIInflationAllocation", "songbird")).toEqual(
            songbird.interfaceAbis.IIInflationAllocation
        );
        expect(interfaceToAbi("IIInflationReceiver", "songbird")).toEqual(songbird.interfaceAbis.IIInflationReceiver);
        expect(interfaceToAbi("IIInflationReceiverV1", "songbird")).toEqual(
            songbird.interfaceAbis.IIInflationReceiverV1
        );
        expect(interfaceToAbi("IIInflationV1", "songbird")).toEqual(songbird.interfaceAbis.IIInflationV1);
        expect(interfaceToAbi("IINodePossessionVerifier", "songbird")).toEqual(
            songbird.interfaceAbis.IINodePossessionVerifier
        );
        expect(interfaceToAbi("IIPollingFoundation", "songbird")).toEqual(songbird.interfaceAbis.IIPollingFoundation);
        expect(interfaceToAbi("IIPollingManagementGroup", "songbird")).toEqual(
            songbird.interfaceAbis.IIPollingManagementGroup
        );
        expect(interfaceToAbi("IIPreInflationCalculation", "songbird")).toEqual(
            songbird.interfaceAbis.IIPreInflationCalculation
        );
        expect(interfaceToAbi("IIPriceSubmitter", "songbird")).toEqual(songbird.interfaceAbis.IIPriceSubmitter);
        expect(interfaceToAbi("IIPublicKeyVerifier", "songbird")).toEqual(songbird.interfaceAbis.IIPublicKeyVerifier);
        expect(interfaceToAbi("IIRNat", "songbird")).toEqual(songbird.interfaceAbis.IIRNat);
        expect(interfaceToAbi("IIRNatAccount", "songbird")).toEqual(songbird.interfaceAbis.IIRNatAccount);
        expect(interfaceToAbi("IIRandomProvider", "songbird")).toEqual(songbird.interfaceAbis.IIRandomProvider);
        expect(interfaceToAbi("IIRelay", "songbird")).toEqual(songbird.interfaceAbis.IIRelay);
        expect(interfaceToAbi("IIRewardEpochSwitchoverTrigger", "songbird")).toEqual(
            songbird.interfaceAbis.IIRewardEpochSwitchoverTrigger
        );
        expect(interfaceToAbi("IIRewardManager", "songbird")).toEqual(songbird.interfaceAbis.IIRewardManager);
        expect(interfaceToAbi("IISubmission", "songbird")).toEqual(songbird.interfaceAbis.IISubmission);
        expect(interfaceToAbi("IISupply", "songbird")).toEqual(songbird.interfaceAbis.IISupply);
        expect(interfaceToAbi("IITokenPool", "songbird")).toEqual(songbird.interfaceAbis.IITokenPool);
        expect(interfaceToAbi("IIVPContract", "songbird")).toEqual(songbird.interfaceAbis.IIVPContract);
        expect(interfaceToAbi("IIVPToken", "songbird")).toEqual(songbird.interfaceAbis.IIVPToken);
        expect(interfaceToAbi("IIVoterRegistrationTrigger", "songbird")).toEqual(
            songbird.interfaceAbis.IIVoterRegistrationTrigger
        );
        expect(interfaceToAbi("IIVoterRegistry", "songbird")).toEqual(songbird.interfaceAbis.IIVoterRegistry);
        expect(interfaceToAbi("IIVoterWhitelister", "songbird")).toEqual(songbird.interfaceAbis.IIVoterWhitelister);
        expect(interfaceToAbi("IIncreaseManager", "songbird")).toEqual(songbird.interfaceAbis.IIncreaseManager);
        expect(interfaceToAbi("IInflationGenesis", "songbird")).toEqual(songbird.interfaceAbis.IInflationGenesis);
        expect(interfaceToAbi("IJsonApi", "songbird")).toEqual(songbird.interfaceAbis.IJsonApi);
        expect(interfaceToAbi("IJsonApiVerification", "songbird")).toEqual(songbird.interfaceAbis.IJsonApiVerification);
        expect(interfaceToAbi("IPayment", "songbird")).toEqual(songbird.interfaceAbis.IPayment);
        expect(interfaceToAbi("IPaymentVerification", "songbird")).toEqual(songbird.interfaceAbis.IPaymentVerification);
        expect(interfaceToAbi("IPollingFtso", "songbird")).toEqual(songbird.interfaceAbis.IPollingFtso);
        expect(interfaceToAbi("IPollingManagementGroup", "songbird")).toEqual(
            songbird.interfaceAbis.IPollingManagementGroup
        );
        expect(interfaceToAbi("IPriceSubmitter", "songbird")).toEqual(songbird.interfaceAbis.IPriceSubmitter);
        expect(interfaceToAbi("IRNat", "songbird")).toEqual(songbird.interfaceAbis.IRNat);
        expect(interfaceToAbi("IRNatAccount", "songbird")).toEqual(songbird.interfaceAbis.IRNatAccount);
        expect(interfaceToAbi("IRandomProvider", "songbird")).toEqual(songbird.interfaceAbis.IRandomProvider);
        expect(interfaceToAbi("IRedemptionTimeExtension", "songbird")).toEqual(
            songbird.interfaceAbis.IRedemptionTimeExtension
        );
        expect(interfaceToAbi("IReferencedPaymentNonexistence", "songbird")).toEqual(
            songbird.interfaceAbis.IReferencedPaymentNonexistence
        );
        expect(interfaceToAbi("IReferencedPaymentNonexistenceVerification", "songbird")).toEqual(
            songbird.interfaceAbis.IReferencedPaymentNonexistenceVerification
        );
        expect(interfaceToAbi("IRelay", "songbird")).toEqual(songbird.interfaceAbis.IRelay);
        expect(interfaceToAbi("IRewardManager", "songbird")).toEqual(songbird.interfaceAbis.IRewardManager);
        expect(interfaceToAbi("ISubmission", "songbird")).toEqual(songbird.interfaceAbis.ISubmission);
        expect(interfaceToAbi("ITypeTemplate", "songbird")).toEqual(songbird.interfaceAbis.ITypeTemplate);
        expect(interfaceToAbi("ITypeTemplateVerification", "songbird")).toEqual(
            songbird.interfaceAbis.ITypeTemplateVerification
        );
        expect(interfaceToAbi("IUpdateValidators", "songbird")).toEqual(songbird.interfaceAbis.IUpdateValidators);
        expect(interfaceToAbi("IVPContractEvents", "songbird")).toEqual(songbird.interfaceAbis.IVPContractEvents);
        expect(interfaceToAbi("IVPToken", "songbird")).toEqual(songbird.interfaceAbis.IVPToken);
        expect(interfaceToAbi("IValidatorRewardOffersManager", "songbird")).toEqual(
            songbird.interfaceAbis.IValidatorRewardOffersManager
        );
        expect(interfaceToAbi("IVoterPreRegistry", "songbird")).toEqual(songbird.interfaceAbis.IVoterPreRegistry);
        expect(interfaceToAbi("IVoterRegistry", "songbird")).toEqual(songbird.interfaceAbis.IVoterRegistry);
        expect(interfaceToAbi("IVoterWhitelister", "songbird")).toEqual(songbird.interfaceAbis.IVoterWhitelister);
        expect(interfaceToAbi("IWNat", "songbird")).toEqual(songbird.interfaceAbis.IWNat);
        expect(interfaceToAbi("IWNatDelegationFee", "songbird")).toEqual(songbird.interfaceAbis.IWNatDelegationFee);
        expect(interfaceToAbi("IWeb2Json", "songbird")).toEqual(songbird.interfaceAbis.IWeb2Json);
        expect(interfaceToAbi("IWeb2JsonVerification", "songbird")).toEqual(
            songbird.interfaceAbis.IWeb2JsonVerification
        );
        expect(interfaceToAbi("ProtocolsV2Interface", "songbird")).toEqual(songbird.interfaceAbis.ProtocolsV2Interface);
        expect(interfaceToAbi("RandomNumberV2Interface", "songbird")).toEqual(
            songbird.interfaceAbis.RandomNumberV2Interface
        );
        expect(interfaceToAbi("RedemptionRequestInfo", "songbird")).toEqual(
            songbird.interfaceAbis.RedemptionRequestInfo
        );
        expect(interfaceToAbi("RedemptionTicketInfo", "songbird")).toEqual(songbird.interfaceAbis.RedemptionTicketInfo);
        expect(interfaceToAbi("RewardsV2Interface", "songbird")).toEqual(songbird.interfaceAbis.RewardsV2Interface);
        expect(interfaceToAbi("TestFtsoV2Interface", "songbird")).toEqual(songbird.interfaceAbis.TestFtsoV2Interface);

        expect(songbird.interfaceToAbi("AgentInfo")).toEqual(songbird.interfaceAbis.AgentInfo);
        expect(songbird.interfaceToAbi("AgentSettings")).toEqual(songbird.interfaceAbis.AgentSettings);
        expect(songbird.interfaceToAbi("AssetManagerSettings")).toEqual(songbird.interfaceAbis.AssetManagerSettings);
        expect(songbird.interfaceToAbi("AvailableAgentInfo")).toEqual(songbird.interfaceAbis.AvailableAgentInfo);
        expect(songbird.interfaceToAbi("CollateralReservationInfo")).toEqual(
            songbird.interfaceAbis.CollateralReservationInfo
        );
        expect(songbird.interfaceToAbi("CollateralType")).toEqual(songbird.interfaceAbis.CollateralType);
        expect(songbird.interfaceToAbi("ContractRegistry")).toEqual(songbird.interfaceAbis.ContractRegistry);
        expect(songbird.interfaceToAbi("FtsoV2Interface")).toEqual(songbird.interfaceAbis.FtsoV2Interface);
        expect(songbird.interfaceToAbi("IAddressValidity")).toEqual(songbird.interfaceAbis.IAddressValidity);
        expect(songbird.interfaceToAbi("IAddressValidityVerification")).toEqual(
            songbird.interfaceAbis.IAddressValidityVerification
        );
        expect(songbird.interfaceToAbi("IAgentAlwaysAllowedMinters")).toEqual(
            songbird.interfaceAbis.IAgentAlwaysAllowedMinters
        );
        expect(songbird.interfaceToAbi("IAgentOwnerRegistry")).toEqual(songbird.interfaceAbis.IAgentOwnerRegistry);
        expect(songbird.interfaceToAbi("IAgentPing")).toEqual(songbird.interfaceAbis.IAgentPing);
        expect(songbird.interfaceToAbi("IAssetManager")).toEqual(songbird.interfaceAbis.IAssetManager);
        expect(songbird.interfaceToAbi("IAssetManagerController")).toEqual(
            songbird.interfaceAbis.IAssetManagerController
        );
        expect(songbird.interfaceToAbi("IAssetManagerEvents")).toEqual(songbird.interfaceAbis.IAssetManagerEvents);
        expect(songbird.interfaceToAbi("IBalanceDecreasingTransaction")).toEqual(
            songbird.interfaceAbis.IBalanceDecreasingTransaction
        );
        expect(songbird.interfaceToAbi("IBalanceDecreasingTransactionVerification")).toEqual(
            songbird.interfaceAbis.IBalanceDecreasingTransactionVerification
        );
        expect(songbird.interfaceToAbi("ICChainStake")).toEqual(songbird.interfaceAbis.ICChainStake);
        expect(songbird.interfaceToAbi("ICChainVotePower")).toEqual(songbird.interfaceAbis.ICChainVotePower);
        expect(songbird.interfaceToAbi("IClaimSetupManager")).toEqual(songbird.interfaceAbis.IClaimSetupManager);
        expect(songbird.interfaceToAbi("ICollateralizable")).toEqual(songbird.interfaceAbis.ICollateralizable);
        expect(songbird.interfaceToAbi("IConfirmedBlockHeightExists")).toEqual(
            songbird.interfaceAbis.IConfirmedBlockHeightExists
        );
        expect(songbird.interfaceToAbi("IConfirmedBlockHeightExistsVerification")).toEqual(
            songbird.interfaceAbis.IConfirmedBlockHeightExistsVerification
        );
        expect(songbird.interfaceToAbi("ICoreVaultClient")).toEqual(songbird.interfaceAbis.ICoreVaultClient);
        expect(songbird.interfaceToAbi("ICoreVaultClientSettings")).toEqual(
            songbird.interfaceAbis.ICoreVaultClientSettings
        );
        expect(songbird.interfaceToAbi("IDelegationAccount")).toEqual(songbird.interfaceAbis.IDelegationAccount);
        expect(songbird.interfaceToAbi("IDiamondLoupe")).toEqual(songbird.interfaceAbis.IDiamondLoupe);
        expect(songbird.interfaceToAbi("IEVMTransaction")).toEqual(songbird.interfaceAbis.IEVMTransaction);
        expect(songbird.interfaceToAbi("IEVMTransactionVerification")).toEqual(
            songbird.interfaceAbis.IEVMTransactionVerification
        );
        expect(songbird.interfaceToAbi("IEntityManager")).toEqual(songbird.interfaceAbis.IEntityManager);
        expect(songbird.interfaceToAbi("IFastUpdateIncentiveManager")).toEqual(
            songbird.interfaceAbis.IFastUpdateIncentiveManager
        );
        expect(songbird.interfaceToAbi("IFastUpdater")).toEqual(songbird.interfaceAbis.IFastUpdater);
        expect(songbird.interfaceToAbi("IFastUpdatesConfiguration")).toEqual(
            songbird.interfaceAbis.IFastUpdatesConfiguration
        );
        expect(songbird.interfaceToAbi("IFdcHub")).toEqual(songbird.interfaceAbis.IFdcHub);
        expect(songbird.interfaceToAbi("IFdcInflationConfigurations")).toEqual(
            songbird.interfaceAbis.IFdcInflationConfigurations
        );
        expect(songbird.interfaceToAbi("IFdcRequestFeeConfigurations")).toEqual(
            songbird.interfaceAbis.IFdcRequestFeeConfigurations
        );
        expect(songbird.interfaceToAbi("IFdcVerification")).toEqual(songbird.interfaceAbis.IFdcVerification);
        expect(songbird.interfaceToAbi("IFeeCalculator")).toEqual(songbird.interfaceAbis.IFeeCalculator);
        expect(songbird.interfaceToAbi("IFlareAssetRegistry")).toEqual(songbird.interfaceAbis.IFlareAssetRegistry);
        expect(songbird.interfaceToAbi("IFlareContractRegistry")).toEqual(
            songbird.interfaceAbis.IFlareContractRegistry
        );
        expect(songbird.interfaceToAbi("IFlareDaemonize")).toEqual(songbird.interfaceAbis.IFlareDaemonize);
        expect(songbird.interfaceToAbi("IFlareSystemsCalculator")).toEqual(
            songbird.interfaceAbis.IFlareSystemsCalculator
        );
        expect(songbird.interfaceToAbi("IFlareSystemsManager")).toEqual(songbird.interfaceAbis.IFlareSystemsManager);
        expect(songbird.interfaceToAbi("IFtso")).toEqual(songbird.interfaceAbis.IFtso);
        expect(songbird.interfaceToAbi("IFtsoFeedDecimals")).toEqual(songbird.interfaceAbis.IFtsoFeedDecimals);
        expect(songbird.interfaceToAbi("IFtsoFeedIdConverter")).toEqual(songbird.interfaceAbis.IFtsoFeedIdConverter);
        expect(songbird.interfaceToAbi("IFtsoFeedPublisher")).toEqual(songbird.interfaceAbis.IFtsoFeedPublisher);
        expect(songbird.interfaceToAbi("IFtsoGenesis")).toEqual(songbird.interfaceAbis.IFtsoGenesis);
        expect(songbird.interfaceToAbi("IFtsoInflationConfigurations")).toEqual(
            songbird.interfaceAbis.IFtsoInflationConfigurations
        );
        expect(songbird.interfaceToAbi("IFtsoManager")).toEqual(songbird.interfaceAbis.IFtsoManager);
        expect(songbird.interfaceToAbi("IFtsoManagerGenesis")).toEqual(songbird.interfaceAbis.IFtsoManagerGenesis);
        expect(songbird.interfaceToAbi("IFtsoRegistry")).toEqual(songbird.interfaceAbis.IFtsoRegistry);
        expect(songbird.interfaceToAbi("IFtsoRegistryGenesis")).toEqual(songbird.interfaceAbis.IFtsoRegistryGenesis);
        expect(songbird.interfaceToAbi("IFtsoRewardManager")).toEqual(songbird.interfaceAbis.IFtsoRewardManager);
        expect(songbird.interfaceToAbi("IFtsoRewardOffersManager")).toEqual(
            songbird.interfaceAbis.IFtsoRewardOffersManager
        );
        expect(songbird.interfaceToAbi("IGenericRewardManager")).toEqual(songbird.interfaceAbis.IGenericRewardManager);
        expect(songbird.interfaceToAbi("IGovernanceSettings")).toEqual(songbird.interfaceAbis.IGovernanceSettings);
        expect(songbird.interfaceToAbi("IGovernanceVotePower")).toEqual(songbird.interfaceAbis.IGovernanceVotePower);
        expect(songbird.interfaceToAbi("IGovernor")).toEqual(songbird.interfaceAbis.IGovernor);
        expect(songbird.interfaceToAbi("IIAddressUpdatable")).toEqual(songbird.interfaceAbis.IIAddressUpdatable);
        expect(songbird.interfaceToAbi("IIAddressUpdater")).toEqual(songbird.interfaceAbis.IIAddressUpdater);
        expect(songbird.interfaceToAbi("IIClaimSetupManager")).toEqual(songbird.interfaceAbis.IIClaimSetupManager);
        expect(songbird.interfaceToAbi("IICleanable")).toEqual(songbird.interfaceAbis.IICleanable);
        expect(songbird.interfaceToAbi("IICleanupBlockNumberManager")).toEqual(
            songbird.interfaceAbis.IICleanupBlockNumberManager
        );
        expect(songbird.interfaceToAbi("IICustomFeed")).toEqual(songbird.interfaceAbis.IICustomFeed);
        expect(songbird.interfaceToAbi("IIERC20WithMetadata")).toEqual(songbird.interfaceAbis.IIERC20WithMetadata);
        expect(songbird.interfaceToAbi("IIEntityManager")).toEqual(songbird.interfaceAbis.IIEntityManager);
        expect(songbird.interfaceToAbi("IIFastUpdaterView")).toEqual(songbird.interfaceAbis.IIFastUpdaterView);
        expect(songbird.interfaceToAbi("IIFlareAssetRegistry")).toEqual(songbird.interfaceAbis.IIFlareAssetRegistry);
        expect(songbird.interfaceToAbi("IIFlareAssetRegistryProvider")).toEqual(
            songbird.interfaceAbis.IIFlareAssetRegistryProvider
        );
        expect(songbird.interfaceToAbi("IIFlareSystemsCalculator")).toEqual(
            songbird.interfaceAbis.IIFlareSystemsCalculator
        );
        expect(songbird.interfaceToAbi("IIFlareSystemsManager")).toEqual(songbird.interfaceAbis.IIFlareSystemsManager);
        expect(songbird.interfaceToAbi("IIFtso")).toEqual(songbird.interfaceAbis.IIFtso);
        expect(songbird.interfaceToAbi("IIFtsoFeedPublisher")).toEqual(songbird.interfaceAbis.IIFtsoFeedPublisher);
        expect(songbird.interfaceToAbi("IIFtsoManager")).toEqual(songbird.interfaceAbis.IIFtsoManager);
        expect(songbird.interfaceToAbi("IIFtsoManagerProxy")).toEqual(songbird.interfaceAbis.IIFtsoManagerProxy);
        expect(songbird.interfaceToAbi("IIFtsoManagerV1")).toEqual(songbird.interfaceAbis.IIFtsoManagerV1);
        expect(songbird.interfaceToAbi("IIFtsoRegistry")).toEqual(songbird.interfaceAbis.IIFtsoRegistry);
        expect(songbird.interfaceToAbi("IIFtsoRegistryV1")).toEqual(songbird.interfaceAbis.IIFtsoRegistryV1);
        expect(songbird.interfaceToAbi("IIFtsoRewardManager")).toEqual(songbird.interfaceAbis.IIFtsoRewardManager);
        expect(songbird.interfaceToAbi("IIGovernanceVotePower")).toEqual(songbird.interfaceAbis.IIGovernanceVotePower);
        expect(songbird.interfaceToAbi("IIGovernorProposer")).toEqual(songbird.interfaceAbis.IIGovernorProposer);
        expect(songbird.interfaceToAbi("IIInflationAllocation")).toEqual(songbird.interfaceAbis.IIInflationAllocation);
        expect(songbird.interfaceToAbi("IIInflationReceiver")).toEqual(songbird.interfaceAbis.IIInflationReceiver);
        expect(songbird.interfaceToAbi("IIInflationReceiverV1")).toEqual(songbird.interfaceAbis.IIInflationReceiverV1);
        expect(songbird.interfaceToAbi("IIInflationV1")).toEqual(songbird.interfaceAbis.IIInflationV1);
        expect(songbird.interfaceToAbi("IINodePossessionVerifier")).toEqual(
            songbird.interfaceAbis.IINodePossessionVerifier
        );
        expect(songbird.interfaceToAbi("IIPollingFoundation")).toEqual(songbird.interfaceAbis.IIPollingFoundation);
        expect(songbird.interfaceToAbi("IIPollingManagementGroup")).toEqual(
            songbird.interfaceAbis.IIPollingManagementGroup
        );
        expect(songbird.interfaceToAbi("IIPreInflationCalculation")).toEqual(
            songbird.interfaceAbis.IIPreInflationCalculation
        );
        expect(songbird.interfaceToAbi("IIPriceSubmitter")).toEqual(songbird.interfaceAbis.IIPriceSubmitter);
        expect(songbird.interfaceToAbi("IIPublicKeyVerifier")).toEqual(songbird.interfaceAbis.IIPublicKeyVerifier);
        expect(songbird.interfaceToAbi("IIRNat")).toEqual(songbird.interfaceAbis.IIRNat);
        expect(songbird.interfaceToAbi("IIRNatAccount")).toEqual(songbird.interfaceAbis.IIRNatAccount);
        expect(songbird.interfaceToAbi("IIRandomProvider")).toEqual(songbird.interfaceAbis.IIRandomProvider);
        expect(songbird.interfaceToAbi("IIRelay")).toEqual(songbird.interfaceAbis.IIRelay);
        expect(songbird.interfaceToAbi("IIRewardEpochSwitchoverTrigger")).toEqual(
            songbird.interfaceAbis.IIRewardEpochSwitchoverTrigger
        );
        expect(songbird.interfaceToAbi("IIRewardManager")).toEqual(songbird.interfaceAbis.IIRewardManager);
        expect(songbird.interfaceToAbi("IISubmission")).toEqual(songbird.interfaceAbis.IISubmission);
        expect(songbird.interfaceToAbi("IISupply")).toEqual(songbird.interfaceAbis.IISupply);
        expect(songbird.interfaceToAbi("IITokenPool")).toEqual(songbird.interfaceAbis.IITokenPool);
        expect(songbird.interfaceToAbi("IIVPContract")).toEqual(songbird.interfaceAbis.IIVPContract);
        expect(songbird.interfaceToAbi("IIVPToken")).toEqual(songbird.interfaceAbis.IIVPToken);
        expect(songbird.interfaceToAbi("IIVoterRegistrationTrigger")).toEqual(
            songbird.interfaceAbis.IIVoterRegistrationTrigger
        );
        expect(songbird.interfaceToAbi("IIVoterRegistry")).toEqual(songbird.interfaceAbis.IIVoterRegistry);
        expect(songbird.interfaceToAbi("IIVoterWhitelister")).toEqual(songbird.interfaceAbis.IIVoterWhitelister);
        expect(songbird.interfaceToAbi("IIncreaseManager")).toEqual(songbird.interfaceAbis.IIncreaseManager);
        expect(songbird.interfaceToAbi("IInflationGenesis")).toEqual(songbird.interfaceAbis.IInflationGenesis);
        expect(songbird.interfaceToAbi("IJsonApi")).toEqual(songbird.interfaceAbis.IJsonApi);
        expect(songbird.interfaceToAbi("IJsonApiVerification")).toEqual(songbird.interfaceAbis.IJsonApiVerification);
        expect(songbird.interfaceToAbi("IPayment")).toEqual(songbird.interfaceAbis.IPayment);
        expect(songbird.interfaceToAbi("IPaymentVerification")).toEqual(songbird.interfaceAbis.IPaymentVerification);
        expect(songbird.interfaceToAbi("IPollingFtso")).toEqual(songbird.interfaceAbis.IPollingFtso);
        expect(songbird.interfaceToAbi("IPollingManagementGroup")).toEqual(
            songbird.interfaceAbis.IPollingManagementGroup
        );
        expect(songbird.interfaceToAbi("IPriceSubmitter")).toEqual(songbird.interfaceAbis.IPriceSubmitter);
        expect(songbird.interfaceToAbi("IRNat")).toEqual(songbird.interfaceAbis.IRNat);
        expect(songbird.interfaceToAbi("IRNatAccount")).toEqual(songbird.interfaceAbis.IRNatAccount);
        expect(songbird.interfaceToAbi("IRandomProvider")).toEqual(songbird.interfaceAbis.IRandomProvider);
        expect(songbird.interfaceToAbi("IRedemptionTimeExtension")).toEqual(
            songbird.interfaceAbis.IRedemptionTimeExtension
        );
        expect(songbird.interfaceToAbi("IReferencedPaymentNonexistence")).toEqual(
            songbird.interfaceAbis.IReferencedPaymentNonexistence
        );
        expect(songbird.interfaceToAbi("IReferencedPaymentNonexistenceVerification")).toEqual(
            songbird.interfaceAbis.IReferencedPaymentNonexistenceVerification
        );
        expect(songbird.interfaceToAbi("IRelay")).toEqual(songbird.interfaceAbis.IRelay);
        expect(songbird.interfaceToAbi("IRewardManager")).toEqual(songbird.interfaceAbis.IRewardManager);
        expect(songbird.interfaceToAbi("ISubmission")).toEqual(songbird.interfaceAbis.ISubmission);
        expect(songbird.interfaceToAbi("ITypeTemplate")).toEqual(songbird.interfaceAbis.ITypeTemplate);
        expect(songbird.interfaceToAbi("ITypeTemplateVerification")).toEqual(
            songbird.interfaceAbis.ITypeTemplateVerification
        );
        expect(songbird.interfaceToAbi("IUpdateValidators")).toEqual(songbird.interfaceAbis.IUpdateValidators);
        expect(songbird.interfaceToAbi("IVPContractEvents")).toEqual(songbird.interfaceAbis.IVPContractEvents);
        expect(songbird.interfaceToAbi("IVPToken")).toEqual(songbird.interfaceAbis.IVPToken);
        expect(songbird.interfaceToAbi("IValidatorRewardOffersManager")).toEqual(
            songbird.interfaceAbis.IValidatorRewardOffersManager
        );
        expect(songbird.interfaceToAbi("IVoterPreRegistry")).toEqual(songbird.interfaceAbis.IVoterPreRegistry);
        expect(songbird.interfaceToAbi("IVoterRegistry")).toEqual(songbird.interfaceAbis.IVoterRegistry);
        expect(songbird.interfaceToAbi("IVoterWhitelister")).toEqual(songbird.interfaceAbis.IVoterWhitelister);
        expect(songbird.interfaceToAbi("IWNat")).toEqual(songbird.interfaceAbis.IWNat);
        expect(songbird.interfaceToAbi("IWNatDelegationFee")).toEqual(songbird.interfaceAbis.IWNatDelegationFee);
        expect(songbird.interfaceToAbi("IWeb2Json")).toEqual(songbird.interfaceAbis.IWeb2Json);
        expect(songbird.interfaceToAbi("IWeb2JsonVerification")).toEqual(songbird.interfaceAbis.IWeb2JsonVerification);
        expect(songbird.interfaceToAbi("ProtocolsV2Interface")).toEqual(songbird.interfaceAbis.ProtocolsV2Interface);
        expect(songbird.interfaceToAbi("RandomNumberV2Interface")).toEqual(
            songbird.interfaceAbis.RandomNumberV2Interface
        );
        expect(songbird.interfaceToAbi("RedemptionRequestInfo")).toEqual(songbird.interfaceAbis.RedemptionRequestInfo);
        expect(songbird.interfaceToAbi("RedemptionTicketInfo")).toEqual(songbird.interfaceAbis.RedemptionTicketInfo);
        expect(songbird.interfaceToAbi("RewardsV2Interface")).toEqual(songbird.interfaceAbis.RewardsV2Interface);
        expect(songbird.interfaceToAbi("TestFtsoV2Interface")).toEqual(songbird.interfaceAbis.TestFtsoV2Interface);
    });
});

// This file was generated automatically. Do not edit manually.
