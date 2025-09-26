// This file was generated automatically. Do not edit manually.

import { coston } from "../index";
import { nameToAbi, interfaceToAbi } from "../index";

describe("Testing coston ABIs", () => {
    test("Interface ABIs exist for all contracts", () => {
        expect(coston.interfaceAbis.AgentInfo).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.AgentSettings).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.AssetManagerSettings).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.AvailableAgentInfo).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.CollateralReservationInfo).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.CollateralType).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.ContractRegistry).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.EmergencyPause).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.FtsoV2Interface).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IAddressValidity).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IAddressValidityVerification).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IAgentAlwaysAllowedMinters).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IAgentOwnerRegistry).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IAgentPing).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IAssetManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IAssetManagerController).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IAssetManagerEvents).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IBalanceDecreasingTransaction).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IBalanceDecreasingTransactionVerification).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.ICChainStake).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.ICChainVotePower).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IClaimSetupManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.ICollateralizable).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IConfirmedBlockHeightExists).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IConfirmedBlockHeightExistsVerification).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.ICoreVaultClient).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.ICoreVaultClientSettings).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IDelegationAccount).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IDiamondLoupe).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IEVMTransaction).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IEVMTransactionVerification).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IEntityManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFastUpdateIncentiveManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFastUpdater).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFastUpdatesConfiguration).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFdcHub).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFdcInflationConfigurations).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFdcRequestFeeConfigurations).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFdcVerification).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFeeCalculator).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFlareAssetRegistry).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFlareContractRegistry).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFlareDaemonize).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFlareSystemsCalculator).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFlareSystemsManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFtso).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFtsoFeedDecimals).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFtsoFeedIdConverter).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFtsoFeedPublisher).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFtsoGenesis).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFtsoInflationConfigurations).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFtsoManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFtsoManagerGenesis).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFtsoRegistry).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFtsoRegistryGenesis).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFtsoRewardManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IFtsoRewardOffersManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IGenericRewardManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IGovernanceSettings).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IGovernanceVotePower).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IGovernor).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIAddressUpdatable).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIAddressUpdater).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIClaimSetupManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IICleanable).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IICleanupBlockNumberManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IICustomFeed).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIERC20WithMetadata).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIEntityManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIFastUpdaterView).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIFlareAssetRegistry).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIFlareAssetRegistryProvider).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIFlareSystemsCalculator).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIFlareSystemsManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIFtso).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIFtsoFeedPublisher).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIFtsoManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIFtsoManagerProxy).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIFtsoManagerV1).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIFtsoRegistry).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIFtsoRegistryV1).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIFtsoRewardManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIGovernanceVotePower).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIGovernorProposer).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIInflationAllocation).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIInflationReceiver).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIInflationReceiverV1).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIInflationV1).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IINodePossessionVerifier).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIPollingFoundation).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIPollingManagementGroup).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIPreInflationCalculation).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIPriceSubmitter).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIPublicKeyVerifier).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIRNat).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIRNatAccount).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIRandomProvider).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIRelay).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIRewardEpochSwitchoverTrigger).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIRewardManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IISubmission).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IISupply).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IITokenPool).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIVPContract).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIVPToken).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIVoterRegistrationTrigger).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIVoterRegistry).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIVoterWhitelister).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IIncreaseManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IInflationGenesis).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IJsonApi).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IJsonApiVerification).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IPayment).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IPaymentVerification).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IPollingFtso).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IPollingManagementGroup).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IPriceSubmitter).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IRNat).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IRNatAccount).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IRandomProvider).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IRedemptionTimeExtension).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IReferencedPaymentNonexistence).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IReferencedPaymentNonexistenceVerification).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IRelay).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IRewardManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.ISubmission).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.ITypeTemplate).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.ITypeTemplateVerification).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IUpdateValidators).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IVPContractEvents).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IVPToken).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IValidatorRewardOffersManager).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IVoterPreRegistry).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IVoterRegistry).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IVoterWhitelister).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IWNat).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IWNatDelegationFee).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IWeb2Json).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.IWeb2JsonVerification).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.ProtocolsV2Interface).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.RandomNumberV2Interface).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.RedemptionRequestInfo).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.RedemptionTicketInfo).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.RewardsV2Interface).toEqual(expect.any(Array));
        expect(coston.interfaceAbis.TestFtsoV2Interface).toEqual(expect.any(Array));
    });

    test("Contract names are set for all products", () => {
        expect(coston.products.AssetManagerController.name).toEqual("AssetManagerController");
        expect(coston.products.AssetManagerFXRP.name).toEqual("AssetManagerFXRP");
        expect(coston.products.ClaimSetupManager.name).toEqual("ClaimSetupManager");
        expect(coston.products.EntityManager.name).toEqual("EntityManager");
        expect(coston.products.FastUpdateIncentiveManager.name).toEqual("FastUpdateIncentiveManager");
        expect(coston.products.FastUpdater.name).toEqual("FastUpdater");
        expect(coston.products.FastUpdatesConfiguration.name).toEqual("FastUpdatesConfiguration");
        expect(coston.products.FdcHub.name).toEqual("FdcHub");
        expect(coston.products.FdcRequestFeeConfigurations.name).toEqual("FdcRequestFeeConfigurations");
        expect(coston.products.FdcVerification.name).toEqual("FdcVerification");
        expect(coston.products.FeeCalculator.name).toEqual("FeeCalculator");
        expect(coston.products.FlareAssetRegistry.name).toEqual("FlareAssetRegistry");
        expect(coston.products.FlareContractRegistry.name).toEqual("FlareContractRegistry");
        expect(coston.products.FlareSystemsCalculator.name).toEqual("FlareSystemsCalculator");
        expect(coston.products.FlareSystemsManager.name).toEqual("FlareSystemsManager");
        expect(coston.products.FtsoFeedDecimals.name).toEqual("FtsoFeedDecimals");
        expect(coston.products.FtsoFeedIdConverter.name).toEqual("FtsoFeedIdConverter");
        expect(coston.products.FtsoFeedPublisher.name).toEqual("FtsoFeedPublisher");
        expect(coston.products.FtsoInflationConfigurations.name).toEqual("FtsoInflationConfigurations");
        expect(coston.products.FtsoManager.name).toEqual("FtsoManager");
        expect(coston.products.FtsoRegistry.name).toEqual("FtsoRegistry");
        expect(coston.products.FtsoRewardManager.name).toEqual("FtsoRewardManager");
        expect(coston.products.FtsoRewardOffersManager.name).toEqual("FtsoRewardOffersManager");
        expect(coston.products.FtsoV2.name).toEqual("FtsoV2");
        expect(coston.products.GovernanceSettings.name).toEqual("GovernanceSettings");
        expect(coston.products.GovernanceVotePower.name).toEqual("GovernanceVotePower");
        expect(coston.products.JsonApiVerification.name).toEqual("JsonApiVerification");
        expect(coston.products.PriceSubmitter.name).toEqual("PriceSubmitter");
        expect(coston.products.ProtocolsV2.name).toEqual("ProtocolsV2");
        expect(coston.products.RandomNumberV2.name).toEqual("RandomNumberV2");
        expect(coston.products.Relay.name).toEqual("Relay");
        expect(coston.products.RewardManager.name).toEqual("RewardManager");
        expect(coston.products.RewardsV2.name).toEqual("RewardsV2");
        expect(coston.products.Submission.name).toEqual("Submission");
        expect(coston.products.TestFtsoV2.name).toEqual("TestFtsoV2");
        expect(coston.products.VoterRegistry.name).toEqual("VoterRegistry");
        expect(coston.products.VoterWhitelister.name).toEqual("VoterWhitelister");
        expect(coston.products.WNat.name).toEqual("WNat");
        expect(coston.products.WNatDelegationFee.name).toEqual("WNatDelegationFee");
    });

    test("Interface names are set for all products", () => {
        expect(coston.products.AssetManagerController.interface).toEqual("IAssetManagerController");
        expect(coston.products.AssetManagerFXRP.interface).toEqual("IAssetManager");
        expect(coston.products.ClaimSetupManager.interface).toEqual("IClaimSetupManager");
        expect(coston.products.EntityManager.interface).toEqual("IEntityManager");
        expect(coston.products.FastUpdateIncentiveManager.interface).toEqual("IFastUpdateIncentiveManager");
        expect(coston.products.FastUpdater.interface).toEqual("IFastUpdater");
        expect(coston.products.FastUpdatesConfiguration.interface).toEqual("IFastUpdatesConfiguration");
        expect(coston.products.FdcHub.interface).toEqual("IFdcHub");
        expect(coston.products.FdcRequestFeeConfigurations.interface).toEqual("IFdcRequestFeeConfigurations");
        expect(coston.products.FdcVerification.interface).toEqual("IFdcVerification");
        expect(coston.products.FeeCalculator.interface).toEqual("IFeeCalculator");
        expect(coston.products.FlareAssetRegistry.interface).toEqual("IFlareAssetRegistry");
        expect(coston.products.FlareContractRegistry.interface).toEqual("IFlareContractRegistry");
        expect(coston.products.FlareSystemsCalculator.interface).toEqual("IFlareSystemsCalculator");
        expect(coston.products.FlareSystemsManager.interface).toEqual("IFlareSystemsManager");
        expect(coston.products.FtsoFeedDecimals.interface).toEqual("IFtsoFeedDecimals");
        expect(coston.products.FtsoFeedIdConverter.interface).toEqual("IFtsoFeedIdConverter");
        expect(coston.products.FtsoFeedPublisher.interface).toEqual("IFtsoFeedPublisher");
        expect(coston.products.FtsoInflationConfigurations.interface).toEqual("IFtsoInflationConfigurations");
        expect(coston.products.FtsoManager.interface).toEqual("IFtsoManager");
        expect(coston.products.FtsoRegistry.interface).toEqual("IFtsoRegistry");
        expect(coston.products.FtsoRewardManager.interface).toEqual("IFtsoRewardManager");
        expect(coston.products.FtsoRewardOffersManager.interface).toEqual("IFtsoRewardOffersManager");
        expect(coston.products.FtsoV2.interface).toEqual("FtsoV2Interface");
        expect(coston.products.GovernanceSettings.interface).toEqual("IGovernanceSettings");
        expect(coston.products.GovernanceVotePower.interface).toEqual("IGovernanceVotePower");
        expect(coston.products.JsonApiVerification.interface).toEqual("IJsonApiVerification");
        expect(coston.products.PriceSubmitter.interface).toEqual("IPriceSubmitter");
        expect(coston.products.ProtocolsV2.interface).toEqual("ProtocolsV2Interface");
        expect(coston.products.RandomNumberV2.interface).toEqual("RandomNumberV2Interface");
        expect(coston.products.Relay.interface).toEqual("IRelay");
        expect(coston.products.RewardManager.interface).toEqual("IRewardManager");
        expect(coston.products.RewardsV2.interface).toEqual("RewardsV2Interface");
        expect(coston.products.Submission.interface).toEqual("ISubmission");
        expect(coston.products.TestFtsoV2.interface).toEqual("TestFtsoV2Interface");
        expect(coston.products.VoterRegistry.interface).toEqual("IVoterRegistry");
        expect(coston.products.VoterWhitelister.interface).toEqual("IVoterWhitelister");
        expect(coston.products.WNat.interface).toEqual("IWNat");
        expect(coston.products.WNatDelegationFee.interface).toEqual("IWNatDelegationFee");
    });

    test("Registry names are set for all products", () => {
        expect(coston.products.AssetManagerController.registry).toEqual("AssetManagerController");
        expect(coston.products.AssetManagerFXRP.registry).toEqual("AssetManagerFXRP");
        expect(coston.products.ClaimSetupManager.registry).toEqual("ClaimSetupManager");
        expect(coston.products.EntityManager.registry).toEqual("EntityManager");
        expect(coston.products.FastUpdateIncentiveManager.registry).toEqual("FastUpdateIncentiveManager");
        expect(coston.products.FastUpdater.registry).toEqual("FastUpdater");
        expect(coston.products.FastUpdatesConfiguration.registry).toEqual("FastUpdatesConfiguration");
        expect(coston.products.FdcHub.registry).toEqual("FdcHub");
        expect(coston.products.FdcRequestFeeConfigurations.registry).toEqual("FdcRequestFeeConfigurations");
        expect(coston.products.FdcVerification.registry).toEqual("FdcVerification");
        expect(coston.products.FeeCalculator.registry).toEqual("FeeCalculator");
        expect(coston.products.FlareAssetRegistry.registry).toEqual("FlareAssetRegistry");
        expect(coston.products.FlareContractRegistry.registry).toEqual("FlareContractRegistry");
        expect(coston.products.FlareSystemsCalculator.registry).toEqual("FlareSystemsCalculator");
        expect(coston.products.FlareSystemsManager.registry).toEqual("FlareSystemsManager");
        expect(coston.products.FtsoFeedDecimals.registry).toEqual("FtsoFeedDecimals");
        expect(coston.products.FtsoFeedIdConverter.registry).toEqual("FtsoFeedIdConverter");
        expect(coston.products.FtsoFeedPublisher.registry).toEqual("FtsoFeedPublisher");
        expect(coston.products.FtsoInflationConfigurations.registry).toEqual("FtsoInflationConfigurations");
        expect(coston.products.FtsoManager.registry).toEqual("FtsoManager");
        expect(coston.products.FtsoRegistry.registry).toEqual("FtsoRegistry");
        expect(coston.products.FtsoRewardManager.registry).toEqual("FtsoRewardManager");
        expect(coston.products.FtsoRewardOffersManager.registry).toEqual("FtsoRewardOffersManager");
        expect(coston.products.FtsoV2.registry).toEqual("FtsoV2");
        expect(coston.products.GovernanceSettings.registry).toEqual("GovernanceSettings");
        expect(coston.products.GovernanceVotePower.registry).toEqual("GovernanceVotePower");
        expect(coston.products.JsonApiVerification.registry).toEqual("JsonApiVerification");
        expect(coston.products.PriceSubmitter.registry).toEqual("PriceSubmitter");
        expect(coston.products.ProtocolsV2.registry).toEqual("ProtocolsV2");
        expect(coston.products.RandomNumberV2.registry).toEqual("RandomNumberV2");
        expect(coston.products.Relay.registry).toEqual("Relay");
        expect(coston.products.RewardManager.registry).toEqual("RewardManager");
        expect(coston.products.RewardsV2.registry).toEqual("RewardsV2");
        expect(coston.products.Submission.registry).toEqual("Submission");
        expect(coston.products.TestFtsoV2.registry).toEqual("FtsoV2");
        expect(coston.products.VoterRegistry.registry).toEqual("VoterRegistry");
        expect(coston.products.VoterWhitelister.registry).toEqual("VoterWhitelister");
        expect(coston.products.WNat.registry).toEqual("WNat");
        expect(coston.products.WNatDelegationFee.registry).toEqual("WNatDelegationFee");
    });

    test("ABIs exist for all products", () => {
        expect(coston.products.AssetManagerController.abi).toEqual(expect.any(Array));
        expect(coston.products.AssetManagerFXRP.abi).toEqual(expect.any(Array));
        expect(coston.products.ClaimSetupManager.abi).toEqual(expect.any(Array));
        expect(coston.products.EntityManager.abi).toEqual(expect.any(Array));
        expect(coston.products.FastUpdateIncentiveManager.abi).toEqual(expect.any(Array));
        expect(coston.products.FastUpdater.abi).toEqual(expect.any(Array));
        expect(coston.products.FastUpdatesConfiguration.abi).toEqual(expect.any(Array));
        expect(coston.products.FdcHub.abi).toEqual(expect.any(Array));
        expect(coston.products.FdcRequestFeeConfigurations.abi).toEqual(expect.any(Array));
        expect(coston.products.FdcVerification.abi).toEqual(expect.any(Array));
        expect(coston.products.FeeCalculator.abi).toEqual(expect.any(Array));
        expect(coston.products.FlareAssetRegistry.abi).toEqual(expect.any(Array));
        expect(coston.products.FlareContractRegistry.abi).toEqual(expect.any(Array));
        expect(coston.products.FlareSystemsCalculator.abi).toEqual(expect.any(Array));
        expect(coston.products.FlareSystemsManager.abi).toEqual(expect.any(Array));
        expect(coston.products.FtsoFeedDecimals.abi).toEqual(expect.any(Array));
        expect(coston.products.FtsoFeedIdConverter.abi).toEqual(expect.any(Array));
        expect(coston.products.FtsoFeedPublisher.abi).toEqual(expect.any(Array));
        expect(coston.products.FtsoInflationConfigurations.abi).toEqual(expect.any(Array));
        expect(coston.products.FtsoManager.abi).toEqual(expect.any(Array));
        expect(coston.products.FtsoRegistry.abi).toEqual(expect.any(Array));
        expect(coston.products.FtsoRewardManager.abi).toEqual(expect.any(Array));
        expect(coston.products.FtsoRewardOffersManager.abi).toEqual(expect.any(Array));
        expect(coston.products.FtsoV2.abi).toEqual(expect.any(Array));
        expect(coston.products.GovernanceSettings.abi).toEqual(expect.any(Array));
        expect(coston.products.GovernanceVotePower.abi).toEqual(expect.any(Array));
        expect(coston.products.JsonApiVerification.abi).toEqual(expect.any(Array));
        expect(coston.products.PriceSubmitter.abi).toEqual(expect.any(Array));
        expect(coston.products.ProtocolsV2.abi).toEqual(expect.any(Array));
        expect(coston.products.RandomNumberV2.abi).toEqual(expect.any(Array));
        expect(coston.products.Relay.abi).toEqual(expect.any(Array));
        expect(coston.products.RewardManager.abi).toEqual(expect.any(Array));
        expect(coston.products.RewardsV2.abi).toEqual(expect.any(Array));
        expect(coston.products.Submission.abi).toEqual(expect.any(Array));
        expect(coston.products.TestFtsoV2.abi).toEqual(expect.any(Array));
        expect(coston.products.VoterRegistry.abi).toEqual(expect.any(Array));
        expect(coston.products.VoterWhitelister.abi).toEqual(expect.any(Array));
        expect(coston.products.WNat.abi).toEqual(expect.any(Array));
        expect(coston.products.WNatDelegationFee.abi).toEqual(expect.any(Array));
    });

    test("nameToAbi finds every contract", () => {
        expect(nameToAbi("AssetManagerController", "coston")).toEqual(coston.interfaceAbis.IAssetManagerController);
        expect(nameToAbi("AssetManagerFXRP", "coston")).toEqual(coston.interfaceAbis.IAssetManager);
        expect(nameToAbi("ClaimSetupManager", "coston")).toEqual(coston.interfaceAbis.IClaimSetupManager);
        expect(nameToAbi("EntityManager", "coston")).toEqual(coston.interfaceAbis.IEntityManager);
        expect(nameToAbi("FastUpdateIncentiveManager", "coston")).toEqual(
            coston.interfaceAbis.IFastUpdateIncentiveManager
        );
        expect(nameToAbi("FastUpdater", "coston")).toEqual(coston.interfaceAbis.IFastUpdater);
        expect(nameToAbi("FastUpdatesConfiguration", "coston")).toEqual(coston.interfaceAbis.IFastUpdatesConfiguration);
        expect(nameToAbi("FdcHub", "coston")).toEqual(coston.interfaceAbis.IFdcHub);
        expect(nameToAbi("FdcRequestFeeConfigurations", "coston")).toEqual(
            coston.interfaceAbis.IFdcRequestFeeConfigurations
        );
        expect(nameToAbi("FdcVerification", "coston")).toEqual(coston.interfaceAbis.IFdcVerification);
        expect(nameToAbi("FeeCalculator", "coston")).toEqual(coston.interfaceAbis.IFeeCalculator);
        expect(nameToAbi("FlareAssetRegistry", "coston")).toEqual(coston.interfaceAbis.IFlareAssetRegistry);
        expect(nameToAbi("FlareContractRegistry", "coston")).toEqual(coston.interfaceAbis.IFlareContractRegistry);
        expect(nameToAbi("FlareSystemsCalculator", "coston")).toEqual(coston.interfaceAbis.IFlareSystemsCalculator);
        expect(nameToAbi("FlareSystemsManager", "coston")).toEqual(coston.interfaceAbis.IFlareSystemsManager);
        expect(nameToAbi("FtsoFeedDecimals", "coston")).toEqual(coston.interfaceAbis.IFtsoFeedDecimals);
        expect(nameToAbi("FtsoFeedIdConverter", "coston")).toEqual(coston.interfaceAbis.IFtsoFeedIdConverter);
        expect(nameToAbi("FtsoFeedPublisher", "coston")).toEqual(coston.interfaceAbis.IFtsoFeedPublisher);
        expect(nameToAbi("FtsoInflationConfigurations", "coston")).toEqual(
            coston.interfaceAbis.IFtsoInflationConfigurations
        );
        expect(nameToAbi("FtsoManager", "coston")).toEqual(coston.interfaceAbis.IFtsoManager);
        expect(nameToAbi("FtsoRegistry", "coston")).toEqual(coston.interfaceAbis.IFtsoRegistry);
        expect(nameToAbi("FtsoRewardManager", "coston")).toEqual(coston.interfaceAbis.IFtsoRewardManager);
        expect(nameToAbi("FtsoRewardOffersManager", "coston")).toEqual(coston.interfaceAbis.IFtsoRewardOffersManager);
        expect(nameToAbi("FtsoV2", "coston")).toEqual(coston.interfaceAbis.FtsoV2Interface);
        expect(nameToAbi("GovernanceSettings", "coston")).toEqual(coston.interfaceAbis.IGovernanceSettings);
        expect(nameToAbi("GovernanceVotePower", "coston")).toEqual(coston.interfaceAbis.IGovernanceVotePower);
        expect(nameToAbi("JsonApiVerification", "coston")).toEqual(coston.interfaceAbis.IJsonApiVerification);
        expect(nameToAbi("PriceSubmitter", "coston")).toEqual(coston.interfaceAbis.IPriceSubmitter);
        expect(nameToAbi("ProtocolsV2", "coston")).toEqual(coston.interfaceAbis.ProtocolsV2Interface);
        expect(nameToAbi("RandomNumberV2", "coston")).toEqual(coston.interfaceAbis.RandomNumberV2Interface);
        expect(nameToAbi("Relay", "coston")).toEqual(coston.interfaceAbis.IRelay);
        expect(nameToAbi("RewardManager", "coston")).toEqual(coston.interfaceAbis.IRewardManager);
        expect(nameToAbi("RewardsV2", "coston")).toEqual(coston.interfaceAbis.RewardsV2Interface);
        expect(nameToAbi("Submission", "coston")).toEqual(coston.interfaceAbis.ISubmission);
        expect(nameToAbi("TestFtsoV2", "coston")).toEqual(coston.interfaceAbis.TestFtsoV2Interface);
        expect(nameToAbi("VoterRegistry", "coston")).toEqual(coston.interfaceAbis.IVoterRegistry);
        expect(nameToAbi("VoterWhitelister", "coston")).toEqual(coston.interfaceAbis.IVoterWhitelister);
        expect(nameToAbi("WNat", "coston")).toEqual(coston.interfaceAbis.IWNat);
        expect(nameToAbi("WNatDelegationFee", "coston")).toEqual(coston.interfaceAbis.IWNatDelegationFee);

        expect(coston.nameToAbi("AssetManagerController")).toEqual(coston.interfaceAbis.IAssetManagerController);
        expect(coston.nameToAbi("AssetManagerFXRP")).toEqual(coston.interfaceAbis.IAssetManager);
        expect(coston.nameToAbi("ClaimSetupManager")).toEqual(coston.interfaceAbis.IClaimSetupManager);
        expect(coston.nameToAbi("EntityManager")).toEqual(coston.interfaceAbis.IEntityManager);
        expect(coston.nameToAbi("FastUpdateIncentiveManager")).toEqual(
            coston.interfaceAbis.IFastUpdateIncentiveManager
        );
        expect(coston.nameToAbi("FastUpdater")).toEqual(coston.interfaceAbis.IFastUpdater);
        expect(coston.nameToAbi("FastUpdatesConfiguration")).toEqual(coston.interfaceAbis.IFastUpdatesConfiguration);
        expect(coston.nameToAbi("FdcHub")).toEqual(coston.interfaceAbis.IFdcHub);
        expect(coston.nameToAbi("FdcRequestFeeConfigurations")).toEqual(
            coston.interfaceAbis.IFdcRequestFeeConfigurations
        );
        expect(coston.nameToAbi("FdcVerification")).toEqual(coston.interfaceAbis.IFdcVerification);
        expect(coston.nameToAbi("FeeCalculator")).toEqual(coston.interfaceAbis.IFeeCalculator);
        expect(coston.nameToAbi("FlareAssetRegistry")).toEqual(coston.interfaceAbis.IFlareAssetRegistry);
        expect(coston.nameToAbi("FlareContractRegistry")).toEqual(coston.interfaceAbis.IFlareContractRegistry);
        expect(coston.nameToAbi("FlareSystemsCalculator")).toEqual(coston.interfaceAbis.IFlareSystemsCalculator);
        expect(coston.nameToAbi("FlareSystemsManager")).toEqual(coston.interfaceAbis.IFlareSystemsManager);
        expect(coston.nameToAbi("FtsoFeedDecimals")).toEqual(coston.interfaceAbis.IFtsoFeedDecimals);
        expect(coston.nameToAbi("FtsoFeedIdConverter")).toEqual(coston.interfaceAbis.IFtsoFeedIdConverter);
        expect(coston.nameToAbi("FtsoFeedPublisher")).toEqual(coston.interfaceAbis.IFtsoFeedPublisher);
        expect(coston.nameToAbi("FtsoInflationConfigurations")).toEqual(
            coston.interfaceAbis.IFtsoInflationConfigurations
        );
        expect(coston.nameToAbi("FtsoManager")).toEqual(coston.interfaceAbis.IFtsoManager);
        expect(coston.nameToAbi("FtsoRegistry")).toEqual(coston.interfaceAbis.IFtsoRegistry);
        expect(coston.nameToAbi("FtsoRewardManager")).toEqual(coston.interfaceAbis.IFtsoRewardManager);
        expect(coston.nameToAbi("FtsoRewardOffersManager")).toEqual(coston.interfaceAbis.IFtsoRewardOffersManager);
        expect(coston.nameToAbi("FtsoV2")).toEqual(coston.interfaceAbis.FtsoV2Interface);
        expect(coston.nameToAbi("GovernanceSettings")).toEqual(coston.interfaceAbis.IGovernanceSettings);
        expect(coston.nameToAbi("GovernanceVotePower")).toEqual(coston.interfaceAbis.IGovernanceVotePower);
        expect(coston.nameToAbi("JsonApiVerification")).toEqual(coston.interfaceAbis.IJsonApiVerification);
        expect(coston.nameToAbi("PriceSubmitter")).toEqual(coston.interfaceAbis.IPriceSubmitter);
        expect(coston.nameToAbi("ProtocolsV2")).toEqual(coston.interfaceAbis.ProtocolsV2Interface);
        expect(coston.nameToAbi("RandomNumberV2")).toEqual(coston.interfaceAbis.RandomNumberV2Interface);
        expect(coston.nameToAbi("Relay")).toEqual(coston.interfaceAbis.IRelay);
        expect(coston.nameToAbi("RewardManager")).toEqual(coston.interfaceAbis.IRewardManager);
        expect(coston.nameToAbi("RewardsV2")).toEqual(coston.interfaceAbis.RewardsV2Interface);
        expect(coston.nameToAbi("Submission")).toEqual(coston.interfaceAbis.ISubmission);
        expect(coston.nameToAbi("TestFtsoV2")).toEqual(coston.interfaceAbis.TestFtsoV2Interface);
        expect(coston.nameToAbi("VoterRegistry")).toEqual(coston.interfaceAbis.IVoterRegistry);
        expect(coston.nameToAbi("VoterWhitelister")).toEqual(coston.interfaceAbis.IVoterWhitelister);
        expect(coston.nameToAbi("WNat")).toEqual(coston.interfaceAbis.IWNat);
        expect(coston.nameToAbi("WNatDelegationFee")).toEqual(coston.interfaceAbis.IWNatDelegationFee);
    });

    test("interfaceToAbi finds every contract", () => {
        expect(interfaceToAbi("AgentInfo", "coston")).toEqual(coston.interfaceAbis.AgentInfo);
        expect(interfaceToAbi("AgentSettings", "coston")).toEqual(coston.interfaceAbis.AgentSettings);
        expect(interfaceToAbi("AssetManagerSettings", "coston")).toEqual(coston.interfaceAbis.AssetManagerSettings);
        expect(interfaceToAbi("AvailableAgentInfo", "coston")).toEqual(coston.interfaceAbis.AvailableAgentInfo);
        expect(interfaceToAbi("CollateralReservationInfo", "coston")).toEqual(
            coston.interfaceAbis.CollateralReservationInfo
        );
        expect(interfaceToAbi("CollateralType", "coston")).toEqual(coston.interfaceAbis.CollateralType);
        expect(interfaceToAbi("ContractRegistry", "coston")).toEqual(coston.interfaceAbis.ContractRegistry);
        expect(interfaceToAbi("EmergencyPause", "coston")).toEqual(coston.interfaceAbis.EmergencyPause);
        expect(interfaceToAbi("FtsoV2Interface", "coston")).toEqual(coston.interfaceAbis.FtsoV2Interface);
        expect(interfaceToAbi("IAddressValidity", "coston")).toEqual(coston.interfaceAbis.IAddressValidity);
        expect(interfaceToAbi("IAddressValidityVerification", "coston")).toEqual(
            coston.interfaceAbis.IAddressValidityVerification
        );
        expect(interfaceToAbi("IAgentAlwaysAllowedMinters", "coston")).toEqual(
            coston.interfaceAbis.IAgentAlwaysAllowedMinters
        );
        expect(interfaceToAbi("IAgentOwnerRegistry", "coston")).toEqual(coston.interfaceAbis.IAgentOwnerRegistry);
        expect(interfaceToAbi("IAgentPing", "coston")).toEqual(coston.interfaceAbis.IAgentPing);
        expect(interfaceToAbi("IAssetManager", "coston")).toEqual(coston.interfaceAbis.IAssetManager);
        expect(interfaceToAbi("IAssetManagerController", "coston")).toEqual(
            coston.interfaceAbis.IAssetManagerController
        );
        expect(interfaceToAbi("IAssetManagerEvents", "coston")).toEqual(coston.interfaceAbis.IAssetManagerEvents);
        expect(interfaceToAbi("IBalanceDecreasingTransaction", "coston")).toEqual(
            coston.interfaceAbis.IBalanceDecreasingTransaction
        );
        expect(interfaceToAbi("IBalanceDecreasingTransactionVerification", "coston")).toEqual(
            coston.interfaceAbis.IBalanceDecreasingTransactionVerification
        );
        expect(interfaceToAbi("ICChainStake", "coston")).toEqual(coston.interfaceAbis.ICChainStake);
        expect(interfaceToAbi("ICChainVotePower", "coston")).toEqual(coston.interfaceAbis.ICChainVotePower);
        expect(interfaceToAbi("IClaimSetupManager", "coston")).toEqual(coston.interfaceAbis.IClaimSetupManager);
        expect(interfaceToAbi("ICollateralizable", "coston")).toEqual(coston.interfaceAbis.ICollateralizable);
        expect(interfaceToAbi("IConfirmedBlockHeightExists", "coston")).toEqual(
            coston.interfaceAbis.IConfirmedBlockHeightExists
        );
        expect(interfaceToAbi("IConfirmedBlockHeightExistsVerification", "coston")).toEqual(
            coston.interfaceAbis.IConfirmedBlockHeightExistsVerification
        );
        expect(interfaceToAbi("ICoreVaultClient", "coston")).toEqual(coston.interfaceAbis.ICoreVaultClient);
        expect(interfaceToAbi("ICoreVaultClientSettings", "coston")).toEqual(
            coston.interfaceAbis.ICoreVaultClientSettings
        );
        expect(interfaceToAbi("IDelegationAccount", "coston")).toEqual(coston.interfaceAbis.IDelegationAccount);
        expect(interfaceToAbi("IDiamondLoupe", "coston")).toEqual(coston.interfaceAbis.IDiamondLoupe);
        expect(interfaceToAbi("IEVMTransaction", "coston")).toEqual(coston.interfaceAbis.IEVMTransaction);
        expect(interfaceToAbi("IEVMTransactionVerification", "coston")).toEqual(
            coston.interfaceAbis.IEVMTransactionVerification
        );
        expect(interfaceToAbi("IEntityManager", "coston")).toEqual(coston.interfaceAbis.IEntityManager);
        expect(interfaceToAbi("IFastUpdateIncentiveManager", "coston")).toEqual(
            coston.interfaceAbis.IFastUpdateIncentiveManager
        );
        expect(interfaceToAbi("IFastUpdater", "coston")).toEqual(coston.interfaceAbis.IFastUpdater);
        expect(interfaceToAbi("IFastUpdatesConfiguration", "coston")).toEqual(
            coston.interfaceAbis.IFastUpdatesConfiguration
        );
        expect(interfaceToAbi("IFdcHub", "coston")).toEqual(coston.interfaceAbis.IFdcHub);
        expect(interfaceToAbi("IFdcInflationConfigurations", "coston")).toEqual(
            coston.interfaceAbis.IFdcInflationConfigurations
        );
        expect(interfaceToAbi("IFdcRequestFeeConfigurations", "coston")).toEqual(
            coston.interfaceAbis.IFdcRequestFeeConfigurations
        );
        expect(interfaceToAbi("IFdcVerification", "coston")).toEqual(coston.interfaceAbis.IFdcVerification);
        expect(interfaceToAbi("IFeeCalculator", "coston")).toEqual(coston.interfaceAbis.IFeeCalculator);
        expect(interfaceToAbi("IFlareAssetRegistry", "coston")).toEqual(coston.interfaceAbis.IFlareAssetRegistry);
        expect(interfaceToAbi("IFlareContractRegistry", "coston")).toEqual(coston.interfaceAbis.IFlareContractRegistry);
        expect(interfaceToAbi("IFlareDaemonize", "coston")).toEqual(coston.interfaceAbis.IFlareDaemonize);
        expect(interfaceToAbi("IFlareSystemsCalculator", "coston")).toEqual(
            coston.interfaceAbis.IFlareSystemsCalculator
        );
        expect(interfaceToAbi("IFlareSystemsManager", "coston")).toEqual(coston.interfaceAbis.IFlareSystemsManager);
        expect(interfaceToAbi("IFtso", "coston")).toEqual(coston.interfaceAbis.IFtso);
        expect(interfaceToAbi("IFtsoFeedDecimals", "coston")).toEqual(coston.interfaceAbis.IFtsoFeedDecimals);
        expect(interfaceToAbi("IFtsoFeedIdConverter", "coston")).toEqual(coston.interfaceAbis.IFtsoFeedIdConverter);
        expect(interfaceToAbi("IFtsoFeedPublisher", "coston")).toEqual(coston.interfaceAbis.IFtsoFeedPublisher);
        expect(interfaceToAbi("IFtsoGenesis", "coston")).toEqual(coston.interfaceAbis.IFtsoGenesis);
        expect(interfaceToAbi("IFtsoInflationConfigurations", "coston")).toEqual(
            coston.interfaceAbis.IFtsoInflationConfigurations
        );
        expect(interfaceToAbi("IFtsoManager", "coston")).toEqual(coston.interfaceAbis.IFtsoManager);
        expect(interfaceToAbi("IFtsoManagerGenesis", "coston")).toEqual(coston.interfaceAbis.IFtsoManagerGenesis);
        expect(interfaceToAbi("IFtsoRegistry", "coston")).toEqual(coston.interfaceAbis.IFtsoRegistry);
        expect(interfaceToAbi("IFtsoRegistryGenesis", "coston")).toEqual(coston.interfaceAbis.IFtsoRegistryGenesis);
        expect(interfaceToAbi("IFtsoRewardManager", "coston")).toEqual(coston.interfaceAbis.IFtsoRewardManager);
        expect(interfaceToAbi("IFtsoRewardOffersManager", "coston")).toEqual(
            coston.interfaceAbis.IFtsoRewardOffersManager
        );
        expect(interfaceToAbi("IGenericRewardManager", "coston")).toEqual(coston.interfaceAbis.IGenericRewardManager);
        expect(interfaceToAbi("IGovernanceSettings", "coston")).toEqual(coston.interfaceAbis.IGovernanceSettings);
        expect(interfaceToAbi("IGovernanceVotePower", "coston")).toEqual(coston.interfaceAbis.IGovernanceVotePower);
        expect(interfaceToAbi("IGovernor", "coston")).toEqual(coston.interfaceAbis.IGovernor);
        expect(interfaceToAbi("IIAddressUpdatable", "coston")).toEqual(coston.interfaceAbis.IIAddressUpdatable);
        expect(interfaceToAbi("IIAddressUpdater", "coston")).toEqual(coston.interfaceAbis.IIAddressUpdater);
        expect(interfaceToAbi("IIClaimSetupManager", "coston")).toEqual(coston.interfaceAbis.IIClaimSetupManager);
        expect(interfaceToAbi("IICleanable", "coston")).toEqual(coston.interfaceAbis.IICleanable);
        expect(interfaceToAbi("IICleanupBlockNumberManager", "coston")).toEqual(
            coston.interfaceAbis.IICleanupBlockNumberManager
        );
        expect(interfaceToAbi("IICustomFeed", "coston")).toEqual(coston.interfaceAbis.IICustomFeed);
        expect(interfaceToAbi("IIERC20WithMetadata", "coston")).toEqual(coston.interfaceAbis.IIERC20WithMetadata);
        expect(interfaceToAbi("IIEntityManager", "coston")).toEqual(coston.interfaceAbis.IIEntityManager);
        expect(interfaceToAbi("IIFastUpdaterView", "coston")).toEqual(coston.interfaceAbis.IIFastUpdaterView);
        expect(interfaceToAbi("IIFlareAssetRegistry", "coston")).toEqual(coston.interfaceAbis.IIFlareAssetRegistry);
        expect(interfaceToAbi("IIFlareAssetRegistryProvider", "coston")).toEqual(
            coston.interfaceAbis.IIFlareAssetRegistryProvider
        );
        expect(interfaceToAbi("IIFlareSystemsCalculator", "coston")).toEqual(
            coston.interfaceAbis.IIFlareSystemsCalculator
        );
        expect(interfaceToAbi("IIFlareSystemsManager", "coston")).toEqual(coston.interfaceAbis.IIFlareSystemsManager);
        expect(interfaceToAbi("IIFtso", "coston")).toEqual(coston.interfaceAbis.IIFtso);
        expect(interfaceToAbi("IIFtsoFeedPublisher", "coston")).toEqual(coston.interfaceAbis.IIFtsoFeedPublisher);
        expect(interfaceToAbi("IIFtsoManager", "coston")).toEqual(coston.interfaceAbis.IIFtsoManager);
        expect(interfaceToAbi("IIFtsoManagerProxy", "coston")).toEqual(coston.interfaceAbis.IIFtsoManagerProxy);
        expect(interfaceToAbi("IIFtsoManagerV1", "coston")).toEqual(coston.interfaceAbis.IIFtsoManagerV1);
        expect(interfaceToAbi("IIFtsoRegistry", "coston")).toEqual(coston.interfaceAbis.IIFtsoRegistry);
        expect(interfaceToAbi("IIFtsoRegistryV1", "coston")).toEqual(coston.interfaceAbis.IIFtsoRegistryV1);
        expect(interfaceToAbi("IIFtsoRewardManager", "coston")).toEqual(coston.interfaceAbis.IIFtsoRewardManager);
        expect(interfaceToAbi("IIGovernanceVotePower", "coston")).toEqual(coston.interfaceAbis.IIGovernanceVotePower);
        expect(interfaceToAbi("IIGovernorProposer", "coston")).toEqual(coston.interfaceAbis.IIGovernorProposer);
        expect(interfaceToAbi("IIInflationAllocation", "coston")).toEqual(coston.interfaceAbis.IIInflationAllocation);
        expect(interfaceToAbi("IIInflationReceiver", "coston")).toEqual(coston.interfaceAbis.IIInflationReceiver);
        expect(interfaceToAbi("IIInflationReceiverV1", "coston")).toEqual(coston.interfaceAbis.IIInflationReceiverV1);
        expect(interfaceToAbi("IIInflationV1", "coston")).toEqual(coston.interfaceAbis.IIInflationV1);
        expect(interfaceToAbi("IINodePossessionVerifier", "coston")).toEqual(
            coston.interfaceAbis.IINodePossessionVerifier
        );
        expect(interfaceToAbi("IIPollingFoundation", "coston")).toEqual(coston.interfaceAbis.IIPollingFoundation);
        expect(interfaceToAbi("IIPollingManagementGroup", "coston")).toEqual(
            coston.interfaceAbis.IIPollingManagementGroup
        );
        expect(interfaceToAbi("IIPreInflationCalculation", "coston")).toEqual(
            coston.interfaceAbis.IIPreInflationCalculation
        );
        expect(interfaceToAbi("IIPriceSubmitter", "coston")).toEqual(coston.interfaceAbis.IIPriceSubmitter);
        expect(interfaceToAbi("IIPublicKeyVerifier", "coston")).toEqual(coston.interfaceAbis.IIPublicKeyVerifier);
        expect(interfaceToAbi("IIRNat", "coston")).toEqual(coston.interfaceAbis.IIRNat);
        expect(interfaceToAbi("IIRNatAccount", "coston")).toEqual(coston.interfaceAbis.IIRNatAccount);
        expect(interfaceToAbi("IIRandomProvider", "coston")).toEqual(coston.interfaceAbis.IIRandomProvider);
        expect(interfaceToAbi("IIRelay", "coston")).toEqual(coston.interfaceAbis.IIRelay);
        expect(interfaceToAbi("IIRewardEpochSwitchoverTrigger", "coston")).toEqual(
            coston.interfaceAbis.IIRewardEpochSwitchoverTrigger
        );
        expect(interfaceToAbi("IIRewardManager", "coston")).toEqual(coston.interfaceAbis.IIRewardManager);
        expect(interfaceToAbi("IISubmission", "coston")).toEqual(coston.interfaceAbis.IISubmission);
        expect(interfaceToAbi("IISupply", "coston")).toEqual(coston.interfaceAbis.IISupply);
        expect(interfaceToAbi("IITokenPool", "coston")).toEqual(coston.interfaceAbis.IITokenPool);
        expect(interfaceToAbi("IIVPContract", "coston")).toEqual(coston.interfaceAbis.IIVPContract);
        expect(interfaceToAbi("IIVPToken", "coston")).toEqual(coston.interfaceAbis.IIVPToken);
        expect(interfaceToAbi("IIVoterRegistrationTrigger", "coston")).toEqual(
            coston.interfaceAbis.IIVoterRegistrationTrigger
        );
        expect(interfaceToAbi("IIVoterRegistry", "coston")).toEqual(coston.interfaceAbis.IIVoterRegistry);
        expect(interfaceToAbi("IIVoterWhitelister", "coston")).toEqual(coston.interfaceAbis.IIVoterWhitelister);
        expect(interfaceToAbi("IIncreaseManager", "coston")).toEqual(coston.interfaceAbis.IIncreaseManager);
        expect(interfaceToAbi("IInflationGenesis", "coston")).toEqual(coston.interfaceAbis.IInflationGenesis);
        expect(interfaceToAbi("IJsonApi", "coston")).toEqual(coston.interfaceAbis.IJsonApi);
        expect(interfaceToAbi("IJsonApiVerification", "coston")).toEqual(coston.interfaceAbis.IJsonApiVerification);
        expect(interfaceToAbi("IPayment", "coston")).toEqual(coston.interfaceAbis.IPayment);
        expect(interfaceToAbi("IPaymentVerification", "coston")).toEqual(coston.interfaceAbis.IPaymentVerification);
        expect(interfaceToAbi("IPollingFtso", "coston")).toEqual(coston.interfaceAbis.IPollingFtso);
        expect(interfaceToAbi("IPollingManagementGroup", "coston")).toEqual(
            coston.interfaceAbis.IPollingManagementGroup
        );
        expect(interfaceToAbi("IPriceSubmitter", "coston")).toEqual(coston.interfaceAbis.IPriceSubmitter);
        expect(interfaceToAbi("IRNat", "coston")).toEqual(coston.interfaceAbis.IRNat);
        expect(interfaceToAbi("IRNatAccount", "coston")).toEqual(coston.interfaceAbis.IRNatAccount);
        expect(interfaceToAbi("IRandomProvider", "coston")).toEqual(coston.interfaceAbis.IRandomProvider);
        expect(interfaceToAbi("IRedemptionTimeExtension", "coston")).toEqual(
            coston.interfaceAbis.IRedemptionTimeExtension
        );
        expect(interfaceToAbi("IReferencedPaymentNonexistence", "coston")).toEqual(
            coston.interfaceAbis.IReferencedPaymentNonexistence
        );
        expect(interfaceToAbi("IReferencedPaymentNonexistenceVerification", "coston")).toEqual(
            coston.interfaceAbis.IReferencedPaymentNonexistenceVerification
        );
        expect(interfaceToAbi("IRelay", "coston")).toEqual(coston.interfaceAbis.IRelay);
        expect(interfaceToAbi("IRewardManager", "coston")).toEqual(coston.interfaceAbis.IRewardManager);
        expect(interfaceToAbi("ISubmission", "coston")).toEqual(coston.interfaceAbis.ISubmission);
        expect(interfaceToAbi("ITypeTemplate", "coston")).toEqual(coston.interfaceAbis.ITypeTemplate);
        expect(interfaceToAbi("ITypeTemplateVerification", "coston")).toEqual(
            coston.interfaceAbis.ITypeTemplateVerification
        );
        expect(interfaceToAbi("IUpdateValidators", "coston")).toEqual(coston.interfaceAbis.IUpdateValidators);
        expect(interfaceToAbi("IVPContractEvents", "coston")).toEqual(coston.interfaceAbis.IVPContractEvents);
        expect(interfaceToAbi("IVPToken", "coston")).toEqual(coston.interfaceAbis.IVPToken);
        expect(interfaceToAbi("IValidatorRewardOffersManager", "coston")).toEqual(
            coston.interfaceAbis.IValidatorRewardOffersManager
        );
        expect(interfaceToAbi("IVoterPreRegistry", "coston")).toEqual(coston.interfaceAbis.IVoterPreRegistry);
        expect(interfaceToAbi("IVoterRegistry", "coston")).toEqual(coston.interfaceAbis.IVoterRegistry);
        expect(interfaceToAbi("IVoterWhitelister", "coston")).toEqual(coston.interfaceAbis.IVoterWhitelister);
        expect(interfaceToAbi("IWNat", "coston")).toEqual(coston.interfaceAbis.IWNat);
        expect(interfaceToAbi("IWNatDelegationFee", "coston")).toEqual(coston.interfaceAbis.IWNatDelegationFee);
        expect(interfaceToAbi("IWeb2Json", "coston")).toEqual(coston.interfaceAbis.IWeb2Json);
        expect(interfaceToAbi("IWeb2JsonVerification", "coston")).toEqual(coston.interfaceAbis.IWeb2JsonVerification);
        expect(interfaceToAbi("ProtocolsV2Interface", "coston")).toEqual(coston.interfaceAbis.ProtocolsV2Interface);
        expect(interfaceToAbi("RandomNumberV2Interface", "coston")).toEqual(
            coston.interfaceAbis.RandomNumberV2Interface
        );
        expect(interfaceToAbi("RedemptionRequestInfo", "coston")).toEqual(coston.interfaceAbis.RedemptionRequestInfo);
        expect(interfaceToAbi("RedemptionTicketInfo", "coston")).toEqual(coston.interfaceAbis.RedemptionTicketInfo);
        expect(interfaceToAbi("RewardsV2Interface", "coston")).toEqual(coston.interfaceAbis.RewardsV2Interface);
        expect(interfaceToAbi("TestFtsoV2Interface", "coston")).toEqual(coston.interfaceAbis.TestFtsoV2Interface);

        expect(coston.interfaceToAbi("AgentInfo")).toEqual(coston.interfaceAbis.AgentInfo);
        expect(coston.interfaceToAbi("AgentSettings")).toEqual(coston.interfaceAbis.AgentSettings);
        expect(coston.interfaceToAbi("AssetManagerSettings")).toEqual(coston.interfaceAbis.AssetManagerSettings);
        expect(coston.interfaceToAbi("AvailableAgentInfo")).toEqual(coston.interfaceAbis.AvailableAgentInfo);
        expect(coston.interfaceToAbi("CollateralReservationInfo")).toEqual(
            coston.interfaceAbis.CollateralReservationInfo
        );
        expect(coston.interfaceToAbi("CollateralType")).toEqual(coston.interfaceAbis.CollateralType);
        expect(coston.interfaceToAbi("ContractRegistry")).toEqual(coston.interfaceAbis.ContractRegistry);
        expect(coston.interfaceToAbi("EmergencyPause")).toEqual(coston.interfaceAbis.EmergencyPause);
        expect(coston.interfaceToAbi("FtsoV2Interface")).toEqual(coston.interfaceAbis.FtsoV2Interface);
        expect(coston.interfaceToAbi("IAddressValidity")).toEqual(coston.interfaceAbis.IAddressValidity);
        expect(coston.interfaceToAbi("IAddressValidityVerification")).toEqual(
            coston.interfaceAbis.IAddressValidityVerification
        );
        expect(coston.interfaceToAbi("IAgentAlwaysAllowedMinters")).toEqual(
            coston.interfaceAbis.IAgentAlwaysAllowedMinters
        );
        expect(coston.interfaceToAbi("IAgentOwnerRegistry")).toEqual(coston.interfaceAbis.IAgentOwnerRegistry);
        expect(coston.interfaceToAbi("IAgentPing")).toEqual(coston.interfaceAbis.IAgentPing);
        expect(coston.interfaceToAbi("IAssetManager")).toEqual(coston.interfaceAbis.IAssetManager);
        expect(coston.interfaceToAbi("IAssetManagerController")).toEqual(coston.interfaceAbis.IAssetManagerController);
        expect(coston.interfaceToAbi("IAssetManagerEvents")).toEqual(coston.interfaceAbis.IAssetManagerEvents);
        expect(coston.interfaceToAbi("IBalanceDecreasingTransaction")).toEqual(
            coston.interfaceAbis.IBalanceDecreasingTransaction
        );
        expect(coston.interfaceToAbi("IBalanceDecreasingTransactionVerification")).toEqual(
            coston.interfaceAbis.IBalanceDecreasingTransactionVerification
        );
        expect(coston.interfaceToAbi("ICChainStake")).toEqual(coston.interfaceAbis.ICChainStake);
        expect(coston.interfaceToAbi("ICChainVotePower")).toEqual(coston.interfaceAbis.ICChainVotePower);
        expect(coston.interfaceToAbi("IClaimSetupManager")).toEqual(coston.interfaceAbis.IClaimSetupManager);
        expect(coston.interfaceToAbi("ICollateralizable")).toEqual(coston.interfaceAbis.ICollateralizable);
        expect(coston.interfaceToAbi("IConfirmedBlockHeightExists")).toEqual(
            coston.interfaceAbis.IConfirmedBlockHeightExists
        );
        expect(coston.interfaceToAbi("IConfirmedBlockHeightExistsVerification")).toEqual(
            coston.interfaceAbis.IConfirmedBlockHeightExistsVerification
        );
        expect(coston.interfaceToAbi("ICoreVaultClient")).toEqual(coston.interfaceAbis.ICoreVaultClient);
        expect(coston.interfaceToAbi("ICoreVaultClientSettings")).toEqual(
            coston.interfaceAbis.ICoreVaultClientSettings
        );
        expect(coston.interfaceToAbi("IDelegationAccount")).toEqual(coston.interfaceAbis.IDelegationAccount);
        expect(coston.interfaceToAbi("IDiamondLoupe")).toEqual(coston.interfaceAbis.IDiamondLoupe);
        expect(coston.interfaceToAbi("IEVMTransaction")).toEqual(coston.interfaceAbis.IEVMTransaction);
        expect(coston.interfaceToAbi("IEVMTransactionVerification")).toEqual(
            coston.interfaceAbis.IEVMTransactionVerification
        );
        expect(coston.interfaceToAbi("IEntityManager")).toEqual(coston.interfaceAbis.IEntityManager);
        expect(coston.interfaceToAbi("IFastUpdateIncentiveManager")).toEqual(
            coston.interfaceAbis.IFastUpdateIncentiveManager
        );
        expect(coston.interfaceToAbi("IFastUpdater")).toEqual(coston.interfaceAbis.IFastUpdater);
        expect(coston.interfaceToAbi("IFastUpdatesConfiguration")).toEqual(
            coston.interfaceAbis.IFastUpdatesConfiguration
        );
        expect(coston.interfaceToAbi("IFdcHub")).toEqual(coston.interfaceAbis.IFdcHub);
        expect(coston.interfaceToAbi("IFdcInflationConfigurations")).toEqual(
            coston.interfaceAbis.IFdcInflationConfigurations
        );
        expect(coston.interfaceToAbi("IFdcRequestFeeConfigurations")).toEqual(
            coston.interfaceAbis.IFdcRequestFeeConfigurations
        );
        expect(coston.interfaceToAbi("IFdcVerification")).toEqual(coston.interfaceAbis.IFdcVerification);
        expect(coston.interfaceToAbi("IFeeCalculator")).toEqual(coston.interfaceAbis.IFeeCalculator);
        expect(coston.interfaceToAbi("IFlareAssetRegistry")).toEqual(coston.interfaceAbis.IFlareAssetRegistry);
        expect(coston.interfaceToAbi("IFlareContractRegistry")).toEqual(coston.interfaceAbis.IFlareContractRegistry);
        expect(coston.interfaceToAbi("IFlareDaemonize")).toEqual(coston.interfaceAbis.IFlareDaemonize);
        expect(coston.interfaceToAbi("IFlareSystemsCalculator")).toEqual(coston.interfaceAbis.IFlareSystemsCalculator);
        expect(coston.interfaceToAbi("IFlareSystemsManager")).toEqual(coston.interfaceAbis.IFlareSystemsManager);
        expect(coston.interfaceToAbi("IFtso")).toEqual(coston.interfaceAbis.IFtso);
        expect(coston.interfaceToAbi("IFtsoFeedDecimals")).toEqual(coston.interfaceAbis.IFtsoFeedDecimals);
        expect(coston.interfaceToAbi("IFtsoFeedIdConverter")).toEqual(coston.interfaceAbis.IFtsoFeedIdConverter);
        expect(coston.interfaceToAbi("IFtsoFeedPublisher")).toEqual(coston.interfaceAbis.IFtsoFeedPublisher);
        expect(coston.interfaceToAbi("IFtsoGenesis")).toEqual(coston.interfaceAbis.IFtsoGenesis);
        expect(coston.interfaceToAbi("IFtsoInflationConfigurations")).toEqual(
            coston.interfaceAbis.IFtsoInflationConfigurations
        );
        expect(coston.interfaceToAbi("IFtsoManager")).toEqual(coston.interfaceAbis.IFtsoManager);
        expect(coston.interfaceToAbi("IFtsoManagerGenesis")).toEqual(coston.interfaceAbis.IFtsoManagerGenesis);
        expect(coston.interfaceToAbi("IFtsoRegistry")).toEqual(coston.interfaceAbis.IFtsoRegistry);
        expect(coston.interfaceToAbi("IFtsoRegistryGenesis")).toEqual(coston.interfaceAbis.IFtsoRegistryGenesis);
        expect(coston.interfaceToAbi("IFtsoRewardManager")).toEqual(coston.interfaceAbis.IFtsoRewardManager);
        expect(coston.interfaceToAbi("IFtsoRewardOffersManager")).toEqual(
            coston.interfaceAbis.IFtsoRewardOffersManager
        );
        expect(coston.interfaceToAbi("IGenericRewardManager")).toEqual(coston.interfaceAbis.IGenericRewardManager);
        expect(coston.interfaceToAbi("IGovernanceSettings")).toEqual(coston.interfaceAbis.IGovernanceSettings);
        expect(coston.interfaceToAbi("IGovernanceVotePower")).toEqual(coston.interfaceAbis.IGovernanceVotePower);
        expect(coston.interfaceToAbi("IGovernor")).toEqual(coston.interfaceAbis.IGovernor);
        expect(coston.interfaceToAbi("IIAddressUpdatable")).toEqual(coston.interfaceAbis.IIAddressUpdatable);
        expect(coston.interfaceToAbi("IIAddressUpdater")).toEqual(coston.interfaceAbis.IIAddressUpdater);
        expect(coston.interfaceToAbi("IIClaimSetupManager")).toEqual(coston.interfaceAbis.IIClaimSetupManager);
        expect(coston.interfaceToAbi("IICleanable")).toEqual(coston.interfaceAbis.IICleanable);
        expect(coston.interfaceToAbi("IICleanupBlockNumberManager")).toEqual(
            coston.interfaceAbis.IICleanupBlockNumberManager
        );
        expect(coston.interfaceToAbi("IICustomFeed")).toEqual(coston.interfaceAbis.IICustomFeed);
        expect(coston.interfaceToAbi("IIERC20WithMetadata")).toEqual(coston.interfaceAbis.IIERC20WithMetadata);
        expect(coston.interfaceToAbi("IIEntityManager")).toEqual(coston.interfaceAbis.IIEntityManager);
        expect(coston.interfaceToAbi("IIFastUpdaterView")).toEqual(coston.interfaceAbis.IIFastUpdaterView);
        expect(coston.interfaceToAbi("IIFlareAssetRegistry")).toEqual(coston.interfaceAbis.IIFlareAssetRegistry);
        expect(coston.interfaceToAbi("IIFlareAssetRegistryProvider")).toEqual(
            coston.interfaceAbis.IIFlareAssetRegistryProvider
        );
        expect(coston.interfaceToAbi("IIFlareSystemsCalculator")).toEqual(
            coston.interfaceAbis.IIFlareSystemsCalculator
        );
        expect(coston.interfaceToAbi("IIFlareSystemsManager")).toEqual(coston.interfaceAbis.IIFlareSystemsManager);
        expect(coston.interfaceToAbi("IIFtso")).toEqual(coston.interfaceAbis.IIFtso);
        expect(coston.interfaceToAbi("IIFtsoFeedPublisher")).toEqual(coston.interfaceAbis.IIFtsoFeedPublisher);
        expect(coston.interfaceToAbi("IIFtsoManager")).toEqual(coston.interfaceAbis.IIFtsoManager);
        expect(coston.interfaceToAbi("IIFtsoManagerProxy")).toEqual(coston.interfaceAbis.IIFtsoManagerProxy);
        expect(coston.interfaceToAbi("IIFtsoManagerV1")).toEqual(coston.interfaceAbis.IIFtsoManagerV1);
        expect(coston.interfaceToAbi("IIFtsoRegistry")).toEqual(coston.interfaceAbis.IIFtsoRegistry);
        expect(coston.interfaceToAbi("IIFtsoRegistryV1")).toEqual(coston.interfaceAbis.IIFtsoRegistryV1);
        expect(coston.interfaceToAbi("IIFtsoRewardManager")).toEqual(coston.interfaceAbis.IIFtsoRewardManager);
        expect(coston.interfaceToAbi("IIGovernanceVotePower")).toEqual(coston.interfaceAbis.IIGovernanceVotePower);
        expect(coston.interfaceToAbi("IIGovernorProposer")).toEqual(coston.interfaceAbis.IIGovernorProposer);
        expect(coston.interfaceToAbi("IIInflationAllocation")).toEqual(coston.interfaceAbis.IIInflationAllocation);
        expect(coston.interfaceToAbi("IIInflationReceiver")).toEqual(coston.interfaceAbis.IIInflationReceiver);
        expect(coston.interfaceToAbi("IIInflationReceiverV1")).toEqual(coston.interfaceAbis.IIInflationReceiverV1);
        expect(coston.interfaceToAbi("IIInflationV1")).toEqual(coston.interfaceAbis.IIInflationV1);
        expect(coston.interfaceToAbi("IINodePossessionVerifier")).toEqual(
            coston.interfaceAbis.IINodePossessionVerifier
        );
        expect(coston.interfaceToAbi("IIPollingFoundation")).toEqual(coston.interfaceAbis.IIPollingFoundation);
        expect(coston.interfaceToAbi("IIPollingManagementGroup")).toEqual(
            coston.interfaceAbis.IIPollingManagementGroup
        );
        expect(coston.interfaceToAbi("IIPreInflationCalculation")).toEqual(
            coston.interfaceAbis.IIPreInflationCalculation
        );
        expect(coston.interfaceToAbi("IIPriceSubmitter")).toEqual(coston.interfaceAbis.IIPriceSubmitter);
        expect(coston.interfaceToAbi("IIPublicKeyVerifier")).toEqual(coston.interfaceAbis.IIPublicKeyVerifier);
        expect(coston.interfaceToAbi("IIRNat")).toEqual(coston.interfaceAbis.IIRNat);
        expect(coston.interfaceToAbi("IIRNatAccount")).toEqual(coston.interfaceAbis.IIRNatAccount);
        expect(coston.interfaceToAbi("IIRandomProvider")).toEqual(coston.interfaceAbis.IIRandomProvider);
        expect(coston.interfaceToAbi("IIRelay")).toEqual(coston.interfaceAbis.IIRelay);
        expect(coston.interfaceToAbi("IIRewardEpochSwitchoverTrigger")).toEqual(
            coston.interfaceAbis.IIRewardEpochSwitchoverTrigger
        );
        expect(coston.interfaceToAbi("IIRewardManager")).toEqual(coston.interfaceAbis.IIRewardManager);
        expect(coston.interfaceToAbi("IISubmission")).toEqual(coston.interfaceAbis.IISubmission);
        expect(coston.interfaceToAbi("IISupply")).toEqual(coston.interfaceAbis.IISupply);
        expect(coston.interfaceToAbi("IITokenPool")).toEqual(coston.interfaceAbis.IITokenPool);
        expect(coston.interfaceToAbi("IIVPContract")).toEqual(coston.interfaceAbis.IIVPContract);
        expect(coston.interfaceToAbi("IIVPToken")).toEqual(coston.interfaceAbis.IIVPToken);
        expect(coston.interfaceToAbi("IIVoterRegistrationTrigger")).toEqual(
            coston.interfaceAbis.IIVoterRegistrationTrigger
        );
        expect(coston.interfaceToAbi("IIVoterRegistry")).toEqual(coston.interfaceAbis.IIVoterRegistry);
        expect(coston.interfaceToAbi("IIVoterWhitelister")).toEqual(coston.interfaceAbis.IIVoterWhitelister);
        expect(coston.interfaceToAbi("IIncreaseManager")).toEqual(coston.interfaceAbis.IIncreaseManager);
        expect(coston.interfaceToAbi("IInflationGenesis")).toEqual(coston.interfaceAbis.IInflationGenesis);
        expect(coston.interfaceToAbi("IJsonApi")).toEqual(coston.interfaceAbis.IJsonApi);
        expect(coston.interfaceToAbi("IJsonApiVerification")).toEqual(coston.interfaceAbis.IJsonApiVerification);
        expect(coston.interfaceToAbi("IPayment")).toEqual(coston.interfaceAbis.IPayment);
        expect(coston.interfaceToAbi("IPaymentVerification")).toEqual(coston.interfaceAbis.IPaymentVerification);
        expect(coston.interfaceToAbi("IPollingFtso")).toEqual(coston.interfaceAbis.IPollingFtso);
        expect(coston.interfaceToAbi("IPollingManagementGroup")).toEqual(coston.interfaceAbis.IPollingManagementGroup);
        expect(coston.interfaceToAbi("IPriceSubmitter")).toEqual(coston.interfaceAbis.IPriceSubmitter);
        expect(coston.interfaceToAbi("IRNat")).toEqual(coston.interfaceAbis.IRNat);
        expect(coston.interfaceToAbi("IRNatAccount")).toEqual(coston.interfaceAbis.IRNatAccount);
        expect(coston.interfaceToAbi("IRandomProvider")).toEqual(coston.interfaceAbis.IRandomProvider);
        expect(coston.interfaceToAbi("IRedemptionTimeExtension")).toEqual(
            coston.interfaceAbis.IRedemptionTimeExtension
        );
        expect(coston.interfaceToAbi("IReferencedPaymentNonexistence")).toEqual(
            coston.interfaceAbis.IReferencedPaymentNonexistence
        );
        expect(coston.interfaceToAbi("IReferencedPaymentNonexistenceVerification")).toEqual(
            coston.interfaceAbis.IReferencedPaymentNonexistenceVerification
        );
        expect(coston.interfaceToAbi("IRelay")).toEqual(coston.interfaceAbis.IRelay);
        expect(coston.interfaceToAbi("IRewardManager")).toEqual(coston.interfaceAbis.IRewardManager);
        expect(coston.interfaceToAbi("ISubmission")).toEqual(coston.interfaceAbis.ISubmission);
        expect(coston.interfaceToAbi("ITypeTemplate")).toEqual(coston.interfaceAbis.ITypeTemplate);
        expect(coston.interfaceToAbi("ITypeTemplateVerification")).toEqual(
            coston.interfaceAbis.ITypeTemplateVerification
        );
        expect(coston.interfaceToAbi("IUpdateValidators")).toEqual(coston.interfaceAbis.IUpdateValidators);
        expect(coston.interfaceToAbi("IVPContractEvents")).toEqual(coston.interfaceAbis.IVPContractEvents);
        expect(coston.interfaceToAbi("IVPToken")).toEqual(coston.interfaceAbis.IVPToken);
        expect(coston.interfaceToAbi("IValidatorRewardOffersManager")).toEqual(
            coston.interfaceAbis.IValidatorRewardOffersManager
        );
        expect(coston.interfaceToAbi("IVoterPreRegistry")).toEqual(coston.interfaceAbis.IVoterPreRegistry);
        expect(coston.interfaceToAbi("IVoterRegistry")).toEqual(coston.interfaceAbis.IVoterRegistry);
        expect(coston.interfaceToAbi("IVoterWhitelister")).toEqual(coston.interfaceAbis.IVoterWhitelister);
        expect(coston.interfaceToAbi("IWNat")).toEqual(coston.interfaceAbis.IWNat);
        expect(coston.interfaceToAbi("IWNatDelegationFee")).toEqual(coston.interfaceAbis.IWNatDelegationFee);
        expect(coston.interfaceToAbi("IWeb2Json")).toEqual(coston.interfaceAbis.IWeb2Json);
        expect(coston.interfaceToAbi("IWeb2JsonVerification")).toEqual(coston.interfaceAbis.IWeb2JsonVerification);
        expect(coston.interfaceToAbi("ProtocolsV2Interface")).toEqual(coston.interfaceAbis.ProtocolsV2Interface);
        expect(coston.interfaceToAbi("RandomNumberV2Interface")).toEqual(coston.interfaceAbis.RandomNumberV2Interface);
        expect(coston.interfaceToAbi("RedemptionRequestInfo")).toEqual(coston.interfaceAbis.RedemptionRequestInfo);
        expect(coston.interfaceToAbi("RedemptionTicketInfo")).toEqual(coston.interfaceAbis.RedemptionTicketInfo);
        expect(coston.interfaceToAbi("RewardsV2Interface")).toEqual(coston.interfaceAbis.RewardsV2Interface);
        expect(coston.interfaceToAbi("TestFtsoV2Interface")).toEqual(coston.interfaceAbis.TestFtsoV2Interface);
    });
});

// This file was generated automatically. Do not edit manually.
