import IIVPToken from "./artifacts/contracts/token/interface/IIVPToken.sol/IIVPToken.json";
import IIVPContract from "./artifacts/contracts/token/interface/IIVPContract.sol/IIVPContract.json";
import IIGovernanceVotePower from "./artifacts/contracts/token/interface/IIGovernanceVotePower.sol/IIGovernanceVotePower.json";
import IICleanable from "./artifacts/contracts/token/interface/IICleanable.sol/IICleanable.json";
import VPToken from "./artifacts/contracts/token/implementation/VPToken.sol/VPToken.json";
import Delegatable from "./artifacts/contracts/token/implementation/Delegatable.sol/Delegatable.json";
import VPContract from "./artifacts/contracts/token/implementation/VPContract.sol/VPContract.json";
import GovernanceVotePower from "./artifacts/contracts/token/implementation/GovernanceVotePower.sol/GovernanceVotePower.json";
import CleanupBlockNumberManager from "./artifacts/contracts/token/implementation/CleanupBlockNumberManager.sol/CleanupBlockNumberManager.json";
import CheckPointable from "./artifacts/contracts/token/implementation/CheckPointable.sol/CheckPointable.json";
import WNat from "./artifacts/contracts/token/implementation/WNat.sol/WNat.json";
import CheckPointHistoryCache from "./artifacts/contracts/token/lib/CheckPointHistoryCache.sol/CheckPointHistoryCache.json";
import DelegateCheckPointHistory from "./artifacts/contracts/token/lib/DelegateCheckPointHistory.sol/DelegateCheckPointHistory.json";
import PercentageDelegation from "./artifacts/contracts/token/lib/PercentageDelegation.sol/PercentageDelegation.json";
import CheckPointsByAddress from "./artifacts/contracts/token/lib/CheckPointsByAddress.sol/CheckPointsByAddress.json";
import VotePowerCache from "./artifacts/contracts/token/lib/VotePowerCache.sol/VotePowerCache.json";
import DelegateCheckPointsByAddress from "./artifacts/contracts/token/lib/DelegateCheckPointsByAddress.sol/DelegateCheckPointsByAddress.json";
import ExplicitDelegation from "./artifacts/contracts/token/lib/ExplicitDelegation.sol/ExplicitDelegation.json";
import DelegationHistory from "./artifacts/contracts/token/lib/DelegationHistory.sol/DelegationHistory.json";
import VotePower from "./artifacts/contracts/token/lib/VotePower.sol/VotePower.json";
import CheckPointHistory from "./artifacts/contracts/token/lib/CheckPointHistory.sol/CheckPointHistory.json";
import IIFlareAssetRegistry from "./artifacts/contracts/assetRegistry/interface/IIFlareAssetRegistry.sol/IIFlareAssetRegistry.json";
import IIERC20WithMetadata from "./artifacts/contracts/assetRegistry/interface/IIERC20WithMetadata.sol/IIERC20WithMetadata.json";
import IIFlareAssetRegistryProvider from "./artifacts/contracts/assetRegistry/interface/IIFlareAssetRegistryProvider.sol/IIFlareAssetRegistryProvider.json";
import FlareAssetRegistry from "./artifacts/contracts/assetRegistry/implementation/FlareAssetRegistry.sol/FlareAssetRegistry.json";
import WNatRegistryProvider from "./artifacts/contracts/assetRegistry/implementation/WNatRegistryProvider.sol/WNatRegistryProvider.json";
import StandardAttributes from "./artifacts/contracts/assetRegistry/lib/StandardAttributes.sol/StandardAttributes.json";
import IIFtso from "./artifacts/contracts/ftso/interface/IIFtso.sol/IIFtso.json";
import IIFtsoManager from "./artifacts/contracts/ftso/interface/IIFtsoManager.sol/IIFtsoManager.json";
import IIFtsoManagerV1 from "./artifacts/contracts/ftso/interface/IIFtsoManagerV1.sol/IIFtsoManagerV1.json";
import FtsoManager from "./artifacts/contracts/ftso/implementation/FtsoManager.sol/FtsoManager.json";
import Ftso from "./artifacts/contracts/ftso/implementation/Ftso.sol/Ftso.json";
import FtsoVote from "./artifacts/contracts/ftso/lib/FtsoVote.sol/FtsoVote.json";
import FtsoMedian from "./artifacts/contracts/ftso/lib/FtsoMedian.sol/FtsoMedian.json";
import FtsoEpoch from "./artifacts/contracts/ftso/lib/FtsoEpoch.sol/FtsoEpoch.json";
import FtsoManagement from "./artifacts/contracts/ftso/lib/FtsoManagement.sol/FtsoManagement.json";
import FtsoManagerSettings from "./artifacts/contracts/ftso/lib/FtsoManagerSettings.sol/FtsoManagerSettings.json";
import MockFtsoRegistry from "./artifacts/contracts/ftso/priceProviderMockContracts/PriceProviderMockContracts.sol/MockFtsoRegistry.json";
import MockVoterWhitelister from "./artifacts/contracts/ftso/priceProviderMockContracts/PriceProviderMockContracts.sol/MockVoterWhitelister.json";
import MockPriceSubmitter from "./artifacts/contracts/ftso/priceProviderMockContracts/PriceProviderMockContracts.sol/MockPriceSubmitter.json";
import MockNpmFtso from "./artifacts/contracts/ftso/priceProviderMockContracts/priceProviderMockFtso.sol/MockNpmFtso.json";
import IIDelegationAccount from "./artifacts/contracts/claiming/interface/IIDelegationAccount.sol/IIDelegationAccount.json";
import IIClaimSetupManager from "./artifacts/contracts/claiming/interface/IIClaimSetupManager.sol/IIClaimSetupManager.json";
import DelegationAccount from "./artifacts/contracts/claiming/implementation/DelegationAccount.sol/DelegationAccount.json";
import CloneFactory from "./artifacts/contracts/claiming/implementation/CloneFactory.sol/CloneFactory.json";
import ClaimSetupManager from "./artifacts/contracts/claiming/implementation/ClaimSetupManager.sol/ClaimSetupManager.json";
import IIFtsoRegistryV1 from "./artifacts/contracts/utils/interface/IIFtsoRegistryV1.sol/IIFtsoRegistryV1.json";
import IIFtsoRegistry from "./artifacts/contracts/utils/interface/IIFtsoRegistry.sol/IIFtsoRegistry.json";
import IUpdateValidators from "./artifacts/contracts/utils/interface/IUpdateValidators.sol/IUpdateValidators.json";
import IIRandomProvider from "./artifacts/contracts/utils/interface/IIRandomProvider.sol/IIRandomProvider.json";
import IIVoterWhitelister from "./artifacts/contracts/utils/interface/IIVoterWhitelister.sol/IIVoterWhitelister.json";
import AddressSet from "./artifacts/contracts/utils/implementation/AddressSet.sol/AddressSet.json";
import GovernedAndFlareDaemonized from "./artifacts/contracts/utils/implementation/GovernedAndFlareDaemonized.sol/GovernedAndFlareDaemonized.json";
import FtsoRegistry from "./artifacts/contracts/utils/implementation/FtsoRegistry.sol/FtsoRegistry.json";
import FtsoV2Upgrader from "./artifacts/contracts/utils/implementation/FtsoV2Upgrader.sol/FtsoV2Upgrader.json";
import ProxyGoverned from "./artifacts/contracts/utils/implementation/ProxyGoverned.sol/ProxyGoverned.json";
import SafePct from "./artifacts/contracts/utils/implementation/SafePct.sol/SafePct.json";
import RevertErrorTracking from "./artifacts/contracts/utils/implementation/RevertErrorTracking.sol/RevertErrorTracking.json";
import GovernedAndFlareDaemonizedV2 from "./artifacts/contracts/utils/implementation/GovernedAndFlareDaemonizedV2.sol/GovernedAndFlareDaemonizedV2.json";
import VoterWhitelister from "./artifacts/contracts/utils/implementation/VoterWhitelister.sol/VoterWhitelister.json";
import BokkyPooBahsDateTimeLibrary from "./artifacts/contracts/utils/implementation/DateTimeLibrary.sol/BokkyPooBahsDateTimeLibrary.json";
import FlareContractRegistry from "./artifacts/contracts/utils/implementation/FlareContractRegistry.sol/FlareContractRegistry.json";
import FtsoRegistryProxy from "./artifacts/contracts/utils/implementation/FtsoRegistryProxy.sol/FtsoRegistryProxy.json";
import IIGovernorProposer from "./artifacts/contracts/governance/interface/IIGovernorProposer.sol/IIGovernorProposer.json";
import IIPollingFoundation from "./artifacts/contracts/governance/interface/IIPollingFoundation.sol/IIPollingFoundation.json";
import Governed from "./artifacts/contracts/governance/implementation/Governed.sol/Governed.json";
import GovernorProposer from "./artifacts/contracts/governance/implementation/GovernorProposer.sol/GovernorProposer.json";
import GovernorVotePower from "./artifacts/contracts/governance/implementation/GovernorVotePower.sol/GovernorVotePower.json";
import GovernedBase from "./artifacts/contracts/governance/implementation/GovernedBase.sol/GovernedBase.json";
import PollingFtso from "./artifacts/contracts/governance/implementation/PollingFtso.sol/PollingFtso.json";
import GovernorProposals from "./artifacts/contracts/governance/implementation/GovernorProposals.sol/GovernorProposals.json";
import GovernedAtGenesis from "./artifacts/contracts/governance/implementation/GovernedAtGenesis.sol/GovernedAtGenesis.json";
import Governor from "./artifacts/contracts/governance/implementation/Governor.sol/Governor.json";
import GovernedBaseV2 from "./artifacts/contracts/governance/implementation/GovernedBaseV2.sol/GovernedBaseV2.json";
import GovernorVotes from "./artifacts/contracts/governance/implementation/GovernorVotes.sol/GovernorVotes.json";
import GovernedV2 from "./artifacts/contracts/governance/implementation/GovernedV2.sol/GovernedV2.json";
import PollingFoundation from "./artifacts/contracts/governance/implementation/PollingFoundation.sol/PollingFoundation.json";
import IPaymentVerification from "./artifacts/contracts/StateConnector/interface/IPaymentVerification.sol/IPaymentVerification.json";
import BalanceDecreasingTransaction from "./artifacts/contracts/StateConnector/interface/BalanceDecreasingTransaction.sol/BalanceDecreasingTransaction.json";
import IEVMTransactionVerification from "./artifacts/contracts/StateConnector/interface/IEVMTransactionVerification.sol/IEVMTransactionVerification.json";
import IStateConnector from "./artifacts/contracts/StateConnector/interface/IStateConnector.sol/IStateConnector.json";
import IAddressValidityVerification from "./artifacts/contracts/StateConnector/interface/IAddressValidityVerification.sol/IAddressValidityVerification.json";
import Payment from "./artifacts/contracts/StateConnector/interface/Payment.sol/Payment.json";
import EVMTransaction from "./artifacts/contracts/StateConnector/interface/EVMTransaction.sol/EVMTransaction.json";
import ITypeTemplateVerification from "./artifacts/contracts/StateConnector/interface/ITypeTemplateVerification.sol/ITypeTemplateVerification.json";
import IBalanceDecreasingTransactionVerification from "./artifacts/contracts/StateConnector/interface/IBalanceDecreasingTransactionVerification.sol/IBalanceDecreasingTransactionVerification.json";
import AddressValidity from "./artifacts/contracts/StateConnector/interface/AddressValidity.sol/AddressValidity.json";
import IReferencedPaymentNonexistenceVerification from "./artifacts/contracts/StateConnector/interface/IReferencedPaymentNonexistenceVerification.sol/IReferencedPaymentNonexistenceVerification.json";
import ReferencedPaymentNonexistence from "./artifacts/contracts/StateConnector/interface/ReferencedPaymentNonexistence.sol/ReferencedPaymentNonexistence.json";
import TypeTemplate from "./artifacts/contracts/StateConnector/interface/TypeTemplate.sol/TypeTemplate.json";
import ConfirmedBlockHeightExists from "./artifacts/contracts/StateConnector/interface/ConfirmedBlockHeightExists.sol/ConfirmedBlockHeightExists.json";
import IConfirmedBlockHeightExistsVerification from "./artifacts/contracts/StateConnector/interface/IConfirmedBlockHeightExistsVerification.sol/IConfirmedBlockHeightExistsVerification.json";
import IIPreInflationCalculation from "./artifacts/contracts/inflation/interface/IIPreInflationCalculation.sol/IIPreInflationCalculation.json";
import IIInflationReceiver from "./artifacts/contracts/inflation/interface/IIInflationReceiver.sol/IIInflationReceiver.json";
import IIInflationV1 from "./artifacts/contracts/inflation/interface/IIInflationV1.sol/IIInflationV1.json";
import IIInflationReceiverV1 from "./artifacts/contracts/inflation/interface/IIInflationReceiverV1.sol/IIInflationReceiverV1.json";
import IISupply from "./artifacts/contracts/inflation/interface/IISupply.sol/IISupply.json";
import IIInflationAllocation from "./artifacts/contracts/inflation/interface/IIInflationAllocation.sol/IIInflationAllocation.json";
import Inflation from "./artifacts/contracts/inflation/implementation/Inflation.sol/Inflation.json";
import InflationAllocation from "./artifacts/contracts/inflation/implementation/InflationAllocation.sol/InflationAllocation.json";
import Supply from "./artifacts/contracts/inflation/implementation/Supply.sol/Supply.json";
import SelfDestructBurner from "./artifacts/contracts/inflation/implementation/SelfDestructBurner.sol/SelfDestructBurner.json";
import InflationRewardServices from "./artifacts/contracts/inflation/lib/InflationRewardServices.sol/InflationRewardServices.json";
import InflationTimeSlots from "./artifacts/contracts/inflation/lib/InflationTimeSlots.sol/InflationTimeSlots.json";
import ICollateralizable from "./artifacts/contracts/mockXAsset/interface/ICollateralizable.sol/ICollateralizable.json";
import IIAddressUpdatable from "./artifacts/contracts/addressUpdater/interface/IIAddressUpdatable.sol/IIAddressUpdatable.json";
import IIAddressUpdater from "./artifacts/contracts/addressUpdater/interface/IIAddressUpdater.sol/IIAddressUpdater.json";
import AddressUpdatable from "./artifacts/contracts/addressUpdater/implementation/AddressUpdatable.sol/AddressUpdatable.json";
import AddressUpdater from "./artifacts/contracts/addressUpdater/implementation/AddressUpdater.sol/AddressUpdater.json";
import IIFtsoRewardManager from "./artifacts/contracts/tokenPools/interface/IIFtsoRewardManager.sol/IIFtsoRewardManager.json";
import IITokenPool from "./artifacts/contracts/tokenPools/interface/IITokenPool.sol/IITokenPool.json";
import TokenPoolBase from "./artifacts/contracts/tokenPools/implementation/TokenPoolBase.sol/TokenPoolBase.json";
import FtsoRewardManager from "./artifacts/contracts/tokenPools/implementation/FtsoRewardManager.sol/FtsoRewardManager.json";
import InflationReceiver from "./artifacts/contracts/tokenPools/implementation/InflationReceiver.sol/InflationReceiver.json";
import DataProviderFee from "./artifacts/contracts/tokenPools/lib/DataProviderFee.sol/DataProviderFee.json";
import IIPriceSubmitter from "./artifacts/contracts/genesis/interface/IIPriceSubmitter.sol/IIPriceSubmitter.json";
import IFtsoGenesis from "./artifacts/contracts/genesis/interface/IFtsoGenesis.sol/IFtsoGenesis.json";
import IFtsoRegistryGenesis from "./artifacts/contracts/genesis/interface/IFtsoRegistryGenesis.sol/IFtsoRegistryGenesis.json";
import IFtsoManagerGenesis from "./artifacts/contracts/genesis/interface/IFtsoManagerGenesis.sol/IFtsoManagerGenesis.json";
import IFlareDaemonize from "./artifacts/contracts/genesis/interface/IFlareDaemonize.sol/IFlareDaemonize.json";
import IInflationGenesis from "./artifacts/contracts/genesis/interface/IInflationGenesis.sol/IInflationGenesis.json";
import PriceSubmitter from "./artifacts/contracts/genesis/implementation/PriceSubmitter.sol/PriceSubmitter.json";
import StateConnector from "./artifacts/contracts/genesis/implementation/StateConnector.sol/StateConnector.json";
import FlareDaemon from "./artifacts/contracts/genesis/implementation/FlareDaemon.sol/FlareDaemon.json";
import GovernanceSettings from "./artifacts/contracts/genesis/implementation/GovernanceSettings.sol/GovernanceSettings.json";
import IRelay from "./artifacts/contracts/utils/interface/IRelay.sol/IRelay.json";
import IFastUpdater from "./artifacts/contracts/userInterfaces/IFastUpdater.sol/IFastUpdater.json";
import IFastUpdateIncentiveManager from "./artifacts/contracts/userInterfaces/IFastUpdateIncentiveManager.sol/IFastUpdateIncentiveManager.json";

export const abis: { [key: string]: any; } = {
  IIVPToken: IIVPToken.abi,
  IIVPContract: IIVPContract.abi,
  IIGovernanceVotePower: IIGovernanceVotePower.abi,
  IICleanable: IICleanable.abi,
  VPToken: VPToken.abi,
  Delegatable: Delegatable.abi,
  VPContract: VPContract.abi,
  GovernanceVotePower: GovernanceVotePower.abi,
  CleanupBlockNumberManager: CleanupBlockNumberManager.abi,
  CheckPointable: CheckPointable.abi,
  WNat: WNat.abi,
  CheckPointHistoryCache: CheckPointHistoryCache.abi,
  DelegateCheckPointHistory: DelegateCheckPointHistory.abi,
  PercentageDelegation: PercentageDelegation.abi,
  CheckPointsByAddress: CheckPointsByAddress.abi,
  VotePowerCache: VotePowerCache.abi,
  DelegateCheckPointsByAddress: DelegateCheckPointsByAddress.abi,
  ExplicitDelegation: ExplicitDelegation.abi,
  DelegationHistory: DelegationHistory.abi,
  VotePower: VotePower.abi,
  CheckPointHistory: CheckPointHistory.abi,
  IIFlareAssetRegistry: IIFlareAssetRegistry.abi,
  IIERC20WithMetadata: IIERC20WithMetadata.abi,
  IIFlareAssetRegistryProvider: IIFlareAssetRegistryProvider.abi,
  FlareAssetRegistry: FlareAssetRegistry.abi,
  WNatRegistryProvider: WNatRegistryProvider.abi,
  StandardAttributes: StandardAttributes.abi,
  IIFtso: IIFtso.abi,
  IIFtsoManager: IIFtsoManager.abi,
  IIFtsoManagerV1: IIFtsoManagerV1.abi,
  FtsoManager: FtsoManager.abi,
  Ftso: Ftso.abi,
  FtsoVote: FtsoVote.abi,
  FtsoMedian: FtsoMedian.abi,
  FtsoEpoch: FtsoEpoch.abi,
  FtsoManagement: FtsoManagement.abi,
  FtsoManagerSettings: FtsoManagerSettings.abi,
  MockFtsoRegistry: MockFtsoRegistry.abi,
  MockVoterWhitelister: MockVoterWhitelister.abi,
  MockPriceSubmitter: MockPriceSubmitter.abi,
  MockNpmFtso: MockNpmFtso.abi,
  IIDelegationAccount: IIDelegationAccount.abi,
  IIClaimSetupManager: IIClaimSetupManager.abi,
  DelegationAccount: DelegationAccount.abi,
  CloneFactory: CloneFactory.abi,
  ClaimSetupManager: ClaimSetupManager.abi,
  IIFtsoRegistryV1: IIFtsoRegistryV1.abi,
  IIFtsoRegistry: IIFtsoRegistry.abi,
  IUpdateValidators: IUpdateValidators.abi,
  IIRandomProvider: IIRandomProvider.abi,
  IIVoterWhitelister: IIVoterWhitelister.abi,
  AddressSet: AddressSet.abi,
  GovernedAndFlareDaemonized: GovernedAndFlareDaemonized.abi,
  FtsoRegistry: FtsoRegistry.abi,
  FtsoV2Upgrader: FtsoV2Upgrader.abi,
  ProxyGoverned: ProxyGoverned.abi,
  SafePct: SafePct.abi,
  RevertErrorTracking: RevertErrorTracking.abi,
  GovernedAndFlareDaemonizedV2: GovernedAndFlareDaemonizedV2.abi,
  VoterWhitelister: VoterWhitelister.abi,
  BokkyPooBahsDateTimeLibrary: BokkyPooBahsDateTimeLibrary.abi,
  FlareContractRegistry: FlareContractRegistry.abi,
  FtsoRegistryProxy: FtsoRegistryProxy.abi,
  IIGovernorProposer: IIGovernorProposer.abi,
  IIPollingFoundation: IIPollingFoundation.abi,
  Governed: Governed.abi,
  GovernorProposer: GovernorProposer.abi,
  GovernorVotePower: GovernorVotePower.abi,
  GovernedBase: GovernedBase.abi,
  PollingFtso: PollingFtso.abi,
  GovernorProposals: GovernorProposals.abi,
  GovernedAtGenesis: GovernedAtGenesis.abi,
  Governor: Governor.abi,
  GovernedBaseV2: GovernedBaseV2.abi,
  GovernorVotes: GovernorVotes.abi,
  GovernedV2: GovernedV2.abi,
  PollingFoundation: PollingFoundation.abi,
  IPaymentVerification: IPaymentVerification.abi,
  BalanceDecreasingTransaction: BalanceDecreasingTransaction.abi,
  IEVMTransactionVerification: IEVMTransactionVerification.abi,
  IStateConnector: IStateConnector.abi,
  IAddressValidityVerification: IAddressValidityVerification.abi,
  Payment: Payment.abi,
  EVMTransaction: EVMTransaction.abi,
  ITypeTemplateVerification: ITypeTemplateVerification.abi,
  IBalanceDecreasingTransactionVerification: IBalanceDecreasingTransactionVerification.abi,
  AddressValidity: AddressValidity.abi,
  IReferencedPaymentNonexistenceVerification: IReferencedPaymentNonexistenceVerification.abi,
  ReferencedPaymentNonexistence: ReferencedPaymentNonexistence.abi,
  TypeTemplate: TypeTemplate.abi,
  ConfirmedBlockHeightExists: ConfirmedBlockHeightExists.abi,
  IConfirmedBlockHeightExistsVerification: IConfirmedBlockHeightExistsVerification.abi,
  IIPreInflationCalculation: IIPreInflationCalculation.abi,
  IIInflationReceiver: IIInflationReceiver.abi,
  IIInflationV1: IIInflationV1.abi,
  IIInflationReceiverV1: IIInflationReceiverV1.abi,
  IISupply: IISupply.abi,
  IIInflationAllocation: IIInflationAllocation.abi,
  Inflation: Inflation.abi,
  InflationAllocation: InflationAllocation.abi,
  Supply: Supply.abi,
  SelfDestructBurner: SelfDestructBurner.abi,
  InflationRewardServices: InflationRewardServices.abi,
  InflationTimeSlots: InflationTimeSlots.abi,
  ICollateralizable: ICollateralizable.abi,
  IIAddressUpdatable: IIAddressUpdatable.abi,
  IIAddressUpdater: IIAddressUpdater.abi,
  AddressUpdatable: AddressUpdatable.abi,
  AddressUpdater: AddressUpdater.abi,
  IIFtsoRewardManager: IIFtsoRewardManager.abi,
  IITokenPool: IITokenPool.abi,
  TokenPoolBase: TokenPoolBase.abi,
  FtsoRewardManager: FtsoRewardManager.abi,
  InflationReceiver: InflationReceiver.abi,
  DataProviderFee: DataProviderFee.abi,
  IIPriceSubmitter: IIPriceSubmitter.abi,
  IFtsoGenesis: IFtsoGenesis.abi,
  IFtsoRegistryGenesis: IFtsoRegistryGenesis.abi,
  IFtsoManagerGenesis: IFtsoManagerGenesis.abi,
  IFlareDaemonize: IFlareDaemonize.abi,
  IInflationGenesis: IInflationGenesis.abi,
  PriceSubmitter: PriceSubmitter.abi,
  StateConnector: StateConnector.abi,
  FlareDaemon: FlareDaemon.abi,
  GovernanceSettings: GovernanceSettings.abi,
  IRelay: IRelay.abi,
  IFastUpdater: IFastUpdater.abi,
  IFastUpdateIncentiveManager: IFastUpdateIncentiveManager.abi,
};