import { t as __exportAll } from "./chunk-BCcL9Bmk.js";
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

//#region src/proto/google/protobuf/timestamp.ts
function createBaseTimestamp() {
	return {
		seconds: 0,
		nanos: 0
	};
}
const Timestamp = {
	encode(message, writer = new BinaryWriter()) {
		if (message.seconds !== 0) writer.uint32(8).int64(message.seconds);
		if (message.nanos !== 0) writer.uint32(16).int32(message.nanos);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTimestamp();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.seconds = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 16) break;
					message.nanos = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			seconds: isSet$1(object.seconds) ? globalThis.Number(object.seconds) : 0,
			nanos: isSet$1(object.nanos) ? globalThis.Number(object.nanos) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.seconds !== 0) obj.seconds = Math.round(message.seconds);
		if (message.nanos !== 0) obj.nanos = Math.round(message.nanos);
		return obj;
	},
	create(base) {
		return Timestamp.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTimestamp();
		message.seconds = object.seconds ?? 0;
		message.nanos = object.nanos ?? 0;
		return message;
	}
};
function longToNumber(int64) {
	const num = globalThis.Number(int64.toString());
	if (num > globalThis.Number.MAX_SAFE_INTEGER) throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
	if (num < globalThis.Number.MIN_SAFE_INTEGER) throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
	return num;
}
function isSet$1(value) {
	return value !== null && value !== void 0;
}

//#endregion
//#region src/proto/common.ts
var common_exports = /* @__PURE__ */ __exportAll({
	PackageMap: () => PackageMap,
	PackageMap_PackagesEntry: () => PackageMap_PackagesEntry,
	Signature: () => Signature,
	SignatureIntent: () => SignatureIntent,
	SignatureScheme: () => SignatureScheme,
	SigningCommitment: () => SigningCommitment,
	SigningResult: () => SigningResult,
	protobufPackage: () => protobufPackage,
	signatureIntentFromJSON: () => signatureIntentFromJSON,
	signatureIntentToJSON: () => signatureIntentToJSON,
	signatureSchemeFromJSON: () => signatureSchemeFromJSON,
	signatureSchemeToJSON: () => signatureSchemeToJSON
});
const protobufPackage = "common";
let SignatureIntent = /* @__PURE__ */ function(SignatureIntent) {
	SignatureIntent[SignatureIntent["CREATION"] = 0] = "CREATION";
	SignatureIntent[SignatureIntent["TRANSFER"] = 1] = "TRANSFER";
	SignatureIntent[SignatureIntent["AGGREGATE"] = 2] = "AGGREGATE";
	/** @deprecated */
	SignatureIntent[SignatureIntent["REFRESH"] = 3] = "REFRESH";
	/** @deprecated */
	SignatureIntent[SignatureIntent["EXTEND"] = 4] = "EXTEND";
	SignatureIntent[SignatureIntent["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return SignatureIntent;
}({});
function signatureIntentFromJSON(object) {
	switch (object) {
		case 0:
		case "CREATION": return SignatureIntent.CREATION;
		case 1:
		case "TRANSFER": return SignatureIntent.TRANSFER;
		case 2:
		case "AGGREGATE": return SignatureIntent.AGGREGATE;
		case 3:
		case "REFRESH": return SignatureIntent.REFRESH;
		case 4:
		case "EXTEND": return SignatureIntent.EXTEND;
		default: return SignatureIntent.UNRECOGNIZED;
	}
}
function signatureIntentToJSON(object) {
	switch (object) {
		case SignatureIntent.CREATION: return "CREATION";
		case SignatureIntent.TRANSFER: return "TRANSFER";
		case SignatureIntent.AGGREGATE: return "AGGREGATE";
		case SignatureIntent.REFRESH: return "REFRESH";
		case SignatureIntent.EXTEND: return "EXTEND";
		case SignatureIntent.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
/** The scheme used to produce a Signature. */
let SignatureScheme = /* @__PURE__ */ function(SignatureScheme) {
	SignatureScheme[SignatureScheme["SIGNATURE_SCHEME_UNSPECIFIED"] = 0] = "SIGNATURE_SCHEME_UNSPECIFIED";
	/** SIGNATURE_SCHEME_ECDSA - secp256k1 ECDSA, strict DER encoding (variable length). */
	SignatureScheme[SignatureScheme["SIGNATURE_SCHEME_ECDSA"] = 1] = "SIGNATURE_SCHEME_ECDSA";
	/** SIGNATURE_SCHEME_SCHNORR - BIP-340 Schnorr over secp256k1, 64 bytes. */
	SignatureScheme[SignatureScheme["SIGNATURE_SCHEME_SCHNORR"] = 2] = "SIGNATURE_SCHEME_SCHNORR";
	SignatureScheme[SignatureScheme["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return SignatureScheme;
}({});
function signatureSchemeFromJSON(object) {
	switch (object) {
		case 0:
		case "SIGNATURE_SCHEME_UNSPECIFIED": return SignatureScheme.SIGNATURE_SCHEME_UNSPECIFIED;
		case 1:
		case "SIGNATURE_SCHEME_ECDSA": return SignatureScheme.SIGNATURE_SCHEME_ECDSA;
		case 2:
		case "SIGNATURE_SCHEME_SCHNORR": return SignatureScheme.SIGNATURE_SCHEME_SCHNORR;
		default: return SignatureScheme.UNRECOGNIZED;
	}
}
function signatureSchemeToJSON(object) {
	switch (object) {
		case SignatureScheme.SIGNATURE_SCHEME_UNSPECIFIED: return "SIGNATURE_SCHEME_UNSPECIFIED";
		case SignatureScheme.SIGNATURE_SCHEME_ECDSA: return "SIGNATURE_SCHEME_ECDSA";
		case SignatureScheme.SIGNATURE_SCHEME_SCHNORR: return "SIGNATURE_SCHEME_SCHNORR";
		case SignatureScheme.UNRECOGNIZED:
		default: return "UNRECOGNIZED";
	}
}
function createBasePackageMap() {
	return { packages: {} };
}
const PackageMap = {
	encode(message, writer = new BinaryWriter()) {
		Object.entries(message.packages).forEach(([key, value]) => {
			PackageMap_PackagesEntry.encode({
				key,
				value
			}, writer.uint32(10).fork()).join();
		});
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBasePackageMap();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1: {
					if (tag !== 10) break;
					const entry1 = PackageMap_PackagesEntry.decode(reader, reader.uint32());
					if (entry1.value !== void 0) message.packages[entry1.key] = entry1.value;
					continue;
				}
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { packages: isObject(object.packages) ? Object.entries(object.packages).reduce((acc, [key, value]) => {
			acc[key] = bytesFromBase64(value);
			return acc;
		}, {}) : {} };
	},
	toJSON(message) {
		const obj = {};
		if (message.packages) {
			const entries = Object.entries(message.packages);
			if (entries.length > 0) {
				obj.packages = {};
				entries.forEach(([k, v]) => {
					obj.packages[k] = base64FromBytes(v);
				});
			}
		}
		return obj;
	},
	create(base) {
		return PackageMap.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBasePackageMap();
		message.packages = Object.entries(object.packages ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = value;
			return acc;
		}, {});
		return message;
	}
};
function createBasePackageMap_PackagesEntry() {
	return {
		key: "",
		value: new Uint8Array(0)
	};
}
const PackageMap_PackagesEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value.length !== 0) writer.uint32(18).bytes(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBasePackageMap_PackagesEntry();
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
		return PackageMap_PackagesEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBasePackageMap_PackagesEntry();
		message.key = object.key ?? "";
		message.value = object.value ?? new Uint8Array(0);
		return message;
	}
};
function createBaseSigningCommitment() {
	return {
		hiding: new Uint8Array(0),
		binding: new Uint8Array(0)
	};
}
const SigningCommitment = {
	encode(message, writer = new BinaryWriter()) {
		if (message.hiding.length !== 0) writer.uint32(10).bytes(message.hiding);
		if (message.binding.length !== 0) writer.uint32(18).bytes(message.binding);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSigningCommitment();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.hiding = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.binding = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			hiding: isSet(object.hiding) ? bytesFromBase64(object.hiding) : new Uint8Array(0),
			binding: isSet(object.binding) ? bytesFromBase64(object.binding) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.hiding.length !== 0) obj.hiding = base64FromBytes(message.hiding);
		if (message.binding.length !== 0) obj.binding = base64FromBytes(message.binding);
		return obj;
	},
	create(base) {
		return SigningCommitment.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSigningCommitment();
		message.hiding = object.hiding ?? new Uint8Array(0);
		message.binding = object.binding ?? new Uint8Array(0);
		return message;
	}
};
function createBaseSigningResult() {
	return { signatureShare: new Uint8Array(0) };
}
const SigningResult = {
	encode(message, writer = new BinaryWriter()) {
		if (message.signatureShare.length !== 0) writer.uint32(10).bytes(message.signatureShare);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSigningResult();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.signatureShare = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { signatureShare: isSet(object.signatureShare) ? bytesFromBase64(object.signatureShare) : new Uint8Array(0) };
	},
	toJSON(message) {
		const obj = {};
		if (message.signatureShare.length !== 0) obj.signatureShare = base64FromBytes(message.signatureShare);
		return obj;
	},
	create(base) {
		return SigningResult.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSigningResult();
		message.signatureShare = object.signatureShare ?? new Uint8Array(0);
		return message;
	}
};
function createBaseSignature() {
	return {
		scheme: 0,
		signature: new Uint8Array(0)
	};
}
const Signature = {
	encode(message, writer = new BinaryWriter()) {
		if (message.scheme !== 0) writer.uint32(8).int32(message.scheme);
		if (message.signature.length !== 0) writer.uint32(18).bytes(message.signature);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseSignature();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.scheme = reader.int32();
					continue;
				case 2:
					if (tag !== 18) break;
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
			scheme: isSet(object.scheme) ? signatureSchemeFromJSON(object.scheme) : 0,
			signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0)
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.scheme !== 0) obj.scheme = signatureSchemeToJSON(message.scheme);
		if (message.signature.length !== 0) obj.signature = base64FromBytes(message.signature);
		return obj;
	},
	create(base) {
		return Signature.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseSignature();
		message.scheme = object.scheme ?? 0;
		message.signature = object.signature ?? new Uint8Array(0);
		return message;
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
function isObject(value) {
	return typeof value === "object" && value !== null;
}
function isSet(value) {
	return value !== null && value !== void 0;
}

//#endregion
//#region src/proto/google/protobuf/empty.ts
function createBaseEmpty() {
	return {};
}
const Empty = {
	encode(_, writer = new BinaryWriter()) {
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseEmpty();
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
		return Empty.fromPartial(base ?? {});
	},
	fromPartial(_) {
		return createBaseEmpty();
	}
};

//#endregion
export { common_exports as a, Timestamp as c, SigningCommitment as i, Signature as n, signatureIntentFromJSON as o, SignatureScheme as r, signatureIntentToJSON as s, Empty as t };