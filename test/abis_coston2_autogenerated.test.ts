// This file was generated automatically. Do not edit manually.

import { coston2 } from "../index";
import { nameToAbi, interfaceToAbi } from "../index";

describe("Testing coston2 ABIs", () => {
    test("Interface ABIs exist for all contracts", () => {
        expect(coston2.interfaceAbis.AgentInfo).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.AgentSettings).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.AssetManagerSettings).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.AvailableAgentInfo).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.CollateralReservationInfo).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.CollateralType).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.ContractRegistry).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.EmergencyPause).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.FtsoV2Interface).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IAddressBinder).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IAddressValidity).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IAddressValidityVerification).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IAgentAlwaysAllowedMinters).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IAgentOwnerRegistry).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IAgentPing).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IAgentVaultsFacet).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IAssetManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IAssetManagerController).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IAssetManagerEvents).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IBalanceDecreasingTransaction).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IBalanceDecreasingTransactionVerification).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.ICChainStake).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.ICChainVotePower).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IClaimSetupManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.ICollateralizable).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IConfirmedBlockHeightExists).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IConfirmedBlockHeightExistsVerification).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.ICoreVaultClient).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.ICoreVaultClientSettings).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IDelegationAccount).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IDiamond).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IDiamondCut).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IDiamondLoupe).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IDistributionToDelegators).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IERC165).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IERC173).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IEVMTransaction).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IEVMTransactionVerification).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IEntityManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IExecutorsFacet).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFastUpdateIncentiveManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFastUpdater).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFastUpdatesConfiguration).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFdcHub).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFdcInflationConfigurations).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFdcRequestFeeConfigurations).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFdcVerification).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFeeCalculator).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFlareAssetRegistry).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFlareContractRegistry).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFlareDaemonize).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFlareSystemsCalculator).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFlareSystemsManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFtso).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFtsoFeedDecimals).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFtsoFeedIdConverter).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFtsoFeedPublisher).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFtsoGenesis).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFtsoInflationConfigurations).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFtsoManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFtsoManagerGenesis).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFtsoRegistry).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFtsoRegistryGenesis).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFtsoRewardManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IFtsoRewardOffersManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IGenericRewardManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IGovernanceSettings).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IGovernanceVotePower).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IGovernor).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIAddressUpdatable).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIAddressUpdater).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIClaimSetupManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IICleanable).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IICleanupBlockNumberManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IICombinedNatBalance).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IICustomFeed).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIERC20WithMetadata).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIEntityManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIFastUpdaterView).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIFlareAssetRegistry).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIFlareAssetRegistryProvider).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIFlareSystemsCalculator).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIFlareSystemsManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIFtso).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIFtsoFeedPublisher).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIFtsoManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIFtsoManagerProxy).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIFtsoManagerV1).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIFtsoRegistry).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIFtsoRewardManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIGenericRewardManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIGovernanceVotePower).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIGovernorProposer).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIIncentivePoolAllocation).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIIncentivePoolPercentageProvider).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIIncentivePoolReceiver).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIIncentivePoolSharingPercentageProvider).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIInflationAllocation).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIInflationReceiver).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIInflationReceiverV1).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIInflationV1).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IINodePossessionVerifier).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIPChainStakeMirrorVerifier).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIPollingFoundation).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIPollingManagementGroup).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIPreInflationCalculation).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIPriceSubmitter).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIPublicKeyVerifier).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIRNat).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIRNatAccount).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIRandomProvider).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIRelay).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIRewardEpochSwitchoverTrigger).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIRewardManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IISubmission).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IISupply).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IITokenPool).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIVPContract).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIVPToken).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIVoterRegistrationTrigger).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIVoterRegistry).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIVoterWhitelister).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IIncreaseManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IInflationGenesis).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IInstructionFeesFacet).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IInstructionsFacet).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IJsonApi).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IJsonApiVerification).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IMasterAccountController).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IPChainStakeMirror).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IPChainStakeMirrorMultiSigVoting).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IPChainStakeMirrorVerifier).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IPChainVotePower).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IPayment).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IPaymentProofsFacet).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IPaymentVerification).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IPersonalAccount).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IPersonalAccountsFacet).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IPollingFtso).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IPollingManagementGroup).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IPriceSubmitter).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IRNat).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IRNatAccount).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IRandomProvider).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IRedemptionTimeExtension).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IReferencedPaymentNonexistence).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IReferencedPaymentNonexistenceVerification).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IRelay).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IRewardManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.ISubmission).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.ISwapFacet).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.ITimelockFacet).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.ITypeTemplate).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.ITypeTemplateVerification).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IUpdateValidators).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IVPContractEvents).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IVPToken).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IValidatorRegistry).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IValidatorRewardOffersManager).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IVaultsFacet).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IVoterPreRegistry).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IVoterRegistry).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IVoterWhitelister).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IWNat).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IWNatDelegationFee).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IWeb2Json).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IWeb2JsonVerification).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.IXrplProviderWalletsFacet).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.ProtocolsV2Interface).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.RandomNumberV2Interface).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.RedemptionRequestInfo).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.RedemptionTicketInfo).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.RewardsV2Interface).toEqual(expect.any(Array));
        expect(coston2.interfaceAbis.TestFtsoV2Interface).toEqual(expect.any(Array));
    });

    test("Contract names are set for all products", () => {
        expect(coston2.products.AssetManagerController.name).toEqual("AssetManagerController");
        expect(coston2.products.AssetManagerFXRP.name).toEqual("AssetManagerFXRP");
        expect(coston2.products.ClaimSetupManager.name).toEqual("ClaimSetupManager");
        expect(coston2.products.EntityManager.name).toEqual("EntityManager");
        expect(coston2.products.FastUpdateIncentiveManager.name).toEqual("FastUpdateIncentiveManager");
        expect(coston2.products.FastUpdater.name).toEqual("FastUpdater");
        expect(coston2.products.FastUpdatesConfiguration.name).toEqual("FastUpdatesConfiguration");
        expect(coston2.products.FdcHub.name).toEqual("FdcHub");
        expect(coston2.products.FdcRequestFeeConfigurations.name).toEqual("FdcRequestFeeConfigurations");
        expect(coston2.products.FdcVerification.name).toEqual("FdcVerification");
        expect(coston2.products.FeeCalculator.name).toEqual("FeeCalculator");
        expect(coston2.products.FlareAssetRegistry.name).toEqual("FlareAssetRegistry");
        expect(coston2.products.FlareContractRegistry.name).toEqual("FlareContractRegistry");
        expect(coston2.products.FlareSystemsCalculator.name).toEqual("FlareSystemsCalculator");
        expect(coston2.products.FlareSystemsManager.name).toEqual("FlareSystemsManager");
        expect(coston2.products.FtsoFeedDecimals.name).toEqual("FtsoFeedDecimals");
        expect(coston2.products.FtsoFeedIdConverter.name).toEqual("FtsoFeedIdConverter");
        expect(coston2.products.FtsoFeedPublisher.name).toEqual("FtsoFeedPublisher");
        expect(coston2.products.FtsoInflationConfigurations.name).toEqual("FtsoInflationConfigurations");
        expect(coston2.products.FtsoManager.name).toEqual("FtsoManager");
        expect(coston2.products.FtsoRegistry.name).toEqual("FtsoRegistry");
        expect(coston2.products.FtsoRewardManager.name).toEqual("FtsoRewardManager");
        expect(coston2.products.FtsoRewardOffersManager.name).toEqual("FtsoRewardOffersManager");
        expect(coston2.products.FtsoV2.name).toEqual("FtsoV2");
        expect(coston2.products.GovernanceSettings.name).toEqual("GovernanceSettings");
        expect(coston2.products.GovernanceVotePower.name).toEqual("GovernanceVotePower");
        expect(coston2.products.JsonApiVerification.name).toEqual("JsonApiVerification");
        expect(coston2.products.PriceSubmitter.name).toEqual("PriceSubmitter");
        expect(coston2.products.ProtocolsV2.name).toEqual("ProtocolsV2");
        expect(coston2.products.RandomNumberV2.name).toEqual("RandomNumberV2");
        expect(coston2.products.Relay.name).toEqual("Relay");
        expect(coston2.products.RewardManager.name).toEqual("RewardManager");
        expect(coston2.products.RewardsV2.name).toEqual("RewardsV2");
        expect(coston2.products.Submission.name).toEqual("Submission");
        expect(coston2.products.TestFtsoV2.name).toEqual("TestFtsoV2");
        expect(coston2.products.ValidatorRewardManager.name).toEqual("ValidatorRewardManager");
        expect(coston2.products.VoterRegistry.name).toEqual("VoterRegistry");
        expect(coston2.products.VoterWhitelister.name).toEqual("VoterWhitelister");
        expect(coston2.products.WNat.name).toEqual("WNat");
        expect(coston2.products.WNatDelegationFee.name).toEqual("WNatDelegationFee");
    });

    test("Interface names are set for all products", () => {
        expect(coston2.products.AssetManagerController.interface).toEqual("IAssetManagerController");
        expect(coston2.products.AssetManagerFXRP.interface).toEqual("IAssetManager");
        expect(coston2.products.ClaimSetupManager.interface).toEqual("IClaimSetupManager");
        expect(coston2.products.EntityManager.interface).toEqual("IEntityManager");
        expect(coston2.products.FastUpdateIncentiveManager.interface).toEqual("IFastUpdateIncentiveManager");
        expect(coston2.products.FastUpdater.interface).toEqual("IFastUpdater");
        expect(coston2.products.FastUpdatesConfiguration.interface).toEqual("IFastUpdatesConfiguration");
        expect(coston2.products.FdcHub.interface).toEqual("IFdcHub");
        expect(coston2.products.FdcRequestFeeConfigurations.interface).toEqual("IFdcRequestFeeConfigurations");
        expect(coston2.products.FdcVerification.interface).toEqual("IFdcVerification");
        expect(coston2.products.FeeCalculator.interface).toEqual("IFeeCalculator");
        expect(coston2.products.FlareAssetRegistry.interface).toEqual("IFlareAssetRegistry");
        expect(coston2.products.FlareContractRegistry.interface).toEqual("IFlareContractRegistry");
        expect(coston2.products.FlareSystemsCalculator.interface).toEqual("IFlareSystemsCalculator");
        expect(coston2.products.FlareSystemsManager.interface).toEqual("IFlareSystemsManager");
        expect(coston2.products.FtsoFeedDecimals.interface).toEqual("IFtsoFeedDecimals");
        expect(coston2.products.FtsoFeedIdConverter.interface).toEqual("IFtsoFeedIdConverter");
        expect(coston2.products.FtsoFeedPublisher.interface).toEqual("IFtsoFeedPublisher");
        expect(coston2.products.FtsoInflationConfigurations.interface).toEqual("IFtsoInflationConfigurations");
        expect(coston2.products.FtsoManager.interface).toEqual("IFtsoManager");
        expect(coston2.products.FtsoRegistry.interface).toEqual("IFtsoRegistry");
        expect(coston2.products.FtsoRewardManager.interface).toEqual("IFtsoRewardManager");
        expect(coston2.products.FtsoRewardOffersManager.interface).toEqual("IFtsoRewardOffersManager");
        expect(coston2.products.FtsoV2.interface).toEqual("FtsoV2Interface");
        expect(coston2.products.GovernanceSettings.interface).toEqual("IGovernanceSettings");
        expect(coston2.products.GovernanceVotePower.interface).toEqual("IGovernanceVotePower");
        expect(coston2.products.JsonApiVerification.interface).toEqual("IJsonApiVerification");
        expect(coston2.products.PriceSubmitter.interface).toEqual("IPriceSubmitter");
        expect(coston2.products.ProtocolsV2.interface).toEqual("ProtocolsV2Interface");
        expect(coston2.products.RandomNumberV2.interface).toEqual("RandomNumberV2Interface");
        expect(coston2.products.Relay.interface).toEqual("IRelay");
        expect(coston2.products.RewardManager.interface).toEqual("IRewardManager");
        expect(coston2.products.RewardsV2.interface).toEqual("RewardsV2Interface");
        expect(coston2.products.Submission.interface).toEqual("ISubmission");
        expect(coston2.products.TestFtsoV2.interface).toEqual("TestFtsoV2Interface");
        expect(coston2.products.ValidatorRewardManager.interface).toEqual("IGenericRewardManager");
        expect(coston2.products.VoterRegistry.interface).toEqual("IVoterRegistry");
        expect(coston2.products.VoterWhitelister.interface).toEqual("IVoterWhitelister");
        expect(coston2.products.WNat.interface).toEqual("IWNat");
        expect(coston2.products.WNatDelegationFee.interface).toEqual("IWNatDelegationFee");
    });

    test("Registry names are set for all products", () => {
        expect(coston2.products.AssetManagerController.registry).toEqual("AssetManagerController");
        expect(coston2.products.AssetManagerFXRP.registry).toEqual("AssetManagerFXRP");
        expect(coston2.products.ClaimSetupManager.registry).toEqual("ClaimSetupManager");
        expect(coston2.products.EntityManager.registry).toEqual("EntityManager");
        expect(coston2.products.FastUpdateIncentiveManager.registry).toEqual("FastUpdateIncentiveManager");
        expect(coston2.products.FastUpdater.registry).toEqual("FastUpdater");
        expect(coston2.products.FastUpdatesConfiguration.registry).toEqual("FastUpdatesConfiguration");
        expect(coston2.products.FdcHub.registry).toEqual("FdcHub");
        expect(coston2.products.FdcRequestFeeConfigurations.registry).toEqual("FdcRequestFeeConfigurations");
        expect(coston2.products.FdcVerification.registry).toEqual("FdcVerification");
        expect(coston2.products.FeeCalculator.registry).toEqual("FeeCalculator");
        expect(coston2.products.FlareAssetRegistry.registry).toEqual("FlareAssetRegistry");
        expect(coston2.products.FlareContractRegistry.registry).toEqual("FlareContractRegistry");
        expect(coston2.products.FlareSystemsCalculator.registry).toEqual("FlareSystemsCalculator");
        expect(coston2.products.FlareSystemsManager.registry).toEqual("FlareSystemsManager");
        expect(coston2.products.FtsoFeedDecimals.registry).toEqual("FtsoFeedDecimals");
        expect(coston2.products.FtsoFeedIdConverter.registry).toEqual("FtsoFeedIdConverter");
        expect(coston2.products.FtsoFeedPublisher.registry).toEqual("FtsoFeedPublisher");
        expect(coston2.products.FtsoInflationConfigurations.registry).toEqual("FtsoInflationConfigurations");
        expect(coston2.products.FtsoManager.registry).toEqual("FtsoManager");
        expect(coston2.products.FtsoRegistry.registry).toEqual("FtsoRegistry");
        expect(coston2.products.FtsoRewardManager.registry).toEqual("FtsoRewardManager");
        expect(coston2.products.FtsoRewardOffersManager.registry).toEqual("FtsoRewardOffersManager");
        expect(coston2.products.FtsoV2.registry).toEqual("FtsoV2");
        expect(coston2.products.GovernanceSettings.registry).toEqual("GovernanceSettings");
        expect(coston2.products.GovernanceVotePower.registry).toEqual("GovernanceVotePower");
        expect(coston2.products.JsonApiVerification.registry).toEqual("JsonApiVerification");
        expect(coston2.products.PriceSubmitter.registry).toEqual("PriceSubmitter");
        expect(coston2.products.ProtocolsV2.registry).toEqual("ProtocolsV2");
        expect(coston2.products.RandomNumberV2.registry).toEqual("RandomNumberV2");
        expect(coston2.products.Relay.registry).toEqual("Relay");
        expect(coston2.products.RewardManager.registry).toEqual("RewardManager");
        expect(coston2.products.RewardsV2.registry).toEqual("RewardsV2");
        expect(coston2.products.Submission.registry).toEqual("Submission");
        expect(coston2.products.TestFtsoV2.registry).toEqual("FtsoV2");
        expect(coston2.products.ValidatorRewardManager.registry).toEqual("ValidatorRewardManager");
        expect(coston2.products.VoterRegistry.registry).toEqual("VoterRegistry");
        expect(coston2.products.VoterWhitelister.registry).toEqual("VoterWhitelister");
        expect(coston2.products.WNat.registry).toEqual("WNat");
        expect(coston2.products.WNatDelegationFee.registry).toEqual("WNatDelegationFee");
    });

    test("ABIs exist for all products", () => {
        expect(coston2.products.AssetManagerController.abi).toEqual(expect.any(Array));
        expect(coston2.products.AssetManagerFXRP.abi).toEqual(expect.any(Array));
        expect(coston2.products.ClaimSetupManager.abi).toEqual(expect.any(Array));
        expect(coston2.products.EntityManager.abi).toEqual(expect.any(Array));
        expect(coston2.products.FastUpdateIncentiveManager.abi).toEqual(expect.any(Array));
        expect(coston2.products.FastUpdater.abi).toEqual(expect.any(Array));
        expect(coston2.products.FastUpdatesConfiguration.abi).toEqual(expect.any(Array));
        expect(coston2.products.FdcHub.abi).toEqual(expect.any(Array));
        expect(coston2.products.FdcRequestFeeConfigurations.abi).toEqual(expect.any(Array));
        expect(coston2.products.FdcVerification.abi).toEqual(expect.any(Array));
        expect(coston2.products.FeeCalculator.abi).toEqual(expect.any(Array));
        expect(coston2.products.FlareAssetRegistry.abi).toEqual(expect.any(Array));
        expect(coston2.products.FlareContractRegistry.abi).toEqual(expect.any(Array));
        expect(coston2.products.FlareSystemsCalculator.abi).toEqual(expect.any(Array));
        expect(coston2.products.FlareSystemsManager.abi).toEqual(expect.any(Array));
        expect(coston2.products.FtsoFeedDecimals.abi).toEqual(expect.any(Array));
        expect(coston2.products.FtsoFeedIdConverter.abi).toEqual(expect.any(Array));
        expect(coston2.products.FtsoFeedPublisher.abi).toEqual(expect.any(Array));
        expect(coston2.products.FtsoInflationConfigurations.abi).toEqual(expect.any(Array));
        expect(coston2.products.FtsoManager.abi).toEqual(expect.any(Array));
        expect(coston2.products.FtsoRegistry.abi).toEqual(expect.any(Array));
        expect(coston2.products.FtsoRewardManager.abi).toEqual(expect.any(Array));
        expect(coston2.products.FtsoRewardOffersManager.abi).toEqual(expect.any(Array));
        expect(coston2.products.FtsoV2.abi).toEqual(expect.any(Array));
        expect(coston2.products.GovernanceSettings.abi).toEqual(expect.any(Array));
        expect(coston2.products.GovernanceVotePower.abi).toEqual(expect.any(Array));
        expect(coston2.products.JsonApiVerification.abi).toEqual(expect.any(Array));
        expect(coston2.products.PriceSubmitter.abi).toEqual(expect.any(Array));
        expect(coston2.products.ProtocolsV2.abi).toEqual(expect.any(Array));
        expect(coston2.products.RandomNumberV2.abi).toEqual(expect.any(Array));
        expect(coston2.products.Relay.abi).toEqual(expect.any(Array));
        expect(coston2.products.RewardManager.abi).toEqual(expect.any(Array));
        expect(coston2.products.RewardsV2.abi).toEqual(expect.any(Array));
        expect(coston2.products.Submission.abi).toEqual(expect.any(Array));
        expect(coston2.products.TestFtsoV2.abi).toEqual(expect.any(Array));
        expect(coston2.products.ValidatorRewardManager.abi).toEqual(expect.any(Array));
        expect(coston2.products.VoterRegistry.abi).toEqual(expect.any(Array));
        expect(coston2.products.VoterWhitelister.abi).toEqual(expect.any(Array));
        expect(coston2.products.WNat.abi).toEqual(expect.any(Array));
        expect(coston2.products.WNatDelegationFee.abi).toEqual(expect.any(Array));
    });

    test("nameToAbi finds every contract", () => {
        expect(nameToAbi("AssetManagerController", "coston2")).toEqual(coston2.interfaceAbis.IAssetManagerController);
        expect(nameToAbi("AssetManagerFXRP", "coston2")).toEqual(coston2.interfaceAbis.IAssetManager);
        expect(nameToAbi("ClaimSetupManager", "coston2")).toEqual(coston2.interfaceAbis.IClaimSetupManager);
        expect(nameToAbi("EntityManager", "coston2")).toEqual(coston2.interfaceAbis.IEntityManager);
        expect(nameToAbi("FastUpdateIncentiveManager", "coston2")).toEqual(
            coston2.interfaceAbis.IFastUpdateIncentiveManager
        );
        expect(nameToAbi("FastUpdater", "coston2")).toEqual(coston2.interfaceAbis.IFastUpdater);
        expect(nameToAbi("FastUpdatesConfiguration", "coston2")).toEqual(
            coston2.interfaceAbis.IFastUpdatesConfiguration
        );
        expect(nameToAbi("FdcHub", "coston2")).toEqual(coston2.interfaceAbis.IFdcHub);
        expect(nameToAbi("FdcRequestFeeConfigurations", "coston2")).toEqual(
            coston2.interfaceAbis.IFdcRequestFeeConfigurations
        );
        expect(nameToAbi("FdcVerification", "coston2")).toEqual(coston2.interfaceAbis.IFdcVerification);
        expect(nameToAbi("FeeCalculator", "coston2")).toEqual(coston2.interfaceAbis.IFeeCalculator);
        expect(nameToAbi("FlareAssetRegistry", "coston2")).toEqual(coston2.interfaceAbis.IFlareAssetRegistry);
        expect(nameToAbi("FlareContractRegistry", "coston2")).toEqual(coston2.interfaceAbis.IFlareContractRegistry);
        expect(nameToAbi("FlareSystemsCalculator", "coston2")).toEqual(coston2.interfaceAbis.IFlareSystemsCalculator);
        expect(nameToAbi("FlareSystemsManager", "coston2")).toEqual(coston2.interfaceAbis.IFlareSystemsManager);
        expect(nameToAbi("FtsoFeedDecimals", "coston2")).toEqual(coston2.interfaceAbis.IFtsoFeedDecimals);
        expect(nameToAbi("FtsoFeedIdConverter", "coston2")).toEqual(coston2.interfaceAbis.IFtsoFeedIdConverter);
        expect(nameToAbi("FtsoFeedPublisher", "coston2")).toEqual(coston2.interfaceAbis.IFtsoFeedPublisher);
        expect(nameToAbi("FtsoInflationConfigurations", "coston2")).toEqual(
            coston2.interfaceAbis.IFtsoInflationConfigurations
        );
        expect(nameToAbi("FtsoManager", "coston2")).toEqual(coston2.interfaceAbis.IFtsoManager);
        expect(nameToAbi("FtsoRegistry", "coston2")).toEqual(coston2.interfaceAbis.IFtsoRegistry);
        expect(nameToAbi("FtsoRewardManager", "coston2")).toEqual(coston2.interfaceAbis.IFtsoRewardManager);
        expect(nameToAbi("FtsoRewardOffersManager", "coston2")).toEqual(coston2.interfaceAbis.IFtsoRewardOffersManager);
        expect(nameToAbi("FtsoV2", "coston2")).toEqual(coston2.interfaceAbis.FtsoV2Interface);
        expect(nameToAbi("GovernanceSettings", "coston2")).toEqual(coston2.interfaceAbis.IGovernanceSettings);
        expect(nameToAbi("GovernanceVotePower", "coston2")).toEqual(coston2.interfaceAbis.IGovernanceVotePower);
        expect(nameToAbi("JsonApiVerification", "coston2")).toEqual(coston2.interfaceAbis.IJsonApiVerification);
        expect(nameToAbi("PriceSubmitter", "coston2")).toEqual(coston2.interfaceAbis.IPriceSubmitter);
        expect(nameToAbi("ProtocolsV2", "coston2")).toEqual(coston2.interfaceAbis.ProtocolsV2Interface);
        expect(nameToAbi("RandomNumberV2", "coston2")).toEqual(coston2.interfaceAbis.RandomNumberV2Interface);
        expect(nameToAbi("Relay", "coston2")).toEqual(coston2.interfaceAbis.IRelay);
        expect(nameToAbi("RewardManager", "coston2")).toEqual(coston2.interfaceAbis.IRewardManager);
        expect(nameToAbi("RewardsV2", "coston2")).toEqual(coston2.interfaceAbis.RewardsV2Interface);
        expect(nameToAbi("Submission", "coston2")).toEqual(coston2.interfaceAbis.ISubmission);
        expect(nameToAbi("TestFtsoV2", "coston2")).toEqual(coston2.interfaceAbis.TestFtsoV2Interface);
        expect(nameToAbi("ValidatorRewardManager", "coston2")).toEqual(coston2.interfaceAbis.IGenericRewardManager);
        expect(nameToAbi("VoterRegistry", "coston2")).toEqual(coston2.interfaceAbis.IVoterRegistry);
        expect(nameToAbi("VoterWhitelister", "coston2")).toEqual(coston2.interfaceAbis.IVoterWhitelister);
        expect(nameToAbi("WNat", "coston2")).toEqual(coston2.interfaceAbis.IWNat);
        expect(nameToAbi("WNatDelegationFee", "coston2")).toEqual(coston2.interfaceAbis.IWNatDelegationFee);

        expect(coston2.nameToAbi("AssetManagerController")).toEqual(coston2.interfaceAbis.IAssetManagerController);
        expect(coston2.nameToAbi("AssetManagerFXRP")).toEqual(coston2.interfaceAbis.IAssetManager);
        expect(coston2.nameToAbi("ClaimSetupManager")).toEqual(coston2.interfaceAbis.IClaimSetupManager);
        expect(coston2.nameToAbi("EntityManager")).toEqual(coston2.interfaceAbis.IEntityManager);
        expect(coston2.nameToAbi("FastUpdateIncentiveManager")).toEqual(
            coston2.interfaceAbis.IFastUpdateIncentiveManager
        );
        expect(coston2.nameToAbi("FastUpdater")).toEqual(coston2.interfaceAbis.IFastUpdater);
        expect(coston2.nameToAbi("FastUpdatesConfiguration")).toEqual(coston2.interfaceAbis.IFastUpdatesConfiguration);
        expect(coston2.nameToAbi("FdcHub")).toEqual(coston2.interfaceAbis.IFdcHub);
        expect(coston2.nameToAbi("FdcRequestFeeConfigurations")).toEqual(
            coston2.interfaceAbis.IFdcRequestFeeConfigurations
        );
        expect(coston2.nameToAbi("FdcVerification")).toEqual(coston2.interfaceAbis.IFdcVerification);
        expect(coston2.nameToAbi("FeeCalculator")).toEqual(coston2.interfaceAbis.IFeeCalculator);
        expect(coston2.nameToAbi("FlareAssetRegistry")).toEqual(coston2.interfaceAbis.IFlareAssetRegistry);
        expect(coston2.nameToAbi("FlareContractRegistry")).toEqual(coston2.interfaceAbis.IFlareContractRegistry);
        expect(coston2.nameToAbi("FlareSystemsCalculator")).toEqual(coston2.interfaceAbis.IFlareSystemsCalculator);
        expect(coston2.nameToAbi("FlareSystemsManager")).toEqual(coston2.interfaceAbis.IFlareSystemsManager);
        expect(coston2.nameToAbi("FtsoFeedDecimals")).toEqual(coston2.interfaceAbis.IFtsoFeedDecimals);
        expect(coston2.nameToAbi("FtsoFeedIdConverter")).toEqual(coston2.interfaceAbis.IFtsoFeedIdConverter);
        expect(coston2.nameToAbi("FtsoFeedPublisher")).toEqual(coston2.interfaceAbis.IFtsoFeedPublisher);
        expect(coston2.nameToAbi("FtsoInflationConfigurations")).toEqual(
            coston2.interfaceAbis.IFtsoInflationConfigurations
        );
        expect(coston2.nameToAbi("FtsoManager")).toEqual(coston2.interfaceAbis.IFtsoManager);
        expect(coston2.nameToAbi("FtsoRegistry")).toEqual(coston2.interfaceAbis.IFtsoRegistry);
        expect(coston2.nameToAbi("FtsoRewardManager")).toEqual(coston2.interfaceAbis.IFtsoRewardManager);
        expect(coston2.nameToAbi("FtsoRewardOffersManager")).toEqual(coston2.interfaceAbis.IFtsoRewardOffersManager);
        expect(coston2.nameToAbi("FtsoV2")).toEqual(coston2.interfaceAbis.FtsoV2Interface);
        expect(coston2.nameToAbi("GovernanceSettings")).toEqual(coston2.interfaceAbis.IGovernanceSettings);
        expect(coston2.nameToAbi("GovernanceVotePower")).toEqual(coston2.interfaceAbis.IGovernanceVotePower);
        expect(coston2.nameToAbi("JsonApiVerification")).toEqual(coston2.interfaceAbis.IJsonApiVerification);
        expect(coston2.nameToAbi("PriceSubmitter")).toEqual(coston2.interfaceAbis.IPriceSubmitter);
        expect(coston2.nameToAbi("ProtocolsV2")).toEqual(coston2.interfaceAbis.ProtocolsV2Interface);
        expect(coston2.nameToAbi("RandomNumberV2")).toEqual(coston2.interfaceAbis.RandomNumberV2Interface);
        expect(coston2.nameToAbi("Relay")).toEqual(coston2.interfaceAbis.IRelay);
        expect(coston2.nameToAbi("RewardManager")).toEqual(coston2.interfaceAbis.IRewardManager);
        expect(coston2.nameToAbi("RewardsV2")).toEqual(coston2.interfaceAbis.RewardsV2Interface);
        expect(coston2.nameToAbi("Submission")).toEqual(coston2.interfaceAbis.ISubmission);
        expect(coston2.nameToAbi("TestFtsoV2")).toEqual(coston2.interfaceAbis.TestFtsoV2Interface);
        expect(coston2.nameToAbi("ValidatorRewardManager")).toEqual(coston2.interfaceAbis.IGenericRewardManager);
        expect(coston2.nameToAbi("VoterRegistry")).toEqual(coston2.interfaceAbis.IVoterRegistry);
        expect(coston2.nameToAbi("VoterWhitelister")).toEqual(coston2.interfaceAbis.IVoterWhitelister);
        expect(coston2.nameToAbi("WNat")).toEqual(coston2.interfaceAbis.IWNat);
        expect(coston2.nameToAbi("WNatDelegationFee")).toEqual(coston2.interfaceAbis.IWNatDelegationFee);
    });

    test("interfaceToAbi finds every contract", () => {
        expect(interfaceToAbi("AgentInfo", "coston2")).toEqual(coston2.interfaceAbis.AgentInfo);
        expect(interfaceToAbi("AgentSettings", "coston2")).toEqual(coston2.interfaceAbis.AgentSettings);
        expect(interfaceToAbi("AssetManagerSettings", "coston2")).toEqual(coston2.interfaceAbis.AssetManagerSettings);
        expect(interfaceToAbi("AvailableAgentInfo", "coston2")).toEqual(coston2.interfaceAbis.AvailableAgentInfo);
        expect(interfaceToAbi("CollateralReservationInfo", "coston2")).toEqual(
            coston2.interfaceAbis.CollateralReservationInfo
        );
        expect(interfaceToAbi("CollateralType", "coston2")).toEqual(coston2.interfaceAbis.CollateralType);
        expect(interfaceToAbi("ContractRegistry", "coston2")).toEqual(coston2.interfaceAbis.ContractRegistry);
        expect(interfaceToAbi("EmergencyPause", "coston2")).toEqual(coston2.interfaceAbis.EmergencyPause);
        expect(interfaceToAbi("FtsoV2Interface", "coston2")).toEqual(coston2.interfaceAbis.FtsoV2Interface);
        expect(interfaceToAbi("IAddressBinder", "coston2")).toEqual(coston2.interfaceAbis.IAddressBinder);
        expect(interfaceToAbi("IAddressValidity", "coston2")).toEqual(coston2.interfaceAbis.IAddressValidity);
        expect(interfaceToAbi("IAddressValidityVerification", "coston2")).toEqual(
            coston2.interfaceAbis.IAddressValidityVerification
        );
        expect(interfaceToAbi("IAgentAlwaysAllowedMinters", "coston2")).toEqual(
            coston2.interfaceAbis.IAgentAlwaysAllowedMinters
        );
        expect(interfaceToAbi("IAgentOwnerRegistry", "coston2")).toEqual(coston2.interfaceAbis.IAgentOwnerRegistry);
        expect(interfaceToAbi("IAgentPing", "coston2")).toEqual(coston2.interfaceAbis.IAgentPing);
        expect(interfaceToAbi("IAgentVaultsFacet", "coston2")).toEqual(coston2.interfaceAbis.IAgentVaultsFacet);
        expect(interfaceToAbi("IAssetManager", "coston2")).toEqual(coston2.interfaceAbis.IAssetManager);
        expect(interfaceToAbi("IAssetManagerController", "coston2")).toEqual(
            coston2.interfaceAbis.IAssetManagerController
        );
        expect(interfaceToAbi("IAssetManagerEvents", "coston2")).toEqual(coston2.interfaceAbis.IAssetManagerEvents);
        expect(interfaceToAbi("IBalanceDecreasingTransaction", "coston2")).toEqual(
            coston2.interfaceAbis.IBalanceDecreasingTransaction
        );
        expect(interfaceToAbi("IBalanceDecreasingTransactionVerification", "coston2")).toEqual(
            coston2.interfaceAbis.IBalanceDecreasingTransactionVerification
        );
        expect(interfaceToAbi("ICChainStake", "coston2")).toEqual(coston2.interfaceAbis.ICChainStake);
        expect(interfaceToAbi("ICChainVotePower", "coston2")).toEqual(coston2.interfaceAbis.ICChainVotePower);
        expect(interfaceToAbi("IClaimSetupManager", "coston2")).toEqual(coston2.interfaceAbis.IClaimSetupManager);
        expect(interfaceToAbi("ICollateralizable", "coston2")).toEqual(coston2.interfaceAbis.ICollateralizable);
        expect(interfaceToAbi("IConfirmedBlockHeightExists", "coston2")).toEqual(
            coston2.interfaceAbis.IConfirmedBlockHeightExists
        );
        expect(interfaceToAbi("IConfirmedBlockHeightExistsVerification", "coston2")).toEqual(
            coston2.interfaceAbis.IConfirmedBlockHeightExistsVerification
        );
        expect(interfaceToAbi("ICoreVaultClient", "coston2")).toEqual(coston2.interfaceAbis.ICoreVaultClient);
        expect(interfaceToAbi("ICoreVaultClientSettings", "coston2")).toEqual(
            coston2.interfaceAbis.ICoreVaultClientSettings
        );
        expect(interfaceToAbi("IDelegationAccount", "coston2")).toEqual(coston2.interfaceAbis.IDelegationAccount);
        expect(interfaceToAbi("IDiamond", "coston2")).toEqual(coston2.interfaceAbis.IDiamond);
        expect(interfaceToAbi("IDiamondCut", "coston2")).toEqual(coston2.interfaceAbis.IDiamondCut);
        expect(interfaceToAbi("IDiamondLoupe", "coston2")).toEqual(coston2.interfaceAbis.IDiamondLoupe);
        expect(interfaceToAbi("IDistributionToDelegators", "coston2")).toEqual(
            coston2.interfaceAbis.IDistributionToDelegators
        );
        expect(interfaceToAbi("IERC165", "coston2")).toEqual(coston2.interfaceAbis.IERC165);
        expect(interfaceToAbi("IERC173", "coston2")).toEqual(coston2.interfaceAbis.IERC173);
        expect(interfaceToAbi("IEVMTransaction", "coston2")).toEqual(coston2.interfaceAbis.IEVMTransaction);
        expect(interfaceToAbi("IEVMTransactionVerification", "coston2")).toEqual(
            coston2.interfaceAbis.IEVMTransactionVerification
        );
        expect(interfaceToAbi("IEntityManager", "coston2")).toEqual(coston2.interfaceAbis.IEntityManager);
        expect(interfaceToAbi("IExecutorsFacet", "coston2")).toEqual(coston2.interfaceAbis.IExecutorsFacet);
        expect(interfaceToAbi("IFastUpdateIncentiveManager", "coston2")).toEqual(
            coston2.interfaceAbis.IFastUpdateIncentiveManager
        );
        expect(interfaceToAbi("IFastUpdater", "coston2")).toEqual(coston2.interfaceAbis.IFastUpdater);
        expect(interfaceToAbi("IFastUpdatesConfiguration", "coston2")).toEqual(
            coston2.interfaceAbis.IFastUpdatesConfiguration
        );
        expect(interfaceToAbi("IFdcHub", "coston2")).toEqual(coston2.interfaceAbis.IFdcHub);
        expect(interfaceToAbi("IFdcInflationConfigurations", "coston2")).toEqual(
            coston2.interfaceAbis.IFdcInflationConfigurations
        );
        expect(interfaceToAbi("IFdcRequestFeeConfigurations", "coston2")).toEqual(
            coston2.interfaceAbis.IFdcRequestFeeConfigurations
        );
        expect(interfaceToAbi("IFdcVerification", "coston2")).toEqual(coston2.interfaceAbis.IFdcVerification);
        expect(interfaceToAbi("IFeeCalculator", "coston2")).toEqual(coston2.interfaceAbis.IFeeCalculator);
        expect(interfaceToAbi("IFlareAssetRegistry", "coston2")).toEqual(coston2.interfaceAbis.IFlareAssetRegistry);
        expect(interfaceToAbi("IFlareContractRegistry", "coston2")).toEqual(
            coston2.interfaceAbis.IFlareContractRegistry
        );
        expect(interfaceToAbi("IFlareDaemonize", "coston2")).toEqual(coston2.interfaceAbis.IFlareDaemonize);
        expect(interfaceToAbi("IFlareSystemsCalculator", "coston2")).toEqual(
            coston2.interfaceAbis.IFlareSystemsCalculator
        );
        expect(interfaceToAbi("IFlareSystemsManager", "coston2")).toEqual(coston2.interfaceAbis.IFlareSystemsManager);
        expect(interfaceToAbi("IFtso", "coston2")).toEqual(coston2.interfaceAbis.IFtso);
        expect(interfaceToAbi("IFtsoFeedDecimals", "coston2")).toEqual(coston2.interfaceAbis.IFtsoFeedDecimals);
        expect(interfaceToAbi("IFtsoFeedIdConverter", "coston2")).toEqual(coston2.interfaceAbis.IFtsoFeedIdConverter);
        expect(interfaceToAbi("IFtsoFeedPublisher", "coston2")).toEqual(coston2.interfaceAbis.IFtsoFeedPublisher);
        expect(interfaceToAbi("IFtsoGenesis", "coston2")).toEqual(coston2.interfaceAbis.IFtsoGenesis);
        expect(interfaceToAbi("IFtsoInflationConfigurations", "coston2")).toEqual(
            coston2.interfaceAbis.IFtsoInflationConfigurations
        );
        expect(interfaceToAbi("IFtsoManager", "coston2")).toEqual(coston2.interfaceAbis.IFtsoManager);
        expect(interfaceToAbi("IFtsoManagerGenesis", "coston2")).toEqual(coston2.interfaceAbis.IFtsoManagerGenesis);
        expect(interfaceToAbi("IFtsoRegistry", "coston2")).toEqual(coston2.interfaceAbis.IFtsoRegistry);
        expect(interfaceToAbi("IFtsoRegistryGenesis", "coston2")).toEqual(coston2.interfaceAbis.IFtsoRegistryGenesis);
        expect(interfaceToAbi("IFtsoRewardManager", "coston2")).toEqual(coston2.interfaceAbis.IFtsoRewardManager);
        expect(interfaceToAbi("IFtsoRewardOffersManager", "coston2")).toEqual(
            coston2.interfaceAbis.IFtsoRewardOffersManager
        );
        expect(interfaceToAbi("IGenericRewardManager", "coston2")).toEqual(coston2.interfaceAbis.IGenericRewardManager);
        expect(interfaceToAbi("IGovernanceSettings", "coston2")).toEqual(coston2.interfaceAbis.IGovernanceSettings);
        expect(interfaceToAbi("IGovernanceVotePower", "coston2")).toEqual(coston2.interfaceAbis.IGovernanceVotePower);
        expect(interfaceToAbi("IGovernor", "coston2")).toEqual(coston2.interfaceAbis.IGovernor);
        expect(interfaceToAbi("IIAddressUpdatable", "coston2")).toEqual(coston2.interfaceAbis.IIAddressUpdatable);
        expect(interfaceToAbi("IIAddressUpdater", "coston2")).toEqual(coston2.interfaceAbis.IIAddressUpdater);
        expect(interfaceToAbi("IIClaimSetupManager", "coston2")).toEqual(coston2.interfaceAbis.IIClaimSetupManager);
        expect(interfaceToAbi("IICleanable", "coston2")).toEqual(coston2.interfaceAbis.IICleanable);
        expect(interfaceToAbi("IICleanupBlockNumberManager", "coston2")).toEqual(
            coston2.interfaceAbis.IICleanupBlockNumberManager
        );
        expect(interfaceToAbi("IICombinedNatBalance", "coston2")).toEqual(coston2.interfaceAbis.IICombinedNatBalance);
        expect(interfaceToAbi("IICustomFeed", "coston2")).toEqual(coston2.interfaceAbis.IICustomFeed);
        expect(interfaceToAbi("IIERC20WithMetadata", "coston2")).toEqual(coston2.interfaceAbis.IIERC20WithMetadata);
        expect(interfaceToAbi("IIEntityManager", "coston2")).toEqual(coston2.interfaceAbis.IIEntityManager);
        expect(interfaceToAbi("IIFastUpdaterView", "coston2")).toEqual(coston2.interfaceAbis.IIFastUpdaterView);
        expect(interfaceToAbi("IIFlareAssetRegistry", "coston2")).toEqual(coston2.interfaceAbis.IIFlareAssetRegistry);
        expect(interfaceToAbi("IIFlareAssetRegistryProvider", "coston2")).toEqual(
            coston2.interfaceAbis.IIFlareAssetRegistryProvider
        );
        expect(interfaceToAbi("IIFlareSystemsCalculator", "coston2")).toEqual(
            coston2.interfaceAbis.IIFlareSystemsCalculator
        );
        expect(interfaceToAbi("IIFlareSystemsManager", "coston2")).toEqual(coston2.interfaceAbis.IIFlareSystemsManager);
        expect(interfaceToAbi("IIFtso", "coston2")).toEqual(coston2.interfaceAbis.IIFtso);
        expect(interfaceToAbi("IIFtsoFeedPublisher", "coston2")).toEqual(coston2.interfaceAbis.IIFtsoFeedPublisher);
        expect(interfaceToAbi("IIFtsoManager", "coston2")).toEqual(coston2.interfaceAbis.IIFtsoManager);
        expect(interfaceToAbi("IIFtsoManagerProxy", "coston2")).toEqual(coston2.interfaceAbis.IIFtsoManagerProxy);
        expect(interfaceToAbi("IIFtsoManagerV1", "coston2")).toEqual(coston2.interfaceAbis.IIFtsoManagerV1);
        expect(interfaceToAbi("IIFtsoRegistry", "coston2")).toEqual(coston2.interfaceAbis.IIFtsoRegistry);
        expect(interfaceToAbi("IIFtsoRewardManager", "coston2")).toEqual(coston2.interfaceAbis.IIFtsoRewardManager);
        expect(interfaceToAbi("IIGenericRewardManager", "coston2")).toEqual(
            coston2.interfaceAbis.IIGenericRewardManager
        );
        expect(interfaceToAbi("IIGovernanceVotePower", "coston2")).toEqual(coston2.interfaceAbis.IIGovernanceVotePower);
        expect(interfaceToAbi("IIGovernorProposer", "coston2")).toEqual(coston2.interfaceAbis.IIGovernorProposer);
        expect(interfaceToAbi("IIIncentivePoolAllocation", "coston2")).toEqual(
            coston2.interfaceAbis.IIIncentivePoolAllocation
        );
        expect(interfaceToAbi("IIIncentivePoolPercentageProvider", "coston2")).toEqual(
            coston2.interfaceAbis.IIIncentivePoolPercentageProvider
        );
        expect(interfaceToAbi("IIIncentivePoolReceiver", "coston2")).toEqual(
            coston2.interfaceAbis.IIIncentivePoolReceiver
        );
        expect(interfaceToAbi("IIIncentivePoolSharingPercentageProvider", "coston2")).toEqual(
            coston2.interfaceAbis.IIIncentivePoolSharingPercentageProvider
        );
        expect(interfaceToAbi("IIInflationAllocation", "coston2")).toEqual(coston2.interfaceAbis.IIInflationAllocation);
        expect(interfaceToAbi("IIInflationReceiver", "coston2")).toEqual(coston2.interfaceAbis.IIInflationReceiver);
        expect(interfaceToAbi("IIInflationReceiverV1", "coston2")).toEqual(coston2.interfaceAbis.IIInflationReceiverV1);
        expect(interfaceToAbi("IIInflationV1", "coston2")).toEqual(coston2.interfaceAbis.IIInflationV1);
        expect(interfaceToAbi("IINodePossessionVerifier", "coston2")).toEqual(
            coston2.interfaceAbis.IINodePossessionVerifier
        );
        expect(interfaceToAbi("IIPChainStakeMirrorVerifier", "coston2")).toEqual(
            coston2.interfaceAbis.IIPChainStakeMirrorVerifier
        );
        expect(interfaceToAbi("IIPollingFoundation", "coston2")).toEqual(coston2.interfaceAbis.IIPollingFoundation);
        expect(interfaceToAbi("IIPollingManagementGroup", "coston2")).toEqual(
            coston2.interfaceAbis.IIPollingManagementGroup
        );
        expect(interfaceToAbi("IIPreInflationCalculation", "coston2")).toEqual(
            coston2.interfaceAbis.IIPreInflationCalculation
        );
        expect(interfaceToAbi("IIPriceSubmitter", "coston2")).toEqual(coston2.interfaceAbis.IIPriceSubmitter);
        expect(interfaceToAbi("IIPublicKeyVerifier", "coston2")).toEqual(coston2.interfaceAbis.IIPublicKeyVerifier);
        expect(interfaceToAbi("IIRNat", "coston2")).toEqual(coston2.interfaceAbis.IIRNat);
        expect(interfaceToAbi("IIRNatAccount", "coston2")).toEqual(coston2.interfaceAbis.IIRNatAccount);
        expect(interfaceToAbi("IIRandomProvider", "coston2")).toEqual(coston2.interfaceAbis.IIRandomProvider);
        expect(interfaceToAbi("IIRelay", "coston2")).toEqual(coston2.interfaceAbis.IIRelay);
        expect(interfaceToAbi("IIRewardEpochSwitchoverTrigger", "coston2")).toEqual(
            coston2.interfaceAbis.IIRewardEpochSwitchoverTrigger
        );
        expect(interfaceToAbi("IIRewardManager", "coston2")).toEqual(coston2.interfaceAbis.IIRewardManager);
        expect(interfaceToAbi("IISubmission", "coston2")).toEqual(coston2.interfaceAbis.IISubmission);
        expect(interfaceToAbi("IISupply", "coston2")).toEqual(coston2.interfaceAbis.IISupply);
        expect(interfaceToAbi("IITokenPool", "coston2")).toEqual(coston2.interfaceAbis.IITokenPool);
        expect(interfaceToAbi("IIVPContract", "coston2")).toEqual(coston2.interfaceAbis.IIVPContract);
        expect(interfaceToAbi("IIVPToken", "coston2")).toEqual(coston2.interfaceAbis.IIVPToken);
        expect(interfaceToAbi("IIVoterRegistrationTrigger", "coston2")).toEqual(
            coston2.interfaceAbis.IIVoterRegistrationTrigger
        );
        expect(interfaceToAbi("IIVoterRegistry", "coston2")).toEqual(coston2.interfaceAbis.IIVoterRegistry);
        expect(interfaceToAbi("IIVoterWhitelister", "coston2")).toEqual(coston2.interfaceAbis.IIVoterWhitelister);
        expect(interfaceToAbi("IIncreaseManager", "coston2")).toEqual(coston2.interfaceAbis.IIncreaseManager);
        expect(interfaceToAbi("IInflationGenesis", "coston2")).toEqual(coston2.interfaceAbis.IInflationGenesis);
        expect(interfaceToAbi("IInstructionFeesFacet", "coston2")).toEqual(coston2.interfaceAbis.IInstructionFeesFacet);
        expect(interfaceToAbi("IInstructionsFacet", "coston2")).toEqual(coston2.interfaceAbis.IInstructionsFacet);
        expect(interfaceToAbi("IJsonApi", "coston2")).toEqual(coston2.interfaceAbis.IJsonApi);
        expect(interfaceToAbi("IJsonApiVerification", "coston2")).toEqual(coston2.interfaceAbis.IJsonApiVerification);
        expect(interfaceToAbi("IMasterAccountController", "coston2")).toEqual(
            coston2.interfaceAbis.IMasterAccountController
        );
        expect(interfaceToAbi("IPChainStakeMirror", "coston2")).toEqual(coston2.interfaceAbis.IPChainStakeMirror);
        expect(interfaceToAbi("IPChainStakeMirrorMultiSigVoting", "coston2")).toEqual(
            coston2.interfaceAbis.IPChainStakeMirrorMultiSigVoting
        );
        expect(interfaceToAbi("IPChainStakeMirrorVerifier", "coston2")).toEqual(
            coston2.interfaceAbis.IPChainStakeMirrorVerifier
        );
        expect(interfaceToAbi("IPChainVotePower", "coston2")).toEqual(coston2.interfaceAbis.IPChainVotePower);
        expect(interfaceToAbi("IPayment", "coston2")).toEqual(coston2.interfaceAbis.IPayment);
        expect(interfaceToAbi("IPaymentProofsFacet", "coston2")).toEqual(coston2.interfaceAbis.IPaymentProofsFacet);
        expect(interfaceToAbi("IPaymentVerification", "coston2")).toEqual(coston2.interfaceAbis.IPaymentVerification);
        expect(interfaceToAbi("IPersonalAccount", "coston2")).toEqual(coston2.interfaceAbis.IPersonalAccount);
        expect(interfaceToAbi("IPersonalAccountsFacet", "coston2")).toEqual(
            coston2.interfaceAbis.IPersonalAccountsFacet
        );
        expect(interfaceToAbi("IPollingFtso", "coston2")).toEqual(coston2.interfaceAbis.IPollingFtso);
        expect(interfaceToAbi("IPollingManagementGroup", "coston2")).toEqual(
            coston2.interfaceAbis.IPollingManagementGroup
        );
        expect(interfaceToAbi("IPriceSubmitter", "coston2")).toEqual(coston2.interfaceAbis.IPriceSubmitter);
        expect(interfaceToAbi("IRNat", "coston2")).toEqual(coston2.interfaceAbis.IRNat);
        expect(interfaceToAbi("IRNatAccount", "coston2")).toEqual(coston2.interfaceAbis.IRNatAccount);
        expect(interfaceToAbi("IRandomProvider", "coston2")).toEqual(coston2.interfaceAbis.IRandomProvider);
        expect(interfaceToAbi("IRedemptionTimeExtension", "coston2")).toEqual(
            coston2.interfaceAbis.IRedemptionTimeExtension
        );
        expect(interfaceToAbi("IReferencedPaymentNonexistence", "coston2")).toEqual(
            coston2.interfaceAbis.IReferencedPaymentNonexistence
        );
        expect(interfaceToAbi("IReferencedPaymentNonexistenceVerification", "coston2")).toEqual(
            coston2.interfaceAbis.IReferencedPaymentNonexistenceVerification
        );
        expect(interfaceToAbi("IRelay", "coston2")).toEqual(coston2.interfaceAbis.IRelay);
        expect(interfaceToAbi("IRewardManager", "coston2")).toEqual(coston2.interfaceAbis.IRewardManager);
        expect(interfaceToAbi("ISubmission", "coston2")).toEqual(coston2.interfaceAbis.ISubmission);
        expect(interfaceToAbi("ISwapFacet", "coston2")).toEqual(coston2.interfaceAbis.ISwapFacet);
        expect(interfaceToAbi("ITimelockFacet", "coston2")).toEqual(coston2.interfaceAbis.ITimelockFacet);
        expect(interfaceToAbi("ITypeTemplate", "coston2")).toEqual(coston2.interfaceAbis.ITypeTemplate);
        expect(interfaceToAbi("ITypeTemplateVerification", "coston2")).toEqual(
            coston2.interfaceAbis.ITypeTemplateVerification
        );
        expect(interfaceToAbi("IUpdateValidators", "coston2")).toEqual(coston2.interfaceAbis.IUpdateValidators);
        expect(interfaceToAbi("IVPContractEvents", "coston2")).toEqual(coston2.interfaceAbis.IVPContractEvents);
        expect(interfaceToAbi("IVPToken", "coston2")).toEqual(coston2.interfaceAbis.IVPToken);
        expect(interfaceToAbi("IValidatorRegistry", "coston2")).toEqual(coston2.interfaceAbis.IValidatorRegistry);
        expect(interfaceToAbi("IValidatorRewardOffersManager", "coston2")).toEqual(
            coston2.interfaceAbis.IValidatorRewardOffersManager
        );
        expect(interfaceToAbi("IVaultsFacet", "coston2")).toEqual(coston2.interfaceAbis.IVaultsFacet);
        expect(interfaceToAbi("IVoterPreRegistry", "coston2")).toEqual(coston2.interfaceAbis.IVoterPreRegistry);
        expect(interfaceToAbi("IVoterRegistry", "coston2")).toEqual(coston2.interfaceAbis.IVoterRegistry);
        expect(interfaceToAbi("IVoterWhitelister", "coston2")).toEqual(coston2.interfaceAbis.IVoterWhitelister);
        expect(interfaceToAbi("IWNat", "coston2")).toEqual(coston2.interfaceAbis.IWNat);
        expect(interfaceToAbi("IWNatDelegationFee", "coston2")).toEqual(coston2.interfaceAbis.IWNatDelegationFee);
        expect(interfaceToAbi("IWeb2Json", "coston2")).toEqual(coston2.interfaceAbis.IWeb2Json);
        expect(interfaceToAbi("IWeb2JsonVerification", "coston2")).toEqual(coston2.interfaceAbis.IWeb2JsonVerification);
        expect(interfaceToAbi("IXrplProviderWalletsFacet", "coston2")).toEqual(
            coston2.interfaceAbis.IXrplProviderWalletsFacet
        );
        expect(interfaceToAbi("ProtocolsV2Interface", "coston2")).toEqual(coston2.interfaceAbis.ProtocolsV2Interface);
        expect(interfaceToAbi("RandomNumberV2Interface", "coston2")).toEqual(
            coston2.interfaceAbis.RandomNumberV2Interface
        );
        expect(interfaceToAbi("RedemptionRequestInfo", "coston2")).toEqual(coston2.interfaceAbis.RedemptionRequestInfo);
        expect(interfaceToAbi("RedemptionTicketInfo", "coston2")).toEqual(coston2.interfaceAbis.RedemptionTicketInfo);
        expect(interfaceToAbi("RewardsV2Interface", "coston2")).toEqual(coston2.interfaceAbis.RewardsV2Interface);
        expect(interfaceToAbi("TestFtsoV2Interface", "coston2")).toEqual(coston2.interfaceAbis.TestFtsoV2Interface);

        expect(coston2.interfaceToAbi("AgentInfo")).toEqual(coston2.interfaceAbis.AgentInfo);
        expect(coston2.interfaceToAbi("AgentSettings")).toEqual(coston2.interfaceAbis.AgentSettings);
        expect(coston2.interfaceToAbi("AssetManagerSettings")).toEqual(coston2.interfaceAbis.AssetManagerSettings);
        expect(coston2.interfaceToAbi("AvailableAgentInfo")).toEqual(coston2.interfaceAbis.AvailableAgentInfo);
        expect(coston2.interfaceToAbi("CollateralReservationInfo")).toEqual(
            coston2.interfaceAbis.CollateralReservationInfo
        );
        expect(coston2.interfaceToAbi("CollateralType")).toEqual(coston2.interfaceAbis.CollateralType);
        expect(coston2.interfaceToAbi("ContractRegistry")).toEqual(coston2.interfaceAbis.ContractRegistry);
        expect(coston2.interfaceToAbi("EmergencyPause")).toEqual(coston2.interfaceAbis.EmergencyPause);
        expect(coston2.interfaceToAbi("FtsoV2Interface")).toEqual(coston2.interfaceAbis.FtsoV2Interface);
        expect(coston2.interfaceToAbi("IAddressBinder")).toEqual(coston2.interfaceAbis.IAddressBinder);
        expect(coston2.interfaceToAbi("IAddressValidity")).toEqual(coston2.interfaceAbis.IAddressValidity);
        expect(coston2.interfaceToAbi("IAddressValidityVerification")).toEqual(
            coston2.interfaceAbis.IAddressValidityVerification
        );
        expect(coston2.interfaceToAbi("IAgentAlwaysAllowedMinters")).toEqual(
            coston2.interfaceAbis.IAgentAlwaysAllowedMinters
        );
        expect(coston2.interfaceToAbi("IAgentOwnerRegistry")).toEqual(coston2.interfaceAbis.IAgentOwnerRegistry);
        expect(coston2.interfaceToAbi("IAgentPing")).toEqual(coston2.interfaceAbis.IAgentPing);
        expect(coston2.interfaceToAbi("IAgentVaultsFacet")).toEqual(coston2.interfaceAbis.IAgentVaultsFacet);
        expect(coston2.interfaceToAbi("IAssetManager")).toEqual(coston2.interfaceAbis.IAssetManager);
        expect(coston2.interfaceToAbi("IAssetManagerController")).toEqual(
            coston2.interfaceAbis.IAssetManagerController
        );
        expect(coston2.interfaceToAbi("IAssetManagerEvents")).toEqual(coston2.interfaceAbis.IAssetManagerEvents);
        expect(coston2.interfaceToAbi("IBalanceDecreasingTransaction")).toEqual(
            coston2.interfaceAbis.IBalanceDecreasingTransaction
        );
        expect(coston2.interfaceToAbi("IBalanceDecreasingTransactionVerification")).toEqual(
            coston2.interfaceAbis.IBalanceDecreasingTransactionVerification
        );
        expect(coston2.interfaceToAbi("ICChainStake")).toEqual(coston2.interfaceAbis.ICChainStake);
        expect(coston2.interfaceToAbi("ICChainVotePower")).toEqual(coston2.interfaceAbis.ICChainVotePower);
        expect(coston2.interfaceToAbi("IClaimSetupManager")).toEqual(coston2.interfaceAbis.IClaimSetupManager);
        expect(coston2.interfaceToAbi("ICollateralizable")).toEqual(coston2.interfaceAbis.ICollateralizable);
        expect(coston2.interfaceToAbi("IConfirmedBlockHeightExists")).toEqual(
            coston2.interfaceAbis.IConfirmedBlockHeightExists
        );
        expect(coston2.interfaceToAbi("IConfirmedBlockHeightExistsVerification")).toEqual(
            coston2.interfaceAbis.IConfirmedBlockHeightExistsVerification
        );
        expect(coston2.interfaceToAbi("ICoreVaultClient")).toEqual(coston2.interfaceAbis.ICoreVaultClient);
        expect(coston2.interfaceToAbi("ICoreVaultClientSettings")).toEqual(
            coston2.interfaceAbis.ICoreVaultClientSettings
        );
        expect(coston2.interfaceToAbi("IDelegationAccount")).toEqual(coston2.interfaceAbis.IDelegationAccount);
        expect(coston2.interfaceToAbi("IDiamond")).toEqual(coston2.interfaceAbis.IDiamond);
        expect(coston2.interfaceToAbi("IDiamondCut")).toEqual(coston2.interfaceAbis.IDiamondCut);
        expect(coston2.interfaceToAbi("IDiamondLoupe")).toEqual(coston2.interfaceAbis.IDiamondLoupe);
        expect(coston2.interfaceToAbi("IDistributionToDelegators")).toEqual(
            coston2.interfaceAbis.IDistributionToDelegators
        );
        expect(coston2.interfaceToAbi("IERC165")).toEqual(coston2.interfaceAbis.IERC165);
        expect(coston2.interfaceToAbi("IERC173")).toEqual(coston2.interfaceAbis.IERC173);
        expect(coston2.interfaceToAbi("IEVMTransaction")).toEqual(coston2.interfaceAbis.IEVMTransaction);
        expect(coston2.interfaceToAbi("IEVMTransactionVerification")).toEqual(
            coston2.interfaceAbis.IEVMTransactionVerification
        );
        expect(coston2.interfaceToAbi("IEntityManager")).toEqual(coston2.interfaceAbis.IEntityManager);
        expect(coston2.interfaceToAbi("IExecutorsFacet")).toEqual(coston2.interfaceAbis.IExecutorsFacet);
        expect(coston2.interfaceToAbi("IFastUpdateIncentiveManager")).toEqual(
            coston2.interfaceAbis.IFastUpdateIncentiveManager
        );
        expect(coston2.interfaceToAbi("IFastUpdater")).toEqual(coston2.interfaceAbis.IFastUpdater);
        expect(coston2.interfaceToAbi("IFastUpdatesConfiguration")).toEqual(
            coston2.interfaceAbis.IFastUpdatesConfiguration
        );
        expect(coston2.interfaceToAbi("IFdcHub")).toEqual(coston2.interfaceAbis.IFdcHub);
        expect(coston2.interfaceToAbi("IFdcInflationConfigurations")).toEqual(
            coston2.interfaceAbis.IFdcInflationConfigurations
        );
        expect(coston2.interfaceToAbi("IFdcRequestFeeConfigurations")).toEqual(
            coston2.interfaceAbis.IFdcRequestFeeConfigurations
        );
        expect(coston2.interfaceToAbi("IFdcVerification")).toEqual(coston2.interfaceAbis.IFdcVerification);
        expect(coston2.interfaceToAbi("IFeeCalculator")).toEqual(coston2.interfaceAbis.IFeeCalculator);
        expect(coston2.interfaceToAbi("IFlareAssetRegistry")).toEqual(coston2.interfaceAbis.IFlareAssetRegistry);
        expect(coston2.interfaceToAbi("IFlareContractRegistry")).toEqual(coston2.interfaceAbis.IFlareContractRegistry);
        expect(coston2.interfaceToAbi("IFlareDaemonize")).toEqual(coston2.interfaceAbis.IFlareDaemonize);
        expect(coston2.interfaceToAbi("IFlareSystemsCalculator")).toEqual(
            coston2.interfaceAbis.IFlareSystemsCalculator
        );
        expect(coston2.interfaceToAbi("IFlareSystemsManager")).toEqual(coston2.interfaceAbis.IFlareSystemsManager);
        expect(coston2.interfaceToAbi("IFtso")).toEqual(coston2.interfaceAbis.IFtso);
        expect(coston2.interfaceToAbi("IFtsoFeedDecimals")).toEqual(coston2.interfaceAbis.IFtsoFeedDecimals);
        expect(coston2.interfaceToAbi("IFtsoFeedIdConverter")).toEqual(coston2.interfaceAbis.IFtsoFeedIdConverter);
        expect(coston2.interfaceToAbi("IFtsoFeedPublisher")).toEqual(coston2.interfaceAbis.IFtsoFeedPublisher);
        expect(coston2.interfaceToAbi("IFtsoGenesis")).toEqual(coston2.interfaceAbis.IFtsoGenesis);
        expect(coston2.interfaceToAbi("IFtsoInflationConfigurations")).toEqual(
            coston2.interfaceAbis.IFtsoInflationConfigurations
        );
        expect(coston2.interfaceToAbi("IFtsoManager")).toEqual(coston2.interfaceAbis.IFtsoManager);
        expect(coston2.interfaceToAbi("IFtsoManagerGenesis")).toEqual(coston2.interfaceAbis.IFtsoManagerGenesis);
        expect(coston2.interfaceToAbi("IFtsoRegistry")).toEqual(coston2.interfaceAbis.IFtsoRegistry);
        expect(coston2.interfaceToAbi("IFtsoRegistryGenesis")).toEqual(coston2.interfaceAbis.IFtsoRegistryGenesis);
        expect(coston2.interfaceToAbi("IFtsoRewardManager")).toEqual(coston2.interfaceAbis.IFtsoRewardManager);
        expect(coston2.interfaceToAbi("IFtsoRewardOffersManager")).toEqual(
            coston2.interfaceAbis.IFtsoRewardOffersManager
        );
        expect(coston2.interfaceToAbi("IGenericRewardManager")).toEqual(coston2.interfaceAbis.IGenericRewardManager);
        expect(coston2.interfaceToAbi("IGovernanceSettings")).toEqual(coston2.interfaceAbis.IGovernanceSettings);
        expect(coston2.interfaceToAbi("IGovernanceVotePower")).toEqual(coston2.interfaceAbis.IGovernanceVotePower);
        expect(coston2.interfaceToAbi("IGovernor")).toEqual(coston2.interfaceAbis.IGovernor);
        expect(coston2.interfaceToAbi("IIAddressUpdatable")).toEqual(coston2.interfaceAbis.IIAddressUpdatable);
        expect(coston2.interfaceToAbi("IIAddressUpdater")).toEqual(coston2.interfaceAbis.IIAddressUpdater);
        expect(coston2.interfaceToAbi("IIClaimSetupManager")).toEqual(coston2.interfaceAbis.IIClaimSetupManager);
        expect(coston2.interfaceToAbi("IICleanable")).toEqual(coston2.interfaceAbis.IICleanable);
        expect(coston2.interfaceToAbi("IICleanupBlockNumberManager")).toEqual(
            coston2.interfaceAbis.IICleanupBlockNumberManager
        );
        expect(coston2.interfaceToAbi("IICombinedNatBalance")).toEqual(coston2.interfaceAbis.IICombinedNatBalance);
        expect(coston2.interfaceToAbi("IICustomFeed")).toEqual(coston2.interfaceAbis.IICustomFeed);
        expect(coston2.interfaceToAbi("IIERC20WithMetadata")).toEqual(coston2.interfaceAbis.IIERC20WithMetadata);
        expect(coston2.interfaceToAbi("IIEntityManager")).toEqual(coston2.interfaceAbis.IIEntityManager);
        expect(coston2.interfaceToAbi("IIFastUpdaterView")).toEqual(coston2.interfaceAbis.IIFastUpdaterView);
        expect(coston2.interfaceToAbi("IIFlareAssetRegistry")).toEqual(coston2.interfaceAbis.IIFlareAssetRegistry);
        expect(coston2.interfaceToAbi("IIFlareAssetRegistryProvider")).toEqual(
            coston2.interfaceAbis.IIFlareAssetRegistryProvider
        );
        expect(coston2.interfaceToAbi("IIFlareSystemsCalculator")).toEqual(
            coston2.interfaceAbis.IIFlareSystemsCalculator
        );
        expect(coston2.interfaceToAbi("IIFlareSystemsManager")).toEqual(coston2.interfaceAbis.IIFlareSystemsManager);
        expect(coston2.interfaceToAbi("IIFtso")).toEqual(coston2.interfaceAbis.IIFtso);
        expect(coston2.interfaceToAbi("IIFtsoFeedPublisher")).toEqual(coston2.interfaceAbis.IIFtsoFeedPublisher);
        expect(coston2.interfaceToAbi("IIFtsoManager")).toEqual(coston2.interfaceAbis.IIFtsoManager);
        expect(coston2.interfaceToAbi("IIFtsoManagerProxy")).toEqual(coston2.interfaceAbis.IIFtsoManagerProxy);
        expect(coston2.interfaceToAbi("IIFtsoManagerV1")).toEqual(coston2.interfaceAbis.IIFtsoManagerV1);
        expect(coston2.interfaceToAbi("IIFtsoRegistry")).toEqual(coston2.interfaceAbis.IIFtsoRegistry);
        expect(coston2.interfaceToAbi("IIFtsoRewardManager")).toEqual(coston2.interfaceAbis.IIFtsoRewardManager);
        expect(coston2.interfaceToAbi("IIGenericRewardManager")).toEqual(coston2.interfaceAbis.IIGenericRewardManager);
        expect(coston2.interfaceToAbi("IIGovernanceVotePower")).toEqual(coston2.interfaceAbis.IIGovernanceVotePower);
        expect(coston2.interfaceToAbi("IIGovernorProposer")).toEqual(coston2.interfaceAbis.IIGovernorProposer);
        expect(coston2.interfaceToAbi("IIIncentivePoolAllocation")).toEqual(
            coston2.interfaceAbis.IIIncentivePoolAllocation
        );
        expect(coston2.interfaceToAbi("IIIncentivePoolPercentageProvider")).toEqual(
            coston2.interfaceAbis.IIIncentivePoolPercentageProvider
        );
        expect(coston2.interfaceToAbi("IIIncentivePoolReceiver")).toEqual(
            coston2.interfaceAbis.IIIncentivePoolReceiver
        );
        expect(coston2.interfaceToAbi("IIIncentivePoolSharingPercentageProvider")).toEqual(
            coston2.interfaceAbis.IIIncentivePoolSharingPercentageProvider
        );
        expect(coston2.interfaceToAbi("IIInflationAllocation")).toEqual(coston2.interfaceAbis.IIInflationAllocation);
        expect(coston2.interfaceToAbi("IIInflationReceiver")).toEqual(coston2.interfaceAbis.IIInflationReceiver);
        expect(coston2.interfaceToAbi("IIInflationReceiverV1")).toEqual(coston2.interfaceAbis.IIInflationReceiverV1);
        expect(coston2.interfaceToAbi("IIInflationV1")).toEqual(coston2.interfaceAbis.IIInflationV1);
        expect(coston2.interfaceToAbi("IINodePossessionVerifier")).toEqual(
            coston2.interfaceAbis.IINodePossessionVerifier
        );
        expect(coston2.interfaceToAbi("IIPChainStakeMirrorVerifier")).toEqual(
            coston2.interfaceAbis.IIPChainStakeMirrorVerifier
        );
        expect(coston2.interfaceToAbi("IIPollingFoundation")).toEqual(coston2.interfaceAbis.IIPollingFoundation);
        expect(coston2.interfaceToAbi("IIPollingManagementGroup")).toEqual(
            coston2.interfaceAbis.IIPollingManagementGroup
        );
        expect(coston2.interfaceToAbi("IIPreInflationCalculation")).toEqual(
            coston2.interfaceAbis.IIPreInflationCalculation
        );
        expect(coston2.interfaceToAbi("IIPriceSubmitter")).toEqual(coston2.interfaceAbis.IIPriceSubmitter);
        expect(coston2.interfaceToAbi("IIPublicKeyVerifier")).toEqual(coston2.interfaceAbis.IIPublicKeyVerifier);
        expect(coston2.interfaceToAbi("IIRNat")).toEqual(coston2.interfaceAbis.IIRNat);
        expect(coston2.interfaceToAbi("IIRNatAccount")).toEqual(coston2.interfaceAbis.IIRNatAccount);
        expect(coston2.interfaceToAbi("IIRandomProvider")).toEqual(coston2.interfaceAbis.IIRandomProvider);
        expect(coston2.interfaceToAbi("IIRelay")).toEqual(coston2.interfaceAbis.IIRelay);
        expect(coston2.interfaceToAbi("IIRewardEpochSwitchoverTrigger")).toEqual(
            coston2.interfaceAbis.IIRewardEpochSwitchoverTrigger
        );
        expect(coston2.interfaceToAbi("IIRewardManager")).toEqual(coston2.interfaceAbis.IIRewardManager);
        expect(coston2.interfaceToAbi("IISubmission")).toEqual(coston2.interfaceAbis.IISubmission);
        expect(coston2.interfaceToAbi("IISupply")).toEqual(coston2.interfaceAbis.IISupply);
        expect(coston2.interfaceToAbi("IITokenPool")).toEqual(coston2.interfaceAbis.IITokenPool);
        expect(coston2.interfaceToAbi("IIVPContract")).toEqual(coston2.interfaceAbis.IIVPContract);
        expect(coston2.interfaceToAbi("IIVPToken")).toEqual(coston2.interfaceAbis.IIVPToken);
        expect(coston2.interfaceToAbi("IIVoterRegistrationTrigger")).toEqual(
            coston2.interfaceAbis.IIVoterRegistrationTrigger
        );
        expect(coston2.interfaceToAbi("IIVoterRegistry")).toEqual(coston2.interfaceAbis.IIVoterRegistry);
        expect(coston2.interfaceToAbi("IIVoterWhitelister")).toEqual(coston2.interfaceAbis.IIVoterWhitelister);
        expect(coston2.interfaceToAbi("IIncreaseManager")).toEqual(coston2.interfaceAbis.IIncreaseManager);
        expect(coston2.interfaceToAbi("IInflationGenesis")).toEqual(coston2.interfaceAbis.IInflationGenesis);
        expect(coston2.interfaceToAbi("IInstructionFeesFacet")).toEqual(coston2.interfaceAbis.IInstructionFeesFacet);
        expect(coston2.interfaceToAbi("IInstructionsFacet")).toEqual(coston2.interfaceAbis.IInstructionsFacet);
        expect(coston2.interfaceToAbi("IJsonApi")).toEqual(coston2.interfaceAbis.IJsonApi);
        expect(coston2.interfaceToAbi("IJsonApiVerification")).toEqual(coston2.interfaceAbis.IJsonApiVerification);
        expect(coston2.interfaceToAbi("IMasterAccountController")).toEqual(
            coston2.interfaceAbis.IMasterAccountController
        );
        expect(coston2.interfaceToAbi("IPChainStakeMirror")).toEqual(coston2.interfaceAbis.IPChainStakeMirror);
        expect(coston2.interfaceToAbi("IPChainStakeMirrorMultiSigVoting")).toEqual(
            coston2.interfaceAbis.IPChainStakeMirrorMultiSigVoting
        );
        expect(coston2.interfaceToAbi("IPChainStakeMirrorVerifier")).toEqual(
            coston2.interfaceAbis.IPChainStakeMirrorVerifier
        );
        expect(coston2.interfaceToAbi("IPChainVotePower")).toEqual(coston2.interfaceAbis.IPChainVotePower);
        expect(coston2.interfaceToAbi("IPayment")).toEqual(coston2.interfaceAbis.IPayment);
        expect(coston2.interfaceToAbi("IPaymentProofsFacet")).toEqual(coston2.interfaceAbis.IPaymentProofsFacet);
        expect(coston2.interfaceToAbi("IPaymentVerification")).toEqual(coston2.interfaceAbis.IPaymentVerification);
        expect(coston2.interfaceToAbi("IPersonalAccount")).toEqual(coston2.interfaceAbis.IPersonalAccount);
        expect(coston2.interfaceToAbi("IPersonalAccountsFacet")).toEqual(coston2.interfaceAbis.IPersonalAccountsFacet);
        expect(coston2.interfaceToAbi("IPollingFtso")).toEqual(coston2.interfaceAbis.IPollingFtso);
        expect(coston2.interfaceToAbi("IPollingManagementGroup")).toEqual(
            coston2.interfaceAbis.IPollingManagementGroup
        );
        expect(coston2.interfaceToAbi("IPriceSubmitter")).toEqual(coston2.interfaceAbis.IPriceSubmitter);
        expect(coston2.interfaceToAbi("IRNat")).toEqual(coston2.interfaceAbis.IRNat);
        expect(coston2.interfaceToAbi("IRNatAccount")).toEqual(coston2.interfaceAbis.IRNatAccount);
        expect(coston2.interfaceToAbi("IRandomProvider")).toEqual(coston2.interfaceAbis.IRandomProvider);
        expect(coston2.interfaceToAbi("IRedemptionTimeExtension")).toEqual(
            coston2.interfaceAbis.IRedemptionTimeExtension
        );
        expect(coston2.interfaceToAbi("IReferencedPaymentNonexistence")).toEqual(
            coston2.interfaceAbis.IReferencedPaymentNonexistence
        );
        expect(coston2.interfaceToAbi("IReferencedPaymentNonexistenceVerification")).toEqual(
            coston2.interfaceAbis.IReferencedPaymentNonexistenceVerification
        );
        expect(coston2.interfaceToAbi("IRelay")).toEqual(coston2.interfaceAbis.IRelay);
        expect(coston2.interfaceToAbi("IRewardManager")).toEqual(coston2.interfaceAbis.IRewardManager);
        expect(coston2.interfaceToAbi("ISubmission")).toEqual(coston2.interfaceAbis.ISubmission);
        expect(coston2.interfaceToAbi("ISwapFacet")).toEqual(coston2.interfaceAbis.ISwapFacet);
        expect(coston2.interfaceToAbi("ITimelockFacet")).toEqual(coston2.interfaceAbis.ITimelockFacet);
        expect(coston2.interfaceToAbi("ITypeTemplate")).toEqual(coston2.interfaceAbis.ITypeTemplate);
        expect(coston2.interfaceToAbi("ITypeTemplateVerification")).toEqual(
            coston2.interfaceAbis.ITypeTemplateVerification
        );
        expect(coston2.interfaceToAbi("IUpdateValidators")).toEqual(coston2.interfaceAbis.IUpdateValidators);
        expect(coston2.interfaceToAbi("IVPContractEvents")).toEqual(coston2.interfaceAbis.IVPContractEvents);
        expect(coston2.interfaceToAbi("IVPToken")).toEqual(coston2.interfaceAbis.IVPToken);
        expect(coston2.interfaceToAbi("IValidatorRegistry")).toEqual(coston2.interfaceAbis.IValidatorRegistry);
        expect(coston2.interfaceToAbi("IValidatorRewardOffersManager")).toEqual(
            coston2.interfaceAbis.IValidatorRewardOffersManager
        );
        expect(coston2.interfaceToAbi("IVaultsFacet")).toEqual(coston2.interfaceAbis.IVaultsFacet);
        expect(coston2.interfaceToAbi("IVoterPreRegistry")).toEqual(coston2.interfaceAbis.IVoterPreRegistry);
        expect(coston2.interfaceToAbi("IVoterRegistry")).toEqual(coston2.interfaceAbis.IVoterRegistry);
        expect(coston2.interfaceToAbi("IVoterWhitelister")).toEqual(coston2.interfaceAbis.IVoterWhitelister);
        expect(coston2.interfaceToAbi("IWNat")).toEqual(coston2.interfaceAbis.IWNat);
        expect(coston2.interfaceToAbi("IWNatDelegationFee")).toEqual(coston2.interfaceAbis.IWNatDelegationFee);
        expect(coston2.interfaceToAbi("IWeb2Json")).toEqual(coston2.interfaceAbis.IWeb2Json);
        expect(coston2.interfaceToAbi("IWeb2JsonVerification")).toEqual(coston2.interfaceAbis.IWeb2JsonVerification);
        expect(coston2.interfaceToAbi("IXrplProviderWalletsFacet")).toEqual(
            coston2.interfaceAbis.IXrplProviderWalletsFacet
        );
        expect(coston2.interfaceToAbi("ProtocolsV2Interface")).toEqual(coston2.interfaceAbis.ProtocolsV2Interface);
        expect(coston2.interfaceToAbi("RandomNumberV2Interface")).toEqual(
            coston2.interfaceAbis.RandomNumberV2Interface
        );
        expect(coston2.interfaceToAbi("RedemptionRequestInfo")).toEqual(coston2.interfaceAbis.RedemptionRequestInfo);
        expect(coston2.interfaceToAbi("RedemptionTicketInfo")).toEqual(coston2.interfaceAbis.RedemptionTicketInfo);
        expect(coston2.interfaceToAbi("RewardsV2Interface")).toEqual(coston2.interfaceAbis.RewardsV2Interface);
        expect(coston2.interfaceToAbi("TestFtsoV2Interface")).toEqual(coston2.interfaceAbis.TestFtsoV2Interface);
    });
});

// This file was generated automatically. Do not edit manually.
