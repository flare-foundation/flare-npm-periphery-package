"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.abis = void 0;
const IICombinedNatBalance_json_1 = __importDefault(require("./artifacts/contracts/token/interface/IICombinedNatBalance.sol/IICombinedNatBalance.json"));
const IIVPToken_json_1 = __importDefault(require("./artifacts/contracts/token/interface/IIVPToken.sol/IIVPToken.json"));
const IIVPContract_json_1 = __importDefault(require("./artifacts/contracts/token/interface/IIVPContract.sol/IIVPContract.json"));
const IIGovernanceVotePower_json_1 = __importDefault(require("./artifacts/contracts/token/interface/IIGovernanceVotePower.sol/IIGovernanceVotePower.json"));
const IICleanable_json_1 = __importDefault(require("./artifacts/contracts/token/interface/IICleanable.sol/IICleanable.json"));
const VPToken_json_1 = __importDefault(require("./artifacts/contracts/token/implementation/VPToken.sol/VPToken.json"));
const Delegatable_json_1 = __importDefault(require("./artifacts/contracts/token/implementation/Delegatable.sol/Delegatable.json"));
const VPContract_json_1 = __importDefault(require("./artifacts/contracts/token/implementation/VPContract.sol/VPContract.json"));
const GovernanceVotePower_json_1 = __importDefault(require("./artifacts/contracts/token/implementation/GovernanceVotePower.sol/GovernanceVotePower.json"));
const CombinedNat_json_1 = __importDefault(require("./artifacts/contracts/token/implementation/CombinedNat.sol/CombinedNat.json"));
const CleanupBlockNumberManager_json_1 = __importDefault(require("./artifacts/contracts/token/implementation/CleanupBlockNumberManager.sol/CleanupBlockNumberManager.json"));
const CheckPointable_json_1 = __importDefault(require("./artifacts/contracts/token/implementation/CheckPointable.sol/CheckPointable.json"));
const WNat_json_1 = __importDefault(require("./artifacts/contracts/token/implementation/WNat.sol/WNat.json"));
const CheckPointHistoryCache_json_1 = __importDefault(require("./artifacts/contracts/token/lib/CheckPointHistoryCache.sol/CheckPointHistoryCache.json"));
const DelegateCheckPointHistory_json_1 = __importDefault(require("./artifacts/contracts/token/lib/DelegateCheckPointHistory.sol/DelegateCheckPointHistory.json"));
const PercentageDelegation_json_1 = __importDefault(require("./artifacts/contracts/token/lib/PercentageDelegation.sol/PercentageDelegation.json"));
const CheckPointsByAddress_json_1 = __importDefault(require("./artifacts/contracts/token/lib/CheckPointsByAddress.sol/CheckPointsByAddress.json"));
const VotePowerCache_json_1 = __importDefault(require("./artifacts/contracts/token/lib/VotePowerCache.sol/VotePowerCache.json"));
const DelegateCheckPointsByAddress_json_1 = __importDefault(require("./artifacts/contracts/token/lib/DelegateCheckPointsByAddress.sol/DelegateCheckPointsByAddress.json"));
const ExplicitDelegation_json_1 = __importDefault(require("./artifacts/contracts/token/lib/ExplicitDelegation.sol/ExplicitDelegation.json"));
const DelegationHistory_json_1 = __importDefault(require("./artifacts/contracts/token/lib/DelegationHistory.sol/DelegationHistory.json"));
const VotePower_json_1 = __importDefault(require("./artifacts/contracts/token/lib/VotePower.sol/VotePower.json"));
const CheckPointHistory_json_1 = __importDefault(require("./artifacts/contracts/token/lib/CheckPointHistory.sol/CheckPointHistory.json"));
const IIFlareAssetRegistry_json_1 = __importDefault(require("./artifacts/contracts/assetRegistry/interface/IIFlareAssetRegistry.sol/IIFlareAssetRegistry.json"));
const IIERC20WithMetadata_json_1 = __importDefault(require("./artifacts/contracts/assetRegistry/interface/IIERC20WithMetadata.sol/IIERC20WithMetadata.json"));
const IIFlareAssetRegistryProvider_json_1 = __importDefault(require("./artifacts/contracts/assetRegistry/interface/IIFlareAssetRegistryProvider.sol/IIFlareAssetRegistryProvider.json"));
const FlareAssetRegistry_json_1 = __importDefault(require("./artifacts/contracts/assetRegistry/implementation/FlareAssetRegistry.sol/FlareAssetRegistry.json"));
const WNatRegistryProvider_json_1 = __importDefault(require("./artifacts/contracts/assetRegistry/implementation/WNatRegistryProvider.sol/WNatRegistryProvider.json"));
const StandardAttributes_json_1 = __importDefault(require("./artifacts/contracts/assetRegistry/lib/StandardAttributes.sol/StandardAttributes.json"));
const IIFtso_json_1 = __importDefault(require("./artifacts/contracts/ftso/interface/IIFtso.sol/IIFtso.json"));
const IIFtsoManager_json_1 = __importDefault(require("./artifacts/contracts/ftso/interface/IIFtsoManager.sol/IIFtsoManager.json"));
const IIFtsoManagerV1_json_1 = __importDefault(require("./artifacts/contracts/ftso/interface/IIFtsoManagerV1.sol/IIFtsoManagerV1.json"));
const FtsoManager_json_1 = __importDefault(require("./artifacts/contracts/ftso/implementation/FtsoManager.sol/FtsoManager.json"));
const Ftso_json_1 = __importDefault(require("./artifacts/contracts/ftso/implementation/Ftso.sol/Ftso.json"));
const FtsoVote_json_1 = __importDefault(require("./artifacts/contracts/ftso/lib/FtsoVote.sol/FtsoVote.json"));
const FtsoMedian_json_1 = __importDefault(require("./artifacts/contracts/ftso/lib/FtsoMedian.sol/FtsoMedian.json"));
const FtsoEpoch_json_1 = __importDefault(require("./artifacts/contracts/ftso/lib/FtsoEpoch.sol/FtsoEpoch.json"));
const FtsoManagement_json_1 = __importDefault(require("./artifacts/contracts/ftso/lib/FtsoManagement.sol/FtsoManagement.json"));
const FtsoManagerSettings_json_1 = __importDefault(require("./artifacts/contracts/ftso/lib/FtsoManagerSettings.sol/FtsoManagerSettings.json"));
const MockFtsoRegistry_json_1 = __importDefault(require("./artifacts/contracts/ftso/priceProviderMockContracts/PriceProviderMockContracts.sol/MockFtsoRegistry.json"));
const MockVoterWhitelister_json_1 = __importDefault(require("./artifacts/contracts/ftso/priceProviderMockContracts/PriceProviderMockContracts.sol/MockVoterWhitelister.json"));
const MockPriceSubmitter_json_1 = __importDefault(require("./artifacts/contracts/ftso/priceProviderMockContracts/PriceProviderMockContracts.sol/MockPriceSubmitter.json"));
const MockNpmFtso_json_1 = __importDefault(require("./artifacts/contracts/ftso/priceProviderMockContracts/priceProviderMockFtso.sol/MockNpmFtso.json"));
const IIDelegationAccount_json_1 = __importDefault(require("./artifacts/contracts/claiming/interface/IIDelegationAccount.sol/IIDelegationAccount.json"));
const IIClaimSetupManager_json_1 = __importDefault(require("./artifacts/contracts/claiming/interface/IIClaimSetupManager.sol/IIClaimSetupManager.json"));
const DelegationAccount_json_1 = __importDefault(require("./artifacts/contracts/claiming/implementation/DelegationAccount.sol/DelegationAccount.json"));
const CloneFactory_json_1 = __importDefault(require("./artifacts/contracts/claiming/implementation/CloneFactory.sol/CloneFactory.json"));
const ClaimSetupManager_json_1 = __importDefault(require("./artifacts/contracts/claiming/implementation/ClaimSetupManager.sol/ClaimSetupManager.json"));
const IIFtsoRegistry_json_1 = __importDefault(require("./artifacts/contracts/utils/interface/IIFtsoRegistry.sol/IIFtsoRegistry.json"));
const IUpdateValidators_json_1 = __importDefault(require("./artifacts/contracts/utils/interface/IUpdateValidators.sol/IUpdateValidators.json"));
const IIRandomProvider_json_1 = __importDefault(require("./artifacts/contracts/utils/interface/IIRandomProvider.sol/IIRandomProvider.json"));
const IIVoterWhitelister_json_1 = __importDefault(require("./artifacts/contracts/utils/interface/IIVoterWhitelister.sol/IIVoterWhitelister.json"));
const AddressSet_json_1 = __importDefault(require("./artifacts/contracts/utils/implementation/AddressSet.sol/AddressSet.json"));
const GovernedAndFlareDaemonized_json_1 = __importDefault(require("./artifacts/contracts/utils/implementation/GovernedAndFlareDaemonized.sol/GovernedAndFlareDaemonized.json"));
const FtsoRegistry_json_1 = __importDefault(require("./artifacts/contracts/utils/implementation/FtsoRegistry.sol/FtsoRegistry.json"));
const FtsoV2Upgrader_json_1 = __importDefault(require("./artifacts/contracts/utils/implementation/FtsoV2Upgrader.sol/FtsoV2Upgrader.json"));
const ValidatorRegistry_json_1 = __importDefault(require("./artifacts/contracts/utils/implementation/ValidatorRegistry.sol/ValidatorRegistry.json"));
const SelfdestructTransfer_json_1 = __importDefault(require("./artifacts/contracts/utils/implementation/SelfdestructTransfer.sol/SelfdestructTransfer.json"));
const ProxyGoverned_json_1 = __importDefault(require("./artifacts/contracts/utils/implementation/ProxyGoverned.sol/ProxyGoverned.json"));
const SafePct_json_1 = __importDefault(require("./artifacts/contracts/utils/implementation/SafePct.sol/SafePct.json"));
const RevertErrorTracking_json_1 = __importDefault(require("./artifacts/contracts/utils/implementation/RevertErrorTracking.sol/RevertErrorTracking.json"));
const VoterWhitelister_json_1 = __importDefault(require("./artifacts/contracts/utils/implementation/VoterWhitelister.sol/VoterWhitelister.json"));
const BokkyPooBahsDateTimeLibrary_json_1 = __importDefault(require("./artifacts/contracts/utils/implementation/DateTimeLibrary.sol/BokkyPooBahsDateTimeLibrary.json"));
const FundDistributor_json_1 = __importDefault(require("./artifacts/contracts/utils/implementation/FundDistributor.sol/FundDistributor.json"));
const FlareContractRegistry_json_1 = __importDefault(require("./artifacts/contracts/utils/implementation/FlareContractRegistry.sol/FlareContractRegistry.json"));
const BytesLib_json_1 = __importDefault(require("./artifacts/contracts/utils/implementation/BytesLib.sol/BytesLib.json"));
const FtsoRegistryProxy_json_1 = __importDefault(require("./artifacts/contracts/utils/implementation/FtsoRegistryProxy.sol/FtsoRegistryProxy.json"));
const IIPChainStakeMirrorVerifier_json_1 = __importDefault(require("./artifacts/contracts/staking/interface/IIPChainStakeMirrorVerifier.sol/IIPChainStakeMirrorVerifier.json"));
const PChainStakeMirrorMultiSigVoting_json_1 = __importDefault(require("./artifacts/contracts/staking/implementation/PChainStakeMirrorMultiSigVoting.sol/PChainStakeMirrorMultiSigVoting.json"));
const AddressBinder_json_1 = __importDefault(require("./artifacts/contracts/staking/implementation/AddressBinder.sol/AddressBinder.json"));
const PChainStakeMirrorVerifier_json_1 = __importDefault(require("./artifacts/contracts/staking/implementation/PChainStakeMirrorVerifier.sol/PChainStakeMirrorVerifier.json"));
const PChainStakeMirror_json_1 = __importDefault(require("./artifacts/contracts/staking/implementation/PChainStakeMirror.sol/PChainStakeMirror.json"));
const PChainStake_json_1 = __importDefault(require("./artifacts/contracts/staking/implementation/PChainStake.sol/PChainStake.json"));
const PChainStakeHistory_json_1 = __importDefault(require("./artifacts/contracts/staking/lib/PChainStakeHistory.sol/PChainStakeHistory.json"));
const IIGovernorProposer_json_1 = __importDefault(require("./artifacts/contracts/governance/interface/IIGovernorProposer.sol/IIGovernorProposer.json"));
const IIPollingFoundation_json_1 = __importDefault(require("./artifacts/contracts/governance/interface/IIPollingFoundation.sol/IIPollingFoundation.json"));
const Governed_json_1 = __importDefault(require("./artifacts/contracts/governance/implementation/Governed.sol/Governed.json"));
const GovernorProposer_json_1 = __importDefault(require("./artifacts/contracts/governance/implementation/GovernorProposer.sol/GovernorProposer.json"));
const GovernorVotePower_json_1 = __importDefault(require("./artifacts/contracts/governance/implementation/GovernorVotePower.sol/GovernorVotePower.json"));
const GovernedBase_json_1 = __importDefault(require("./artifacts/contracts/governance/implementation/GovernedBase.sol/GovernedBase.json"));
const PollingFtso_json_1 = __importDefault(require("./artifacts/contracts/governance/implementation/PollingFtso.sol/PollingFtso.json"));
const GovernorProposals_json_1 = __importDefault(require("./artifacts/contracts/governance/implementation/GovernorProposals.sol/GovernorProposals.json"));
const GovernedAtGenesis_json_1 = __importDefault(require("./artifacts/contracts/governance/implementation/GovernedAtGenesis.sol/GovernedAtGenesis.json"));
const Governor_json_1 = __importDefault(require("./artifacts/contracts/governance/implementation/Governor.sol/Governor.json"));
const GovernorVotes_json_1 = __importDefault(require("./artifacts/contracts/governance/implementation/GovernorVotes.sol/GovernorVotes.json"));
const PollingFoundation_json_1 = __importDefault(require("./artifacts/contracts/governance/implementation/PollingFoundation.sol/PollingFoundation.json"));
const IIInflationPercentageProvider_json_1 = __importDefault(require("./artifacts/contracts/inflation/interface/IIInflationPercentageProvider.sol/IIInflationPercentageProvider.json"));
const IIInflationSharingPercentageProvider_json_1 = __importDefault(require("./artifacts/contracts/inflation/interface/IIInflationSharingPercentageProvider.sol/IIInflationSharingPercentageProvider.json"));
const IIInflationReceiver_json_1 = __importDefault(require("./artifacts/contracts/inflation/interface/IIInflationReceiver.sol/IIInflationReceiver.json"));
const IISupply_json_1 = __importDefault(require("./artifacts/contracts/inflation/interface/IISupply.sol/IISupply.json"));
const IIInflationAllocation_json_1 = __importDefault(require("./artifacts/contracts/inflation/interface/IIInflationAllocation.sol/IIInflationAllocation.json"));
const Inflation_json_1 = __importDefault(require("./artifacts/contracts/inflation/implementation/Inflation.sol/Inflation.json"));
const InflationAllocation_json_1 = __importDefault(require("./artifacts/contracts/inflation/implementation/InflationAllocation.sol/InflationAllocation.json"));
const Supply_json_1 = __importDefault(require("./artifacts/contracts/inflation/implementation/Supply.sol/Supply.json"));
const RewardService_json_1 = __importDefault(require("./artifacts/contracts/inflation/lib/RewardService.sol/RewardService.json"));
const InflationAnnum_json_1 = __importDefault(require("./artifacts/contracts/inflation/lib/InflationAnnum.sol/InflationAnnum.json"));
const RewardServices_json_1 = __importDefault(require("./artifacts/contracts/inflation/lib/RewardServices.sol/RewardServices.json"));
const InflationAnnums_json_1 = __importDefault(require("./artifacts/contracts/inflation/lib/InflationAnnums.sol/InflationAnnums.json"));
const ICollateralizable_json_1 = __importDefault(require("./artifacts/contracts/mockXAsset/interface/ICollateralizable.sol/ICollateralizable.json"));
const IIAddressUpdatable_json_1 = __importDefault(require("./artifacts/contracts/addressUpdater/interface/IIAddressUpdatable.sol/IIAddressUpdatable.json"));
const IIAddressUpdater_json_1 = __importDefault(require("./artifacts/contracts/addressUpdater/interface/IIAddressUpdater.sol/IIAddressUpdater.json"));
const AddressUpdatable_json_1 = __importDefault(require("./artifacts/contracts/addressUpdater/implementation/AddressUpdatable.sol/AddressUpdatable.json"));
const AddressUpdater_json_1 = __importDefault(require("./artifacts/contracts/addressUpdater/implementation/AddressUpdater.sol/AddressUpdater.json"));
const IIIncentivePoolAllocation_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/interface/IIIncentivePoolAllocation.sol/IIIncentivePoolAllocation.json"));
const IIIncentivePoolReceiver_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/interface/IIIncentivePoolReceiver.sol/IIIncentivePoolReceiver.json"));
const IIIncentivePoolPercentageProvider_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/interface/IIIncentivePoolPercentageProvider.sol/IIIncentivePoolPercentageProvider.json"));
const IIFtsoRewardManager_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/interface/IIFtsoRewardManager.sol/IIFtsoRewardManager.json"));
const IIIncentivePoolSharingPercentageProvider_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/interface/IIIncentivePoolSharingPercentageProvider.sol/IIIncentivePoolSharingPercentageProvider.json"));
const IITokenPool_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/interface/IITokenPool.sol/IITokenPool.json"));
const IIGenericRewardManager_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/interface/IIGenericRewardManager.sol/IIGenericRewardManager.json"));
const IncentivePool_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/implementation/IncentivePool.sol/IncentivePool.json"));
const GenericRewardManager_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/implementation/GenericRewardManager.sol/GenericRewardManager.json"));
const ValidatorRewardManager_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/implementation/ValidatorRewardManager.sol/ValidatorRewardManager.json"));
const Escrow_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/implementation/Escrow.sol/Escrow.json"));
const IncentivePoolAllocation_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/implementation/IncentivePoolAllocation.sol/IncentivePoolAllocation.json"));
const DistributionToDelegators_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/implementation/DistributionToDelegators.sol/DistributionToDelegators.json"));
const FtsoRewardManager_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/implementation/FtsoRewardManager.sol/FtsoRewardManager.json"));
const AttestationProviderRewardManager_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/implementation/AttestationProviderRewardManager.sol/AttestationProviderRewardManager.json"));
const IncentivePoolRewardService_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/lib/IncentivePoolRewardService.sol/IncentivePoolRewardService.json"));
const DataProviderFee_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/lib/DataProviderFee.sol/DataProviderFee.json"));
const IncentivePoolAnnum_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/lib/IncentivePoolAnnum.sol/IncentivePoolAnnum.json"));
const IncentivePoolRewardServices_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/lib/IncentivePoolRewardServices.sol/IncentivePoolRewardServices.json"));
const IncentivePoolAnnums_json_1 = __importDefault(require("./artifacts/contracts/tokenPools/lib/IncentivePoolAnnums.sol/IncentivePoolAnnums.json"));
const IIPriceSubmitter_json_1 = __importDefault(require("./artifacts/contracts/genesis/interface/IIPriceSubmitter.sol/IIPriceSubmitter.json"));
const IFtsoGenesis_json_1 = __importDefault(require("./artifacts/contracts/genesis/interface/IFtsoGenesis.sol/IFtsoGenesis.json"));
const IFtsoRegistryGenesis_json_1 = __importDefault(require("./artifacts/contracts/genesis/interface/IFtsoRegistryGenesis.sol/IFtsoRegistryGenesis.json"));
const IFtsoManagerGenesis_json_1 = __importDefault(require("./artifacts/contracts/genesis/interface/IFtsoManagerGenesis.sol/IFtsoManagerGenesis.json"));
const IFlareDaemonize_json_1 = __importDefault(require("./artifacts/contracts/genesis/interface/IFlareDaemonize.sol/IFlareDaemonize.json"));
const IInflationGenesis_json_1 = __importDefault(require("./artifacts/contracts/genesis/interface/IInflationGenesis.sol/IInflationGenesis.json"));
const InitialAirdrop_json_1 = __importDefault(require("./artifacts/contracts/genesis/implementation/InitialAirdrop.sol/InitialAirdrop.json"));
const PriceSubmitter_json_1 = __importDefault(require("./artifacts/contracts/genesis/implementation/PriceSubmitter.sol/PriceSubmitter.json"));
const DistributionTreasury_json_1 = __importDefault(require("./artifacts/contracts/genesis/implementation/DistributionTreasury.sol/DistributionTreasury.json"));
const IncentivePoolTreasury_json_1 = __importDefault(require("./artifacts/contracts/genesis/implementation/IncentivePoolTreasury.sol/IncentivePoolTreasury.json"));
const StateConnector_json_1 = __importDefault(require("./artifacts/contracts/genesis/implementation/StateConnector.sol/StateConnector.json"));
const FlareDaemon_json_1 = __importDefault(require("./artifacts/contracts/genesis/implementation/FlareDaemon.sol/FlareDaemon.json"));
const GovernanceSettings_json_1 = __importDefault(require("./artifacts/contracts/genesis/implementation/GovernanceSettings.sol/GovernanceSettings.json"));
exports.abis = {
    IICombinedNatBalance: IICombinedNatBalance_json_1.default.abi,
    IIVPToken: IIVPToken_json_1.default.abi,
    IIVPContract: IIVPContract_json_1.default.abi,
    IIGovernanceVotePower: IIGovernanceVotePower_json_1.default.abi,
    IICleanable: IICleanable_json_1.default.abi,
    VPToken: VPToken_json_1.default.abi,
    Delegatable: Delegatable_json_1.default.abi,
    VPContract: VPContract_json_1.default.abi,
    GovernanceVotePower: GovernanceVotePower_json_1.default.abi,
    CombinedNat: CombinedNat_json_1.default.abi,
    CleanupBlockNumberManager: CleanupBlockNumberManager_json_1.default.abi,
    CheckPointable: CheckPointable_json_1.default.abi,
    WNat: WNat_json_1.default.abi,
    CheckPointHistoryCache: CheckPointHistoryCache_json_1.default.abi,
    DelegateCheckPointHistory: DelegateCheckPointHistory_json_1.default.abi,
    PercentageDelegation: PercentageDelegation_json_1.default.abi,
    CheckPointsByAddress: CheckPointsByAddress_json_1.default.abi,
    VotePowerCache: VotePowerCache_json_1.default.abi,
    DelegateCheckPointsByAddress: DelegateCheckPointsByAddress_json_1.default.abi,
    ExplicitDelegation: ExplicitDelegation_json_1.default.abi,
    DelegationHistory: DelegationHistory_json_1.default.abi,
    VotePower: VotePower_json_1.default.abi,
    CheckPointHistory: CheckPointHistory_json_1.default.abi,
    IIFlareAssetRegistry: IIFlareAssetRegistry_json_1.default.abi,
    IIERC20WithMetadata: IIERC20WithMetadata_json_1.default.abi,
    IIFlareAssetRegistryProvider: IIFlareAssetRegistryProvider_json_1.default.abi,
    FlareAssetRegistry: FlareAssetRegistry_json_1.default.abi,
    WNatRegistryProvider: WNatRegistryProvider_json_1.default.abi,
    StandardAttributes: StandardAttributes_json_1.default.abi,
    IIFtso: IIFtso_json_1.default.abi,
    IIFtsoManager: IIFtsoManager_json_1.default.abi,
    IIFtsoManagerV1: IIFtsoManagerV1_json_1.default.abi,
    FtsoManager: FtsoManager_json_1.default.abi,
    Ftso: Ftso_json_1.default.abi,
    FtsoVote: FtsoVote_json_1.default.abi,
    FtsoMedian: FtsoMedian_json_1.default.abi,
    FtsoEpoch: FtsoEpoch_json_1.default.abi,
    FtsoManagement: FtsoManagement_json_1.default.abi,
    FtsoManagerSettings: FtsoManagerSettings_json_1.default.abi,
    MockFtsoRegistry: MockFtsoRegistry_json_1.default.abi,
    MockVoterWhitelister: MockVoterWhitelister_json_1.default.abi,
    MockPriceSubmitter: MockPriceSubmitter_json_1.default.abi,
    MockNpmFtso: MockNpmFtso_json_1.default.abi,
    IIDelegationAccount: IIDelegationAccount_json_1.default.abi,
    IIClaimSetupManager: IIClaimSetupManager_json_1.default.abi,
    DelegationAccount: DelegationAccount_json_1.default.abi,
    CloneFactory: CloneFactory_json_1.default.abi,
    ClaimSetupManager: ClaimSetupManager_json_1.default.abi,
    IIFtsoRegistry: IIFtsoRegistry_json_1.default.abi,
    IUpdateValidators: IUpdateValidators_json_1.default.abi,
    IIRandomProvider: IIRandomProvider_json_1.default.abi,
    IIVoterWhitelister: IIVoterWhitelister_json_1.default.abi,
    AddressSet: AddressSet_json_1.default.abi,
    GovernedAndFlareDaemonized: GovernedAndFlareDaemonized_json_1.default.abi,
    FtsoRegistry: FtsoRegistry_json_1.default.abi,
    FtsoV2Upgrader: FtsoV2Upgrader_json_1.default.abi,
    ValidatorRegistry: ValidatorRegistry_json_1.default.abi,
    SelfdestructTransfer: SelfdestructTransfer_json_1.default.abi,
    ProxyGoverned: ProxyGoverned_json_1.default.abi,
    SafePct: SafePct_json_1.default.abi,
    RevertErrorTracking: RevertErrorTracking_json_1.default.abi,
    VoterWhitelister: VoterWhitelister_json_1.default.abi,
    BokkyPooBahsDateTimeLibrary: BokkyPooBahsDateTimeLibrary_json_1.default.abi,
    FundDistributor: FundDistributor_json_1.default.abi,
    FlareContractRegistry: FlareContractRegistry_json_1.default.abi,
    BytesLib: BytesLib_json_1.default.abi,
    FtsoRegistryProxy: FtsoRegistryProxy_json_1.default.abi,
    IIPChainStakeMirrorVerifier: IIPChainStakeMirrorVerifier_json_1.default.abi,
    PChainStakeMirrorMultiSigVoting: PChainStakeMirrorMultiSigVoting_json_1.default.abi,
    AddressBinder: AddressBinder_json_1.default.abi,
    PChainStakeMirrorVerifier: PChainStakeMirrorVerifier_json_1.default.abi,
    PChainStakeMirror: PChainStakeMirror_json_1.default.abi,
    PChainStake: PChainStake_json_1.default.abi,
    PChainStakeHistory: PChainStakeHistory_json_1.default.abi,
    IIGovernorProposer: IIGovernorProposer_json_1.default.abi,
    IIPollingFoundation: IIPollingFoundation_json_1.default.abi,
    Governed: Governed_json_1.default.abi,
    GovernorProposer: GovernorProposer_json_1.default.abi,
    GovernorVotePower: GovernorVotePower_json_1.default.abi,
    GovernedBase: GovernedBase_json_1.default.abi,
    PollingFtso: PollingFtso_json_1.default.abi,
    GovernorProposals: GovernorProposals_json_1.default.abi,
    GovernedAtGenesis: GovernedAtGenesis_json_1.default.abi,
    Governor: Governor_json_1.default.abi,
    GovernorVotes: GovernorVotes_json_1.default.abi,
    PollingFoundation: PollingFoundation_json_1.default.abi,
    IIInflationPercentageProvider: IIInflationPercentageProvider_json_1.default.abi,
    IIInflationSharingPercentageProvider: IIInflationSharingPercentageProvider_json_1.default.abi,
    IIInflationReceiver: IIInflationReceiver_json_1.default.abi,
    IISupply: IISupply_json_1.default.abi,
    IIInflationAllocation: IIInflationAllocation_json_1.default.abi,
    Inflation: Inflation_json_1.default.abi,
    InflationAllocation: InflationAllocation_json_1.default.abi,
    Supply: Supply_json_1.default.abi,
    RewardService: RewardService_json_1.default.abi,
    InflationAnnum: InflationAnnum_json_1.default.abi,
    RewardServices: RewardServices_json_1.default.abi,
    InflationAnnums: InflationAnnums_json_1.default.abi,
    ICollateralizable: ICollateralizable_json_1.default.abi,
    IIAddressUpdatable: IIAddressUpdatable_json_1.default.abi,
    IIAddressUpdater: IIAddressUpdater_json_1.default.abi,
    AddressUpdatable: AddressUpdatable_json_1.default.abi,
    AddressUpdater: AddressUpdater_json_1.default.abi,
    IIIncentivePoolAllocation: IIIncentivePoolAllocation_json_1.default.abi,
    IIIncentivePoolReceiver: IIIncentivePoolReceiver_json_1.default.abi,
    IIIncentivePoolPercentageProvider: IIIncentivePoolPercentageProvider_json_1.default.abi,
    IIFtsoRewardManager: IIFtsoRewardManager_json_1.default.abi,
    IIIncentivePoolSharingPercentageProvider: IIIncentivePoolSharingPercentageProvider_json_1.default.abi,
    IITokenPool: IITokenPool_json_1.default.abi,
    IIGenericRewardManager: IIGenericRewardManager_json_1.default.abi,
    IncentivePool: IncentivePool_json_1.default.abi,
    GenericRewardManager: GenericRewardManager_json_1.default.abi,
    ValidatorRewardManager: ValidatorRewardManager_json_1.default.abi,
    Escrow: Escrow_json_1.default.abi,
    IncentivePoolAllocation: IncentivePoolAllocation_json_1.default.abi,
    DistributionToDelegators: DistributionToDelegators_json_1.default.abi,
    FtsoRewardManager: FtsoRewardManager_json_1.default.abi,
    AttestationProviderRewardManager: AttestationProviderRewardManager_json_1.default.abi,
    IncentivePoolRewardService: IncentivePoolRewardService_json_1.default.abi,
    DataProviderFee: DataProviderFee_json_1.default.abi,
    IncentivePoolAnnum: IncentivePoolAnnum_json_1.default.abi,
    IncentivePoolRewardServices: IncentivePoolRewardServices_json_1.default.abi,
    IncentivePoolAnnums: IncentivePoolAnnums_json_1.default.abi,
    IIPriceSubmitter: IIPriceSubmitter_json_1.default.abi,
    IFtsoGenesis: IFtsoGenesis_json_1.default.abi,
    IFtsoRegistryGenesis: IFtsoRegistryGenesis_json_1.default.abi,
    IFtsoManagerGenesis: IFtsoManagerGenesis_json_1.default.abi,
    IFlareDaemonize: IFlareDaemonize_json_1.default.abi,
    IInflationGenesis: IInflationGenesis_json_1.default.abi,
    InitialAirdrop: InitialAirdrop_json_1.default.abi,
    PriceSubmitter: PriceSubmitter_json_1.default.abi,
    DistributionTreasury: DistributionTreasury_json_1.default.abi,
    IncentivePoolTreasury: IncentivePoolTreasury_json_1.default.abi,
    StateConnector: StateConnector_json_1.default.abi,
    FlareDaemon: FlareDaemon_json_1.default.abi,
    GovernanceSettings: GovernanceSettings_json_1.default.abi,
};
//# sourceMappingURL=abis.js.map