import { t as __exportAll } from "../chunk-BCcL9Bmk.js";
import { c as Timestamp, i as SigningCommitment, n as Signature, o as signatureIntentFromJSON, s as signatureIntentToJSON, t as Empty } from "../empty-BtQ9kkdb.js";
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

//#region src/proto/spark.ts
var spark_exports = /* @__PURE__ */ __exportAll({
	AdaptorPublicKeyPackage: () => AdaptorPublicKeyPackage,
	AddDelegationSpenderRequest: () => AddDelegationSpenderRequest,
	AddDelegationSpenderResponse: () => AddDelegationSpenderResponse,
	Address: () => Address,
	AddressNode: () => AddressNode,
	AddressRequestNode: () => AddressRequestNode,
	AddressedUtxo: () => AddressedUtxo,
	BitcoinTransactionOutput: () => BitcoinTransactionOutput,
	CancelTransferRequest: () => CancelTransferRequest,
	CancelTransferResponse: () => CancelTransferResponse,
	ClaimLeafKeyTweak: () => ClaimLeafKeyTweak,
	ClaimLeafKeyTweak_PubkeySharesTweakEntry: () => ClaimLeafKeyTweak_PubkeySharesTweakEntry,
	ClaimLeafKeyTweaks: () => ClaimLeafKeyTweaks,
	ClaimPackage: () => ClaimPackage,
	ClaimPackage_KeyTweakPackageEntry: () => ClaimPackage_KeyTweakPackageEntry,
	ClaimTransferRequest: () => ClaimTransferRequest,
	ClaimTransferResponse: () => ClaimTransferResponse,
	ClaimTransferSignRefundsRequest: () => ClaimTransferSignRefundsRequest,
	ClaimTransferSignRefundsResponse: () => ClaimTransferSignRefundsResponse,
	ClaimTransferTweakKeysRequest: () => ClaimTransferTweakKeysRequest,
	ConnectedEvent: () => ConnectedEvent,
	CooperativeExitRequest: () => CooperativeExitRequest,
	CooperativeExitResponse: () => CooperativeExitResponse,
	CounterLeafSwapRequest: () => CounterLeafSwapRequest,
	CounterLeafSwapResponse: () => CounterLeafSwapResponse,
	CreateDelegationGrantRequest: () => CreateDelegationGrantRequest,
	CreateDelegationGrantResponse: () => CreateDelegationGrantResponse,
	CreateTreeRequest: () => CreateTreeRequest,
	CreateTreeResponse: () => CreateTreeResponse,
	CreationNode: () => CreationNode,
	CreationResponseNode: () => CreationResponseNode,
	DecrementRefundTimelockResult: () => DecrementRefundTimelockResult,
	DecrementRefundTimelockSigningJob: () => DecrementRefundTimelockSigningJob,
	DelegationGrant: () => DelegationGrant,
	DelegationGrantInfo: () => DelegationGrantInfo,
	DelegationGrantInfo_SpentSatsBySpenderEntry: () => DelegationGrantInfo_SpentSatsBySpenderEntry,
	DelegationIntent: () => DelegationIntent,
	DelegationIntent_ReceiverAmountsSatsEntry: () => DelegationIntent_ReceiverAmountsSatsEntry,
	DelegationPathSelector: () => DelegationPathSelector,
	DelegationSpender: () => DelegationSpender,
	DelegationStatus: () => DelegationStatus,
	DepositAddressProof: () => DepositAddressProof,
	DepositAddressProof_AddressSignaturesEntry: () => DepositAddressProof_AddressSignaturesEntry,
	DepositAddressQueryResult: () => DepositAddressQueryResult,
	DepositEvent: () => DepositEvent,
	Direction: () => Direction,
	ExitingTree: () => ExitingTree,
	ExtendLeafRequest: () => ExtendLeafRequest,
	ExtendLeafResponse: () => ExtendLeafResponse,
	ExtendLeafSigningResult: () => ExtendLeafSigningResult,
	FeeBumpLadder: () => FeeBumpLadder,
	FeeBumpRung: () => FeeBumpRung,
	FeeComponent: () => FeeComponent,
	FeeRole: () => FeeRole,
	FeeSource: () => FeeSource,
	FinalizeDepositTreeCreationRequest: () => FinalizeDepositTreeCreationRequest,
	FinalizeDepositTreeCreationResponse: () => FinalizeDepositTreeCreationResponse,
	FinalizeNodeSignaturesRequest: () => FinalizeNodeSignaturesRequest,
	FinalizeNodeSignaturesResponse: () => FinalizeNodeSignaturesResponse,
	FinalizeTransferRequest: () => FinalizeTransferRequest,
	FinalizeTransferResponse: () => FinalizeTransferResponse,
	FinalizeTransferWithTransferPackageRequest: () => FinalizeTransferWithTransferPackageRequest,
	GenerateDepositAddressRequest: () => GenerateDepositAddressRequest,
	GenerateDepositAddressResponse: () => GenerateDepositAddressResponse,
	GenerateStaticDepositAddressRequest: () => GenerateStaticDepositAddressRequest,
	GenerateStaticDepositAddressResponse: () => GenerateStaticDepositAddressResponse,
	GetSigningCommitmentsRequest: () => GetSigningCommitmentsRequest,
	GetSigningCommitmentsResponse: () => GetSigningCommitmentsResponse,
	GetSigningOperatorListResponse: () => GetSigningOperatorListResponse,
	GetSigningOperatorListResponse_SigningOperatorsEntry: () => GetSigningOperatorListResponse_SigningOperatorsEntry,
	GetUtxosForAddressRequest: () => GetUtxosForAddressRequest,
	GetUtxosForAddressResponse: () => GetUtxosForAddressResponse,
	GetUtxosForIdentityRequest: () => GetUtxosForIdentityRequest,
	GetUtxosForIdentityResponse: () => GetUtxosForIdentityResponse,
	HashVariant: () => HashVariant,
	HeartbeatEvent: () => HeartbeatEvent,
	InitiatePreimageSwapRequest: () => InitiatePreimageSwapRequest,
	InitiatePreimageSwapRequest_Reason: () => InitiatePreimageSwapRequest_Reason,
	InitiatePreimageSwapResponse: () => InitiatePreimageSwapResponse,
	InitiatePreimageSwapV4Request: () => InitiatePreimageSwapV4Request,
	InitiateStaticDepositUtxoRefundRequest: () => InitiateStaticDepositUtxoRefundRequest,
	InitiateStaticDepositUtxoRefundResponse: () => InitiateStaticDepositUtxoRefundResponse,
	InitiateSwapPrimaryTransferRequest: () => InitiateSwapPrimaryTransferRequest,
	InitiateSwapPrimaryTransferResponse: () => InitiateSwapPrimaryTransferResponse,
	InitiateUtxoSwapRequest: () => InitiateUtxoSwapRequest,
	InitiateUtxoSwapResponse: () => InitiateUtxoSwapResponse,
	InputSigningData: () => InputSigningData,
	InstallLeafDecompositionProgress: () => InstallLeafDecompositionProgress,
	InstallLeafDecompositionsRequest: () => InstallLeafDecompositionsRequest,
	InstallLeafDecompositionsRequest_KeyTweakPackageEntry: () => InstallLeafDecompositionsRequest_KeyTweakPackageEntry,
	InstallLeafDecompositionsResponse: () => InstallLeafDecompositionsResponse,
	InvoiceAmount: () => InvoiceAmount,
	InvoiceAmountProof: () => InvoiceAmountProof,
	InvoiceResponse: () => InvoiceResponse,
	InvoiceStatus: () => InvoiceStatus,
	LeafAuthorization: () => LeafAuthorization,
	LeafDecompositionInstall: () => LeafDecompositionInstall,
	LeafRefundTxSigningJob: () => LeafRefundTxSigningJob,
	LeafRefundTxSigningResult: () => LeafRefundTxSigningResult,
	ManifestAmount: () => ManifestAmount,
	ManifestEdge: () => ManifestEdge,
	MpcLeafSubShare: () => MpcLeafSubShare,
	MpcOperatorShares: () => MpcOperatorShares,
	MpcSealedShare: () => MpcSealedShare,
	MpcSealedSharePayload: () => MpcSealedSharePayload,
	MpcSendLeaf: () => MpcSendLeaf,
	MpcTransferPackage: () => MpcTransferPackage,
	MpcTransferPackage_KeyTweaksEntry: () => MpcTransferPackage_KeyTweaksEntry,
	Network: () => Network,
	NodeOutput: () => NodeOutput,
	NodeSignatureShares: () => NodeSignatureShares,
	NodeSignatures: () => NodeSignatures,
	Order: () => Order,
	OutPoint: () => OutPoint,
	PageRequest: () => PageRequest,
	PageResponse: () => PageResponse,
	PreimageRequestRole: () => PreimageRequestRole,
	PreimageRequestStatus: () => PreimageRequestStatus,
	PreimageRequestWithTransfer: () => PreimageRequestWithTransfer,
	PrepareTreeAddressRequest: () => PrepareTreeAddressRequest,
	PrepareTreeAddressResponse: () => PrepareTreeAddressResponse,
	ProvidePreimageRequest: () => ProvidePreimageRequest,
	ProvidePreimageResponse: () => ProvidePreimageResponse,
	QueryBalanceRequest: () => QueryBalanceRequest,
	QueryBalanceResponse: () => QueryBalanceResponse,
	QueryBalanceResponse_NodeBalancesEntry: () => QueryBalanceResponse_NodeBalancesEntry,
	QueryDelegationGrantsRequest: () => QueryDelegationGrantsRequest,
	QueryDelegationGrantsResponse: () => QueryDelegationGrantsResponse,
	QueryHtlcRequest: () => QueryHtlcRequest,
	QueryHtlcResponse: () => QueryHtlcResponse,
	QueryNodesByValueRequest: () => QueryNodesByValueRequest,
	QueryNodesByValueResponse: () => QueryNodesByValueResponse,
	QueryNodesByValueResponse_NodesEntry: () => QueryNodesByValueResponse_NodesEntry,
	QueryNodesDistributionRequest: () => QueryNodesDistributionRequest,
	QueryNodesDistributionResponse: () => QueryNodesDistributionResponse,
	QueryNodesDistributionResponse_NodeDistributionEntry: () => QueryNodesDistributionResponse_NodeDistributionEntry,
	QueryNodesRequest: () => QueryNodesRequest,
	QueryNodesResponse: () => QueryNodesResponse,
	QueryNodesResponse_NodesEntry: () => QueryNodesResponse_NodesEntry,
	QueryPreimageRequest: () => QueryPreimageRequest,
	QueryPreimageResponse: () => QueryPreimageResponse,
	QuerySparkInvoicesRequest: () => QuerySparkInvoicesRequest,
	QuerySparkInvoicesResponse: () => QuerySparkInvoicesResponse,
	QueryStaticDepositAddressesRequest: () => QueryStaticDepositAddressesRequest,
	QueryStaticDepositAddressesResponse: () => QueryStaticDepositAddressesResponse,
	QueryTransferPreimageRequest: () => QueryTransferPreimageRequest,
	QueryTransferPreimageResponse: () => QueryTransferPreimageResponse,
	QueryTransfersByIdRequest: () => QueryTransfersByIdRequest,
	QueryTransfersResponse: () => QueryTransfersResponse,
	QueryUnusedDepositAddressesRequest: () => QueryUnusedDepositAddressesRequest,
	QueryUnusedDepositAddressesResponse: () => QueryUnusedDepositAddressesResponse,
	QueryWalletSettingRequest: () => QueryWalletSettingRequest,
	QueryWalletSettingResponse: () => QueryWalletSettingResponse,
	RecoverWatchtowerExitedLeafRequest: () => RecoverWatchtowerExitedLeafRequest,
	RecoverWatchtowerExitedLeafResponse: () => RecoverWatchtowerExitedLeafResponse,
	RefreshTimelockRequest: () => RefreshTimelockRequest,
	RefreshTimelockResponse: () => RefreshTimelockResponse,
	RefreshTimelockSigningResult: () => RefreshTimelockSigningResult,
	RenewLeafRequest: () => RenewLeafRequest,
	RenewLeafResponse: () => RenewLeafResponse,
	RenewNodeTimelockResult: () => RenewNodeTimelockResult,
	RenewNodeTimelockSigningJob: () => RenewNodeTimelockSigningJob,
	RenewNodeZeroTimelockResult: () => RenewNodeZeroTimelockResult,
	RenewNodeZeroTimelockSigningJob: () => RenewNodeZeroTimelockSigningJob,
	RenewRefundTimelockResult: () => RenewRefundTimelockResult,
	RenewRefundTimelockSigningJob: () => RenewRefundTimelockSigningJob,
	RequestedSigningCommitments: () => RequestedSigningCommitments,
	RequestedSigningCommitments_SigningNonceCommitmentsEntry: () => RequestedSigningCommitments_SigningNonceCommitmentsEntry,
	RevokeDelegationGrantRequest: () => RevokeDelegationGrantRequest,
	RevokeDelegationGrantResponse: () => RevokeDelegationGrantResponse,
	RevokeDelegationSpenderRequest: () => RevokeDelegationSpenderRequest,
	RevokeDelegationSpenderResponse: () => RevokeDelegationSpenderResponse,
	RotateStaticDepositAddressRequest: () => RotateStaticDepositAddressRequest,
	RotateStaticDepositAddressResponse: () => RotateStaticDepositAddressResponse,
	SatsPayment: () => SatsPayment,
	SatsTransfer: () => SatsTransfer,
	SecretProof: () => SecretProof,
	SecretShare: () => SecretShare,
	SendLeafKeyTweak: () => SendLeafKeyTweak,
	SendLeafKeyTweak_PubkeySharesTweakEntry: () => SendLeafKeyTweak_PubkeySharesTweakEntry,
	SendLeafKeyTweaks: () => SendLeafKeyTweaks,
	SenderTransferPackage: () => SenderTransferPackage,
	SenderTransferPackage_ReceiverIdentityPublicKeysEntry: () => SenderTransferPackage_ReceiverIdentityPublicKeysEntry,
	SigningCommitments: () => SigningCommitments,
	SigningCommitments_SigningCommitmentsEntry: () => SigningCommitments_SigningCommitmentsEntry,
	SigningJob: () => SigningJob,
	SigningKeyshare: () => SigningKeyshare,
	SigningKeyshare_PublicSharesEntry: () => SigningKeyshare_PublicSharesEntry,
	SigningOperatorInfo: () => SigningOperatorInfo,
	SigningResult: () => SigningResult,
	SigningResult_PublicKeysEntry: () => SigningResult_PublicKeysEntry,
	SigningResult_SignatureSharesEntry: () => SigningResult_SignatureSharesEntry,
	SigningResult_SigningNonceCommitmentsEntry: () => SigningResult_SigningNonceCommitmentsEntry,
	SparkAddress: () => SparkAddress,
	SparkInvoiceFields: () => SparkInvoiceFields,
	SparkServiceDefinition: () => SparkServiceDefinition,
	StartDepositTreeCreationRequest: () => StartDepositTreeCreationRequest,
	StartDepositTreeCreationResponse: () => StartDepositTreeCreationResponse,
	StartTransferMpcRequest: () => StartTransferMpcRequest,
	StartTransferRequest: () => StartTransferRequest,
	StartTransferResponse: () => StartTransferResponse,
	StartTransferV3Request: () => StartTransferV3Request,
	StartTreeCreationRequest: () => StartTreeCreationRequest,
	StartTreeCreationResponse: () => StartTreeCreationResponse,
	StorePreimageShareV2Request: () => StorePreimageShareV2Request,
	StorePreimageShareV2Request_EncryptedPreimageSharesEntry: () => StorePreimageShareV2Request_EncryptedPreimageSharesEntry,
	SubUserCommitment: () => SubUserCommitment,
	SubUserSigningContribution: () => SubUserSigningContribution,
	SubscribeToEventsRequest: () => SubscribeToEventsRequest,
	SubscribeToEventsResponse: () => SubscribeToEventsResponse,
	TokenTransactionEvent: () => TokenTransactionEvent,
	TokenTransfer: () => TokenTransfer,
	TokensPayment: () => TokensPayment,
	Transfer: () => Transfer,
	TransferAuthorization: () => TransferAuthorization,
	TransferEvent: () => TransferEvent,
	TransferFilter: () => TransferFilter,
	TransferLeaf: () => TransferLeaf,
	TransferManifest: () => TransferManifest,
	TransferPackage: () => TransferPackage,
	TransferPackage_KeyTweakPackageEntry: () => TransferPackage_KeyTweakPackageEntry,
	TransferReceiver: () => TransferReceiver,
	TransferReceiverStatus: () => TransferReceiverStatus,
	TransferSender: () => TransferSender,
	TransferStatus: () => TransferStatus,
	TransferType: () => TransferType,
	TreeNode: () => TreeNode,
	TreeNodeIds: () => TreeNodeIds,
	TreeNodeStatus: () => TreeNodeStatus,
	UTXO: () => UTXO,
	UpdateWalletSettingRequest: () => UpdateWalletSettingRequest,
	UpdateWalletSettingResponse: () => UpdateWalletSettingResponse,
	UserSignedTxSigningJob: () => UserSignedTxSigningJob,
	UtxoSwapRequestType: () => UtxoSwapRequestType,
	UtxoSwapStatus: () => UtxoSwapStatus,
	WalletSetting: () => WalletSetting,
	delegationStatusFromJSON: () => delegationStatusFromJSON,
	delegationStatusToJSON: () => delegationStatusToJSON,
	directionFromJSON: () => directionFromJSON,
	directionToJSON: () => directionToJSON,
	feeRoleFromJSON: () => feeRoleFromJSON,
	feeRoleToJSON: () => feeRoleToJSON,
	feeSourceFromJSON: () => feeSourceFromJSON,
	feeSourceToJSON: () => feeSourceToJSON,
	hashVariantFromJSON: () => hashVariantFromJSON,
	hashVariantToJSON: () => hashVariantToJSON,
	initiatePreimageSwapRequest_ReasonFromJSON: () => initiatePreimageSwapRequest_ReasonFromJSON,
	initiatePreimageSwapRequest_ReasonToJSON: () => initiatePreimageSwapRequest_ReasonToJSON,
	invoiceStatusFromJSON: () => invoiceStatusFromJSON,
	invoiceStatusToJSON: () => invoiceStatusToJSON,
	networkFromJSON: () => networkFromJSON,
	networkToJSON: () => networkToJSON,
	orderFromJSON: () => orderFromJSON,
	orderToJSON: () => orderToJSON,
	preimageRequestRoleFromJSON: () => preimageRequestRoleFromJSON,
	preimageRequestRoleToJSON: () => preimageRequestRoleToJSON,
	preimageRequestStatusFromJSON: () => preimageRequestStatusFromJSON,
	preimageRequestStatusToJSON: () => preimageRequestStatusToJSON,
	protobufPackage: () => protobufPackage,
	transferReceiverStatusFromJSON: () => transferReceiverStatusFromJSON,
	transferReceiverStatusToJSON: () => transferReceiverStatusToJSON,
	transferStatusFromJSON: () => transferStatusFromJSON,
	transferStatusToJSON: () => transferStatusToJSON,
	transferTypeFromJSON: () => transferTypeFromJSON,
	transferTypeToJSON: () => transferTypeToJSON,
	treeNodeStatusFromJSON: () => treeNodeStatusFromJSON,
	treeNodeStatusToJSON: () => treeNodeStatusToJSON,
	utxoSwapRequestTypeFromJSON: () => utxoSwapRequestTypeFromJSON,
	utxoSwapRequestTypeToJSON: () => utxoSwapRequestTypeToJSON,
	utxoSwapStatusFromJSON: () => utxoSwapStatusFromJSON,
	utxoSwapStatusToJSON: () => utxoSwapStatusToJSON
});
const protobufPackage = "spark";
/** Network is the network type of the bitcoin network. */
let Network = /* @__PURE__ */ function(Network) {
	Network[Network["UNSPECIFIED"] = 0] = "UNSPECIFIED";
	Network[Network["MAINNET"] = 1] = "MAINNET";
	Network[Network["REGTEST"] = 2] = "REGTEST";
	Network[Network["TESTNET"] = 3] = "TESTNET";
	Network[Network["SIGNET"] = 4] = "SIGNET";
	Network[Network["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return Network;
}({});
function networkFromJSON(object) {
	switch (object) {
		case 0:
		case "UNSPECIFIED": return Network.UNSPECIFIED;
		case 1:
		case "MAINNET": return Network.MAINNET;
		case 2:
		case "REGTEST": return Network.REGTEST;
		case 3:
		case "TESTNET": return Network.TESTNET;
		case 4:
		case "SIGNET": return Network.SIGNET;
		default: return Network.UNRECOGNIZED;
	}
}
function networkToJSON(object) {
	switch (object) {
		case Network.UNSPECIFIED: return "UNSPECIFIED";
		case Network.MAINNET: return "MAINNET";
		case Network.REGTEST: return "REGTEST";
		case Network.TESTNET: return "TESTNET";
		case Network.SIGNET: return "SIGNET";
		case Network.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
let Direction = /* @__PURE__ */ function(Direction) {
	Direction[Direction["NEXT"] = 0] = "NEXT";
	Direction[Direction["PREVIOUS"] = 1] = "PREVIOUS";
	Direction[Direction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return Direction;
}({});
function directionFromJSON(object) {
	switch (object) {
		case 0:
		case "NEXT": return Direction.NEXT;
		case 1:
		case "PREVIOUS": return Direction.PREVIOUS;
		default: return Direction.UNRECOGNIZED;
	}
}
function directionToJSON(object) {
	switch (object) {
		case Direction.NEXT: return "NEXT";
		case Direction.PREVIOUS: return "PREVIOUS";
		case Direction.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
let TransferStatus = /* @__PURE__ */ function(TransferStatus) {
	TransferStatus[TransferStatus["TRANSFER_STATUS_SENDER_INITIATED"] = 0] = "TRANSFER_STATUS_SENDER_INITIATED";
	TransferStatus[TransferStatus["TRANSFER_STATUS_SENDER_KEY_TWEAK_PENDING"] = 1] = "TRANSFER_STATUS_SENDER_KEY_TWEAK_PENDING";
	TransferStatus[TransferStatus["TRANSFER_STATUS_SENDER_KEY_TWEAKED"] = 2] = "TRANSFER_STATUS_SENDER_KEY_TWEAKED";
	TransferStatus[TransferStatus["TRANSFER_STATUS_RECEIVER_KEY_TWEAKED"] = 3] = "TRANSFER_STATUS_RECEIVER_KEY_TWEAKED";
	TransferStatus[TransferStatus["TRANSFER_STATUS_RECEIVER_REFUND_SIGNED"] = 4] = "TRANSFER_STATUS_RECEIVER_REFUND_SIGNED";
	TransferStatus[TransferStatus["TRANSFER_STATUS_COMPLETED"] = 5] = "TRANSFER_STATUS_COMPLETED";
	TransferStatus[TransferStatus["TRANSFER_STATUS_EXPIRED"] = 6] = "TRANSFER_STATUS_EXPIRED";
	TransferStatus[TransferStatus["TRANSFER_STATUS_RETURNED"] = 7] = "TRANSFER_STATUS_RETURNED";
	TransferStatus[TransferStatus["TRANSFER_STATUS_SENDER_INITIATED_COORDINATOR"] = 8] = "TRANSFER_STATUS_SENDER_INITIATED_COORDINATOR";
	TransferStatus[TransferStatus["TRANSFER_STATUS_RECEIVER_KEY_TWEAK_LOCKED"] = 9] = "TRANSFER_STATUS_RECEIVER_KEY_TWEAK_LOCKED";
	TransferStatus[TransferStatus["TRANSFER_STATUS_RECEIVER_KEY_TWEAK_APPLIED"] = 10] = "TRANSFER_STATUS_RECEIVER_KEY_TWEAK_APPLIED";
	TransferStatus[TransferStatus["TRANSFER_STATUS_APPLYING_SENDER_KEY_TWEAK"] = 11] = "TRANSFER_STATUS_APPLYING_SENDER_KEY_TWEAK";
	TransferStatus[TransferStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return TransferStatus;
}({});
function transferStatusFromJSON(object) {
	switch (object) {
		case 0:
		case "TRANSFER_STATUS_SENDER_INITIATED": return TransferStatus.TRANSFER_STATUS_SENDER_INITIATED;
		case 1:
		case "TRANSFER_STATUS_SENDER_KEY_TWEAK_PENDING": return TransferStatus.TRANSFER_STATUS_SENDER_KEY_TWEAK_PENDING;
		case 2:
		case "TRANSFER_STATUS_SENDER_KEY_TWEAKED": return TransferStatus.TRANSFER_STATUS_SENDER_KEY_TWEAKED;
		case 3:
		case "TRANSFER_STATUS_RECEIVER_KEY_TWEAKED": return TransferStatus.TRANSFER_STATUS_RECEIVER_KEY_TWEAKED;
		case 4:
		case "TRANSFER_STATUS_RECEIVER_REFUND_SIGNED": return TransferStatus.TRANSFER_STATUS_RECEIVER_REFUND_SIGNED;
		case 5:
		case "TRANSFER_STATUS_COMPLETED": return TransferStatus.TRANSFER_STATUS_COMPLETED;
		case 6:
		case "TRANSFER_STATUS_EXPIRED": return TransferStatus.TRANSFER_STATUS_EXPIRED;
		case 7:
		case "TRANSFER_STATUS_RETURNED": return TransferStatus.TRANSFER_STATUS_RETURNED;
		case 8:
		case "TRANSFER_STATUS_SENDER_INITIATED_COORDINATOR": return TransferStatus.TRANSFER_STATUS_SENDER_INITIATED_COORDINATOR;
		case 9:
		case "TRANSFER_STATUS_RECEIVER_KEY_TWEAK_LOCKED": return TransferStatus.TRANSFER_STATUS_RECEIVER_KEY_TWEAK_LOCKED;
		case 10:
		case "TRANSFER_STATUS_RECEIVER_KEY_TWEAK_APPLIED": return TransferStatus.TRANSFER_STATUS_RECEIVER_KEY_TWEAK_APPLIED;
		case 11:
		case "TRANSFER_STATUS_APPLYING_SENDER_KEY_TWEAK": return TransferStatus.TRANSFER_STATUS_APPLYING_SENDER_KEY_TWEAK;
		default: return TransferStatus.UNRECOGNIZED;
	}
}
function transferStatusToJSON(object) {
	switch (object) {
		case TransferStatus.TRANSFER_STATUS_SENDER_INITIATED: return "TRANSFER_STATUS_SENDER_INITIATED";
		case TransferStatus.TRANSFER_STATUS_SENDER_KEY_TWEAK_PENDING: return "TRANSFER_STATUS_SENDER_KEY_TWEAK_PENDING";
		case TransferStatus.TRANSFER_STATUS_SENDER_KEY_TWEAKED: return "TRANSFER_STATUS_SENDER_KEY_TWEAKED";
		case TransferStatus.TRANSFER_STATUS_RECEIVER_KEY_TWEAKED: return "TRANSFER_STATUS_RECEIVER_KEY_TWEAKED";
		case TransferStatus.TRANSFER_STATUS_RECEIVER_REFUND_SIGNED: return "TRANSFER_STATUS_RECEIVER_REFUND_SIGNED";
		case TransferStatus.TRANSFER_STATUS_COMPLETED: return "TRANSFER_STATUS_COMPLETED";
		case TransferStatus.TRANSFER_STATUS_EXPIRED: return "TRANSFER_STATUS_EXPIRED";
		case TransferStatus.TRANSFER_STATUS_RETURNED: return "TRANSFER_STATUS_RETURNED";
		case TransferStatus.TRANSFER_STATUS_SENDER_INITIATED_COORDINATOR: return "TRANSFER_STATUS_SENDER_INITIATED_COORDINATOR";
		case TransferStatus.TRANSFER_STATUS_RECEIVER_KEY_TWEAK_LOCKED: return "TRANSFER_STATUS_RECEIVER_KEY_TWEAK_LOCKED";
		case TransferStatus.TRANSFER_STATUS_RECEIVER_KEY_TWEAK_APPLIED: return "TRANSFER_STATUS_RECEIVER_KEY_TWEAK_APPLIED";
		case TransferStatus.TRANSFER_STATUS_APPLYING_SENDER_KEY_TWEAK: return "TRANSFER_STATUS_APPLYING_SENDER_KEY_TWEAK";
		case TransferStatus.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
/**
* Per-receiver status on the receiver edge of a Transfer. For single-receiver
* (V2) transfers this is always lock-step with Transfer.status. For
* multi-receiver (V3) transfers each receiver advances independently.
* This is the authoritative per-receiver state.
*/
let TransferReceiverStatus = /* @__PURE__ */ function(TransferReceiverStatus) {
	TransferReceiverStatus[TransferReceiverStatus["TRANSFER_RECEIVER_STATUS_INITIATED"] = 0] = "TRANSFER_RECEIVER_STATUS_INITIATED";
	TransferReceiverStatus[TransferReceiverStatus["TRANSFER_RECEIVER_STATUS_CLAIM_PENDING"] = 1] = "TRANSFER_RECEIVER_STATUS_CLAIM_PENDING";
	TransferReceiverStatus[TransferReceiverStatus["TRANSFER_RECEIVER_STATUS_KEY_TWEAKED"] = 2] = "TRANSFER_RECEIVER_STATUS_KEY_TWEAKED";
	TransferReceiverStatus[TransferReceiverStatus["TRANSFER_RECEIVER_STATUS_KEY_TWEAK_LOCKED"] = 3] = "TRANSFER_RECEIVER_STATUS_KEY_TWEAK_LOCKED";
	TransferReceiverStatus[TransferReceiverStatus["TRANSFER_RECEIVER_STATUS_KEY_TWEAK_APPLIED"] = 4] = "TRANSFER_RECEIVER_STATUS_KEY_TWEAK_APPLIED";
	TransferReceiverStatus[TransferReceiverStatus["TRANSFER_RECEIVER_STATUS_REFUND_SIGNED"] = 5] = "TRANSFER_RECEIVER_STATUS_REFUND_SIGNED";
	TransferReceiverStatus[TransferReceiverStatus["TRANSFER_RECEIVER_STATUS_COMPLETED"] = 6] = "TRANSFER_RECEIVER_STATUS_COMPLETED";
	TransferReceiverStatus[TransferReceiverStatus["TRANSFER_RECEIVER_STATUS_CANCELLED"] = 7] = "TRANSFER_RECEIVER_STATUS_CANCELLED";
	TransferReceiverStatus[TransferReceiverStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return TransferReceiverStatus;
}({});
function transferReceiverStatusFromJSON(object) {
	switch (object) {
		case 0:
		case "TRANSFER_RECEIVER_STATUS_INITIATED": return TransferReceiverStatus.TRANSFER_RECEIVER_STATUS_INITIATED;
		case 1:
		case "TRANSFER_RECEIVER_STATUS_CLAIM_PENDING": return TransferReceiverStatus.TRANSFER_RECEIVER_STATUS_CLAIM_PENDING;
		case 2:
		case "TRANSFER_RECEIVER_STATUS_KEY_TWEAKED": return TransferReceiverStatus.TRANSFER_RECEIVER_STATUS_KEY_TWEAKED;
		case 3:
		case "TRANSFER_RECEIVER_STATUS_KEY_TWEAK_LOCKED": return TransferReceiverStatus.TRANSFER_RECEIVER_STATUS_KEY_TWEAK_LOCKED;
		case 4:
		case "TRANSFER_RECEIVER_STATUS_KEY_TWEAK_APPLIED": return TransferReceiverStatus.TRANSFER_RECEIVER_STATUS_KEY_TWEAK_APPLIED;
		case 5:
		case "TRANSFER_RECEIVER_STATUS_REFUND_SIGNED": return TransferReceiverStatus.TRANSFER_RECEIVER_STATUS_REFUND_SIGNED;
		case 6:
		case "TRANSFER_RECEIVER_STATUS_COMPLETED": return TransferReceiverStatus.TRANSFER_RECEIVER_STATUS_COMPLETED;
		case 7:
		case "TRANSFER_RECEIVER_STATUS_CANCELLED": return TransferReceiverStatus.TRANSFER_RECEIVER_STATUS_CANCELLED;
		default: return TransferReceiverStatus.UNRECOGNIZED;
	}
}
function transferReceiverStatusToJSON(object) {
	switch (object) {
		case TransferReceiverStatus.TRANSFER_RECEIVER_STATUS_INITIATED: return "TRANSFER_RECEIVER_STATUS_INITIATED";
		case TransferReceiverStatus.TRANSFER_RECEIVER_STATUS_CLAIM_PENDING: return "TRANSFER_RECEIVER_STATUS_CLAIM_PENDING";
		case TransferReceiverStatus.TRANSFER_RECEIVER_STATUS_KEY_TWEAKED: return "TRANSFER_RECEIVER_STATUS_KEY_TWEAKED";
		case TransferReceiverStatus.TRANSFER_RECEIVER_STATUS_KEY_TWEAK_LOCKED: return "TRANSFER_RECEIVER_STATUS_KEY_TWEAK_LOCKED";
		case TransferReceiverStatus.TRANSFER_RECEIVER_STATUS_KEY_TWEAK_APPLIED: return "TRANSFER_RECEIVER_STATUS_KEY_TWEAK_APPLIED";
		case TransferReceiverStatus.TRANSFER_RECEIVER_STATUS_REFUND_SIGNED: return "TRANSFER_RECEIVER_STATUS_REFUND_SIGNED";
		case TransferReceiverStatus.TRANSFER_RECEIVER_STATUS_COMPLETED: return "TRANSFER_RECEIVER_STATUS_COMPLETED";
		case TransferReceiverStatus.TRANSFER_RECEIVER_STATUS_CANCELLED: return "TRANSFER_RECEIVER_STATUS_CANCELLED";
		case TransferReceiverStatus.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
let TransferType = /* @__PURE__ */ function(TransferType) {
	TransferType[TransferType["PREIMAGE_SWAP"] = 0] = "PREIMAGE_SWAP";
	TransferType[TransferType["COOPERATIVE_EXIT"] = 1] = "COOPERATIVE_EXIT";
	TransferType[TransferType["TRANSFER"] = 2] = "TRANSFER";
	TransferType[TransferType["UTXO_SWAP"] = 3] = "UTXO_SWAP";
	TransferType[TransferType["SWAP"] = 30] = "SWAP";
	TransferType[TransferType["COUNTER_SWAP"] = 40] = "COUNTER_SWAP";
	TransferType[TransferType["PRIMARY_SWAP_V3"] = 4] = "PRIMARY_SWAP_V3";
	TransferType[TransferType["COUNTER_SWAP_V3"] = 5] = "COUNTER_SWAP_V3";
	TransferType[TransferType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return TransferType;
}({});
function transferTypeFromJSON(object) {
	switch (object) {
		case 0:
		case "PREIMAGE_SWAP": return TransferType.PREIMAGE_SWAP;
		case 1:
		case "COOPERATIVE_EXIT": return TransferType.COOPERATIVE_EXIT;
		case 2:
		case "TRANSFER": return TransferType.TRANSFER;
		case 3:
		case "UTXO_SWAP": return TransferType.UTXO_SWAP;
		case 30:
		case "SWAP": return TransferType.SWAP;
		case 40:
		case "COUNTER_SWAP": return TransferType.COUNTER_SWAP;
		case 4:
		case "PRIMARY_SWAP_V3": return TransferType.PRIMARY_SWAP_V3;
		case 5:
		case "COUNTER_SWAP_V3": return TransferType.COUNTER_SWAP_V3;
		default: return TransferType.UNRECOGNIZED;
	}
}
function transferTypeToJSON(object) {
	switch (object) {
		case TransferType.PREIMAGE_SWAP: return "PREIMAGE_SWAP";
		case TransferType.COOPERATIVE_EXIT: return "COOPERATIVE_EXIT";
		case TransferType.TRANSFER: return "TRANSFER";
		case TransferType.UTXO_SWAP: return "UTXO_SWAP";
		case TransferType.SWAP: return "SWAP";
		case TransferType.COUNTER_SWAP: return "COUNTER_SWAP";
		case TransferType.PRIMARY_SWAP_V3: return "PRIMARY_SWAP_V3";
		case TransferType.COUNTER_SWAP_V3: return "COUNTER_SWAP_V3";
		case TransferType.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
let Order = /* @__PURE__ */ function(Order) {
	Order[Order["DESCENDING"] = 0] = "DESCENDING";
	Order[Order["ASCENDING"] = 1] = "ASCENDING";
	Order[Order["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return Order;
}({});
function orderFromJSON(object) {
	switch (object) {
		case 0:
		case "DESCENDING": return Order.DESCENDING;
		case 1:
		case "ASCENDING": return Order.ASCENDING;
		default: return Order.UNRECOGNIZED;
	}
}
function orderToJSON(object) {
	switch (object) {
		case Order.DESCENDING: return "DESCENDING";
		case Order.ASCENDING: return "ASCENDING";
		case Order.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
/** The kind of fee. */
let FeeSource = /* @__PURE__ */ function(FeeSource) {
	FeeSource[FeeSource["FEE_SOURCE_UNSPECIFIED"] = 0] = "FEE_SOURCE_UNSPECIFIED";
	/** FEE_SOURCE_PARTNER_MARKUP - configurable markup */
	FeeSource[FeeSource["FEE_SOURCE_PARTNER_MARKUP"] = 1] = "FEE_SOURCE_PARTNER_MARKUP";
	/** FEE_SOURCE_BASE - platform usage fee */
	FeeSource[FeeSource["FEE_SOURCE_BASE"] = 2] = "FEE_SOURCE_BASE";
	/** FEE_SOURCE_NETWORK - network security fee */
	FeeSource[FeeSource["FEE_SOURCE_NETWORK"] = 3] = "FEE_SOURCE_NETWORK";
	FeeSource[FeeSource["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return FeeSource;
}({});
function feeSourceFromJSON(object) {
	switch (object) {
		case 0:
		case "FEE_SOURCE_UNSPECIFIED": return FeeSource.FEE_SOURCE_UNSPECIFIED;
		case 1:
		case "FEE_SOURCE_PARTNER_MARKUP": return FeeSource.FEE_SOURCE_PARTNER_MARKUP;
		case 2:
		case "FEE_SOURCE_BASE": return FeeSource.FEE_SOURCE_BASE;
		case 3:
		case "FEE_SOURCE_NETWORK": return FeeSource.FEE_SOURCE_NETWORK;
		default: return FeeSource.UNRECOGNIZED;
	}
}
function feeSourceToJSON(object) {
	switch (object) {
		case FeeSource.FEE_SOURCE_UNSPECIFIED: return "FEE_SOURCE_UNSPECIFIED";
		case FeeSource.FEE_SOURCE_PARTNER_MARKUP: return "FEE_SOURCE_PARTNER_MARKUP";
		case FeeSource.FEE_SOURCE_BASE: return "FEE_SOURCE_BASE";
		case FeeSource.FEE_SOURCE_NETWORK: return "FEE_SOURCE_NETWORK";
		case FeeSource.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
/** Markup split role (for PARTNER_MARKUP). */
let FeeRole = /* @__PURE__ */ function(FeeRole) {
	FeeRole[FeeRole["FEE_ROLE_UNSPECIFIED"] = 0] = "FEE_ROLE_UNSPECIFIED";
	FeeRole[FeeRole["FEE_ROLE_AFFILIATE"] = 1] = "FEE_ROLE_AFFILIATE";
	FeeRole[FeeRole["FEE_ROLE_PARTNER"] = 2] = "FEE_ROLE_PARTNER";
	FeeRole[FeeRole["FEE_ROLE_LS"] = 3] = "FEE_ROLE_LS";
	FeeRole[FeeRole["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return FeeRole;
}({});
function feeRoleFromJSON(object) {
	switch (object) {
		case 0:
		case "FEE_ROLE_UNSPECIFIED": return FeeRole.FEE_ROLE_UNSPECIFIED;
		case 1:
		case "FEE_ROLE_AFFILIATE": return FeeRole.FEE_ROLE_AFFILIATE;
		case 2:
		case "FEE_ROLE_PARTNER": return FeeRole.FEE_ROLE_PARTNER;
		case 3:
		case "FEE_ROLE_LS": return FeeRole.FEE_ROLE_LS;
		default: return FeeRole.UNRECOGNIZED;
	}
}
function feeRoleToJSON(object) {
	switch (object) {
		case FeeRole.FEE_ROLE_UNSPECIFIED: return "FEE_ROLE_UNSPECIFIED";
		case FeeRole.FEE_ROLE_AFFILIATE: return "FEE_ROLE_AFFILIATE";
		case FeeRole.FEE_ROLE_PARTNER: return "FEE_ROLE_PARTNER";
		case FeeRole.FEE_ROLE_LS: return "FEE_ROLE_LS";
		case FeeRole.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
let PreimageRequestStatus = /* @__PURE__ */ function(PreimageRequestStatus) {
	PreimageRequestStatus[PreimageRequestStatus["PREIMAGE_REQUEST_STATUS_WAITING_FOR_PREIMAGE"] = 0] = "PREIMAGE_REQUEST_STATUS_WAITING_FOR_PREIMAGE";
	PreimageRequestStatus[PreimageRequestStatus["PREIMAGE_REQUEST_STATUS_PREIMAGE_SHARED"] = 1] = "PREIMAGE_REQUEST_STATUS_PREIMAGE_SHARED";
	PreimageRequestStatus[PreimageRequestStatus["PREIMAGE_REQUEST_STATUS_RETURNED"] = 2] = "PREIMAGE_REQUEST_STATUS_RETURNED";
	PreimageRequestStatus[PreimageRequestStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return PreimageRequestStatus;
}({});
function preimageRequestStatusFromJSON(object) {
	switch (object) {
		case 0:
		case "PREIMAGE_REQUEST_STATUS_WAITING_FOR_PREIMAGE": return PreimageRequestStatus.PREIMAGE_REQUEST_STATUS_WAITING_FOR_PREIMAGE;
		case 1:
		case "PREIMAGE_REQUEST_STATUS_PREIMAGE_SHARED": return PreimageRequestStatus.PREIMAGE_REQUEST_STATUS_PREIMAGE_SHARED;
		case 2:
		case "PREIMAGE_REQUEST_STATUS_RETURNED": return PreimageRequestStatus.PREIMAGE_REQUEST_STATUS_RETURNED;
		default: return PreimageRequestStatus.UNRECOGNIZED;
	}
}
function preimageRequestStatusToJSON(object) {
	switch (object) {
		case PreimageRequestStatus.PREIMAGE_REQUEST_STATUS_WAITING_FOR_PREIMAGE: return "PREIMAGE_REQUEST_STATUS_WAITING_FOR_PREIMAGE";
		case PreimageRequestStatus.PREIMAGE_REQUEST_STATUS_PREIMAGE_SHARED: return "PREIMAGE_REQUEST_STATUS_PREIMAGE_SHARED";
		case PreimageRequestStatus.PREIMAGE_REQUEST_STATUS_RETURNED: return "PREIMAGE_REQUEST_STATUS_RETURNED";
		case PreimageRequestStatus.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
let PreimageRequestRole = /* @__PURE__ */ function(PreimageRequestRole) {
	PreimageRequestRole[PreimageRequestRole["PREIMAGE_REQUEST_ROLE_RECEIVER"] = 0] = "PREIMAGE_REQUEST_ROLE_RECEIVER";
	PreimageRequestRole[PreimageRequestRole["PREIMAGE_REQUEST_ROLE_SENDER"] = 1] = "PREIMAGE_REQUEST_ROLE_SENDER";
	PreimageRequestRole[PreimageRequestRole["PREIMAGE_REQUEST_ROLE_RECEIVER_AND_SENDER"] = 2] = "PREIMAGE_REQUEST_ROLE_RECEIVER_AND_SENDER";
	PreimageRequestRole[PreimageRequestRole["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return PreimageRequestRole;
}({});
function preimageRequestRoleFromJSON(object) {
	switch (object) {
		case 0:
		case "PREIMAGE_REQUEST_ROLE_RECEIVER": return PreimageRequestRole.PREIMAGE_REQUEST_ROLE_RECEIVER;
		case 1:
		case "PREIMAGE_REQUEST_ROLE_SENDER": return PreimageRequestRole.PREIMAGE_REQUEST_ROLE_SENDER;
		case 2:
		case "PREIMAGE_REQUEST_ROLE_RECEIVER_AND_SENDER": return PreimageRequestRole.PREIMAGE_REQUEST_ROLE_RECEIVER_AND_SENDER;
		default: return PreimageRequestRole.UNRECOGNIZED;
	}
}
function preimageRequestRoleToJSON(object) {
	switch (object) {
		case PreimageRequestRole.PREIMAGE_REQUEST_ROLE_RECEIVER: return "PREIMAGE_REQUEST_ROLE_RECEIVER";
		case PreimageRequestRole.PREIMAGE_REQUEST_ROLE_SENDER: return "PREIMAGE_REQUEST_ROLE_SENDER";
		case PreimageRequestRole.PREIMAGE_REQUEST_ROLE_RECEIVER_AND_SENDER: return "PREIMAGE_REQUEST_ROLE_RECEIVER_AND_SENDER";
		case PreimageRequestRole.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
/** Static deposit address flow messages */
let UtxoSwapRequestType = /* @__PURE__ */ function(UtxoSwapRequestType) {
	UtxoSwapRequestType[UtxoSwapRequestType["Fixed"] = 0] = "Fixed";
	UtxoSwapRequestType[UtxoSwapRequestType["MaxFee"] = 1] = "MaxFee";
	UtxoSwapRequestType[UtxoSwapRequestType["Refund"] = 2] = "Refund";
	UtxoSwapRequestType[UtxoSwapRequestType["Instant"] = 3] = "Instant";
	UtxoSwapRequestType[UtxoSwapRequestType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return UtxoSwapRequestType;
}({});
function utxoSwapRequestTypeFromJSON(object) {
	switch (object) {
		case 0:
		case "Fixed": return UtxoSwapRequestType.Fixed;
		case 1:
		case "MaxFee": return UtxoSwapRequestType.MaxFee;
		case 2:
		case "Refund": return UtxoSwapRequestType.Refund;
		case 3:
		case "Instant": return UtxoSwapRequestType.Instant;
		default: return UtxoSwapRequestType.UNRECOGNIZED;
	}
}
function utxoSwapRequestTypeToJSON(object) {
	switch (object) {
		case UtxoSwapRequestType.Fixed: return "Fixed";
		case UtxoSwapRequestType.MaxFee: return "MaxFee";
		case UtxoSwapRequestType.Refund: return "Refund";
		case UtxoSwapRequestType.Instant: return "Instant";
		case UtxoSwapRequestType.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
let UtxoSwapStatus = /* @__PURE__ */ function(UtxoSwapStatus) {
	UtxoSwapStatus[UtxoSwapStatus["UTXO_SWAP_STATUS_UNSPECIFIED"] = 0] = "UTXO_SWAP_STATUS_UNSPECIFIED";
	UtxoSwapStatus[UtxoSwapStatus["UTXO_SWAP_STATUS_CREATED"] = 1] = "UTXO_SWAP_STATUS_CREATED";
	UtxoSwapStatus[UtxoSwapStatus["UTXO_SWAP_STATUS_COMPLETED"] = 2] = "UTXO_SWAP_STATUS_COMPLETED";
	UtxoSwapStatus[UtxoSwapStatus["UTXO_SWAP_STATUS_CANCELLED"] = 3] = "UTXO_SWAP_STATUS_CANCELLED";
	UtxoSwapStatus[UtxoSwapStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return UtxoSwapStatus;
}({});
function utxoSwapStatusFromJSON(object) {
	switch (object) {
		case 0:
		case "UTXO_SWAP_STATUS_UNSPECIFIED": return UtxoSwapStatus.UTXO_SWAP_STATUS_UNSPECIFIED;
		case 1:
		case "UTXO_SWAP_STATUS_CREATED": return UtxoSwapStatus.UTXO_SWAP_STATUS_CREATED;
		case 2:
		case "UTXO_SWAP_STATUS_COMPLETED": return UtxoSwapStatus.UTXO_SWAP_STATUS_COMPLETED;
		case 3:
		case "UTXO_SWAP_STATUS_CANCELLED": return UtxoSwapStatus.UTXO_SWAP_STATUS_CANCELLED;
		default: return UtxoSwapStatus.UNRECOGNIZED;
	}
}
function utxoSwapStatusToJSON(object) {
	switch (object) {
		case UtxoSwapStatus.UTXO_SWAP_STATUS_UNSPECIFIED: return "UTXO_SWAP_STATUS_UNSPECIFIED";
		case UtxoSwapStatus.UTXO_SWAP_STATUS_CREATED: return "UTXO_SWAP_STATUS_CREATED";
		case UtxoSwapStatus.UTXO_SWAP_STATUS_COMPLETED: return "UTXO_SWAP_STATUS_COMPLETED";
		case UtxoSwapStatus.UTXO_SWAP_STATUS_CANCELLED: return "UTXO_SWAP_STATUS_CANCELLED";
		case UtxoSwapStatus.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
/** Which hash variant to use in cryptographic operations. */
let HashVariant = /* @__PURE__ */ function(HashVariant) {
	/** HASH_VARIANT_UNSPECIFIED - Legacy */
	HashVariant[HashVariant["HASH_VARIANT_UNSPECIFIED"] = 0] = "HASH_VARIANT_UNSPECIFIED";
	/**
	* HASH_VARIANT_V2 - Structured hashing. Binds the delegation intent (Spark Pull) too when the
	* transfer package carries one; a package without an intent hashes exactly as
	* it did before delegation existed, so already-released SDKs keep verifying.
	*/
	HashVariant[HashVariant["HASH_VARIANT_V2"] = 1] = "HASH_VARIANT_V2";
	HashVariant[HashVariant["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return HashVariant;
}({});
function hashVariantFromJSON(object) {
	switch (object) {
		case 0:
		case "HASH_VARIANT_UNSPECIFIED": return HashVariant.HASH_VARIANT_UNSPECIFIED;
		case 1:
		case "HASH_VARIANT_V2": return HashVariant.HASH_VARIANT_V2;
		default: return HashVariant.UNRECOGNIZED;
	}
}
function hashVariantToJSON(object) {
	switch (object) {
		case HashVariant.HASH_VARIANT_UNSPECIFIED: return "HASH_VARIANT_UNSPECIFIED";
		case HashVariant.HASH_VARIANT_V2: return "HASH_VARIANT_V2";
		case HashVariant.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
let InvoiceStatus = /* @__PURE__ */ function(InvoiceStatus) {
	InvoiceStatus[InvoiceStatus["NOT_FOUND"] = 0] = "NOT_FOUND";
	InvoiceStatus[InvoiceStatus["PENDING"] = 1] = "PENDING";
	/**
	* FINALIZED - Payment for this id is complete and the stored invoice's money fields
	* (receiver, payment kind, amount, token identifier) match the invoice
	* you queried.
	*/
	InvoiceStatus[InvoiceStatus["FINALIZED"] = 2] = "FINALIZED";
	InvoiceStatus[InvoiceStatus["RETURNED"] = 4] = "RETURNED";
	/**
	* MISMATCHED_INVOICE_FINALIZED - A payment exists for this invoice id, but the money fields (receiver,
	* payment kind, amount, token identifier) of the stored invoice may differ
	* from the invoice you queried. Compare response.invoice to the invoice
	* you queried and confirm it matches what you expect before relying on
	* this result.
	*/
	InvoiceStatus[InvoiceStatus["MISMATCHED_INVOICE_FINALIZED"] = 5] = "MISMATCHED_INVOICE_FINALIZED";
	InvoiceStatus[InvoiceStatus["MISMATCHED_INVOICE_PENDING"] = 6] = "MISMATCHED_INVOICE_PENDING";
	InvoiceStatus[InvoiceStatus["MISMATCHED_INVOICE_RETURNED"] = 7] = "MISMATCHED_INVOICE_RETURNED";
	InvoiceStatus[InvoiceStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return InvoiceStatus;
}({});
function invoiceStatusFromJSON(object) {
	switch (object) {
		case 0:
		case "NOT_FOUND": return InvoiceStatus.NOT_FOUND;
		case 1:
		case "PENDING": return InvoiceStatus.PENDING;
		case 2:
		case "FINALIZED": return InvoiceStatus.FINALIZED;
		case 4:
		case "RETURNED": return InvoiceStatus.RETURNED;
		case 5:
		case "MISMATCHED_INVOICE_FINALIZED": return InvoiceStatus.MISMATCHED_INVOICE_FINALIZED;
		case 6:
		case "MISMATCHED_INVOICE_PENDING": return InvoiceStatus.MISMATCHED_INVOICE_PENDING;
		case 7:
		case "MISMATCHED_INVOICE_RETURNED": return InvoiceStatus.MISMATCHED_INVOICE_RETURNED;
		default: return InvoiceStatus.UNRECOGNIZED;
	}
}
function invoiceStatusToJSON(object) {
	switch (object) {
		case InvoiceStatus.NOT_FOUND: return "NOT_FOUND";
		case InvoiceStatus.PENDING: return "PENDING";
		case InvoiceStatus.FINALIZED: return "FINALIZED";
		case InvoiceStatus.RETURNED: return "RETURNED";
		case InvoiceStatus.MISMATCHED_INVOICE_FINALIZED: return "MISMATCHED_INVOICE_FINALIZED";
		case InvoiceStatus.MISMATCHED_INVOICE_PENDING: return "MISMATCHED_INVOICE_PENDING";
		case InvoiceStatus.MISMATCHED_INVOICE_RETURNED: return "MISMATCHED_INVOICE_RETURNED";
		case InvoiceStatus.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
let TreeNodeStatus = /* @__PURE__ */ function(TreeNodeStatus) {
	TreeNodeStatus[TreeNodeStatus["TREE_NODE_STATUS_CREATING"] = 0] = "TREE_NODE_STATUS_CREATING";
	TreeNodeStatus[TreeNodeStatus["TREE_NODE_STATUS_AVAILABLE"] = 1] = "TREE_NODE_STATUS_AVAILABLE";
	TreeNodeStatus[TreeNodeStatus["TREE_NODE_STATUS_FROZEN_BY_ISSUER"] = 2] = "TREE_NODE_STATUS_FROZEN_BY_ISSUER";
	TreeNodeStatus[TreeNodeStatus["TREE_NODE_STATUS_TRANSFER_LOCKED"] = 3] = "TREE_NODE_STATUS_TRANSFER_LOCKED";
	TreeNodeStatus[TreeNodeStatus["TREE_NODE_STATUS_SPLIT_LOCKED"] = 4] = "TREE_NODE_STATUS_SPLIT_LOCKED";
	TreeNodeStatus[TreeNodeStatus["TREE_NODE_STATUS_SPLITTED"] = 5] = "TREE_NODE_STATUS_SPLITTED";
	TreeNodeStatus[TreeNodeStatus["TREE_NODE_STATUS_AGGREGATED"] = 6] = "TREE_NODE_STATUS_AGGREGATED";
	TreeNodeStatus[TreeNodeStatus["TREE_NODE_STATUS_ON_CHAIN"] = 7] = "TREE_NODE_STATUS_ON_CHAIN";
	TreeNodeStatus[TreeNodeStatus["TREE_NODE_STATUS_AGGREGATE_LOCK"] = 8] = "TREE_NODE_STATUS_AGGREGATE_LOCK";
	TreeNodeStatus[TreeNodeStatus["TREE_NODE_STATUS_EXITED"] = 9] = "TREE_NODE_STATUS_EXITED";
	TreeNodeStatus[TreeNodeStatus["TREE_NODE_STATUS_RENEW_LOCKED"] = 10] = "TREE_NODE_STATUS_RENEW_LOCKED";
	TreeNodeStatus[TreeNodeStatus["TREE_NODE_STATUS_UNAVAILABLE"] = 11] = "TREE_NODE_STATUS_UNAVAILABLE";
	TreeNodeStatus[TreeNodeStatus["TREE_NODE_STATUS_PARENT_EXITED"] = 12] = "TREE_NODE_STATUS_PARENT_EXITED";
	/**
	* TREE_NODE_STATUS_CONSOLIDATED - The node's subtree was aggregated back into it (AggregateLeaves): it
	* carries live exit transactions signed under the aggregated leaf key and
	* is exit-only — not transferable, renewable, or splittable. It may be
	* aggregated further up the tree.
	*/
	TreeNodeStatus[TreeNodeStatus["TREE_NODE_STATUS_CONSOLIDATED"] = 13] = "TREE_NODE_STATUS_CONSOLIDATED";
	/**
	* TREE_NODE_STATUS_WATCHTOWER_EXITED - A node below one whose watchtower transaction confirmed, which spends the
	* output this node's own transaction claims. Terminal; recovery moves to L1.
	*/
	TreeNodeStatus[TreeNodeStatus["TREE_NODE_STATUS_WATCHTOWER_EXITED"] = 14] = "TREE_NODE_STATUS_WATCHTOWER_EXITED";
	/**
	* TREE_NODE_STATUS_WATCHTOWER_EXIT_RECOVERED - A watchtower-exited node whose owner has co-signed a transaction spending
	* the swept output with the SE. Written when that signature is issued, not
	* when it confirms — the SE never observes the broadcast. Terminal: the leaf
	* can no longer be used off-chain, and recovery is on L1.
	*/
	TreeNodeStatus[TreeNodeStatus["TREE_NODE_STATUS_WATCHTOWER_EXIT_RECOVERED"] = 15] = "TREE_NODE_STATUS_WATCHTOWER_EXIT_RECOVERED";
	/**
	* TREE_NODE_STATUS_RETURNED - A leaf whose outbound lightning send was returned. The HTLC refund
	* signed for that transfer stays valid, so the leaf is owned but not
	* spendable until the owner renews it through renew_leaf. Other transfer
	* types return to AVAILABLE: their refunds only gain a witness together
	* with the key tweak.
	*/
	TreeNodeStatus[TreeNodeStatus["TREE_NODE_STATUS_RETURNED"] = 16] = "TREE_NODE_STATUS_RETURNED";
	TreeNodeStatus[TreeNodeStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return TreeNodeStatus;
}({});
function treeNodeStatusFromJSON(object) {
	switch (object) {
		case 0:
		case "TREE_NODE_STATUS_CREATING": return TreeNodeStatus.TREE_NODE_STATUS_CREATING;
		case 1:
		case "TREE_NODE_STATUS_AVAILABLE": return TreeNodeStatus.TREE_NODE_STATUS_AVAILABLE;
		case 2:
		case "TREE_NODE_STATUS_FROZEN_BY_ISSUER": return TreeNodeStatus.TREE_NODE_STATUS_FROZEN_BY_ISSUER;
		case 3:
		case "TREE_NODE_STATUS_TRANSFER_LOCKED": return TreeNodeStatus.TREE_NODE_STATUS_TRANSFER_LOCKED;
		case 4:
		case "TREE_NODE_STATUS_SPLIT_LOCKED": return TreeNodeStatus.TREE_NODE_STATUS_SPLIT_LOCKED;
		case 5:
		case "TREE_NODE_STATUS_SPLITTED": return TreeNodeStatus.TREE_NODE_STATUS_SPLITTED;
		case 6:
		case "TREE_NODE_STATUS_AGGREGATED": return TreeNodeStatus.TREE_NODE_STATUS_AGGREGATED;
		case 7:
		case "TREE_NODE_STATUS_ON_CHAIN": return TreeNodeStatus.TREE_NODE_STATUS_ON_CHAIN;
		case 8:
		case "TREE_NODE_STATUS_AGGREGATE_LOCK": return TreeNodeStatus.TREE_NODE_STATUS_AGGREGATE_LOCK;
		case 9:
		case "TREE_NODE_STATUS_EXITED": return TreeNodeStatus.TREE_NODE_STATUS_EXITED;
		case 10:
		case "TREE_NODE_STATUS_RENEW_LOCKED": return TreeNodeStatus.TREE_NODE_STATUS_RENEW_LOCKED;
		case 11:
		case "TREE_NODE_STATUS_UNAVAILABLE": return TreeNodeStatus.TREE_NODE_STATUS_UNAVAILABLE;
		case 12:
		case "TREE_NODE_STATUS_PARENT_EXITED": return TreeNodeStatus.TREE_NODE_STATUS_PARENT_EXITED;
		case 13:
		case "TREE_NODE_STATUS_CONSOLIDATED": return TreeNodeStatus.TREE_NODE_STATUS_CONSOLIDATED;
		case 14:
		case "TREE_NODE_STATUS_WATCHTOWER_EXITED": return TreeNodeStatus.TREE_NODE_STATUS_WATCHTOWER_EXITED;
		case 15:
		case "TREE_NODE_STATUS_WATCHTOWER_EXIT_RECOVERED": return TreeNodeStatus.TREE_NODE_STATUS_WATCHTOWER_EXIT_RECOVERED;
		case 16:
		case "TREE_NODE_STATUS_RETURNED": return TreeNodeStatus.TREE_NODE_STATUS_RETURNED;
		default: return TreeNodeStatus.UNRECOGNIZED;
	}
}
function treeNodeStatusToJSON(object) {
	switch (object) {
		case TreeNodeStatus.TREE_NODE_STATUS_CREATING: return "TREE_NODE_STATUS_CREATING";
		case TreeNodeStatus.TREE_NODE_STATUS_AVAILABLE: return "TREE_NODE_STATUS_AVAILABLE";
		case TreeNodeStatus.TREE_NODE_STATUS_FROZEN_BY_ISSUER: return "TREE_NODE_STATUS_FROZEN_BY_ISSUER";
		case TreeNodeStatus.TREE_NODE_STATUS_TRANSFER_LOCKED: return "TREE_NODE_STATUS_TRANSFER_LOCKED";
		case TreeNodeStatus.TREE_NODE_STATUS_SPLIT_LOCKED: return "TREE_NODE_STATUS_SPLIT_LOCKED";
		case TreeNodeStatus.TREE_NODE_STATUS_SPLITTED: return "TREE_NODE_STATUS_SPLITTED";
		case TreeNodeStatus.TREE_NODE_STATUS_AGGREGATED: return "TREE_NODE_STATUS_AGGREGATED";
		case TreeNodeStatus.TREE_NODE_STATUS_ON_CHAIN: return "TREE_NODE_STATUS_ON_CHAIN";
		case TreeNodeStatus.TREE_NODE_STATUS_AGGREGATE_LOCK: return "TREE_NODE_STATUS_AGGREGATE_LOCK";
		case TreeNodeStatus.TREE_NODE_STATUS_EXITED: return "TREE_NODE_STATUS_EXITED";
		case TreeNodeStatus.TREE_NODE_STATUS_RENEW_LOCKED: return "TREE_NODE_STATUS_RENEW_LOCKED";
		case TreeNodeStatus.TREE_NODE_STATUS_UNAVAILABLE: return "TREE_NODE_STATUS_UNAVAILABLE";
		case TreeNodeStatus.TREE_NODE_STATUS_PARENT_EXITED: return "TREE_NODE_STATUS_PARENT_EXITED";
		case TreeNodeStatus.TREE_NODE_STATUS_CONSOLIDATED: return "TREE_NODE_STATUS_CONSOLIDATED";
		case TreeNodeStatus.TREE_NODE_STATUS_WATCHTOWER_EXITED: return "TREE_NODE_STATUS_WATCHTOWER_EXITED";
		case TreeNodeStatus.TREE_NODE_STATUS_WATCHTOWER_EXIT_RECOVERED: return "TREE_NODE_STATUS_WATCHTOWER_EXIT_RECOVERED";
		case TreeNodeStatus.TREE_NODE_STATUS_RETURNED: return "TREE_NODE_STATUS_RETURNED";
		case TreeNodeStatus.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
/**
* DelegationStatus is the server-derived lifecycle status of a delegation
* grant or one of its spenders. Output-only: ignored on create/add requests.
*/
let DelegationStatus = /* @__PURE__ */ function(DelegationStatus) {
	DelegationStatus[DelegationStatus["DELEGATION_STATUS_UNSPECIFIED"] = 0] = "DELEGATION_STATUS_UNSPECIFIED";
	DelegationStatus[DelegationStatus["DELEGATION_STATUS_ACTIVE"] = 1] = "DELEGATION_STATUS_ACTIVE";
	/** DELEGATION_STATUS_REVOKED - Tombstone after an owner-signed revoke; never deleted, never resurrected. */
	DelegationStatus[DelegationStatus["DELEGATION_STATUS_REVOKED"] = 2] = "DELEGATION_STATUS_REVOKED";
	DelegationStatus[DelegationStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return DelegationStatus;
}({});
function delegationStatusFromJSON(object) {
	switch (object) {
		case 0:
		case "DELEGATION_STATUS_UNSPECIFIED": return DelegationStatus.DELEGATION_STATUS_UNSPECIFIED;
		case 1:
		case "DELEGATION_STATUS_ACTIVE": return DelegationStatus.DELEGATION_STATUS_ACTIVE;
		case 2:
		case "DELEGATION_STATUS_REVOKED": return DelegationStatus.DELEGATION_STATUS_REVOKED;
		default: return DelegationStatus.UNRECOGNIZED;
	}
}
function delegationStatusToJSON(object) {
	switch (object) {
		case DelegationStatus.DELEGATION_STATUS_UNSPECIFIED: return "DELEGATION_STATUS_UNSPECIFIED";
		case DelegationStatus.DELEGATION_STATUS_ACTIVE: return "DELEGATION_STATUS_ACTIVE";
		case DelegationStatus.DELEGATION_STATUS_REVOKED: return "DELEGATION_STATUS_REVOKED";
		case DelegationStatus.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
let InitiatePreimageSwapRequest_Reason = /* @__PURE__ */ function(InitiatePreimageSwapRequest_Reason) {
	/** REASON_SEND - The associated lightning service is sending the payment. */
	InitiatePreimageSwapRequest_Reason[InitiatePreimageSwapRequest_Reason["REASON_SEND"] = 0] = "REASON_SEND";
	/** REASON_RECEIVE - The associated lightning service is receiving the payment. */
	InitiatePreimageSwapRequest_Reason[InitiatePreimageSwapRequest_Reason["REASON_RECEIVE"] = 1] = "REASON_RECEIVE";
	InitiatePreimageSwapRequest_Reason[InitiatePreimageSwapRequest_Reason["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return InitiatePreimageSwapRequest_Reason;
}({});
function initiatePreimageSwapRequest_ReasonFromJSON(object) {
	switch (object) {
		case 0:
		case "REASON_SEND": return InitiatePreimageSwapRequest_Reason.REASON_SEND;
		case 1:
		case "REASON_RECEIVE": return InitiatePreimageSwapRequest_Reason.REASON_RECEIVE;
		default: return InitiatePreimageSwapRequest_Reason.UNRECOGNIZED;
	}
}
function initiatePreimageSwapRequest_ReasonToJSON(object) {
	switch (object) {
		case InitiatePreimageSwapRequest_Reason.REASON_SEND: return "REASON_SEND";
		case InitiatePreimageSwapRequest_Reason.REASON_RECEIVE: return "REASON_RECEIVE";
		case InitiatePreimageSwapRequest_Reason.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
function createBaseSubscribeToEventsRequest() {
	return {
		identityPublicKey: new Uint8Array(0),
		includeAllParticipants: false
	};
}
const SubscribeToEventsRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.identityPublicKey.length !== 0) writer.uint32(82).bytes(message.identityPublicKey);
		if (message.includeAllParticipants !== false) writer.uint32(160).bool(message.includeAllParticipants);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSubscribeToEventsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 10:
					if (tag !== 82) break;
					message.identityPublicKey = reader.bytes();
					continue;
				case 20:
					if (tag !== 160) break;
					message.includeAllParticipants = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			identityPublicKey: isSet(object.identityPublicKey) ? bytesFromBase64(object.identityPublicKey) : new Uint8Array(0),
			includeAllParticipants: isSet(object.includeAllParticipants) ? globalThis.Boolean(object.includeAllParticipants) : false
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.identityPublicKey.length !== 0) obj.identityPublicKey = base64FromBytes(message.identityPublicKey);
		if (message.includeAllParticipants !== false) obj.includeAllParticipants = message.includeAllParticipants;
		return obj;
	},
	create(base) {
		return SubscribeToEventsRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSubscribeToEventsRequest();
		message.identityPublicKey = object.identityPublicKey ?? new Uint8Array(0);
		message.includeAllParticipants = object.includeAllParticipants ?? false;
		return message;
	}
};
function createBaseSubscribeToEventsResponse() {
	return { event: void 0 };
}
const SubscribeToEventsResponse = {
	encode(message, writer = new BinaryWriter()) {
		switch (message.event?.$case) {
			case "receiverTransfer":
				TransferEvent.encode(message.event.receiverTransfer, writer.uint32(10).fork()).join();
				break;
			case "deposit":
				DepositEvent.encode(message.event.deposit, writer.uint32(18).fork()).join();
				break;
			case "connected":
				ConnectedEvent.encode(message.event.connected, writer.uint32(26).fork()).join();
				break;
			case "senderTransfer":
				TransferEvent.encode(message.event.senderTransfer, writer.uint32(34).fork()).join();
				break;
			case "heartbeat":
				HeartbeatEvent.encode(message.event.heartbeat, writer.uint32(42).fork()).join();
				break;
			case "tokenTransaction":
				TokenTransactionEvent.encode(message.event.tokenTransaction, writer.uint32(50).fork()).join();
				break;
		}
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSubscribeToEventsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.event = {
						$case: "receiverTransfer",
						receiverTransfer: TransferEvent.decode(reader, reader.uint32())
					};
					continue;
				case 2:
					if (tag !== 18) break;
					message.event = {
						$case: "deposit",
						deposit: DepositEvent.decode(reader, reader.uint32())
					};
					continue;
				case 3:
					if (tag !== 26) break;
					message.event = {
						$case: "connected",
						connected: ConnectedEvent.decode(reader, reader.uint32())
					};
					continue;
				case 4:
					if (tag !== 34) break;
					message.event = {
						$case: "senderTransfer",
						senderTransfer: TransferEvent.decode(reader, reader.uint32())
					};
					continue;
				case 5:
					if (tag !== 42) break;
					message.event = {
						$case: "heartbeat",
						heartbeat: HeartbeatEvent.decode(reader, reader.uint32())
					};
					continue;
				case 6:
					if (tag !== 50) break;
					message.event = {
						$case: "tokenTransaction",
						tokenTransaction: TokenTransactionEvent.decode(reader, reader.uint32())
					};
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { event: isSet(object.transfer) ? {
			$case: "receiverTransfer",
			receiverTransfer: TransferEvent.fromJSON(object.transfer)
		} : isSet(object.deposit) ? {
			$case: "deposit",
			deposit: DepositEvent.fromJSON(object.deposit)
		} : isSet(object.connected) ? {
			$case: "connected",
			connected: ConnectedEvent.fromJSON(object.connected)
		} : isSet(object.senderTransfer) ? {
			$case: "senderTransfer",
			senderTransfer: TransferEvent.fromJSON(object.senderTransfer)
		} : isSet(object.heartbeat) ? {
			$case: "heartbeat",
			heartbeat: HeartbeatEvent.fromJSON(object.heartbeat)
		} : isSet(object.tokenTransaction) ? {
			$case: "tokenTransaction",
			tokenTransaction: TokenTransactionEvent.fromJSON(object.tokenTransaction)
		} : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.event?.$case === "receiverTransfer") obj.transfer = TransferEvent.toJSON(message.event.receiverTransfer);
		else if (message.event?.$case === "deposit") obj.deposit = DepositEvent.toJSON(message.event.deposit);
		else if (message.event?.$case === "connected") obj.connected = ConnectedEvent.toJSON(message.event.connected);
		else if (message.event?.$case === "senderTransfer") obj.senderTransfer = TransferEvent.toJSON(message.event.senderTransfer);
		else if (message.event?.$case === "heartbeat") obj.heartbeat = HeartbeatEvent.toJSON(message.event.heartbeat);
		else if (message.event?.$case === "tokenTransaction") obj.tokenTransaction = TokenTransactionEvent.toJSON(message.event.tokenTransaction);
		return obj;
	},
	create(base) {
		return SubscribeToEventsResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSubscribeToEventsResponse();
		switch (object.event?.$case) {
			case "receiverTransfer":
				if (object.event?.receiverTransfer !== void 0 && object.event?.receiverTransfer !== null) message.event = {
					$case: "receiverTransfer",
					receiverTransfer: TransferEvent.fromPartial(object.event.receiverTransfer)
				};
				break;
			case "deposit":
				if (object.event?.deposit !== void 0 && object.event?.deposit !== null) message.event = {
					$case: "deposit",
					deposit: DepositEvent.fromPartial(object.event.deposit)
				};
				break;
			case "connected":
				if (object.event?.connected !== void 0 && object.event?.connected !== null) message.event = {
					$case: "connected",
					connected: ConnectedEvent.fromPartial(object.event.connected)
				};
				break;
			case "senderTransfer":
				if (object.event?.senderTransfer !== void 0 && object.event?.senderTransfer !== null) message.event = {
					$case: "senderTransfer",
					senderTransfer: TransferEvent.fromPartial(object.event.senderTransfer)
				};
				break;
			case "heartbeat":
				if (object.event?.heartbeat !== void 0 && object.event?.heartbeat !== null) message.event = {
					$case: "heartbeat",
					heartbeat: HeartbeatEvent.fromPartial(object.event.heartbeat)
				};
				break;
			case "tokenTransaction":
				if (object.event?.tokenTransaction !== void 0 && object.event?.tokenTransaction !== null) message.event = {
					$case: "tokenTransaction",
					tokenTransaction: TokenTransactionEvent.fromPartial(object.event.tokenTransaction)
				};
				break;
		}
		return message;
	}
};
function createBaseTokenTransactionEvent() {
	return {
		tokenTransactionHash: new Uint8Array(0),
		tokenIdentifiers: [],
		sparkInvoices: []
	};
}
const TokenTransactionEvent = {
	encode(message, writer = new BinaryWriter()) {
		if (message.tokenTransactionHash.length !== 0) writer.uint32(10).bytes(message.tokenTransactionHash);
		for (const v of message.tokenIdentifiers) writer.uint32(18).bytes(v);
		for (const v of message.sparkInvoices) writer.uint32(26).string(v);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTokenTransactionEvent();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.tokenTransactionHash = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.tokenIdentifiers.push(reader.bytes());
					continue;
				case 3:
					if (tag !== 26) break;
					message.sparkInvoices.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			tokenTransactionHash: isSet(object.tokenTransactionHash) ? bytesFromBase64(object.tokenTransactionHash) : new Uint8Array(0),
			tokenIdentifiers: globalThis.Array.isArray(object?.tokenIdentifiers) ? object.tokenIdentifiers.map((e) => bytesFromBase64(e)) : [],
			sparkInvoices: globalThis.Array.isArray(object?.sparkInvoices) ? object.sparkInvoices.map((e) => globalThis.String(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.tokenTransactionHash.length !== 0) obj.tokenTransactionHash = base64FromBytes(message.tokenTransactionHash);
		if (message.tokenIdentifiers?.length) obj.tokenIdentifiers = message.tokenIdentifiers.map((e) => base64FromBytes(e));
		if (message.sparkInvoices?.length) obj.sparkInvoices = message.sparkInvoices;
		return obj;
	},
	create(base) {
		return TokenTransactionEvent.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTokenTransactionEvent();
		message.tokenTransactionHash = object.tokenTransactionHash ?? new Uint8Array(0);
		message.tokenIdentifiers = object.tokenIdentifiers?.map((e) => e) || [];
		message.sparkInvoices = object.sparkInvoices?.map((e) => e) || [];
		return message;
	}
};
function createBaseConnectedEvent() {
	return {};
}
const ConnectedEvent = {
	encode(_, writer = new BinaryWriter()) {
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseConnectedEvent();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(_) {
		return {};
	},
	toJSON(_) {
		return {};
	},
	create(base) {
		return ConnectedEvent.fromPartial(base ?? {});
	},
	fromPartial(_) {
		return createBaseConnectedEvent();
	}
};
function createBaseHeartbeatEvent() {
	return {};
}
const HeartbeatEvent = {
	encode(_, writer = new BinaryWriter()) {
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseHeartbeatEvent();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(_) {
		return {};
	},
	toJSON(_) {
		return {};
	},
	create(base) {
		return HeartbeatEvent.fromPartial(base ?? {});
	},
	fromPartial(_) {
		return createBaseHeartbeatEvent();
	}
};
function createBaseTransferEvent() {
	return {
		transfer: void 0,
		traceId: ""
	};
}
const TransferEvent = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transfer !== void 0) Transfer.encode(message.transfer, writer.uint32(82).fork()).join();
		if (message.traceId !== "") writer.uint32(90).string(message.traceId);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTransferEvent();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 10:
					if (tag !== 82) break;
					message.transfer = Transfer.decode(reader, reader.uint32());
					continue;
				case 11:
					if (tag !== 90) break;
					message.traceId = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transfer: isSet(object.transfer) ? Transfer.fromJSON(object.transfer) : void 0,
			traceId: isSet(object.traceId) ? globalThis.String(object.traceId) : ""
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transfer !== void 0) obj.transfer = Transfer.toJSON(message.transfer);
		if (message.traceId !== "") obj.traceId = message.traceId;
		return obj;
	},
	create(base) {
		return TransferEvent.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTransferEvent();
		message.transfer = object.transfer !== void 0 && object.transfer !== null ? Transfer.fromPartial(object.transfer) : void 0;
		message.traceId = object.traceId ?? "";
		return message;
	}
};
function createBaseDepositEvent() {
	return {
		deposit: void 0,
		traceId: ""
	};
}
const DepositEvent = {
	encode(message, writer = new BinaryWriter()) {
		if (message.deposit !== void 0) TreeNode.encode(message.deposit, writer.uint32(82).fork()).join();
		if (message.traceId !== "") writer.uint32(90).string(message.traceId);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseDepositEvent();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 10:
					if (tag !== 82) break;
					message.deposit = TreeNode.decode(reader, reader.uint32());
					continue;
				case 11:
					if (tag !== 90) break;
					message.traceId = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			deposit: isSet(object.deposit) ? TreeNode.fromJSON(object.deposit) : void 0,
			traceId: isSet(object.traceId) ? globalThis.String(object.traceId) : ""
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.deposit !== void 0) obj.deposit = TreeNode.toJSON(message.deposit);
		if (message.traceId !== "") obj.traceId = message.traceId;
		return obj;
	},
	create(base) {
		return DepositEvent.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseDepositEvent();
		message.deposit = object.deposit !== void 0 && object.deposit !== null ? TreeNode.fromPartial(object.deposit) : void 0;
		message.traceId = object.traceId ?? "";
		return message;
	}
};
function createBasePageRequest() {
	return {
		unsafePageSize: 0,
		pageSize: 0,
		cursor: "",
		direction: 0
	};
}
const PageRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.unsafePageSize !== 0) writer.uint32(8).int32(message.unsafePageSize);
		if (message.pageSize !== 0) writer.uint32(32).uint32(message.pageSize);
		if (message.cursor !== "") writer.uint32(18).string(message.cursor);
		if (message.direction !== 0) writer.uint32(24).int32(message.direction);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBasePageRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.unsafePageSize = reader.int32();
					continue;
				case 4:
					if (tag !== 32) break;
					message.pageSize = reader.uint32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.cursor = reader.string();
					continue;
				case 3:
					if (tag !== 24) break;
					message.direction = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			unsafePageSize: isSet(object.unsafePageSize) ? globalThis.Number(object.unsafePageSize) : 0,
			pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
			cursor: isSet(object.cursor) ? globalThis.String(object.cursor) : "",
			direction: isSet(object.direction) ? directionFromJSON(object.direction) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.unsafePageSize !== 0) obj.unsafePageSize = Math.round(message.unsafePageSize);
		if (message.pageSize !== 0) obj.pageSize = Math.round(message.pageSize);
		if (message.cursor !== "") obj.cursor = message.cursor;
		if (message.direction !== 0) obj.direction = directionToJSON(message.direction);
		return obj;
	},
	create(base) {
		return PageRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBasePageRequest();
		message.unsafePageSize = object.unsafePageSize ?? 0;
		message.pageSize = object.pageSize ?? 0;
		message.cursor = object.cursor ?? "";
		message.direction = object.direction ?? 0;
		return message;
	}
};
function createBasePageResponse() {
	return {
		hasNextPage: false,
		hasPreviousPage: false,
		nextCursor: "",
		previousCursor: ""
	};
}
const PageResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.hasNextPage !== false) writer.uint32(8).bool(message.hasNextPage);
		if (message.hasPreviousPage !== false) writer.uint32(16).bool(message.hasPreviousPage);
		if (message.nextCursor !== "") writer.uint32(26).string(message.nextCursor);
		if (message.previousCursor !== "") writer.uint32(34).string(message.previousCursor);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBasePageResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.hasNextPage = reader.bool();
					continue;
				case 2:
					if (tag !== 16) break;
					message.hasPreviousPage = reader.bool();
					continue;
				case 3:
					if (tag !== 26) break;
					message.nextCursor = reader.string();
					continue;
				case 4:
					if (tag !== 34) break;
					message.previousCursor = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			hasNextPage: isSet(object.hasNextPage) ? globalThis.Boolean(object.hasNextPage) : false,
			hasPreviousPage: isSet(object.hasPreviousPage) ? globalThis.Boolean(object.hasPreviousPage) : false,
			nextCursor: isSet(object.nextCursor) ? globalThis.String(object.nextCursor) : "",
			previousCursor: isSet(object.previousCursor) ? globalThis.String(object.previousCursor) : ""
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.hasNextPage !== false) obj.hasNextPage = message.hasNextPage;
		if (message.hasPreviousPage !== false) obj.hasPreviousPage = message.hasPreviousPage;
		if (message.nextCursor !== "") obj.nextCursor = message.nextCursor;
		if (message.previousCursor !== "") obj.previousCursor = message.previousCursor;
		return obj;
	},
	create(base) {
		return PageResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBasePageResponse();
		message.hasNextPage = object.hasNextPage ?? false;
		message.hasPreviousPage = object.hasPreviousPage ?? false;
		message.nextCursor = object.nextCursor ?? "";
		message.previousCursor = object.previousCursor ?? "";
		return message;
	}
};
function createBaseDepositAddressProof() {
	return {
		addressSignatures: {},
		proofOfPossessionSignature: new Uint8Array(0)
	};
}
const DepositAddressProof = {
	encode(message, writer = new BinaryWriter()) {
		Object.entries(message.addressSignatures).forEach(([key, value]) => {
			DepositAddressProof_AddressSignaturesEntry.encode({
				key,
				value
			}, writer.uint32(10).fork()).join();
		});
		if (message.proofOfPossessionSignature.length !== 0) writer.uint32(18).bytes(message.proofOfPossessionSignature);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseDepositAddressProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1: {
					if (tag !== 10) break;
					const entry1 = DepositAddressProof_AddressSignaturesEntry.decode(reader, reader.uint32());
					if (entry1.value !== void 0) message.addressSignatures[entry1.key] = entry1.value;
					continue;
				}
				case 2:
					if (tag !== 18) break;
					message.proofOfPossessionSignature = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			addressSignatures: isObject(object.addressSignatures) ? Object.entries(object.addressSignatures).reduce((acc, [key, value]) => {
				acc[key] = bytesFromBase64(value);
				return acc;
			}, {}) : {},
			proofOfPossessionSignature: isSet(object.proofOfPossessionSignature) ? bytesFromBase64(object.proofOfPossessionSignature) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.addressSignatures) {
			const entries = Object.entries(message.addressSignatures);
			if (entries.length > 0) {
				obj.addressSignatures = {};
				entries.forEach(([k, v]) => {
					obj.addressSignatures[k] = base64FromBytes(v);
				});
			}
		}
		if (message.proofOfPossessionSignature.length !== 0) obj.proofOfPossessionSignature = base64FromBytes(message.proofOfPossessionSignature);
		return obj;
	},
	create(base) {
		return DepositAddressProof.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseDepositAddressProof();
		message.addressSignatures = Object.entries(object.addressSignatures ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = value;
			return acc;
		}, {});
		message.proofOfPossessionSignature = object.proofOfPossessionSignature ?? new Uint8Array(0);
		return message;
	}
};
function createBaseDepositAddressProof_AddressSignaturesEntry() {
	return {
		key: "",
		value: new Uint8Array(0)
	};
}
const DepositAddressProof_AddressSignaturesEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value.length !== 0) writer.uint32(18).bytes(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseDepositAddressProof_AddressSignaturesEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value.length !== 0) obj.value = base64FromBytes(message.value);
		return obj;
	},
	create(base) {
		return DepositAddressProof_AddressSignaturesEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseDepositAddressProof_AddressSignaturesEntry();
		message.key = object.key ?? "";
		message.value = object.value ?? new Uint8Array(0);
		return message;
	}
};
function createBaseGenerateDepositAddressRequest() {
	return {
		signingPublicKey: new Uint8Array(0),
		identityPublicKey: new Uint8Array(0),
		network: 0,
		leafId: void 0,
		isStatic: void 0,
		hashVariant: 0
	};
}
const GenerateDepositAddressRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.signingPublicKey.length !== 0) writer.uint32(10).bytes(message.signingPublicKey);
		if (message.identityPublicKey.length !== 0) writer.uint32(18).bytes(message.identityPublicKey);
		if (message.network !== 0) writer.uint32(24).int32(message.network);
		if (message.leafId !== void 0) writer.uint32(34).string(message.leafId);
		if (message.isStatic !== void 0) writer.uint32(40).bool(message.isStatic);
		if (message.hashVariant !== 0) writer.uint32(48).int32(message.hashVariant);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseGenerateDepositAddressRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.signingPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.identityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 24) break;
					message.network = reader.int32();
					continue;
				case 4:
					if (tag !== 34) break;
					message.leafId = reader.string();
					continue;
				case 5:
					if (tag !== 40) break;
					message.isStatic = reader.bool();
					continue;
				case 6:
					if (tag !== 48) break;
					message.hashVariant = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			signingPublicKey: isSet(object.signingPublicKey) ? bytesFromBase64(object.signingPublicKey) : new Uint8Array(0),
			identityPublicKey: isSet(object.identityPublicKey) ? bytesFromBase64(object.identityPublicKey) : new Uint8Array(0),
			network: isSet(object.network) ? networkFromJSON(object.network) : 0,
			leafId: isSet(object.leafId) ? globalThis.String(object.leafId) : void 0,
			isStatic: isSet(object.isStatic) ? globalThis.Boolean(object.isStatic) : void 0,
			hashVariant: isSet(object.hashVariant) ? hashVariantFromJSON(object.hashVariant) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.signingPublicKey.length !== 0) obj.signingPublicKey = base64FromBytes(message.signingPublicKey);
		if (message.identityPublicKey.length !== 0) obj.identityPublicKey = base64FromBytes(message.identityPublicKey);
		if (message.network !== 0) obj.network = networkToJSON(message.network);
		if (message.leafId !== void 0) obj.leafId = message.leafId;
		if (message.isStatic !== void 0) obj.isStatic = message.isStatic;
		if (message.hashVariant !== 0) obj.hashVariant = hashVariantToJSON(message.hashVariant);
		return obj;
	},
	create(base) {
		return GenerateDepositAddressRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseGenerateDepositAddressRequest();
		message.signingPublicKey = object.signingPublicKey ?? new Uint8Array(0);
		message.identityPublicKey = object.identityPublicKey ?? new Uint8Array(0);
		message.network = object.network ?? 0;
		message.leafId = object.leafId ?? void 0;
		message.isStatic = object.isStatic ?? void 0;
		message.hashVariant = object.hashVariant ?? 0;
		return message;
	}
};
function createBaseAddress() {
	return {
		address: "",
		verifyingKey: new Uint8Array(0),
		depositAddressProof: void 0,
		isStatic: false
	};
}
const Address = {
	encode(message, writer = new BinaryWriter()) {
		if (message.address !== "") writer.uint32(10).string(message.address);
		if (message.verifyingKey.length !== 0) writer.uint32(18).bytes(message.verifyingKey);
		if (message.depositAddressProof !== void 0) DepositAddressProof.encode(message.depositAddressProof, writer.uint32(26).fork()).join();
		if (message.isStatic !== false) writer.uint32(40).bool(message.isStatic);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseAddress();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.address = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.verifyingKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.depositAddressProof = DepositAddressProof.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 40) break;
					message.isStatic = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			verifyingKey: isSet(object.verifyingKey) ? bytesFromBase64(object.verifyingKey) : new Uint8Array(0),
			depositAddressProof: isSet(object.depositAddressProof) ? DepositAddressProof.fromJSON(object.depositAddressProof) : void 0,
			isStatic: isSet(object.isStatic) ? globalThis.Boolean(object.isStatic) : false
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.address !== "") obj.address = message.address;
		if (message.verifyingKey.length !== 0) obj.verifyingKey = base64FromBytes(message.verifyingKey);
		if (message.depositAddressProof !== void 0) obj.depositAddressProof = DepositAddressProof.toJSON(message.depositAddressProof);
		if (message.isStatic !== false) obj.isStatic = message.isStatic;
		return obj;
	},
	create(base) {
		return Address.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseAddress();
		message.address = object.address ?? "";
		message.verifyingKey = object.verifyingKey ?? new Uint8Array(0);
		message.depositAddressProof = object.depositAddressProof !== void 0 && object.depositAddressProof !== null ? DepositAddressProof.fromPartial(object.depositAddressProof) : void 0;
		message.isStatic = object.isStatic ?? false;
		return message;
	}
};
function createBaseGenerateDepositAddressResponse() {
	return { depositAddress: void 0 };
}
const GenerateDepositAddressResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.depositAddress !== void 0) Address.encode(message.depositAddress, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseGenerateDepositAddressResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.depositAddress = Address.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { depositAddress: isSet(object.depositAddress) ? Address.fromJSON(object.depositAddress) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.depositAddress !== void 0) obj.depositAddress = Address.toJSON(message.depositAddress);
		return obj;
	},
	create(base) {
		return GenerateDepositAddressResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseGenerateDepositAddressResponse();
		message.depositAddress = object.depositAddress !== void 0 && object.depositAddress !== null ? Address.fromPartial(object.depositAddress) : void 0;
		return message;
	}
};
function createBaseGenerateStaticDepositAddressRequest() {
	return {
		signingPublicKey: new Uint8Array(0),
		identityPublicKey: new Uint8Array(0),
		network: 0,
		hashVariant: 0
	};
}
const GenerateStaticDepositAddressRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.signingPublicKey.length !== 0) writer.uint32(10).bytes(message.signingPublicKey);
		if (message.identityPublicKey.length !== 0) writer.uint32(18).bytes(message.identityPublicKey);
		if (message.network !== 0) writer.uint32(24).int32(message.network);
		if (message.hashVariant !== 0) writer.uint32(32).int32(message.hashVariant);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseGenerateStaticDepositAddressRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.signingPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.identityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 24) break;
					message.network = reader.int32();
					continue;
				case 4:
					if (tag !== 32) break;
					message.hashVariant = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			signingPublicKey: isSet(object.signingPublicKey) ? bytesFromBase64(object.signingPublicKey) : new Uint8Array(0),
			identityPublicKey: isSet(object.identityPublicKey) ? bytesFromBase64(object.identityPublicKey) : new Uint8Array(0),
			network: isSet(object.network) ? networkFromJSON(object.network) : 0,
			hashVariant: isSet(object.hashVariant) ? hashVariantFromJSON(object.hashVariant) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.signingPublicKey.length !== 0) obj.signingPublicKey = base64FromBytes(message.signingPublicKey);
		if (message.identityPublicKey.length !== 0) obj.identityPublicKey = base64FromBytes(message.identityPublicKey);
		if (message.network !== 0) obj.network = networkToJSON(message.network);
		if (message.hashVariant !== 0) obj.hashVariant = hashVariantToJSON(message.hashVariant);
		return obj;
	},
	create(base) {
		return GenerateStaticDepositAddressRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseGenerateStaticDepositAddressRequest();
		message.signingPublicKey = object.signingPublicKey ?? new Uint8Array(0);
		message.identityPublicKey = object.identityPublicKey ?? new Uint8Array(0);
		message.network = object.network ?? 0;
		message.hashVariant = object.hashVariant ?? 0;
		return message;
	}
};
function createBaseGenerateStaticDepositAddressResponse() {
	return { depositAddress: void 0 };
}
const GenerateStaticDepositAddressResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.depositAddress !== void 0) Address.encode(message.depositAddress, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseGenerateStaticDepositAddressResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.depositAddress = Address.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { depositAddress: isSet(object.depositAddress) ? Address.fromJSON(object.depositAddress) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.depositAddress !== void 0) obj.depositAddress = Address.toJSON(message.depositAddress);
		return obj;
	},
	create(base) {
		return GenerateStaticDepositAddressResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseGenerateStaticDepositAddressResponse();
		message.depositAddress = object.depositAddress !== void 0 && object.depositAddress !== null ? Address.fromPartial(object.depositAddress) : void 0;
		return message;
	}
};
function createBaseRotateStaticDepositAddressRequest() {
	return {
		signingPublicKey: new Uint8Array(0),
		network: 0,
		hashVariant: 0
	};
}
const RotateStaticDepositAddressRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.signingPublicKey.length !== 0) writer.uint32(10).bytes(message.signingPublicKey);
		if (message.network !== 0) writer.uint32(16).int32(message.network);
		if (message.hashVariant !== 0) writer.uint32(24).int32(message.hashVariant);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRotateStaticDepositAddressRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.signingPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) break;
					message.network = reader.int32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.hashVariant = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			signingPublicKey: isSet(object.signingPublicKey) ? bytesFromBase64(object.signingPublicKey) : new Uint8Array(0),
			network: isSet(object.network) ? networkFromJSON(object.network) : 0,
			hashVariant: isSet(object.hashVariant) ? hashVariantFromJSON(object.hashVariant) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.signingPublicKey.length !== 0) obj.signingPublicKey = base64FromBytes(message.signingPublicKey);
		if (message.network !== 0) obj.network = networkToJSON(message.network);
		if (message.hashVariant !== 0) obj.hashVariant = hashVariantToJSON(message.hashVariant);
		return obj;
	},
	create(base) {
		return RotateStaticDepositAddressRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRotateStaticDepositAddressRequest();
		message.signingPublicKey = object.signingPublicKey ?? new Uint8Array(0);
		message.network = object.network ?? 0;
		message.hashVariant = object.hashVariant ?? 0;
		return message;
	}
};
function createBaseRotateStaticDepositAddressResponse() {
	return {
		newDepositAddress: void 0,
		archivedDepositAddress: void 0
	};
}
const RotateStaticDepositAddressResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.newDepositAddress !== void 0) Address.encode(message.newDepositAddress, writer.uint32(10).fork()).join();
		if (message.archivedDepositAddress !== void 0) Address.encode(message.archivedDepositAddress, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRotateStaticDepositAddressResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.newDepositAddress = Address.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.archivedDepositAddress = Address.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			newDepositAddress: isSet(object.newDepositAddress) ? Address.fromJSON(object.newDepositAddress) : void 0,
			archivedDepositAddress: isSet(object.archivedDepositAddress) ? Address.fromJSON(object.archivedDepositAddress) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.newDepositAddress !== void 0) obj.newDepositAddress = Address.toJSON(message.newDepositAddress);
		if (message.archivedDepositAddress !== void 0) obj.archivedDepositAddress = Address.toJSON(message.archivedDepositAddress);
		return obj;
	},
	create(base) {
		return RotateStaticDepositAddressResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRotateStaticDepositAddressResponse();
		message.newDepositAddress = object.newDepositAddress !== void 0 && object.newDepositAddress !== null ? Address.fromPartial(object.newDepositAddress) : void 0;
		message.archivedDepositAddress = object.archivedDepositAddress !== void 0 && object.archivedDepositAddress !== null ? Address.fromPartial(object.archivedDepositAddress) : void 0;
		return message;
	}
};
function createBaseUTXO() {
	return {
		rawTx: new Uint8Array(0),
		vout: 0,
		network: 0,
		txid: new Uint8Array(0)
	};
}
const UTXO = {
	encode(message, writer = new BinaryWriter()) {
		if (message.rawTx.length !== 0) writer.uint32(10).bytes(message.rawTx);
		if (message.vout !== 0) writer.uint32(16).uint32(message.vout);
		if (message.network !== 0) writer.uint32(24).int32(message.network);
		if (message.txid.length !== 0) writer.uint32(34).bytes(message.txid);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseUTXO();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.rawTx = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) break;
					message.vout = reader.uint32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.network = reader.int32();
					continue;
				case 4:
					if (tag !== 34) break;
					message.txid = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			rawTx: isSet(object.rawTx) ? bytesFromBase64(object.rawTx) : new Uint8Array(0),
			vout: isSet(object.vout) ? globalThis.Number(object.vout) : 0,
			network: isSet(object.network) ? networkFromJSON(object.network) : 0,
			txid: isSet(object.txid) ? bytesFromBase64(object.txid) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.rawTx.length !== 0) obj.rawTx = base64FromBytes(message.rawTx);
		if (message.vout !== 0) obj.vout = Math.round(message.vout);
		if (message.network !== 0) obj.network = networkToJSON(message.network);
		if (message.txid.length !== 0) obj.txid = base64FromBytes(message.txid);
		return obj;
	},
	create(base) {
		return UTXO.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseUTXO();
		message.rawTx = object.rawTx ?? new Uint8Array(0);
		message.vout = object.vout ?? 0;
		message.network = object.network ?? 0;
		message.txid = object.txid ?? new Uint8Array(0);
		return message;
	}
};
function createBaseAddressedUtxo() {
	return {
		address: "",
		utxo: void 0,
		isConfirmed: false,
		amountSats: 0
	};
}
const AddressedUtxo = {
	encode(message, writer = new BinaryWriter()) {
		if (message.address !== "") writer.uint32(10).string(message.address);
		if (message.utxo !== void 0) UTXO.encode(message.utxo, writer.uint32(18).fork()).join();
		if (message.isConfirmed !== false) writer.uint32(24).bool(message.isConfirmed);
		if (message.amountSats !== 0) writer.uint32(32).uint64(message.amountSats);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseAddressedUtxo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.address = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.utxo = UTXO.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) break;
					message.isConfirmed = reader.bool();
					continue;
				case 4:
					if (tag !== 32) break;
					message.amountSats = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			utxo: isSet(object.utxo) ? UTXO.fromJSON(object.utxo) : void 0,
			isConfirmed: isSet(object.isConfirmed) ? globalThis.Boolean(object.isConfirmed) : false,
			amountSats: isSet(object.amountSats) ? globalThis.Number(object.amountSats) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.address !== "") obj.address = message.address;
		if (message.utxo !== void 0) obj.utxo = UTXO.toJSON(message.utxo);
		if (message.isConfirmed !== false) obj.isConfirmed = message.isConfirmed;
		if (message.amountSats !== 0) obj.amountSats = Math.round(message.amountSats);
		return obj;
	},
	create(base) {
		return AddressedUtxo.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseAddressedUtxo();
		message.address = object.address ?? "";
		message.utxo = object.utxo !== void 0 && object.utxo !== null ? UTXO.fromPartial(object.utxo) : void 0;
		message.isConfirmed = object.isConfirmed ?? false;
		message.amountSats = object.amountSats ?? 0;
		return message;
	}
};
function createBaseNodeOutput() {
	return {
		nodeId: "",
		vout: 0
	};
}
const NodeOutput = {
	encode(message, writer = new BinaryWriter()) {
		if (message.nodeId !== "") writer.uint32(10).string(message.nodeId);
		if (message.vout !== 0) writer.uint32(16).uint32(message.vout);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseNodeOutput();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.nodeId = reader.string();
					continue;
				case 2:
					if (tag !== 16) break;
					message.vout = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			nodeId: isSet(object.nodeId) ? globalThis.String(object.nodeId) : "",
			vout: isSet(object.vout) ? globalThis.Number(object.vout) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.nodeId !== "") obj.nodeId = message.nodeId;
		if (message.vout !== 0) obj.vout = Math.round(message.vout);
		return obj;
	},
	create(base) {
		return NodeOutput.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseNodeOutput();
		message.nodeId = object.nodeId ?? "";
		message.vout = object.vout ?? 0;
		return message;
	}
};
function createBaseSigningJob() {
	return {
		signingPublicKey: new Uint8Array(0),
		rawTx: new Uint8Array(0),
		signingNonceCommitment: void 0
	};
}
const SigningJob = {
	encode(message, writer = new BinaryWriter()) {
		if (message.signingPublicKey.length !== 0) writer.uint32(10).bytes(message.signingPublicKey);
		if (message.rawTx.length !== 0) writer.uint32(18).bytes(message.rawTx);
		if (message.signingNonceCommitment !== void 0) SigningCommitment.encode(message.signingNonceCommitment, writer.uint32(26).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSigningJob();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.signingPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.rawTx = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.signingNonceCommitment = SigningCommitment.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			signingPublicKey: isSet(object.signingPublicKey) ? bytesFromBase64(object.signingPublicKey) : new Uint8Array(0),
			rawTx: isSet(object.rawTx) ? bytesFromBase64(object.rawTx) : new Uint8Array(0),
			signingNonceCommitment: isSet(object.signingNonceCommitment) ? SigningCommitment.fromJSON(object.signingNonceCommitment) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.signingPublicKey.length !== 0) obj.signingPublicKey = base64FromBytes(message.signingPublicKey);
		if (message.rawTx.length !== 0) obj.rawTx = base64FromBytes(message.rawTx);
		if (message.signingNonceCommitment !== void 0) obj.signingNonceCommitment = SigningCommitment.toJSON(message.signingNonceCommitment);
		return obj;
	},
	create(base) {
		return SigningJob.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSigningJob();
		message.signingPublicKey = object.signingPublicKey ?? new Uint8Array(0);
		message.rawTx = object.rawTx ?? new Uint8Array(0);
		message.signingNonceCommitment = object.signingNonceCommitment !== void 0 && object.signingNonceCommitment !== null ? SigningCommitment.fromPartial(object.signingNonceCommitment) : void 0;
		return message;
	}
};
function createBaseSigningKeyshare() {
	return {
		ownerIdentifiers: [],
		threshold: 0,
		publicKey: new Uint8Array(0),
		publicShares: {},
		updatedTime: void 0
	};
}
const SigningKeyshare = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.ownerIdentifiers) writer.uint32(10).string(v);
		if (message.threshold !== 0) writer.uint32(16).uint32(message.threshold);
		if (message.publicKey.length !== 0) writer.uint32(26).bytes(message.publicKey);
		Object.entries(message.publicShares).forEach(([key, value]) => {
			SigningKeyshare_PublicSharesEntry.encode({
				key,
				value
			}, writer.uint32(34).fork()).join();
		});
		if (message.updatedTime !== void 0) Timestamp.encode(toTimestamp(message.updatedTime), writer.uint32(42).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSigningKeyshare();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.ownerIdentifiers.push(reader.string());
					continue;
				case 2:
					if (tag !== 16) break;
					message.threshold = reader.uint32();
					continue;
				case 3:
					if (tag !== 26) break;
					message.publicKey = reader.bytes();
					continue;
				case 4: {
					if (tag !== 34) break;
					const entry4 = SigningKeyshare_PublicSharesEntry.decode(reader, reader.uint32());
					if (entry4.value !== void 0) message.publicShares[entry4.key] = entry4.value;
					continue;
				}
				case 5:
					if (tag !== 42) break;
					message.updatedTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			ownerIdentifiers: globalThis.Array.isArray(object?.ownerIdentifiers) ? object.ownerIdentifiers.map((e) => globalThis.String(e)) : [],
			threshold: isSet(object.threshold) ? globalThis.Number(object.threshold) : 0,
			publicKey: isSet(object.publicKey) ? bytesFromBase64(object.publicKey) : new Uint8Array(0),
			publicShares: isObject(object.publicShares) ? Object.entries(object.publicShares).reduce((acc, [key, value]) => {
				acc[key] = bytesFromBase64(value);
				return acc;
			}, {}) : {},
			updatedTime: isSet(object.updatedTime) ? fromJsonTimestamp(object.updatedTime) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.ownerIdentifiers?.length) obj.ownerIdentifiers = message.ownerIdentifiers;
		if (message.threshold !== 0) obj.threshold = Math.round(message.threshold);
		if (message.publicKey.length !== 0) obj.publicKey = base64FromBytes(message.publicKey);
		if (message.publicShares) {
			const entries = Object.entries(message.publicShares);
			if (entries.length > 0) {
				obj.publicShares = {};
				entries.forEach(([k, v]) => {
					obj.publicShares[k] = base64FromBytes(v);
				});
			}
		}
		if (message.updatedTime !== void 0) obj.updatedTime = message.updatedTime.toISOString();
		return obj;
	},
	create(base) {
		return SigningKeyshare.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSigningKeyshare();
		message.ownerIdentifiers = object.ownerIdentifiers?.map((e) => e) || [];
		message.threshold = object.threshold ?? 0;
		message.publicKey = object.publicKey ?? new Uint8Array(0);
		message.publicShares = Object.entries(object.publicShares ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = value;
			return acc;
		}, {});
		message.updatedTime = object.updatedTime ?? void 0;
		return message;
	}
};
function createBaseSigningKeyshare_PublicSharesEntry() {
	return {
		key: "",
		value: new Uint8Array(0)
	};
}
const SigningKeyshare_PublicSharesEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value.length !== 0) writer.uint32(18).bytes(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSigningKeyshare_PublicSharesEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value.length !== 0) obj.value = base64FromBytes(message.value);
		return obj;
	},
	create(base) {
		return SigningKeyshare_PublicSharesEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSigningKeyshare_PublicSharesEntry();
		message.key = object.key ?? "";
		message.value = object.value ?? new Uint8Array(0);
		return message;
	}
};
function createBaseSigningResult() {
	return {
		publicKeys: {},
		signingNonceCommitments: {},
		signatureShares: {},
		signingKeyshare: void 0
	};
}
const SigningResult = {
	encode(message, writer = new BinaryWriter()) {
		Object.entries(message.publicKeys).forEach(([key, value]) => {
			SigningResult_PublicKeysEntry.encode({
				key,
				value
			}, writer.uint32(10).fork()).join();
		});
		Object.entries(message.signingNonceCommitments).forEach(([key, value]) => {
			SigningResult_SigningNonceCommitmentsEntry.encode({
				key,
				value
			}, writer.uint32(18).fork()).join();
		});
		Object.entries(message.signatureShares).forEach(([key, value]) => {
			SigningResult_SignatureSharesEntry.encode({
				key,
				value
			}, writer.uint32(26).fork()).join();
		});
		if (message.signingKeyshare !== void 0) SigningKeyshare.encode(message.signingKeyshare, writer.uint32(34).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSigningResult();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1: {
					if (tag !== 10) break;
					const entry1 = SigningResult_PublicKeysEntry.decode(reader, reader.uint32());
					if (entry1.value !== void 0) message.publicKeys[entry1.key] = entry1.value;
					continue;
				}
				case 2: {
					if (tag !== 18) break;
					const entry2 = SigningResult_SigningNonceCommitmentsEntry.decode(reader, reader.uint32());
					if (entry2.value !== void 0) message.signingNonceCommitments[entry2.key] = entry2.value;
					continue;
				}
				case 3: {
					if (tag !== 26) break;
					const entry3 = SigningResult_SignatureSharesEntry.decode(reader, reader.uint32());
					if (entry3.value !== void 0) message.signatureShares[entry3.key] = entry3.value;
					continue;
				}
				case 4:
					if (tag !== 34) break;
					message.signingKeyshare = SigningKeyshare.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			publicKeys: isObject(object.publicKeys) ? Object.entries(object.publicKeys).reduce((acc, [key, value]) => {
				acc[key] = bytesFromBase64(value);
				return acc;
			}, {}) : {},
			signingNonceCommitments: isObject(object.signingNonceCommitments) ? Object.entries(object.signingNonceCommitments).reduce((acc, [key, value]) => {
				acc[key] = SigningCommitment.fromJSON(value);
				return acc;
			}, {}) : {},
			signatureShares: isObject(object.signatureShares) ? Object.entries(object.signatureShares).reduce((acc, [key, value]) => {
				acc[key] = bytesFromBase64(value);
				return acc;
			}, {}) : {},
			signingKeyshare: isSet(object.signingKeyshare) ? SigningKeyshare.fromJSON(object.signingKeyshare) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.publicKeys) {
			const entries = Object.entries(message.publicKeys);
			if (entries.length > 0) {
				obj.publicKeys = {};
				entries.forEach(([k, v]) => {
					obj.publicKeys[k] = base64FromBytes(v);
				});
			}
		}
		if (message.signingNonceCommitments) {
			const entries = Object.entries(message.signingNonceCommitments);
			if (entries.length > 0) {
				obj.signingNonceCommitments = {};
				entries.forEach(([k, v]) => {
					obj.signingNonceCommitments[k] = SigningCommitment.toJSON(v);
				});
			}
		}
		if (message.signatureShares) {
			const entries = Object.entries(message.signatureShares);
			if (entries.length > 0) {
				obj.signatureShares = {};
				entries.forEach(([k, v]) => {
					obj.signatureShares[k] = base64FromBytes(v);
				});
			}
		}
		if (message.signingKeyshare !== void 0) obj.signingKeyshare = SigningKeyshare.toJSON(message.signingKeyshare);
		return obj;
	},
	create(base) {
		return SigningResult.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSigningResult();
		message.publicKeys = Object.entries(object.publicKeys ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = value;
			return acc;
		}, {});
		message.signingNonceCommitments = Object.entries(object.signingNonceCommitments ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = SigningCommitment.fromPartial(value);
			return acc;
		}, {});
		message.signatureShares = Object.entries(object.signatureShares ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = value;
			return acc;
		}, {});
		message.signingKeyshare = object.signingKeyshare !== void 0 && object.signingKeyshare !== null ? SigningKeyshare.fromPartial(object.signingKeyshare) : void 0;
		return message;
	}
};
function createBaseSigningResult_PublicKeysEntry() {
	return {
		key: "",
		value: new Uint8Array(0)
	};
}
const SigningResult_PublicKeysEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value.length !== 0) writer.uint32(18).bytes(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSigningResult_PublicKeysEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value.length !== 0) obj.value = base64FromBytes(message.value);
		return obj;
	},
	create(base) {
		return SigningResult_PublicKeysEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSigningResult_PublicKeysEntry();
		message.key = object.key ?? "";
		message.value = object.value ?? new Uint8Array(0);
		return message;
	}
};
function createBaseSigningResult_SigningNonceCommitmentsEntry() {
	return {
		key: "",
		value: void 0
	};
}
const SigningResult_SigningNonceCommitmentsEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value !== void 0) SigningCommitment.encode(message.value, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSigningResult_SigningNonceCommitmentsEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = SigningCommitment.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? SigningCommitment.fromJSON(object.value) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value !== void 0) obj.value = SigningCommitment.toJSON(message.value);
		return obj;
	},
	create(base) {
		return SigningResult_SigningNonceCommitmentsEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSigningResult_SigningNonceCommitmentsEntry();
		message.key = object.key ?? "";
		message.value = object.value !== void 0 && object.value !== null ? SigningCommitment.fromPartial(object.value) : void 0;
		return message;
	}
};
function createBaseSigningResult_SignatureSharesEntry() {
	return {
		key: "",
		value: new Uint8Array(0)
	};
}
const SigningResult_SignatureSharesEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value.length !== 0) writer.uint32(18).bytes(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSigningResult_SignatureSharesEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value.length !== 0) obj.value = base64FromBytes(message.value);
		return obj;
	},
	create(base) {
		return SigningResult_SignatureSharesEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSigningResult_SignatureSharesEntry();
		message.key = object.key ?? "";
		message.value = object.value ?? new Uint8Array(0);
		return message;
	}
};
function createBaseRenewLeafRequest() {
	return {
		leafId: "",
		signingJobs: void 0,
		delegationPath: void 0
	};
}
const RenewLeafRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.leafId !== "") writer.uint32(10).string(message.leafId);
		switch (message.signingJobs?.$case) {
			case "renewNodeTimelockSigningJob":
				RenewNodeTimelockSigningJob.encode(message.signingJobs.renewNodeTimelockSigningJob, writer.uint32(18).fork()).join();
				break;
			case "renewRefundTimelockSigningJob":
				RenewRefundTimelockSigningJob.encode(message.signingJobs.renewRefundTimelockSigningJob, writer.uint32(26).fork()).join();
				break;
			case "renewNodeZeroTimelockSigningJob":
				RenewNodeZeroTimelockSigningJob.encode(message.signingJobs.renewNodeZeroTimelockSigningJob, writer.uint32(34).fork()).join();
				break;
			case "decrementRefundTimelockSigningJob":
				DecrementRefundTimelockSigningJob.encode(message.signingJobs.decrementRefundTimelockSigningJob, writer.uint32(50).fork()).join();
				break;
		}
		if (message.delegationPath !== void 0) DelegationPathSelector.encode(message.delegationPath, writer.uint32(42).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRenewLeafRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leafId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.signingJobs = {
						$case: "renewNodeTimelockSigningJob",
						renewNodeTimelockSigningJob: RenewNodeTimelockSigningJob.decode(reader, reader.uint32())
					};
					continue;
				case 3:
					if (tag !== 26) break;
					message.signingJobs = {
						$case: "renewRefundTimelockSigningJob",
						renewRefundTimelockSigningJob: RenewRefundTimelockSigningJob.decode(reader, reader.uint32())
					};
					continue;
				case 4:
					if (tag !== 34) break;
					message.signingJobs = {
						$case: "renewNodeZeroTimelockSigningJob",
						renewNodeZeroTimelockSigningJob: RenewNodeZeroTimelockSigningJob.decode(reader, reader.uint32())
					};
					continue;
				case 6:
					if (tag !== 50) break;
					message.signingJobs = {
						$case: "decrementRefundTimelockSigningJob",
						decrementRefundTimelockSigningJob: DecrementRefundTimelockSigningJob.decode(reader, reader.uint32())
					};
					continue;
				case 5:
					if (tag !== 42) break;
					message.delegationPath = DelegationPathSelector.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leafId: isSet(object.leafId) ? globalThis.String(object.leafId) : "",
			signingJobs: isSet(object.renewNodeTimelockSigningJob) ? {
				$case: "renewNodeTimelockSigningJob",
				renewNodeTimelockSigningJob: RenewNodeTimelockSigningJob.fromJSON(object.renewNodeTimelockSigningJob)
			} : isSet(object.renewRefundTimelockSigningJob) ? {
				$case: "renewRefundTimelockSigningJob",
				renewRefundTimelockSigningJob: RenewRefundTimelockSigningJob.fromJSON(object.renewRefundTimelockSigningJob)
			} : isSet(object.renewNodeZeroTimelockSigningJob) ? {
				$case: "renewNodeZeroTimelockSigningJob",
				renewNodeZeroTimelockSigningJob: RenewNodeZeroTimelockSigningJob.fromJSON(object.renewNodeZeroTimelockSigningJob)
			} : isSet(object.decrementRefundTimelockSigningJob) ? {
				$case: "decrementRefundTimelockSigningJob",
				decrementRefundTimelockSigningJob: DecrementRefundTimelockSigningJob.fromJSON(object.decrementRefundTimelockSigningJob)
			} : void 0,
			delegationPath: isSet(object.delegationPath) ? DelegationPathSelector.fromJSON(object.delegationPath) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leafId !== "") obj.leafId = message.leafId;
		if (message.signingJobs?.$case === "renewNodeTimelockSigningJob") obj.renewNodeTimelockSigningJob = RenewNodeTimelockSigningJob.toJSON(message.signingJobs.renewNodeTimelockSigningJob);
		else if (message.signingJobs?.$case === "renewRefundTimelockSigningJob") obj.renewRefundTimelockSigningJob = RenewRefundTimelockSigningJob.toJSON(message.signingJobs.renewRefundTimelockSigningJob);
		else if (message.signingJobs?.$case === "renewNodeZeroTimelockSigningJob") obj.renewNodeZeroTimelockSigningJob = RenewNodeZeroTimelockSigningJob.toJSON(message.signingJobs.renewNodeZeroTimelockSigningJob);
		else if (message.signingJobs?.$case === "decrementRefundTimelockSigningJob") obj.decrementRefundTimelockSigningJob = DecrementRefundTimelockSigningJob.toJSON(message.signingJobs.decrementRefundTimelockSigningJob);
		if (message.delegationPath !== void 0) obj.delegationPath = DelegationPathSelector.toJSON(message.delegationPath);
		return obj;
	},
	create(base) {
		return RenewLeafRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRenewLeafRequest();
		message.leafId = object.leafId ?? "";
		switch (object.signingJobs?.$case) {
			case "renewNodeTimelockSigningJob":
				if (object.signingJobs?.renewNodeTimelockSigningJob !== void 0 && object.signingJobs?.renewNodeTimelockSigningJob !== null) message.signingJobs = {
					$case: "renewNodeTimelockSigningJob",
					renewNodeTimelockSigningJob: RenewNodeTimelockSigningJob.fromPartial(object.signingJobs.renewNodeTimelockSigningJob)
				};
				break;
			case "renewRefundTimelockSigningJob":
				if (object.signingJobs?.renewRefundTimelockSigningJob !== void 0 && object.signingJobs?.renewRefundTimelockSigningJob !== null) message.signingJobs = {
					$case: "renewRefundTimelockSigningJob",
					renewRefundTimelockSigningJob: RenewRefundTimelockSigningJob.fromPartial(object.signingJobs.renewRefundTimelockSigningJob)
				};
				break;
			case "renewNodeZeroTimelockSigningJob":
				if (object.signingJobs?.renewNodeZeroTimelockSigningJob !== void 0 && object.signingJobs?.renewNodeZeroTimelockSigningJob !== null) message.signingJobs = {
					$case: "renewNodeZeroTimelockSigningJob",
					renewNodeZeroTimelockSigningJob: RenewNodeZeroTimelockSigningJob.fromPartial(object.signingJobs.renewNodeZeroTimelockSigningJob)
				};
				break;
			case "decrementRefundTimelockSigningJob":
				if (object.signingJobs?.decrementRefundTimelockSigningJob !== void 0 && object.signingJobs?.decrementRefundTimelockSigningJob !== null) message.signingJobs = {
					$case: "decrementRefundTimelockSigningJob",
					decrementRefundTimelockSigningJob: DecrementRefundTimelockSigningJob.fromPartial(object.signingJobs.decrementRefundTimelockSigningJob)
				};
				break;
		}
		message.delegationPath = object.delegationPath !== void 0 && object.delegationPath !== null ? DelegationPathSelector.fromPartial(object.delegationPath) : void 0;
		return message;
	}
};
function createBaseDelegationPathSelector() {
	return { grantId: "" };
}
const DelegationPathSelector = {
	encode(message, writer = new BinaryWriter()) {
		if (message.grantId !== "") writer.uint32(10).string(message.grantId);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseDelegationPathSelector();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.grantId = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { grantId: isSet(object.grantId) ? globalThis.String(object.grantId) : "" };
	},
	toJSON(message) {
		const obj = {};
		if (message.grantId !== "") obj.grantId = message.grantId;
		return obj;
	},
	create(base) {
		return DelegationPathSelector.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseDelegationPathSelector();
		message.grantId = object.grantId ?? "";
		return message;
	}
};
function createBaseRenewNodeTimelockSigningJob() {
	return {
		splitNodeTxSigningJob: void 0,
		splitNodeDirectTxSigningJob: void 0,
		nodeTxSigningJob: void 0,
		refundTxSigningJob: void 0,
		directNodeTxSigningJob: void 0,
		directRefundTxSigningJob: void 0,
		directFromCpfpRefundTxSigningJob: void 0,
		directNodeLadderSigningJobs: [],
		directNodeLadderRungTableVersion: 0
	};
}
const RenewNodeTimelockSigningJob = {
	encode(message, writer = new BinaryWriter()) {
		if (message.splitNodeTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.splitNodeTxSigningJob, writer.uint32(10).fork()).join();
		if (message.splitNodeDirectTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.splitNodeDirectTxSigningJob, writer.uint32(18).fork()).join();
		if (message.nodeTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.nodeTxSigningJob, writer.uint32(26).fork()).join();
		if (message.refundTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.refundTxSigningJob, writer.uint32(34).fork()).join();
		if (message.directNodeTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.directNodeTxSigningJob, writer.uint32(42).fork()).join();
		if (message.directRefundTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.directRefundTxSigningJob, writer.uint32(50).fork()).join();
		if (message.directFromCpfpRefundTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.directFromCpfpRefundTxSigningJob, writer.uint32(58).fork()).join();
		for (const v of message.directNodeLadderSigningJobs) UserSignedTxSigningJob.encode(v, writer.uint32(66).fork()).join();
		if (message.directNodeLadderRungTableVersion !== 0) writer.uint32(72).uint32(message.directNodeLadderRungTableVersion);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRenewNodeTimelockSigningJob();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.splitNodeTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.splitNodeDirectTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.nodeTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) break;
					message.refundTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) break;
					message.directNodeTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) break;
					message.directRefundTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) break;
					message.directFromCpfpRefundTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 8:
					if (tag !== 66) break;
					message.directNodeLadderSigningJobs.push(UserSignedTxSigningJob.decode(reader, reader.uint32()));
					continue;
				case 9:
					if (tag !== 72) break;
					message.directNodeLadderRungTableVersion = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			splitNodeTxSigningJob: isSet(object.splitNodeTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.splitNodeTxSigningJob) : void 0,
			splitNodeDirectTxSigningJob: isSet(object.splitNodeDirectTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.splitNodeDirectTxSigningJob) : void 0,
			nodeTxSigningJob: isSet(object.nodeTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.nodeTxSigningJob) : void 0,
			refundTxSigningJob: isSet(object.refundTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.refundTxSigningJob) : void 0,
			directNodeTxSigningJob: isSet(object.directNodeTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.directNodeTxSigningJob) : void 0,
			directRefundTxSigningJob: isSet(object.directRefundTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.directRefundTxSigningJob) : void 0,
			directFromCpfpRefundTxSigningJob: isSet(object.directFromCpfpRefundTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.directFromCpfpRefundTxSigningJob) : void 0,
			directNodeLadderSigningJobs: globalThis.Array.isArray(object?.directNodeLadderSigningJobs) ? object.directNodeLadderSigningJobs.map((e) => UserSignedTxSigningJob.fromJSON(e)) : [],
			directNodeLadderRungTableVersion: isSet(object.directNodeLadderRungTableVersion) ? globalThis.Number(object.directNodeLadderRungTableVersion) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.splitNodeTxSigningJob !== void 0) obj.splitNodeTxSigningJob = UserSignedTxSigningJob.toJSON(message.splitNodeTxSigningJob);
		if (message.splitNodeDirectTxSigningJob !== void 0) obj.splitNodeDirectTxSigningJob = UserSignedTxSigningJob.toJSON(message.splitNodeDirectTxSigningJob);
		if (message.nodeTxSigningJob !== void 0) obj.nodeTxSigningJob = UserSignedTxSigningJob.toJSON(message.nodeTxSigningJob);
		if (message.refundTxSigningJob !== void 0) obj.refundTxSigningJob = UserSignedTxSigningJob.toJSON(message.refundTxSigningJob);
		if (message.directNodeTxSigningJob !== void 0) obj.directNodeTxSigningJob = UserSignedTxSigningJob.toJSON(message.directNodeTxSigningJob);
		if (message.directRefundTxSigningJob !== void 0) obj.directRefundTxSigningJob = UserSignedTxSigningJob.toJSON(message.directRefundTxSigningJob);
		if (message.directFromCpfpRefundTxSigningJob !== void 0) obj.directFromCpfpRefundTxSigningJob = UserSignedTxSigningJob.toJSON(message.directFromCpfpRefundTxSigningJob);
		if (message.directNodeLadderSigningJobs?.length) obj.directNodeLadderSigningJobs = message.directNodeLadderSigningJobs.map((e) => UserSignedTxSigningJob.toJSON(e));
		if (message.directNodeLadderRungTableVersion !== 0) obj.directNodeLadderRungTableVersion = Math.round(message.directNodeLadderRungTableVersion);
		return obj;
	},
	create(base) {
		return RenewNodeTimelockSigningJob.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRenewNodeTimelockSigningJob();
		message.splitNodeTxSigningJob = object.splitNodeTxSigningJob !== void 0 && object.splitNodeTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.splitNodeTxSigningJob) : void 0;
		message.splitNodeDirectTxSigningJob = object.splitNodeDirectTxSigningJob !== void 0 && object.splitNodeDirectTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.splitNodeDirectTxSigningJob) : void 0;
		message.nodeTxSigningJob = object.nodeTxSigningJob !== void 0 && object.nodeTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.nodeTxSigningJob) : void 0;
		message.refundTxSigningJob = object.refundTxSigningJob !== void 0 && object.refundTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.refundTxSigningJob) : void 0;
		message.directNodeTxSigningJob = object.directNodeTxSigningJob !== void 0 && object.directNodeTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.directNodeTxSigningJob) : void 0;
		message.directRefundTxSigningJob = object.directRefundTxSigningJob !== void 0 && object.directRefundTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.directRefundTxSigningJob) : void 0;
		message.directFromCpfpRefundTxSigningJob = object.directFromCpfpRefundTxSigningJob !== void 0 && object.directFromCpfpRefundTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.directFromCpfpRefundTxSigningJob) : void 0;
		message.directNodeLadderSigningJobs = object.directNodeLadderSigningJobs?.map((e) => UserSignedTxSigningJob.fromPartial(e)) || [];
		message.directNodeLadderRungTableVersion = object.directNodeLadderRungTableVersion ?? 0;
		return message;
	}
};
function createBaseRenewRefundTimelockSigningJob() {
	return {
		nodeTxSigningJob: void 0,
		refundTxSigningJob: void 0,
		directNodeTxSigningJob: void 0,
		directRefundTxSigningJob: void 0,
		directFromCpfpRefundTxSigningJob: void 0,
		directNodeLadderSigningJobs: [],
		directNodeLadderRungTableVersion: 0
	};
}
const RenewRefundTimelockSigningJob = {
	encode(message, writer = new BinaryWriter()) {
		if (message.nodeTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.nodeTxSigningJob, writer.uint32(10).fork()).join();
		if (message.refundTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.refundTxSigningJob, writer.uint32(18).fork()).join();
		if (message.directNodeTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.directNodeTxSigningJob, writer.uint32(26).fork()).join();
		if (message.directRefundTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.directRefundTxSigningJob, writer.uint32(34).fork()).join();
		if (message.directFromCpfpRefundTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.directFromCpfpRefundTxSigningJob, writer.uint32(42).fork()).join();
		for (const v of message.directNodeLadderSigningJobs) UserSignedTxSigningJob.encode(v, writer.uint32(50).fork()).join();
		if (message.directNodeLadderRungTableVersion !== 0) writer.uint32(56).uint32(message.directNodeLadderRungTableVersion);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRenewRefundTimelockSigningJob();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.nodeTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.refundTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.directNodeTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) break;
					message.directRefundTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) break;
					message.directFromCpfpRefundTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) break;
					message.directNodeLadderSigningJobs.push(UserSignedTxSigningJob.decode(reader, reader.uint32()));
					continue;
				case 7:
					if (tag !== 56) break;
					message.directNodeLadderRungTableVersion = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			nodeTxSigningJob: isSet(object.nodeTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.nodeTxSigningJob) : void 0,
			refundTxSigningJob: isSet(object.refundTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.refundTxSigningJob) : void 0,
			directNodeTxSigningJob: isSet(object.directNodeTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.directNodeTxSigningJob) : void 0,
			directRefundTxSigningJob: isSet(object.directRefundTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.directRefundTxSigningJob) : void 0,
			directFromCpfpRefundTxSigningJob: isSet(object.directFromCpfpRefundTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.directFromCpfpRefundTxSigningJob) : void 0,
			directNodeLadderSigningJobs: globalThis.Array.isArray(object?.directNodeLadderSigningJobs) ? object.directNodeLadderSigningJobs.map((e) => UserSignedTxSigningJob.fromJSON(e)) : [],
			directNodeLadderRungTableVersion: isSet(object.directNodeLadderRungTableVersion) ? globalThis.Number(object.directNodeLadderRungTableVersion) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.nodeTxSigningJob !== void 0) obj.nodeTxSigningJob = UserSignedTxSigningJob.toJSON(message.nodeTxSigningJob);
		if (message.refundTxSigningJob !== void 0) obj.refundTxSigningJob = UserSignedTxSigningJob.toJSON(message.refundTxSigningJob);
		if (message.directNodeTxSigningJob !== void 0) obj.directNodeTxSigningJob = UserSignedTxSigningJob.toJSON(message.directNodeTxSigningJob);
		if (message.directRefundTxSigningJob !== void 0) obj.directRefundTxSigningJob = UserSignedTxSigningJob.toJSON(message.directRefundTxSigningJob);
		if (message.directFromCpfpRefundTxSigningJob !== void 0) obj.directFromCpfpRefundTxSigningJob = UserSignedTxSigningJob.toJSON(message.directFromCpfpRefundTxSigningJob);
		if (message.directNodeLadderSigningJobs?.length) obj.directNodeLadderSigningJobs = message.directNodeLadderSigningJobs.map((e) => UserSignedTxSigningJob.toJSON(e));
		if (message.directNodeLadderRungTableVersion !== 0) obj.directNodeLadderRungTableVersion = Math.round(message.directNodeLadderRungTableVersion);
		return obj;
	},
	create(base) {
		return RenewRefundTimelockSigningJob.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRenewRefundTimelockSigningJob();
		message.nodeTxSigningJob = object.nodeTxSigningJob !== void 0 && object.nodeTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.nodeTxSigningJob) : void 0;
		message.refundTxSigningJob = object.refundTxSigningJob !== void 0 && object.refundTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.refundTxSigningJob) : void 0;
		message.directNodeTxSigningJob = object.directNodeTxSigningJob !== void 0 && object.directNodeTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.directNodeTxSigningJob) : void 0;
		message.directRefundTxSigningJob = object.directRefundTxSigningJob !== void 0 && object.directRefundTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.directRefundTxSigningJob) : void 0;
		message.directFromCpfpRefundTxSigningJob = object.directFromCpfpRefundTxSigningJob !== void 0 && object.directFromCpfpRefundTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.directFromCpfpRefundTxSigningJob) : void 0;
		message.directNodeLadderSigningJobs = object.directNodeLadderSigningJobs?.map((e) => UserSignedTxSigningJob.fromPartial(e)) || [];
		message.directNodeLadderRungTableVersion = object.directNodeLadderRungTableVersion ?? 0;
		return message;
	}
};
function createBaseDecrementRefundTimelockSigningJob() {
	return {
		refundTxSigningJob: void 0,
		directRefundTxSigningJob: void 0,
		directFromCpfpRefundTxSigningJob: void 0
	};
}
const DecrementRefundTimelockSigningJob = {
	encode(message, writer = new BinaryWriter()) {
		if (message.refundTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.refundTxSigningJob, writer.uint32(10).fork()).join();
		if (message.directRefundTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.directRefundTxSigningJob, writer.uint32(18).fork()).join();
		if (message.directFromCpfpRefundTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.directFromCpfpRefundTxSigningJob, writer.uint32(26).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseDecrementRefundTimelockSigningJob();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.refundTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.directRefundTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.directFromCpfpRefundTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			refundTxSigningJob: isSet(object.refundTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.refundTxSigningJob) : void 0,
			directRefundTxSigningJob: isSet(object.directRefundTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.directRefundTxSigningJob) : void 0,
			directFromCpfpRefundTxSigningJob: isSet(object.directFromCpfpRefundTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.directFromCpfpRefundTxSigningJob) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.refundTxSigningJob !== void 0) obj.refundTxSigningJob = UserSignedTxSigningJob.toJSON(message.refundTxSigningJob);
		if (message.directRefundTxSigningJob !== void 0) obj.directRefundTxSigningJob = UserSignedTxSigningJob.toJSON(message.directRefundTxSigningJob);
		if (message.directFromCpfpRefundTxSigningJob !== void 0) obj.directFromCpfpRefundTxSigningJob = UserSignedTxSigningJob.toJSON(message.directFromCpfpRefundTxSigningJob);
		return obj;
	},
	create(base) {
		return DecrementRefundTimelockSigningJob.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseDecrementRefundTimelockSigningJob();
		message.refundTxSigningJob = object.refundTxSigningJob !== void 0 && object.refundTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.refundTxSigningJob) : void 0;
		message.directRefundTxSigningJob = object.directRefundTxSigningJob !== void 0 && object.directRefundTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.directRefundTxSigningJob) : void 0;
		message.directFromCpfpRefundTxSigningJob = object.directFromCpfpRefundTxSigningJob !== void 0 && object.directFromCpfpRefundTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.directFromCpfpRefundTxSigningJob) : void 0;
		return message;
	}
};
function createBaseRenewNodeZeroTimelockSigningJob() {
	return {
		nodeTxSigningJob: void 0,
		refundTxSigningJob: void 0,
		directNodeTxSigningJob: void 0,
		directFromCpfpRefundTxSigningJob: void 0,
		directNodeLadderSigningJobs: [],
		directNodeLadderRungTableVersion: 0
	};
}
const RenewNodeZeroTimelockSigningJob = {
	encode(message, writer = new BinaryWriter()) {
		if (message.nodeTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.nodeTxSigningJob, writer.uint32(10).fork()).join();
		if (message.refundTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.refundTxSigningJob, writer.uint32(18).fork()).join();
		if (message.directNodeTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.directNodeTxSigningJob, writer.uint32(26).fork()).join();
		if (message.directFromCpfpRefundTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.directFromCpfpRefundTxSigningJob, writer.uint32(42).fork()).join();
		for (const v of message.directNodeLadderSigningJobs) UserSignedTxSigningJob.encode(v, writer.uint32(50).fork()).join();
		if (message.directNodeLadderRungTableVersion !== 0) writer.uint32(56).uint32(message.directNodeLadderRungTableVersion);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRenewNodeZeroTimelockSigningJob();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.nodeTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.refundTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.directNodeTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) break;
					message.directFromCpfpRefundTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) break;
					message.directNodeLadderSigningJobs.push(UserSignedTxSigningJob.decode(reader, reader.uint32()));
					continue;
				case 7:
					if (tag !== 56) break;
					message.directNodeLadderRungTableVersion = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			nodeTxSigningJob: isSet(object.nodeTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.nodeTxSigningJob) : void 0,
			refundTxSigningJob: isSet(object.refundTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.refundTxSigningJob) : void 0,
			directNodeTxSigningJob: isSet(object.directNodeTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.directNodeTxSigningJob) : void 0,
			directFromCpfpRefundTxSigningJob: isSet(object.directFromCpfpRefundTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.directFromCpfpRefundTxSigningJob) : void 0,
			directNodeLadderSigningJobs: globalThis.Array.isArray(object?.directNodeLadderSigningJobs) ? object.directNodeLadderSigningJobs.map((e) => UserSignedTxSigningJob.fromJSON(e)) : [],
			directNodeLadderRungTableVersion: isSet(object.directNodeLadderRungTableVersion) ? globalThis.Number(object.directNodeLadderRungTableVersion) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.nodeTxSigningJob !== void 0) obj.nodeTxSigningJob = UserSignedTxSigningJob.toJSON(message.nodeTxSigningJob);
		if (message.refundTxSigningJob !== void 0) obj.refundTxSigningJob = UserSignedTxSigningJob.toJSON(message.refundTxSigningJob);
		if (message.directNodeTxSigningJob !== void 0) obj.directNodeTxSigningJob = UserSignedTxSigningJob.toJSON(message.directNodeTxSigningJob);
		if (message.directFromCpfpRefundTxSigningJob !== void 0) obj.directFromCpfpRefundTxSigningJob = UserSignedTxSigningJob.toJSON(message.directFromCpfpRefundTxSigningJob);
		if (message.directNodeLadderSigningJobs?.length) obj.directNodeLadderSigningJobs = message.directNodeLadderSigningJobs.map((e) => UserSignedTxSigningJob.toJSON(e));
		if (message.directNodeLadderRungTableVersion !== 0) obj.directNodeLadderRungTableVersion = Math.round(message.directNodeLadderRungTableVersion);
		return obj;
	},
	create(base) {
		return RenewNodeZeroTimelockSigningJob.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRenewNodeZeroTimelockSigningJob();
		message.nodeTxSigningJob = object.nodeTxSigningJob !== void 0 && object.nodeTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.nodeTxSigningJob) : void 0;
		message.refundTxSigningJob = object.refundTxSigningJob !== void 0 && object.refundTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.refundTxSigningJob) : void 0;
		message.directNodeTxSigningJob = object.directNodeTxSigningJob !== void 0 && object.directNodeTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.directNodeTxSigningJob) : void 0;
		message.directFromCpfpRefundTxSigningJob = object.directFromCpfpRefundTxSigningJob !== void 0 && object.directFromCpfpRefundTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.directFromCpfpRefundTxSigningJob) : void 0;
		message.directNodeLadderSigningJobs = object.directNodeLadderSigningJobs?.map((e) => UserSignedTxSigningJob.fromPartial(e)) || [];
		message.directNodeLadderRungTableVersion = object.directNodeLadderRungTableVersion ?? 0;
		return message;
	}
};
function createBaseRenewLeafResponse() {
	return { renewResult: void 0 };
}
const RenewLeafResponse = {
	encode(message, writer = new BinaryWriter()) {
		switch (message.renewResult?.$case) {
			case "renewNodeTimelockResult":
				RenewNodeTimelockResult.encode(message.renewResult.renewNodeTimelockResult, writer.uint32(10).fork()).join();
				break;
			case "renewRefundTimelockResult":
				RenewRefundTimelockResult.encode(message.renewResult.renewRefundTimelockResult, writer.uint32(18).fork()).join();
				break;
			case "renewNodeZeroTimelockResult":
				RenewNodeZeroTimelockResult.encode(message.renewResult.renewNodeZeroTimelockResult, writer.uint32(26).fork()).join();
				break;
			case "decrementRefundTimelockResult":
				DecrementRefundTimelockResult.encode(message.renewResult.decrementRefundTimelockResult, writer.uint32(34).fork()).join();
				break;
		}
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRenewLeafResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.renewResult = {
						$case: "renewNodeTimelockResult",
						renewNodeTimelockResult: RenewNodeTimelockResult.decode(reader, reader.uint32())
					};
					continue;
				case 2:
					if (tag !== 18) break;
					message.renewResult = {
						$case: "renewRefundTimelockResult",
						renewRefundTimelockResult: RenewRefundTimelockResult.decode(reader, reader.uint32())
					};
					continue;
				case 3:
					if (tag !== 26) break;
					message.renewResult = {
						$case: "renewNodeZeroTimelockResult",
						renewNodeZeroTimelockResult: RenewNodeZeroTimelockResult.decode(reader, reader.uint32())
					};
					continue;
				case 4:
					if (tag !== 34) break;
					message.renewResult = {
						$case: "decrementRefundTimelockResult",
						decrementRefundTimelockResult: DecrementRefundTimelockResult.decode(reader, reader.uint32())
					};
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { renewResult: isSet(object.renewNodeTimelockResult) ? {
			$case: "renewNodeTimelockResult",
			renewNodeTimelockResult: RenewNodeTimelockResult.fromJSON(object.renewNodeTimelockResult)
		} : isSet(object.renewRefundTimelockResult) ? {
			$case: "renewRefundTimelockResult",
			renewRefundTimelockResult: RenewRefundTimelockResult.fromJSON(object.renewRefundTimelockResult)
		} : isSet(object.renewNodeZeroTimelockResult) ? {
			$case: "renewNodeZeroTimelockResult",
			renewNodeZeroTimelockResult: RenewNodeZeroTimelockResult.fromJSON(object.renewNodeZeroTimelockResult)
		} : isSet(object.decrementRefundTimelockResult) ? {
			$case: "decrementRefundTimelockResult",
			decrementRefundTimelockResult: DecrementRefundTimelockResult.fromJSON(object.decrementRefundTimelockResult)
		} : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.renewResult?.$case === "renewNodeTimelockResult") obj.renewNodeTimelockResult = RenewNodeTimelockResult.toJSON(message.renewResult.renewNodeTimelockResult);
		else if (message.renewResult?.$case === "renewRefundTimelockResult") obj.renewRefundTimelockResult = RenewRefundTimelockResult.toJSON(message.renewResult.renewRefundTimelockResult);
		else if (message.renewResult?.$case === "renewNodeZeroTimelockResult") obj.renewNodeZeroTimelockResult = RenewNodeZeroTimelockResult.toJSON(message.renewResult.renewNodeZeroTimelockResult);
		else if (message.renewResult?.$case === "decrementRefundTimelockResult") obj.decrementRefundTimelockResult = DecrementRefundTimelockResult.toJSON(message.renewResult.decrementRefundTimelockResult);
		return obj;
	},
	create(base) {
		return RenewLeafResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRenewLeafResponse();
		switch (object.renewResult?.$case) {
			case "renewNodeTimelockResult":
				if (object.renewResult?.renewNodeTimelockResult !== void 0 && object.renewResult?.renewNodeTimelockResult !== null) message.renewResult = {
					$case: "renewNodeTimelockResult",
					renewNodeTimelockResult: RenewNodeTimelockResult.fromPartial(object.renewResult.renewNodeTimelockResult)
				};
				break;
			case "renewRefundTimelockResult":
				if (object.renewResult?.renewRefundTimelockResult !== void 0 && object.renewResult?.renewRefundTimelockResult !== null) message.renewResult = {
					$case: "renewRefundTimelockResult",
					renewRefundTimelockResult: RenewRefundTimelockResult.fromPartial(object.renewResult.renewRefundTimelockResult)
				};
				break;
			case "renewNodeZeroTimelockResult":
				if (object.renewResult?.renewNodeZeroTimelockResult !== void 0 && object.renewResult?.renewNodeZeroTimelockResult !== null) message.renewResult = {
					$case: "renewNodeZeroTimelockResult",
					renewNodeZeroTimelockResult: RenewNodeZeroTimelockResult.fromPartial(object.renewResult.renewNodeZeroTimelockResult)
				};
				break;
			case "decrementRefundTimelockResult":
				if (object.renewResult?.decrementRefundTimelockResult !== void 0 && object.renewResult?.decrementRefundTimelockResult !== null) message.renewResult = {
					$case: "decrementRefundTimelockResult",
					decrementRefundTimelockResult: DecrementRefundTimelockResult.fromPartial(object.renewResult.decrementRefundTimelockResult)
				};
				break;
		}
		return message;
	}
};
function createBaseRenewNodeTimelockResult() {
	return {
		splitNode: void 0,
		node: void 0
	};
}
const RenewNodeTimelockResult = {
	encode(message, writer = new BinaryWriter()) {
		if (message.splitNode !== void 0) TreeNode.encode(message.splitNode, writer.uint32(10).fork()).join();
		if (message.node !== void 0) TreeNode.encode(message.node, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRenewNodeTimelockResult();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.splitNode = TreeNode.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.node = TreeNode.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			splitNode: isSet(object.splitNode) ? TreeNode.fromJSON(object.splitNode) : void 0,
			node: isSet(object.node) ? TreeNode.fromJSON(object.node) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.splitNode !== void 0) obj.splitNode = TreeNode.toJSON(message.splitNode);
		if (message.node !== void 0) obj.node = TreeNode.toJSON(message.node);
		return obj;
	},
	create(base) {
		return RenewNodeTimelockResult.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRenewNodeTimelockResult();
		message.splitNode = object.splitNode !== void 0 && object.splitNode !== null ? TreeNode.fromPartial(object.splitNode) : void 0;
		message.node = object.node !== void 0 && object.node !== null ? TreeNode.fromPartial(object.node) : void 0;
		return message;
	}
};
function createBaseRenewRefundTimelockResult() {
	return { node: void 0 };
}
const RenewRefundTimelockResult = {
	encode(message, writer = new BinaryWriter()) {
		if (message.node !== void 0) TreeNode.encode(message.node, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRenewRefundTimelockResult();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.node = TreeNode.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { node: isSet(object.node) ? TreeNode.fromJSON(object.node) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.node !== void 0) obj.node = TreeNode.toJSON(message.node);
		return obj;
	},
	create(base) {
		return RenewRefundTimelockResult.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRenewRefundTimelockResult();
		message.node = object.node !== void 0 && object.node !== null ? TreeNode.fromPartial(object.node) : void 0;
		return message;
	}
};
function createBaseRenewNodeZeroTimelockResult() {
	return {
		splitNode: void 0,
		node: void 0
	};
}
const RenewNodeZeroTimelockResult = {
	encode(message, writer = new BinaryWriter()) {
		if (message.splitNode !== void 0) TreeNode.encode(message.splitNode, writer.uint32(10).fork()).join();
		if (message.node !== void 0) TreeNode.encode(message.node, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRenewNodeZeroTimelockResult();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.splitNode = TreeNode.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.node = TreeNode.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			splitNode: isSet(object.splitNode) ? TreeNode.fromJSON(object.splitNode) : void 0,
			node: isSet(object.node) ? TreeNode.fromJSON(object.node) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.splitNode !== void 0) obj.splitNode = TreeNode.toJSON(message.splitNode);
		if (message.node !== void 0) obj.node = TreeNode.toJSON(message.node);
		return obj;
	},
	create(base) {
		return RenewNodeZeroTimelockResult.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRenewNodeZeroTimelockResult();
		message.splitNode = object.splitNode !== void 0 && object.splitNode !== null ? TreeNode.fromPartial(object.splitNode) : void 0;
		message.node = object.node !== void 0 && object.node !== null ? TreeNode.fromPartial(object.node) : void 0;
		return message;
	}
};
function createBaseDecrementRefundTimelockResult() {
	return { node: void 0 };
}
const DecrementRefundTimelockResult = {
	encode(message, writer = new BinaryWriter()) {
		if (message.node !== void 0) TreeNode.encode(message.node, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseDecrementRefundTimelockResult();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.node = TreeNode.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { node: isSet(object.node) ? TreeNode.fromJSON(object.node) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.node !== void 0) obj.node = TreeNode.toJSON(message.node);
		return obj;
	},
	create(base) {
		return DecrementRefundTimelockResult.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseDecrementRefundTimelockResult();
		message.node = object.node !== void 0 && object.node !== null ? TreeNode.fromPartial(object.node) : void 0;
		return message;
	}
};
function createBaseNodeSignatureShares() {
	return {
		nodeId: "",
		nodeTxSigningResult: void 0,
		refundTxSigningResult: void 0,
		verifyingKey: new Uint8Array(0),
		directNodeTxSigningResult: void 0,
		directRefundTxSigningResult: void 0,
		directFromCpfpRefundTxSigningResult: void 0
	};
}
const NodeSignatureShares = {
	encode(message, writer = new BinaryWriter()) {
		if (message.nodeId !== "") writer.uint32(10).string(message.nodeId);
		if (message.nodeTxSigningResult !== void 0) SigningResult.encode(message.nodeTxSigningResult, writer.uint32(18).fork()).join();
		if (message.refundTxSigningResult !== void 0) SigningResult.encode(message.refundTxSigningResult, writer.uint32(26).fork()).join();
		if (message.verifyingKey.length !== 0) writer.uint32(34).bytes(message.verifyingKey);
		if (message.directNodeTxSigningResult !== void 0) SigningResult.encode(message.directNodeTxSigningResult, writer.uint32(42).fork()).join();
		if (message.directRefundTxSigningResult !== void 0) SigningResult.encode(message.directRefundTxSigningResult, writer.uint32(50).fork()).join();
		if (message.directFromCpfpRefundTxSigningResult !== void 0) SigningResult.encode(message.directFromCpfpRefundTxSigningResult, writer.uint32(58).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseNodeSignatureShares();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.nodeId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.nodeTxSigningResult = SigningResult.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.refundTxSigningResult = SigningResult.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) break;
					message.verifyingKey = reader.bytes();
					continue;
				case 5:
					if (tag !== 42) break;
					message.directNodeTxSigningResult = SigningResult.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) break;
					message.directRefundTxSigningResult = SigningResult.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) break;
					message.directFromCpfpRefundTxSigningResult = SigningResult.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			nodeId: isSet(object.nodeId) ? globalThis.String(object.nodeId) : "",
			nodeTxSigningResult: isSet(object.nodeTxSigningResult) ? SigningResult.fromJSON(object.nodeTxSigningResult) : void 0,
			refundTxSigningResult: isSet(object.refundTxSigningResult) ? SigningResult.fromJSON(object.refundTxSigningResult) : void 0,
			verifyingKey: isSet(object.verifyingKey) ? bytesFromBase64(object.verifyingKey) : new Uint8Array(0),
			directNodeTxSigningResult: isSet(object.directNodeTxSigningResult) ? SigningResult.fromJSON(object.directNodeTxSigningResult) : void 0,
			directRefundTxSigningResult: isSet(object.directRefundTxSigningResult) ? SigningResult.fromJSON(object.directRefundTxSigningResult) : void 0,
			directFromCpfpRefundTxSigningResult: isSet(object.directFromCpfpRefundTxSigningResult) ? SigningResult.fromJSON(object.directFromCpfpRefundTxSigningResult) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.nodeId !== "") obj.nodeId = message.nodeId;
		if (message.nodeTxSigningResult !== void 0) obj.nodeTxSigningResult = SigningResult.toJSON(message.nodeTxSigningResult);
		if (message.refundTxSigningResult !== void 0) obj.refundTxSigningResult = SigningResult.toJSON(message.refundTxSigningResult);
		if (message.verifyingKey.length !== 0) obj.verifyingKey = base64FromBytes(message.verifyingKey);
		if (message.directNodeTxSigningResult !== void 0) obj.directNodeTxSigningResult = SigningResult.toJSON(message.directNodeTxSigningResult);
		if (message.directRefundTxSigningResult !== void 0) obj.directRefundTxSigningResult = SigningResult.toJSON(message.directRefundTxSigningResult);
		if (message.directFromCpfpRefundTxSigningResult !== void 0) obj.directFromCpfpRefundTxSigningResult = SigningResult.toJSON(message.directFromCpfpRefundTxSigningResult);
		return obj;
	},
	create(base) {
		return NodeSignatureShares.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseNodeSignatureShares();
		message.nodeId = object.nodeId ?? "";
		message.nodeTxSigningResult = object.nodeTxSigningResult !== void 0 && object.nodeTxSigningResult !== null ? SigningResult.fromPartial(object.nodeTxSigningResult) : void 0;
		message.refundTxSigningResult = object.refundTxSigningResult !== void 0 && object.refundTxSigningResult !== null ? SigningResult.fromPartial(object.refundTxSigningResult) : void 0;
		message.verifyingKey = object.verifyingKey ?? new Uint8Array(0);
		message.directNodeTxSigningResult = object.directNodeTxSigningResult !== void 0 && object.directNodeTxSigningResult !== null ? SigningResult.fromPartial(object.directNodeTxSigningResult) : void 0;
		message.directRefundTxSigningResult = object.directRefundTxSigningResult !== void 0 && object.directRefundTxSigningResult !== null ? SigningResult.fromPartial(object.directRefundTxSigningResult) : void 0;
		message.directFromCpfpRefundTxSigningResult = object.directFromCpfpRefundTxSigningResult !== void 0 && object.directFromCpfpRefundTxSigningResult !== null ? SigningResult.fromPartial(object.directFromCpfpRefundTxSigningResult) : void 0;
		return message;
	}
};
function createBaseNodeSignatures() {
	return {
		nodeId: "",
		nodeTxSignature: new Uint8Array(0),
		refundTxSignature: new Uint8Array(0),
		directNodeTxSignature: new Uint8Array(0),
		directRefundTxSignature: new Uint8Array(0),
		directFromCpfpRefundTxSignature: new Uint8Array(0)
	};
}
const NodeSignatures = {
	encode(message, writer = new BinaryWriter()) {
		if (message.nodeId !== "") writer.uint32(10).string(message.nodeId);
		if (message.nodeTxSignature.length !== 0) writer.uint32(18).bytes(message.nodeTxSignature);
		if (message.refundTxSignature.length !== 0) writer.uint32(26).bytes(message.refundTxSignature);
		if (message.directNodeTxSignature.length !== 0) writer.uint32(34).bytes(message.directNodeTxSignature);
		if (message.directRefundTxSignature.length !== 0) writer.uint32(42).bytes(message.directRefundTxSignature);
		if (message.directFromCpfpRefundTxSignature.length !== 0) writer.uint32(50).bytes(message.directFromCpfpRefundTxSignature);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseNodeSignatures();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.nodeId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.nodeTxSignature = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.refundTxSignature = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) break;
					message.directNodeTxSignature = reader.bytes();
					continue;
				case 5:
					if (tag !== 42) break;
					message.directRefundTxSignature = reader.bytes();
					continue;
				case 6:
					if (tag !== 50) break;
					message.directFromCpfpRefundTxSignature = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			nodeId: isSet(object.nodeId) ? globalThis.String(object.nodeId) : "",
			nodeTxSignature: isSet(object.nodeTxSignature) ? bytesFromBase64(object.nodeTxSignature) : new Uint8Array(0),
			refundTxSignature: isSet(object.refundTxSignature) ? bytesFromBase64(object.refundTxSignature) : new Uint8Array(0),
			directNodeTxSignature: isSet(object.directNodeTxSignature) ? bytesFromBase64(object.directNodeTxSignature) : new Uint8Array(0),
			directRefundTxSignature: isSet(object.directRefundTxSignature) ? bytesFromBase64(object.directRefundTxSignature) : new Uint8Array(0),
			directFromCpfpRefundTxSignature: isSet(object.directFromCpfpRefundTxSignature) ? bytesFromBase64(object.directFromCpfpRefundTxSignature) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.nodeId !== "") obj.nodeId = message.nodeId;
		if (message.nodeTxSignature.length !== 0) obj.nodeTxSignature = base64FromBytes(message.nodeTxSignature);
		if (message.refundTxSignature.length !== 0) obj.refundTxSignature = base64FromBytes(message.refundTxSignature);
		if (message.directNodeTxSignature.length !== 0) obj.directNodeTxSignature = base64FromBytes(message.directNodeTxSignature);
		if (message.directRefundTxSignature.length !== 0) obj.directRefundTxSignature = base64FromBytes(message.directRefundTxSignature);
		if (message.directFromCpfpRefundTxSignature.length !== 0) obj.directFromCpfpRefundTxSignature = base64FromBytes(message.directFromCpfpRefundTxSignature);
		return obj;
	},
	create(base) {
		return NodeSignatures.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseNodeSignatures();
		message.nodeId = object.nodeId ?? "";
		message.nodeTxSignature = object.nodeTxSignature ?? new Uint8Array(0);
		message.refundTxSignature = object.refundTxSignature ?? new Uint8Array(0);
		message.directNodeTxSignature = object.directNodeTxSignature ?? new Uint8Array(0);
		message.directRefundTxSignature = object.directRefundTxSignature ?? new Uint8Array(0);
		message.directFromCpfpRefundTxSignature = object.directFromCpfpRefundTxSignature ?? new Uint8Array(0);
		return message;
	}
};
function createBaseStartTreeCreationRequest() {
	return {
		identityPublicKey: new Uint8Array(0),
		onChainUtxo: void 0,
		rootTxSigningJob: void 0,
		refundTxSigningJob: void 0,
		directRootTxSigningJob: void 0,
		directRefundTxSigningJob: void 0,
		directFromCpfpRefundTxSigningJob: void 0,
		refundLadder: void 0
	};
}
const StartTreeCreationRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.identityPublicKey.length !== 0) writer.uint32(10).bytes(message.identityPublicKey);
		if (message.onChainUtxo !== void 0) UTXO.encode(message.onChainUtxo, writer.uint32(18).fork()).join();
		if (message.rootTxSigningJob !== void 0) SigningJob.encode(message.rootTxSigningJob, writer.uint32(26).fork()).join();
		if (message.refundTxSigningJob !== void 0) SigningJob.encode(message.refundTxSigningJob, writer.uint32(34).fork()).join();
		if (message.directRootTxSigningJob !== void 0) SigningJob.encode(message.directRootTxSigningJob, writer.uint32(42).fork()).join();
		if (message.directRefundTxSigningJob !== void 0) SigningJob.encode(message.directRefundTxSigningJob, writer.uint32(50).fork()).join();
		if (message.directFromCpfpRefundTxSigningJob !== void 0) SigningJob.encode(message.directFromCpfpRefundTxSigningJob, writer.uint32(58).fork()).join();
		if (message.refundLadder !== void 0) FeeBumpLadder.encode(message.refundLadder, writer.uint32(66).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseStartTreeCreationRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.identityPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.onChainUtxo = UTXO.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.rootTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) break;
					message.refundTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) break;
					message.directRootTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) break;
					message.directRefundTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) break;
					message.directFromCpfpRefundTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 8:
					if (tag !== 66) break;
					message.refundLadder = FeeBumpLadder.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			identityPublicKey: isSet(object.identityPublicKey) ? bytesFromBase64(object.identityPublicKey) : new Uint8Array(0),
			onChainUtxo: isSet(object.onChainUtxo) ? UTXO.fromJSON(object.onChainUtxo) : void 0,
			rootTxSigningJob: isSet(object.rootTxSigningJob) ? SigningJob.fromJSON(object.rootTxSigningJob) : void 0,
			refundTxSigningJob: isSet(object.refundTxSigningJob) ? SigningJob.fromJSON(object.refundTxSigningJob) : void 0,
			directRootTxSigningJob: isSet(object.directRootTxSigningJob) ? SigningJob.fromJSON(object.directRootTxSigningJob) : void 0,
			directRefundTxSigningJob: isSet(object.directRefundTxSigningJob) ? SigningJob.fromJSON(object.directRefundTxSigningJob) : void 0,
			directFromCpfpRefundTxSigningJob: isSet(object.directFromCpfpRefundTxSigningJob) ? SigningJob.fromJSON(object.directFromCpfpRefundTxSigningJob) : void 0,
			refundLadder: isSet(object.refundLadder) ? FeeBumpLadder.fromJSON(object.refundLadder) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.identityPublicKey.length !== 0) obj.identityPublicKey = base64FromBytes(message.identityPublicKey);
		if (message.onChainUtxo !== void 0) obj.onChainUtxo = UTXO.toJSON(message.onChainUtxo);
		if (message.rootTxSigningJob !== void 0) obj.rootTxSigningJob = SigningJob.toJSON(message.rootTxSigningJob);
		if (message.refundTxSigningJob !== void 0) obj.refundTxSigningJob = SigningJob.toJSON(message.refundTxSigningJob);
		if (message.directRootTxSigningJob !== void 0) obj.directRootTxSigningJob = SigningJob.toJSON(message.directRootTxSigningJob);
		if (message.directRefundTxSigningJob !== void 0) obj.directRefundTxSigningJob = SigningJob.toJSON(message.directRefundTxSigningJob);
		if (message.directFromCpfpRefundTxSigningJob !== void 0) obj.directFromCpfpRefundTxSigningJob = SigningJob.toJSON(message.directFromCpfpRefundTxSigningJob);
		if (message.refundLadder !== void 0) obj.refundLadder = FeeBumpLadder.toJSON(message.refundLadder);
		return obj;
	},
	create(base) {
		return StartTreeCreationRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseStartTreeCreationRequest();
		message.identityPublicKey = object.identityPublicKey ?? new Uint8Array(0);
		message.onChainUtxo = object.onChainUtxo !== void 0 && object.onChainUtxo !== null ? UTXO.fromPartial(object.onChainUtxo) : void 0;
		message.rootTxSigningJob = object.rootTxSigningJob !== void 0 && object.rootTxSigningJob !== null ? SigningJob.fromPartial(object.rootTxSigningJob) : void 0;
		message.refundTxSigningJob = object.refundTxSigningJob !== void 0 && object.refundTxSigningJob !== null ? SigningJob.fromPartial(object.refundTxSigningJob) : void 0;
		message.directRootTxSigningJob = object.directRootTxSigningJob !== void 0 && object.directRootTxSigningJob !== null ? SigningJob.fromPartial(object.directRootTxSigningJob) : void 0;
		message.directRefundTxSigningJob = object.directRefundTxSigningJob !== void 0 && object.directRefundTxSigningJob !== null ? SigningJob.fromPartial(object.directRefundTxSigningJob) : void 0;
		message.directFromCpfpRefundTxSigningJob = object.directFromCpfpRefundTxSigningJob !== void 0 && object.directFromCpfpRefundTxSigningJob !== null ? SigningJob.fromPartial(object.directFromCpfpRefundTxSigningJob) : void 0;
		message.refundLadder = object.refundLadder !== void 0 && object.refundLadder !== null ? FeeBumpLadder.fromPartial(object.refundLadder) : void 0;
		return message;
	}
};
function createBaseStartTreeCreationResponse() {
	return {
		treeId: "",
		rootNodeSignatureShares: void 0
	};
}
const StartTreeCreationResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.treeId !== "") writer.uint32(10).string(message.treeId);
		if (message.rootNodeSignatureShares !== void 0) NodeSignatureShares.encode(message.rootNodeSignatureShares, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseStartTreeCreationResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.treeId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.rootNodeSignatureShares = NodeSignatureShares.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			treeId: isSet(object.treeId) ? globalThis.String(object.treeId) : "",
			rootNodeSignatureShares: isSet(object.rootNodeSignatureShares) ? NodeSignatureShares.fromJSON(object.rootNodeSignatureShares) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.treeId !== "") obj.treeId = message.treeId;
		if (message.rootNodeSignatureShares !== void 0) obj.rootNodeSignatureShares = NodeSignatureShares.toJSON(message.rootNodeSignatureShares);
		return obj;
	},
	create(base) {
		return StartTreeCreationResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseStartTreeCreationResponse();
		message.treeId = object.treeId ?? "";
		message.rootNodeSignatureShares = object.rootNodeSignatureShares !== void 0 && object.rootNodeSignatureShares !== null ? NodeSignatureShares.fromPartial(object.rootNodeSignatureShares) : void 0;
		return message;
	}
};
function createBaseStartDepositTreeCreationRequest() {
	return {
		identityPublicKey: new Uint8Array(0),
		onChainUtxo: void 0,
		rootTxSigningJob: void 0,
		refundTxSigningJob: void 0,
		directRootTxSigningJob: void 0,
		directRefundTxSigningJob: void 0,
		directFromCpfpRefundTxSigningJob: void 0,
		refundLadder: void 0
	};
}
const StartDepositTreeCreationRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.identityPublicKey.length !== 0) writer.uint32(10).bytes(message.identityPublicKey);
		if (message.onChainUtxo !== void 0) UTXO.encode(message.onChainUtxo, writer.uint32(18).fork()).join();
		if (message.rootTxSigningJob !== void 0) SigningJob.encode(message.rootTxSigningJob, writer.uint32(26).fork()).join();
		if (message.refundTxSigningJob !== void 0) SigningJob.encode(message.refundTxSigningJob, writer.uint32(34).fork()).join();
		if (message.directRootTxSigningJob !== void 0) SigningJob.encode(message.directRootTxSigningJob, writer.uint32(42).fork()).join();
		if (message.directRefundTxSigningJob !== void 0) SigningJob.encode(message.directRefundTxSigningJob, writer.uint32(50).fork()).join();
		if (message.directFromCpfpRefundTxSigningJob !== void 0) SigningJob.encode(message.directFromCpfpRefundTxSigningJob, writer.uint32(58).fork()).join();
		if (message.refundLadder !== void 0) FeeBumpLadder.encode(message.refundLadder, writer.uint32(66).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseStartDepositTreeCreationRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.identityPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.onChainUtxo = UTXO.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.rootTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) break;
					message.refundTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) break;
					message.directRootTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) break;
					message.directRefundTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) break;
					message.directFromCpfpRefundTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 8:
					if (tag !== 66) break;
					message.refundLadder = FeeBumpLadder.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			identityPublicKey: isSet(object.identityPublicKey) ? bytesFromBase64(object.identityPublicKey) : new Uint8Array(0),
			onChainUtxo: isSet(object.onChainUtxo) ? UTXO.fromJSON(object.onChainUtxo) : void 0,
			rootTxSigningJob: isSet(object.rootTxSigningJob) ? SigningJob.fromJSON(object.rootTxSigningJob) : void 0,
			refundTxSigningJob: isSet(object.refundTxSigningJob) ? SigningJob.fromJSON(object.refundTxSigningJob) : void 0,
			directRootTxSigningJob: isSet(object.directRootTxSigningJob) ? SigningJob.fromJSON(object.directRootTxSigningJob) : void 0,
			directRefundTxSigningJob: isSet(object.directRefundTxSigningJob) ? SigningJob.fromJSON(object.directRefundTxSigningJob) : void 0,
			directFromCpfpRefundTxSigningJob: isSet(object.directFromCpfpRefundTxSigningJob) ? SigningJob.fromJSON(object.directFromCpfpRefundTxSigningJob) : void 0,
			refundLadder: isSet(object.refundLadder) ? FeeBumpLadder.fromJSON(object.refundLadder) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.identityPublicKey.length !== 0) obj.identityPublicKey = base64FromBytes(message.identityPublicKey);
		if (message.onChainUtxo !== void 0) obj.onChainUtxo = UTXO.toJSON(message.onChainUtxo);
		if (message.rootTxSigningJob !== void 0) obj.rootTxSigningJob = SigningJob.toJSON(message.rootTxSigningJob);
		if (message.refundTxSigningJob !== void 0) obj.refundTxSigningJob = SigningJob.toJSON(message.refundTxSigningJob);
		if (message.directRootTxSigningJob !== void 0) obj.directRootTxSigningJob = SigningJob.toJSON(message.directRootTxSigningJob);
		if (message.directRefundTxSigningJob !== void 0) obj.directRefundTxSigningJob = SigningJob.toJSON(message.directRefundTxSigningJob);
		if (message.directFromCpfpRefundTxSigningJob !== void 0) obj.directFromCpfpRefundTxSigningJob = SigningJob.toJSON(message.directFromCpfpRefundTxSigningJob);
		if (message.refundLadder !== void 0) obj.refundLadder = FeeBumpLadder.toJSON(message.refundLadder);
		return obj;
	},
	create(base) {
		return StartDepositTreeCreationRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseStartDepositTreeCreationRequest();
		message.identityPublicKey = object.identityPublicKey ?? new Uint8Array(0);
		message.onChainUtxo = object.onChainUtxo !== void 0 && object.onChainUtxo !== null ? UTXO.fromPartial(object.onChainUtxo) : void 0;
		message.rootTxSigningJob = object.rootTxSigningJob !== void 0 && object.rootTxSigningJob !== null ? SigningJob.fromPartial(object.rootTxSigningJob) : void 0;
		message.refundTxSigningJob = object.refundTxSigningJob !== void 0 && object.refundTxSigningJob !== null ? SigningJob.fromPartial(object.refundTxSigningJob) : void 0;
		message.directRootTxSigningJob = object.directRootTxSigningJob !== void 0 && object.directRootTxSigningJob !== null ? SigningJob.fromPartial(object.directRootTxSigningJob) : void 0;
		message.directRefundTxSigningJob = object.directRefundTxSigningJob !== void 0 && object.directRefundTxSigningJob !== null ? SigningJob.fromPartial(object.directRefundTxSigningJob) : void 0;
		message.directFromCpfpRefundTxSigningJob = object.directFromCpfpRefundTxSigningJob !== void 0 && object.directFromCpfpRefundTxSigningJob !== null ? SigningJob.fromPartial(object.directFromCpfpRefundTxSigningJob) : void 0;
		message.refundLadder = object.refundLadder !== void 0 && object.refundLadder !== null ? FeeBumpLadder.fromPartial(object.refundLadder) : void 0;
		return message;
	}
};
function createBaseStartDepositTreeCreationResponse() {
	return {
		treeId: "",
		rootNodeSignatureShares: void 0
	};
}
const StartDepositTreeCreationResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.treeId !== "") writer.uint32(10).string(message.treeId);
		if (message.rootNodeSignatureShares !== void 0) NodeSignatureShares.encode(message.rootNodeSignatureShares, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseStartDepositTreeCreationResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.treeId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.rootNodeSignatureShares = NodeSignatureShares.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			treeId: isSet(object.treeId) ? globalThis.String(object.treeId) : "",
			rootNodeSignatureShares: isSet(object.rootNodeSignatureShares) ? NodeSignatureShares.fromJSON(object.rootNodeSignatureShares) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.treeId !== "") obj.treeId = message.treeId;
		if (message.rootNodeSignatureShares !== void 0) obj.rootNodeSignatureShares = NodeSignatureShares.toJSON(message.rootNodeSignatureShares);
		return obj;
	},
	create(base) {
		return StartDepositTreeCreationResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseStartDepositTreeCreationResponse();
		message.treeId = object.treeId ?? "";
		message.rootNodeSignatureShares = object.rootNodeSignatureShares !== void 0 && object.rootNodeSignatureShares !== null ? NodeSignatureShares.fromPartial(object.rootNodeSignatureShares) : void 0;
		return message;
	}
};
function createBaseFinalizeDepositTreeCreationRequest() {
	return {
		identityPublicKey: new Uint8Array(0),
		onChainUtxo: void 0,
		rootTxSigningJob: void 0,
		refundTxSigningJob: void 0,
		directFromCpfpRefundTxSigningJob: void 0,
		additionalOnChainUtxos: []
	};
}
const FinalizeDepositTreeCreationRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.identityPublicKey.length !== 0) writer.uint32(10).bytes(message.identityPublicKey);
		if (message.onChainUtxo !== void 0) UTXO.encode(message.onChainUtxo, writer.uint32(18).fork()).join();
		if (message.rootTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.rootTxSigningJob, writer.uint32(26).fork()).join();
		if (message.refundTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.refundTxSigningJob, writer.uint32(34).fork()).join();
		if (message.directFromCpfpRefundTxSigningJob !== void 0) UserSignedTxSigningJob.encode(message.directFromCpfpRefundTxSigningJob, writer.uint32(42).fork()).join();
		for (const v of message.additionalOnChainUtxos) UTXO.encode(v, writer.uint32(50).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseFinalizeDepositTreeCreationRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.identityPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.onChainUtxo = UTXO.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.rootTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) break;
					message.refundTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) break;
					message.directFromCpfpRefundTxSigningJob = UserSignedTxSigningJob.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) break;
					message.additionalOnChainUtxos.push(UTXO.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			identityPublicKey: isSet(object.identityPublicKey) ? bytesFromBase64(object.identityPublicKey) : new Uint8Array(0),
			onChainUtxo: isSet(object.onChainUtxo) ? UTXO.fromJSON(object.onChainUtxo) : void 0,
			rootTxSigningJob: isSet(object.rootTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.rootTxSigningJob) : void 0,
			refundTxSigningJob: isSet(object.refundTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.refundTxSigningJob) : void 0,
			directFromCpfpRefundTxSigningJob: isSet(object.directFromCpfpRefundTxSigningJob) ? UserSignedTxSigningJob.fromJSON(object.directFromCpfpRefundTxSigningJob) : void 0,
			additionalOnChainUtxos: globalThis.Array.isArray(object?.additionalOnChainUtxos) ? object.additionalOnChainUtxos.map((e) => UTXO.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.identityPublicKey.length !== 0) obj.identityPublicKey = base64FromBytes(message.identityPublicKey);
		if (message.onChainUtxo !== void 0) obj.onChainUtxo = UTXO.toJSON(message.onChainUtxo);
		if (message.rootTxSigningJob !== void 0) obj.rootTxSigningJob = UserSignedTxSigningJob.toJSON(message.rootTxSigningJob);
		if (message.refundTxSigningJob !== void 0) obj.refundTxSigningJob = UserSignedTxSigningJob.toJSON(message.refundTxSigningJob);
		if (message.directFromCpfpRefundTxSigningJob !== void 0) obj.directFromCpfpRefundTxSigningJob = UserSignedTxSigningJob.toJSON(message.directFromCpfpRefundTxSigningJob);
		if (message.additionalOnChainUtxos?.length) obj.additionalOnChainUtxos = message.additionalOnChainUtxos.map((e) => UTXO.toJSON(e));
		return obj;
	},
	create(base) {
		return FinalizeDepositTreeCreationRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseFinalizeDepositTreeCreationRequest();
		message.identityPublicKey = object.identityPublicKey ?? new Uint8Array(0);
		message.onChainUtxo = object.onChainUtxo !== void 0 && object.onChainUtxo !== null ? UTXO.fromPartial(object.onChainUtxo) : void 0;
		message.rootTxSigningJob = object.rootTxSigningJob !== void 0 && object.rootTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.rootTxSigningJob) : void 0;
		message.refundTxSigningJob = object.refundTxSigningJob !== void 0 && object.refundTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.refundTxSigningJob) : void 0;
		message.directFromCpfpRefundTxSigningJob = object.directFromCpfpRefundTxSigningJob !== void 0 && object.directFromCpfpRefundTxSigningJob !== null ? UserSignedTxSigningJob.fromPartial(object.directFromCpfpRefundTxSigningJob) : void 0;
		message.additionalOnChainUtxos = object.additionalOnChainUtxos?.map((e) => UTXO.fromPartial(e)) || [];
		return message;
	}
};
function createBaseFinalizeDepositTreeCreationResponse() {
	return { rootNode: void 0 };
}
const FinalizeDepositTreeCreationResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.rootNode !== void 0) TreeNode.encode(message.rootNode, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseFinalizeDepositTreeCreationResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.rootNode = TreeNode.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { rootNode: isSet(object.rootNode) ? TreeNode.fromJSON(object.rootNode) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.rootNode !== void 0) obj.rootNode = TreeNode.toJSON(message.rootNode);
		return obj;
	},
	create(base) {
		return FinalizeDepositTreeCreationResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseFinalizeDepositTreeCreationResponse();
		message.rootNode = object.rootNode !== void 0 && object.rootNode !== null ? TreeNode.fromPartial(object.rootNode) : void 0;
		return message;
	}
};
function createBaseTreeNode() {
	return {
		id: "",
		treeId: "",
		value: 0,
		parentNodeId: void 0,
		nodeTx: new Uint8Array(0),
		refundTx: new Uint8Array(0),
		vout: 0,
		verifyingPublicKey: new Uint8Array(0),
		ownerIdentityPublicKey: new Uint8Array(0),
		signingKeyshare: void 0,
		status: "",
		network: 0,
		createdTime: void 0,
		updatedTime: void 0,
		ownerSigningPublicKey: new Uint8Array(0),
		directTx: new Uint8Array(0),
		directRefundTx: new Uint8Array(0),
		directFromCpfpRefundTx: new Uint8Array(0),
		treenodeStatus: 0
	};
}
const TreeNode = {
	encode(message, writer = new BinaryWriter()) {
		if (message.id !== "") writer.uint32(10).string(message.id);
		if (message.treeId !== "") writer.uint32(18).string(message.treeId);
		if (message.value !== 0) writer.uint32(24).uint64(message.value);
		if (message.parentNodeId !== void 0) writer.uint32(34).string(message.parentNodeId);
		if (message.nodeTx.length !== 0) writer.uint32(42).bytes(message.nodeTx);
		if (message.refundTx.length !== 0) writer.uint32(50).bytes(message.refundTx);
		if (message.vout !== 0) writer.uint32(56).uint32(message.vout);
		if (message.verifyingPublicKey.length !== 0) writer.uint32(66).bytes(message.verifyingPublicKey);
		if (message.ownerIdentityPublicKey.length !== 0) writer.uint32(74).bytes(message.ownerIdentityPublicKey);
		if (message.signingKeyshare !== void 0) SigningKeyshare.encode(message.signingKeyshare, writer.uint32(82).fork()).join();
		if (message.status !== "") writer.uint32(90).string(message.status);
		if (message.network !== 0) writer.uint32(96).int32(message.network);
		if (message.createdTime !== void 0) Timestamp.encode(toTimestamp(message.createdTime), writer.uint32(106).fork()).join();
		if (message.updatedTime !== void 0) Timestamp.encode(toTimestamp(message.updatedTime), writer.uint32(114).fork()).join();
		if (message.ownerSigningPublicKey.length !== 0) writer.uint32(122).bytes(message.ownerSigningPublicKey);
		if (message.directTx.length !== 0) writer.uint32(130).bytes(message.directTx);
		if (message.directRefundTx.length !== 0) writer.uint32(138).bytes(message.directRefundTx);
		if (message.directFromCpfpRefundTx.length !== 0) writer.uint32(146).bytes(message.directFromCpfpRefundTx);
		if (message.treenodeStatus !== 0) writer.uint32(152).int32(message.treenodeStatus);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTreeNode();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.id = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.treeId = reader.string();
					continue;
				case 3:
					if (tag !== 24) break;
					message.value = longToNumber(reader.uint64());
					continue;
				case 4:
					if (tag !== 34) break;
					message.parentNodeId = reader.string();
					continue;
				case 5:
					if (tag !== 42) break;
					message.nodeTx = reader.bytes();
					continue;
				case 6:
					if (tag !== 50) break;
					message.refundTx = reader.bytes();
					continue;
				case 7:
					if (tag !== 56) break;
					message.vout = reader.uint32();
					continue;
				case 8:
					if (tag !== 66) break;
					message.verifyingPublicKey = reader.bytes();
					continue;
				case 9:
					if (tag !== 74) break;
					message.ownerIdentityPublicKey = reader.bytes();
					continue;
				case 10:
					if (tag !== 82) break;
					message.signingKeyshare = SigningKeyshare.decode(reader, reader.uint32());
					continue;
				case 11:
					if (tag !== 90) break;
					message.status = reader.string();
					continue;
				case 12:
					if (tag !== 96) break;
					message.network = reader.int32();
					continue;
				case 13:
					if (tag !== 106) break;
					message.createdTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 14:
					if (tag !== 114) break;
					message.updatedTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 15:
					if (tag !== 122) break;
					message.ownerSigningPublicKey = reader.bytes();
					continue;
				case 16:
					if (tag !== 130) break;
					message.directTx = reader.bytes();
					continue;
				case 17:
					if (tag !== 138) break;
					message.directRefundTx = reader.bytes();
					continue;
				case 18:
					if (tag !== 146) break;
					message.directFromCpfpRefundTx = reader.bytes();
					continue;
				case 19:
					if (tag !== 152) break;
					message.treenodeStatus = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			id: isSet(object.id) ? globalThis.String(object.id) : "",
			treeId: isSet(object.treeId) ? globalThis.String(object.treeId) : "",
			value: isSet(object.value) ? globalThis.Number(object.value) : 0,
			parentNodeId: isSet(object.parentNodeId) ? globalThis.String(object.parentNodeId) : void 0,
			nodeTx: isSet(object.nodeTx) ? bytesFromBase64(object.nodeTx) : new Uint8Array(0),
			refundTx: isSet(object.refundTx) ? bytesFromBase64(object.refundTx) : new Uint8Array(0),
			vout: isSet(object.vout) ? globalThis.Number(object.vout) : 0,
			verifyingPublicKey: isSet(object.verifyingPublicKey) ? bytesFromBase64(object.verifyingPublicKey) : new Uint8Array(0),
			ownerIdentityPublicKey: isSet(object.ownerIdentityPublicKey) ? bytesFromBase64(object.ownerIdentityPublicKey) : new Uint8Array(0),
			signingKeyshare: isSet(object.signingKeyshare) ? SigningKeyshare.fromJSON(object.signingKeyshare) : void 0,
			status: isSet(object.status) ? globalThis.String(object.status) : "",
			network: isSet(object.network) ? networkFromJSON(object.network) : 0,
			createdTime: isSet(object.createdTime) ? fromJsonTimestamp(object.createdTime) : void 0,
			updatedTime: isSet(object.updatedTime) ? fromJsonTimestamp(object.updatedTime) : void 0,
			ownerSigningPublicKey: isSet(object.ownerSigningPublicKey) ? bytesFromBase64(object.ownerSigningPublicKey) : new Uint8Array(0),
			directTx: isSet(object.directTx) ? bytesFromBase64(object.directTx) : new Uint8Array(0),
			directRefundTx: isSet(object.directRefundTx) ? bytesFromBase64(object.directRefundTx) : new Uint8Array(0),
			directFromCpfpRefundTx: isSet(object.directFromCpfpRefundTx) ? bytesFromBase64(object.directFromCpfpRefundTx) : new Uint8Array(0),
			treenodeStatus: isSet(object.treenodeStatus) ? treeNodeStatusFromJSON(object.treenodeStatus) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.id !== "") obj.id = message.id;
		if (message.treeId !== "") obj.treeId = message.treeId;
		if (message.value !== 0) obj.value = Math.round(message.value);
		if (message.parentNodeId !== void 0) obj.parentNodeId = message.parentNodeId;
		if (message.nodeTx.length !== 0) obj.nodeTx = base64FromBytes(message.nodeTx);
		if (message.refundTx.length !== 0) obj.refundTx = base64FromBytes(message.refundTx);
		if (message.vout !== 0) obj.vout = Math.round(message.vout);
		if (message.verifyingPublicKey.length !== 0) obj.verifyingPublicKey = base64FromBytes(message.verifyingPublicKey);
		if (message.ownerIdentityPublicKey.length !== 0) obj.ownerIdentityPublicKey = base64FromBytes(message.ownerIdentityPublicKey);
		if (message.signingKeyshare !== void 0) obj.signingKeyshare = SigningKeyshare.toJSON(message.signingKeyshare);
		if (message.status !== "") obj.status = message.status;
		if (message.network !== 0) obj.network = networkToJSON(message.network);
		if (message.createdTime !== void 0) obj.createdTime = message.createdTime.toISOString();
		if (message.updatedTime !== void 0) obj.updatedTime = message.updatedTime.toISOString();
		if (message.ownerSigningPublicKey.length !== 0) obj.ownerSigningPublicKey = base64FromBytes(message.ownerSigningPublicKey);
		if (message.directTx.length !== 0) obj.directTx = base64FromBytes(message.directTx);
		if (message.directRefundTx.length !== 0) obj.directRefundTx = base64FromBytes(message.directRefundTx);
		if (message.directFromCpfpRefundTx.length !== 0) obj.directFromCpfpRefundTx = base64FromBytes(message.directFromCpfpRefundTx);
		if (message.treenodeStatus !== 0) obj.treenodeStatus = treeNodeStatusToJSON(message.treenodeStatus);
		return obj;
	},
	create(base) {
		return TreeNode.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTreeNode();
		message.id = object.id ?? "";
		message.treeId = object.treeId ?? "";
		message.value = object.value ?? 0;
		message.parentNodeId = object.parentNodeId ?? void 0;
		message.nodeTx = object.nodeTx ?? new Uint8Array(0);
		message.refundTx = object.refundTx ?? new Uint8Array(0);
		message.vout = object.vout ?? 0;
		message.verifyingPublicKey = object.verifyingPublicKey ?? new Uint8Array(0);
		message.ownerIdentityPublicKey = object.ownerIdentityPublicKey ?? new Uint8Array(0);
		message.signingKeyshare = object.signingKeyshare !== void 0 && object.signingKeyshare !== null ? SigningKeyshare.fromPartial(object.signingKeyshare) : void 0;
		message.status = object.status ?? "";
		message.network = object.network ?? 0;
		message.createdTime = object.createdTime ?? void 0;
		message.updatedTime = object.updatedTime ?? void 0;
		message.ownerSigningPublicKey = object.ownerSigningPublicKey ?? new Uint8Array(0);
		message.directTx = object.directTx ?? new Uint8Array(0);
		message.directRefundTx = object.directRefundTx ?? new Uint8Array(0);
		message.directFromCpfpRefundTx = object.directFromCpfpRefundTx ?? new Uint8Array(0);
		message.treenodeStatus = object.treenodeStatus ?? 0;
		return message;
	}
};
function createBaseFinalizeNodeSignaturesRequest() {
	return {
		intent: 0,
		nodeSignatures: []
	};
}
const FinalizeNodeSignaturesRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.intent !== 0) writer.uint32(8).int32(message.intent);
		for (const v of message.nodeSignatures) NodeSignatures.encode(v, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseFinalizeNodeSignaturesRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.intent = reader.int32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.nodeSignatures.push(NodeSignatures.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			intent: isSet(object.intent) ? signatureIntentFromJSON(object.intent) : 0,
			nodeSignatures: globalThis.Array.isArray(object?.nodeSignatures) ? object.nodeSignatures.map((e) => NodeSignatures.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.intent !== 0) obj.intent = signatureIntentToJSON(message.intent);
		if (message.nodeSignatures?.length) obj.nodeSignatures = message.nodeSignatures.map((e) => NodeSignatures.toJSON(e));
		return obj;
	},
	create(base) {
		return FinalizeNodeSignaturesRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseFinalizeNodeSignaturesRequest();
		message.intent = object.intent ?? 0;
		message.nodeSignatures = object.nodeSignatures?.map((e) => NodeSignatures.fromPartial(e)) || [];
		return message;
	}
};
function createBaseFinalizeNodeSignaturesResponse() {
	return { nodes: [] };
}
const FinalizeNodeSignaturesResponse = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.nodes) TreeNode.encode(v, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseFinalizeNodeSignaturesResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.nodes.push(TreeNode.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { nodes: globalThis.Array.isArray(object?.nodes) ? object.nodes.map((e) => TreeNode.fromJSON(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.nodes?.length) obj.nodes = message.nodes.map((e) => TreeNode.toJSON(e));
		return obj;
	},
	create(base) {
		return FinalizeNodeSignaturesResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseFinalizeNodeSignaturesResponse();
		message.nodes = object.nodes?.map((e) => TreeNode.fromPartial(e)) || [];
		return message;
	}
};
function createBaseSecretShare() {
	return {
		secretShare: new Uint8Array(0),
		proofs: []
	};
}
const SecretShare = {
	encode(message, writer = new BinaryWriter()) {
		if (message.secretShare.length !== 0) writer.uint32(10).bytes(message.secretShare);
		for (const v of message.proofs) writer.uint32(18).bytes(v);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSecretShare();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.secretShare = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.proofs.push(reader.bytes());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			secretShare: isSet(object.secretShare) ? bytesFromBase64(object.secretShare) : new Uint8Array(0),
			proofs: globalThis.Array.isArray(object?.proofs) ? object.proofs.map((e) => bytesFromBase64(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.secretShare.length !== 0) obj.secretShare = base64FromBytes(message.secretShare);
		if (message.proofs?.length) obj.proofs = message.proofs.map((e) => base64FromBytes(e));
		return obj;
	},
	create(base) {
		return SecretShare.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSecretShare();
		message.secretShare = object.secretShare ?? new Uint8Array(0);
		message.proofs = object.proofs?.map((e) => e) || [];
		return message;
	}
};
function createBaseSecretProof() {
	return { proofs: [] };
}
const SecretProof = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.proofs) writer.uint32(10).bytes(v);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSecretProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.proofs.push(reader.bytes());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { proofs: globalThis.Array.isArray(object?.proofs) ? object.proofs.map((e) => bytesFromBase64(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.proofs?.length) obj.proofs = message.proofs.map((e) => base64FromBytes(e));
		return obj;
	},
	create(base) {
		return SecretProof.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSecretProof();
		message.proofs = object.proofs?.map((e) => e) || [];
		return message;
	}
};
function createBaseFeeBumpLadder() {
	return {
		rungTableVersion: 0,
		rungs: []
	};
}
const FeeBumpLadder = {
	encode(message, writer = new BinaryWriter()) {
		if (message.rungTableVersion !== 0) writer.uint32(8).uint32(message.rungTableVersion);
		for (const v of message.rungs) FeeBumpRung.encode(v, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseFeeBumpLadder();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.rungTableVersion = reader.uint32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.rungs.push(FeeBumpRung.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			rungTableVersion: isSet(object.rungTableVersion) ? globalThis.Number(object.rungTableVersion) : 0,
			rungs: globalThis.Array.isArray(object?.rungs) ? object.rungs.map((e) => FeeBumpRung.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.rungTableVersion !== 0) obj.rungTableVersion = Math.round(message.rungTableVersion);
		if (message.rungs?.length) obj.rungs = message.rungs.map((e) => FeeBumpRung.toJSON(e));
		return obj;
	},
	create(base) {
		return FeeBumpLadder.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseFeeBumpLadder();
		message.rungTableVersion = object.rungTableVersion ?? 0;
		message.rungs = object.rungs?.map((e) => FeeBumpRung.fromPartial(e)) || [];
		return message;
	}
};
function createBaseFeeBumpRung() {
	return { signedTx: new Uint8Array(0) };
}
const FeeBumpRung = {
	encode(message, writer = new BinaryWriter()) {
		if (message.signedTx.length !== 0) writer.uint32(10).bytes(message.signedTx);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseFeeBumpRung();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.signedTx = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { signedTx: isSet(object.signedTx) ? bytesFromBase64(object.signedTx) : new Uint8Array(0) };
	},
	toJSON(message) {
		const obj = {};
		if (message.signedTx.length !== 0) obj.signedTx = base64FromBytes(message.signedTx);
		return obj;
	},
	create(base) {
		return FeeBumpRung.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseFeeBumpRung();
		message.signedTx = object.signedTx ?? new Uint8Array(0);
		return message;
	}
};
function createBaseLeafRefundTxSigningJob() {
	return {
		leafId: "",
		refundTxSigningJob: void 0,
		directRefundTxSigningJob: void 0,
		directFromCpfpRefundTxSigningJob: void 0,
		refundLadder: void 0
	};
}
const LeafRefundTxSigningJob = {
	encode(message, writer = new BinaryWriter()) {
		if (message.leafId !== "") writer.uint32(10).string(message.leafId);
		if (message.refundTxSigningJob !== void 0) SigningJob.encode(message.refundTxSigningJob, writer.uint32(18).fork()).join();
		if (message.directRefundTxSigningJob !== void 0) SigningJob.encode(message.directRefundTxSigningJob, writer.uint32(26).fork()).join();
		if (message.directFromCpfpRefundTxSigningJob !== void 0) SigningJob.encode(message.directFromCpfpRefundTxSigningJob, writer.uint32(34).fork()).join();
		if (message.refundLadder !== void 0) FeeBumpLadder.encode(message.refundLadder, writer.uint32(42).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseLeafRefundTxSigningJob();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leafId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.refundTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.directRefundTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) break;
					message.directFromCpfpRefundTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) break;
					message.refundLadder = FeeBumpLadder.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leafId: isSet(object.leafId) ? globalThis.String(object.leafId) : "",
			refundTxSigningJob: isSet(object.refundTxSigningJob) ? SigningJob.fromJSON(object.refundTxSigningJob) : void 0,
			directRefundTxSigningJob: isSet(object.directRefundTxSigningJob) ? SigningJob.fromJSON(object.directRefundTxSigningJob) : void 0,
			directFromCpfpRefundTxSigningJob: isSet(object.directFromCpfpRefundTxSigningJob) ? SigningJob.fromJSON(object.directFromCpfpRefundTxSigningJob) : void 0,
			refundLadder: isSet(object.refundLadder) ? FeeBumpLadder.fromJSON(object.refundLadder) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leafId !== "") obj.leafId = message.leafId;
		if (message.refundTxSigningJob !== void 0) obj.refundTxSigningJob = SigningJob.toJSON(message.refundTxSigningJob);
		if (message.directRefundTxSigningJob !== void 0) obj.directRefundTxSigningJob = SigningJob.toJSON(message.directRefundTxSigningJob);
		if (message.directFromCpfpRefundTxSigningJob !== void 0) obj.directFromCpfpRefundTxSigningJob = SigningJob.toJSON(message.directFromCpfpRefundTxSigningJob);
		if (message.refundLadder !== void 0) obj.refundLadder = FeeBumpLadder.toJSON(message.refundLadder);
		return obj;
	},
	create(base) {
		return LeafRefundTxSigningJob.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseLeafRefundTxSigningJob();
		message.leafId = object.leafId ?? "";
		message.refundTxSigningJob = object.refundTxSigningJob !== void 0 && object.refundTxSigningJob !== null ? SigningJob.fromPartial(object.refundTxSigningJob) : void 0;
		message.directRefundTxSigningJob = object.directRefundTxSigningJob !== void 0 && object.directRefundTxSigningJob !== null ? SigningJob.fromPartial(object.directRefundTxSigningJob) : void 0;
		message.directFromCpfpRefundTxSigningJob = object.directFromCpfpRefundTxSigningJob !== void 0 && object.directFromCpfpRefundTxSigningJob !== null ? SigningJob.fromPartial(object.directFromCpfpRefundTxSigningJob) : void 0;
		message.refundLadder = object.refundLadder !== void 0 && object.refundLadder !== null ? FeeBumpLadder.fromPartial(object.refundLadder) : void 0;
		return message;
	}
};
function createBaseUserSignedTxSigningJob() {
	return {
		leafId: "",
		signingPublicKey: new Uint8Array(0),
		rawTx: new Uint8Array(0),
		signingNonceCommitment: void 0,
		userSignature: new Uint8Array(0),
		signingCommitments: void 0,
		additionalInputs: [],
		subuserContributions: [],
		refundLadder: void 0
	};
}
const UserSignedTxSigningJob = {
	encode(message, writer = new BinaryWriter()) {
		if (message.leafId !== "") writer.uint32(10).string(message.leafId);
		if (message.signingPublicKey.length !== 0) writer.uint32(18).bytes(message.signingPublicKey);
		if (message.rawTx.length !== 0) writer.uint32(26).bytes(message.rawTx);
		if (message.signingNonceCommitment !== void 0) SigningCommitment.encode(message.signingNonceCommitment, writer.uint32(34).fork()).join();
		if (message.userSignature.length !== 0) writer.uint32(42).bytes(message.userSignature);
		if (message.signingCommitments !== void 0) SigningCommitments.encode(message.signingCommitments, writer.uint32(50).fork()).join();
		for (const v of message.additionalInputs) InputSigningData.encode(v, writer.uint32(58).fork()).join();
		for (const v of message.subuserContributions) SubUserSigningContribution.encode(v, writer.uint32(66).fork()).join();
		if (message.refundLadder !== void 0) FeeBumpLadder.encode(message.refundLadder, writer.uint32(74).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseUserSignedTxSigningJob();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leafId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.signingPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.rawTx = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) break;
					message.signingNonceCommitment = SigningCommitment.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) break;
					message.userSignature = reader.bytes();
					continue;
				case 6:
					if (tag !== 50) break;
					message.signingCommitments = SigningCommitments.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) break;
					message.additionalInputs.push(InputSigningData.decode(reader, reader.uint32()));
					continue;
				case 8:
					if (tag !== 66) break;
					message.subuserContributions.push(SubUserSigningContribution.decode(reader, reader.uint32()));
					continue;
				case 9:
					if (tag !== 74) break;
					message.refundLadder = FeeBumpLadder.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leafId: isSet(object.leafId) ? globalThis.String(object.leafId) : "",
			signingPublicKey: isSet(object.signingPublicKey) ? bytesFromBase64(object.signingPublicKey) : new Uint8Array(0),
			rawTx: isSet(object.rawTx) ? bytesFromBase64(object.rawTx) : new Uint8Array(0),
			signingNonceCommitment: isSet(object.signingNonceCommitment) ? SigningCommitment.fromJSON(object.signingNonceCommitment) : void 0,
			userSignature: isSet(object.userSignature) ? bytesFromBase64(object.userSignature) : new Uint8Array(0),
			signingCommitments: isSet(object.signingCommitments) ? SigningCommitments.fromJSON(object.signingCommitments) : void 0,
			additionalInputs: globalThis.Array.isArray(object?.additionalInputs) ? object.additionalInputs.map((e) => InputSigningData.fromJSON(e)) : [],
			subuserContributions: globalThis.Array.isArray(object?.subuserContributions) ? object.subuserContributions.map((e) => SubUserSigningContribution.fromJSON(e)) : [],
			refundLadder: isSet(object.refundLadder) ? FeeBumpLadder.fromJSON(object.refundLadder) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leafId !== "") obj.leafId = message.leafId;
		if (message.signingPublicKey.length !== 0) obj.signingPublicKey = base64FromBytes(message.signingPublicKey);
		if (message.rawTx.length !== 0) obj.rawTx = base64FromBytes(message.rawTx);
		if (message.signingNonceCommitment !== void 0) obj.signingNonceCommitment = SigningCommitment.toJSON(message.signingNonceCommitment);
		if (message.userSignature.length !== 0) obj.userSignature = base64FromBytes(message.userSignature);
		if (message.signingCommitments !== void 0) obj.signingCommitments = SigningCommitments.toJSON(message.signingCommitments);
		if (message.additionalInputs?.length) obj.additionalInputs = message.additionalInputs.map((e) => InputSigningData.toJSON(e));
		if (message.subuserContributions?.length) obj.subuserContributions = message.subuserContributions.map((e) => SubUserSigningContribution.toJSON(e));
		if (message.refundLadder !== void 0) obj.refundLadder = FeeBumpLadder.toJSON(message.refundLadder);
		return obj;
	},
	create(base) {
		return UserSignedTxSigningJob.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseUserSignedTxSigningJob();
		message.leafId = object.leafId ?? "";
		message.signingPublicKey = object.signingPublicKey ?? new Uint8Array(0);
		message.rawTx = object.rawTx ?? new Uint8Array(0);
		message.signingNonceCommitment = object.signingNonceCommitment !== void 0 && object.signingNonceCommitment !== null ? SigningCommitment.fromPartial(object.signingNonceCommitment) : void 0;
		message.userSignature = object.userSignature ?? new Uint8Array(0);
		message.signingCommitments = object.signingCommitments !== void 0 && object.signingCommitments !== null ? SigningCommitments.fromPartial(object.signingCommitments) : void 0;
		message.additionalInputs = object.additionalInputs?.map((e) => InputSigningData.fromPartial(e)) || [];
		message.subuserContributions = object.subuserContributions?.map((e) => SubUserSigningContribution.fromPartial(e)) || [];
		message.refundLadder = object.refundLadder !== void 0 && object.refundLadder !== null ? FeeBumpLadder.fromPartial(object.refundLadder) : void 0;
		return message;
	}
};
function createBaseInputSigningData() {
	return {
		signingNonceCommitment: void 0,
		userSignature: new Uint8Array(0),
		signingCommitments: void 0
	};
}
const InputSigningData = {
	encode(message, writer = new BinaryWriter()) {
		if (message.signingNonceCommitment !== void 0) SigningCommitment.encode(message.signingNonceCommitment, writer.uint32(10).fork()).join();
		if (message.userSignature.length !== 0) writer.uint32(18).bytes(message.userSignature);
		if (message.signingCommitments !== void 0) SigningCommitments.encode(message.signingCommitments, writer.uint32(26).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseInputSigningData();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.signingNonceCommitment = SigningCommitment.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.userSignature = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.signingCommitments = SigningCommitments.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			signingNonceCommitment: isSet(object.signingNonceCommitment) ? SigningCommitment.fromJSON(object.signingNonceCommitment) : void 0,
			userSignature: isSet(object.userSignature) ? bytesFromBase64(object.userSignature) : new Uint8Array(0),
			signingCommitments: isSet(object.signingCommitments) ? SigningCommitments.fromJSON(object.signingCommitments) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.signingNonceCommitment !== void 0) obj.signingNonceCommitment = SigningCommitment.toJSON(message.signingNonceCommitment);
		if (message.userSignature.length !== 0) obj.userSignature = base64FromBytes(message.userSignature);
		if (message.signingCommitments !== void 0) obj.signingCommitments = SigningCommitments.toJSON(message.signingCommitments);
		return obj;
	},
	create(base) {
		return InputSigningData.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseInputSigningData();
		message.signingNonceCommitment = object.signingNonceCommitment !== void 0 && object.signingNonceCommitment !== null ? SigningCommitment.fromPartial(object.signingNonceCommitment) : void 0;
		message.userSignature = object.userSignature ?? new Uint8Array(0);
		message.signingCommitments = object.signingCommitments !== void 0 && object.signingCommitments !== null ? SigningCommitments.fromPartial(object.signingCommitments) : void 0;
		return message;
	}
};
function createBaseLeafRefundTxSigningResult() {
	return {
		leafId: "",
		refundTxSigningResult: void 0,
		verifyingKey: new Uint8Array(0),
		directRefundTxSigningResult: void 0,
		directFromCpfpRefundTxSigningResult: void 0
	};
}
const LeafRefundTxSigningResult = {
	encode(message, writer = new BinaryWriter()) {
		if (message.leafId !== "") writer.uint32(10).string(message.leafId);
		if (message.refundTxSigningResult !== void 0) SigningResult.encode(message.refundTxSigningResult, writer.uint32(18).fork()).join();
		if (message.verifyingKey.length !== 0) writer.uint32(26).bytes(message.verifyingKey);
		if (message.directRefundTxSigningResult !== void 0) SigningResult.encode(message.directRefundTxSigningResult, writer.uint32(34).fork()).join();
		if (message.directFromCpfpRefundTxSigningResult !== void 0) SigningResult.encode(message.directFromCpfpRefundTxSigningResult, writer.uint32(42).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseLeafRefundTxSigningResult();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leafId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.refundTxSigningResult = SigningResult.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.verifyingKey = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) break;
					message.directRefundTxSigningResult = SigningResult.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) break;
					message.directFromCpfpRefundTxSigningResult = SigningResult.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leafId: isSet(object.leafId) ? globalThis.String(object.leafId) : "",
			refundTxSigningResult: isSet(object.refundTxSigningResult) ? SigningResult.fromJSON(object.refundTxSigningResult) : void 0,
			verifyingKey: isSet(object.verifyingKey) ? bytesFromBase64(object.verifyingKey) : new Uint8Array(0),
			directRefundTxSigningResult: isSet(object.directRefundTxSigningResult) ? SigningResult.fromJSON(object.directRefundTxSigningResult) : void 0,
			directFromCpfpRefundTxSigningResult: isSet(object.directFromCpfpRefundTxSigningResult) ? SigningResult.fromJSON(object.directFromCpfpRefundTxSigningResult) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leafId !== "") obj.leafId = message.leafId;
		if (message.refundTxSigningResult !== void 0) obj.refundTxSigningResult = SigningResult.toJSON(message.refundTxSigningResult);
		if (message.verifyingKey.length !== 0) obj.verifyingKey = base64FromBytes(message.verifyingKey);
		if (message.directRefundTxSigningResult !== void 0) obj.directRefundTxSigningResult = SigningResult.toJSON(message.directRefundTxSigningResult);
		if (message.directFromCpfpRefundTxSigningResult !== void 0) obj.directFromCpfpRefundTxSigningResult = SigningResult.toJSON(message.directFromCpfpRefundTxSigningResult);
		return obj;
	},
	create(base) {
		return LeafRefundTxSigningResult.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseLeafRefundTxSigningResult();
		message.leafId = object.leafId ?? "";
		message.refundTxSigningResult = object.refundTxSigningResult !== void 0 && object.refundTxSigningResult !== null ? SigningResult.fromPartial(object.refundTxSigningResult) : void 0;
		message.verifyingKey = object.verifyingKey ?? new Uint8Array(0);
		message.directRefundTxSigningResult = object.directRefundTxSigningResult !== void 0 && object.directRefundTxSigningResult !== null ? SigningResult.fromPartial(object.directRefundTxSigningResult) : void 0;
		message.directFromCpfpRefundTxSigningResult = object.directFromCpfpRefundTxSigningResult !== void 0 && object.directFromCpfpRefundTxSigningResult !== null ? SigningResult.fromPartial(object.directFromCpfpRefundTxSigningResult) : void 0;
		return message;
	}
};
function createBaseStartTransferRequest() {
	return {
		transferId: "",
		ownerIdentityPublicKey: new Uint8Array(0),
		leavesToSend: [],
		receiverIdentityPublicKey: new Uint8Array(0),
		expiryTime: void 0,
		transferPackage: void 0,
		sparkInvoice: ""
	};
}
const StartTransferRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transferId !== "") writer.uint32(10).string(message.transferId);
		if (message.ownerIdentityPublicKey.length !== 0) writer.uint32(18).bytes(message.ownerIdentityPublicKey);
		for (const v of message.leavesToSend) LeafRefundTxSigningJob.encode(v, writer.uint32(26).fork()).join();
		if (message.receiverIdentityPublicKey.length !== 0) writer.uint32(34).bytes(message.receiverIdentityPublicKey);
		if (message.expiryTime !== void 0) Timestamp.encode(toTimestamp(message.expiryTime), writer.uint32(42).fork()).join();
		if (message.transferPackage !== void 0) TransferPackage.encode(message.transferPackage, writer.uint32(58).fork()).join();
		if (message.sparkInvoice !== "") writer.uint32(82).string(message.sparkInvoice);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseStartTransferRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transferId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.ownerIdentityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.leavesToSend.push(LeafRefundTxSigningJob.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) break;
					message.receiverIdentityPublicKey = reader.bytes();
					continue;
				case 5:
					if (tag !== 42) break;
					message.expiryTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 7:
					if (tag !== 58) break;
					message.transferPackage = TransferPackage.decode(reader, reader.uint32());
					continue;
				case 10:
					if (tag !== 82) break;
					message.sparkInvoice = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
			ownerIdentityPublicKey: isSet(object.ownerIdentityPublicKey) ? bytesFromBase64(object.ownerIdentityPublicKey) : new Uint8Array(0),
			leavesToSend: globalThis.Array.isArray(object?.leavesToSend) ? object.leavesToSend.map((e) => LeafRefundTxSigningJob.fromJSON(e)) : [],
			receiverIdentityPublicKey: isSet(object.receiverIdentityPublicKey) ? bytesFromBase64(object.receiverIdentityPublicKey) : new Uint8Array(0),
			expiryTime: isSet(object.expiryTime) ? fromJsonTimestamp(object.expiryTime) : void 0,
			transferPackage: isSet(object.transferPackage) ? TransferPackage.fromJSON(object.transferPackage) : void 0,
			sparkInvoice: isSet(object.sparkInvoice) ? globalThis.String(object.sparkInvoice) : ""
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transferId !== "") obj.transferId = message.transferId;
		if (message.ownerIdentityPublicKey.length !== 0) obj.ownerIdentityPublicKey = base64FromBytes(message.ownerIdentityPublicKey);
		if (message.leavesToSend?.length) obj.leavesToSend = message.leavesToSend.map((e) => LeafRefundTxSigningJob.toJSON(e));
		if (message.receiverIdentityPublicKey.length !== 0) obj.receiverIdentityPublicKey = base64FromBytes(message.receiverIdentityPublicKey);
		if (message.expiryTime !== void 0) obj.expiryTime = message.expiryTime.toISOString();
		if (message.transferPackage !== void 0) obj.transferPackage = TransferPackage.toJSON(message.transferPackage);
		if (message.sparkInvoice !== "") obj.sparkInvoice = message.sparkInvoice;
		return obj;
	},
	create(base) {
		return StartTransferRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseStartTransferRequest();
		message.transferId = object.transferId ?? "";
		message.ownerIdentityPublicKey = object.ownerIdentityPublicKey ?? new Uint8Array(0);
		message.leavesToSend = object.leavesToSend?.map((e) => LeafRefundTxSigningJob.fromPartial(e)) || [];
		message.receiverIdentityPublicKey = object.receiverIdentityPublicKey ?? new Uint8Array(0);
		message.expiryTime = object.expiryTime ?? void 0;
		message.transferPackage = object.transferPackage !== void 0 && object.transferPackage !== null ? TransferPackage.fromPartial(object.transferPackage) : void 0;
		message.sparkInvoice = object.sparkInvoice ?? "";
		return message;
	}
};
function createBaseStartTransferResponse() {
	return {
		transfer: void 0,
		signingResults: []
	};
}
const StartTransferResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transfer !== void 0) Transfer.encode(message.transfer, writer.uint32(10).fork()).join();
		for (const v of message.signingResults) LeafRefundTxSigningResult.encode(v, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseStartTransferResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transfer = Transfer.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.signingResults.push(LeafRefundTxSigningResult.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transfer: isSet(object.transfer) ? Transfer.fromJSON(object.transfer) : void 0,
			signingResults: globalThis.Array.isArray(object?.signingResults) ? object.signingResults.map((e) => LeafRefundTxSigningResult.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transfer !== void 0) obj.transfer = Transfer.toJSON(message.transfer);
		if (message.signingResults?.length) obj.signingResults = message.signingResults.map((e) => LeafRefundTxSigningResult.toJSON(e));
		return obj;
	},
	create(base) {
		return StartTransferResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseStartTransferResponse();
		message.transfer = object.transfer !== void 0 && object.transfer !== null ? Transfer.fromPartial(object.transfer) : void 0;
		message.signingResults = object.signingResults?.map((e) => LeafRefundTxSigningResult.fromPartial(e)) || [];
		return message;
	}
};
function createBaseSenderTransferPackage() {
	return {
		ownerIdentityPublicKey: new Uint8Array(0),
		transferPackage: void 0,
		receiverIdentityPublicKeys: {},
		manifestHashSignature: new Uint8Array(0)
	};
}
const SenderTransferPackage = {
	encode(message, writer = new BinaryWriter()) {
		if (message.ownerIdentityPublicKey.length !== 0) writer.uint32(10).bytes(message.ownerIdentityPublicKey);
		if (message.transferPackage !== void 0) TransferPackage.encode(message.transferPackage, writer.uint32(18).fork()).join();
		Object.entries(message.receiverIdentityPublicKeys).forEach(([key, value]) => {
			SenderTransferPackage_ReceiverIdentityPublicKeysEntry.encode({
				key,
				value
			}, writer.uint32(26).fork()).join();
		});
		if (message.manifestHashSignature.length !== 0) writer.uint32(34).bytes(message.manifestHashSignature);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSenderTransferPackage();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.ownerIdentityPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.transferPackage = TransferPackage.decode(reader, reader.uint32());
					continue;
				case 3: {
					if (tag !== 26) break;
					const entry3 = SenderTransferPackage_ReceiverIdentityPublicKeysEntry.decode(reader, reader.uint32());
					if (entry3.value !== void 0) message.receiverIdentityPublicKeys[entry3.key] = entry3.value;
					continue;
				}
				case 4:
					if (tag !== 34) break;
					message.manifestHashSignature = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			ownerIdentityPublicKey: isSet(object.ownerIdentityPublicKey) ? bytesFromBase64(object.ownerIdentityPublicKey) : new Uint8Array(0),
			transferPackage: isSet(object.transferPackage) ? TransferPackage.fromJSON(object.transferPackage) : void 0,
			receiverIdentityPublicKeys: isObject(object.receiverIdentityPublicKeys) ? Object.entries(object.receiverIdentityPublicKeys).reduce((acc, [key, value]) => {
				acc[key] = bytesFromBase64(value);
				return acc;
			}, {}) : {},
			manifestHashSignature: isSet(object.manifestHashSignature) ? bytesFromBase64(object.manifestHashSignature) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.ownerIdentityPublicKey.length !== 0) obj.ownerIdentityPublicKey = base64FromBytes(message.ownerIdentityPublicKey);
		if (message.transferPackage !== void 0) obj.transferPackage = TransferPackage.toJSON(message.transferPackage);
		if (message.receiverIdentityPublicKeys) {
			const entries = Object.entries(message.receiverIdentityPublicKeys);
			if (entries.length > 0) {
				obj.receiverIdentityPublicKeys = {};
				entries.forEach(([k, v]) => {
					obj.receiverIdentityPublicKeys[k] = base64FromBytes(v);
				});
			}
		}
		if (message.manifestHashSignature.length !== 0) obj.manifestHashSignature = base64FromBytes(message.manifestHashSignature);
		return obj;
	},
	create(base) {
		return SenderTransferPackage.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSenderTransferPackage();
		message.ownerIdentityPublicKey = object.ownerIdentityPublicKey ?? new Uint8Array(0);
		message.transferPackage = object.transferPackage !== void 0 && object.transferPackage !== null ? TransferPackage.fromPartial(object.transferPackage) : void 0;
		message.receiverIdentityPublicKeys = Object.entries(object.receiverIdentityPublicKeys ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = value;
			return acc;
		}, {});
		message.manifestHashSignature = object.manifestHashSignature ?? new Uint8Array(0);
		return message;
	}
};
function createBaseSenderTransferPackage_ReceiverIdentityPublicKeysEntry() {
	return {
		key: "",
		value: new Uint8Array(0)
	};
}
const SenderTransferPackage_ReceiverIdentityPublicKeysEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value.length !== 0) writer.uint32(18).bytes(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSenderTransferPackage_ReceiverIdentityPublicKeysEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value.length !== 0) obj.value = base64FromBytes(message.value);
		return obj;
	},
	create(base) {
		return SenderTransferPackage_ReceiverIdentityPublicKeysEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSenderTransferPackage_ReceiverIdentityPublicKeysEntry();
		message.key = object.key ?? "";
		message.value = object.value ?? new Uint8Array(0);
		return message;
	}
};
function createBaseStartTransferV3Request() {
	return {
		transferId: "",
		senderPackages: [],
		expiryTime: void 0,
		transferManifest: void 0
	};
}
const StartTransferV3Request = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transferId !== "") writer.uint32(10).string(message.transferId);
		for (const v of message.senderPackages) SenderTransferPackage.encode(v, writer.uint32(18).fork()).join();
		if (message.expiryTime !== void 0) Timestamp.encode(toTimestamp(message.expiryTime), writer.uint32(26).fork()).join();
		if (message.transferManifest !== void 0) TransferManifest.encode(message.transferManifest, writer.uint32(34).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseStartTransferV3Request();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transferId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.senderPackages.push(SenderTransferPackage.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) break;
					message.expiryTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) break;
					message.transferManifest = TransferManifest.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
			senderPackages: globalThis.Array.isArray(object?.senderPackages) ? object.senderPackages.map((e) => SenderTransferPackage.fromJSON(e)) : [],
			expiryTime: isSet(object.expiryTime) ? fromJsonTimestamp(object.expiryTime) : void 0,
			transferManifest: isSet(object.transferManifest) ? TransferManifest.fromJSON(object.transferManifest) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transferId !== "") obj.transferId = message.transferId;
		if (message.senderPackages?.length) obj.senderPackages = message.senderPackages.map((e) => SenderTransferPackage.toJSON(e));
		if (message.expiryTime !== void 0) obj.expiryTime = message.expiryTime.toISOString();
		if (message.transferManifest !== void 0) obj.transferManifest = TransferManifest.toJSON(message.transferManifest);
		return obj;
	},
	create(base) {
		return StartTransferV3Request.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseStartTransferV3Request();
		message.transferId = object.transferId ?? "";
		message.senderPackages = object.senderPackages?.map((e) => SenderTransferPackage.fromPartial(e)) || [];
		message.expiryTime = object.expiryTime ?? void 0;
		message.transferManifest = object.transferManifest !== void 0 && object.transferManifest !== null ? TransferManifest.fromPartial(object.transferManifest) : void 0;
		return message;
	}
};
function createBaseTransferPackage() {
	return {
		leavesToSend: [],
		keyTweakPackage: {},
		userSignature: new Uint8Array(0),
		directLeavesToSend: [],
		directFromCpfpLeavesToSend: [],
		hashVariant: 0,
		delegationIntent: void 0
	};
}
const TransferPackage = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.leavesToSend) UserSignedTxSigningJob.encode(v, writer.uint32(10).fork()).join();
		Object.entries(message.keyTweakPackage).forEach(([key, value]) => {
			TransferPackage_KeyTweakPackageEntry.encode({
				key,
				value
			}, writer.uint32(18).fork()).join();
		});
		if (message.userSignature.length !== 0) writer.uint32(26).bytes(message.userSignature);
		for (const v of message.directLeavesToSend) UserSignedTxSigningJob.encode(v, writer.uint32(34).fork()).join();
		for (const v of message.directFromCpfpLeavesToSend) UserSignedTxSigningJob.encode(v, writer.uint32(42).fork()).join();
		if (message.hashVariant !== 0) writer.uint32(48).int32(message.hashVariant);
		if (message.delegationIntent !== void 0) DelegationIntent.encode(message.delegationIntent, writer.uint32(58).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTransferPackage();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leavesToSend.push(UserSignedTxSigningJob.decode(reader, reader.uint32()));
					continue;
				case 2: {
					if (tag !== 18) break;
					const entry2 = TransferPackage_KeyTweakPackageEntry.decode(reader, reader.uint32());
					if (entry2.value !== void 0) message.keyTweakPackage[entry2.key] = entry2.value;
					continue;
				}
				case 3:
					if (tag !== 26) break;
					message.userSignature = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) break;
					message.directLeavesToSend.push(UserSignedTxSigningJob.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) break;
					message.directFromCpfpLeavesToSend.push(UserSignedTxSigningJob.decode(reader, reader.uint32()));
					continue;
				case 6:
					if (tag !== 48) break;
					message.hashVariant = reader.int32();
					continue;
				case 7:
					if (tag !== 58) break;
					message.delegationIntent = DelegationIntent.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leavesToSend: globalThis.Array.isArray(object?.leavesToSend) ? object.leavesToSend.map((e) => UserSignedTxSigningJob.fromJSON(e)) : [],
			keyTweakPackage: isObject(object.keyTweakPackage) ? Object.entries(object.keyTweakPackage).reduce((acc, [key, value]) => {
				acc[key] = bytesFromBase64(value);
				return acc;
			}, {}) : {},
			userSignature: isSet(object.userSignature) ? bytesFromBase64(object.userSignature) : new Uint8Array(0),
			directLeavesToSend: globalThis.Array.isArray(object?.directLeavesToSend) ? object.directLeavesToSend.map((e) => UserSignedTxSigningJob.fromJSON(e)) : [],
			directFromCpfpLeavesToSend: globalThis.Array.isArray(object?.directFromCpfpLeavesToSend) ? object.directFromCpfpLeavesToSend.map((e) => UserSignedTxSigningJob.fromJSON(e)) : [],
			hashVariant: isSet(object.hashVariant) ? hashVariantFromJSON(object.hashVariant) : 0,
			delegationIntent: isSet(object.delegationIntent) ? DelegationIntent.fromJSON(object.delegationIntent) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leavesToSend?.length) obj.leavesToSend = message.leavesToSend.map((e) => UserSignedTxSigningJob.toJSON(e));
		if (message.keyTweakPackage) {
			const entries = Object.entries(message.keyTweakPackage);
			if (entries.length > 0) {
				obj.keyTweakPackage = {};
				entries.forEach(([k, v]) => {
					obj.keyTweakPackage[k] = base64FromBytes(v);
				});
			}
		}
		if (message.userSignature.length !== 0) obj.userSignature = base64FromBytes(message.userSignature);
		if (message.directLeavesToSend?.length) obj.directLeavesToSend = message.directLeavesToSend.map((e) => UserSignedTxSigningJob.toJSON(e));
		if (message.directFromCpfpLeavesToSend?.length) obj.directFromCpfpLeavesToSend = message.directFromCpfpLeavesToSend.map((e) => UserSignedTxSigningJob.toJSON(e));
		if (message.hashVariant !== 0) obj.hashVariant = hashVariantToJSON(message.hashVariant);
		if (message.delegationIntent !== void 0) obj.delegationIntent = DelegationIntent.toJSON(message.delegationIntent);
		return obj;
	},
	create(base) {
		return TransferPackage.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTransferPackage();
		message.leavesToSend = object.leavesToSend?.map((e) => UserSignedTxSigningJob.fromPartial(e)) || [];
		message.keyTweakPackage = Object.entries(object.keyTweakPackage ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = value;
			return acc;
		}, {});
		message.userSignature = object.userSignature ?? new Uint8Array(0);
		message.directLeavesToSend = object.directLeavesToSend?.map((e) => UserSignedTxSigningJob.fromPartial(e)) || [];
		message.directFromCpfpLeavesToSend = object.directFromCpfpLeavesToSend?.map((e) => UserSignedTxSigningJob.fromPartial(e)) || [];
		message.hashVariant = object.hashVariant ?? 0;
		message.delegationIntent = object.delegationIntent !== void 0 && object.delegationIntent !== null ? DelegationIntent.fromPartial(object.delegationIntent) : void 0;
		return message;
	}
};
function createBaseTransferPackage_KeyTweakPackageEntry() {
	return {
		key: "",
		value: new Uint8Array(0)
	};
}
const TransferPackage_KeyTweakPackageEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value.length !== 0) writer.uint32(18).bytes(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTransferPackage_KeyTweakPackageEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value.length !== 0) obj.value = base64FromBytes(message.value);
		return obj;
	},
	create(base) {
		return TransferPackage_KeyTweakPackageEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTransferPackage_KeyTweakPackageEntry();
		message.key = object.key ?? "";
		message.value = object.value ?? new Uint8Array(0);
		return message;
	}
};
function createBaseDelegationIntent() {
	return {
		grantId: "",
		spenderIdentityPublicKey: new Uint8Array(0),
		totalAmountSats: 0,
		receiverAmountsSats: {}
	};
}
const DelegationIntent = {
	encode(message, writer = new BinaryWriter()) {
		if (message.grantId !== "") writer.uint32(10).string(message.grantId);
		if (message.spenderIdentityPublicKey.length !== 0) writer.uint32(18).bytes(message.spenderIdentityPublicKey);
		if (message.totalAmountSats !== 0) writer.uint32(24).uint64(message.totalAmountSats);
		Object.entries(message.receiverAmountsSats).forEach(([key, value]) => {
			DelegationIntent_ReceiverAmountsSatsEntry.encode({
				key,
				value
			}, writer.uint32(34).fork()).join();
		});
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseDelegationIntent();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.grantId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.spenderIdentityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 24) break;
					message.totalAmountSats = longToNumber(reader.uint64());
					continue;
				case 4: {
					if (tag !== 34) break;
					const entry4 = DelegationIntent_ReceiverAmountsSatsEntry.decode(reader, reader.uint32());
					if (entry4.value !== void 0) message.receiverAmountsSats[entry4.key] = entry4.value;
					continue;
				}
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			grantId: isSet(object.grantId) ? globalThis.String(object.grantId) : "",
			spenderIdentityPublicKey: isSet(object.spenderIdentityPublicKey) ? bytesFromBase64(object.spenderIdentityPublicKey) : new Uint8Array(0),
			totalAmountSats: isSet(object.totalAmountSats) ? globalThis.Number(object.totalAmountSats) : 0,
			receiverAmountsSats: isObject(object.receiverAmountsSats) ? Object.entries(object.receiverAmountsSats).reduce((acc, [key, value]) => {
				acc[key] = Number(value);
				return acc;
			}, {}) : {}
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.grantId !== "") obj.grantId = message.grantId;
		if (message.spenderIdentityPublicKey.length !== 0) obj.spenderIdentityPublicKey = base64FromBytes(message.spenderIdentityPublicKey);
		if (message.totalAmountSats !== 0) obj.totalAmountSats = Math.round(message.totalAmountSats);
		if (message.receiverAmountsSats) {
			const entries = Object.entries(message.receiverAmountsSats);
			if (entries.length > 0) {
				obj.receiverAmountsSats = {};
				entries.forEach(([k, v]) => {
					obj.receiverAmountsSats[k] = Math.round(v);
				});
			}
		}
		return obj;
	},
	create(base) {
		return DelegationIntent.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseDelegationIntent();
		message.grantId = object.grantId ?? "";
		message.spenderIdentityPublicKey = object.spenderIdentityPublicKey ?? new Uint8Array(0);
		message.totalAmountSats = object.totalAmountSats ?? 0;
		message.receiverAmountsSats = Object.entries(object.receiverAmountsSats ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = globalThis.Number(value);
			return acc;
		}, {});
		return message;
	}
};
function createBaseDelegationIntent_ReceiverAmountsSatsEntry() {
	return {
		key: "",
		value: 0
	};
}
const DelegationIntent_ReceiverAmountsSatsEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value !== 0) writer.uint32(16).uint64(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseDelegationIntent_ReceiverAmountsSatsEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 16) break;
					message.value = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? globalThis.Number(object.value) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value !== 0) obj.value = Math.round(message.value);
		return obj;
	},
	create(base) {
		return DelegationIntent_ReceiverAmountsSatsEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseDelegationIntent_ReceiverAmountsSatsEntry();
		message.key = object.key ?? "";
		message.value = object.value ?? 0;
		return message;
	}
};
function createBaseSendLeafKeyTweaks() {
	return { leavesToSend: [] };
}
const SendLeafKeyTweaks = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.leavesToSend) SendLeafKeyTweak.encode(v, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSendLeafKeyTweaks();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leavesToSend.push(SendLeafKeyTweak.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { leavesToSend: globalThis.Array.isArray(object?.leavesToSend) ? object.leavesToSend.map((e) => SendLeafKeyTweak.fromJSON(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.leavesToSend?.length) obj.leavesToSend = message.leavesToSend.map((e) => SendLeafKeyTweak.toJSON(e));
		return obj;
	},
	create(base) {
		return SendLeafKeyTweaks.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSendLeafKeyTweaks();
		message.leavesToSend = object.leavesToSend?.map((e) => SendLeafKeyTweak.fromPartial(e)) || [];
		return message;
	}
};
function createBaseSendLeafKeyTweak() {
	return {
		leafId: "",
		secretShareTweak: void 0,
		pubkeySharesTweak: {},
		secretCipher: new Uint8Array(0),
		sig: void 0,
		refundSignature: new Uint8Array(0),
		directRefundSignature: new Uint8Array(0),
		directFromCpfpRefundSignature: new Uint8Array(0)
	};
}
const SendLeafKeyTweak = {
	encode(message, writer = new BinaryWriter()) {
		if (message.leafId !== "") writer.uint32(10).string(message.leafId);
		if (message.secretShareTweak !== void 0) SecretShare.encode(message.secretShareTweak, writer.uint32(18).fork()).join();
		Object.entries(message.pubkeySharesTweak).forEach(([key, value]) => {
			SendLeafKeyTweak_PubkeySharesTweakEntry.encode({
				key,
				value
			}, writer.uint32(26).fork()).join();
		});
		if (message.secretCipher.length !== 0) writer.uint32(34).bytes(message.secretCipher);
		switch (message.sig?.$case) {
			case "signature":
				writer.uint32(42).bytes(message.sig.signature);
				break;
			case "typedSignature":
				Signature.encode(message.sig.typedSignature, writer.uint32(74).fork()).join();
				break;
		}
		if (message.refundSignature.length !== 0) writer.uint32(50).bytes(message.refundSignature);
		if (message.directRefundSignature.length !== 0) writer.uint32(58).bytes(message.directRefundSignature);
		if (message.directFromCpfpRefundSignature.length !== 0) writer.uint32(66).bytes(message.directFromCpfpRefundSignature);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSendLeafKeyTweak();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leafId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.secretShareTweak = SecretShare.decode(reader, reader.uint32());
					continue;
				case 3: {
					if (tag !== 26) break;
					const entry3 = SendLeafKeyTweak_PubkeySharesTweakEntry.decode(reader, reader.uint32());
					if (entry3.value !== void 0) message.pubkeySharesTweak[entry3.key] = entry3.value;
					continue;
				}
				case 4:
					if (tag !== 34) break;
					message.secretCipher = reader.bytes();
					continue;
				case 5:
					if (tag !== 42) break;
					message.sig = {
						$case: "signature",
						signature: reader.bytes()
					};
					continue;
				case 9:
					if (tag !== 74) break;
					message.sig = {
						$case: "typedSignature",
						typedSignature: Signature.decode(reader, reader.uint32())
					};
					continue;
				case 6:
					if (tag !== 50) break;
					message.refundSignature = reader.bytes();
					continue;
				case 7:
					if (tag !== 58) break;
					message.directRefundSignature = reader.bytes();
					continue;
				case 8:
					if (tag !== 66) break;
					message.directFromCpfpRefundSignature = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leafId: isSet(object.leafId) ? globalThis.String(object.leafId) : "",
			secretShareTweak: isSet(object.secretShareTweak) ? SecretShare.fromJSON(object.secretShareTweak) : void 0,
			pubkeySharesTweak: isObject(object.pubkeySharesTweak) ? Object.entries(object.pubkeySharesTweak).reduce((acc, [key, value]) => {
				acc[key] = bytesFromBase64(value);
				return acc;
			}, {}) : {},
			secretCipher: isSet(object.secretCipher) ? bytesFromBase64(object.secretCipher) : new Uint8Array(0),
			sig: isSet(object.signature) ? {
				$case: "signature",
				signature: bytesFromBase64(object.signature)
			} : isSet(object.typedSignature) ? {
				$case: "typedSignature",
				typedSignature: Signature.fromJSON(object.typedSignature)
			} : void 0,
			refundSignature: isSet(object.refundSignature) ? bytesFromBase64(object.refundSignature) : new Uint8Array(0),
			directRefundSignature: isSet(object.directRefundSignature) ? bytesFromBase64(object.directRefundSignature) : new Uint8Array(0),
			directFromCpfpRefundSignature: isSet(object.directFromCpfpRefundSignature) ? bytesFromBase64(object.directFromCpfpRefundSignature) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leafId !== "") obj.leafId = message.leafId;
		if (message.secretShareTweak !== void 0) obj.secretShareTweak = SecretShare.toJSON(message.secretShareTweak);
		if (message.pubkeySharesTweak) {
			const entries = Object.entries(message.pubkeySharesTweak);
			if (entries.length > 0) {
				obj.pubkeySharesTweak = {};
				entries.forEach(([k, v]) => {
					obj.pubkeySharesTweak[k] = base64FromBytes(v);
				});
			}
		}
		if (message.secretCipher.length !== 0) obj.secretCipher = base64FromBytes(message.secretCipher);
		if (message.sig?.$case === "signature") obj.signature = base64FromBytes(message.sig.signature);
		else if (message.sig?.$case === "typedSignature") obj.typedSignature = Signature.toJSON(message.sig.typedSignature);
		if (message.refundSignature.length !== 0) obj.refundSignature = base64FromBytes(message.refundSignature);
		if (message.directRefundSignature.length !== 0) obj.directRefundSignature = base64FromBytes(message.directRefundSignature);
		if (message.directFromCpfpRefundSignature.length !== 0) obj.directFromCpfpRefundSignature = base64FromBytes(message.directFromCpfpRefundSignature);
		return obj;
	},
	create(base) {
		return SendLeafKeyTweak.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSendLeafKeyTweak();
		message.leafId = object.leafId ?? "";
		message.secretShareTweak = object.secretShareTweak !== void 0 && object.secretShareTweak !== null ? SecretShare.fromPartial(object.secretShareTweak) : void 0;
		message.pubkeySharesTweak = Object.entries(object.pubkeySharesTweak ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = value;
			return acc;
		}, {});
		message.secretCipher = object.secretCipher ?? new Uint8Array(0);
		switch (object.sig?.$case) {
			case "signature":
				if (object.sig?.signature !== void 0 && object.sig?.signature !== null) message.sig = {
					$case: "signature",
					signature: object.sig.signature
				};
				break;
			case "typedSignature":
				if (object.sig?.typedSignature !== void 0 && object.sig?.typedSignature !== null) message.sig = {
					$case: "typedSignature",
					typedSignature: Signature.fromPartial(object.sig.typedSignature)
				};
				break;
		}
		message.refundSignature = object.refundSignature ?? new Uint8Array(0);
		message.directRefundSignature = object.directRefundSignature ?? new Uint8Array(0);
		message.directFromCpfpRefundSignature = object.directFromCpfpRefundSignature ?? new Uint8Array(0);
		return message;
	}
};
function createBaseSendLeafKeyTweak_PubkeySharesTweakEntry() {
	return {
		key: "",
		value: new Uint8Array(0)
	};
}
const SendLeafKeyTweak_PubkeySharesTweakEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value.length !== 0) writer.uint32(18).bytes(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSendLeafKeyTweak_PubkeySharesTweakEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value.length !== 0) obj.value = base64FromBytes(message.value);
		return obj;
	},
	create(base) {
		return SendLeafKeyTweak_PubkeySharesTweakEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSendLeafKeyTweak_PubkeySharesTweakEntry();
		message.key = object.key ?? "";
		message.value = object.value ?? new Uint8Array(0);
		return message;
	}
};
function createBaseStartTransferMpcRequest() {
	return {
		transferId: "",
		ownerIdentityPublicKey: new Uint8Array(0),
		mpcTransferPackage: void 0
	};
}
const StartTransferMpcRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transferId !== "") writer.uint32(10).string(message.transferId);
		if (message.ownerIdentityPublicKey.length !== 0) writer.uint32(18).bytes(message.ownerIdentityPublicKey);
		if (message.mpcTransferPackage !== void 0) MpcTransferPackage.encode(message.mpcTransferPackage, writer.uint32(26).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseStartTransferMpcRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transferId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.ownerIdentityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.mpcTransferPackage = MpcTransferPackage.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
			ownerIdentityPublicKey: isSet(object.ownerIdentityPublicKey) ? bytesFromBase64(object.ownerIdentityPublicKey) : new Uint8Array(0),
			mpcTransferPackage: isSet(object.mpcTransferPackage) ? MpcTransferPackage.fromJSON(object.mpcTransferPackage) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transferId !== "") obj.transferId = message.transferId;
		if (message.ownerIdentityPublicKey.length !== 0) obj.ownerIdentityPublicKey = base64FromBytes(message.ownerIdentityPublicKey);
		if (message.mpcTransferPackage !== void 0) obj.mpcTransferPackage = MpcTransferPackage.toJSON(message.mpcTransferPackage);
		return obj;
	},
	create(base) {
		return StartTransferMpcRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseStartTransferMpcRequest();
		message.transferId = object.transferId ?? "";
		message.ownerIdentityPublicKey = object.ownerIdentityPublicKey ?? new Uint8Array(0);
		message.mpcTransferPackage = object.mpcTransferPackage !== void 0 && object.mpcTransferPackage !== null ? MpcTransferPackage.fromPartial(object.mpcTransferPackage) : void 0;
		return message;
	}
};
function createBaseMpcTransferPackage() {
	return {
		leaves: [],
		keyTweaks: {},
		leavesToSend: [],
		directLeavesToSend: [],
		directFromCpfpLeavesToSend: [],
		authorization: void 0,
		positions: []
	};
}
const MpcTransferPackage = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.leaves) MpcSendLeaf.encode(v, writer.uint32(10).fork()).join();
		Object.entries(message.keyTweaks).forEach(([key, value]) => {
			MpcTransferPackage_KeyTweaksEntry.encode({
				key,
				value
			}, writer.uint32(18).fork()).join();
		});
		for (const v of message.leavesToSend) UserSignedTxSigningJob.encode(v, writer.uint32(26).fork()).join();
		for (const v of message.directLeavesToSend) UserSignedTxSigningJob.encode(v, writer.uint32(34).fork()).join();
		for (const v of message.directFromCpfpLeavesToSend) UserSignedTxSigningJob.encode(v, writer.uint32(42).fork()).join();
		if (message.authorization !== void 0) TransferAuthorization.encode(message.authorization, writer.uint32(50).fork()).join();
		writer.uint32(58).fork();
		for (const v of message.positions) writer.uint32(v);
		writer.join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseMpcTransferPackage();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leaves.push(MpcSendLeaf.decode(reader, reader.uint32()));
					continue;
				case 2: {
					if (tag !== 18) break;
					const entry2 = MpcTransferPackage_KeyTweaksEntry.decode(reader, reader.uint32());
					if (entry2.value !== void 0) message.keyTweaks[entry2.key] = entry2.value;
					continue;
				}
				case 3:
					if (tag !== 26) break;
					message.leavesToSend.push(UserSignedTxSigningJob.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) break;
					message.directLeavesToSend.push(UserSignedTxSigningJob.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) break;
					message.directFromCpfpLeavesToSend.push(UserSignedTxSigningJob.decode(reader, reader.uint32()));
					continue;
				case 6:
					if (tag !== 50) break;
					message.authorization = TransferAuthorization.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag === 56) {
						message.positions.push(reader.uint32());
						continue;
					}
					if (tag === 58) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.positions.push(reader.uint32());
						continue;
					}
					break;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leaves: globalThis.Array.isArray(object?.leaves) ? object.leaves.map((e) => MpcSendLeaf.fromJSON(e)) : [],
			keyTweaks: isObject(object.keyTweaks) ? Object.entries(object.keyTweaks).reduce((acc, [key, value]) => {
				acc[key] = MpcOperatorShares.fromJSON(value);
				return acc;
			}, {}) : {},
			leavesToSend: globalThis.Array.isArray(object?.leavesToSend) ? object.leavesToSend.map((e) => UserSignedTxSigningJob.fromJSON(e)) : [],
			directLeavesToSend: globalThis.Array.isArray(object?.directLeavesToSend) ? object.directLeavesToSend.map((e) => UserSignedTxSigningJob.fromJSON(e)) : [],
			directFromCpfpLeavesToSend: globalThis.Array.isArray(object?.directFromCpfpLeavesToSend) ? object.directFromCpfpLeavesToSend.map((e) => UserSignedTxSigningJob.fromJSON(e)) : [],
			authorization: isSet(object.authorization) ? TransferAuthorization.fromJSON(object.authorization) : void 0,
			positions: globalThis.Array.isArray(object?.positions) ? object.positions.map((e) => globalThis.Number(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leaves?.length) obj.leaves = message.leaves.map((e) => MpcSendLeaf.toJSON(e));
		if (message.keyTweaks) {
			const entries = Object.entries(message.keyTweaks);
			if (entries.length > 0) {
				obj.keyTweaks = {};
				entries.forEach(([k, v]) => {
					obj.keyTweaks[k] = MpcOperatorShares.toJSON(v);
				});
			}
		}
		if (message.leavesToSend?.length) obj.leavesToSend = message.leavesToSend.map((e) => UserSignedTxSigningJob.toJSON(e));
		if (message.directLeavesToSend?.length) obj.directLeavesToSend = message.directLeavesToSend.map((e) => UserSignedTxSigningJob.toJSON(e));
		if (message.directFromCpfpLeavesToSend?.length) obj.directFromCpfpLeavesToSend = message.directFromCpfpLeavesToSend.map((e) => UserSignedTxSigningJob.toJSON(e));
		if (message.authorization !== void 0) obj.authorization = TransferAuthorization.toJSON(message.authorization);
		if (message.positions?.length) obj.positions = message.positions.map((e) => Math.round(e));
		return obj;
	},
	create(base) {
		return MpcTransferPackage.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseMpcTransferPackage();
		message.leaves = object.leaves?.map((e) => MpcSendLeaf.fromPartial(e)) || [];
		message.keyTweaks = Object.entries(object.keyTweaks ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = MpcOperatorShares.fromPartial(value);
			return acc;
		}, {});
		message.leavesToSend = object.leavesToSend?.map((e) => UserSignedTxSigningJob.fromPartial(e)) || [];
		message.directLeavesToSend = object.directLeavesToSend?.map((e) => UserSignedTxSigningJob.fromPartial(e)) || [];
		message.directFromCpfpLeavesToSend = object.directFromCpfpLeavesToSend?.map((e) => UserSignedTxSigningJob.fromPartial(e)) || [];
		message.authorization = object.authorization !== void 0 && object.authorization !== null ? TransferAuthorization.fromPartial(object.authorization) : void 0;
		message.positions = object.positions?.map((e) => e) || [];
		return message;
	}
};
function createBaseMpcTransferPackage_KeyTweaksEntry() {
	return {
		key: "",
		value: void 0
	};
}
const MpcTransferPackage_KeyTweaksEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value !== void 0) MpcOperatorShares.encode(message.value, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseMpcTransferPackage_KeyTweaksEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = MpcOperatorShares.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? MpcOperatorShares.fromJSON(object.value) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value !== void 0) obj.value = MpcOperatorShares.toJSON(message.value);
		return obj;
	},
	create(base) {
		return MpcTransferPackage_KeyTweaksEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseMpcTransferPackage_KeyTweaksEntry();
		message.key = object.key ?? "";
		message.value = object.value !== void 0 && object.value !== null ? MpcOperatorShares.fromPartial(object.value) : void 0;
		return message;
	}
};
function createBaseMpcSendLeaf() {
	return {
		leafId: "",
		subuserCommitments: [],
		secretCipher: new Uint8Array(0),
		signature: void 0
	};
}
const MpcSendLeaf = {
	encode(message, writer = new BinaryWriter()) {
		if (message.leafId !== "") writer.uint32(10).string(message.leafId);
		for (const v of message.subuserCommitments) SubUserCommitment.encode(v, writer.uint32(18).fork()).join();
		if (message.secretCipher.length !== 0) writer.uint32(26).bytes(message.secretCipher);
		if (message.signature !== void 0) Signature.encode(message.signature, writer.uint32(34).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseMpcSendLeaf();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leafId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.subuserCommitments.push(SubUserCommitment.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) break;
					message.secretCipher = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) break;
					message.signature = Signature.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leafId: isSet(object.leafId) ? globalThis.String(object.leafId) : "",
			subuserCommitments: globalThis.Array.isArray(object?.subuserCommitments) ? object.subuserCommitments.map((e) => SubUserCommitment.fromJSON(e)) : [],
			secretCipher: isSet(object.secretCipher) ? bytesFromBase64(object.secretCipher) : new Uint8Array(0),
			signature: isSet(object.signature) ? Signature.fromJSON(object.signature) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leafId !== "") obj.leafId = message.leafId;
		if (message.subuserCommitments?.length) obj.subuserCommitments = message.subuserCommitments.map((e) => SubUserCommitment.toJSON(e));
		if (message.secretCipher.length !== 0) obj.secretCipher = base64FromBytes(message.secretCipher);
		if (message.signature !== void 0) obj.signature = Signature.toJSON(message.signature);
		return obj;
	},
	create(base) {
		return MpcSendLeaf.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseMpcSendLeaf();
		message.leafId = object.leafId ?? "";
		message.subuserCommitments = object.subuserCommitments?.map((e) => SubUserCommitment.fromPartial(e)) || [];
		message.secretCipher = object.secretCipher ?? new Uint8Array(0);
		message.signature = object.signature !== void 0 && object.signature !== null ? Signature.fromPartial(object.signature) : void 0;
		return message;
	}
};
function createBaseSubUserCommitment() {
	return { proofs: [] };
}
const SubUserCommitment = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.proofs) writer.uint32(10).bytes(v);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSubUserCommitment();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.proofs.push(reader.bytes());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { proofs: globalThis.Array.isArray(object?.proofs) ? object.proofs.map((e) => bytesFromBase64(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.proofs?.length) obj.proofs = message.proofs.map((e) => base64FromBytes(e));
		return obj;
	},
	create(base) {
		return SubUserCommitment.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSubUserCommitment();
		message.proofs = object.proofs?.map((e) => e) || [];
		return message;
	}
};
function createBaseMpcOperatorShares() {
	return { shares: [] };
}
const MpcOperatorShares = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.shares) MpcSealedShare.encode(v, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseMpcOperatorShares();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.shares.push(MpcSealedShare.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { shares: globalThis.Array.isArray(object?.shares) ? object.shares.map((e) => MpcSealedShare.fromJSON(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.shares?.length) obj.shares = message.shares.map((e) => MpcSealedShare.toJSON(e));
		return obj;
	},
	create(base) {
		return MpcOperatorShares.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseMpcOperatorShares();
		message.shares = object.shares?.map((e) => MpcSealedShare.fromPartial(e)) || [];
		return message;
	}
};
function createBaseMpcSealedShare() {
	return { ecies: new Uint8Array(0) };
}
const MpcSealedShare = {
	encode(message, writer = new BinaryWriter()) {
		if (message.ecies.length !== 0) writer.uint32(10).bytes(message.ecies);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseMpcSealedShare();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.ecies = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { ecies: isSet(object.ecies) ? bytesFromBase64(object.ecies) : new Uint8Array(0) };
	},
	toJSON(message) {
		const obj = {};
		if (message.ecies.length !== 0) obj.ecies = base64FromBytes(message.ecies);
		return obj;
	},
	create(base) {
		return MpcSealedShare.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseMpcSealedShare();
		message.ecies = object.ecies ?? new Uint8Array(0);
		return message;
	}
};
function createBaseMpcSealedSharePayload() {
	return {
		transferId: "",
		leafShares: []
	};
}
const MpcSealedSharePayload = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transferId !== "") writer.uint32(10).string(message.transferId);
		for (const v of message.leafShares) MpcLeafSubShare.encode(v, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseMpcSealedSharePayload();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transferId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.leafShares.push(MpcLeafSubShare.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
			leafShares: globalThis.Array.isArray(object?.leafShares) ? object.leafShares.map((e) => MpcLeafSubShare.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transferId !== "") obj.transferId = message.transferId;
		if (message.leafShares?.length) obj.leafShares = message.leafShares.map((e) => MpcLeafSubShare.toJSON(e));
		return obj;
	},
	create(base) {
		return MpcSealedSharePayload.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseMpcSealedSharePayload();
		message.transferId = object.transferId ?? "";
		message.leafShares = object.leafShares?.map((e) => MpcLeafSubShare.fromPartial(e)) || [];
		return message;
	}
};
function createBaseMpcLeafSubShare() {
	return {
		leafId: "",
		secretShare: new Uint8Array(0)
	};
}
const MpcLeafSubShare = {
	encode(message, writer = new BinaryWriter()) {
		if (message.leafId !== "") writer.uint32(10).string(message.leafId);
		if (message.secretShare.length !== 0) writer.uint32(18).bytes(message.secretShare);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseMpcLeafSubShare();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leafId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.secretShare = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leafId: isSet(object.leafId) ? globalThis.String(object.leafId) : "",
			secretShare: isSet(object.secretShare) ? bytesFromBase64(object.secretShare) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leafId !== "") obj.leafId = message.leafId;
		if (message.secretShare.length !== 0) obj.secretShare = base64FromBytes(message.secretShare);
		return obj;
	},
	create(base) {
		return MpcLeafSubShare.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseMpcLeafSubShare();
		message.leafId = object.leafId ?? "";
		message.secretShare = object.secretShare ?? new Uint8Array(0);
		return message;
	}
};
function createBaseTransferAuthorization() {
	return {
		transferId: "",
		leaves: [],
		refundSighashesDigest: new Uint8Array(0),
		expiryTime: void 0,
		signature: void 0
	};
}
const TransferAuthorization = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transferId !== "") writer.uint32(10).string(message.transferId);
		for (const v of message.leaves) LeafAuthorization.encode(v, writer.uint32(18).fork()).join();
		if (message.refundSighashesDigest.length !== 0) writer.uint32(26).bytes(message.refundSighashesDigest);
		if (message.expiryTime !== void 0) Timestamp.encode(toTimestamp(message.expiryTime), writer.uint32(34).fork()).join();
		if (message.signature !== void 0) Signature.encode(message.signature, writer.uint32(42).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTransferAuthorization();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transferId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.leaves.push(LeafAuthorization.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) break;
					message.refundSighashesDigest = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) break;
					message.expiryTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) break;
					message.signature = Signature.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
			leaves: globalThis.Array.isArray(object?.leaves) ? object.leaves.map((e) => LeafAuthorization.fromJSON(e)) : [],
			refundSighashesDigest: isSet(object.refundSighashesDigest) ? bytesFromBase64(object.refundSighashesDigest) : new Uint8Array(0),
			expiryTime: isSet(object.expiryTime) ? fromJsonTimestamp(object.expiryTime) : void 0,
			signature: isSet(object.signature) ? Signature.fromJSON(object.signature) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transferId !== "") obj.transferId = message.transferId;
		if (message.leaves?.length) obj.leaves = message.leaves.map((e) => LeafAuthorization.toJSON(e));
		if (message.refundSighashesDigest.length !== 0) obj.refundSighashesDigest = base64FromBytes(message.refundSighashesDigest);
		if (message.expiryTime !== void 0) obj.expiryTime = message.expiryTime.toISOString();
		if (message.signature !== void 0) obj.signature = Signature.toJSON(message.signature);
		return obj;
	},
	create(base) {
		return TransferAuthorization.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTransferAuthorization();
		message.transferId = object.transferId ?? "";
		message.leaves = object.leaves?.map((e) => LeafAuthorization.fromPartial(e)) || [];
		message.refundSighashesDigest = object.refundSighashesDigest ?? new Uint8Array(0);
		message.expiryTime = object.expiryTime ?? void 0;
		message.signature = object.signature !== void 0 && object.signature !== null ? Signature.fromPartial(object.signature) : void 0;
		return message;
	}
};
function createBaseLeafAuthorization() {
	return {
		leafId: "",
		amountSats: 0,
		ownerSigningPublicKey: new Uint8Array(0),
		maskCommitment: new Uint8Array(0),
		receiverIdentityPublicKey: new Uint8Array(0)
	};
}
const LeafAuthorization = {
	encode(message, writer = new BinaryWriter()) {
		if (message.leafId !== "") writer.uint32(10).string(message.leafId);
		if (message.amountSats !== 0) writer.uint32(16).uint64(message.amountSats);
		if (message.ownerSigningPublicKey.length !== 0) writer.uint32(26).bytes(message.ownerSigningPublicKey);
		if (message.maskCommitment.length !== 0) writer.uint32(34).bytes(message.maskCommitment);
		if (message.receiverIdentityPublicKey.length !== 0) writer.uint32(42).bytes(message.receiverIdentityPublicKey);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseLeafAuthorization();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leafId = reader.string();
					continue;
				case 2:
					if (tag !== 16) break;
					message.amountSats = longToNumber(reader.uint64());
					continue;
				case 3:
					if (tag !== 26) break;
					message.ownerSigningPublicKey = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) break;
					message.maskCommitment = reader.bytes();
					continue;
				case 5:
					if (tag !== 42) break;
					message.receiverIdentityPublicKey = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leafId: isSet(object.leafId) ? globalThis.String(object.leafId) : "",
			amountSats: isSet(object.amountSats) ? globalThis.Number(object.amountSats) : 0,
			ownerSigningPublicKey: isSet(object.ownerSigningPublicKey) ? bytesFromBase64(object.ownerSigningPublicKey) : new Uint8Array(0),
			maskCommitment: isSet(object.maskCommitment) ? bytesFromBase64(object.maskCommitment) : new Uint8Array(0),
			receiverIdentityPublicKey: isSet(object.receiverIdentityPublicKey) ? bytesFromBase64(object.receiverIdentityPublicKey) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leafId !== "") obj.leafId = message.leafId;
		if (message.amountSats !== 0) obj.amountSats = Math.round(message.amountSats);
		if (message.ownerSigningPublicKey.length !== 0) obj.ownerSigningPublicKey = base64FromBytes(message.ownerSigningPublicKey);
		if (message.maskCommitment.length !== 0) obj.maskCommitment = base64FromBytes(message.maskCommitment);
		if (message.receiverIdentityPublicKey.length !== 0) obj.receiverIdentityPublicKey = base64FromBytes(message.receiverIdentityPublicKey);
		return obj;
	},
	create(base) {
		return LeafAuthorization.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseLeafAuthorization();
		message.leafId = object.leafId ?? "";
		message.amountSats = object.amountSats ?? 0;
		message.ownerSigningPublicKey = object.ownerSigningPublicKey ?? new Uint8Array(0);
		message.maskCommitment = object.maskCommitment ?? new Uint8Array(0);
		message.receiverIdentityPublicKey = object.receiverIdentityPublicKey ?? new Uint8Array(0);
		return message;
	}
};
function createBaseSubUserSigningContribution() {
	return {
		nonceCommitment: void 0,
		partialSignature: new Uint8Array(0)
	};
}
const SubUserSigningContribution = {
	encode(message, writer = new BinaryWriter()) {
		if (message.nonceCommitment !== void 0) SigningCommitment.encode(message.nonceCommitment, writer.uint32(10).fork()).join();
		if (message.partialSignature.length !== 0) writer.uint32(18).bytes(message.partialSignature);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSubUserSigningContribution();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.nonceCommitment = SigningCommitment.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.partialSignature = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			nonceCommitment: isSet(object.nonceCommitment) ? SigningCommitment.fromJSON(object.nonceCommitment) : void 0,
			partialSignature: isSet(object.partialSignature) ? bytesFromBase64(object.partialSignature) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.nonceCommitment !== void 0) obj.nonceCommitment = SigningCommitment.toJSON(message.nonceCommitment);
		if (message.partialSignature.length !== 0) obj.partialSignature = base64FromBytes(message.partialSignature);
		return obj;
	},
	create(base) {
		return SubUserSigningContribution.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSubUserSigningContribution();
		message.nonceCommitment = object.nonceCommitment !== void 0 && object.nonceCommitment !== null ? SigningCommitment.fromPartial(object.nonceCommitment) : void 0;
		message.partialSignature = object.partialSignature ?? new Uint8Array(0);
		return message;
	}
};
function createBaseFinalizeTransferRequest() {
	return {
		transferId: "",
		ownerIdentityPublicKey: new Uint8Array(0),
		leavesToSend: [],
		sparkPaymentIntent: ""
	};
}
const FinalizeTransferRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transferId !== "") writer.uint32(10).string(message.transferId);
		if (message.ownerIdentityPublicKey.length !== 0) writer.uint32(18).bytes(message.ownerIdentityPublicKey);
		for (const v of message.leavesToSend) SendLeafKeyTweak.encode(v, writer.uint32(26).fork()).join();
		if (message.sparkPaymentIntent !== "") writer.uint32(34).string(message.sparkPaymentIntent);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseFinalizeTransferRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transferId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.ownerIdentityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.leavesToSend.push(SendLeafKeyTweak.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) break;
					message.sparkPaymentIntent = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
			ownerIdentityPublicKey: isSet(object.ownerIdentityPublicKey) ? bytesFromBase64(object.ownerIdentityPublicKey) : new Uint8Array(0),
			leavesToSend: globalThis.Array.isArray(object?.leavesToSend) ? object.leavesToSend.map((e) => SendLeafKeyTweak.fromJSON(e)) : [],
			sparkPaymentIntent: isSet(object.sparkPaymentIntent) ? globalThis.String(object.sparkPaymentIntent) : ""
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transferId !== "") obj.transferId = message.transferId;
		if (message.ownerIdentityPublicKey.length !== 0) obj.ownerIdentityPublicKey = base64FromBytes(message.ownerIdentityPublicKey);
		if (message.leavesToSend?.length) obj.leavesToSend = message.leavesToSend.map((e) => SendLeafKeyTweak.toJSON(e));
		if (message.sparkPaymentIntent !== "") obj.sparkPaymentIntent = message.sparkPaymentIntent;
		return obj;
	},
	create(base) {
		return FinalizeTransferRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseFinalizeTransferRequest();
		message.transferId = object.transferId ?? "";
		message.ownerIdentityPublicKey = object.ownerIdentityPublicKey ?? new Uint8Array(0);
		message.leavesToSend = object.leavesToSend?.map((e) => SendLeafKeyTweak.fromPartial(e)) || [];
		message.sparkPaymentIntent = object.sparkPaymentIntent ?? "";
		return message;
	}
};
function createBaseFinalizeTransferWithTransferPackageRequest() {
	return {
		transferId: "",
		ownerIdentityPublicKey: new Uint8Array(0),
		transferPackage: void 0
	};
}
const FinalizeTransferWithTransferPackageRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transferId !== "") writer.uint32(10).string(message.transferId);
		if (message.ownerIdentityPublicKey.length !== 0) writer.uint32(18).bytes(message.ownerIdentityPublicKey);
		if (message.transferPackage !== void 0) TransferPackage.encode(message.transferPackage, writer.uint32(26).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseFinalizeTransferWithTransferPackageRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transferId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.ownerIdentityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.transferPackage = TransferPackage.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
			ownerIdentityPublicKey: isSet(object.ownerIdentityPublicKey) ? bytesFromBase64(object.ownerIdentityPublicKey) : new Uint8Array(0),
			transferPackage: isSet(object.transferPackage) ? TransferPackage.fromJSON(object.transferPackage) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transferId !== "") obj.transferId = message.transferId;
		if (message.ownerIdentityPublicKey.length !== 0) obj.ownerIdentityPublicKey = base64FromBytes(message.ownerIdentityPublicKey);
		if (message.transferPackage !== void 0) obj.transferPackage = TransferPackage.toJSON(message.transferPackage);
		return obj;
	},
	create(base) {
		return FinalizeTransferWithTransferPackageRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseFinalizeTransferWithTransferPackageRequest();
		message.transferId = object.transferId ?? "";
		message.ownerIdentityPublicKey = object.ownerIdentityPublicKey ?? new Uint8Array(0);
		message.transferPackage = object.transferPackage !== void 0 && object.transferPackage !== null ? TransferPackage.fromPartial(object.transferPackage) : void 0;
		return message;
	}
};
function createBaseFinalizeTransferResponse() {
	return { transfer: void 0 };
}
const FinalizeTransferResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transfer !== void 0) Transfer.encode(message.transfer, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseFinalizeTransferResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transfer = Transfer.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { transfer: isSet(object.transfer) ? Transfer.fromJSON(object.transfer) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.transfer !== void 0) obj.transfer = Transfer.toJSON(message.transfer);
		return obj;
	},
	create(base) {
		return FinalizeTransferResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseFinalizeTransferResponse();
		message.transfer = object.transfer !== void 0 && object.transfer !== null ? Transfer.fromPartial(object.transfer) : void 0;
		return message;
	}
};
function createBaseTransferReceiver() {
	return {
		identityPublicKey: new Uint8Array(0),
		amountSats: 0,
		status: 0,
		id: "",
		completionTime: void 0
	};
}
const TransferReceiver = {
	encode(message, writer = new BinaryWriter()) {
		if (message.identityPublicKey.length !== 0) writer.uint32(10).bytes(message.identityPublicKey);
		if (message.amountSats !== 0) writer.uint32(16).uint64(message.amountSats);
		if (message.status !== 0) writer.uint32(24).int32(message.status);
		if (message.id !== "") writer.uint32(34).string(message.id);
		if (message.completionTime !== void 0) Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(42).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTransferReceiver();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.identityPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) break;
					message.amountSats = longToNumber(reader.uint64());
					continue;
				case 3:
					if (tag !== 24) break;
					message.status = reader.int32();
					continue;
				case 4:
					if (tag !== 34) break;
					message.id = reader.string();
					continue;
				case 5:
					if (tag !== 42) break;
					message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			identityPublicKey: isSet(object.identityPublicKey) ? bytesFromBase64(object.identityPublicKey) : new Uint8Array(0),
			amountSats: isSet(object.amountSats) ? globalThis.Number(object.amountSats) : 0,
			status: isSet(object.status) ? transferReceiverStatusFromJSON(object.status) : 0,
			id: isSet(object.id) ? globalThis.String(object.id) : "",
			completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.identityPublicKey.length !== 0) obj.identityPublicKey = base64FromBytes(message.identityPublicKey);
		if (message.amountSats !== 0) obj.amountSats = Math.round(message.amountSats);
		if (message.status !== 0) obj.status = transferReceiverStatusToJSON(message.status);
		if (message.id !== "") obj.id = message.id;
		if (message.completionTime !== void 0) obj.completionTime = message.completionTime.toISOString();
		return obj;
	},
	create(base) {
		return TransferReceiver.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTransferReceiver();
		message.identityPublicKey = object.identityPublicKey ?? new Uint8Array(0);
		message.amountSats = object.amountSats ?? 0;
		message.status = object.status ?? 0;
		message.id = object.id ?? "";
		message.completionTime = object.completionTime ?? void 0;
		return message;
	}
};
function createBaseTransferSender() {
	return {
		id: "",
		identityPublicKey: new Uint8Array(0)
	};
}
const TransferSender = {
	encode(message, writer = new BinaryWriter()) {
		if (message.id !== "") writer.uint32(10).string(message.id);
		if (message.identityPublicKey.length !== 0) writer.uint32(18).bytes(message.identityPublicKey);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTransferSender();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.id = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.identityPublicKey = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			id: isSet(object.id) ? globalThis.String(object.id) : "",
			identityPublicKey: isSet(object.identityPublicKey) ? bytesFromBase64(object.identityPublicKey) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.id !== "") obj.id = message.id;
		if (message.identityPublicKey.length !== 0) obj.identityPublicKey = base64FromBytes(message.identityPublicKey);
		return obj;
	},
	create(base) {
		return TransferSender.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTransferSender();
		message.id = object.id ?? "";
		message.identityPublicKey = object.identityPublicKey ?? new Uint8Array(0);
		return message;
	}
};
function createBaseTransfer() {
	return {
		id: "",
		senderIdentityPublicKey: new Uint8Array(0),
		receiverIdentityPublicKey: new Uint8Array(0),
		status: 0,
		totalValue: 0,
		expiryTime: void 0,
		leaves: [],
		createdTime: void 0,
		updatedTime: void 0,
		type: 0,
		sparkInvoice: "",
		network: 0,
		receivers: [],
		senders: []
	};
}
const Transfer = {
	encode(message, writer = new BinaryWriter()) {
		if (message.id !== "") writer.uint32(10).string(message.id);
		if (message.senderIdentityPublicKey.length !== 0) writer.uint32(18).bytes(message.senderIdentityPublicKey);
		if (message.receiverIdentityPublicKey.length !== 0) writer.uint32(26).bytes(message.receiverIdentityPublicKey);
		if (message.status !== 0) writer.uint32(32).int32(message.status);
		if (message.totalValue !== 0) writer.uint32(40).uint64(message.totalValue);
		if (message.expiryTime !== void 0) Timestamp.encode(toTimestamp(message.expiryTime), writer.uint32(50).fork()).join();
		for (const v of message.leaves) TransferLeaf.encode(v, writer.uint32(58).fork()).join();
		if (message.createdTime !== void 0) Timestamp.encode(toTimestamp(message.createdTime), writer.uint32(66).fork()).join();
		if (message.updatedTime !== void 0) Timestamp.encode(toTimestamp(message.updatedTime), writer.uint32(74).fork()).join();
		if (message.type !== 0) writer.uint32(80).int32(message.type);
		if (message.sparkInvoice !== "") writer.uint32(90).string(message.sparkInvoice);
		if (message.network !== 0) writer.uint32(96).int32(message.network);
		for (const v of message.receivers) TransferReceiver.encode(v, writer.uint32(106).fork()).join();
		for (const v of message.senders) TransferSender.encode(v, writer.uint32(114).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTransfer();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.id = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.senderIdentityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.receiverIdentityPublicKey = reader.bytes();
					continue;
				case 4:
					if (tag !== 32) break;
					message.status = reader.int32();
					continue;
				case 5:
					if (tag !== 40) break;
					message.totalValue = longToNumber(reader.uint64());
					continue;
				case 6:
					if (tag !== 50) break;
					message.expiryTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 7:
					if (tag !== 58) break;
					message.leaves.push(TransferLeaf.decode(reader, reader.uint32()));
					continue;
				case 8:
					if (tag !== 66) break;
					message.createdTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 9:
					if (tag !== 74) break;
					message.updatedTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 10:
					if (tag !== 80) break;
					message.type = reader.int32();
					continue;
				case 11:
					if (tag !== 90) break;
					message.sparkInvoice = reader.string();
					continue;
				case 12:
					if (tag !== 96) break;
					message.network = reader.int32();
					continue;
				case 13:
					if (tag !== 106) break;
					message.receivers.push(TransferReceiver.decode(reader, reader.uint32()));
					continue;
				case 14:
					if (tag !== 114) break;
					message.senders.push(TransferSender.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			id: isSet(object.id) ? globalThis.String(object.id) : "",
			senderIdentityPublicKey: isSet(object.senderIdentityPublicKey) ? bytesFromBase64(object.senderIdentityPublicKey) : new Uint8Array(0),
			receiverIdentityPublicKey: isSet(object.receiverIdentityPublicKey) ? bytesFromBase64(object.receiverIdentityPublicKey) : new Uint8Array(0),
			status: isSet(object.status) ? transferStatusFromJSON(object.status) : 0,
			totalValue: isSet(object.totalValue) ? globalThis.Number(object.totalValue) : 0,
			expiryTime: isSet(object.expiryTime) ? fromJsonTimestamp(object.expiryTime) : void 0,
			leaves: globalThis.Array.isArray(object?.leaves) ? object.leaves.map((e) => TransferLeaf.fromJSON(e)) : [],
			createdTime: isSet(object.createdTime) ? fromJsonTimestamp(object.createdTime) : void 0,
			updatedTime: isSet(object.updatedTime) ? fromJsonTimestamp(object.updatedTime) : void 0,
			type: isSet(object.type) ? transferTypeFromJSON(object.type) : 0,
			sparkInvoice: isSet(object.sparkInvoice) ? globalThis.String(object.sparkInvoice) : "",
			network: isSet(object.network) ? networkFromJSON(object.network) : 0,
			receivers: globalThis.Array.isArray(object?.receivers) ? object.receivers.map((e) => TransferReceiver.fromJSON(e)) : [],
			senders: globalThis.Array.isArray(object?.senders) ? object.senders.map((e) => TransferSender.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.id !== "") obj.id = message.id;
		if (message.senderIdentityPublicKey.length !== 0) obj.senderIdentityPublicKey = base64FromBytes(message.senderIdentityPublicKey);
		if (message.receiverIdentityPublicKey.length !== 0) obj.receiverIdentityPublicKey = base64FromBytes(message.receiverIdentityPublicKey);
		if (message.status !== 0) obj.status = transferStatusToJSON(message.status);
		if (message.totalValue !== 0) obj.totalValue = Math.round(message.totalValue);
		if (message.expiryTime !== void 0) obj.expiryTime = message.expiryTime.toISOString();
		if (message.leaves?.length) obj.leaves = message.leaves.map((e) => TransferLeaf.toJSON(e));
		if (message.createdTime !== void 0) obj.createdTime = message.createdTime.toISOString();
		if (message.updatedTime !== void 0) obj.updatedTime = message.updatedTime.toISOString();
		if (message.type !== 0) obj.type = transferTypeToJSON(message.type);
		if (message.sparkInvoice !== "") obj.sparkInvoice = message.sparkInvoice;
		if (message.network !== 0) obj.network = networkToJSON(message.network);
		if (message.receivers?.length) obj.receivers = message.receivers.map((e) => TransferReceiver.toJSON(e));
		if (message.senders?.length) obj.senders = message.senders.map((e) => TransferSender.toJSON(e));
		return obj;
	},
	create(base) {
		return Transfer.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTransfer();
		message.id = object.id ?? "";
		message.senderIdentityPublicKey = object.senderIdentityPublicKey ?? new Uint8Array(0);
		message.receiverIdentityPublicKey = object.receiverIdentityPublicKey ?? new Uint8Array(0);
		message.status = object.status ?? 0;
		message.totalValue = object.totalValue ?? 0;
		message.expiryTime = object.expiryTime ?? void 0;
		message.leaves = object.leaves?.map((e) => TransferLeaf.fromPartial(e)) || [];
		message.createdTime = object.createdTime ?? void 0;
		message.updatedTime = object.updatedTime ?? void 0;
		message.type = object.type ?? 0;
		message.sparkInvoice = object.sparkInvoice ?? "";
		message.network = object.network ?? 0;
		message.receivers = object.receivers?.map((e) => TransferReceiver.fromPartial(e)) || [];
		message.senders = object.senders?.map((e) => TransferSender.fromPartial(e)) || [];
		return message;
	}
};
function createBaseTransferLeaf() {
	return {
		leaf: void 0,
		secretCipher: new Uint8Array(0),
		sig: void 0,
		intermediateRefundTx: new Uint8Array(0),
		intermediateDirectRefundTx: new Uint8Array(0),
		intermediateDirectFromCpfpRefundTx: new Uint8Array(0),
		pendingKeyTweakPublicKey: new Uint8Array(0),
		transferReceiverId: "",
		transferSenderId: ""
	};
}
const TransferLeaf = {
	encode(message, writer = new BinaryWriter()) {
		if (message.leaf !== void 0) TreeNode.encode(message.leaf, writer.uint32(10).fork()).join();
		if (message.secretCipher.length !== 0) writer.uint32(18).bytes(message.secretCipher);
		switch (message.sig?.$case) {
			case "signature":
				writer.uint32(26).bytes(message.sig.signature);
				break;
			case "typedSignature":
				Signature.encode(message.sig.typedSignature, writer.uint32(82).fork()).join();
				break;
		}
		if (message.intermediateRefundTx.length !== 0) writer.uint32(34).bytes(message.intermediateRefundTx);
		if (message.intermediateDirectRefundTx.length !== 0) writer.uint32(42).bytes(message.intermediateDirectRefundTx);
		if (message.intermediateDirectFromCpfpRefundTx.length !== 0) writer.uint32(50).bytes(message.intermediateDirectFromCpfpRefundTx);
		if (message.pendingKeyTweakPublicKey.length !== 0) writer.uint32(58).bytes(message.pendingKeyTweakPublicKey);
		if (message.transferReceiverId !== "") writer.uint32(66).string(message.transferReceiverId);
		if (message.transferSenderId !== "") writer.uint32(74).string(message.transferSenderId);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTransferLeaf();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leaf = TreeNode.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.secretCipher = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.sig = {
						$case: "signature",
						signature: reader.bytes()
					};
					continue;
				case 10:
					if (tag !== 82) break;
					message.sig = {
						$case: "typedSignature",
						typedSignature: Signature.decode(reader, reader.uint32())
					};
					continue;
				case 4:
					if (tag !== 34) break;
					message.intermediateRefundTx = reader.bytes();
					continue;
				case 5:
					if (tag !== 42) break;
					message.intermediateDirectRefundTx = reader.bytes();
					continue;
				case 6:
					if (tag !== 50) break;
					message.intermediateDirectFromCpfpRefundTx = reader.bytes();
					continue;
				case 7:
					if (tag !== 58) break;
					message.pendingKeyTweakPublicKey = reader.bytes();
					continue;
				case 8:
					if (tag !== 66) break;
					message.transferReceiverId = reader.string();
					continue;
				case 9:
					if (tag !== 74) break;
					message.transferSenderId = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leaf: isSet(object.leaf) ? TreeNode.fromJSON(object.leaf) : void 0,
			secretCipher: isSet(object.secretCipher) ? bytesFromBase64(object.secretCipher) : new Uint8Array(0),
			sig: isSet(object.signature) ? {
				$case: "signature",
				signature: bytesFromBase64(object.signature)
			} : isSet(object.typedSignature) ? {
				$case: "typedSignature",
				typedSignature: Signature.fromJSON(object.typedSignature)
			} : void 0,
			intermediateRefundTx: isSet(object.intermediateRefundTx) ? bytesFromBase64(object.intermediateRefundTx) : new Uint8Array(0),
			intermediateDirectRefundTx: isSet(object.intermediateDirectRefundTx) ? bytesFromBase64(object.intermediateDirectRefundTx) : new Uint8Array(0),
			intermediateDirectFromCpfpRefundTx: isSet(object.intermediateDirectFromCpfpRefundTx) ? bytesFromBase64(object.intermediateDirectFromCpfpRefundTx) : new Uint8Array(0),
			pendingKeyTweakPublicKey: isSet(object.pendingKeyTweakPublicKey) ? bytesFromBase64(object.pendingKeyTweakPublicKey) : new Uint8Array(0),
			transferReceiverId: isSet(object.transferReceiverId) ? globalThis.String(object.transferReceiverId) : "",
			transferSenderId: isSet(object.transferSenderId) ? globalThis.String(object.transferSenderId) : ""
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leaf !== void 0) obj.leaf = TreeNode.toJSON(message.leaf);
		if (message.secretCipher.length !== 0) obj.secretCipher = base64FromBytes(message.secretCipher);
		if (message.sig?.$case === "signature") obj.signature = base64FromBytes(message.sig.signature);
		else if (message.sig?.$case === "typedSignature") obj.typedSignature = Signature.toJSON(message.sig.typedSignature);
		if (message.intermediateRefundTx.length !== 0) obj.intermediateRefundTx = base64FromBytes(message.intermediateRefundTx);
		if (message.intermediateDirectRefundTx.length !== 0) obj.intermediateDirectRefundTx = base64FromBytes(message.intermediateDirectRefundTx);
		if (message.intermediateDirectFromCpfpRefundTx.length !== 0) obj.intermediateDirectFromCpfpRefundTx = base64FromBytes(message.intermediateDirectFromCpfpRefundTx);
		if (message.pendingKeyTweakPublicKey.length !== 0) obj.pendingKeyTweakPublicKey = base64FromBytes(message.pendingKeyTweakPublicKey);
		if (message.transferReceiverId !== "") obj.transferReceiverId = message.transferReceiverId;
		if (message.transferSenderId !== "") obj.transferSenderId = message.transferSenderId;
		return obj;
	},
	create(base) {
		return TransferLeaf.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTransferLeaf();
		message.leaf = object.leaf !== void 0 && object.leaf !== null ? TreeNode.fromPartial(object.leaf) : void 0;
		message.secretCipher = object.secretCipher ?? new Uint8Array(0);
		switch (object.sig?.$case) {
			case "signature":
				if (object.sig?.signature !== void 0 && object.sig?.signature !== null) message.sig = {
					$case: "signature",
					signature: object.sig.signature
				};
				break;
			case "typedSignature":
				if (object.sig?.typedSignature !== void 0 && object.sig?.typedSignature !== null) message.sig = {
					$case: "typedSignature",
					typedSignature: Signature.fromPartial(object.sig.typedSignature)
				};
				break;
		}
		message.intermediateRefundTx = object.intermediateRefundTx ?? new Uint8Array(0);
		message.intermediateDirectRefundTx = object.intermediateDirectRefundTx ?? new Uint8Array(0);
		message.intermediateDirectFromCpfpRefundTx = object.intermediateDirectFromCpfpRefundTx ?? new Uint8Array(0);
		message.pendingKeyTweakPublicKey = object.pendingKeyTweakPublicKey ?? new Uint8Array(0);
		message.transferReceiverId = object.transferReceiverId ?? "";
		message.transferSenderId = object.transferSenderId ?? "";
		return message;
	}
};
function createBaseTransferManifest() {
	return {
		version: 0,
		transferId: "",
		network: 0,
		transferExpiryTime: void 0,
		edges: [],
		fees: [],
		quoteExpiryTime: void 0
	};
}
const TransferManifest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.version !== 0) writer.uint32(8).uint32(message.version);
		if (message.transferId !== "") writer.uint32(18).string(message.transferId);
		if (message.network !== 0) writer.uint32(24).int32(message.network);
		if (message.transferExpiryTime !== void 0) Timestamp.encode(toTimestamp(message.transferExpiryTime), writer.uint32(34).fork()).join();
		for (const v of message.edges) ManifestEdge.encode(v, writer.uint32(42).fork()).join();
		for (const v of message.fees) FeeComponent.encode(v, writer.uint32(50).fork()).join();
		if (message.quoteExpiryTime !== void 0) Timestamp.encode(toTimestamp(message.quoteExpiryTime), writer.uint32(58).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTransferManifest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.version = reader.uint32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.transferId = reader.string();
					continue;
				case 3:
					if (tag !== 24) break;
					message.network = reader.int32();
					continue;
				case 4:
					if (tag !== 34) break;
					message.transferExpiryTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) break;
					message.edges.push(ManifestEdge.decode(reader, reader.uint32()));
					continue;
				case 6:
					if (tag !== 50) break;
					message.fees.push(FeeComponent.decode(reader, reader.uint32()));
					continue;
				case 7:
					if (tag !== 58) break;
					message.quoteExpiryTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
			transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
			network: isSet(object.network) ? networkFromJSON(object.network) : 0,
			transferExpiryTime: isSet(object.transferExpiryTime) ? fromJsonTimestamp(object.transferExpiryTime) : void 0,
			edges: globalThis.Array.isArray(object?.edges) ? object.edges.map((e) => ManifestEdge.fromJSON(e)) : [],
			fees: globalThis.Array.isArray(object?.fees) ? object.fees.map((e) => FeeComponent.fromJSON(e)) : [],
			quoteExpiryTime: isSet(object.quoteExpiryTime) ? fromJsonTimestamp(object.quoteExpiryTime) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.version !== 0) obj.version = Math.round(message.version);
		if (message.transferId !== "") obj.transferId = message.transferId;
		if (message.network !== 0) obj.network = networkToJSON(message.network);
		if (message.transferExpiryTime !== void 0) obj.transferExpiryTime = message.transferExpiryTime.toISOString();
		if (message.edges?.length) obj.edges = message.edges.map((e) => ManifestEdge.toJSON(e));
		if (message.fees?.length) obj.fees = message.fees.map((e) => FeeComponent.toJSON(e));
		if (message.quoteExpiryTime !== void 0) obj.quoteExpiryTime = message.quoteExpiryTime.toISOString();
		return obj;
	},
	create(base) {
		return TransferManifest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTransferManifest();
		message.version = object.version ?? 0;
		message.transferId = object.transferId ?? "";
		message.network = object.network ?? 0;
		message.transferExpiryTime = object.transferExpiryTime ?? void 0;
		message.edges = object.edges?.map((e) => ManifestEdge.fromPartial(e)) || [];
		message.fees = object.fees?.map((e) => FeeComponent.fromPartial(e)) || [];
		message.quoteExpiryTime = object.quoteExpiryTime ?? void 0;
		return message;
	}
};
function createBaseManifestAmount() {
	return { amount: void 0 };
}
const ManifestAmount = {
	encode(message, writer = new BinaryWriter()) {
		switch (message.amount?.$case) {
			case "sats":
				writer.uint32(8).uint64(message.amount.sats);
				break;
			case "bps":
				writer.uint32(16).uint32(message.amount.bps);
				break;
		}
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseManifestAmount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.amount = {
						$case: "sats",
						sats: longToNumber(reader.uint64())
					};
					continue;
				case 2:
					if (tag !== 16) break;
					message.amount = {
						$case: "bps",
						bps: reader.uint32()
					};
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { amount: isSet(object.sats) ? {
			$case: "sats",
			sats: globalThis.Number(object.sats)
		} : isSet(object.bps) ? {
			$case: "bps",
			bps: globalThis.Number(object.bps)
		} : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.amount?.$case === "sats") obj.sats = Math.round(message.amount.sats);
		else if (message.amount?.$case === "bps") obj.bps = Math.round(message.amount.bps);
		return obj;
	},
	create(base) {
		return ManifestAmount.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseManifestAmount();
		switch (object.amount?.$case) {
			case "sats":
				if (object.amount?.sats !== void 0 && object.amount?.sats !== null) message.amount = {
					$case: "sats",
					sats: object.amount.sats
				};
				break;
			case "bps":
				if (object.amount?.bps !== void 0 && object.amount?.bps !== null) message.amount = {
					$case: "bps",
					bps: object.amount.bps
				};
				break;
		}
		return message;
	}
};
function createBaseManifestEdge() {
	return {
		senderIdentityPublicKey: new Uint8Array(0),
		receiverIdentityPublicKey: new Uint8Array(0),
		amount: void 0
	};
}
const ManifestEdge = {
	encode(message, writer = new BinaryWriter()) {
		if (message.senderIdentityPublicKey.length !== 0) writer.uint32(10).bytes(message.senderIdentityPublicKey);
		if (message.receiverIdentityPublicKey.length !== 0) writer.uint32(18).bytes(message.receiverIdentityPublicKey);
		if (message.amount !== void 0) ManifestAmount.encode(message.amount, writer.uint32(26).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseManifestEdge();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.senderIdentityPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.receiverIdentityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.amount = ManifestAmount.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			senderIdentityPublicKey: isSet(object.senderIdentityPublicKey) ? bytesFromBase64(object.senderIdentityPublicKey) : new Uint8Array(0),
			receiverIdentityPublicKey: isSet(object.receiverIdentityPublicKey) ? bytesFromBase64(object.receiverIdentityPublicKey) : new Uint8Array(0),
			amount: isSet(object.amount) ? ManifestAmount.fromJSON(object.amount) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.senderIdentityPublicKey.length !== 0) obj.senderIdentityPublicKey = base64FromBytes(message.senderIdentityPublicKey);
		if (message.receiverIdentityPublicKey.length !== 0) obj.receiverIdentityPublicKey = base64FromBytes(message.receiverIdentityPublicKey);
		if (message.amount !== void 0) obj.amount = ManifestAmount.toJSON(message.amount);
		return obj;
	},
	create(base) {
		return ManifestEdge.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseManifestEdge();
		message.senderIdentityPublicKey = object.senderIdentityPublicKey ?? new Uint8Array(0);
		message.receiverIdentityPublicKey = object.receiverIdentityPublicKey ?? new Uint8Array(0);
		message.amount = object.amount !== void 0 && object.amount !== null ? ManifestAmount.fromPartial(object.amount) : void 0;
		return message;
	}
};
function createBaseFeeComponent() {
	return {
		source: 0,
		role: 0,
		amount: void 0,
		receiverIdentityPublicKey: new Uint8Array(0)
	};
}
const FeeComponent = {
	encode(message, writer = new BinaryWriter()) {
		if (message.source !== 0) writer.uint32(8).int32(message.source);
		if (message.role !== 0) writer.uint32(16).int32(message.role);
		if (message.amount !== void 0) ManifestAmount.encode(message.amount, writer.uint32(26).fork()).join();
		if (message.receiverIdentityPublicKey.length !== 0) writer.uint32(34).bytes(message.receiverIdentityPublicKey);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseFeeComponent();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.source = reader.int32();
					continue;
				case 2:
					if (tag !== 16) break;
					message.role = reader.int32();
					continue;
				case 3:
					if (tag !== 26) break;
					message.amount = ManifestAmount.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) break;
					message.receiverIdentityPublicKey = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			source: isSet(object.source) ? feeSourceFromJSON(object.source) : 0,
			role: isSet(object.role) ? feeRoleFromJSON(object.role) : 0,
			amount: isSet(object.amount) ? ManifestAmount.fromJSON(object.amount) : void 0,
			receiverIdentityPublicKey: isSet(object.receiverIdentityPublicKey) ? bytesFromBase64(object.receiverIdentityPublicKey) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.source !== 0) obj.source = feeSourceToJSON(message.source);
		if (message.role !== 0) obj.role = feeRoleToJSON(message.role);
		if (message.amount !== void 0) obj.amount = ManifestAmount.toJSON(message.amount);
		if (message.receiverIdentityPublicKey.length !== 0) obj.receiverIdentityPublicKey = base64FromBytes(message.receiverIdentityPublicKey);
		return obj;
	},
	create(base) {
		return FeeComponent.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseFeeComponent();
		message.source = object.source ?? 0;
		message.role = object.role ?? 0;
		message.amount = object.amount !== void 0 && object.amount !== null ? ManifestAmount.fromPartial(object.amount) : void 0;
		message.receiverIdentityPublicKey = object.receiverIdentityPublicKey ?? new Uint8Array(0);
		return message;
	}
};
function createBaseTransferFilter() {
	return {
		participant: void 0,
		transferIds: [],
		limit: 0,
		offset: 0,
		types: [],
		network: 0,
		statuses: [],
		includeAllParticipants: false,
		order: 0,
		timeFilter: void 0
	};
}
const TransferFilter = {
	encode(message, writer = new BinaryWriter()) {
		switch (message.participant?.$case) {
			case "receiverIdentityPublicKey":
				writer.uint32(10).bytes(message.participant.receiverIdentityPublicKey);
				break;
			case "senderIdentityPublicKey":
				writer.uint32(18).bytes(message.participant.senderIdentityPublicKey);
				break;
			case "senderOrReceiverIdentityPublicKey":
				writer.uint32(482).bytes(message.participant.senderOrReceiverIdentityPublicKey);
				break;
		}
		for (const v of message.transferIds) writer.uint32(26).string(v);
		if (message.limit !== 0) writer.uint32(320).int64(message.limit);
		if (message.offset !== 0) writer.uint32(400).int64(message.offset);
		writer.uint32(562).fork();
		for (const v of message.types) writer.int32(v);
		writer.join();
		if (message.network !== 0) writer.uint32(32).int32(message.network);
		writer.uint32(642).fork();
		for (const v of message.statuses) writer.int32(v);
		writer.join();
		if (message.includeAllParticipants !== false) writer.uint32(720).bool(message.includeAllParticipants);
		if (message.order !== 0) writer.uint32(40).int32(message.order);
		switch (message.timeFilter?.$case) {
			case "createdAfter":
				Timestamp.encode(toTimestamp(message.timeFilter.createdAfter), writer.uint32(50).fork()).join();
				break;
			case "createdBefore":
				Timestamp.encode(toTimestamp(message.timeFilter.createdBefore), writer.uint32(58).fork()).join();
				break;
		}
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTransferFilter();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.participant = {
						$case: "receiverIdentityPublicKey",
						receiverIdentityPublicKey: reader.bytes()
					};
					continue;
				case 2:
					if (tag !== 18) break;
					message.participant = {
						$case: "senderIdentityPublicKey",
						senderIdentityPublicKey: reader.bytes()
					};
					continue;
				case 60:
					if (tag !== 482) break;
					message.participant = {
						$case: "senderOrReceiverIdentityPublicKey",
						senderOrReceiverIdentityPublicKey: reader.bytes()
					};
					continue;
				case 3:
					if (tag !== 26) break;
					message.transferIds.push(reader.string());
					continue;
				case 40:
					if (tag !== 320) break;
					message.limit = longToNumber(reader.int64());
					continue;
				case 50:
					if (tag !== 400) break;
					message.offset = longToNumber(reader.int64());
					continue;
				case 70:
					if (tag === 560) {
						message.types.push(reader.int32());
						continue;
					}
					if (tag === 562) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.types.push(reader.int32());
						continue;
					}
					break;
				case 4:
					if (tag !== 32) break;
					message.network = reader.int32();
					continue;
				case 80:
					if (tag === 640) {
						message.statuses.push(reader.int32());
						continue;
					}
					if (tag === 642) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.statuses.push(reader.int32());
						continue;
					}
					break;
				case 90:
					if (tag !== 720) break;
					message.includeAllParticipants = reader.bool();
					continue;
				case 5:
					if (tag !== 40) break;
					message.order = reader.int32();
					continue;
				case 6:
					if (tag !== 50) break;
					message.timeFilter = {
						$case: "createdAfter",
						createdAfter: fromTimestamp(Timestamp.decode(reader, reader.uint32()))
					};
					continue;
				case 7:
					if (tag !== 58) break;
					message.timeFilter = {
						$case: "createdBefore",
						createdBefore: fromTimestamp(Timestamp.decode(reader, reader.uint32()))
					};
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			participant: isSet(object.receiverIdentityPublicKey) ? {
				$case: "receiverIdentityPublicKey",
				receiverIdentityPublicKey: bytesFromBase64(object.receiverIdentityPublicKey)
			} : isSet(object.senderIdentityPublicKey) ? {
				$case: "senderIdentityPublicKey",
				senderIdentityPublicKey: bytesFromBase64(object.senderIdentityPublicKey)
			} : isSet(object.senderOrReceiverIdentityPublicKey) ? {
				$case: "senderOrReceiverIdentityPublicKey",
				senderOrReceiverIdentityPublicKey: bytesFromBase64(object.senderOrReceiverIdentityPublicKey)
			} : void 0,
			transferIds: globalThis.Array.isArray(object?.transferIds) ? object.transferIds.map((e) => globalThis.String(e)) : [],
			limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
			types: globalThis.Array.isArray(object?.types) ? object.types.map((e) => transferTypeFromJSON(e)) : [],
			network: isSet(object.network) ? networkFromJSON(object.network) : 0,
			statuses: globalThis.Array.isArray(object?.statuses) ? object.statuses.map((e) => transferStatusFromJSON(e)) : [],
			includeAllParticipants: isSet(object.includeAllParticipants) ? globalThis.Boolean(object.includeAllParticipants) : false,
			order: isSet(object.order) ? orderFromJSON(object.order) : 0,
			timeFilter: isSet(object.createdAfter) ? {
				$case: "createdAfter",
				createdAfter: fromJsonTimestamp(object.createdAfter)
			} : isSet(object.createdBefore) ? {
				$case: "createdBefore",
				createdBefore: fromJsonTimestamp(object.createdBefore)
			} : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.participant?.$case === "receiverIdentityPublicKey") obj.receiverIdentityPublicKey = base64FromBytes(message.participant.receiverIdentityPublicKey);
		else if (message.participant?.$case === "senderIdentityPublicKey") obj.senderIdentityPublicKey = base64FromBytes(message.participant.senderIdentityPublicKey);
		else if (message.participant?.$case === "senderOrReceiverIdentityPublicKey") obj.senderOrReceiverIdentityPublicKey = base64FromBytes(message.participant.senderOrReceiverIdentityPublicKey);
		if (message.transferIds?.length) obj.transferIds = message.transferIds;
		if (message.limit !== 0) obj.limit = Math.round(message.limit);
		if (message.offset !== 0) obj.offset = Math.round(message.offset);
		if (message.types?.length) obj.types = message.types.map((e) => transferTypeToJSON(e));
		if (message.network !== 0) obj.network = networkToJSON(message.network);
		if (message.statuses?.length) obj.statuses = message.statuses.map((e) => transferStatusToJSON(e));
		if (message.includeAllParticipants !== false) obj.includeAllParticipants = message.includeAllParticipants;
		if (message.order !== 0) obj.order = orderToJSON(message.order);
		if (message.timeFilter?.$case === "createdAfter") obj.createdAfter = message.timeFilter.createdAfter.toISOString();
		else if (message.timeFilter?.$case === "createdBefore") obj.createdBefore = message.timeFilter.createdBefore.toISOString();
		return obj;
	},
	create(base) {
		return TransferFilter.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTransferFilter();
		switch (object.participant?.$case) {
			case "receiverIdentityPublicKey":
				if (object.participant?.receiverIdentityPublicKey !== void 0 && object.participant?.receiverIdentityPublicKey !== null) message.participant = {
					$case: "receiverIdentityPublicKey",
					receiverIdentityPublicKey: object.participant.receiverIdentityPublicKey
				};
				break;
			case "senderIdentityPublicKey":
				if (object.participant?.senderIdentityPublicKey !== void 0 && object.participant?.senderIdentityPublicKey !== null) message.participant = {
					$case: "senderIdentityPublicKey",
					senderIdentityPublicKey: object.participant.senderIdentityPublicKey
				};
				break;
			case "senderOrReceiverIdentityPublicKey":
				if (object.participant?.senderOrReceiverIdentityPublicKey !== void 0 && object.participant?.senderOrReceiverIdentityPublicKey !== null) message.participant = {
					$case: "senderOrReceiverIdentityPublicKey",
					senderOrReceiverIdentityPublicKey: object.participant.senderOrReceiverIdentityPublicKey
				};
				break;
		}
		message.transferIds = object.transferIds?.map((e) => e) || [];
		message.limit = object.limit ?? 0;
		message.offset = object.offset ?? 0;
		message.types = object.types?.map((e) => e) || [];
		message.network = object.network ?? 0;
		message.statuses = object.statuses?.map((e) => e) || [];
		message.includeAllParticipants = object.includeAllParticipants ?? false;
		message.order = object.order ?? 0;
		switch (object.timeFilter?.$case) {
			case "createdAfter":
				if (object.timeFilter?.createdAfter !== void 0 && object.timeFilter?.createdAfter !== null) message.timeFilter = {
					$case: "createdAfter",
					createdAfter: object.timeFilter.createdAfter
				};
				break;
			case "createdBefore":
				if (object.timeFilter?.createdBefore !== void 0 && object.timeFilter?.createdBefore !== null) message.timeFilter = {
					$case: "createdBefore",
					createdBefore: object.timeFilter.createdBefore
				};
				break;
		}
		return message;
	}
};
function createBaseQueryTransfersResponse() {
	return {
		transfers: [],
		offset: 0
	};
}
const QueryTransfersResponse = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.transfers) Transfer.encode(v, writer.uint32(10).fork()).join();
		if (message.offset !== 0) writer.uint32(16).int64(message.offset);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryTransfersResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transfers.push(Transfer.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 16) break;
					message.offset = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transfers: globalThis.Array.isArray(object?.transfers) ? object.transfers.map((e) => Transfer.fromJSON(e)) : [],
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transfers?.length) obj.transfers = message.transfers.map((e) => Transfer.toJSON(e));
		if (message.offset !== 0) obj.offset = Math.round(message.offset);
		return obj;
	},
	create(base) {
		return QueryTransfersResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryTransfersResponse();
		message.transfers = object.transfers?.map((e) => Transfer.fromPartial(e)) || [];
		message.offset = object.offset ?? 0;
		return message;
	}
};
function createBaseQueryTransfersByIdRequest() {
	return {
		transferIds: [],
		network: 0
	};
}
const QueryTransfersByIdRequest = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.transferIds) writer.uint32(10).string(v);
		if (message.network !== 0) writer.uint32(16).int32(message.network);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryTransfersByIdRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transferIds.push(reader.string());
					continue;
				case 2:
					if (tag !== 16) break;
					message.network = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transferIds: globalThis.Array.isArray(object?.transferIds) ? object.transferIds.map((e) => globalThis.String(e)) : [],
			network: isSet(object.network) ? networkFromJSON(object.network) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transferIds?.length) obj.transferIds = message.transferIds;
		if (message.network !== 0) obj.network = networkToJSON(message.network);
		return obj;
	},
	create(base) {
		return QueryTransfersByIdRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryTransfersByIdRequest();
		message.transferIds = object.transferIds?.map((e) => e) || [];
		message.network = object.network ?? 0;
		return message;
	}
};
function createBaseClaimLeafKeyTweak() {
	return {
		leafId: "",
		secretShareTweak: void 0,
		pubkeySharesTweak: {}
	};
}
const ClaimLeafKeyTweak = {
	encode(message, writer = new BinaryWriter()) {
		if (message.leafId !== "") writer.uint32(10).string(message.leafId);
		if (message.secretShareTweak !== void 0) SecretShare.encode(message.secretShareTweak, writer.uint32(18).fork()).join();
		Object.entries(message.pubkeySharesTweak).forEach(([key, value]) => {
			ClaimLeafKeyTweak_PubkeySharesTweakEntry.encode({
				key,
				value
			}, writer.uint32(26).fork()).join();
		});
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseClaimLeafKeyTweak();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leafId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.secretShareTweak = SecretShare.decode(reader, reader.uint32());
					continue;
				case 3: {
					if (tag !== 26) break;
					const entry3 = ClaimLeafKeyTweak_PubkeySharesTweakEntry.decode(reader, reader.uint32());
					if (entry3.value !== void 0) message.pubkeySharesTweak[entry3.key] = entry3.value;
					continue;
				}
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leafId: isSet(object.leafId) ? globalThis.String(object.leafId) : "",
			secretShareTweak: isSet(object.secretShareTweak) ? SecretShare.fromJSON(object.secretShareTweak) : void 0,
			pubkeySharesTweak: isObject(object.pubkeySharesTweak) ? Object.entries(object.pubkeySharesTweak).reduce((acc, [key, value]) => {
				acc[key] = bytesFromBase64(value);
				return acc;
			}, {}) : {}
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leafId !== "") obj.leafId = message.leafId;
		if (message.secretShareTweak !== void 0) obj.secretShareTweak = SecretShare.toJSON(message.secretShareTweak);
		if (message.pubkeySharesTweak) {
			const entries = Object.entries(message.pubkeySharesTweak);
			if (entries.length > 0) {
				obj.pubkeySharesTweak = {};
				entries.forEach(([k, v]) => {
					obj.pubkeySharesTweak[k] = base64FromBytes(v);
				});
			}
		}
		return obj;
	},
	create(base) {
		return ClaimLeafKeyTweak.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseClaimLeafKeyTweak();
		message.leafId = object.leafId ?? "";
		message.secretShareTweak = object.secretShareTweak !== void 0 && object.secretShareTweak !== null ? SecretShare.fromPartial(object.secretShareTweak) : void 0;
		message.pubkeySharesTweak = Object.entries(object.pubkeySharesTweak ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = value;
			return acc;
		}, {});
		return message;
	}
};
function createBaseClaimLeafKeyTweak_PubkeySharesTweakEntry() {
	return {
		key: "",
		value: new Uint8Array(0)
	};
}
const ClaimLeafKeyTweak_PubkeySharesTweakEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value.length !== 0) writer.uint32(18).bytes(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseClaimLeafKeyTweak_PubkeySharesTweakEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value.length !== 0) obj.value = base64FromBytes(message.value);
		return obj;
	},
	create(base) {
		return ClaimLeafKeyTweak_PubkeySharesTweakEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseClaimLeafKeyTweak_PubkeySharesTweakEntry();
		message.key = object.key ?? "";
		message.value = object.value ?? new Uint8Array(0);
		return message;
	}
};
function createBaseClaimLeafKeyTweaks() {
	return { leavesToReceive: [] };
}
const ClaimLeafKeyTweaks = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.leavesToReceive) ClaimLeafKeyTweak.encode(v, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseClaimLeafKeyTweaks();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leavesToReceive.push(ClaimLeafKeyTweak.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { leavesToReceive: globalThis.Array.isArray(object?.leavesToReceive) ? object.leavesToReceive.map((e) => ClaimLeafKeyTweak.fromJSON(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.leavesToReceive?.length) obj.leavesToReceive = message.leavesToReceive.map((e) => ClaimLeafKeyTweak.toJSON(e));
		return obj;
	},
	create(base) {
		return ClaimLeafKeyTweaks.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseClaimLeafKeyTweaks();
		message.leavesToReceive = object.leavesToReceive?.map((e) => ClaimLeafKeyTweak.fromPartial(e)) || [];
		return message;
	}
};
function createBaseClaimPackage() {
	return {
		leavesToClaim: [],
		keyTweakPackage: {},
		userSignature: new Uint8Array(0),
		directLeavesToClaim: [],
		directFromCpfpLeavesToClaim: [],
		hashVariant: 0
	};
}
const ClaimPackage = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.leavesToClaim) UserSignedTxSigningJob.encode(v, writer.uint32(10).fork()).join();
		Object.entries(message.keyTweakPackage).forEach(([key, value]) => {
			ClaimPackage_KeyTweakPackageEntry.encode({
				key,
				value
			}, writer.uint32(18).fork()).join();
		});
		if (message.userSignature.length !== 0) writer.uint32(26).bytes(message.userSignature);
		for (const v of message.directLeavesToClaim) UserSignedTxSigningJob.encode(v, writer.uint32(34).fork()).join();
		for (const v of message.directFromCpfpLeavesToClaim) UserSignedTxSigningJob.encode(v, writer.uint32(42).fork()).join();
		if (message.hashVariant !== 0) writer.uint32(48).int32(message.hashVariant);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseClaimPackage();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leavesToClaim.push(UserSignedTxSigningJob.decode(reader, reader.uint32()));
					continue;
				case 2: {
					if (tag !== 18) break;
					const entry2 = ClaimPackage_KeyTweakPackageEntry.decode(reader, reader.uint32());
					if (entry2.value !== void 0) message.keyTweakPackage[entry2.key] = entry2.value;
					continue;
				}
				case 3:
					if (tag !== 26) break;
					message.userSignature = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) break;
					message.directLeavesToClaim.push(UserSignedTxSigningJob.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) break;
					message.directFromCpfpLeavesToClaim.push(UserSignedTxSigningJob.decode(reader, reader.uint32()));
					continue;
				case 6:
					if (tag !== 48) break;
					message.hashVariant = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leavesToClaim: globalThis.Array.isArray(object?.leavesToClaim) ? object.leavesToClaim.map((e) => UserSignedTxSigningJob.fromJSON(e)) : [],
			keyTweakPackage: isObject(object.keyTweakPackage) ? Object.entries(object.keyTweakPackage).reduce((acc, [key, value]) => {
				acc[key] = bytesFromBase64(value);
				return acc;
			}, {}) : {},
			userSignature: isSet(object.userSignature) ? bytesFromBase64(object.userSignature) : new Uint8Array(0),
			directLeavesToClaim: globalThis.Array.isArray(object?.directLeavesToClaim) ? object.directLeavesToClaim.map((e) => UserSignedTxSigningJob.fromJSON(e)) : [],
			directFromCpfpLeavesToClaim: globalThis.Array.isArray(object?.directFromCpfpLeavesToClaim) ? object.directFromCpfpLeavesToClaim.map((e) => UserSignedTxSigningJob.fromJSON(e)) : [],
			hashVariant: isSet(object.hashVariant) ? hashVariantFromJSON(object.hashVariant) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leavesToClaim?.length) obj.leavesToClaim = message.leavesToClaim.map((e) => UserSignedTxSigningJob.toJSON(e));
		if (message.keyTweakPackage) {
			const entries = Object.entries(message.keyTweakPackage);
			if (entries.length > 0) {
				obj.keyTweakPackage = {};
				entries.forEach(([k, v]) => {
					obj.keyTweakPackage[k] = base64FromBytes(v);
				});
			}
		}
		if (message.userSignature.length !== 0) obj.userSignature = base64FromBytes(message.userSignature);
		if (message.directLeavesToClaim?.length) obj.directLeavesToClaim = message.directLeavesToClaim.map((e) => UserSignedTxSigningJob.toJSON(e));
		if (message.directFromCpfpLeavesToClaim?.length) obj.directFromCpfpLeavesToClaim = message.directFromCpfpLeavesToClaim.map((e) => UserSignedTxSigningJob.toJSON(e));
		if (message.hashVariant !== 0) obj.hashVariant = hashVariantToJSON(message.hashVariant);
		return obj;
	},
	create(base) {
		return ClaimPackage.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseClaimPackage();
		message.leavesToClaim = object.leavesToClaim?.map((e) => UserSignedTxSigningJob.fromPartial(e)) || [];
		message.keyTweakPackage = Object.entries(object.keyTweakPackage ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = value;
			return acc;
		}, {});
		message.userSignature = object.userSignature ?? new Uint8Array(0);
		message.directLeavesToClaim = object.directLeavesToClaim?.map((e) => UserSignedTxSigningJob.fromPartial(e)) || [];
		message.directFromCpfpLeavesToClaim = object.directFromCpfpLeavesToClaim?.map((e) => UserSignedTxSigningJob.fromPartial(e)) || [];
		message.hashVariant = object.hashVariant ?? 0;
		return message;
	}
};
function createBaseClaimPackage_KeyTweakPackageEntry() {
	return {
		key: "",
		value: new Uint8Array(0)
	};
}
const ClaimPackage_KeyTweakPackageEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value.length !== 0) writer.uint32(18).bytes(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseClaimPackage_KeyTweakPackageEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value.length !== 0) obj.value = base64FromBytes(message.value);
		return obj;
	},
	create(base) {
		return ClaimPackage_KeyTweakPackageEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseClaimPackage_KeyTweakPackageEntry();
		message.key = object.key ?? "";
		message.value = object.value ?? new Uint8Array(0);
		return message;
	}
};
function createBaseClaimTransferRequest() {
	return {
		transferId: "",
		ownerIdentityPublicKey: new Uint8Array(0),
		claimPackage: void 0
	};
}
const ClaimTransferRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transferId !== "") writer.uint32(10).string(message.transferId);
		if (message.ownerIdentityPublicKey.length !== 0) writer.uint32(18).bytes(message.ownerIdentityPublicKey);
		if (message.claimPackage !== void 0) ClaimPackage.encode(message.claimPackage, writer.uint32(26).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseClaimTransferRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transferId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.ownerIdentityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.claimPackage = ClaimPackage.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
			ownerIdentityPublicKey: isSet(object.ownerIdentityPublicKey) ? bytesFromBase64(object.ownerIdentityPublicKey) : new Uint8Array(0),
			claimPackage: isSet(object.claimPackage) ? ClaimPackage.fromJSON(object.claimPackage) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transferId !== "") obj.transferId = message.transferId;
		if (message.ownerIdentityPublicKey.length !== 0) obj.ownerIdentityPublicKey = base64FromBytes(message.ownerIdentityPublicKey);
		if (message.claimPackage !== void 0) obj.claimPackage = ClaimPackage.toJSON(message.claimPackage);
		return obj;
	},
	create(base) {
		return ClaimTransferRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseClaimTransferRequest();
		message.transferId = object.transferId ?? "";
		message.ownerIdentityPublicKey = object.ownerIdentityPublicKey ?? new Uint8Array(0);
		message.claimPackage = object.claimPackage !== void 0 && object.claimPackage !== null ? ClaimPackage.fromPartial(object.claimPackage) : void 0;
		return message;
	}
};
function createBaseClaimTransferResponse() {
	return { transfer: void 0 };
}
const ClaimTransferResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transfer !== void 0) Transfer.encode(message.transfer, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseClaimTransferResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transfer = Transfer.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { transfer: isSet(object.transfer) ? Transfer.fromJSON(object.transfer) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.transfer !== void 0) obj.transfer = Transfer.toJSON(message.transfer);
		return obj;
	},
	create(base) {
		return ClaimTransferResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseClaimTransferResponse();
		message.transfer = object.transfer !== void 0 && object.transfer !== null ? Transfer.fromPartial(object.transfer) : void 0;
		return message;
	}
};
function createBaseClaimTransferTweakKeysRequest() {
	return {
		transferId: "",
		ownerIdentityPublicKey: new Uint8Array(0),
		leavesToReceive: []
	};
}
const ClaimTransferTweakKeysRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transferId !== "") writer.uint32(10).string(message.transferId);
		if (message.ownerIdentityPublicKey.length !== 0) writer.uint32(18).bytes(message.ownerIdentityPublicKey);
		for (const v of message.leavesToReceive) ClaimLeafKeyTweak.encode(v, writer.uint32(26).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseClaimTransferTweakKeysRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transferId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.ownerIdentityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.leavesToReceive.push(ClaimLeafKeyTweak.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
			ownerIdentityPublicKey: isSet(object.ownerIdentityPublicKey) ? bytesFromBase64(object.ownerIdentityPublicKey) : new Uint8Array(0),
			leavesToReceive: globalThis.Array.isArray(object?.leavesToReceive) ? object.leavesToReceive.map((e) => ClaimLeafKeyTweak.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transferId !== "") obj.transferId = message.transferId;
		if (message.ownerIdentityPublicKey.length !== 0) obj.ownerIdentityPublicKey = base64FromBytes(message.ownerIdentityPublicKey);
		if (message.leavesToReceive?.length) obj.leavesToReceive = message.leavesToReceive.map((e) => ClaimLeafKeyTweak.toJSON(e));
		return obj;
	},
	create(base) {
		return ClaimTransferTweakKeysRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseClaimTransferTweakKeysRequest();
		message.transferId = object.transferId ?? "";
		message.ownerIdentityPublicKey = object.ownerIdentityPublicKey ?? new Uint8Array(0);
		message.leavesToReceive = object.leavesToReceive?.map((e) => ClaimLeafKeyTweak.fromPartial(e)) || [];
		return message;
	}
};
function createBaseClaimTransferSignRefundsRequest() {
	return {
		transferId: "",
		ownerIdentityPublicKey: new Uint8Array(0),
		signingJobs: []
	};
}
const ClaimTransferSignRefundsRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transferId !== "") writer.uint32(10).string(message.transferId);
		if (message.ownerIdentityPublicKey.length !== 0) writer.uint32(18).bytes(message.ownerIdentityPublicKey);
		for (const v of message.signingJobs) LeafRefundTxSigningJob.encode(v, writer.uint32(26).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseClaimTransferSignRefundsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transferId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.ownerIdentityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.signingJobs.push(LeafRefundTxSigningJob.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
			ownerIdentityPublicKey: isSet(object.ownerIdentityPublicKey) ? bytesFromBase64(object.ownerIdentityPublicKey) : new Uint8Array(0),
			signingJobs: globalThis.Array.isArray(object?.signingJobs) ? object.signingJobs.map((e) => LeafRefundTxSigningJob.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transferId !== "") obj.transferId = message.transferId;
		if (message.ownerIdentityPublicKey.length !== 0) obj.ownerIdentityPublicKey = base64FromBytes(message.ownerIdentityPublicKey);
		if (message.signingJobs?.length) obj.signingJobs = message.signingJobs.map((e) => LeafRefundTxSigningJob.toJSON(e));
		return obj;
	},
	create(base) {
		return ClaimTransferSignRefundsRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseClaimTransferSignRefundsRequest();
		message.transferId = object.transferId ?? "";
		message.ownerIdentityPublicKey = object.ownerIdentityPublicKey ?? new Uint8Array(0);
		message.signingJobs = object.signingJobs?.map((e) => LeafRefundTxSigningJob.fromPartial(e)) || [];
		return message;
	}
};
function createBaseClaimTransferSignRefundsResponse() {
	return { signingResults: [] };
}
const ClaimTransferSignRefundsResponse = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.signingResults) LeafRefundTxSigningResult.encode(v, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseClaimTransferSignRefundsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.signingResults.push(LeafRefundTxSigningResult.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { signingResults: globalThis.Array.isArray(object?.signingResults) ? object.signingResults.map((e) => LeafRefundTxSigningResult.fromJSON(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.signingResults?.length) obj.signingResults = message.signingResults.map((e) => LeafRefundTxSigningResult.toJSON(e));
		return obj;
	},
	create(base) {
		return ClaimTransferSignRefundsResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseClaimTransferSignRefundsResponse();
		message.signingResults = object.signingResults?.map((e) => LeafRefundTxSigningResult.fromPartial(e)) || [];
		return message;
	}
};
function createBaseStorePreimageShareV2Request() {
	return {
		paymentHash: new Uint8Array(0),
		encryptedPreimageShares: {},
		threshold: 0,
		invoiceString: "",
		userIdentityPublicKey: new Uint8Array(0)
	};
}
const StorePreimageShareV2Request = {
	encode(message, writer = new BinaryWriter()) {
		if (message.paymentHash.length !== 0) writer.uint32(10).bytes(message.paymentHash);
		Object.entries(message.encryptedPreimageShares).forEach(([key, value]) => {
			StorePreimageShareV2Request_EncryptedPreimageSharesEntry.encode({
				key,
				value
			}, writer.uint32(18).fork()).join();
		});
		if (message.threshold !== 0) writer.uint32(24).uint32(message.threshold);
		if (message.invoiceString !== "") writer.uint32(34).string(message.invoiceString);
		if (message.userIdentityPublicKey.length !== 0) writer.uint32(42).bytes(message.userIdentityPublicKey);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseStorePreimageShareV2Request();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.paymentHash = reader.bytes();
					continue;
				case 2: {
					if (tag !== 18) break;
					const entry2 = StorePreimageShareV2Request_EncryptedPreimageSharesEntry.decode(reader, reader.uint32());
					if (entry2.value !== void 0) message.encryptedPreimageShares[entry2.key] = entry2.value;
					continue;
				}
				case 3:
					if (tag !== 24) break;
					message.threshold = reader.uint32();
					continue;
				case 4:
					if (tag !== 34) break;
					message.invoiceString = reader.string();
					continue;
				case 5:
					if (tag !== 42) break;
					message.userIdentityPublicKey = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			paymentHash: isSet(object.paymentHash) ? bytesFromBase64(object.paymentHash) : new Uint8Array(0),
			encryptedPreimageShares: isObject(object.encryptedPreimageShares) ? Object.entries(object.encryptedPreimageShares).reduce((acc, [key, value]) => {
				acc[key] = bytesFromBase64(value);
				return acc;
			}, {}) : {},
			threshold: isSet(object.threshold) ? globalThis.Number(object.threshold) : 0,
			invoiceString: isSet(object.invoiceString) ? globalThis.String(object.invoiceString) : "",
			userIdentityPublicKey: isSet(object.userIdentityPublicKey) ? bytesFromBase64(object.userIdentityPublicKey) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.paymentHash.length !== 0) obj.paymentHash = base64FromBytes(message.paymentHash);
		if (message.encryptedPreimageShares) {
			const entries = Object.entries(message.encryptedPreimageShares);
			if (entries.length > 0) {
				obj.encryptedPreimageShares = {};
				entries.forEach(([k, v]) => {
					obj.encryptedPreimageShares[k] = base64FromBytes(v);
				});
			}
		}
		if (message.threshold !== 0) obj.threshold = Math.round(message.threshold);
		if (message.invoiceString !== "") obj.invoiceString = message.invoiceString;
		if (message.userIdentityPublicKey.length !== 0) obj.userIdentityPublicKey = base64FromBytes(message.userIdentityPublicKey);
		return obj;
	},
	create(base) {
		return StorePreimageShareV2Request.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseStorePreimageShareV2Request();
		message.paymentHash = object.paymentHash ?? new Uint8Array(0);
		message.encryptedPreimageShares = Object.entries(object.encryptedPreimageShares ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = value;
			return acc;
		}, {});
		message.threshold = object.threshold ?? 0;
		message.invoiceString = object.invoiceString ?? "";
		message.userIdentityPublicKey = object.userIdentityPublicKey ?? new Uint8Array(0);
		return message;
	}
};
function createBaseStorePreimageShareV2Request_EncryptedPreimageSharesEntry() {
	return {
		key: "",
		value: new Uint8Array(0)
	};
}
const StorePreimageShareV2Request_EncryptedPreimageSharesEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value.length !== 0) writer.uint32(18).bytes(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseStorePreimageShareV2Request_EncryptedPreimageSharesEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value.length !== 0) obj.value = base64FromBytes(message.value);
		return obj;
	},
	create(base) {
		return StorePreimageShareV2Request_EncryptedPreimageSharesEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseStorePreimageShareV2Request_EncryptedPreimageSharesEntry();
		message.key = object.key ?? "";
		message.value = object.value ?? new Uint8Array(0);
		return message;
	}
};
function createBaseRequestedSigningCommitments() {
	return { signingNonceCommitments: {} };
}
const RequestedSigningCommitments = {
	encode(message, writer = new BinaryWriter()) {
		Object.entries(message.signingNonceCommitments).forEach(([key, value]) => {
			RequestedSigningCommitments_SigningNonceCommitmentsEntry.encode({
				key,
				value
			}, writer.uint32(10).fork()).join();
		});
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRequestedSigningCommitments();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1: {
					if (tag !== 10) break;
					const entry1 = RequestedSigningCommitments_SigningNonceCommitmentsEntry.decode(reader, reader.uint32());
					if (entry1.value !== void 0) message.signingNonceCommitments[entry1.key] = entry1.value;
					continue;
				}
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { signingNonceCommitments: isObject(object.signingNonceCommitments) ? Object.entries(object.signingNonceCommitments).reduce((acc, [key, value]) => {
			acc[key] = SigningCommitment.fromJSON(value);
			return acc;
		}, {}) : {} };
	},
	toJSON(message) {
		const obj = {};
		if (message.signingNonceCommitments) {
			const entries = Object.entries(message.signingNonceCommitments);
			if (entries.length > 0) {
				obj.signingNonceCommitments = {};
				entries.forEach(([k, v]) => {
					obj.signingNonceCommitments[k] = SigningCommitment.toJSON(v);
				});
			}
		}
		return obj;
	},
	create(base) {
		return RequestedSigningCommitments.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRequestedSigningCommitments();
		message.signingNonceCommitments = Object.entries(object.signingNonceCommitments ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = SigningCommitment.fromPartial(value);
			return acc;
		}, {});
		return message;
	}
};
function createBaseRequestedSigningCommitments_SigningNonceCommitmentsEntry() {
	return {
		key: "",
		value: void 0
	};
}
const RequestedSigningCommitments_SigningNonceCommitmentsEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value !== void 0) SigningCommitment.encode(message.value, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRequestedSigningCommitments_SigningNonceCommitmentsEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = SigningCommitment.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? SigningCommitment.fromJSON(object.value) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value !== void 0) obj.value = SigningCommitment.toJSON(message.value);
		return obj;
	},
	create(base) {
		return RequestedSigningCommitments_SigningNonceCommitmentsEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRequestedSigningCommitments_SigningNonceCommitmentsEntry();
		message.key = object.key ?? "";
		message.value = object.value !== void 0 && object.value !== null ? SigningCommitment.fromPartial(object.value) : void 0;
		return message;
	}
};
function createBaseGetSigningCommitmentsRequest() {
	return {
		nodeIds: [],
		count: 0,
		nodeIdCount: 0
	};
}
const GetSigningCommitmentsRequest = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.nodeIds) writer.uint32(10).string(v);
		if (message.count !== 0) writer.uint32(16).uint32(message.count);
		if (message.nodeIdCount !== 0) writer.uint32(24).uint32(message.nodeIdCount);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseGetSigningCommitmentsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.nodeIds.push(reader.string());
					continue;
				case 2:
					if (tag !== 16) break;
					message.count = reader.uint32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.nodeIdCount = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			nodeIds: globalThis.Array.isArray(object?.nodeIds) ? object.nodeIds.map((e) => globalThis.String(e)) : [],
			count: isSet(object.count) ? globalThis.Number(object.count) : 0,
			nodeIdCount: isSet(object.nodeIdCount) ? globalThis.Number(object.nodeIdCount) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.nodeIds?.length) obj.nodeIds = message.nodeIds;
		if (message.count !== 0) obj.count = Math.round(message.count);
		if (message.nodeIdCount !== 0) obj.nodeIdCount = Math.round(message.nodeIdCount);
		return obj;
	},
	create(base) {
		return GetSigningCommitmentsRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseGetSigningCommitmentsRequest();
		message.nodeIds = object.nodeIds?.map((e) => e) || [];
		message.count = object.count ?? 0;
		message.nodeIdCount = object.nodeIdCount ?? 0;
		return message;
	}
};
function createBaseGetSigningCommitmentsResponse() {
	return { signingCommitments: [] };
}
const GetSigningCommitmentsResponse = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.signingCommitments) RequestedSigningCommitments.encode(v, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseGetSigningCommitmentsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.signingCommitments.push(RequestedSigningCommitments.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { signingCommitments: globalThis.Array.isArray(object?.signingCommitments) ? object.signingCommitments.map((e) => RequestedSigningCommitments.fromJSON(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.signingCommitments?.length) obj.signingCommitments = message.signingCommitments.map((e) => RequestedSigningCommitments.toJSON(e));
		return obj;
	},
	create(base) {
		return GetSigningCommitmentsResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseGetSigningCommitmentsResponse();
		message.signingCommitments = object.signingCommitments?.map((e) => RequestedSigningCommitments.fromPartial(e)) || [];
		return message;
	}
};
function createBaseSigningCommitments() {
	return { signingCommitments: {} };
}
const SigningCommitments = {
	encode(message, writer = new BinaryWriter()) {
		Object.entries(message.signingCommitments).forEach(([key, value]) => {
			SigningCommitments_SigningCommitmentsEntry.encode({
				key,
				value
			}, writer.uint32(10).fork()).join();
		});
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSigningCommitments();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1: {
					if (tag !== 10) break;
					const entry1 = SigningCommitments_SigningCommitmentsEntry.decode(reader, reader.uint32());
					if (entry1.value !== void 0) message.signingCommitments[entry1.key] = entry1.value;
					continue;
				}
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { signingCommitments: isObject(object.signingCommitments) ? Object.entries(object.signingCommitments).reduce((acc, [key, value]) => {
			acc[key] = SigningCommitment.fromJSON(value);
			return acc;
		}, {}) : {} };
	},
	toJSON(message) {
		const obj = {};
		if (message.signingCommitments) {
			const entries = Object.entries(message.signingCommitments);
			if (entries.length > 0) {
				obj.signingCommitments = {};
				entries.forEach(([k, v]) => {
					obj.signingCommitments[k] = SigningCommitment.toJSON(v);
				});
			}
		}
		return obj;
	},
	create(base) {
		return SigningCommitments.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSigningCommitments();
		message.signingCommitments = Object.entries(object.signingCommitments ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = SigningCommitment.fromPartial(value);
			return acc;
		}, {});
		return message;
	}
};
function createBaseSigningCommitments_SigningCommitmentsEntry() {
	return {
		key: "",
		value: void 0
	};
}
const SigningCommitments_SigningCommitmentsEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value !== void 0) SigningCommitment.encode(message.value, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSigningCommitments_SigningCommitmentsEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = SigningCommitment.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? SigningCommitment.fromJSON(object.value) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value !== void 0) obj.value = SigningCommitment.toJSON(message.value);
		return obj;
	},
	create(base) {
		return SigningCommitments_SigningCommitmentsEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSigningCommitments_SigningCommitmentsEntry();
		message.key = object.key ?? "";
		message.value = object.value !== void 0 && object.value !== null ? SigningCommitment.fromPartial(object.value) : void 0;
		return message;
	}
};
function createBaseInvoiceAmountProof() {
	return { bolt11Invoice: "" };
}
const InvoiceAmountProof = {
	encode(message, writer = new BinaryWriter()) {
		if (message.bolt11Invoice !== "") writer.uint32(10).string(message.bolt11Invoice);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseInvoiceAmountProof();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.bolt11Invoice = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { bolt11Invoice: isSet(object.bolt11Invoice) ? globalThis.String(object.bolt11Invoice) : "" };
	},
	toJSON(message) {
		const obj = {};
		if (message.bolt11Invoice !== "") obj.bolt11Invoice = message.bolt11Invoice;
		return obj;
	},
	create(base) {
		return InvoiceAmountProof.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseInvoiceAmountProof();
		message.bolt11Invoice = object.bolt11Invoice ?? "";
		return message;
	}
};
function createBaseInvoiceAmount() {
	return {
		valueSats: 0,
		invoiceAmountProof: void 0
	};
}
const InvoiceAmount = {
	encode(message, writer = new BinaryWriter()) {
		if (message.valueSats !== 0) writer.uint32(8).uint64(message.valueSats);
		if (message.invoiceAmountProof !== void 0) InvoiceAmountProof.encode(message.invoiceAmountProof, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseInvoiceAmount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.valueSats = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 18) break;
					message.invoiceAmountProof = InvoiceAmountProof.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			valueSats: isSet(object.valueSats) ? globalThis.Number(object.valueSats) : 0,
			invoiceAmountProof: isSet(object.invoiceAmountProof) ? InvoiceAmountProof.fromJSON(object.invoiceAmountProof) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.valueSats !== 0) obj.valueSats = Math.round(message.valueSats);
		if (message.invoiceAmountProof !== void 0) obj.invoiceAmountProof = InvoiceAmountProof.toJSON(message.invoiceAmountProof);
		return obj;
	},
	create(base) {
		return InvoiceAmount.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseInvoiceAmount();
		message.valueSats = object.valueSats ?? 0;
		message.invoiceAmountProof = object.invoiceAmountProof !== void 0 && object.invoiceAmountProof !== null ? InvoiceAmountProof.fromPartial(object.invoiceAmountProof) : void 0;
		return message;
	}
};
function createBaseInitiatePreimageSwapRequest() {
	return {
		paymentHash: new Uint8Array(0),
		invoiceAmount: void 0,
		reason: 0,
		receiverIdentityPublicKey: new Uint8Array(0),
		feeSats: 0,
		transferRequest: void 0
	};
}
const InitiatePreimageSwapRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.paymentHash.length !== 0) writer.uint32(10).bytes(message.paymentHash);
		if (message.invoiceAmount !== void 0) InvoiceAmount.encode(message.invoiceAmount, writer.uint32(18).fork()).join();
		if (message.reason !== 0) writer.uint32(24).int32(message.reason);
		if (message.receiverIdentityPublicKey.length !== 0) writer.uint32(42).bytes(message.receiverIdentityPublicKey);
		if (message.feeSats !== 0) writer.uint32(48).uint64(message.feeSats);
		if (message.transferRequest !== void 0) StartTransferRequest.encode(message.transferRequest, writer.uint32(58).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseInitiatePreimageSwapRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.paymentHash = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.invoiceAmount = InvoiceAmount.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) break;
					message.reason = reader.int32();
					continue;
				case 5:
					if (tag !== 42) break;
					message.receiverIdentityPublicKey = reader.bytes();
					continue;
				case 6:
					if (tag !== 48) break;
					message.feeSats = longToNumber(reader.uint64());
					continue;
				case 7:
					if (tag !== 58) break;
					message.transferRequest = StartTransferRequest.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			paymentHash: isSet(object.paymentHash) ? bytesFromBase64(object.paymentHash) : new Uint8Array(0),
			invoiceAmount: isSet(object.invoiceAmount) ? InvoiceAmount.fromJSON(object.invoiceAmount) : void 0,
			reason: isSet(object.reason) ? initiatePreimageSwapRequest_ReasonFromJSON(object.reason) : 0,
			receiverIdentityPublicKey: isSet(object.receiverIdentityPublicKey) ? bytesFromBase64(object.receiverIdentityPublicKey) : new Uint8Array(0),
			feeSats: isSet(object.feeSats) ? globalThis.Number(object.feeSats) : 0,
			transferRequest: isSet(object.transferRequest) ? StartTransferRequest.fromJSON(object.transferRequest) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.paymentHash.length !== 0) obj.paymentHash = base64FromBytes(message.paymentHash);
		if (message.invoiceAmount !== void 0) obj.invoiceAmount = InvoiceAmount.toJSON(message.invoiceAmount);
		if (message.reason !== 0) obj.reason = initiatePreimageSwapRequest_ReasonToJSON(message.reason);
		if (message.receiverIdentityPublicKey.length !== 0) obj.receiverIdentityPublicKey = base64FromBytes(message.receiverIdentityPublicKey);
		if (message.feeSats !== 0) obj.feeSats = Math.round(message.feeSats);
		if (message.transferRequest !== void 0) obj.transferRequest = StartTransferRequest.toJSON(message.transferRequest);
		return obj;
	},
	create(base) {
		return InitiatePreimageSwapRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseInitiatePreimageSwapRequest();
		message.paymentHash = object.paymentHash ?? new Uint8Array(0);
		message.invoiceAmount = object.invoiceAmount !== void 0 && object.invoiceAmount !== null ? InvoiceAmount.fromPartial(object.invoiceAmount) : void 0;
		message.reason = object.reason ?? 0;
		message.receiverIdentityPublicKey = object.receiverIdentityPublicKey ?? new Uint8Array(0);
		message.feeSats = object.feeSats ?? 0;
		message.transferRequest = object.transferRequest !== void 0 && object.transferRequest !== null ? StartTransferRequest.fromPartial(object.transferRequest) : void 0;
		return message;
	}
};
function createBaseInitiatePreimageSwapV4Request() {
	return {
		paymentHash: new Uint8Array(0),
		invoiceAmount: void 0,
		reason: 0,
		attestorIdentityPublicKey: new Uint8Array(0),
		attestorSignature: new Uint8Array(0),
		transferV3Request: void 0
	};
}
const InitiatePreimageSwapV4Request = {
	encode(message, writer = new BinaryWriter()) {
		if (message.paymentHash.length !== 0) writer.uint32(10).bytes(message.paymentHash);
		if (message.invoiceAmount !== void 0) InvoiceAmount.encode(message.invoiceAmount, writer.uint32(18).fork()).join();
		if (message.reason !== 0) writer.uint32(24).int32(message.reason);
		if (message.attestorIdentityPublicKey.length !== 0) writer.uint32(34).bytes(message.attestorIdentityPublicKey);
		if (message.attestorSignature.length !== 0) writer.uint32(42).bytes(message.attestorSignature);
		if (message.transferV3Request !== void 0) StartTransferV3Request.encode(message.transferV3Request, writer.uint32(50).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseInitiatePreimageSwapV4Request();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.paymentHash = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.invoiceAmount = InvoiceAmount.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) break;
					message.reason = reader.int32();
					continue;
				case 4:
					if (tag !== 34) break;
					message.attestorIdentityPublicKey = reader.bytes();
					continue;
				case 5:
					if (tag !== 42) break;
					message.attestorSignature = reader.bytes();
					continue;
				case 6:
					if (tag !== 50) break;
					message.transferV3Request = StartTransferV3Request.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			paymentHash: isSet(object.paymentHash) ? bytesFromBase64(object.paymentHash) : new Uint8Array(0),
			invoiceAmount: isSet(object.invoiceAmount) ? InvoiceAmount.fromJSON(object.invoiceAmount) : void 0,
			reason: isSet(object.reason) ? initiatePreimageSwapRequest_ReasonFromJSON(object.reason) : 0,
			attestorIdentityPublicKey: isSet(object.attestorIdentityPublicKey) ? bytesFromBase64(object.attestorIdentityPublicKey) : new Uint8Array(0),
			attestorSignature: isSet(object.attestorSignature) ? bytesFromBase64(object.attestorSignature) : new Uint8Array(0),
			transferV3Request: isSet(object.transferV3Request) ? StartTransferV3Request.fromJSON(object.transferV3Request) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.paymentHash.length !== 0) obj.paymentHash = base64FromBytes(message.paymentHash);
		if (message.invoiceAmount !== void 0) obj.invoiceAmount = InvoiceAmount.toJSON(message.invoiceAmount);
		if (message.reason !== 0) obj.reason = initiatePreimageSwapRequest_ReasonToJSON(message.reason);
		if (message.attestorIdentityPublicKey.length !== 0) obj.attestorIdentityPublicKey = base64FromBytes(message.attestorIdentityPublicKey);
		if (message.attestorSignature.length !== 0) obj.attestorSignature = base64FromBytes(message.attestorSignature);
		if (message.transferV3Request !== void 0) obj.transferV3Request = StartTransferV3Request.toJSON(message.transferV3Request);
		return obj;
	},
	create(base) {
		return InitiatePreimageSwapV4Request.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseInitiatePreimageSwapV4Request();
		message.paymentHash = object.paymentHash ?? new Uint8Array(0);
		message.invoiceAmount = object.invoiceAmount !== void 0 && object.invoiceAmount !== null ? InvoiceAmount.fromPartial(object.invoiceAmount) : void 0;
		message.reason = object.reason ?? 0;
		message.attestorIdentityPublicKey = object.attestorIdentityPublicKey ?? new Uint8Array(0);
		message.attestorSignature = object.attestorSignature ?? new Uint8Array(0);
		message.transferV3Request = object.transferV3Request !== void 0 && object.transferV3Request !== null ? StartTransferV3Request.fromPartial(object.transferV3Request) : void 0;
		return message;
	}
};
function createBaseInitiatePreimageSwapResponse() {
	return {
		preimage: new Uint8Array(0),
		transfer: void 0
	};
}
const InitiatePreimageSwapResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.preimage.length !== 0) writer.uint32(10).bytes(message.preimage);
		if (message.transfer !== void 0) Transfer.encode(message.transfer, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseInitiatePreimageSwapResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.preimage = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.transfer = Transfer.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			preimage: isSet(object.preimage) ? bytesFromBase64(object.preimage) : new Uint8Array(0),
			transfer: isSet(object.transfer) ? Transfer.fromJSON(object.transfer) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.preimage.length !== 0) obj.preimage = base64FromBytes(message.preimage);
		if (message.transfer !== void 0) obj.transfer = Transfer.toJSON(message.transfer);
		return obj;
	},
	create(base) {
		return InitiatePreimageSwapResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseInitiatePreimageSwapResponse();
		message.preimage = object.preimage ?? new Uint8Array(0);
		message.transfer = object.transfer !== void 0 && object.transfer !== null ? Transfer.fromPartial(object.transfer) : void 0;
		return message;
	}
};
function createBaseOutPoint() {
	return {
		txid: new Uint8Array(0),
		vout: 0
	};
}
const OutPoint = {
	encode(message, writer = new BinaryWriter()) {
		if (message.txid.length !== 0) writer.uint32(10).bytes(message.txid);
		if (message.vout !== 0) writer.uint32(16).uint32(message.vout);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseOutPoint();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.txid = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) break;
					message.vout = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			txid: isSet(object.txid) ? bytesFromBase64(object.txid) : new Uint8Array(0),
			vout: isSet(object.vout) ? globalThis.Number(object.vout) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.txid.length !== 0) obj.txid = base64FromBytes(message.txid);
		if (message.vout !== 0) obj.vout = Math.round(message.vout);
		return obj;
	},
	create(base) {
		return OutPoint.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseOutPoint();
		message.txid = object.txid ?? new Uint8Array(0);
		message.vout = object.vout ?? 0;
		return message;
	}
};
function createBaseCooperativeExitRequest() {
	return {
		transfer: void 0,
		exitId: "",
		exitTxid: new Uint8Array(0),
		connectorTx: new Uint8Array(0)
	};
}
const CooperativeExitRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transfer !== void 0) StartTransferRequest.encode(message.transfer, writer.uint32(10).fork()).join();
		if (message.exitId !== "") writer.uint32(18).string(message.exitId);
		if (message.exitTxid.length !== 0) writer.uint32(26).bytes(message.exitTxid);
		if (message.connectorTx.length !== 0) writer.uint32(34).bytes(message.connectorTx);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCooperativeExitRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transfer = StartTransferRequest.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.exitId = reader.string();
					continue;
				case 3:
					if (tag !== 26) break;
					message.exitTxid = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) break;
					message.connectorTx = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transfer: isSet(object.transfer) ? StartTransferRequest.fromJSON(object.transfer) : void 0,
			exitId: isSet(object.exitId) ? globalThis.String(object.exitId) : "",
			exitTxid: isSet(object.exitTxid) ? bytesFromBase64(object.exitTxid) : new Uint8Array(0),
			connectorTx: isSet(object.connectorTx) ? bytesFromBase64(object.connectorTx) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transfer !== void 0) obj.transfer = StartTransferRequest.toJSON(message.transfer);
		if (message.exitId !== "") obj.exitId = message.exitId;
		if (message.exitTxid.length !== 0) obj.exitTxid = base64FromBytes(message.exitTxid);
		if (message.connectorTx.length !== 0) obj.connectorTx = base64FromBytes(message.connectorTx);
		return obj;
	},
	create(base) {
		return CooperativeExitRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCooperativeExitRequest();
		message.transfer = object.transfer !== void 0 && object.transfer !== null ? StartTransferRequest.fromPartial(object.transfer) : void 0;
		message.exitId = object.exitId ?? "";
		message.exitTxid = object.exitTxid ?? new Uint8Array(0);
		message.connectorTx = object.connectorTx ?? new Uint8Array(0);
		return message;
	}
};
function createBaseCooperativeExitResponse() {
	return {
		transfer: void 0,
		signingResults: []
	};
}
const CooperativeExitResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transfer !== void 0) Transfer.encode(message.transfer, writer.uint32(10).fork()).join();
		for (const v of message.signingResults) LeafRefundTxSigningResult.encode(v, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCooperativeExitResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transfer = Transfer.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.signingResults.push(LeafRefundTxSigningResult.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transfer: isSet(object.transfer) ? Transfer.fromJSON(object.transfer) : void 0,
			signingResults: globalThis.Array.isArray(object?.signingResults) ? object.signingResults.map((e) => LeafRefundTxSigningResult.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transfer !== void 0) obj.transfer = Transfer.toJSON(message.transfer);
		if (message.signingResults?.length) obj.signingResults = message.signingResults.map((e) => LeafRefundTxSigningResult.toJSON(e));
		return obj;
	},
	create(base) {
		return CooperativeExitResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCooperativeExitResponse();
		message.transfer = object.transfer !== void 0 && object.transfer !== null ? Transfer.fromPartial(object.transfer) : void 0;
		message.signingResults = object.signingResults?.map((e) => LeafRefundTxSigningResult.fromPartial(e)) || [];
		return message;
	}
};
function createBaseCounterLeafSwapRequest() {
	return {
		transfer: void 0,
		swapId: "",
		adaptorPublicKey: new Uint8Array(0),
		directAdaptorPublicKey: new Uint8Array(0),
		directFromCpfpAdaptorPublicKey: new Uint8Array(0)
	};
}
const CounterLeafSwapRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transfer !== void 0) StartTransferRequest.encode(message.transfer, writer.uint32(10).fork()).join();
		if (message.swapId !== "") writer.uint32(18).string(message.swapId);
		if (message.adaptorPublicKey.length !== 0) writer.uint32(26).bytes(message.adaptorPublicKey);
		if (message.directAdaptorPublicKey.length !== 0) writer.uint32(34).bytes(message.directAdaptorPublicKey);
		if (message.directFromCpfpAdaptorPublicKey.length !== 0) writer.uint32(42).bytes(message.directFromCpfpAdaptorPublicKey);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCounterLeafSwapRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transfer = StartTransferRequest.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.swapId = reader.string();
					continue;
				case 3:
					if (tag !== 26) break;
					message.adaptorPublicKey = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) break;
					message.directAdaptorPublicKey = reader.bytes();
					continue;
				case 5:
					if (tag !== 42) break;
					message.directFromCpfpAdaptorPublicKey = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transfer: isSet(object.transfer) ? StartTransferRequest.fromJSON(object.transfer) : void 0,
			swapId: isSet(object.swapId) ? globalThis.String(object.swapId) : "",
			adaptorPublicKey: isSet(object.adaptorPublicKey) ? bytesFromBase64(object.adaptorPublicKey) : new Uint8Array(0),
			directAdaptorPublicKey: isSet(object.directAdaptorPublicKey) ? bytesFromBase64(object.directAdaptorPublicKey) : new Uint8Array(0),
			directFromCpfpAdaptorPublicKey: isSet(object.directFromCpfpAdaptorPublicKey) ? bytesFromBase64(object.directFromCpfpAdaptorPublicKey) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transfer !== void 0) obj.transfer = StartTransferRequest.toJSON(message.transfer);
		if (message.swapId !== "") obj.swapId = message.swapId;
		if (message.adaptorPublicKey.length !== 0) obj.adaptorPublicKey = base64FromBytes(message.adaptorPublicKey);
		if (message.directAdaptorPublicKey.length !== 0) obj.directAdaptorPublicKey = base64FromBytes(message.directAdaptorPublicKey);
		if (message.directFromCpfpAdaptorPublicKey.length !== 0) obj.directFromCpfpAdaptorPublicKey = base64FromBytes(message.directFromCpfpAdaptorPublicKey);
		return obj;
	},
	create(base) {
		return CounterLeafSwapRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCounterLeafSwapRequest();
		message.transfer = object.transfer !== void 0 && object.transfer !== null ? StartTransferRequest.fromPartial(object.transfer) : void 0;
		message.swapId = object.swapId ?? "";
		message.adaptorPublicKey = object.adaptorPublicKey ?? new Uint8Array(0);
		message.directAdaptorPublicKey = object.directAdaptorPublicKey ?? new Uint8Array(0);
		message.directFromCpfpAdaptorPublicKey = object.directFromCpfpAdaptorPublicKey ?? new Uint8Array(0);
		return message;
	}
};
function createBaseCounterLeafSwapResponse() {
	return {
		transfer: void 0,
		signingResults: []
	};
}
const CounterLeafSwapResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transfer !== void 0) Transfer.encode(message.transfer, writer.uint32(10).fork()).join();
		for (const v of message.signingResults) LeafRefundTxSigningResult.encode(v, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCounterLeafSwapResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transfer = Transfer.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.signingResults.push(LeafRefundTxSigningResult.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transfer: isSet(object.transfer) ? Transfer.fromJSON(object.transfer) : void 0,
			signingResults: globalThis.Array.isArray(object?.signingResults) ? object.signingResults.map((e) => LeafRefundTxSigningResult.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transfer !== void 0) obj.transfer = Transfer.toJSON(message.transfer);
		if (message.signingResults?.length) obj.signingResults = message.signingResults.map((e) => LeafRefundTxSigningResult.toJSON(e));
		return obj;
	},
	create(base) {
		return CounterLeafSwapResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCounterLeafSwapResponse();
		message.transfer = object.transfer !== void 0 && object.transfer !== null ? Transfer.fromPartial(object.transfer) : void 0;
		message.signingResults = object.signingResults?.map((e) => LeafRefundTxSigningResult.fromPartial(e)) || [];
		return message;
	}
};
function createBaseRefreshTimelockRequest() {
	return {
		leafId: "",
		ownerIdentityPublicKey: new Uint8Array(0),
		signingJobs: []
	};
}
const RefreshTimelockRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.leafId !== "") writer.uint32(10).string(message.leafId);
		if (message.ownerIdentityPublicKey.length !== 0) writer.uint32(18).bytes(message.ownerIdentityPublicKey);
		for (const v of message.signingJobs) SigningJob.encode(v, writer.uint32(26).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRefreshTimelockRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leafId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.ownerIdentityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.signingJobs.push(SigningJob.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leafId: isSet(object.leafId) ? globalThis.String(object.leafId) : "",
			ownerIdentityPublicKey: isSet(object.ownerIdentityPublicKey) ? bytesFromBase64(object.ownerIdentityPublicKey) : new Uint8Array(0),
			signingJobs: globalThis.Array.isArray(object?.signingJobs) ? object.signingJobs.map((e) => SigningJob.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leafId !== "") obj.leafId = message.leafId;
		if (message.ownerIdentityPublicKey.length !== 0) obj.ownerIdentityPublicKey = base64FromBytes(message.ownerIdentityPublicKey);
		if (message.signingJobs?.length) obj.signingJobs = message.signingJobs.map((e) => SigningJob.toJSON(e));
		return obj;
	},
	create(base) {
		return RefreshTimelockRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRefreshTimelockRequest();
		message.leafId = object.leafId ?? "";
		message.ownerIdentityPublicKey = object.ownerIdentityPublicKey ?? new Uint8Array(0);
		message.signingJobs = object.signingJobs?.map((e) => SigningJob.fromPartial(e)) || [];
		return message;
	}
};
function createBaseRefreshTimelockSigningResult() {
	return {
		signingResult: void 0,
		verifyingKey: new Uint8Array(0)
	};
}
const RefreshTimelockSigningResult = {
	encode(message, writer = new BinaryWriter()) {
		if (message.signingResult !== void 0) SigningResult.encode(message.signingResult, writer.uint32(10).fork()).join();
		if (message.verifyingKey.length !== 0) writer.uint32(18).bytes(message.verifyingKey);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRefreshTimelockSigningResult();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.signingResult = SigningResult.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.verifyingKey = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			signingResult: isSet(object.signingResult) ? SigningResult.fromJSON(object.signingResult) : void 0,
			verifyingKey: isSet(object.verifyingKey) ? bytesFromBase64(object.verifyingKey) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.signingResult !== void 0) obj.signingResult = SigningResult.toJSON(message.signingResult);
		if (message.verifyingKey.length !== 0) obj.verifyingKey = base64FromBytes(message.verifyingKey);
		return obj;
	},
	create(base) {
		return RefreshTimelockSigningResult.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRefreshTimelockSigningResult();
		message.signingResult = object.signingResult !== void 0 && object.signingResult !== null ? SigningResult.fromPartial(object.signingResult) : void 0;
		message.verifyingKey = object.verifyingKey ?? new Uint8Array(0);
		return message;
	}
};
function createBaseRefreshTimelockResponse() {
	return { signingResults: [] };
}
const RefreshTimelockResponse = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.signingResults) RefreshTimelockSigningResult.encode(v, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRefreshTimelockResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.signingResults.push(RefreshTimelockSigningResult.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { signingResults: globalThis.Array.isArray(object?.signingResults) ? object.signingResults.map((e) => RefreshTimelockSigningResult.fromJSON(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.signingResults?.length) obj.signingResults = message.signingResults.map((e) => RefreshTimelockSigningResult.toJSON(e));
		return obj;
	},
	create(base) {
		return RefreshTimelockResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRefreshTimelockResponse();
		message.signingResults = object.signingResults?.map((e) => RefreshTimelockSigningResult.fromPartial(e)) || [];
		return message;
	}
};
function createBaseExtendLeafRequest() {
	return {
		leafId: "",
		ownerIdentityPublicKey: new Uint8Array(0),
		nodeTxSigningJob: void 0,
		refundTxSigningJob: void 0,
		directNodeTxSigningJob: void 0,
		directRefundTxSigningJob: void 0,
		directFromCpfpRefundTxSigningJob: void 0,
		refundLadder: void 0
	};
}
const ExtendLeafRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.leafId !== "") writer.uint32(10).string(message.leafId);
		if (message.ownerIdentityPublicKey.length !== 0) writer.uint32(18).bytes(message.ownerIdentityPublicKey);
		if (message.nodeTxSigningJob !== void 0) SigningJob.encode(message.nodeTxSigningJob, writer.uint32(26).fork()).join();
		if (message.refundTxSigningJob !== void 0) SigningJob.encode(message.refundTxSigningJob, writer.uint32(34).fork()).join();
		if (message.directNodeTxSigningJob !== void 0) SigningJob.encode(message.directNodeTxSigningJob, writer.uint32(42).fork()).join();
		if (message.directRefundTxSigningJob !== void 0) SigningJob.encode(message.directRefundTxSigningJob, writer.uint32(50).fork()).join();
		if (message.directFromCpfpRefundTxSigningJob !== void 0) SigningJob.encode(message.directFromCpfpRefundTxSigningJob, writer.uint32(58).fork()).join();
		if (message.refundLadder !== void 0) FeeBumpLadder.encode(message.refundLadder, writer.uint32(66).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseExtendLeafRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leafId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.ownerIdentityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.nodeTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) break;
					message.refundTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) break;
					message.directNodeTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) break;
					message.directRefundTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) break;
					message.directFromCpfpRefundTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 8:
					if (tag !== 66) break;
					message.refundLadder = FeeBumpLadder.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leafId: isSet(object.leafId) ? globalThis.String(object.leafId) : "",
			ownerIdentityPublicKey: isSet(object.ownerIdentityPublicKey) ? bytesFromBase64(object.ownerIdentityPublicKey) : new Uint8Array(0),
			nodeTxSigningJob: isSet(object.nodeTxSigningJob) ? SigningJob.fromJSON(object.nodeTxSigningJob) : void 0,
			refundTxSigningJob: isSet(object.refundTxSigningJob) ? SigningJob.fromJSON(object.refundTxSigningJob) : void 0,
			directNodeTxSigningJob: isSet(object.directNodeTxSigningJob) ? SigningJob.fromJSON(object.directNodeTxSigningJob) : void 0,
			directRefundTxSigningJob: isSet(object.directRefundTxSigningJob) ? SigningJob.fromJSON(object.directRefundTxSigningJob) : void 0,
			directFromCpfpRefundTxSigningJob: isSet(object.directFromCpfpRefundTxSigningJob) ? SigningJob.fromJSON(object.directFromCpfpRefundTxSigningJob) : void 0,
			refundLadder: isSet(object.refundLadder) ? FeeBumpLadder.fromJSON(object.refundLadder) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leafId !== "") obj.leafId = message.leafId;
		if (message.ownerIdentityPublicKey.length !== 0) obj.ownerIdentityPublicKey = base64FromBytes(message.ownerIdentityPublicKey);
		if (message.nodeTxSigningJob !== void 0) obj.nodeTxSigningJob = SigningJob.toJSON(message.nodeTxSigningJob);
		if (message.refundTxSigningJob !== void 0) obj.refundTxSigningJob = SigningJob.toJSON(message.refundTxSigningJob);
		if (message.directNodeTxSigningJob !== void 0) obj.directNodeTxSigningJob = SigningJob.toJSON(message.directNodeTxSigningJob);
		if (message.directRefundTxSigningJob !== void 0) obj.directRefundTxSigningJob = SigningJob.toJSON(message.directRefundTxSigningJob);
		if (message.directFromCpfpRefundTxSigningJob !== void 0) obj.directFromCpfpRefundTxSigningJob = SigningJob.toJSON(message.directFromCpfpRefundTxSigningJob);
		if (message.refundLadder !== void 0) obj.refundLadder = FeeBumpLadder.toJSON(message.refundLadder);
		return obj;
	},
	create(base) {
		return ExtendLeafRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseExtendLeafRequest();
		message.leafId = object.leafId ?? "";
		message.ownerIdentityPublicKey = object.ownerIdentityPublicKey ?? new Uint8Array(0);
		message.nodeTxSigningJob = object.nodeTxSigningJob !== void 0 && object.nodeTxSigningJob !== null ? SigningJob.fromPartial(object.nodeTxSigningJob) : void 0;
		message.refundTxSigningJob = object.refundTxSigningJob !== void 0 && object.refundTxSigningJob !== null ? SigningJob.fromPartial(object.refundTxSigningJob) : void 0;
		message.directNodeTxSigningJob = object.directNodeTxSigningJob !== void 0 && object.directNodeTxSigningJob !== null ? SigningJob.fromPartial(object.directNodeTxSigningJob) : void 0;
		message.directRefundTxSigningJob = object.directRefundTxSigningJob !== void 0 && object.directRefundTxSigningJob !== null ? SigningJob.fromPartial(object.directRefundTxSigningJob) : void 0;
		message.directFromCpfpRefundTxSigningJob = object.directFromCpfpRefundTxSigningJob !== void 0 && object.directFromCpfpRefundTxSigningJob !== null ? SigningJob.fromPartial(object.directFromCpfpRefundTxSigningJob) : void 0;
		message.refundLadder = object.refundLadder !== void 0 && object.refundLadder !== null ? FeeBumpLadder.fromPartial(object.refundLadder) : void 0;
		return message;
	}
};
function createBaseExtendLeafSigningResult() {
	return {
		signingResult: void 0,
		verifyingKey: new Uint8Array(0)
	};
}
const ExtendLeafSigningResult = {
	encode(message, writer = new BinaryWriter()) {
		if (message.signingResult !== void 0) SigningResult.encode(message.signingResult, writer.uint32(10).fork()).join();
		if (message.verifyingKey.length !== 0) writer.uint32(18).bytes(message.verifyingKey);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseExtendLeafSigningResult();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.signingResult = SigningResult.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.verifyingKey = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			signingResult: isSet(object.signingResult) ? SigningResult.fromJSON(object.signingResult) : void 0,
			verifyingKey: isSet(object.verifyingKey) ? bytesFromBase64(object.verifyingKey) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.signingResult !== void 0) obj.signingResult = SigningResult.toJSON(message.signingResult);
		if (message.verifyingKey.length !== 0) obj.verifyingKey = base64FromBytes(message.verifyingKey);
		return obj;
	},
	create(base) {
		return ExtendLeafSigningResult.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseExtendLeafSigningResult();
		message.signingResult = object.signingResult !== void 0 && object.signingResult !== null ? SigningResult.fromPartial(object.signingResult) : void 0;
		message.verifyingKey = object.verifyingKey ?? new Uint8Array(0);
		return message;
	}
};
function createBaseExtendLeafResponse() {
	return {
		leafId: "",
		nodeTxSigningResult: void 0,
		refundTxSigningResult: void 0,
		directNodeTxSigningResult: void 0,
		directRefundTxSigningResult: void 0,
		directFromCpfpRefundTxSigningResult: void 0
	};
}
const ExtendLeafResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.leafId !== "") writer.uint32(10).string(message.leafId);
		if (message.nodeTxSigningResult !== void 0) ExtendLeafSigningResult.encode(message.nodeTxSigningResult, writer.uint32(18).fork()).join();
		if (message.refundTxSigningResult !== void 0) ExtendLeafSigningResult.encode(message.refundTxSigningResult, writer.uint32(26).fork()).join();
		if (message.directNodeTxSigningResult !== void 0) ExtendLeafSigningResult.encode(message.directNodeTxSigningResult, writer.uint32(34).fork()).join();
		if (message.directRefundTxSigningResult !== void 0) ExtendLeafSigningResult.encode(message.directRefundTxSigningResult, writer.uint32(42).fork()).join();
		if (message.directFromCpfpRefundTxSigningResult !== void 0) ExtendLeafSigningResult.encode(message.directFromCpfpRefundTxSigningResult, writer.uint32(50).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseExtendLeafResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leafId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.nodeTxSigningResult = ExtendLeafSigningResult.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.refundTxSigningResult = ExtendLeafSigningResult.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) break;
					message.directNodeTxSigningResult = ExtendLeafSigningResult.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) break;
					message.directRefundTxSigningResult = ExtendLeafSigningResult.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) break;
					message.directFromCpfpRefundTxSigningResult = ExtendLeafSigningResult.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leafId: isSet(object.leafId) ? globalThis.String(object.leafId) : "",
			nodeTxSigningResult: isSet(object.nodeTxSigningResult) ? ExtendLeafSigningResult.fromJSON(object.nodeTxSigningResult) : void 0,
			refundTxSigningResult: isSet(object.refundTxSigningResult) ? ExtendLeafSigningResult.fromJSON(object.refundTxSigningResult) : void 0,
			directNodeTxSigningResult: isSet(object.directNodeTxSigningResult) ? ExtendLeafSigningResult.fromJSON(object.directNodeTxSigningResult) : void 0,
			directRefundTxSigningResult: isSet(object.directRefundTxSigningResult) ? ExtendLeafSigningResult.fromJSON(object.directRefundTxSigningResult) : void 0,
			directFromCpfpRefundTxSigningResult: isSet(object.directFromCpfpRefundTxSigningResult) ? ExtendLeafSigningResult.fromJSON(object.directFromCpfpRefundTxSigningResult) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leafId !== "") obj.leafId = message.leafId;
		if (message.nodeTxSigningResult !== void 0) obj.nodeTxSigningResult = ExtendLeafSigningResult.toJSON(message.nodeTxSigningResult);
		if (message.refundTxSigningResult !== void 0) obj.refundTxSigningResult = ExtendLeafSigningResult.toJSON(message.refundTxSigningResult);
		if (message.directNodeTxSigningResult !== void 0) obj.directNodeTxSigningResult = ExtendLeafSigningResult.toJSON(message.directNodeTxSigningResult);
		if (message.directRefundTxSigningResult !== void 0) obj.directRefundTxSigningResult = ExtendLeafSigningResult.toJSON(message.directRefundTxSigningResult);
		if (message.directFromCpfpRefundTxSigningResult !== void 0) obj.directFromCpfpRefundTxSigningResult = ExtendLeafSigningResult.toJSON(message.directFromCpfpRefundTxSigningResult);
		return obj;
	},
	create(base) {
		return ExtendLeafResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseExtendLeafResponse();
		message.leafId = object.leafId ?? "";
		message.nodeTxSigningResult = object.nodeTxSigningResult !== void 0 && object.nodeTxSigningResult !== null ? ExtendLeafSigningResult.fromPartial(object.nodeTxSigningResult) : void 0;
		message.refundTxSigningResult = object.refundTxSigningResult !== void 0 && object.refundTxSigningResult !== null ? ExtendLeafSigningResult.fromPartial(object.refundTxSigningResult) : void 0;
		message.directNodeTxSigningResult = object.directNodeTxSigningResult !== void 0 && object.directNodeTxSigningResult !== null ? ExtendLeafSigningResult.fromPartial(object.directNodeTxSigningResult) : void 0;
		message.directRefundTxSigningResult = object.directRefundTxSigningResult !== void 0 && object.directRefundTxSigningResult !== null ? ExtendLeafSigningResult.fromPartial(object.directRefundTxSigningResult) : void 0;
		message.directFromCpfpRefundTxSigningResult = object.directFromCpfpRefundTxSigningResult !== void 0 && object.directFromCpfpRefundTxSigningResult !== null ? ExtendLeafSigningResult.fromPartial(object.directFromCpfpRefundTxSigningResult) : void 0;
		return message;
	}
};
function createBaseAddressRequestNode() {
	return {
		userPublicKey: new Uint8Array(0),
		children: []
	};
}
const AddressRequestNode = {
	encode(message, writer = new BinaryWriter()) {
		if (message.userPublicKey.length !== 0) writer.uint32(10).bytes(message.userPublicKey);
		for (const v of message.children) AddressRequestNode.encode(v, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseAddressRequestNode();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.userPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.children.push(AddressRequestNode.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			userPublicKey: isSet(object.userPublicKey) ? bytesFromBase64(object.userPublicKey) : new Uint8Array(0),
			children: globalThis.Array.isArray(object?.children) ? object.children.map((e) => AddressRequestNode.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.userPublicKey.length !== 0) obj.userPublicKey = base64FromBytes(message.userPublicKey);
		if (message.children?.length) obj.children = message.children.map((e) => AddressRequestNode.toJSON(e));
		return obj;
	},
	create(base) {
		return AddressRequestNode.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseAddressRequestNode();
		message.userPublicKey = object.userPublicKey ?? new Uint8Array(0);
		message.children = object.children?.map((e) => AddressRequestNode.fromPartial(e)) || [];
		return message;
	}
};
function createBasePrepareTreeAddressRequest() {
	return {
		source: void 0,
		node: void 0,
		userIdentityPublicKey: new Uint8Array(0)
	};
}
const PrepareTreeAddressRequest = {
	encode(message, writer = new BinaryWriter()) {
		switch (message.source?.$case) {
			case "parentNodeOutput":
				NodeOutput.encode(message.source.parentNodeOutput, writer.uint32(10).fork()).join();
				break;
			case "onChainUtxo":
				UTXO.encode(message.source.onChainUtxo, writer.uint32(18).fork()).join();
				break;
		}
		if (message.node !== void 0) AddressRequestNode.encode(message.node, writer.uint32(26).fork()).join();
		if (message.userIdentityPublicKey.length !== 0) writer.uint32(34).bytes(message.userIdentityPublicKey);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBasePrepareTreeAddressRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.source = {
						$case: "parentNodeOutput",
						parentNodeOutput: NodeOutput.decode(reader, reader.uint32())
					};
					continue;
				case 2:
					if (tag !== 18) break;
					message.source = {
						$case: "onChainUtxo",
						onChainUtxo: UTXO.decode(reader, reader.uint32())
					};
					continue;
				case 3:
					if (tag !== 26) break;
					message.node = AddressRequestNode.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) break;
					message.userIdentityPublicKey = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			source: isSet(object.parentNodeOutput) ? {
				$case: "parentNodeOutput",
				parentNodeOutput: NodeOutput.fromJSON(object.parentNodeOutput)
			} : isSet(object.onChainUtxo) ? {
				$case: "onChainUtxo",
				onChainUtxo: UTXO.fromJSON(object.onChainUtxo)
			} : void 0,
			node: isSet(object.node) ? AddressRequestNode.fromJSON(object.node) : void 0,
			userIdentityPublicKey: isSet(object.userIdentityPublicKey) ? bytesFromBase64(object.userIdentityPublicKey) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.source?.$case === "parentNodeOutput") obj.parentNodeOutput = NodeOutput.toJSON(message.source.parentNodeOutput);
		else if (message.source?.$case === "onChainUtxo") obj.onChainUtxo = UTXO.toJSON(message.source.onChainUtxo);
		if (message.node !== void 0) obj.node = AddressRequestNode.toJSON(message.node);
		if (message.userIdentityPublicKey.length !== 0) obj.userIdentityPublicKey = base64FromBytes(message.userIdentityPublicKey);
		return obj;
	},
	create(base) {
		return PrepareTreeAddressRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBasePrepareTreeAddressRequest();
		switch (object.source?.$case) {
			case "parentNodeOutput":
				if (object.source?.parentNodeOutput !== void 0 && object.source?.parentNodeOutput !== null) message.source = {
					$case: "parentNodeOutput",
					parentNodeOutput: NodeOutput.fromPartial(object.source.parentNodeOutput)
				};
				break;
			case "onChainUtxo":
				if (object.source?.onChainUtxo !== void 0 && object.source?.onChainUtxo !== null) message.source = {
					$case: "onChainUtxo",
					onChainUtxo: UTXO.fromPartial(object.source.onChainUtxo)
				};
				break;
		}
		message.node = object.node !== void 0 && object.node !== null ? AddressRequestNode.fromPartial(object.node) : void 0;
		message.userIdentityPublicKey = object.userIdentityPublicKey ?? new Uint8Array(0);
		return message;
	}
};
function createBaseAddressNode() {
	return {
		address: void 0,
		children: []
	};
}
const AddressNode = {
	encode(message, writer = new BinaryWriter()) {
		if (message.address !== void 0) Address.encode(message.address, writer.uint32(10).fork()).join();
		for (const v of message.children) AddressNode.encode(v, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseAddressNode();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.address = Address.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.children.push(AddressNode.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			address: isSet(object.address) ? Address.fromJSON(object.address) : void 0,
			children: globalThis.Array.isArray(object?.children) ? object.children.map((e) => AddressNode.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.address !== void 0) obj.address = Address.toJSON(message.address);
		if (message.children?.length) obj.children = message.children.map((e) => AddressNode.toJSON(e));
		return obj;
	},
	create(base) {
		return AddressNode.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseAddressNode();
		message.address = object.address !== void 0 && object.address !== null ? Address.fromPartial(object.address) : void 0;
		message.children = object.children?.map((e) => AddressNode.fromPartial(e)) || [];
		return message;
	}
};
function createBasePrepareTreeAddressResponse() {
	return { node: void 0 };
}
const PrepareTreeAddressResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.node !== void 0) AddressNode.encode(message.node, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBasePrepareTreeAddressResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.node = AddressNode.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { node: isSet(object.node) ? AddressNode.fromJSON(object.node) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.node !== void 0) obj.node = AddressNode.toJSON(message.node);
		return obj;
	},
	create(base) {
		return PrepareTreeAddressResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBasePrepareTreeAddressResponse();
		message.node = object.node !== void 0 && object.node !== null ? AddressNode.fromPartial(object.node) : void 0;
		return message;
	}
};
function createBaseCreationNode() {
	return {
		nodeTxSigningJob: void 0,
		refundTxSigningJob: void 0,
		children: [],
		directNodeTxSigningJob: void 0,
		directRefundTxSigningJob: void 0,
		directFromCpfpRefundTxSigningJob: void 0,
		refundLadder: void 0
	};
}
const CreationNode = {
	encode(message, writer = new BinaryWriter()) {
		if (message.nodeTxSigningJob !== void 0) SigningJob.encode(message.nodeTxSigningJob, writer.uint32(10).fork()).join();
		if (message.refundTxSigningJob !== void 0) SigningJob.encode(message.refundTxSigningJob, writer.uint32(18).fork()).join();
		for (const v of message.children) CreationNode.encode(v, writer.uint32(26).fork()).join();
		if (message.directNodeTxSigningJob !== void 0) SigningJob.encode(message.directNodeTxSigningJob, writer.uint32(34).fork()).join();
		if (message.directRefundTxSigningJob !== void 0) SigningJob.encode(message.directRefundTxSigningJob, writer.uint32(42).fork()).join();
		if (message.directFromCpfpRefundTxSigningJob !== void 0) SigningJob.encode(message.directFromCpfpRefundTxSigningJob, writer.uint32(50).fork()).join();
		if (message.refundLadder !== void 0) FeeBumpLadder.encode(message.refundLadder, writer.uint32(58).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCreationNode();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.nodeTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.refundTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.children.push(CreationNode.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) break;
					message.directNodeTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) break;
					message.directRefundTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) break;
					message.directFromCpfpRefundTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) break;
					message.refundLadder = FeeBumpLadder.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			nodeTxSigningJob: isSet(object.nodeTxSigningJob) ? SigningJob.fromJSON(object.nodeTxSigningJob) : void 0,
			refundTxSigningJob: isSet(object.refundTxSigningJob) ? SigningJob.fromJSON(object.refundTxSigningJob) : void 0,
			children: globalThis.Array.isArray(object?.children) ? object.children.map((e) => CreationNode.fromJSON(e)) : [],
			directNodeTxSigningJob: isSet(object.directNodeTxSigningJob) ? SigningJob.fromJSON(object.directNodeTxSigningJob) : void 0,
			directRefundTxSigningJob: isSet(object.directRefundTxSigningJob) ? SigningJob.fromJSON(object.directRefundTxSigningJob) : void 0,
			directFromCpfpRefundTxSigningJob: isSet(object.directFromCpfpRefundTxSigningJob) ? SigningJob.fromJSON(object.directFromCpfpRefundTxSigningJob) : void 0,
			refundLadder: isSet(object.refundLadder) ? FeeBumpLadder.fromJSON(object.refundLadder) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.nodeTxSigningJob !== void 0) obj.nodeTxSigningJob = SigningJob.toJSON(message.nodeTxSigningJob);
		if (message.refundTxSigningJob !== void 0) obj.refundTxSigningJob = SigningJob.toJSON(message.refundTxSigningJob);
		if (message.children?.length) obj.children = message.children.map((e) => CreationNode.toJSON(e));
		if (message.directNodeTxSigningJob !== void 0) obj.directNodeTxSigningJob = SigningJob.toJSON(message.directNodeTxSigningJob);
		if (message.directRefundTxSigningJob !== void 0) obj.directRefundTxSigningJob = SigningJob.toJSON(message.directRefundTxSigningJob);
		if (message.directFromCpfpRefundTxSigningJob !== void 0) obj.directFromCpfpRefundTxSigningJob = SigningJob.toJSON(message.directFromCpfpRefundTxSigningJob);
		if (message.refundLadder !== void 0) obj.refundLadder = FeeBumpLadder.toJSON(message.refundLadder);
		return obj;
	},
	create(base) {
		return CreationNode.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCreationNode();
		message.nodeTxSigningJob = object.nodeTxSigningJob !== void 0 && object.nodeTxSigningJob !== null ? SigningJob.fromPartial(object.nodeTxSigningJob) : void 0;
		message.refundTxSigningJob = object.refundTxSigningJob !== void 0 && object.refundTxSigningJob !== null ? SigningJob.fromPartial(object.refundTxSigningJob) : void 0;
		message.children = object.children?.map((e) => CreationNode.fromPartial(e)) || [];
		message.directNodeTxSigningJob = object.directNodeTxSigningJob !== void 0 && object.directNodeTxSigningJob !== null ? SigningJob.fromPartial(object.directNodeTxSigningJob) : void 0;
		message.directRefundTxSigningJob = object.directRefundTxSigningJob !== void 0 && object.directRefundTxSigningJob !== null ? SigningJob.fromPartial(object.directRefundTxSigningJob) : void 0;
		message.directFromCpfpRefundTxSigningJob = object.directFromCpfpRefundTxSigningJob !== void 0 && object.directFromCpfpRefundTxSigningJob !== null ? SigningJob.fromPartial(object.directFromCpfpRefundTxSigningJob) : void 0;
		message.refundLadder = object.refundLadder !== void 0 && object.refundLadder !== null ? FeeBumpLadder.fromPartial(object.refundLadder) : void 0;
		return message;
	}
};
function createBaseCreateTreeRequest() {
	return {
		source: void 0,
		node: void 0,
		userIdentityPublicKey: new Uint8Array(0)
	};
}
const CreateTreeRequest = {
	encode(message, writer = new BinaryWriter()) {
		switch (message.source?.$case) {
			case "parentNodeOutput":
				NodeOutput.encode(message.source.parentNodeOutput, writer.uint32(10).fork()).join();
				break;
			case "onChainUtxo":
				UTXO.encode(message.source.onChainUtxo, writer.uint32(18).fork()).join();
				break;
		}
		if (message.node !== void 0) CreationNode.encode(message.node, writer.uint32(26).fork()).join();
		if (message.userIdentityPublicKey.length !== 0) writer.uint32(34).bytes(message.userIdentityPublicKey);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCreateTreeRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.source = {
						$case: "parentNodeOutput",
						parentNodeOutput: NodeOutput.decode(reader, reader.uint32())
					};
					continue;
				case 2:
					if (tag !== 18) break;
					message.source = {
						$case: "onChainUtxo",
						onChainUtxo: UTXO.decode(reader, reader.uint32())
					};
					continue;
				case 3:
					if (tag !== 26) break;
					message.node = CreationNode.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) break;
					message.userIdentityPublicKey = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			source: isSet(object.parentNodeOutput) ? {
				$case: "parentNodeOutput",
				parentNodeOutput: NodeOutput.fromJSON(object.parentNodeOutput)
			} : isSet(object.onChainUtxo) ? {
				$case: "onChainUtxo",
				onChainUtxo: UTXO.fromJSON(object.onChainUtxo)
			} : void 0,
			node: isSet(object.node) ? CreationNode.fromJSON(object.node) : void 0,
			userIdentityPublicKey: isSet(object.userIdentityPublicKey) ? bytesFromBase64(object.userIdentityPublicKey) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.source?.$case === "parentNodeOutput") obj.parentNodeOutput = NodeOutput.toJSON(message.source.parentNodeOutput);
		else if (message.source?.$case === "onChainUtxo") obj.onChainUtxo = UTXO.toJSON(message.source.onChainUtxo);
		if (message.node !== void 0) obj.node = CreationNode.toJSON(message.node);
		if (message.userIdentityPublicKey.length !== 0) obj.userIdentityPublicKey = base64FromBytes(message.userIdentityPublicKey);
		return obj;
	},
	create(base) {
		return CreateTreeRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCreateTreeRequest();
		switch (object.source?.$case) {
			case "parentNodeOutput":
				if (object.source?.parentNodeOutput !== void 0 && object.source?.parentNodeOutput !== null) message.source = {
					$case: "parentNodeOutput",
					parentNodeOutput: NodeOutput.fromPartial(object.source.parentNodeOutput)
				};
				break;
			case "onChainUtxo":
				if (object.source?.onChainUtxo !== void 0 && object.source?.onChainUtxo !== null) message.source = {
					$case: "onChainUtxo",
					onChainUtxo: UTXO.fromPartial(object.source.onChainUtxo)
				};
				break;
		}
		message.node = object.node !== void 0 && object.node !== null ? CreationNode.fromPartial(object.node) : void 0;
		message.userIdentityPublicKey = object.userIdentityPublicKey ?? new Uint8Array(0);
		return message;
	}
};
function createBaseCreationResponseNode() {
	return {
		nodeId: "",
		nodeTxSigningResult: void 0,
		refundTxSigningResult: void 0,
		children: [],
		directNodeTxSigningResult: void 0,
		directRefundTxSigningResult: void 0,
		directFromCpfpRefundTxSigningResult: void 0
	};
}
const CreationResponseNode = {
	encode(message, writer = new BinaryWriter()) {
		if (message.nodeId !== "") writer.uint32(10).string(message.nodeId);
		if (message.nodeTxSigningResult !== void 0) SigningResult.encode(message.nodeTxSigningResult, writer.uint32(18).fork()).join();
		if (message.refundTxSigningResult !== void 0) SigningResult.encode(message.refundTxSigningResult, writer.uint32(26).fork()).join();
		for (const v of message.children) CreationResponseNode.encode(v, writer.uint32(34).fork()).join();
		if (message.directNodeTxSigningResult !== void 0) SigningResult.encode(message.directNodeTxSigningResult, writer.uint32(42).fork()).join();
		if (message.directRefundTxSigningResult !== void 0) SigningResult.encode(message.directRefundTxSigningResult, writer.uint32(50).fork()).join();
		if (message.directFromCpfpRefundTxSigningResult !== void 0) SigningResult.encode(message.directFromCpfpRefundTxSigningResult, writer.uint32(58).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCreationResponseNode();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.nodeId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.nodeTxSigningResult = SigningResult.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.refundTxSigningResult = SigningResult.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) break;
					message.children.push(CreationResponseNode.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) break;
					message.directNodeTxSigningResult = SigningResult.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) break;
					message.directRefundTxSigningResult = SigningResult.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) break;
					message.directFromCpfpRefundTxSigningResult = SigningResult.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			nodeId: isSet(object.nodeId) ? globalThis.String(object.nodeId) : "",
			nodeTxSigningResult: isSet(object.nodeTxSigningResult) ? SigningResult.fromJSON(object.nodeTxSigningResult) : void 0,
			refundTxSigningResult: isSet(object.refundTxSigningResult) ? SigningResult.fromJSON(object.refundTxSigningResult) : void 0,
			children: globalThis.Array.isArray(object?.children) ? object.children.map((e) => CreationResponseNode.fromJSON(e)) : [],
			directNodeTxSigningResult: isSet(object.directNodeTxSigningResult) ? SigningResult.fromJSON(object.directNodeTxSigningResult) : void 0,
			directRefundTxSigningResult: isSet(object.directRefundTxSigningResult) ? SigningResult.fromJSON(object.directRefundTxSigningResult) : void 0,
			directFromCpfpRefundTxSigningResult: isSet(object.directFromCpfpRefundTxSigningResult) ? SigningResult.fromJSON(object.directFromCpfpRefundTxSigningResult) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.nodeId !== "") obj.nodeId = message.nodeId;
		if (message.nodeTxSigningResult !== void 0) obj.nodeTxSigningResult = SigningResult.toJSON(message.nodeTxSigningResult);
		if (message.refundTxSigningResult !== void 0) obj.refundTxSigningResult = SigningResult.toJSON(message.refundTxSigningResult);
		if (message.children?.length) obj.children = message.children.map((e) => CreationResponseNode.toJSON(e));
		if (message.directNodeTxSigningResult !== void 0) obj.directNodeTxSigningResult = SigningResult.toJSON(message.directNodeTxSigningResult);
		if (message.directRefundTxSigningResult !== void 0) obj.directRefundTxSigningResult = SigningResult.toJSON(message.directRefundTxSigningResult);
		if (message.directFromCpfpRefundTxSigningResult !== void 0) obj.directFromCpfpRefundTxSigningResult = SigningResult.toJSON(message.directFromCpfpRefundTxSigningResult);
		return obj;
	},
	create(base) {
		return CreationResponseNode.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCreationResponseNode();
		message.nodeId = object.nodeId ?? "";
		message.nodeTxSigningResult = object.nodeTxSigningResult !== void 0 && object.nodeTxSigningResult !== null ? SigningResult.fromPartial(object.nodeTxSigningResult) : void 0;
		message.refundTxSigningResult = object.refundTxSigningResult !== void 0 && object.refundTxSigningResult !== null ? SigningResult.fromPartial(object.refundTxSigningResult) : void 0;
		message.children = object.children?.map((e) => CreationResponseNode.fromPartial(e)) || [];
		message.directNodeTxSigningResult = object.directNodeTxSigningResult !== void 0 && object.directNodeTxSigningResult !== null ? SigningResult.fromPartial(object.directNodeTxSigningResult) : void 0;
		message.directRefundTxSigningResult = object.directRefundTxSigningResult !== void 0 && object.directRefundTxSigningResult !== null ? SigningResult.fromPartial(object.directRefundTxSigningResult) : void 0;
		message.directFromCpfpRefundTxSigningResult = object.directFromCpfpRefundTxSigningResult !== void 0 && object.directFromCpfpRefundTxSigningResult !== null ? SigningResult.fromPartial(object.directFromCpfpRefundTxSigningResult) : void 0;
		return message;
	}
};
function createBaseCreateTreeResponse() {
	return { node: void 0 };
}
const CreateTreeResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.node !== void 0) CreationResponseNode.encode(message.node, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCreateTreeResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.node = CreationResponseNode.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { node: isSet(object.node) ? CreationResponseNode.fromJSON(object.node) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.node !== void 0) obj.node = CreationResponseNode.toJSON(message.node);
		return obj;
	},
	create(base) {
		return CreateTreeResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCreateTreeResponse();
		message.node = object.node !== void 0 && object.node !== null ? CreationResponseNode.fromPartial(object.node) : void 0;
		return message;
	}
};
function createBaseSigningOperatorInfo() {
	return {
		index: 0,
		identifier: "",
		publicKey: new Uint8Array(0),
		address: ""
	};
}
const SigningOperatorInfo = {
	encode(message, writer = new BinaryWriter()) {
		if (message.index !== 0) writer.uint32(8).uint64(message.index);
		if (message.identifier !== "") writer.uint32(18).string(message.identifier);
		if (message.publicKey.length !== 0) writer.uint32(26).bytes(message.publicKey);
		if (message.address !== "") writer.uint32(34).string(message.address);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSigningOperatorInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.index = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 18) break;
					message.identifier = reader.string();
					continue;
				case 3:
					if (tag !== 26) break;
					message.publicKey = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) break;
					message.address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			index: isSet(object.index) ? globalThis.Number(object.index) : 0,
			identifier: isSet(object.identifier) ? globalThis.String(object.identifier) : "",
			publicKey: isSet(object.publicKey) ? bytesFromBase64(object.publicKey) : new Uint8Array(0),
			address: isSet(object.address) ? globalThis.String(object.address) : ""
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.index !== 0) obj.index = Math.round(message.index);
		if (message.identifier !== "") obj.identifier = message.identifier;
		if (message.publicKey.length !== 0) obj.publicKey = base64FromBytes(message.publicKey);
		if (message.address !== "") obj.address = message.address;
		return obj;
	},
	create(base) {
		return SigningOperatorInfo.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSigningOperatorInfo();
		message.index = object.index ?? 0;
		message.identifier = object.identifier ?? "";
		message.publicKey = object.publicKey ?? new Uint8Array(0);
		message.address = object.address ?? "";
		return message;
	}
};
function createBaseGetSigningOperatorListResponse() {
	return { signingOperators: {} };
}
const GetSigningOperatorListResponse = {
	encode(message, writer = new BinaryWriter()) {
		Object.entries(message.signingOperators).forEach(([key, value]) => {
			GetSigningOperatorListResponse_SigningOperatorsEntry.encode({
				key,
				value
			}, writer.uint32(10).fork()).join();
		});
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseGetSigningOperatorListResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1: {
					if (tag !== 10) break;
					const entry1 = GetSigningOperatorListResponse_SigningOperatorsEntry.decode(reader, reader.uint32());
					if (entry1.value !== void 0) message.signingOperators[entry1.key] = entry1.value;
					continue;
				}
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { signingOperators: isObject(object.signingOperators) ? Object.entries(object.signingOperators).reduce((acc, [key, value]) => {
			acc[key] = SigningOperatorInfo.fromJSON(value);
			return acc;
		}, {}) : {} };
	},
	toJSON(message) {
		const obj = {};
		if (message.signingOperators) {
			const entries = Object.entries(message.signingOperators);
			if (entries.length > 0) {
				obj.signingOperators = {};
				entries.forEach(([k, v]) => {
					obj.signingOperators[k] = SigningOperatorInfo.toJSON(v);
				});
			}
		}
		return obj;
	},
	create(base) {
		return GetSigningOperatorListResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseGetSigningOperatorListResponse();
		message.signingOperators = Object.entries(object.signingOperators ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = SigningOperatorInfo.fromPartial(value);
			return acc;
		}, {});
		return message;
	}
};
function createBaseGetSigningOperatorListResponse_SigningOperatorsEntry() {
	return {
		key: "",
		value: void 0
	};
}
const GetSigningOperatorListResponse_SigningOperatorsEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value !== void 0) SigningOperatorInfo.encode(message.value, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseGetSigningOperatorListResponse_SigningOperatorsEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = SigningOperatorInfo.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? SigningOperatorInfo.fromJSON(object.value) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value !== void 0) obj.value = SigningOperatorInfo.toJSON(message.value);
		return obj;
	},
	create(base) {
		return GetSigningOperatorListResponse_SigningOperatorsEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseGetSigningOperatorListResponse_SigningOperatorsEntry();
		message.key = object.key ?? "";
		message.value = object.value !== void 0 && object.value !== null ? SigningOperatorInfo.fromPartial(object.value) : void 0;
		return message;
	}
};
function createBasePreimageRequestWithTransfer() {
	return {
		paymentHash: new Uint8Array(0),
		receiverIdentityPubkey: new Uint8Array(0),
		status: 0,
		createdTime: void 0,
		transfer: void 0,
		preimage: void 0,
		senderIdentityPubkey: new Uint8Array(0)
	};
}
const PreimageRequestWithTransfer = {
	encode(message, writer = new BinaryWriter()) {
		if (message.paymentHash.length !== 0) writer.uint32(10).bytes(message.paymentHash);
		if (message.receiverIdentityPubkey.length !== 0) writer.uint32(18).bytes(message.receiverIdentityPubkey);
		if (message.status !== 0) writer.uint32(24).int32(message.status);
		if (message.createdTime !== void 0) Timestamp.encode(toTimestamp(message.createdTime), writer.uint32(34).fork()).join();
		if (message.transfer !== void 0) Transfer.encode(message.transfer, writer.uint32(42).fork()).join();
		if (message.preimage !== void 0) writer.uint32(50).bytes(message.preimage);
		if (message.senderIdentityPubkey.length !== 0) writer.uint32(58).bytes(message.senderIdentityPubkey);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBasePreimageRequestWithTransfer();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.paymentHash = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.receiverIdentityPubkey = reader.bytes();
					continue;
				case 3:
					if (tag !== 24) break;
					message.status = reader.int32();
					continue;
				case 4:
					if (tag !== 34) break;
					message.createdTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) break;
					message.transfer = Transfer.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) break;
					message.preimage = reader.bytes();
					continue;
				case 7:
					if (tag !== 58) break;
					message.senderIdentityPubkey = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			paymentHash: isSet(object.paymentHash) ? bytesFromBase64(object.paymentHash) : new Uint8Array(0),
			receiverIdentityPubkey: isSet(object.receiverIdentityPubkey) ? bytesFromBase64(object.receiverIdentityPubkey) : new Uint8Array(0),
			status: isSet(object.status) ? preimageRequestStatusFromJSON(object.status) : 0,
			createdTime: isSet(object.createdTime) ? fromJsonTimestamp(object.createdTime) : void 0,
			transfer: isSet(object.transfer) ? Transfer.fromJSON(object.transfer) : void 0,
			preimage: isSet(object.preimage) ? bytesFromBase64(object.preimage) : void 0,
			senderIdentityPubkey: isSet(object.senderIdentityPubkey) ? bytesFromBase64(object.senderIdentityPubkey) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.paymentHash.length !== 0) obj.paymentHash = base64FromBytes(message.paymentHash);
		if (message.receiverIdentityPubkey.length !== 0) obj.receiverIdentityPubkey = base64FromBytes(message.receiverIdentityPubkey);
		if (message.status !== 0) obj.status = preimageRequestStatusToJSON(message.status);
		if (message.createdTime !== void 0) obj.createdTime = message.createdTime.toISOString();
		if (message.transfer !== void 0) obj.transfer = Transfer.toJSON(message.transfer);
		if (message.preimage !== void 0) obj.preimage = base64FromBytes(message.preimage);
		if (message.senderIdentityPubkey.length !== 0) obj.senderIdentityPubkey = base64FromBytes(message.senderIdentityPubkey);
		return obj;
	},
	create(base) {
		return PreimageRequestWithTransfer.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBasePreimageRequestWithTransfer();
		message.paymentHash = object.paymentHash ?? new Uint8Array(0);
		message.receiverIdentityPubkey = object.receiverIdentityPubkey ?? new Uint8Array(0);
		message.status = object.status ?? 0;
		message.createdTime = object.createdTime ?? void 0;
		message.transfer = object.transfer !== void 0 && object.transfer !== null ? Transfer.fromPartial(object.transfer) : void 0;
		message.preimage = object.preimage ?? void 0;
		message.senderIdentityPubkey = object.senderIdentityPubkey ?? new Uint8Array(0);
		return message;
	}
};
function createBaseQueryHtlcRequest() {
	return {
		paymentHashes: [],
		identityPublicKey: new Uint8Array(0),
		status: void 0,
		limit: 0,
		offset: 0,
		transferIds: [],
		matchRole: 0
	};
}
const QueryHtlcRequest = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.paymentHashes) writer.uint32(10).bytes(v);
		if (message.identityPublicKey.length !== 0) writer.uint32(18).bytes(message.identityPublicKey);
		if (message.status !== void 0) writer.uint32(24).int32(message.status);
		if (message.limit !== 0) writer.uint32(32).int64(message.limit);
		if (message.offset !== 0) writer.uint32(40).int64(message.offset);
		for (const v of message.transferIds) writer.uint32(50).string(v);
		if (message.matchRole !== 0) writer.uint32(56).int32(message.matchRole);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryHtlcRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.paymentHashes.push(reader.bytes());
					continue;
				case 2:
					if (tag !== 18) break;
					message.identityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 24) break;
					message.status = reader.int32();
					continue;
				case 4:
					if (tag !== 32) break;
					message.limit = longToNumber(reader.int64());
					continue;
				case 5:
					if (tag !== 40) break;
					message.offset = longToNumber(reader.int64());
					continue;
				case 6:
					if (tag !== 50) break;
					message.transferIds.push(reader.string());
					continue;
				case 7:
					if (tag !== 56) break;
					message.matchRole = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			paymentHashes: globalThis.Array.isArray(object?.paymentHashes) ? object.paymentHashes.map((e) => bytesFromBase64(e)) : [],
			identityPublicKey: isSet(object.identityPublicKey) ? bytesFromBase64(object.identityPublicKey) : new Uint8Array(0),
			status: isSet(object.status) ? preimageRequestStatusFromJSON(object.status) : void 0,
			limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
			transferIds: globalThis.Array.isArray(object?.transferIds) ? object.transferIds.map((e) => globalThis.String(e)) : [],
			matchRole: isSet(object.matchRole) ? preimageRequestRoleFromJSON(object.matchRole) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.paymentHashes?.length) obj.paymentHashes = message.paymentHashes.map((e) => base64FromBytes(e));
		if (message.identityPublicKey.length !== 0) obj.identityPublicKey = base64FromBytes(message.identityPublicKey);
		if (message.status !== void 0) obj.status = preimageRequestStatusToJSON(message.status);
		if (message.limit !== 0) obj.limit = Math.round(message.limit);
		if (message.offset !== 0) obj.offset = Math.round(message.offset);
		if (message.transferIds?.length) obj.transferIds = message.transferIds;
		if (message.matchRole !== 0) obj.matchRole = preimageRequestRoleToJSON(message.matchRole);
		return obj;
	},
	create(base) {
		return QueryHtlcRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryHtlcRequest();
		message.paymentHashes = object.paymentHashes?.map((e) => e) || [];
		message.identityPublicKey = object.identityPublicKey ?? new Uint8Array(0);
		message.status = object.status ?? void 0;
		message.limit = object.limit ?? 0;
		message.offset = object.offset ?? 0;
		message.transferIds = object.transferIds?.map((e) => e) || [];
		message.matchRole = object.matchRole ?? 0;
		return message;
	}
};
function createBaseQueryHtlcResponse() {
	return {
		preimageRequests: [],
		offset: 0
	};
}
const QueryHtlcResponse = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.preimageRequests) PreimageRequestWithTransfer.encode(v, writer.uint32(10).fork()).join();
		if (message.offset !== 0) writer.uint32(16).int64(message.offset);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryHtlcResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.preimageRequests.push(PreimageRequestWithTransfer.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 16) break;
					message.offset = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			preimageRequests: globalThis.Array.isArray(object?.preimageRequests) ? object.preimageRequests.map((e) => PreimageRequestWithTransfer.fromJSON(e)) : [],
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.preimageRequests?.length) obj.preimageRequests = message.preimageRequests.map((e) => PreimageRequestWithTransfer.toJSON(e));
		if (message.offset !== 0) obj.offset = Math.round(message.offset);
		return obj;
	},
	create(base) {
		return QueryHtlcResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryHtlcResponse();
		message.preimageRequests = object.preimageRequests?.map((e) => PreimageRequestWithTransfer.fromPartial(e)) || [];
		message.offset = object.offset ?? 0;
		return message;
	}
};
function createBaseProvidePreimageRequest() {
	return {
		paymentHash: new Uint8Array(0),
		preimage: new Uint8Array(0),
		identityPublicKey: new Uint8Array(0),
		transferId: ""
	};
}
const ProvidePreimageRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.paymentHash.length !== 0) writer.uint32(10).bytes(message.paymentHash);
		if (message.preimage.length !== 0) writer.uint32(18).bytes(message.preimage);
		if (message.identityPublicKey.length !== 0) writer.uint32(26).bytes(message.identityPublicKey);
		if (message.transferId !== "") writer.uint32(34).string(message.transferId);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseProvidePreimageRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.paymentHash = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.preimage = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.identityPublicKey = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) break;
					message.transferId = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			paymentHash: isSet(object.paymentHash) ? bytesFromBase64(object.paymentHash) : new Uint8Array(0),
			preimage: isSet(object.preimage) ? bytesFromBase64(object.preimage) : new Uint8Array(0),
			identityPublicKey: isSet(object.identityPublicKey) ? bytesFromBase64(object.identityPublicKey) : new Uint8Array(0),
			transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : ""
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.paymentHash.length !== 0) obj.paymentHash = base64FromBytes(message.paymentHash);
		if (message.preimage.length !== 0) obj.preimage = base64FromBytes(message.preimage);
		if (message.identityPublicKey.length !== 0) obj.identityPublicKey = base64FromBytes(message.identityPublicKey);
		if (message.transferId !== "") obj.transferId = message.transferId;
		return obj;
	},
	create(base) {
		return ProvidePreimageRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseProvidePreimageRequest();
		message.paymentHash = object.paymentHash ?? new Uint8Array(0);
		message.preimage = object.preimage ?? new Uint8Array(0);
		message.identityPublicKey = object.identityPublicKey ?? new Uint8Array(0);
		message.transferId = object.transferId ?? "";
		return message;
	}
};
function createBaseProvidePreimageResponse() {
	return { transfer: void 0 };
}
const ProvidePreimageResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transfer !== void 0) Transfer.encode(message.transfer, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseProvidePreimageResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transfer = Transfer.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { transfer: isSet(object.transfer) ? Transfer.fromJSON(object.transfer) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.transfer !== void 0) obj.transfer = Transfer.toJSON(message.transfer);
		return obj;
	},
	create(base) {
		return ProvidePreimageResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseProvidePreimageResponse();
		message.transfer = object.transfer !== void 0 && object.transfer !== null ? Transfer.fromPartial(object.transfer) : void 0;
		return message;
	}
};
function createBaseQueryPreimageRequest() {
	return {
		paymentHash: new Uint8Array(0),
		receiverIdentityPubkey: new Uint8Array(0)
	};
}
const QueryPreimageRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.paymentHash.length !== 0) writer.uint32(10).bytes(message.paymentHash);
		if (message.receiverIdentityPubkey.length !== 0) writer.uint32(18).bytes(message.receiverIdentityPubkey);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryPreimageRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.paymentHash = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.receiverIdentityPubkey = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			paymentHash: isSet(object.paymentHash) ? bytesFromBase64(object.paymentHash) : new Uint8Array(0),
			receiverIdentityPubkey: isSet(object.receiverIdentityPubkey) ? bytesFromBase64(object.receiverIdentityPubkey) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.paymentHash.length !== 0) obj.paymentHash = base64FromBytes(message.paymentHash);
		if (message.receiverIdentityPubkey.length !== 0) obj.receiverIdentityPubkey = base64FromBytes(message.receiverIdentityPubkey);
		return obj;
	},
	create(base) {
		return QueryPreimageRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryPreimageRequest();
		message.paymentHash = object.paymentHash ?? new Uint8Array(0);
		message.receiverIdentityPubkey = object.receiverIdentityPubkey ?? new Uint8Array(0);
		return message;
	}
};
function createBaseQueryPreimageResponse() {
	return { preimage: void 0 };
}
const QueryPreimageResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.preimage !== void 0) writer.uint32(10).bytes(message.preimage);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryPreimageResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.preimage = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { preimage: isSet(object.preimage) ? bytesFromBase64(object.preimage) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.preimage !== void 0) obj.preimage = base64FromBytes(message.preimage);
		return obj;
	},
	create(base) {
		return QueryPreimageResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryPreimageResponse();
		message.preimage = object.preimage ?? void 0;
		return message;
	}
};
function createBaseQueryTransferPreimageRequest() {
	return { transferId: "" };
}
const QueryTransferPreimageRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transferId !== "") writer.uint32(10).string(message.transferId);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryTransferPreimageRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transferId = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "" };
	},
	toJSON(message) {
		const obj = {};
		if (message.transferId !== "") obj.transferId = message.transferId;
		return obj;
	},
	create(base) {
		return QueryTransferPreimageRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryTransferPreimageRequest();
		message.transferId = object.transferId ?? "";
		return message;
	}
};
function createBaseQueryTransferPreimageResponse() {
	return { preimage: void 0 };
}
const QueryTransferPreimageResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.preimage !== void 0) writer.uint32(10).bytes(message.preimage);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryTransferPreimageResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.preimage = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { preimage: isSet(object.preimage) ? bytesFromBase64(object.preimage) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.preimage !== void 0) obj.preimage = base64FromBytes(message.preimage);
		return obj;
	},
	create(base) {
		return QueryTransferPreimageResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryTransferPreimageResponse();
		message.preimage = object.preimage ?? void 0;
		return message;
	}
};
function createBaseTreeNodeIds() {
	return { nodeIds: [] };
}
const TreeNodeIds = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.nodeIds) writer.uint32(10).string(v);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTreeNodeIds();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.nodeIds.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { nodeIds: globalThis.Array.isArray(object?.nodeIds) ? object.nodeIds.map((e) => globalThis.String(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.nodeIds?.length) obj.nodeIds = message.nodeIds;
		return obj;
	},
	create(base) {
		return TreeNodeIds.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTreeNodeIds();
		message.nodeIds = object.nodeIds?.map((e) => e) || [];
		return message;
	}
};
function createBaseQueryNodesRequest() {
	return {
		source: void 0,
		includeParents: false,
		limit: 0,
		offset: 0,
		network: 0,
		statuses: []
	};
}
const QueryNodesRequest = {
	encode(message, writer = new BinaryWriter()) {
		switch (message.source?.$case) {
			case "ownerIdentityPubkey":
				writer.uint32(10).bytes(message.source.ownerIdentityPubkey);
				break;
			case "nodeIds":
				TreeNodeIds.encode(message.source.nodeIds, writer.uint32(18).fork()).join();
				break;
		}
		if (message.includeParents !== false) writer.uint32(24).bool(message.includeParents);
		if (message.limit !== 0) writer.uint32(32).int64(message.limit);
		if (message.offset !== 0) writer.uint32(40).int64(message.offset);
		if (message.network !== 0) writer.uint32(48).int32(message.network);
		writer.uint32(58).fork();
		for (const v of message.statuses) writer.int32(v);
		writer.join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryNodesRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.source = {
						$case: "ownerIdentityPubkey",
						ownerIdentityPubkey: reader.bytes()
					};
					continue;
				case 2:
					if (tag !== 18) break;
					message.source = {
						$case: "nodeIds",
						nodeIds: TreeNodeIds.decode(reader, reader.uint32())
					};
					continue;
				case 3:
					if (tag !== 24) break;
					message.includeParents = reader.bool();
					continue;
				case 4:
					if (tag !== 32) break;
					message.limit = longToNumber(reader.int64());
					continue;
				case 5:
					if (tag !== 40) break;
					message.offset = longToNumber(reader.int64());
					continue;
				case 6:
					if (tag !== 48) break;
					message.network = reader.int32();
					continue;
				case 7:
					if (tag === 56) {
						message.statuses.push(reader.int32());
						continue;
					}
					if (tag === 58) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.statuses.push(reader.int32());
						continue;
					}
					break;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			source: isSet(object.ownerIdentityPubkey) ? {
				$case: "ownerIdentityPubkey",
				ownerIdentityPubkey: bytesFromBase64(object.ownerIdentityPubkey)
			} : isSet(object.nodeIds) ? {
				$case: "nodeIds",
				nodeIds: TreeNodeIds.fromJSON(object.nodeIds)
			} : void 0,
			includeParents: isSet(object.includeParents) ? globalThis.Boolean(object.includeParents) : false,
			limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
			network: isSet(object.network) ? networkFromJSON(object.network) : 0,
			statuses: globalThis.Array.isArray(object?.statuses) ? object.statuses.map((e) => treeNodeStatusFromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.source?.$case === "ownerIdentityPubkey") obj.ownerIdentityPubkey = base64FromBytes(message.source.ownerIdentityPubkey);
		else if (message.source?.$case === "nodeIds") obj.nodeIds = TreeNodeIds.toJSON(message.source.nodeIds);
		if (message.includeParents !== false) obj.includeParents = message.includeParents;
		if (message.limit !== 0) obj.limit = Math.round(message.limit);
		if (message.offset !== 0) obj.offset = Math.round(message.offset);
		if (message.network !== 0) obj.network = networkToJSON(message.network);
		if (message.statuses?.length) obj.statuses = message.statuses.map((e) => treeNodeStatusToJSON(e));
		return obj;
	},
	create(base) {
		return QueryNodesRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryNodesRequest();
		switch (object.source?.$case) {
			case "ownerIdentityPubkey":
				if (object.source?.ownerIdentityPubkey !== void 0 && object.source?.ownerIdentityPubkey !== null) message.source = {
					$case: "ownerIdentityPubkey",
					ownerIdentityPubkey: object.source.ownerIdentityPubkey
				};
				break;
			case "nodeIds":
				if (object.source?.nodeIds !== void 0 && object.source?.nodeIds !== null) message.source = {
					$case: "nodeIds",
					nodeIds: TreeNodeIds.fromPartial(object.source.nodeIds)
				};
				break;
		}
		message.includeParents = object.includeParents ?? false;
		message.limit = object.limit ?? 0;
		message.offset = object.offset ?? 0;
		message.network = object.network ?? 0;
		message.statuses = object.statuses?.map((e) => e) || [];
		return message;
	}
};
function createBaseQueryNodesResponse() {
	return {
		nodes: {},
		offset: 0
	};
}
const QueryNodesResponse = {
	encode(message, writer = new BinaryWriter()) {
		Object.entries(message.nodes).forEach(([key, value]) => {
			QueryNodesResponse_NodesEntry.encode({
				key,
				value
			}, writer.uint32(10).fork()).join();
		});
		if (message.offset !== 0) writer.uint32(16).int64(message.offset);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryNodesResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1: {
					if (tag !== 10) break;
					const entry1 = QueryNodesResponse_NodesEntry.decode(reader, reader.uint32());
					if (entry1.value !== void 0) message.nodes[entry1.key] = entry1.value;
					continue;
				}
				case 2:
					if (tag !== 16) break;
					message.offset = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			nodes: isObject(object.nodes) ? Object.entries(object.nodes).reduce((acc, [key, value]) => {
				acc[key] = TreeNode.fromJSON(value);
				return acc;
			}, {}) : {},
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.nodes) {
			const entries = Object.entries(message.nodes);
			if (entries.length > 0) {
				obj.nodes = {};
				entries.forEach(([k, v]) => {
					obj.nodes[k] = TreeNode.toJSON(v);
				});
			}
		}
		if (message.offset !== 0) obj.offset = Math.round(message.offset);
		return obj;
	},
	create(base) {
		return QueryNodesResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryNodesResponse();
		message.nodes = Object.entries(object.nodes ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = TreeNode.fromPartial(value);
			return acc;
		}, {});
		message.offset = object.offset ?? 0;
		return message;
	}
};
function createBaseQueryNodesResponse_NodesEntry() {
	return {
		key: "",
		value: void 0
	};
}
const QueryNodesResponse_NodesEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value !== void 0) TreeNode.encode(message.value, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryNodesResponse_NodesEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = TreeNode.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? TreeNode.fromJSON(object.value) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value !== void 0) obj.value = TreeNode.toJSON(message.value);
		return obj;
	},
	create(base) {
		return QueryNodesResponse_NodesEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryNodesResponse_NodesEntry();
		message.key = object.key ?? "";
		message.value = object.value !== void 0 && object.value !== null ? TreeNode.fromPartial(object.value) : void 0;
		return message;
	}
};
function createBaseCancelTransferRequest() {
	return {
		transferId: "",
		senderIdentityPublicKey: new Uint8Array(0)
	};
}
const CancelTransferRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transferId !== "") writer.uint32(10).string(message.transferId);
		if (message.senderIdentityPublicKey.length !== 0) writer.uint32(18).bytes(message.senderIdentityPublicKey);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCancelTransferRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transferId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.senderIdentityPublicKey = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transferId: isSet(object.transferId) ? globalThis.String(object.transferId) : "",
			senderIdentityPublicKey: isSet(object.senderIdentityPublicKey) ? bytesFromBase64(object.senderIdentityPublicKey) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transferId !== "") obj.transferId = message.transferId;
		if (message.senderIdentityPublicKey.length !== 0) obj.senderIdentityPublicKey = base64FromBytes(message.senderIdentityPublicKey);
		return obj;
	},
	create(base) {
		return CancelTransferRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCancelTransferRequest();
		message.transferId = object.transferId ?? "";
		message.senderIdentityPublicKey = object.senderIdentityPublicKey ?? new Uint8Array(0);
		return message;
	}
};
function createBaseCancelTransferResponse() {
	return { transfer: void 0 };
}
const CancelTransferResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transfer !== void 0) Transfer.encode(message.transfer, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCancelTransferResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transfer = Transfer.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { transfer: isSet(object.transfer) ? Transfer.fromJSON(object.transfer) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.transfer !== void 0) obj.transfer = Transfer.toJSON(message.transfer);
		return obj;
	},
	create(base) {
		return CancelTransferResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCancelTransferResponse();
		message.transfer = object.transfer !== void 0 && object.transfer !== null ? Transfer.fromPartial(object.transfer) : void 0;
		return message;
	}
};
function createBaseQueryUnusedDepositAddressesRequest() {
	return {
		identityPublicKey: new Uint8Array(0),
		network: 0,
		limit: 0,
		offset: 0
	};
}
const QueryUnusedDepositAddressesRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.identityPublicKey.length !== 0) writer.uint32(10).bytes(message.identityPublicKey);
		if (message.network !== 0) writer.uint32(16).int32(message.network);
		if (message.limit !== 0) writer.uint32(24).int64(message.limit);
		if (message.offset !== 0) writer.uint32(32).int64(message.offset);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryUnusedDepositAddressesRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.identityPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) break;
					message.network = reader.int32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.limit = longToNumber(reader.int64());
					continue;
				case 4:
					if (tag !== 32) break;
					message.offset = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			identityPublicKey: isSet(object.identityPublicKey) ? bytesFromBase64(object.identityPublicKey) : new Uint8Array(0),
			network: isSet(object.network) ? networkFromJSON(object.network) : 0,
			limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.identityPublicKey.length !== 0) obj.identityPublicKey = base64FromBytes(message.identityPublicKey);
		if (message.network !== 0) obj.network = networkToJSON(message.network);
		if (message.limit !== 0) obj.limit = Math.round(message.limit);
		if (message.offset !== 0) obj.offset = Math.round(message.offset);
		return obj;
	},
	create(base) {
		return QueryUnusedDepositAddressesRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryUnusedDepositAddressesRequest();
		message.identityPublicKey = object.identityPublicKey ?? new Uint8Array(0);
		message.network = object.network ?? 0;
		message.limit = object.limit ?? 0;
		message.offset = object.offset ?? 0;
		return message;
	}
};
function createBaseQueryStaticDepositAddressesRequest() {
	return {
		identityPublicKey: new Uint8Array(0),
		network: 0,
		limit: 0,
		offset: 0,
		depositAddress: void 0,
		hashVariant: 0
	};
}
const QueryStaticDepositAddressesRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.identityPublicKey.length !== 0) writer.uint32(10).bytes(message.identityPublicKey);
		if (message.network !== 0) writer.uint32(16).int32(message.network);
		if (message.limit !== 0) writer.uint32(32).int64(message.limit);
		if (message.offset !== 0) writer.uint32(40).int64(message.offset);
		if (message.depositAddress !== void 0) writer.uint32(50).string(message.depositAddress);
		if (message.hashVariant !== 0) writer.uint32(56).int32(message.hashVariant);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryStaticDepositAddressesRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.identityPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) break;
					message.network = reader.int32();
					continue;
				case 4:
					if (tag !== 32) break;
					message.limit = longToNumber(reader.int64());
					continue;
				case 5:
					if (tag !== 40) break;
					message.offset = longToNumber(reader.int64());
					continue;
				case 6:
					if (tag !== 50) break;
					message.depositAddress = reader.string();
					continue;
				case 7:
					if (tag !== 56) break;
					message.hashVariant = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			identityPublicKey: isSet(object.identityPublicKey) ? bytesFromBase64(object.identityPublicKey) : new Uint8Array(0),
			network: isSet(object.network) ? networkFromJSON(object.network) : 0,
			limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
			depositAddress: isSet(object.depositAddress) ? globalThis.String(object.depositAddress) : void 0,
			hashVariant: isSet(object.hashVariant) ? hashVariantFromJSON(object.hashVariant) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.identityPublicKey.length !== 0) obj.identityPublicKey = base64FromBytes(message.identityPublicKey);
		if (message.network !== 0) obj.network = networkToJSON(message.network);
		if (message.limit !== 0) obj.limit = Math.round(message.limit);
		if (message.offset !== 0) obj.offset = Math.round(message.offset);
		if (message.depositAddress !== void 0) obj.depositAddress = message.depositAddress;
		if (message.hashVariant !== 0) obj.hashVariant = hashVariantToJSON(message.hashVariant);
		return obj;
	},
	create(base) {
		return QueryStaticDepositAddressesRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryStaticDepositAddressesRequest();
		message.identityPublicKey = object.identityPublicKey ?? new Uint8Array(0);
		message.network = object.network ?? 0;
		message.limit = object.limit ?? 0;
		message.offset = object.offset ?? 0;
		message.depositAddress = object.depositAddress ?? void 0;
		message.hashVariant = object.hashVariant ?? 0;
		return message;
	}
};
function createBaseDepositAddressQueryResult() {
	return {
		depositAddress: "",
		userSigningPublicKey: new Uint8Array(0),
		verifyingPublicKey: new Uint8Array(0),
		leafId: void 0,
		proofOfPossession: void 0
	};
}
const DepositAddressQueryResult = {
	encode(message, writer = new BinaryWriter()) {
		if (message.depositAddress !== "") writer.uint32(10).string(message.depositAddress);
		if (message.userSigningPublicKey.length !== 0) writer.uint32(18).bytes(message.userSigningPublicKey);
		if (message.verifyingPublicKey.length !== 0) writer.uint32(26).bytes(message.verifyingPublicKey);
		if (message.leafId !== void 0) writer.uint32(34).string(message.leafId);
		if (message.proofOfPossession !== void 0) DepositAddressProof.encode(message.proofOfPossession, writer.uint32(42).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseDepositAddressQueryResult();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.depositAddress = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.userSigningPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.verifyingPublicKey = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) break;
					message.leafId = reader.string();
					continue;
				case 5:
					if (tag !== 42) break;
					message.proofOfPossession = DepositAddressProof.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			depositAddress: isSet(object.depositAddress) ? globalThis.String(object.depositAddress) : "",
			userSigningPublicKey: isSet(object.userSigningPublicKey) ? bytesFromBase64(object.userSigningPublicKey) : new Uint8Array(0),
			verifyingPublicKey: isSet(object.verifyingPublicKey) ? bytesFromBase64(object.verifyingPublicKey) : new Uint8Array(0),
			leafId: isSet(object.leafId) ? globalThis.String(object.leafId) : void 0,
			proofOfPossession: isSet(object.proofOfPossession) ? DepositAddressProof.fromJSON(object.proofOfPossession) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.depositAddress !== "") obj.depositAddress = message.depositAddress;
		if (message.userSigningPublicKey.length !== 0) obj.userSigningPublicKey = base64FromBytes(message.userSigningPublicKey);
		if (message.verifyingPublicKey.length !== 0) obj.verifyingPublicKey = base64FromBytes(message.verifyingPublicKey);
		if (message.leafId !== void 0) obj.leafId = message.leafId;
		if (message.proofOfPossession !== void 0) obj.proofOfPossession = DepositAddressProof.toJSON(message.proofOfPossession);
		return obj;
	},
	create(base) {
		return DepositAddressQueryResult.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseDepositAddressQueryResult();
		message.depositAddress = object.depositAddress ?? "";
		message.userSigningPublicKey = object.userSigningPublicKey ?? new Uint8Array(0);
		message.verifyingPublicKey = object.verifyingPublicKey ?? new Uint8Array(0);
		message.leafId = object.leafId ?? void 0;
		message.proofOfPossession = object.proofOfPossession !== void 0 && object.proofOfPossession !== null ? DepositAddressProof.fromPartial(object.proofOfPossession) : void 0;
		return message;
	}
};
function createBaseQueryUnusedDepositAddressesResponse() {
	return {
		depositAddresses: [],
		offset: 0
	};
}
const QueryUnusedDepositAddressesResponse = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.depositAddresses) DepositAddressQueryResult.encode(v, writer.uint32(10).fork()).join();
		if (message.offset !== 0) writer.uint32(16).int64(message.offset);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryUnusedDepositAddressesResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.depositAddresses.push(DepositAddressQueryResult.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 16) break;
					message.offset = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			depositAddresses: globalThis.Array.isArray(object?.depositAddresses) ? object.depositAddresses.map((e) => DepositAddressQueryResult.fromJSON(e)) : [],
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.depositAddresses?.length) obj.depositAddresses = message.depositAddresses.map((e) => DepositAddressQueryResult.toJSON(e));
		if (message.offset !== 0) obj.offset = Math.round(message.offset);
		return obj;
	},
	create(base) {
		return QueryUnusedDepositAddressesResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryUnusedDepositAddressesResponse();
		message.depositAddresses = object.depositAddresses?.map((e) => DepositAddressQueryResult.fromPartial(e)) || [];
		message.offset = object.offset ?? 0;
		return message;
	}
};
function createBaseQueryStaticDepositAddressesResponse() {
	return { depositAddresses: [] };
}
const QueryStaticDepositAddressesResponse = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.depositAddresses) DepositAddressQueryResult.encode(v, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryStaticDepositAddressesResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.depositAddresses.push(DepositAddressQueryResult.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { depositAddresses: globalThis.Array.isArray(object?.depositAddresses) ? object.depositAddresses.map((e) => DepositAddressQueryResult.fromJSON(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.depositAddresses?.length) obj.depositAddresses = message.depositAddresses.map((e) => DepositAddressQueryResult.toJSON(e));
		return obj;
	},
	create(base) {
		return QueryStaticDepositAddressesResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryStaticDepositAddressesResponse();
		message.depositAddresses = object.depositAddresses?.map((e) => DepositAddressQueryResult.fromPartial(e)) || [];
		return message;
	}
};
function createBaseQueryBalanceRequest() {
	return {
		identityPublicKey: new Uint8Array(0),
		network: 0
	};
}
const QueryBalanceRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.identityPublicKey.length !== 0) writer.uint32(10).bytes(message.identityPublicKey);
		if (message.network !== 0) writer.uint32(16).int32(message.network);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryBalanceRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.identityPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) break;
					message.network = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			identityPublicKey: isSet(object.identityPublicKey) ? bytesFromBase64(object.identityPublicKey) : new Uint8Array(0),
			network: isSet(object.network) ? networkFromJSON(object.network) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.identityPublicKey.length !== 0) obj.identityPublicKey = base64FromBytes(message.identityPublicKey);
		if (message.network !== 0) obj.network = networkToJSON(message.network);
		return obj;
	},
	create(base) {
		return QueryBalanceRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryBalanceRequest();
		message.identityPublicKey = object.identityPublicKey ?? new Uint8Array(0);
		message.network = object.network ?? 0;
		return message;
	}
};
function createBaseQueryBalanceResponse() {
	return {
		balance: 0,
		nodeBalances: {}
	};
}
const QueryBalanceResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.balance !== 0) writer.uint32(8).uint64(message.balance);
		Object.entries(message.nodeBalances).forEach(([key, value]) => {
			QueryBalanceResponse_NodeBalancesEntry.encode({
				key,
				value
			}, writer.uint32(18).fork()).join();
		});
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryBalanceResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.balance = longToNumber(reader.uint64());
					continue;
				case 2: {
					if (tag !== 18) break;
					const entry2 = QueryBalanceResponse_NodeBalancesEntry.decode(reader, reader.uint32());
					if (entry2.value !== void 0) message.nodeBalances[entry2.key] = entry2.value;
					continue;
				}
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			balance: isSet(object.balance) ? globalThis.Number(object.balance) : 0,
			nodeBalances: isObject(object.nodeBalances) ? Object.entries(object.nodeBalances).reduce((acc, [key, value]) => {
				acc[key] = Number(value);
				return acc;
			}, {}) : {}
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.balance !== 0) obj.balance = Math.round(message.balance);
		if (message.nodeBalances) {
			const entries = Object.entries(message.nodeBalances);
			if (entries.length > 0) {
				obj.nodeBalances = {};
				entries.forEach(([k, v]) => {
					obj.nodeBalances[k] = Math.round(v);
				});
			}
		}
		return obj;
	},
	create(base) {
		return QueryBalanceResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryBalanceResponse();
		message.balance = object.balance ?? 0;
		message.nodeBalances = Object.entries(object.nodeBalances ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = globalThis.Number(value);
			return acc;
		}, {});
		return message;
	}
};
function createBaseQueryBalanceResponse_NodeBalancesEntry() {
	return {
		key: "",
		value: 0
	};
}
const QueryBalanceResponse_NodeBalancesEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value !== 0) writer.uint32(16).uint64(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryBalanceResponse_NodeBalancesEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 16) break;
					message.value = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? globalThis.Number(object.value) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value !== 0) obj.value = Math.round(message.value);
		return obj;
	},
	create(base) {
		return QueryBalanceResponse_NodeBalancesEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryBalanceResponse_NodeBalancesEntry();
		message.key = object.key ?? "";
		message.value = object.value ?? 0;
		return message;
	}
};
function createBaseSparkAddress() {
	return {
		identityPublicKey: new Uint8Array(0),
		sparkInvoiceFields: void 0,
		signature: void 0
	};
}
const SparkAddress = {
	encode(message, writer = new BinaryWriter()) {
		if (message.identityPublicKey.length !== 0) writer.uint32(10).bytes(message.identityPublicKey);
		if (message.sparkInvoiceFields !== void 0) SparkInvoiceFields.encode(message.sparkInvoiceFields, writer.uint32(18).fork()).join();
		if (message.signature !== void 0) writer.uint32(26).bytes(message.signature);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSparkAddress();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.identityPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.sparkInvoiceFields = SparkInvoiceFields.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.signature = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			identityPublicKey: isSet(object.identityPublicKey) ? bytesFromBase64(object.identityPublicKey) : new Uint8Array(0),
			sparkInvoiceFields: isSet(object.sparkInvoiceFields) ? SparkInvoiceFields.fromJSON(object.sparkInvoiceFields) : void 0,
			signature: isSet(object.signature) ? bytesFromBase64(object.signature) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.identityPublicKey.length !== 0) obj.identityPublicKey = base64FromBytes(message.identityPublicKey);
		if (message.sparkInvoiceFields !== void 0) obj.sparkInvoiceFields = SparkInvoiceFields.toJSON(message.sparkInvoiceFields);
		if (message.signature !== void 0) obj.signature = base64FromBytes(message.signature);
		return obj;
	},
	create(base) {
		return SparkAddress.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSparkAddress();
		message.identityPublicKey = object.identityPublicKey ?? new Uint8Array(0);
		message.sparkInvoiceFields = object.sparkInvoiceFields !== void 0 && object.sparkInvoiceFields !== null ? SparkInvoiceFields.fromPartial(object.sparkInvoiceFields) : void 0;
		message.signature = object.signature ?? void 0;
		return message;
	}
};
function createBaseSparkInvoiceFields() {
	return {
		version: 0,
		id: new Uint8Array(0),
		paymentType: void 0,
		memo: void 0,
		senderPublicKey: void 0,
		expiryTime: void 0
	};
}
const SparkInvoiceFields = {
	encode(message, writer = new BinaryWriter()) {
		if (message.version !== 0) writer.uint32(8).uint32(message.version);
		if (message.id.length !== 0) writer.uint32(18).bytes(message.id);
		switch (message.paymentType?.$case) {
			case "tokensPayment":
				TokensPayment.encode(message.paymentType.tokensPayment, writer.uint32(26).fork()).join();
				break;
			case "satsPayment":
				SatsPayment.encode(message.paymentType.satsPayment, writer.uint32(34).fork()).join();
				break;
		}
		if (message.memo !== void 0) writer.uint32(42).string(message.memo);
		if (message.senderPublicKey !== void 0) writer.uint32(50).bytes(message.senderPublicKey);
		if (message.expiryTime !== void 0) Timestamp.encode(toTimestamp(message.expiryTime), writer.uint32(58).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSparkInvoiceFields();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.version = reader.uint32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.id = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.paymentType = {
						$case: "tokensPayment",
						tokensPayment: TokensPayment.decode(reader, reader.uint32())
					};
					continue;
				case 4:
					if (tag !== 34) break;
					message.paymentType = {
						$case: "satsPayment",
						satsPayment: SatsPayment.decode(reader, reader.uint32())
					};
					continue;
				case 5:
					if (tag !== 42) break;
					message.memo = reader.string();
					continue;
				case 6:
					if (tag !== 50) break;
					message.senderPublicKey = reader.bytes();
					continue;
				case 7:
					if (tag !== 58) break;
					message.expiryTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
			id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(0),
			paymentType: isSet(object.tokensPayment) ? {
				$case: "tokensPayment",
				tokensPayment: TokensPayment.fromJSON(object.tokensPayment)
			} : isSet(object.satsPayment) ? {
				$case: "satsPayment",
				satsPayment: SatsPayment.fromJSON(object.satsPayment)
			} : void 0,
			memo: isSet(object.memo) ? globalThis.String(object.memo) : void 0,
			senderPublicKey: isSet(object.senderPublicKey) ? bytesFromBase64(object.senderPublicKey) : void 0,
			expiryTime: isSet(object.expiryTime) ? fromJsonTimestamp(object.expiryTime) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.version !== 0) obj.version = Math.round(message.version);
		if (message.id.length !== 0) obj.id = base64FromBytes(message.id);
		if (message.paymentType?.$case === "tokensPayment") obj.tokensPayment = TokensPayment.toJSON(message.paymentType.tokensPayment);
		else if (message.paymentType?.$case === "satsPayment") obj.satsPayment = SatsPayment.toJSON(message.paymentType.satsPayment);
		if (message.memo !== void 0) obj.memo = message.memo;
		if (message.senderPublicKey !== void 0) obj.senderPublicKey = base64FromBytes(message.senderPublicKey);
		if (message.expiryTime !== void 0) obj.expiryTime = message.expiryTime.toISOString();
		return obj;
	},
	create(base) {
		return SparkInvoiceFields.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSparkInvoiceFields();
		message.version = object.version ?? 0;
		message.id = object.id ?? new Uint8Array(0);
		switch (object.paymentType?.$case) {
			case "tokensPayment":
				if (object.paymentType?.tokensPayment !== void 0 && object.paymentType?.tokensPayment !== null) message.paymentType = {
					$case: "tokensPayment",
					tokensPayment: TokensPayment.fromPartial(object.paymentType.tokensPayment)
				};
				break;
			case "satsPayment":
				if (object.paymentType?.satsPayment !== void 0 && object.paymentType?.satsPayment !== null) message.paymentType = {
					$case: "satsPayment",
					satsPayment: SatsPayment.fromPartial(object.paymentType.satsPayment)
				};
				break;
		}
		message.memo = object.memo ?? void 0;
		message.senderPublicKey = object.senderPublicKey ?? void 0;
		message.expiryTime = object.expiryTime ?? void 0;
		return message;
	}
};
function createBaseSatsPayment() {
	return { amount: void 0 };
}
const SatsPayment = {
	encode(message, writer = new BinaryWriter()) {
		if (message.amount !== void 0) writer.uint32(8).uint64(message.amount);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSatsPayment();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.amount = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { amount: isSet(object.amount) ? globalThis.Number(object.amount) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.amount !== void 0) obj.amount = Math.round(message.amount);
		return obj;
	},
	create(base) {
		return SatsPayment.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSatsPayment();
		message.amount = object.amount ?? void 0;
		return message;
	}
};
function createBaseTokensPayment() {
	return {
		tokenIdentifier: void 0,
		amount: void 0
	};
}
const TokensPayment = {
	encode(message, writer = new BinaryWriter()) {
		if (message.tokenIdentifier !== void 0) writer.uint32(10).bytes(message.tokenIdentifier);
		if (message.amount !== void 0) writer.uint32(18).bytes(message.amount);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTokensPayment();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.tokenIdentifier = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.amount = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			tokenIdentifier: isSet(object.tokenIdentifier) ? bytesFromBase64(object.tokenIdentifier) : void 0,
			amount: isSet(object.amount) ? bytesFromBase64(object.amount) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.tokenIdentifier !== void 0) obj.tokenIdentifier = base64FromBytes(message.tokenIdentifier);
		if (message.amount !== void 0) obj.amount = base64FromBytes(message.amount);
		return obj;
	},
	create(base) {
		return TokensPayment.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTokensPayment();
		message.tokenIdentifier = object.tokenIdentifier ?? void 0;
		message.amount = object.amount ?? void 0;
		return message;
	}
};
function createBaseInitiateStaticDepositUtxoRefundRequest() {
	return {
		onChainUtxo: void 0,
		refundTxSigningJob: void 0,
		userSignature: new Uint8Array(0),
		hashVariant: 0
	};
}
const InitiateStaticDepositUtxoRefundRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.onChainUtxo !== void 0) UTXO.encode(message.onChainUtxo, writer.uint32(10).fork()).join();
		if (message.refundTxSigningJob !== void 0) SigningJob.encode(message.refundTxSigningJob, writer.uint32(26).fork()).join();
		if (message.userSignature.length !== 0) writer.uint32(34).bytes(message.userSignature);
		if (message.hashVariant !== 0) writer.uint32(40).int32(message.hashVariant);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseInitiateStaticDepositUtxoRefundRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.onChainUtxo = UTXO.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.refundTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) break;
					message.userSignature = reader.bytes();
					continue;
				case 5:
					if (tag !== 40) break;
					message.hashVariant = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			onChainUtxo: isSet(object.onChainUtxo) ? UTXO.fromJSON(object.onChainUtxo) : void 0,
			refundTxSigningJob: isSet(object.refundTxSigningJob) ? SigningJob.fromJSON(object.refundTxSigningJob) : void 0,
			userSignature: isSet(object.userSignature) ? bytesFromBase64(object.userSignature) : new Uint8Array(0),
			hashVariant: isSet(object.hashVariant) ? hashVariantFromJSON(object.hashVariant) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.onChainUtxo !== void 0) obj.onChainUtxo = UTXO.toJSON(message.onChainUtxo);
		if (message.refundTxSigningJob !== void 0) obj.refundTxSigningJob = SigningJob.toJSON(message.refundTxSigningJob);
		if (message.userSignature.length !== 0) obj.userSignature = base64FromBytes(message.userSignature);
		if (message.hashVariant !== 0) obj.hashVariant = hashVariantToJSON(message.hashVariant);
		return obj;
	},
	create(base) {
		return InitiateStaticDepositUtxoRefundRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseInitiateStaticDepositUtxoRefundRequest();
		message.onChainUtxo = object.onChainUtxo !== void 0 && object.onChainUtxo !== null ? UTXO.fromPartial(object.onChainUtxo) : void 0;
		message.refundTxSigningJob = object.refundTxSigningJob !== void 0 && object.refundTxSigningJob !== null ? SigningJob.fromPartial(object.refundTxSigningJob) : void 0;
		message.userSignature = object.userSignature ?? new Uint8Array(0);
		message.hashVariant = object.hashVariant ?? 0;
		return message;
	}
};
function createBaseInitiateStaticDepositUtxoRefundResponse() {
	return {
		refundTxSigningResult: void 0,
		depositAddress: void 0
	};
}
const InitiateStaticDepositUtxoRefundResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.refundTxSigningResult !== void 0) SigningResult.encode(message.refundTxSigningResult, writer.uint32(10).fork()).join();
		if (message.depositAddress !== void 0) DepositAddressQueryResult.encode(message.depositAddress, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseInitiateStaticDepositUtxoRefundResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.refundTxSigningResult = SigningResult.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.depositAddress = DepositAddressQueryResult.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			refundTxSigningResult: isSet(object.refundTxSigningResult) ? SigningResult.fromJSON(object.refundTxSigningResult) : void 0,
			depositAddress: isSet(object.depositAddress) ? DepositAddressQueryResult.fromJSON(object.depositAddress) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.refundTxSigningResult !== void 0) obj.refundTxSigningResult = SigningResult.toJSON(message.refundTxSigningResult);
		if (message.depositAddress !== void 0) obj.depositAddress = DepositAddressQueryResult.toJSON(message.depositAddress);
		return obj;
	},
	create(base) {
		return InitiateStaticDepositUtxoRefundResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseInitiateStaticDepositUtxoRefundResponse();
		message.refundTxSigningResult = object.refundTxSigningResult !== void 0 && object.refundTxSigningResult !== null ? SigningResult.fromPartial(object.refundTxSigningResult) : void 0;
		message.depositAddress = object.depositAddress !== void 0 && object.depositAddress !== null ? DepositAddressQueryResult.fromPartial(object.depositAddress) : void 0;
		return message;
	}
};
function createBaseInitiateUtxoSwapRequest() {
	return {
		onChainUtxo: void 0,
		requestType: 0,
		amount: void 0,
		sspSignature: new Uint8Array(0),
		userSignature: new Uint8Array(0),
		transfer: void 0,
		spendTxSigningJob: void 0
	};
}
const InitiateUtxoSwapRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.onChainUtxo !== void 0) UTXO.encode(message.onChainUtxo, writer.uint32(10).fork()).join();
		if (message.requestType !== 0) writer.uint32(16).int32(message.requestType);
		switch (message.amount?.$case) {
			case "creditAmountSats":
				writer.uint32(24).uint64(message.amount.creditAmountSats);
				break;
			case "maxFeeSats":
				writer.uint32(32).uint64(message.amount.maxFeeSats);
				break;
		}
		if (message.sspSignature.length !== 0) writer.uint32(42).bytes(message.sspSignature);
		if (message.userSignature.length !== 0) writer.uint32(50).bytes(message.userSignature);
		if (message.transfer !== void 0) StartTransferRequest.encode(message.transfer, writer.uint32(58).fork()).join();
		if (message.spendTxSigningJob !== void 0) SigningJob.encode(message.spendTxSigningJob, writer.uint32(66).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseInitiateUtxoSwapRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.onChainUtxo = UTXO.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 16) break;
					message.requestType = reader.int32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.amount = {
						$case: "creditAmountSats",
						creditAmountSats: longToNumber(reader.uint64())
					};
					continue;
				case 4:
					if (tag !== 32) break;
					message.amount = {
						$case: "maxFeeSats",
						maxFeeSats: longToNumber(reader.uint64())
					};
					continue;
				case 5:
					if (tag !== 42) break;
					message.sspSignature = reader.bytes();
					continue;
				case 6:
					if (tag !== 50) break;
					message.userSignature = reader.bytes();
					continue;
				case 7:
					if (tag !== 58) break;
					message.transfer = StartTransferRequest.decode(reader, reader.uint32());
					continue;
				case 8:
					if (tag !== 66) break;
					message.spendTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			onChainUtxo: isSet(object.onChainUtxo) ? UTXO.fromJSON(object.onChainUtxo) : void 0,
			requestType: isSet(object.requestType) ? utxoSwapRequestTypeFromJSON(object.requestType) : 0,
			amount: isSet(object.creditAmountSats) ? {
				$case: "creditAmountSats",
				creditAmountSats: globalThis.Number(object.creditAmountSats)
			} : isSet(object.maxFeeSats) ? {
				$case: "maxFeeSats",
				maxFeeSats: globalThis.Number(object.maxFeeSats)
			} : void 0,
			sspSignature: isSet(object.sspSignature) ? bytesFromBase64(object.sspSignature) : new Uint8Array(0),
			userSignature: isSet(object.userSignature) ? bytesFromBase64(object.userSignature) : new Uint8Array(0),
			transfer: isSet(object.transfer) ? StartTransferRequest.fromJSON(object.transfer) : void 0,
			spendTxSigningJob: isSet(object.spendTxSigningJob) ? SigningJob.fromJSON(object.spendTxSigningJob) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.onChainUtxo !== void 0) obj.onChainUtxo = UTXO.toJSON(message.onChainUtxo);
		if (message.requestType !== 0) obj.requestType = utxoSwapRequestTypeToJSON(message.requestType);
		if (message.amount?.$case === "creditAmountSats") obj.creditAmountSats = Math.round(message.amount.creditAmountSats);
		else if (message.amount?.$case === "maxFeeSats") obj.maxFeeSats = Math.round(message.amount.maxFeeSats);
		if (message.sspSignature.length !== 0) obj.sspSignature = base64FromBytes(message.sspSignature);
		if (message.userSignature.length !== 0) obj.userSignature = base64FromBytes(message.userSignature);
		if (message.transfer !== void 0) obj.transfer = StartTransferRequest.toJSON(message.transfer);
		if (message.spendTxSigningJob !== void 0) obj.spendTxSigningJob = SigningJob.toJSON(message.spendTxSigningJob);
		return obj;
	},
	create(base) {
		return InitiateUtxoSwapRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseInitiateUtxoSwapRequest();
		message.onChainUtxo = object.onChainUtxo !== void 0 && object.onChainUtxo !== null ? UTXO.fromPartial(object.onChainUtxo) : void 0;
		message.requestType = object.requestType ?? 0;
		switch (object.amount?.$case) {
			case "creditAmountSats":
				if (object.amount?.creditAmountSats !== void 0 && object.amount?.creditAmountSats !== null) message.amount = {
					$case: "creditAmountSats",
					creditAmountSats: object.amount.creditAmountSats
				};
				break;
			case "maxFeeSats":
				if (object.amount?.maxFeeSats !== void 0 && object.amount?.maxFeeSats !== null) message.amount = {
					$case: "maxFeeSats",
					maxFeeSats: object.amount.maxFeeSats
				};
				break;
		}
		message.sspSignature = object.sspSignature ?? new Uint8Array(0);
		message.userSignature = object.userSignature ?? new Uint8Array(0);
		message.transfer = object.transfer !== void 0 && object.transfer !== null ? StartTransferRequest.fromPartial(object.transfer) : void 0;
		message.spendTxSigningJob = object.spendTxSigningJob !== void 0 && object.spendTxSigningJob !== null ? SigningJob.fromPartial(object.spendTxSigningJob) : void 0;
		return message;
	}
};
function createBaseInitiateUtxoSwapResponse() {
	return {
		spendTxSigningResult: void 0,
		transfer: void 0,
		depositAddress: void 0
	};
}
const InitiateUtxoSwapResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.spendTxSigningResult !== void 0) SigningResult.encode(message.spendTxSigningResult, writer.uint32(10).fork()).join();
		if (message.transfer !== void 0) Transfer.encode(message.transfer, writer.uint32(18).fork()).join();
		if (message.depositAddress !== void 0) DepositAddressQueryResult.encode(message.depositAddress, writer.uint32(26).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseInitiateUtxoSwapResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.spendTxSigningResult = SigningResult.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.transfer = Transfer.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.depositAddress = DepositAddressQueryResult.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			spendTxSigningResult: isSet(object.spendTxSigningResult) ? SigningResult.fromJSON(object.spendTxSigningResult) : void 0,
			transfer: isSet(object.transfer) ? Transfer.fromJSON(object.transfer) : void 0,
			depositAddress: isSet(object.depositAddress) ? DepositAddressQueryResult.fromJSON(object.depositAddress) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.spendTxSigningResult !== void 0) obj.spendTxSigningResult = SigningResult.toJSON(message.spendTxSigningResult);
		if (message.transfer !== void 0) obj.transfer = Transfer.toJSON(message.transfer);
		if (message.depositAddress !== void 0) obj.depositAddress = DepositAddressQueryResult.toJSON(message.depositAddress);
		return obj;
	},
	create(base) {
		return InitiateUtxoSwapResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseInitiateUtxoSwapResponse();
		message.spendTxSigningResult = object.spendTxSigningResult !== void 0 && object.spendTxSigningResult !== null ? SigningResult.fromPartial(object.spendTxSigningResult) : void 0;
		message.transfer = object.transfer !== void 0 && object.transfer !== null ? Transfer.fromPartial(object.transfer) : void 0;
		message.depositAddress = object.depositAddress !== void 0 && object.depositAddress !== null ? DepositAddressQueryResult.fromPartial(object.depositAddress) : void 0;
		return message;
	}
};
function createBaseExitingTree() {
	return {
		treeId: "",
		userSigningCommitment: void 0,
		vin: 0
	};
}
const ExitingTree = {
	encode(message, writer = new BinaryWriter()) {
		if (message.treeId !== "") writer.uint32(10).string(message.treeId);
		if (message.userSigningCommitment !== void 0) SigningCommitment.encode(message.userSigningCommitment, writer.uint32(18).fork()).join();
		if (message.vin !== 0) writer.uint32(24).uint32(message.vin);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseExitingTree();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.treeId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.userSigningCommitment = SigningCommitment.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) break;
					message.vin = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			treeId: isSet(object.treeId) ? globalThis.String(object.treeId) : "",
			userSigningCommitment: isSet(object.userSigningCommitment) ? SigningCommitment.fromJSON(object.userSigningCommitment) : void 0,
			vin: isSet(object.vin) ? globalThis.Number(object.vin) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.treeId !== "") obj.treeId = message.treeId;
		if (message.userSigningCommitment !== void 0) obj.userSigningCommitment = SigningCommitment.toJSON(message.userSigningCommitment);
		if (message.vin !== 0) obj.vin = Math.round(message.vin);
		return obj;
	},
	create(base) {
		return ExitingTree.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseExitingTree();
		message.treeId = object.treeId ?? "";
		message.userSigningCommitment = object.userSigningCommitment !== void 0 && object.userSigningCommitment !== null ? SigningCommitment.fromPartial(object.userSigningCommitment) : void 0;
		message.vin = object.vin ?? 0;
		return message;
	}
};
function createBaseBitcoinTransactionOutput() {
	return {
		value: 0,
		pkScript: new Uint8Array(0)
	};
}
const BitcoinTransactionOutput = {
	encode(message, writer = new BinaryWriter()) {
		if (message.value !== 0) writer.uint32(8).int64(message.value);
		if (message.pkScript.length !== 0) writer.uint32(18).bytes(message.pkScript);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseBitcoinTransactionOutput();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.value = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 18) break;
					message.pkScript = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			value: isSet(object.value) ? globalThis.Number(object.value) : 0,
			pkScript: isSet(object.pkScript) ? bytesFromBase64(object.pkScript) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.value !== 0) obj.value = Math.round(message.value);
		if (message.pkScript.length !== 0) obj.pkScript = base64FromBytes(message.pkScript);
		return obj;
	},
	create(base) {
		return BitcoinTransactionOutput.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseBitcoinTransactionOutput();
		message.value = object.value ?? 0;
		message.pkScript = object.pkScript ?? new Uint8Array(0);
		return message;
	}
};
function createBaseRecoverWatchtowerExitedLeafRequest() {
	return {
		leafId: "",
		recoveryTxSigningJob: void 0,
		userSignature: new Uint8Array(0)
	};
}
const RecoverWatchtowerExitedLeafRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.leafId !== "") writer.uint32(10).string(message.leafId);
		if (message.recoveryTxSigningJob !== void 0) SigningJob.encode(message.recoveryTxSigningJob, writer.uint32(18).fork()).join();
		if (message.userSignature.length !== 0) writer.uint32(26).bytes(message.userSignature);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRecoverWatchtowerExitedLeafRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leafId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.recoveryTxSigningJob = SigningJob.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.userSignature = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leafId: isSet(object.leafId) ? globalThis.String(object.leafId) : "",
			recoveryTxSigningJob: isSet(object.recoveryTxSigningJob) ? SigningJob.fromJSON(object.recoveryTxSigningJob) : void 0,
			userSignature: isSet(object.userSignature) ? bytesFromBase64(object.userSignature) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leafId !== "") obj.leafId = message.leafId;
		if (message.recoveryTxSigningJob !== void 0) obj.recoveryTxSigningJob = SigningJob.toJSON(message.recoveryTxSigningJob);
		if (message.userSignature.length !== 0) obj.userSignature = base64FromBytes(message.userSignature);
		return obj;
	},
	create(base) {
		return RecoverWatchtowerExitedLeafRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRecoverWatchtowerExitedLeafRequest();
		message.leafId = object.leafId ?? "";
		message.recoveryTxSigningJob = object.recoveryTxSigningJob !== void 0 && object.recoveryTxSigningJob !== null ? SigningJob.fromPartial(object.recoveryTxSigningJob) : void 0;
		message.userSignature = object.userSignature ?? new Uint8Array(0);
		return message;
	}
};
function createBaseRecoverWatchtowerExitedLeafResponse() {
	return {
		recoveryTxSigningResult: void 0,
		verifyingKey: new Uint8Array(0)
	};
}
const RecoverWatchtowerExitedLeafResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.recoveryTxSigningResult !== void 0) SigningResult.encode(message.recoveryTxSigningResult, writer.uint32(10).fork()).join();
		if (message.verifyingKey.length !== 0) writer.uint32(18).bytes(message.verifyingKey);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRecoverWatchtowerExitedLeafResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.recoveryTxSigningResult = SigningResult.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.verifyingKey = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			recoveryTxSigningResult: isSet(object.recoveryTxSigningResult) ? SigningResult.fromJSON(object.recoveryTxSigningResult) : void 0,
			verifyingKey: isSet(object.verifyingKey) ? bytesFromBase64(object.verifyingKey) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.recoveryTxSigningResult !== void 0) obj.recoveryTxSigningResult = SigningResult.toJSON(message.recoveryTxSigningResult);
		if (message.verifyingKey.length !== 0) obj.verifyingKey = base64FromBytes(message.verifyingKey);
		return obj;
	},
	create(base) {
		return RecoverWatchtowerExitedLeafResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRecoverWatchtowerExitedLeafResponse();
		message.recoveryTxSigningResult = object.recoveryTxSigningResult !== void 0 && object.recoveryTxSigningResult !== null ? SigningResult.fromPartial(object.recoveryTxSigningResult) : void 0;
		message.verifyingKey = object.verifyingKey ?? new Uint8Array(0);
		return message;
	}
};
function createBaseQueryNodesDistributionRequest() {
	return { ownerIdentityPublicKey: new Uint8Array(0) };
}
const QueryNodesDistributionRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.ownerIdentityPublicKey.length !== 0) writer.uint32(10).bytes(message.ownerIdentityPublicKey);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryNodesDistributionRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.ownerIdentityPublicKey = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { ownerIdentityPublicKey: isSet(object.ownerIdentityPublicKey) ? bytesFromBase64(object.ownerIdentityPublicKey) : new Uint8Array(0) };
	},
	toJSON(message) {
		const obj = {};
		if (message.ownerIdentityPublicKey.length !== 0) obj.ownerIdentityPublicKey = base64FromBytes(message.ownerIdentityPublicKey);
		return obj;
	},
	create(base) {
		return QueryNodesDistributionRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryNodesDistributionRequest();
		message.ownerIdentityPublicKey = object.ownerIdentityPublicKey ?? new Uint8Array(0);
		return message;
	}
};
function createBaseQueryNodesDistributionResponse() {
	return { nodeDistribution: {} };
}
const QueryNodesDistributionResponse = {
	encode(message, writer = new BinaryWriter()) {
		Object.entries(message.nodeDistribution).forEach(([key, value]) => {
			QueryNodesDistributionResponse_NodeDistributionEntry.encode({
				key,
				value
			}, writer.uint32(10).fork()).join();
		});
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryNodesDistributionResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1: {
					if (tag !== 10) break;
					const entry1 = QueryNodesDistributionResponse_NodeDistributionEntry.decode(reader, reader.uint32());
					if (entry1.value !== void 0) message.nodeDistribution[entry1.key] = entry1.value;
					continue;
				}
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { nodeDistribution: isObject(object.nodeDistribution) ? Object.entries(object.nodeDistribution).reduce((acc, [key, value]) => {
			acc[globalThis.Number(key)] = Number(value);
			return acc;
		}, {}) : {} };
	},
	toJSON(message) {
		const obj = {};
		if (message.nodeDistribution) {
			const entries = Object.entries(message.nodeDistribution);
			if (entries.length > 0) {
				obj.nodeDistribution = {};
				entries.forEach(([k, v]) => {
					obj.nodeDistribution[k] = Math.round(v);
				});
			}
		}
		return obj;
	},
	create(base) {
		return QueryNodesDistributionResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryNodesDistributionResponse();
		message.nodeDistribution = Object.entries(object.nodeDistribution ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[globalThis.Number(key)] = globalThis.Number(value);
			return acc;
		}, {});
		return message;
	}
};
function createBaseQueryNodesDistributionResponse_NodeDistributionEntry() {
	return {
		key: 0,
		value: 0
	};
}
const QueryNodesDistributionResponse_NodeDistributionEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== 0) writer.uint32(8).uint64(message.key);
		if (message.value !== 0) writer.uint32(16).uint64(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryNodesDistributionResponse_NodeDistributionEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.key = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 16) break;
					message.value = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.Number(object.key) : 0,
			value: isSet(object.value) ? globalThis.Number(object.value) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== 0) obj.key = Math.round(message.key);
		if (message.value !== 0) obj.value = Math.round(message.value);
		return obj;
	},
	create(base) {
		return QueryNodesDistributionResponse_NodeDistributionEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryNodesDistributionResponse_NodeDistributionEntry();
		message.key = object.key ?? 0;
		message.value = object.value ?? 0;
		return message;
	}
};
function createBaseQueryNodesByValueRequest() {
	return {
		ownerIdentityPublicKey: new Uint8Array(0),
		value: 0,
		offset: 0,
		limit: 0
	};
}
const QueryNodesByValueRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.ownerIdentityPublicKey.length !== 0) writer.uint32(10).bytes(message.ownerIdentityPublicKey);
		if (message.value !== 0) writer.uint32(16).int64(message.value);
		if (message.offset !== 0) writer.uint32(24).int64(message.offset);
		if (message.limit !== 0) writer.uint32(32).int64(message.limit);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryNodesByValueRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.ownerIdentityPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) break;
					message.value = longToNumber(reader.int64());
					continue;
				case 3:
					if (tag !== 24) break;
					message.offset = longToNumber(reader.int64());
					continue;
				case 4:
					if (tag !== 32) break;
					message.limit = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			ownerIdentityPublicKey: isSet(object.ownerIdentityPublicKey) ? bytesFromBase64(object.ownerIdentityPublicKey) : new Uint8Array(0),
			value: isSet(object.value) ? globalThis.Number(object.value) : 0,
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
			limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.ownerIdentityPublicKey.length !== 0) obj.ownerIdentityPublicKey = base64FromBytes(message.ownerIdentityPublicKey);
		if (message.value !== 0) obj.value = Math.round(message.value);
		if (message.offset !== 0) obj.offset = Math.round(message.offset);
		if (message.limit !== 0) obj.limit = Math.round(message.limit);
		return obj;
	},
	create(base) {
		return QueryNodesByValueRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryNodesByValueRequest();
		message.ownerIdentityPublicKey = object.ownerIdentityPublicKey ?? new Uint8Array(0);
		message.value = object.value ?? 0;
		message.offset = object.offset ?? 0;
		message.limit = object.limit ?? 0;
		return message;
	}
};
function createBaseQueryNodesByValueResponse() {
	return {
		nodes: {},
		offset: 0
	};
}
const QueryNodesByValueResponse = {
	encode(message, writer = new BinaryWriter()) {
		Object.entries(message.nodes).forEach(([key, value]) => {
			QueryNodesByValueResponse_NodesEntry.encode({
				key,
				value
			}, writer.uint32(10).fork()).join();
		});
		if (message.offset !== 0) writer.uint32(16).int64(message.offset);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryNodesByValueResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1: {
					if (tag !== 10) break;
					const entry1 = QueryNodesByValueResponse_NodesEntry.decode(reader, reader.uint32());
					if (entry1.value !== void 0) message.nodes[entry1.key] = entry1.value;
					continue;
				}
				case 2:
					if (tag !== 16) break;
					message.offset = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			nodes: isObject(object.nodes) ? Object.entries(object.nodes).reduce((acc, [key, value]) => {
				acc[key] = TreeNode.fromJSON(value);
				return acc;
			}, {}) : {},
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.nodes) {
			const entries = Object.entries(message.nodes);
			if (entries.length > 0) {
				obj.nodes = {};
				entries.forEach(([k, v]) => {
					obj.nodes[k] = TreeNode.toJSON(v);
				});
			}
		}
		if (message.offset !== 0) obj.offset = Math.round(message.offset);
		return obj;
	},
	create(base) {
		return QueryNodesByValueResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryNodesByValueResponse();
		message.nodes = Object.entries(object.nodes ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = TreeNode.fromPartial(value);
			return acc;
		}, {});
		message.offset = object.offset ?? 0;
		return message;
	}
};
function createBaseQueryNodesByValueResponse_NodesEntry() {
	return {
		key: "",
		value: void 0
	};
}
const QueryNodesByValueResponse_NodesEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value !== void 0) TreeNode.encode(message.value, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryNodesByValueResponse_NodesEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = TreeNode.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? TreeNode.fromJSON(object.value) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value !== void 0) obj.value = TreeNode.toJSON(message.value);
		return obj;
	},
	create(base) {
		return QueryNodesByValueResponse_NodesEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryNodesByValueResponse_NodesEntry();
		message.key = object.key ?? "";
		message.value = object.value !== void 0 && object.value !== null ? TreeNode.fromPartial(object.value) : void 0;
		return message;
	}
};
function createBaseGetUtxosForAddressRequest() {
	return {
		address: "",
		offset: 0,
		limit: 0,
		network: 0,
		excludeClaimed: false
	};
}
const GetUtxosForAddressRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.address !== "") writer.uint32(10).string(message.address);
		if (message.offset !== 0) writer.uint32(16).uint64(message.offset);
		if (message.limit !== 0) writer.uint32(24).uint64(message.limit);
		if (message.network !== 0) writer.uint32(32).int32(message.network);
		if (message.excludeClaimed !== false) writer.uint32(40).bool(message.excludeClaimed);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseGetUtxosForAddressRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.address = reader.string();
					continue;
				case 2:
					if (tag !== 16) break;
					message.offset = longToNumber(reader.uint64());
					continue;
				case 3:
					if (tag !== 24) break;
					message.limit = longToNumber(reader.uint64());
					continue;
				case 4:
					if (tag !== 32) break;
					message.network = reader.int32();
					continue;
				case 5:
					if (tag !== 40) break;
					message.excludeClaimed = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
			limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
			network: isSet(object.network) ? networkFromJSON(object.network) : 0,
			excludeClaimed: isSet(object.excludeClaimed) ? globalThis.Boolean(object.excludeClaimed) : false
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.address !== "") obj.address = message.address;
		if (message.offset !== 0) obj.offset = Math.round(message.offset);
		if (message.limit !== 0) obj.limit = Math.round(message.limit);
		if (message.network !== 0) obj.network = networkToJSON(message.network);
		if (message.excludeClaimed !== false) obj.excludeClaimed = message.excludeClaimed;
		return obj;
	},
	create(base) {
		return GetUtxosForAddressRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseGetUtxosForAddressRequest();
		message.address = object.address ?? "";
		message.offset = object.offset ?? 0;
		message.limit = object.limit ?? 0;
		message.network = object.network ?? 0;
		message.excludeClaimed = object.excludeClaimed ?? false;
		return message;
	}
};
function createBaseGetUtxosForAddressResponse() {
	return {
		utxos: [],
		offset: 0
	};
}
const GetUtxosForAddressResponse = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.utxos) UTXO.encode(v, writer.uint32(10).fork()).join();
		if (message.offset !== 0) writer.uint32(16).uint64(message.offset);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseGetUtxosForAddressResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.utxos.push(UTXO.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 16) break;
					message.offset = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			utxos: globalThis.Array.isArray(object?.utxos) ? object.utxos.map((e) => UTXO.fromJSON(e)) : [],
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.utxos?.length) obj.utxos = message.utxos.map((e) => UTXO.toJSON(e));
		if (message.offset !== 0) obj.offset = Math.round(message.offset);
		return obj;
	},
	create(base) {
		return GetUtxosForAddressResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseGetUtxosForAddressResponse();
		message.utxos = object.utxos?.map((e) => UTXO.fromPartial(e)) || [];
		message.offset = object.offset ?? 0;
		return message;
	}
};
function createBaseGetUtxosForIdentityRequest() {
	return {
		identityPublicKey: new Uint8Array(0),
		network: 0,
		excludeClaimed: false,
		page: void 0,
		includePending: false
	};
}
const GetUtxosForIdentityRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.identityPublicKey.length !== 0) writer.uint32(10).bytes(message.identityPublicKey);
		if (message.network !== 0) writer.uint32(16).int32(message.network);
		if (message.excludeClaimed !== false) writer.uint32(24).bool(message.excludeClaimed);
		if (message.page !== void 0) PageRequest.encode(message.page, writer.uint32(34).fork()).join();
		if (message.includePending !== false) writer.uint32(40).bool(message.includePending);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseGetUtxosForIdentityRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.identityPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) break;
					message.network = reader.int32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.excludeClaimed = reader.bool();
					continue;
				case 4:
					if (tag !== 34) break;
					message.page = PageRequest.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 40) break;
					message.includePending = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			identityPublicKey: isSet(object.identityPublicKey) ? bytesFromBase64(object.identityPublicKey) : new Uint8Array(0),
			network: isSet(object.network) ? networkFromJSON(object.network) : 0,
			excludeClaimed: isSet(object.excludeClaimed) ? globalThis.Boolean(object.excludeClaimed) : false,
			page: isSet(object.page) ? PageRequest.fromJSON(object.page) : void 0,
			includePending: isSet(object.includePending) ? globalThis.Boolean(object.includePending) : false
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.identityPublicKey.length !== 0) obj.identityPublicKey = base64FromBytes(message.identityPublicKey);
		if (message.network !== 0) obj.network = networkToJSON(message.network);
		if (message.excludeClaimed !== false) obj.excludeClaimed = message.excludeClaimed;
		if (message.page !== void 0) obj.page = PageRequest.toJSON(message.page);
		if (message.includePending !== false) obj.includePending = message.includePending;
		return obj;
	},
	create(base) {
		return GetUtxosForIdentityRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseGetUtxosForIdentityRequest();
		message.identityPublicKey = object.identityPublicKey ?? new Uint8Array(0);
		message.network = object.network ?? 0;
		message.excludeClaimed = object.excludeClaimed ?? false;
		message.page = object.page !== void 0 && object.page !== null ? PageRequest.fromPartial(object.page) : void 0;
		message.includePending = object.includePending ?? false;
		return message;
	}
};
function createBaseGetUtxosForIdentityResponse() {
	return {
		utxos: [],
		page: void 0
	};
}
const GetUtxosForIdentityResponse = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.utxos) AddressedUtxo.encode(v, writer.uint32(10).fork()).join();
		if (message.page !== void 0) PageResponse.encode(message.page, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseGetUtxosForIdentityResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.utxos.push(AddressedUtxo.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) break;
					message.page = PageResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			utxos: globalThis.Array.isArray(object?.utxos) ? object.utxos.map((e) => AddressedUtxo.fromJSON(e)) : [],
			page: isSet(object.page) ? PageResponse.fromJSON(object.page) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.utxos?.length) obj.utxos = message.utxos.map((e) => AddressedUtxo.toJSON(e));
		if (message.page !== void 0) obj.page = PageResponse.toJSON(message.page);
		return obj;
	},
	create(base) {
		return GetUtxosForIdentityResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseGetUtxosForIdentityResponse();
		message.utxos = object.utxos?.map((e) => AddressedUtxo.fromPartial(e)) || [];
		message.page = object.page !== void 0 && object.page !== null ? PageResponse.fromPartial(object.page) : void 0;
		return message;
	}
};
function createBaseQuerySparkInvoicesRequest() {
	return {
		limit: 0,
		offset: 0,
		invoice: []
	};
}
const QuerySparkInvoicesRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.limit !== 0) writer.uint32(8).int64(message.limit);
		if (message.offset !== 0) writer.uint32(16).int64(message.offset);
		for (const v of message.invoice) writer.uint32(26).string(v);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQuerySparkInvoicesRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.limit = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 16) break;
					message.offset = longToNumber(reader.int64());
					continue;
				case 3:
					if (tag !== 26) break;
					message.invoice.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
			invoice: globalThis.Array.isArray(object?.invoice) ? object.invoice.map((e) => globalThis.String(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.limit !== 0) obj.limit = Math.round(message.limit);
		if (message.offset !== 0) obj.offset = Math.round(message.offset);
		if (message.invoice?.length) obj.invoice = message.invoice;
		return obj;
	},
	create(base) {
		return QuerySparkInvoicesRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQuerySparkInvoicesRequest();
		message.limit = object.limit ?? 0;
		message.offset = object.offset ?? 0;
		message.invoice = object.invoice?.map((e) => e) || [];
		return message;
	}
};
function createBaseQuerySparkInvoicesResponse() {
	return {
		offset: 0,
		invoiceStatuses: []
	};
}
const QuerySparkInvoicesResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.offset !== 0) writer.uint32(8).int64(message.offset);
		for (const v of message.invoiceStatuses) InvoiceResponse.encode(v, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQuerySparkInvoicesResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.offset = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 18) break;
					message.invoiceStatuses.push(InvoiceResponse.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
			invoiceStatuses: globalThis.Array.isArray(object?.invoiceStatuses) ? object.invoiceStatuses.map((e) => InvoiceResponse.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.offset !== 0) obj.offset = Math.round(message.offset);
		if (message.invoiceStatuses?.length) obj.invoiceStatuses = message.invoiceStatuses.map((e) => InvoiceResponse.toJSON(e));
		return obj;
	},
	create(base) {
		return QuerySparkInvoicesResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQuerySparkInvoicesResponse();
		message.offset = object.offset ?? 0;
		message.invoiceStatuses = object.invoiceStatuses?.map((e) => InvoiceResponse.fromPartial(e)) || [];
		return message;
	}
};
function createBaseInvoiceResponse() {
	return {
		invoice: "",
		status: 0,
		transferType: void 0
	};
}
const InvoiceResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.invoice !== "") writer.uint32(10).string(message.invoice);
		if (message.status !== 0) writer.uint32(16).int32(message.status);
		switch (message.transferType?.$case) {
			case "satsTransfer":
				SatsTransfer.encode(message.transferType.satsTransfer, writer.uint32(26).fork()).join();
				break;
			case "tokenTransfer":
				TokenTransfer.encode(message.transferType.tokenTransfer, writer.uint32(34).fork()).join();
				break;
		}
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseInvoiceResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.invoice = reader.string();
					continue;
				case 2:
					if (tag !== 16) break;
					message.status = reader.int32();
					continue;
				case 3:
					if (tag !== 26) break;
					message.transferType = {
						$case: "satsTransfer",
						satsTransfer: SatsTransfer.decode(reader, reader.uint32())
					};
					continue;
				case 4:
					if (tag !== 34) break;
					message.transferType = {
						$case: "tokenTransfer",
						tokenTransfer: TokenTransfer.decode(reader, reader.uint32())
					};
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			invoice: isSet(object.invoice) ? globalThis.String(object.invoice) : "",
			status: isSet(object.status) ? invoiceStatusFromJSON(object.status) : 0,
			transferType: isSet(object.satsTransfer) ? {
				$case: "satsTransfer",
				satsTransfer: SatsTransfer.fromJSON(object.satsTransfer)
			} : isSet(object.tokenTransfer) ? {
				$case: "tokenTransfer",
				tokenTransfer: TokenTransfer.fromJSON(object.tokenTransfer)
			} : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.invoice !== "") obj.invoice = message.invoice;
		if (message.status !== 0) obj.status = invoiceStatusToJSON(message.status);
		if (message.transferType?.$case === "satsTransfer") obj.satsTransfer = SatsTransfer.toJSON(message.transferType.satsTransfer);
		else if (message.transferType?.$case === "tokenTransfer") obj.tokenTransfer = TokenTransfer.toJSON(message.transferType.tokenTransfer);
		return obj;
	},
	create(base) {
		return InvoiceResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseInvoiceResponse();
		message.invoice = object.invoice ?? "";
		message.status = object.status ?? 0;
		switch (object.transferType?.$case) {
			case "satsTransfer":
				if (object.transferType?.satsTransfer !== void 0 && object.transferType?.satsTransfer !== null) message.transferType = {
					$case: "satsTransfer",
					satsTransfer: SatsTransfer.fromPartial(object.transferType.satsTransfer)
				};
				break;
			case "tokenTransfer":
				if (object.transferType?.tokenTransfer !== void 0 && object.transferType?.tokenTransfer !== null) message.transferType = {
					$case: "tokenTransfer",
					tokenTransfer: TokenTransfer.fromPartial(object.transferType.tokenTransfer)
				};
				break;
		}
		return message;
	}
};
function createBaseSatsTransfer() {
	return { transferId: new Uint8Array(0) };
}
const SatsTransfer = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transferId.length !== 0) writer.uint32(10).bytes(message.transferId);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSatsTransfer();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transferId = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { transferId: isSet(object.transferId) ? bytesFromBase64(object.transferId) : new Uint8Array(0) };
	},
	toJSON(message) {
		const obj = {};
		if (message.transferId.length !== 0) obj.transferId = base64FromBytes(message.transferId);
		return obj;
	},
	create(base) {
		return SatsTransfer.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSatsTransfer();
		message.transferId = object.transferId ?? new Uint8Array(0);
		return message;
	}
};
function createBaseTokenTransfer() {
	return { finalTokenTransactionHash: new Uint8Array(0) };
}
const TokenTransfer = {
	encode(message, writer = new BinaryWriter()) {
		if (message.finalTokenTransactionHash.length !== 0) writer.uint32(10).bytes(message.finalTokenTransactionHash);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTokenTransfer();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.finalTokenTransactionHash = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { finalTokenTransactionHash: isSet(object.finalTokenTransactionHash) ? bytesFromBase64(object.finalTokenTransactionHash) : new Uint8Array(0) };
	},
	toJSON(message) {
		const obj = {};
		if (message.finalTokenTransactionHash.length !== 0) obj.finalTokenTransactionHash = base64FromBytes(message.finalTokenTransactionHash);
		return obj;
	},
	create(base) {
		return TokenTransfer.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTokenTransfer();
		message.finalTokenTransactionHash = object.finalTokenTransactionHash ?? new Uint8Array(0);
		return message;
	}
};
function createBaseInitiateSwapPrimaryTransferRequest() {
	return {
		transfer: void 0,
		adaptorPublicKeys: void 0
	};
}
const InitiateSwapPrimaryTransferRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transfer !== void 0) StartTransferRequest.encode(message.transfer, writer.uint32(10).fork()).join();
		if (message.adaptorPublicKeys !== void 0) AdaptorPublicKeyPackage.encode(message.adaptorPublicKeys, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseInitiateSwapPrimaryTransferRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transfer = StartTransferRequest.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.adaptorPublicKeys = AdaptorPublicKeyPackage.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transfer: isSet(object.transfer) ? StartTransferRequest.fromJSON(object.transfer) : void 0,
			adaptorPublicKeys: isSet(object.adaptorPublicKeys) ? AdaptorPublicKeyPackage.fromJSON(object.adaptorPublicKeys) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transfer !== void 0) obj.transfer = StartTransferRequest.toJSON(message.transfer);
		if (message.adaptorPublicKeys !== void 0) obj.adaptorPublicKeys = AdaptorPublicKeyPackage.toJSON(message.adaptorPublicKeys);
		return obj;
	},
	create(base) {
		return InitiateSwapPrimaryTransferRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseInitiateSwapPrimaryTransferRequest();
		message.transfer = object.transfer !== void 0 && object.transfer !== null ? StartTransferRequest.fromPartial(object.transfer) : void 0;
		message.adaptorPublicKeys = object.adaptorPublicKeys !== void 0 && object.adaptorPublicKeys !== null ? AdaptorPublicKeyPackage.fromPartial(object.adaptorPublicKeys) : void 0;
		return message;
	}
};
function createBaseInitiateSwapPrimaryTransferResponse() {
	return {
		transfer: void 0,
		signingResults: []
	};
}
const InitiateSwapPrimaryTransferResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.transfer !== void 0) Transfer.encode(message.transfer, writer.uint32(10).fork()).join();
		for (const v of message.signingResults) LeafRefundTxSigningResult.encode(v, writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseInitiateSwapPrimaryTransferResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.transfer = Transfer.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) break;
					message.signingResults.push(LeafRefundTxSigningResult.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			transfer: isSet(object.transfer) ? Transfer.fromJSON(object.transfer) : void 0,
			signingResults: globalThis.Array.isArray(object?.signingResults) ? object.signingResults.map((e) => LeafRefundTxSigningResult.fromJSON(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.transfer !== void 0) obj.transfer = Transfer.toJSON(message.transfer);
		if (message.signingResults?.length) obj.signingResults = message.signingResults.map((e) => LeafRefundTxSigningResult.toJSON(e));
		return obj;
	},
	create(base) {
		return InitiateSwapPrimaryTransferResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseInitiateSwapPrimaryTransferResponse();
		message.transfer = object.transfer !== void 0 && object.transfer !== null ? Transfer.fromPartial(object.transfer) : void 0;
		message.signingResults = object.signingResults?.map((e) => LeafRefundTxSigningResult.fromPartial(e)) || [];
		return message;
	}
};
function createBaseAdaptorPublicKeyPackage() {
	return {
		adaptorPublicKey: new Uint8Array(0),
		directAdaptorPublicKey: new Uint8Array(0),
		directFromCpfpAdaptorPublicKey: new Uint8Array(0),
		adaptorV2: false
	};
}
const AdaptorPublicKeyPackage = {
	encode(message, writer = new BinaryWriter()) {
		if (message.adaptorPublicKey.length !== 0) writer.uint32(10).bytes(message.adaptorPublicKey);
		if (message.directAdaptorPublicKey.length !== 0) writer.uint32(18).bytes(message.directAdaptorPublicKey);
		if (message.directFromCpfpAdaptorPublicKey.length !== 0) writer.uint32(26).bytes(message.directFromCpfpAdaptorPublicKey);
		if (message.adaptorV2 !== false) writer.uint32(32).bool(message.adaptorV2);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseAdaptorPublicKeyPackage();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.adaptorPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.directAdaptorPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.directFromCpfpAdaptorPublicKey = reader.bytes();
					continue;
				case 4:
					if (tag !== 32) break;
					message.adaptorV2 = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			adaptorPublicKey: isSet(object.adaptorPublicKey) ? bytesFromBase64(object.adaptorPublicKey) : new Uint8Array(0),
			directAdaptorPublicKey: isSet(object.directAdaptorPublicKey) ? bytesFromBase64(object.directAdaptorPublicKey) : new Uint8Array(0),
			directFromCpfpAdaptorPublicKey: isSet(object.directFromCpfpAdaptorPublicKey) ? bytesFromBase64(object.directFromCpfpAdaptorPublicKey) : new Uint8Array(0),
			adaptorV2: isSet(object.adaptorV2) ? globalThis.Boolean(object.adaptorV2) : false
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.adaptorPublicKey.length !== 0) obj.adaptorPublicKey = base64FromBytes(message.adaptorPublicKey);
		if (message.directAdaptorPublicKey.length !== 0) obj.directAdaptorPublicKey = base64FromBytes(message.directAdaptorPublicKey);
		if (message.directFromCpfpAdaptorPublicKey.length !== 0) obj.directFromCpfpAdaptorPublicKey = base64FromBytes(message.directFromCpfpAdaptorPublicKey);
		if (message.adaptorV2 !== false) obj.adaptorV2 = message.adaptorV2;
		return obj;
	},
	create(base) {
		return AdaptorPublicKeyPackage.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseAdaptorPublicKeyPackage();
		message.adaptorPublicKey = object.adaptorPublicKey ?? new Uint8Array(0);
		message.directAdaptorPublicKey = object.directAdaptorPublicKey ?? new Uint8Array(0);
		message.directFromCpfpAdaptorPublicKey = object.directFromCpfpAdaptorPublicKey ?? new Uint8Array(0);
		message.adaptorV2 = object.adaptorV2 ?? false;
		return message;
	}
};
function createBaseWalletSetting() {
	return {
		ownerIdentityPublicKey: new Uint8Array(0),
		privateEnabled: false,
		masterIdentityPublicKey: void 0
	};
}
const WalletSetting = {
	encode(message, writer = new BinaryWriter()) {
		if (message.ownerIdentityPublicKey.length !== 0) writer.uint32(10).bytes(message.ownerIdentityPublicKey);
		if (message.privateEnabled !== false) writer.uint32(16).bool(message.privateEnabled);
		if (message.masterIdentityPublicKey !== void 0) writer.uint32(26).bytes(message.masterIdentityPublicKey);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseWalletSetting();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.ownerIdentityPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) break;
					message.privateEnabled = reader.bool();
					continue;
				case 3:
					if (tag !== 26) break;
					message.masterIdentityPublicKey = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			ownerIdentityPublicKey: isSet(object.ownerIdentityPublicKey) ? bytesFromBase64(object.ownerIdentityPublicKey) : new Uint8Array(0),
			privateEnabled: isSet(object.privateEnabled) ? globalThis.Boolean(object.privateEnabled) : false,
			masterIdentityPublicKey: isSet(object.masterIdentityPublicKey) ? bytesFromBase64(object.masterIdentityPublicKey) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.ownerIdentityPublicKey.length !== 0) obj.ownerIdentityPublicKey = base64FromBytes(message.ownerIdentityPublicKey);
		if (message.privateEnabled !== false) obj.privateEnabled = message.privateEnabled;
		if (message.masterIdentityPublicKey !== void 0) obj.masterIdentityPublicKey = base64FromBytes(message.masterIdentityPublicKey);
		return obj;
	},
	create(base) {
		return WalletSetting.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseWalletSetting();
		message.ownerIdentityPublicKey = object.ownerIdentityPublicKey ?? new Uint8Array(0);
		message.privateEnabled = object.privateEnabled ?? false;
		message.masterIdentityPublicKey = object.masterIdentityPublicKey ?? void 0;
		return message;
	}
};
function createBaseUpdateWalletSettingRequest() {
	return {
		privateEnabled: void 0,
		masterIdentityPublicKey: void 0
	};
}
const UpdateWalletSettingRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.privateEnabled !== void 0) writer.uint32(8).bool(message.privateEnabled);
		switch (message.masterIdentityPublicKey?.$case) {
			case "setMasterIdentityPublicKey":
				writer.uint32(18).bytes(message.masterIdentityPublicKey.setMasterIdentityPublicKey);
				break;
			case "clearMasterIdentityPublicKey":
				writer.uint32(24).bool(message.masterIdentityPublicKey.clearMasterIdentityPublicKey);
				break;
		}
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseUpdateWalletSettingRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.privateEnabled = reader.bool();
					continue;
				case 2:
					if (tag !== 18) break;
					message.masterIdentityPublicKey = {
						$case: "setMasterIdentityPublicKey",
						setMasterIdentityPublicKey: reader.bytes()
					};
					continue;
				case 3:
					if (tag !== 24) break;
					message.masterIdentityPublicKey = {
						$case: "clearMasterIdentityPublicKey",
						clearMasterIdentityPublicKey: reader.bool()
					};
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			privateEnabled: isSet(object.privateEnabled) ? globalThis.Boolean(object.privateEnabled) : void 0,
			masterIdentityPublicKey: isSet(object.setMasterIdentityPublicKey) ? {
				$case: "setMasterIdentityPublicKey",
				setMasterIdentityPublicKey: bytesFromBase64(object.setMasterIdentityPublicKey)
			} : isSet(object.clearMasterIdentityPublicKey) ? {
				$case: "clearMasterIdentityPublicKey",
				clearMasterIdentityPublicKey: globalThis.Boolean(object.clearMasterIdentityPublicKey)
			} : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.privateEnabled !== void 0) obj.privateEnabled = message.privateEnabled;
		if (message.masterIdentityPublicKey?.$case === "setMasterIdentityPublicKey") obj.setMasterIdentityPublicKey = base64FromBytes(message.masterIdentityPublicKey.setMasterIdentityPublicKey);
		else if (message.masterIdentityPublicKey?.$case === "clearMasterIdentityPublicKey") obj.clearMasterIdentityPublicKey = message.masterIdentityPublicKey.clearMasterIdentityPublicKey;
		return obj;
	},
	create(base) {
		return UpdateWalletSettingRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseUpdateWalletSettingRequest();
		message.privateEnabled = object.privateEnabled ?? void 0;
		switch (object.masterIdentityPublicKey?.$case) {
			case "setMasterIdentityPublicKey":
				if (object.masterIdentityPublicKey?.setMasterIdentityPublicKey !== void 0 && object.masterIdentityPublicKey?.setMasterIdentityPublicKey !== null) message.masterIdentityPublicKey = {
					$case: "setMasterIdentityPublicKey",
					setMasterIdentityPublicKey: object.masterIdentityPublicKey.setMasterIdentityPublicKey
				};
				break;
			case "clearMasterIdentityPublicKey":
				if (object.masterIdentityPublicKey?.clearMasterIdentityPublicKey !== void 0 && object.masterIdentityPublicKey?.clearMasterIdentityPublicKey !== null) message.masterIdentityPublicKey = {
					$case: "clearMasterIdentityPublicKey",
					clearMasterIdentityPublicKey: object.masterIdentityPublicKey.clearMasterIdentityPublicKey
				};
				break;
		}
		return message;
	}
};
function createBaseUpdateWalletSettingResponse() {
	return { walletSetting: void 0 };
}
const UpdateWalletSettingResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.walletSetting !== void 0) WalletSetting.encode(message.walletSetting, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseUpdateWalletSettingResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.walletSetting = WalletSetting.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { walletSetting: isSet(object.walletSetting) ? WalletSetting.fromJSON(object.walletSetting) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.walletSetting !== void 0) obj.walletSetting = WalletSetting.toJSON(message.walletSetting);
		return obj;
	},
	create(base) {
		return UpdateWalletSettingResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseUpdateWalletSettingResponse();
		message.walletSetting = object.walletSetting !== void 0 && object.walletSetting !== null ? WalletSetting.fromPartial(object.walletSetting) : void 0;
		return message;
	}
};
function createBaseQueryWalletSettingRequest() {
	return {};
}
const QueryWalletSettingRequest = {
	encode(_, writer = new BinaryWriter()) {
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryWalletSettingRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(_) {
		return {};
	},
	toJSON(_) {
		return {};
	},
	create(base) {
		return QueryWalletSettingRequest.fromPartial(base ?? {});
	},
	fromPartial(_) {
		return createBaseQueryWalletSettingRequest();
	}
};
function createBaseQueryWalletSettingResponse() {
	return { walletSetting: void 0 };
}
const QueryWalletSettingResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.walletSetting !== void 0) WalletSetting.encode(message.walletSetting, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryWalletSettingResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.walletSetting = WalletSetting.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { walletSetting: isSet(object.walletSetting) ? WalletSetting.fromJSON(object.walletSetting) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.walletSetting !== void 0) obj.walletSetting = WalletSetting.toJSON(message.walletSetting);
		return obj;
	},
	create(base) {
		return QueryWalletSettingResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryWalletSettingResponse();
		message.walletSetting = object.walletSetting !== void 0 && object.walletSetting !== null ? WalletSetting.fromPartial(object.walletSetting) : void 0;
		return message;
	}
};
function createBaseDelegationGrant() {
	return {
		grantId: "",
		ownerIdentityPublicKey: new Uint8Array(0),
		spenders: [],
		expiryTime: void 0,
		scopeTransfer: false,
		scopeRenew: false,
		scopeClaim: false,
		feeFlatSats: 0,
		feeCollectorIdentityPublicKey: void 0,
		version: 0,
		ownerSignature: new Uint8Array(0),
		status: 0,
		network: 0
	};
}
const DelegationGrant = {
	encode(message, writer = new BinaryWriter()) {
		if (message.grantId !== "") writer.uint32(10).string(message.grantId);
		if (message.ownerIdentityPublicKey.length !== 0) writer.uint32(18).bytes(message.ownerIdentityPublicKey);
		for (const v of message.spenders) DelegationSpender.encode(v, writer.uint32(26).fork()).join();
		if (message.expiryTime !== void 0) Timestamp.encode(toTimestamp(message.expiryTime), writer.uint32(34).fork()).join();
		if (message.scopeTransfer !== false) writer.uint32(40).bool(message.scopeTransfer);
		if (message.scopeRenew !== false) writer.uint32(48).bool(message.scopeRenew);
		if (message.scopeClaim !== false) writer.uint32(56).bool(message.scopeClaim);
		if (message.feeFlatSats !== 0) writer.uint32(64).uint64(message.feeFlatSats);
		if (message.feeCollectorIdentityPublicKey !== void 0) writer.uint32(74).bytes(message.feeCollectorIdentityPublicKey);
		if (message.version !== 0) writer.uint32(80).uint64(message.version);
		if (message.ownerSignature.length !== 0) writer.uint32(90).bytes(message.ownerSignature);
		if (message.status !== 0) writer.uint32(96).int32(message.status);
		if (message.network !== 0) writer.uint32(104).int32(message.network);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseDelegationGrant();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.grantId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.ownerIdentityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.spenders.push(DelegationSpender.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) break;
					message.expiryTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 40) break;
					message.scopeTransfer = reader.bool();
					continue;
				case 6:
					if (tag !== 48) break;
					message.scopeRenew = reader.bool();
					continue;
				case 7:
					if (tag !== 56) break;
					message.scopeClaim = reader.bool();
					continue;
				case 8:
					if (tag !== 64) break;
					message.feeFlatSats = longToNumber(reader.uint64());
					continue;
				case 9:
					if (tag !== 74) break;
					message.feeCollectorIdentityPublicKey = reader.bytes();
					continue;
				case 10:
					if (tag !== 80) break;
					message.version = longToNumber(reader.uint64());
					continue;
				case 11:
					if (tag !== 90) break;
					message.ownerSignature = reader.bytes();
					continue;
				case 12:
					if (tag !== 96) break;
					message.status = reader.int32();
					continue;
				case 13:
					if (tag !== 104) break;
					message.network = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			grantId: isSet(object.grantId) ? globalThis.String(object.grantId) : "",
			ownerIdentityPublicKey: isSet(object.ownerIdentityPublicKey) ? bytesFromBase64(object.ownerIdentityPublicKey) : new Uint8Array(0),
			spenders: globalThis.Array.isArray(object?.spenders) ? object.spenders.map((e) => DelegationSpender.fromJSON(e)) : [],
			expiryTime: isSet(object.expiryTime) ? fromJsonTimestamp(object.expiryTime) : void 0,
			scopeTransfer: isSet(object.scopeTransfer) ? globalThis.Boolean(object.scopeTransfer) : false,
			scopeRenew: isSet(object.scopeRenew) ? globalThis.Boolean(object.scopeRenew) : false,
			scopeClaim: isSet(object.scopeClaim) ? globalThis.Boolean(object.scopeClaim) : false,
			feeFlatSats: isSet(object.feeFlatSats) ? globalThis.Number(object.feeFlatSats) : 0,
			feeCollectorIdentityPublicKey: isSet(object.feeCollectorIdentityPublicKey) ? bytesFromBase64(object.feeCollectorIdentityPublicKey) : void 0,
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
			ownerSignature: isSet(object.ownerSignature) ? bytesFromBase64(object.ownerSignature) : new Uint8Array(0),
			status: isSet(object.status) ? delegationStatusFromJSON(object.status) : 0,
			network: isSet(object.network) ? networkFromJSON(object.network) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.grantId !== "") obj.grantId = message.grantId;
		if (message.ownerIdentityPublicKey.length !== 0) obj.ownerIdentityPublicKey = base64FromBytes(message.ownerIdentityPublicKey);
		if (message.spenders?.length) obj.spenders = message.spenders.map((e) => DelegationSpender.toJSON(e));
		if (message.expiryTime !== void 0) obj.expiryTime = message.expiryTime.toISOString();
		if (message.scopeTransfer !== false) obj.scopeTransfer = message.scopeTransfer;
		if (message.scopeRenew !== false) obj.scopeRenew = message.scopeRenew;
		if (message.scopeClaim !== false) obj.scopeClaim = message.scopeClaim;
		if (message.feeFlatSats !== 0) obj.feeFlatSats = Math.round(message.feeFlatSats);
		if (message.feeCollectorIdentityPublicKey !== void 0) obj.feeCollectorIdentityPublicKey = base64FromBytes(message.feeCollectorIdentityPublicKey);
		if (message.version !== 0) obj.version = Math.round(message.version);
		if (message.ownerSignature.length !== 0) obj.ownerSignature = base64FromBytes(message.ownerSignature);
		if (message.status !== 0) obj.status = delegationStatusToJSON(message.status);
		if (message.network !== 0) obj.network = networkToJSON(message.network);
		return obj;
	},
	create(base) {
		return DelegationGrant.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseDelegationGrant();
		message.grantId = object.grantId ?? "";
		message.ownerIdentityPublicKey = object.ownerIdentityPublicKey ?? new Uint8Array(0);
		message.spenders = object.spenders?.map((e) => DelegationSpender.fromPartial(e)) || [];
		message.expiryTime = object.expiryTime ?? void 0;
		message.scopeTransfer = object.scopeTransfer ?? false;
		message.scopeRenew = object.scopeRenew ?? false;
		message.scopeClaim = object.scopeClaim ?? false;
		message.feeFlatSats = object.feeFlatSats ?? 0;
		message.feeCollectorIdentityPublicKey = object.feeCollectorIdentityPublicKey ?? void 0;
		message.version = object.version ?? 0;
		message.ownerSignature = object.ownerSignature ?? new Uint8Array(0);
		message.status = object.status ?? 0;
		message.network = object.network ?? 0;
		return message;
	}
};
function createBaseDelegationSpender() {
	return {
		spenderIdentityPublicKey: new Uint8Array(0),
		perTxCapSats: 0,
		rollingLimitSats: 0,
		rollingWindowSeconds: 0,
		status: 0,
		perTxUnlimited: false,
		rollingUnlimited: false
	};
}
const DelegationSpender = {
	encode(message, writer = new BinaryWriter()) {
		if (message.spenderIdentityPublicKey.length !== 0) writer.uint32(10).bytes(message.spenderIdentityPublicKey);
		if (message.perTxCapSats !== 0) writer.uint32(16).uint64(message.perTxCapSats);
		if (message.rollingLimitSats !== 0) writer.uint32(24).uint64(message.rollingLimitSats);
		if (message.rollingWindowSeconds !== 0) writer.uint32(32).uint64(message.rollingWindowSeconds);
		if (message.status !== 0) writer.uint32(40).int32(message.status);
		if (message.perTxUnlimited !== false) writer.uint32(48).bool(message.perTxUnlimited);
		if (message.rollingUnlimited !== false) writer.uint32(56).bool(message.rollingUnlimited);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseDelegationSpender();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.spenderIdentityPublicKey = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) break;
					message.perTxCapSats = longToNumber(reader.uint64());
					continue;
				case 3:
					if (tag !== 24) break;
					message.rollingLimitSats = longToNumber(reader.uint64());
					continue;
				case 4:
					if (tag !== 32) break;
					message.rollingWindowSeconds = longToNumber(reader.uint64());
					continue;
				case 5:
					if (tag !== 40) break;
					message.status = reader.int32();
					continue;
				case 6:
					if (tag !== 48) break;
					message.perTxUnlimited = reader.bool();
					continue;
				case 7:
					if (tag !== 56) break;
					message.rollingUnlimited = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			spenderIdentityPublicKey: isSet(object.spenderIdentityPublicKey) ? bytesFromBase64(object.spenderIdentityPublicKey) : new Uint8Array(0),
			perTxCapSats: isSet(object.perTxCapSats) ? globalThis.Number(object.perTxCapSats) : 0,
			rollingLimitSats: isSet(object.rollingLimitSats) ? globalThis.Number(object.rollingLimitSats) : 0,
			rollingWindowSeconds: isSet(object.rollingWindowSeconds) ? globalThis.Number(object.rollingWindowSeconds) : 0,
			status: isSet(object.status) ? delegationStatusFromJSON(object.status) : 0,
			perTxUnlimited: isSet(object.perTxUnlimited) ? globalThis.Boolean(object.perTxUnlimited) : false,
			rollingUnlimited: isSet(object.rollingUnlimited) ? globalThis.Boolean(object.rollingUnlimited) : false
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.spenderIdentityPublicKey.length !== 0) obj.spenderIdentityPublicKey = base64FromBytes(message.spenderIdentityPublicKey);
		if (message.perTxCapSats !== 0) obj.perTxCapSats = Math.round(message.perTxCapSats);
		if (message.rollingLimitSats !== 0) obj.rollingLimitSats = Math.round(message.rollingLimitSats);
		if (message.rollingWindowSeconds !== 0) obj.rollingWindowSeconds = Math.round(message.rollingWindowSeconds);
		if (message.status !== 0) obj.status = delegationStatusToJSON(message.status);
		if (message.perTxUnlimited !== false) obj.perTxUnlimited = message.perTxUnlimited;
		if (message.rollingUnlimited !== false) obj.rollingUnlimited = message.rollingUnlimited;
		return obj;
	},
	create(base) {
		return DelegationSpender.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseDelegationSpender();
		message.spenderIdentityPublicKey = object.spenderIdentityPublicKey ?? new Uint8Array(0);
		message.perTxCapSats = object.perTxCapSats ?? 0;
		message.rollingLimitSats = object.rollingLimitSats ?? 0;
		message.rollingWindowSeconds = object.rollingWindowSeconds ?? 0;
		message.status = object.status ?? 0;
		message.perTxUnlimited = object.perTxUnlimited ?? false;
		message.rollingUnlimited = object.rollingUnlimited ?? false;
		return message;
	}
};
function createBaseCreateDelegationGrantRequest() {
	return { grant: void 0 };
}
const CreateDelegationGrantRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.grant !== void 0) DelegationGrant.encode(message.grant, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCreateDelegationGrantRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.grant = DelegationGrant.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { grant: isSet(object.grant) ? DelegationGrant.fromJSON(object.grant) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.grant !== void 0) obj.grant = DelegationGrant.toJSON(message.grant);
		return obj;
	},
	create(base) {
		return CreateDelegationGrantRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCreateDelegationGrantRequest();
		message.grant = object.grant !== void 0 && object.grant !== null ? DelegationGrant.fromPartial(object.grant) : void 0;
		return message;
	}
};
function createBaseCreateDelegationGrantResponse() {
	return { grant: void 0 };
}
const CreateDelegationGrantResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.grant !== void 0) DelegationGrant.encode(message.grant, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseCreateDelegationGrantResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.grant = DelegationGrant.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { grant: isSet(object.grant) ? DelegationGrant.fromJSON(object.grant) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.grant !== void 0) obj.grant = DelegationGrant.toJSON(message.grant);
		return obj;
	},
	create(base) {
		return CreateDelegationGrantResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseCreateDelegationGrantResponse();
		message.grant = object.grant !== void 0 && object.grant !== null ? DelegationGrant.fromPartial(object.grant) : void 0;
		return message;
	}
};
function createBaseRevokeDelegationGrantRequest() {
	return {
		grantId: "",
		ownerIdentityPublicKey: new Uint8Array(0),
		version: 0,
		ownerSignature: new Uint8Array(0)
	};
}
const RevokeDelegationGrantRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.grantId !== "") writer.uint32(10).string(message.grantId);
		if (message.ownerIdentityPublicKey.length !== 0) writer.uint32(18).bytes(message.ownerIdentityPublicKey);
		if (message.version !== 0) writer.uint32(24).uint64(message.version);
		if (message.ownerSignature.length !== 0) writer.uint32(34).bytes(message.ownerSignature);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRevokeDelegationGrantRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.grantId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.ownerIdentityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 24) break;
					message.version = longToNumber(reader.uint64());
					continue;
				case 4:
					if (tag !== 34) break;
					message.ownerSignature = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			grantId: isSet(object.grantId) ? globalThis.String(object.grantId) : "",
			ownerIdentityPublicKey: isSet(object.ownerIdentityPublicKey) ? bytesFromBase64(object.ownerIdentityPublicKey) : new Uint8Array(0),
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
			ownerSignature: isSet(object.ownerSignature) ? bytesFromBase64(object.ownerSignature) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.grantId !== "") obj.grantId = message.grantId;
		if (message.ownerIdentityPublicKey.length !== 0) obj.ownerIdentityPublicKey = base64FromBytes(message.ownerIdentityPublicKey);
		if (message.version !== 0) obj.version = Math.round(message.version);
		if (message.ownerSignature.length !== 0) obj.ownerSignature = base64FromBytes(message.ownerSignature);
		return obj;
	},
	create(base) {
		return RevokeDelegationGrantRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRevokeDelegationGrantRequest();
		message.grantId = object.grantId ?? "";
		message.ownerIdentityPublicKey = object.ownerIdentityPublicKey ?? new Uint8Array(0);
		message.version = object.version ?? 0;
		message.ownerSignature = object.ownerSignature ?? new Uint8Array(0);
		return message;
	}
};
function createBaseRevokeDelegationGrantResponse() {
	return { grant: void 0 };
}
const RevokeDelegationGrantResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.grant !== void 0) DelegationGrant.encode(message.grant, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRevokeDelegationGrantResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.grant = DelegationGrant.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { grant: isSet(object.grant) ? DelegationGrant.fromJSON(object.grant) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.grant !== void 0) obj.grant = DelegationGrant.toJSON(message.grant);
		return obj;
	},
	create(base) {
		return RevokeDelegationGrantResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRevokeDelegationGrantResponse();
		message.grant = object.grant !== void 0 && object.grant !== null ? DelegationGrant.fromPartial(object.grant) : void 0;
		return message;
	}
};
function createBaseAddDelegationSpenderRequest() {
	return {
		grantId: "",
		spender: void 0,
		version: 0,
		ownerSignature: new Uint8Array(0)
	};
}
const AddDelegationSpenderRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.grantId !== "") writer.uint32(10).string(message.grantId);
		if (message.spender !== void 0) DelegationSpender.encode(message.spender, writer.uint32(18).fork()).join();
		if (message.version !== 0) writer.uint32(24).uint64(message.version);
		if (message.ownerSignature.length !== 0) writer.uint32(34).bytes(message.ownerSignature);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseAddDelegationSpenderRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.grantId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.spender = DelegationSpender.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) break;
					message.version = longToNumber(reader.uint64());
					continue;
				case 4:
					if (tag !== 34) break;
					message.ownerSignature = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			grantId: isSet(object.grantId) ? globalThis.String(object.grantId) : "",
			spender: isSet(object.spender) ? DelegationSpender.fromJSON(object.spender) : void 0,
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
			ownerSignature: isSet(object.ownerSignature) ? bytesFromBase64(object.ownerSignature) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.grantId !== "") obj.grantId = message.grantId;
		if (message.spender !== void 0) obj.spender = DelegationSpender.toJSON(message.spender);
		if (message.version !== 0) obj.version = Math.round(message.version);
		if (message.ownerSignature.length !== 0) obj.ownerSignature = base64FromBytes(message.ownerSignature);
		return obj;
	},
	create(base) {
		return AddDelegationSpenderRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseAddDelegationSpenderRequest();
		message.grantId = object.grantId ?? "";
		message.spender = object.spender !== void 0 && object.spender !== null ? DelegationSpender.fromPartial(object.spender) : void 0;
		message.version = object.version ?? 0;
		message.ownerSignature = object.ownerSignature ?? new Uint8Array(0);
		return message;
	}
};
function createBaseAddDelegationSpenderResponse() {
	return { grant: void 0 };
}
const AddDelegationSpenderResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.grant !== void 0) DelegationGrant.encode(message.grant, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseAddDelegationSpenderResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.grant = DelegationGrant.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { grant: isSet(object.grant) ? DelegationGrant.fromJSON(object.grant) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.grant !== void 0) obj.grant = DelegationGrant.toJSON(message.grant);
		return obj;
	},
	create(base) {
		return AddDelegationSpenderResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseAddDelegationSpenderResponse();
		message.grant = object.grant !== void 0 && object.grant !== null ? DelegationGrant.fromPartial(object.grant) : void 0;
		return message;
	}
};
function createBaseRevokeDelegationSpenderRequest() {
	return {
		grantId: "",
		spenderIdentityPublicKey: new Uint8Array(0),
		version: 0,
		ownerSignature: new Uint8Array(0)
	};
}
const RevokeDelegationSpenderRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.grantId !== "") writer.uint32(10).string(message.grantId);
		if (message.spenderIdentityPublicKey.length !== 0) writer.uint32(18).bytes(message.spenderIdentityPublicKey);
		if (message.version !== 0) writer.uint32(24).uint64(message.version);
		if (message.ownerSignature.length !== 0) writer.uint32(34).bytes(message.ownerSignature);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRevokeDelegationSpenderRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.grantId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.spenderIdentityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 24) break;
					message.version = longToNumber(reader.uint64());
					continue;
				case 4:
					if (tag !== 34) break;
					message.ownerSignature = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			grantId: isSet(object.grantId) ? globalThis.String(object.grantId) : "",
			spenderIdentityPublicKey: isSet(object.spenderIdentityPublicKey) ? bytesFromBase64(object.spenderIdentityPublicKey) : new Uint8Array(0),
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
			ownerSignature: isSet(object.ownerSignature) ? bytesFromBase64(object.ownerSignature) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.grantId !== "") obj.grantId = message.grantId;
		if (message.spenderIdentityPublicKey.length !== 0) obj.spenderIdentityPublicKey = base64FromBytes(message.spenderIdentityPublicKey);
		if (message.version !== 0) obj.version = Math.round(message.version);
		if (message.ownerSignature.length !== 0) obj.ownerSignature = base64FromBytes(message.ownerSignature);
		return obj;
	},
	create(base) {
		return RevokeDelegationSpenderRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRevokeDelegationSpenderRequest();
		message.grantId = object.grantId ?? "";
		message.spenderIdentityPublicKey = object.spenderIdentityPublicKey ?? new Uint8Array(0);
		message.version = object.version ?? 0;
		message.ownerSignature = object.ownerSignature ?? new Uint8Array(0);
		return message;
	}
};
function createBaseRevokeDelegationSpenderResponse() {
	return { grant: void 0 };
}
const RevokeDelegationSpenderResponse = {
	encode(message, writer = new BinaryWriter()) {
		if (message.grant !== void 0) DelegationGrant.encode(message.grant, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseRevokeDelegationSpenderResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.grant = DelegationGrant.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { grant: isSet(object.grant) ? DelegationGrant.fromJSON(object.grant) : void 0 };
	},
	toJSON(message) {
		const obj = {};
		if (message.grant !== void 0) obj.grant = DelegationGrant.toJSON(message.grant);
		return obj;
	},
	create(base) {
		return RevokeDelegationSpenderResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseRevokeDelegationSpenderResponse();
		message.grant = object.grant !== void 0 && object.grant !== null ? DelegationGrant.fromPartial(object.grant) : void 0;
		return message;
	}
};
function createBaseQueryDelegationGrantsRequest() {
	return {
		filter: void 0,
		limit: 0,
		offset: 0
	};
}
const QueryDelegationGrantsRequest = {
	encode(message, writer = new BinaryWriter()) {
		switch (message.filter?.$case) {
			case "ownerIdentityPublicKey":
				writer.uint32(10).bytes(message.filter.ownerIdentityPublicKey);
				break;
			case "delegateIdentityPublicKey":
				writer.uint32(18).bytes(message.filter.delegateIdentityPublicKey);
				break;
		}
		if (message.limit !== 0) writer.uint32(24).int64(message.limit);
		if (message.offset !== 0) writer.uint32(32).int64(message.offset);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegationGrantsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.filter = {
						$case: "ownerIdentityPublicKey",
						ownerIdentityPublicKey: reader.bytes()
					};
					continue;
				case 2:
					if (tag !== 18) break;
					message.filter = {
						$case: "delegateIdentityPublicKey",
						delegateIdentityPublicKey: reader.bytes()
					};
					continue;
				case 3:
					if (tag !== 24) break;
					message.limit = longToNumber(reader.int64());
					continue;
				case 4:
					if (tag !== 32) break;
					message.offset = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			filter: isSet(object.ownerIdentityPublicKey) ? {
				$case: "ownerIdentityPublicKey",
				ownerIdentityPublicKey: bytesFromBase64(object.ownerIdentityPublicKey)
			} : isSet(object.delegateIdentityPublicKey) ? {
				$case: "delegateIdentityPublicKey",
				delegateIdentityPublicKey: bytesFromBase64(object.delegateIdentityPublicKey)
			} : void 0,
			limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.filter?.$case === "ownerIdentityPublicKey") obj.ownerIdentityPublicKey = base64FromBytes(message.filter.ownerIdentityPublicKey);
		else if (message.filter?.$case === "delegateIdentityPublicKey") obj.delegateIdentityPublicKey = base64FromBytes(message.filter.delegateIdentityPublicKey);
		if (message.limit !== 0) obj.limit = Math.round(message.limit);
		if (message.offset !== 0) obj.offset = Math.round(message.offset);
		return obj;
	},
	create(base) {
		return QueryDelegationGrantsRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryDelegationGrantsRequest();
		switch (object.filter?.$case) {
			case "ownerIdentityPublicKey":
				if (object.filter?.ownerIdentityPublicKey !== void 0 && object.filter?.ownerIdentityPublicKey !== null) message.filter = {
					$case: "ownerIdentityPublicKey",
					ownerIdentityPublicKey: object.filter.ownerIdentityPublicKey
				};
				break;
			case "delegateIdentityPublicKey":
				if (object.filter?.delegateIdentityPublicKey !== void 0 && object.filter?.delegateIdentityPublicKey !== null) message.filter = {
					$case: "delegateIdentityPublicKey",
					delegateIdentityPublicKey: object.filter.delegateIdentityPublicKey
				};
				break;
		}
		message.limit = object.limit ?? 0;
		message.offset = object.offset ?? 0;
		return message;
	}
};
function createBaseDelegationGrantInfo() {
	return {
		grant: void 0,
		spentSatsBySpender: {}
	};
}
const DelegationGrantInfo = {
	encode(message, writer = new BinaryWriter()) {
		if (message.grant !== void 0) DelegationGrant.encode(message.grant, writer.uint32(10).fork()).join();
		Object.entries(message.spentSatsBySpender).forEach(([key, value]) => {
			DelegationGrantInfo_SpentSatsBySpenderEntry.encode({
				key,
				value
			}, writer.uint32(18).fork()).join();
		});
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseDelegationGrantInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.grant = DelegationGrant.decode(reader, reader.uint32());
					continue;
				case 2: {
					if (tag !== 18) break;
					const entry2 = DelegationGrantInfo_SpentSatsBySpenderEntry.decode(reader, reader.uint32());
					if (entry2.value !== void 0) message.spentSatsBySpender[entry2.key] = entry2.value;
					continue;
				}
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			grant: isSet(object.grant) ? DelegationGrant.fromJSON(object.grant) : void 0,
			spentSatsBySpender: isObject(object.spentSatsBySpender) ? Object.entries(object.spentSatsBySpender).reduce((acc, [key, value]) => {
				acc[key] = Number(value);
				return acc;
			}, {}) : {}
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.grant !== void 0) obj.grant = DelegationGrant.toJSON(message.grant);
		if (message.spentSatsBySpender) {
			const entries = Object.entries(message.spentSatsBySpender);
			if (entries.length > 0) {
				obj.spentSatsBySpender = {};
				entries.forEach(([k, v]) => {
					obj.spentSatsBySpender[k] = Math.round(v);
				});
			}
		}
		return obj;
	},
	create(base) {
		return DelegationGrantInfo.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseDelegationGrantInfo();
		message.grant = object.grant !== void 0 && object.grant !== null ? DelegationGrant.fromPartial(object.grant) : void 0;
		message.spentSatsBySpender = Object.entries(object.spentSatsBySpender ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = globalThis.Number(value);
			return acc;
		}, {});
		return message;
	}
};
function createBaseDelegationGrantInfo_SpentSatsBySpenderEntry() {
	return {
		key: "",
		value: 0
	};
}
const DelegationGrantInfo_SpentSatsBySpenderEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value !== 0) writer.uint32(16).uint64(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseDelegationGrantInfo_SpentSatsBySpenderEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 16) break;
					message.value = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? globalThis.Number(object.value) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value !== 0) obj.value = Math.round(message.value);
		return obj;
	},
	create(base) {
		return DelegationGrantInfo_SpentSatsBySpenderEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseDelegationGrantInfo_SpentSatsBySpenderEntry();
		message.key = object.key ?? "";
		message.value = object.value ?? 0;
		return message;
	}
};
function createBaseQueryDelegationGrantsResponse() {
	return {
		grants: [],
		offset: 0
	};
}
const QueryDelegationGrantsResponse = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.grants) DelegationGrantInfo.encode(v, writer.uint32(10).fork()).join();
		if (message.offset !== 0) writer.uint32(16).int64(message.offset);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseQueryDelegationGrantsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.grants.push(DelegationGrantInfo.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 16) break;
					message.offset = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			grants: globalThis.Array.isArray(object?.grants) ? object.grants.map((e) => DelegationGrantInfo.fromJSON(e)) : [],
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.grants?.length) obj.grants = message.grants.map((e) => DelegationGrantInfo.toJSON(e));
		if (message.offset !== 0) obj.offset = Math.round(message.offset);
		return obj;
	},
	create(base) {
		return QueryDelegationGrantsResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseQueryDelegationGrantsResponse();
		message.grants = object.grants?.map((e) => DelegationGrantInfo.fromPartial(e)) || [];
		message.offset = object.offset ?? 0;
		return message;
	}
};
function createBaseLeafDecompositionInstall() {
	return {
		leafId: "",
		delegateSigningPublicKey: new Uint8Array(0)
	};
}
const LeafDecompositionInstall = {
	encode(message, writer = new BinaryWriter()) {
		if (message.leafId !== "") writer.uint32(10).string(message.leafId);
		if (message.delegateSigningPublicKey.length !== 0) writer.uint32(18).bytes(message.delegateSigningPublicKey);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseLeafDecompositionInstall();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.leafId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.delegateSigningPublicKey = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			leafId: isSet(object.leafId) ? globalThis.String(object.leafId) : "",
			delegateSigningPublicKey: isSet(object.delegateSigningPublicKey) ? bytesFromBase64(object.delegateSigningPublicKey) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.leafId !== "") obj.leafId = message.leafId;
		if (message.delegateSigningPublicKey.length !== 0) obj.delegateSigningPublicKey = base64FromBytes(message.delegateSigningPublicKey);
		return obj;
	},
	create(base) {
		return LeafDecompositionInstall.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseLeafDecompositionInstall();
		message.leafId = object.leafId ?? "";
		message.delegateSigningPublicKey = object.delegateSigningPublicKey ?? new Uint8Array(0);
		return message;
	}
};
function createBaseInstallLeafDecompositionsRequest() {
	return {
		grantId: "",
		ownerIdentityPublicKey: new Uint8Array(0),
		installs: [],
		keyTweakPackage: {},
		ownerSignature: new Uint8Array(0)
	};
}
const InstallLeafDecompositionsRequest = {
	encode(message, writer = new BinaryWriter()) {
		if (message.grantId !== "") writer.uint32(10).string(message.grantId);
		if (message.ownerIdentityPublicKey.length !== 0) writer.uint32(18).bytes(message.ownerIdentityPublicKey);
		for (const v of message.installs) LeafDecompositionInstall.encode(v, writer.uint32(26).fork()).join();
		Object.entries(message.keyTweakPackage).forEach(([key, value]) => {
			InstallLeafDecompositionsRequest_KeyTweakPackageEntry.encode({
				key,
				value
			}, writer.uint32(34).fork()).join();
		});
		if (message.ownerSignature.length !== 0) writer.uint32(42).bytes(message.ownerSignature);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseInstallLeafDecompositionsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.grantId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.ownerIdentityPublicKey = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.installs.push(LeafDecompositionInstall.decode(reader, reader.uint32()));
					continue;
				case 4: {
					if (tag !== 34) break;
					const entry4 = InstallLeafDecompositionsRequest_KeyTweakPackageEntry.decode(reader, reader.uint32());
					if (entry4.value !== void 0) message.keyTweakPackage[entry4.key] = entry4.value;
					continue;
				}
				case 5:
					if (tag !== 42) break;
					message.ownerSignature = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			grantId: isSet(object.grantId) ? globalThis.String(object.grantId) : "",
			ownerIdentityPublicKey: isSet(object.ownerIdentityPublicKey) ? bytesFromBase64(object.ownerIdentityPublicKey) : new Uint8Array(0),
			installs: globalThis.Array.isArray(object?.installs) ? object.installs.map((e) => LeafDecompositionInstall.fromJSON(e)) : [],
			keyTweakPackage: isObject(object.keyTweakPackage) ? Object.entries(object.keyTweakPackage).reduce((acc, [key, value]) => {
				acc[key] = bytesFromBase64(value);
				return acc;
			}, {}) : {},
			ownerSignature: isSet(object.ownerSignature) ? bytesFromBase64(object.ownerSignature) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.grantId !== "") obj.grantId = message.grantId;
		if (message.ownerIdentityPublicKey.length !== 0) obj.ownerIdentityPublicKey = base64FromBytes(message.ownerIdentityPublicKey);
		if (message.installs?.length) obj.installs = message.installs.map((e) => LeafDecompositionInstall.toJSON(e));
		if (message.keyTweakPackage) {
			const entries = Object.entries(message.keyTweakPackage);
			if (entries.length > 0) {
				obj.keyTweakPackage = {};
				entries.forEach(([k, v]) => {
					obj.keyTweakPackage[k] = base64FromBytes(v);
				});
			}
		}
		if (message.ownerSignature.length !== 0) obj.ownerSignature = base64FromBytes(message.ownerSignature);
		return obj;
	},
	create(base) {
		return InstallLeafDecompositionsRequest.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseInstallLeafDecompositionsRequest();
		message.grantId = object.grantId ?? "";
		message.ownerIdentityPublicKey = object.ownerIdentityPublicKey ?? new Uint8Array(0);
		message.installs = object.installs?.map((e) => LeafDecompositionInstall.fromPartial(e)) || [];
		message.keyTweakPackage = Object.entries(object.keyTweakPackage ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = value;
			return acc;
		}, {});
		message.ownerSignature = object.ownerSignature ?? new Uint8Array(0);
		return message;
	}
};
function createBaseInstallLeafDecompositionsRequest_KeyTweakPackageEntry() {
	return {
		key: "",
		value: new Uint8Array(0)
	};
}
const InstallLeafDecompositionsRequest_KeyTweakPackageEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value.length !== 0) writer.uint32(18).bytes(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseInstallLeafDecompositionsRequest_KeyTweakPackageEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value.length !== 0) obj.value = base64FromBytes(message.value);
		return obj;
	},
	create(base) {
		return InstallLeafDecompositionsRequest_KeyTweakPackageEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseInstallLeafDecompositionsRequest_KeyTweakPackageEntry();
		message.key = object.key ?? "";
		message.value = object.value ?? new Uint8Array(0);
		return message;
	}
};
function createBaseInstallLeafDecompositionProgress() {
	return {
		operatorIdentifier: "",
		installed: false
	};
}
const InstallLeafDecompositionProgress = {
	encode(message, writer = new BinaryWriter()) {
		if (message.operatorIdentifier !== "") writer.uint32(10).string(message.operatorIdentifier);
		if (message.installed !== false) writer.uint32(16).bool(message.installed);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseInstallLeafDecompositionProgress();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.operatorIdentifier = reader.string();
					continue;
				case 2:
					if (tag !== 16) break;
					message.installed = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			operatorIdentifier: isSet(object.operatorIdentifier) ? globalThis.String(object.operatorIdentifier) : "",
			installed: isSet(object.installed) ? globalThis.Boolean(object.installed) : false
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.operatorIdentifier !== "") obj.operatorIdentifier = message.operatorIdentifier;
		if (message.installed !== false) obj.installed = message.installed;
		return obj;
	},
	create(base) {
		return InstallLeafDecompositionProgress.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseInstallLeafDecompositionProgress();
		message.operatorIdentifier = object.operatorIdentifier ?? "";
		message.installed = object.installed ?? false;
		return message;
	}
};
function createBaseInstallLeafDecompositionsResponse() {
	return { progress: [] };
}
const InstallLeafDecompositionsResponse = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.progress) InstallLeafDecompositionProgress.encode(v, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseInstallLeafDecompositionsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.progress.push(InstallLeafDecompositionProgress.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { progress: globalThis.Array.isArray(object?.progress) ? object.progress.map((e) => InstallLeafDecompositionProgress.fromJSON(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.progress?.length) obj.progress = message.progress.map((e) => InstallLeafDecompositionProgress.toJSON(e));
		return obj;
	},
	create(base) {
		return InstallLeafDecompositionsResponse.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseInstallLeafDecompositionsResponse();
		message.progress = object.progress?.map((e) => InstallLeafDecompositionProgress.fromPartial(e)) || [];
		return message;
	}
};
const SparkServiceDefinition = {
	name: "SparkService",
	fullName: "spark.SparkService",
	methods: {
		generate_deposit_address: {
			name: "generate_deposit_address",
			requestType: GenerateDepositAddressRequest,
			requestStream: false,
			responseType: GenerateDepositAddressResponse,
			responseStream: false,
			options: {}
		},
		generate_static_deposit_address: {
			name: "generate_static_deposit_address",
			requestType: GenerateStaticDepositAddressRequest,
			requestStream: false,
			responseType: GenerateStaticDepositAddressResponse,
			responseStream: false,
			options: {}
		},
		rotate_static_deposit_address: {
			name: "rotate_static_deposit_address",
			requestType: RotateStaticDepositAddressRequest,
			requestStream: false,
			responseType: RotateStaticDepositAddressResponse,
			responseStream: false,
			options: {}
		},
		finalize_deposit_tree_creation: {
			name: "finalize_deposit_tree_creation",
			requestType: FinalizeDepositTreeCreationRequest,
			requestStream: false,
			responseType: FinalizeDepositTreeCreationResponse,
			responseStream: false,
			options: {}
		},
		query_pending_transfers: {
			name: "query_pending_transfers",
			requestType: TransferFilter,
			requestStream: false,
			responseType: QueryTransfersResponse,
			responseStream: false,
			options: {}
		},
		query_all_transfers: {
			name: "query_all_transfers",
			requestType: TransferFilter,
			requestStream: false,
			responseType: QueryTransfersResponse,
			responseStream: false,
			options: {}
		},
		query_transfers_by_id: {
			name: "query_transfers_by_id",
			requestType: QueryTransfersByIdRequest,
			requestStream: false,
			responseType: QueryTransfersResponse,
			responseStream: false,
			options: {}
		},
		store_preimage_share_v2: {
			name: "store_preimage_share_v2",
			requestType: StorePreimageShareV2Request,
			requestStream: false,
			responseType: Empty,
			responseStream: false,
			options: {}
		},
		get_signing_commitments: {
			name: "get_signing_commitments",
			requestType: GetSigningCommitmentsRequest,
			requestStream: false,
			responseType: GetSigningCommitmentsResponse,
			responseStream: false,
			options: {}
		},
		provide_preimage: {
			name: "provide_preimage",
			requestType: ProvidePreimageRequest,
			requestStream: false,
			responseType: ProvidePreimageResponse,
			responseStream: false,
			options: {}
		},
		query_preimage: {
			name: "query_preimage",
			requestType: QueryPreimageRequest,
			requestStream: false,
			responseType: QueryPreimageResponse,
			responseStream: false,
			options: {}
		},
		query_transfer_preimage: {
			name: "query_transfer_preimage",
			requestType: QueryTransferPreimageRequest,
			requestStream: false,
			responseType: QueryTransferPreimageResponse,
			responseStream: false,
			options: {}
		},
		query_htlc: {
			name: "query_htlc",
			requestType: QueryHtlcRequest,
			requestStream: false,
			responseType: QueryHtlcResponse,
			responseStream: false,
			options: {}
		},
		renew_leaf: {
			name: "renew_leaf",
			requestType: RenewLeafRequest,
			requestStream: false,
			responseType: RenewLeafResponse,
			responseStream: false,
			options: {}
		},
		get_signing_operator_list: {
			name: "get_signing_operator_list",
			requestType: Empty,
			requestStream: false,
			responseType: GetSigningOperatorListResponse,
			responseStream: false,
			options: {}
		},
		query_nodes: {
			name: "query_nodes",
			requestType: QueryNodesRequest,
			requestStream: false,
			responseType: QueryNodesResponse,
			responseStream: false,
			options: {}
		},
		query_balance: {
			name: "query_balance",
			requestType: QueryBalanceRequest,
			requestStream: false,
			responseType: QueryBalanceResponse,
			responseStream: false,
			options: {}
		},
		query_unused_deposit_addresses: {
			name: "query_unused_deposit_addresses",
			requestType: QueryUnusedDepositAddressesRequest,
			requestStream: false,
			responseType: QueryUnusedDepositAddressesResponse,
			responseStream: false,
			options: {}
		},
		query_static_deposit_addresses: {
			name: "query_static_deposit_addresses",
			requestType: QueryStaticDepositAddressesRequest,
			requestStream: false,
			responseType: QueryStaticDepositAddressesResponse,
			responseStream: false,
			options: {}
		},
		subscribe_to_events: {
			name: "subscribe_to_events",
			requestType: SubscribeToEventsRequest,
			requestStream: false,
			responseType: SubscribeToEventsResponse,
			responseStream: true,
			options: {}
		},
		initiate_static_deposit_utxo_refund: {
			name: "initiate_static_deposit_utxo_refund",
			requestType: InitiateStaticDepositUtxoRefundRequest,
			requestStream: false,
			responseType: InitiateStaticDepositUtxoRefundResponse,
			responseStream: false,
			options: {}
		},
		recover_watchtower_exited_leaf: {
			name: "recover_watchtower_exited_leaf",
			requestType: RecoverWatchtowerExitedLeafRequest,
			requestStream: false,
			responseType: RecoverWatchtowerExitedLeafResponse,
			responseStream: false,
			options: {}
		},
		cooperative_exit_v2: {
			name: "cooperative_exit_v2",
			requestType: CooperativeExitRequest,
			requestStream: false,
			responseType: CooperativeExitResponse,
			responseStream: false,
			options: {}
		},
		initiate_preimage_swap_v2: {
			name: "initiate_preimage_swap_v2",
			requestType: InitiatePreimageSwapRequest,
			requestStream: false,
			responseType: InitiatePreimageSwapResponse,
			responseStream: false,
			options: {}
		},
		initiate_preimage_swap_v3: {
			name: "initiate_preimage_swap_v3",
			requestType: InitiatePreimageSwapRequest,
			requestStream: false,
			responseType: InitiatePreimageSwapResponse,
			responseStream: false,
			options: {}
		},
		initiate_preimage_swap_v4: {
			name: "initiate_preimage_swap_v4",
			requestType: InitiatePreimageSwapV4Request,
			requestStream: false,
			responseType: InitiatePreimageSwapResponse,
			responseStream: false,
			options: {}
		},
		start_transfer_v2: {
			name: "start_transfer_v2",
			requestType: StartTransferRequest,
			requestStream: false,
			responseType: StartTransferResponse,
			responseStream: false,
			options: {}
		},
		start_transfer_v3: {
			name: "start_transfer_v3",
			requestType: StartTransferV3Request,
			requestStream: false,
			responseType: StartTransferResponse,
			responseStream: false,
			options: {}
		},
		start_transfer_mpc: {
			name: "start_transfer_mpc",
			requestType: StartTransferMpcRequest,
			requestStream: false,
			responseType: StartTransferResponse,
			responseStream: false,
			options: {}
		},
		claim_transfer: {
			name: "claim_transfer",
			requestType: ClaimTransferRequest,
			requestStream: false,
			responseType: ClaimTransferResponse,
			responseStream: false,
			options: {}
		},
		get_utxos_for_address: {
			name: "get_utxos_for_address",
			requestType: GetUtxosForAddressRequest,
			requestStream: false,
			responseType: GetUtxosForAddressResponse,
			responseStream: false,
			options: {}
		},
		get_utxos_for_identity: {
			name: "get_utxos_for_identity",
			requestType: GetUtxosForIdentityRequest,
			requestStream: false,
			responseType: GetUtxosForIdentityResponse,
			responseStream: false,
			options: {}
		},
		query_spark_invoices: {
			name: "query_spark_invoices",
			requestType: QuerySparkInvoicesRequest,
			requestStream: false,
			responseType: QuerySparkInvoicesResponse,
			responseStream: false,
			options: {}
		},
		initiate_swap_primary_transfer: {
			name: "initiate_swap_primary_transfer",
			requestType: InitiateSwapPrimaryTransferRequest,
			requestStream: false,
			responseType: InitiateSwapPrimaryTransferResponse,
			responseStream: false,
			options: {}
		},
		update_wallet_setting: {
			name: "update_wallet_setting",
			requestType: UpdateWalletSettingRequest,
			requestStream: false,
			responseType: UpdateWalletSettingResponse,
			responseStream: false,
			options: {}
		},
		query_wallet_setting: {
			name: "query_wallet_setting",
			requestType: QueryWalletSettingRequest,
			requestStream: false,
			responseType: QueryWalletSettingResponse,
			responseStream: false,
			options: {}
		},
		create_delegation_grant: {
			name: "create_delegation_grant",
			requestType: CreateDelegationGrantRequest,
			requestStream: false,
			responseType: CreateDelegationGrantResponse,
			responseStream: false,
			options: {}
		},
		revoke_delegation_grant: {
			name: "revoke_delegation_grant",
			requestType: RevokeDelegationGrantRequest,
			requestStream: false,
			responseType: RevokeDelegationGrantResponse,
			responseStream: false,
			options: {}
		},
		query_delegation_grants: {
			name: "query_delegation_grants",
			requestType: QueryDelegationGrantsRequest,
			requestStream: false,
			responseType: QueryDelegationGrantsResponse,
			responseStream: false,
			options: {}
		},
		install_leaf_decompositions: {
			name: "install_leaf_decompositions",
			requestType: InstallLeafDecompositionsRequest,
			requestStream: false,
			responseType: InstallLeafDecompositionsResponse,
			responseStream: false,
			options: {}
		},
		add_delegation_spender: {
			name: "add_delegation_spender",
			requestType: AddDelegationSpenderRequest,
			requestStream: false,
			responseType: AddDelegationSpenderResponse,
			responseStream: false,
			options: {}
		},
		revoke_delegation_spender: {
			name: "revoke_delegation_spender",
			requestType: RevokeDelegationSpenderRequest,
			requestStream: false,
			responseType: RevokeDelegationSpenderResponse,
			responseStream: false,
			options: {}
		}
	}
};
function bytesFromBase64(b64) {
	if (globalThis.Buffer) return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
	else {
		const bin = globalThis.atob(b64);
		const arr = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; ++i) arr[i] = bin.charCodeAt(i);
		return arr;
	}
}
function base64FromBytes(arr) {
	if (globalThis.Buffer) return globalThis.Buffer.from(arr).toString("base64");
	else {
		const bin = [];
		arr.forEach((byte) => {
			bin.push(globalThis.String.fromCharCode(byte));
		});
		return globalThis.btoa(bin.join(""));
	}
}
function toTimestamp(date) {
	return {
		seconds: Math.trunc(date.getTime() / 1e3),
		nanos: date.getTime() % 1e3 * 1e6
	};
}
function fromTimestamp(t) {
	let millis = (t.seconds || 0) * 1e3;
	millis += (t.nanos || 0) / 1e6;
	return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
	if (o instanceof globalThis.Date) return o;
	else if (typeof o === "string") return new globalThis.Date(o);
	else return fromTimestamp(Timestamp.fromJSON(o));
}
function longToNumber(int64) {
	const num = globalThis.Number(int64.toString());
	if (num > globalThis.Number.MAX_SAFE_INTEGER) throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
	if (num < globalThis.Number.MIN_SAFE_INTEGER) throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
	return num;
}
function isObject(value) {
	return typeof value === "object" && value !== null;
}
function isSet(value) {
	return value !== null && value !== void 0;
}

//#endregion
export { AdaptorPublicKeyPackage, AddDelegationSpenderRequest, AddDelegationSpenderResponse, Address, AddressNode, AddressRequestNode, AddressedUtxo, BitcoinTransactionOutput, CancelTransferRequest, CancelTransferResponse, ClaimLeafKeyTweak, ClaimLeafKeyTweak_PubkeySharesTweakEntry, ClaimLeafKeyTweaks, ClaimPackage, ClaimPackage_KeyTweakPackageEntry, ClaimTransferRequest, ClaimTransferResponse, ClaimTransferSignRefundsRequest, ClaimTransferSignRefundsResponse, ClaimTransferTweakKeysRequest, ConnectedEvent, CooperativeExitRequest, CooperativeExitResponse, CounterLeafSwapRequest, CounterLeafSwapResponse, CreateDelegationGrantRequest, CreateDelegationGrantResponse, CreateTreeRequest, CreateTreeResponse, CreationNode, CreationResponseNode, DecrementRefundTimelockResult, DecrementRefundTimelockSigningJob, DelegationGrant, DelegationGrantInfo, DelegationGrantInfo_SpentSatsBySpenderEntry, DelegationIntent, DelegationIntent_ReceiverAmountsSatsEntry, DelegationPathSelector, DelegationSpender, DelegationStatus, DepositAddressProof, DepositAddressProof_AddressSignaturesEntry, DepositAddressQueryResult, DepositEvent, Direction, ExitingTree, ExtendLeafRequest, ExtendLeafResponse, ExtendLeafSigningResult, FeeBumpLadder, FeeBumpRung, FeeComponent, FeeRole, FeeSource, FinalizeDepositTreeCreationRequest, FinalizeDepositTreeCreationResponse, FinalizeNodeSignaturesRequest, FinalizeNodeSignaturesResponse, FinalizeTransferRequest, FinalizeTransferResponse, FinalizeTransferWithTransferPackageRequest, GenerateDepositAddressRequest, GenerateDepositAddressResponse, GenerateStaticDepositAddressRequest, GenerateStaticDepositAddressResponse, GetSigningCommitmentsRequest, GetSigningCommitmentsResponse, GetSigningOperatorListResponse, GetSigningOperatorListResponse_SigningOperatorsEntry, GetUtxosForAddressRequest, GetUtxosForAddressResponse, GetUtxosForIdentityRequest, GetUtxosForIdentityResponse, HashVariant, HeartbeatEvent, InitiatePreimageSwapRequest, InitiatePreimageSwapRequest_Reason, InitiatePreimageSwapResponse, InitiatePreimageSwapV4Request, InitiateStaticDepositUtxoRefundRequest, InitiateStaticDepositUtxoRefundResponse, InitiateSwapPrimaryTransferRequest, InitiateSwapPrimaryTransferResponse, InitiateUtxoSwapRequest, InitiateUtxoSwapResponse, InputSigningData, InstallLeafDecompositionProgress, InstallLeafDecompositionsRequest, InstallLeafDecompositionsRequest_KeyTweakPackageEntry, InstallLeafDecompositionsResponse, InvoiceAmount, InvoiceAmountProof, InvoiceResponse, InvoiceStatus, LeafAuthorization, LeafDecompositionInstall, LeafRefundTxSigningJob, LeafRefundTxSigningResult, ManifestAmount, ManifestEdge, MpcLeafSubShare, MpcOperatorShares, MpcSealedShare, MpcSealedSharePayload, MpcSendLeaf, MpcTransferPackage, MpcTransferPackage_KeyTweaksEntry, Network, NodeOutput, NodeSignatureShares, NodeSignatures, Order, OutPoint, PageRequest, PageResponse, PreimageRequestRole, PreimageRequestStatus, PreimageRequestWithTransfer, PrepareTreeAddressRequest, PrepareTreeAddressResponse, ProvidePreimageRequest, ProvidePreimageResponse, QueryBalanceRequest, QueryBalanceResponse, QueryBalanceResponse_NodeBalancesEntry, QueryDelegationGrantsRequest, QueryDelegationGrantsResponse, QueryHtlcRequest, QueryHtlcResponse, QueryNodesByValueRequest, QueryNodesByValueResponse, QueryNodesByValueResponse_NodesEntry, QueryNodesDistributionRequest, QueryNodesDistributionResponse, QueryNodesDistributionResponse_NodeDistributionEntry, QueryNodesRequest, QueryNodesResponse, QueryNodesResponse_NodesEntry, QueryPreimageRequest, QueryPreimageResponse, QuerySparkInvoicesRequest, QuerySparkInvoicesResponse, QueryStaticDepositAddressesRequest, QueryStaticDepositAddressesResponse, QueryTransferPreimageRequest, QueryTransferPreimageResponse, QueryTransfersByIdRequest, QueryTransfersResponse, QueryUnusedDepositAddressesRequest, QueryUnusedDepositAddressesResponse, QueryWalletSettingRequest, QueryWalletSettingResponse, RecoverWatchtowerExitedLeafRequest, RecoverWatchtowerExitedLeafResponse, RefreshTimelockRequest, RefreshTimelockResponse, RefreshTimelockSigningResult, RenewLeafRequest, RenewLeafResponse, RenewNodeTimelockResult, RenewNodeTimelockSigningJob, RenewNodeZeroTimelockResult, RenewNodeZeroTimelockSigningJob, RenewRefundTimelockResult, RenewRefundTimelockSigningJob, RequestedSigningCommitments, RequestedSigningCommitments_SigningNonceCommitmentsEntry, RevokeDelegationGrantRequest, RevokeDelegationGrantResponse, RevokeDelegationSpenderRequest, RevokeDelegationSpenderResponse, RotateStaticDepositAddressRequest, RotateStaticDepositAddressResponse, SatsPayment, SatsTransfer, SecretProof, SecretShare, SendLeafKeyTweak, SendLeafKeyTweak_PubkeySharesTweakEntry, SendLeafKeyTweaks, SenderTransferPackage, SenderTransferPackage_ReceiverIdentityPublicKeysEntry, SigningCommitments, SigningCommitments_SigningCommitmentsEntry, SigningJob, SigningKeyshare, SigningKeyshare_PublicSharesEntry, SigningOperatorInfo, SigningResult, SigningResult_PublicKeysEntry, SigningResult_SignatureSharesEntry, SigningResult_SigningNonceCommitmentsEntry, SparkAddress, SparkInvoiceFields, SparkServiceDefinition, StartDepositTreeCreationRequest, StartDepositTreeCreationResponse, StartTransferMpcRequest, StartTransferRequest, StartTransferResponse, StartTransferV3Request, StartTreeCreationRequest, StartTreeCreationResponse, StorePreimageShareV2Request, StorePreimageShareV2Request_EncryptedPreimageSharesEntry, SubUserCommitment, SubUserSigningContribution, SubscribeToEventsRequest, SubscribeToEventsResponse, TokenTransactionEvent, TokenTransfer, TokensPayment, Transfer, TransferAuthorization, TransferEvent, TransferFilter, TransferLeaf, TransferManifest, TransferPackage, TransferPackage_KeyTweakPackageEntry, TransferReceiver, TransferReceiverStatus, TransferSender, TransferStatus, TransferType, TreeNode, TreeNodeIds, TreeNodeStatus, UTXO, UpdateWalletSettingRequest, UpdateWalletSettingResponse, UserSignedTxSigningJob, UtxoSwapRequestType, UtxoSwapStatus, WalletSetting, delegationStatusFromJSON, delegationStatusToJSON, directionFromJSON, directionToJSON, feeRoleFromJSON, feeRoleToJSON, feeSourceFromJSON, feeSourceToJSON, hashVariantFromJSON, hashVariantToJSON, initiatePreimageSwapRequest_ReasonFromJSON, initiatePreimageSwapRequest_ReasonToJSON, invoiceStatusFromJSON, invoiceStatusToJSON, networkFromJSON, networkToJSON, orderFromJSON, orderToJSON, preimageRequestRoleFromJSON, preimageRequestRoleToJSON, preimageRequestStatusFromJSON, preimageRequestStatusToJSON, protobufPackage, spark_exports as t, transferReceiverStatusFromJSON, transferReceiverStatusToJSON, transferStatusFromJSON, transferStatusToJSON, transferTypeFromJSON, transferTypeToJSON, treeNodeStatusFromJSON, treeNodeStatusToJSON, utxoSwapRequestTypeFromJSON, utxoSwapRequestTypeToJSON, utxoSwapStatusFromJSON, utxoSwapStatusToJSON };