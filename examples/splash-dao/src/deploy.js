"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("node:fs/promises");
var sdk_1 = require("@blaze-cardano/sdk");
var wallet_ts_1 = require("./wallet.ts");
var plutus_ts_1 = require("./../plutus.ts");
var plutus_ts_2 = require("../plutus.ts");
var plutus_ts_3 = require("../plutus.ts");
var plutus_ts_4 = require("../plutus.ts");
var plutus_ts_5 = require("../plutus.ts");
var plutus_ts_6 = require("../plutus.ts");
var plutus_ts_7 = require("../plutus.ts");
var plutus_ts_8 = require("../plutus.ts");
var plutus_ts_9 = require("../plutus.ts");
var plutus_ts_10 = require("../plutus.ts");
var plutus_ts_11 = require("../plutus.ts");
var plutus_ts_12 = require("../plutus.ts");
var NFT_JSON_FILENAME = "nfts.json";
var BUILT_VALIDATORS_JSON_FILENAME = "validators.json";
var DEPLOYED_VALIDATORS_JSON_FILENAME = "deployedValidators.json";
var PREPROD_DEPLOYMENT_JSON_FILENAME = "preprod.deployment.json";
var TX_CONFIRMATION_WAIT_TIME = 120000;
var SPLASH_POLICY_ID = "b9ee0c3dc6547eed55b4f857ec4b45c168b4f820f610dcf13aea2fb5";
var SPLASH_ASSET_NAME = stringToHex("SPLASH");
var ZEROTH_EPOCH_START = 1724481737000n;
var INFLATION_BOX_INITIAL_SPLASH_QTY = 32000000000000n;
var LQ_NAME = stringToHex("SPLASH/ADA LQ*");
var LQ_POLICY_ID = "9d30e3622a4e2cb54b7f776dc329e2c525350c0d2980db0ebe5fdbe1";
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, blaze, pubKey, acceptedAssets, cborWriter, daoInput, nftDetails, _b, _c, txs, builtValidators, _d, _e, deployedValidators, _f, _g, preprodConfig;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0: return [4 /*yield*/, (0, wallet_ts_1.getBlaze)()];
                case 1:
                    _a = _h.sent(), blaze = _a[0], pubKey = _a[1];
                    acceptedAssets = new Map();
                    acceptedAssets.set({
                        policy: LQ_POLICY_ID,
                        name: LQ_NAME,
                    }, { num: 1n, den: 1n });
                    cborWriter = new sdk_1.Core.CborWriter();
                    daoInput = {
                        inflation: 0n,
                        votingEscrow: {
                            lockedUntil: { Def: [1n] },
                            owner: { PubKey: [pubKey] },
                            maxExFee: 100000n,
                            version: 1n,
                            lastWpEpoch: 1n,
                            lastGpDeadline: 1n,
                        },
                        farmFactory: {
                            lastFarmId: 10007199254740991n,
                            farmSeedData: cborWriter.writeByteString(new Uint8Array([]))
                                .encodeAsHex(),
                        },
                        wpFactory: {
                            lastPollEpoch: -1n,
                            activeFarms: [stringToHex("farm0"), stringToHex("f1")],
                        },
                        veFactory: {
                            acceptedAssets: acceptedAssets,
                            legacyAcceptedAssets: new Map(),
                        },
                    };
                    //------------------------------------------------------------------------------------------------
                    return [4 /*yield*/, mintNFTs(blaze)];
                case 2:
                    //------------------------------------------------------------------------------------------------
                    _h.sent();
                    _c = (_b = JSON).parse;
                    return [4 /*yield*/, promises_1.default.readFile(NFT_JSON_FILENAME, "utf8")];
                case 3:
                    nftDetails = _c.apply(_b, [_h.sent()]);
                    return [4 /*yield*/, deployValidators(blaze)];
                case 4:
                    txs = _h.sent();
                    _e = (_d = JSON).parse;
                    return [4 /*yield*/, promises_1.default.readFile(BUILT_VALIDATORS_JSON_FILENAME, "utf8")];
                case 5:
                    builtValidators = _e.apply(_d, [_h.sent()]);
                    return [4 /*yield*/, getDeployedValidators(blaze, builtValidators, txs)];
                case 6:
                    _h.sent();
                    _g = (_f = JSON).parse;
                    return [4 /*yield*/, promises_1.default.readFile(DEPLOYED_VALIDATORS_JSON_FILENAME, "utf8")];
                case 7:
                    deployedValidators = _g.apply(_f, [_h.sent()]);
                    preprodConfig = {
                        validators: deployedValidators,
                        nfts: nftDetails,
                    };
                    return [4 /*yield*/, promises_1.default.writeFile(PREPROD_DEPLOYMENT_JSON_FILENAME, toJson(preprodConfig))];
                case 8:
                    _h.sent();
                    return [4 /*yield*/, createEntities(blaze, deployedValidators, nftDetails, daoInput)];
                case 9:
                    _h.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function createMultipleMintingUtxOs(blaze, addr, firstValuePerBox, subsequentValuePerBox) {
    return __awaiter(this, void 0, void 0, function () {
        var tx, signedTx, txHash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blaze.newTransaction()
                        .payLovelace(addr, firstValuePerBox)
                        .payLovelace(addr, subsequentValuePerBox)
                        .payLovelace(addr, subsequentValuePerBox)
                        .payLovelace(addr, subsequentValuePerBox)
                        .payLovelace(addr, subsequentValuePerBox)
                        .payLovelace(addr, subsequentValuePerBox)
                        .payLovelace(addr, subsequentValuePerBox)
                        .payLovelace(addr, subsequentValuePerBox)
                        .payLovelace(addr, subsequentValuePerBox)
                        .complete()];
                case 1:
                    tx = _a.sent();
                    return [4 /*yield*/, blaze.signTransaction(tx)];
                case 2:
                    signedTx = _a.sent();
                    return [4 /*yield*/, blaze.submitTransaction(signedTx)];
                case 3:
                    txHash = _a.sent();
                    console.log("Creating UTxOs. tx hash: " + txHash);
                    return [4 /*yield*/, blaze.provider.awaitTransactionConfirmation(txHash)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, sleep(TX_CONFIRMATION_WAIT_TIME)];
                case 5:
                    _a.sent();
                    console.log("created multiple UTxOs.");
                    return [2 /*return*/, txHash];
            }
        });
    });
}
function mintNFTs(blaze) {
    return __awaiter(this, void 0, void 0, function () {
        var myAddr, multipleUTxOTxId, utxos, nftDetails, txBuilder, keys, _i, keys_1, key, _a, script, policyId, assetName, quantity, unit, filePath, tx, signedTx, txHash;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    myAddr = blaze.wallet.address;
                    return [4 /*yield*/, createMultipleMintingUtxOs(blaze, myAddr, 20000000n, 20000000n)];
                case 1:
                    multipleUTxOTxId = _b.sent();
                    return [4 /*yield*/, blaze.provider.getUnspentOutputs(myAddr)];
                case 2:
                    utxos = (_b.sent()).filter(function (utxo) { return utxo.input().transactionId() === multipleUTxOTxId; });
                    nftDetails = buildNFTDetails(blaze, multipleUTxOTxId);
                    txBuilder = blaze.newTransaction().addUnspentOutputs(utxos);
                    keys = Object.keys(nftDetails);
                    for (_i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                        key = keys_1[_i];
                        _a = nftDetails[key], script = _a.script, policyId = _a.policyId, assetName = _a.assetName, quantity = _a.quantity;
                        console.log("Policy ID for " + assetName + ": " + policyId);
                        unit = policyId + assetName;
                        txBuilder = txBuilder
                            .addMint(script, new Map().set(unit, quantity), sdk_1.Data.void());
                        console.log("Added mint to TX for " + assetName);
                    }
                    filePath = NFT_JSON_FILENAME;
                    // Write the object to a JSON file
                    return [4 /*yield*/, promises_1.default.writeFile(filePath, toJson(nftDetails))];
                case 3:
                    // Write the object to a JSON file
                    _b.sent();
                    return [4 /*yield*/, txBuilder.complete()];
                case 4:
                    tx = _b.sent();
                    return [4 /*yield*/, blaze.signTransaction(tx)];
                case 5:
                    signedTx = _b.sent();
                    return [4 /*yield*/, blaze.submitTransaction(signedTx)];
                case 6:
                    txHash = _b.sent();
                    console.log("Minting NFTs. tx hash: " + txHash);
                    console.log("Waiting for TX to be confirmed");
                    return [4 /*yield*/, blaze.provider.awaitTransactionConfirmation(txHash)];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, sleep(TX_CONFIRMATION_WAIT_TIME)];
                case 8:
                    _b.sent();
                    console.log("Minted NFTs.");
                    return [2 /*return*/];
            }
        });
    });
}
function buildNFTDetails(blaze, multipleUTxOTxId) {
    var toMint = [];
    var NUM_NFTS = 7;
    for (var i = 0; i < NUM_NFTS; i++) {
        var script = new plutus_ts_1.TokenDeploymentMintingOnetimeMint({
            transactionId: { hash: multipleUTxOTxId },
            outputIndex: BigInt(i),
        }, 1n);
        toMint.push([script, script.hash()]);
    }
    // gt_policy tokens
    var gtTokenQty = 45000000000000000n;
    var mintGTScript = new plutus_ts_1.TokenDeploymentMintingOnetimeMint({
        transactionId: { hash: multipleUTxOTxId },
        outputIndex: BigInt(NUM_NFTS),
    }, gtTokenQty);
    var gtPolicyId = mintGTScript.hash();
    toMint.push([mintGTScript, gtPolicyId]);
    var toBuiltPolicy = function (e, quantity) {
        return {
            script: e[0],
            policyId: e[1],
            assetName: "a4",
            quantity: quantity,
        };
    };
    return {
        factory_auth: toBuiltPolicy(toMint[0], 1n),
        ve_factory_auth: toBuiltPolicy(toMint[1], 1n),
        perm_auth: toBuiltPolicy(toMint[2], 1n),
        proposal_auth: toBuiltPolicy(toMint[3], 1n),
        edao_msig: toBuiltPolicy(toMint[4], 1n),
        inflation_auth: toBuiltPolicy(toMint[5], 1n),
        wp_factory_auth: toBuiltPolicy(toMint[6], 1n),
        gt: toBuiltPolicy(toMint[7], gtTokenQty),
    };
}
function deployValidators(blaze) {
    return __awaiter(this, void 0, void 0, function () {
        var nftDetails, _a, _b, gtPolicy, veFactoryAuthPolicy, proposalAuthPolicy, permManagerAuthPolicy, edaoMSig, inflationAuthPolicy, governancePowerScript, governancePowerPolicy, govProxyScript, govProxyScriptHash, veCompositionScript, veCompositionPolicy, votingEscrowScript, veScriptHash, farmFactoryAuthPolicy, farmAuthScript, farmAuthScriptHash, farmAuthPolicy, wpFactoryAuthPolicy, wpAuthScript, wpAuthPolicy, veIdentifierScript, veIdentifierPolicy, veFactoryScript, veFactoryScriptHash, wpFactoryScript, wpFactoryScriptHash, farmFactoryScript, farmFactoryScriptHash, weightingPowerScript, weightingPowerScriptHash, weightingPowerPolicy, inflationScript, inflationScriptHash, permManagerScript, permManagerScriptHash, builtValidators, lockScript, MyDatumSchema, MyDatum, toDatum, datum, tx0, signedTx0, txHash0, tx1, signedTx1, txHash1, tx2, signedTx2, txHash2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, promises_1.default.readFile(NFT_JSON_FILENAME, "utf8")];
                case 1:
                    nftDetails = _b.apply(_a, [_c.sent()]);
                    gtPolicy = nftDetails.gt.policyId;
                    veFactoryAuthPolicy = nftDetails.ve_factory_auth.policyId;
                    proposalAuthPolicy = nftDetails.proposal_auth.policyId;
                    permManagerAuthPolicy = nftDetails.perm_auth.policyId;
                    edaoMSig = nftDetails.edao_msig.policyId;
                    inflationAuthPolicy = nftDetails.inflation_auth.policyId;
                    governancePowerScript = new plutus_ts_3.GovernanceVotingEscrowMintGovernancePower(proposalAuthPolicy, gtPolicy);
                    governancePowerPolicy = governancePowerScript.hash();
                    govProxyScript = new plutus_ts_4.GovernanceGovProxyGovProxy(veFactoryAuthPolicy, proposalAuthPolicy, governancePowerPolicy, gtPolicy);
                    govProxyScriptHash = govProxyScript.hash();
                    veCompositionScript = new plutus_ts_1.GovernanceVeFactoryMintVeCompositionToken(veFactoryAuthPolicy);
                    veCompositionPolicy = veCompositionScript.hash();
                    votingEscrowScript = new plutus_ts_2.GovernanceVotingEscrowVotingEscrow(veFactoryAuthPolicy, veCompositionPolicy);
                    veScriptHash = votingEscrowScript.hash();
                    farmFactoryAuthPolicy = nftDetails.factory_auth.policyId;
                    farmAuthScript = new plutus_ts_8.TokenSmartFarmMintFarmAuthToken(SPLASH_POLICY_ID, farmFactoryAuthPolicy);
                    farmAuthScriptHash = farmAuthScript.hash();
                    farmAuthPolicy = farmAuthScript.hash();
                    wpFactoryAuthPolicy = nftDetails.wp_factory_auth.policyId;
                    wpAuthScript = new plutus_ts_7.GovernanceWeightingPollMintWpAuthToken(SPLASH_POLICY_ID, farmAuthPolicy, wpFactoryAuthPolicy, inflationAuthPolicy, ZEROTH_EPOCH_START);
                    wpAuthPolicy = wpAuthScript.hash();
                    veIdentifierScript = new plutus_ts_12.TokenIdentifierMintIdentifier();
                    veIdentifierPolicy = veIdentifierScript.hash();
                    veFactoryScript = new plutus_ts_5.GovernanceVeFactoryVeFactory(veFactoryAuthPolicy, veIdentifierPolicy, veCompositionPolicy, gtPolicy, veScriptHash, govProxyScriptHash);
                    veFactoryScriptHash = veFactoryScript.hash();
                    wpFactoryScript = new plutus_ts_6.GovernanceWeightingPollWpFactory(wpAuthPolicy, govProxyScriptHash);
                    wpFactoryScriptHash = wpFactoryScript.hash();
                    farmFactoryScript = new plutus_ts_9.TokenSmartFarmFarmFactory(farmAuthPolicy, govProxyScriptHash);
                    farmFactoryScriptHash = farmFactoryScript.hash();
                    weightingPowerScript = new plutus_ts_10.GovernanceVotingEscrowMintWeightingPower(ZEROTH_EPOCH_START, proposalAuthPolicy, gtPolicy);
                    weightingPowerScriptHash = weightingPowerScript.hash();
                    weightingPowerPolicy = weightingPowerScript.hash();
                    inflationScript = new plutus_ts_11.TokenInflationInflation(inflationAuthPolicy, SPLASH_POLICY_ID, wpAuthPolicy, weightingPowerPolicy, ZEROTH_EPOCH_START);
                    inflationScriptHash = inflationScript.hash();
                    permManagerScript = new plutus_ts_1.GovernancePermManagerPermManager(edaoMSig, permManagerAuthPolicy);
                    permManagerScriptHash = permManagerScript.hash();
                    builtValidators = {
                        inflation: {
                            script: inflationScript,
                            hash: inflationScriptHash,
                            cost: {
                                mem: 500000n,
                                steps: 200000000n,
                            },
                        },
                        votingEscrow: {
                            script: votingEscrowScript,
                            hash: veScriptHash,
                            cost: {
                                mem: 500000n,
                                steps: 200000000n,
                            },
                        },
                        farmFactory: {
                            script: farmFactoryScript,
                            hash: farmFactoryScriptHash,
                            cost: {
                                mem: 500000n,
                                steps: 200000000n,
                            },
                        },
                        wpFactory: {
                            script: wpFactoryScript,
                            hash: wpFactoryScriptHash,
                            cost: {
                                mem: 500000n,
                                steps: 200000000n,
                            },
                        },
                        veFactory: {
                            script: veFactoryScript,
                            hash: veFactoryScriptHash,
                            cost: {
                                mem: 500000n,
                                steps: 200000000n,
                            },
                        },
                        govProxy: {
                            script: govProxyScript,
                            hash: govProxyScriptHash,
                            cost: {
                                mem: 500000n,
                                steps: 200000000n,
                            },
                        },
                        permManager: {
                            script: permManagerScript,
                            hash: permManagerScriptHash,
                            cost: {
                                mem: 500000n,
                                steps: 200000000n,
                            },
                        },
                        mintWPAuthToken: {
                            script: wpAuthScript,
                            hash: wpAuthPolicy,
                            cost: {
                                mem: 500000n,
                                steps: 200000000n,
                            },
                        },
                        mintVEIdentifierToken: {
                            script: veIdentifierScript,
                            hash: veIdentifierPolicy,
                            cost: {
                                mem: 500000n,
                                steps: 200000000n,
                            },
                        },
                        mintVECompositionToken: {
                            script: veCompositionScript,
                            hash: veCompositionPolicy,
                            cost: {
                                mem: 500000n,
                                steps: 200000000n,
                            },
                        },
                        weightingPower: {
                            script: weightingPowerScript,
                            hash: weightingPowerScriptHash,
                            cost: {
                                mem: 500000n,
                                steps: 200000000n,
                            },
                        },
                        smartFarm: {
                            script: farmAuthScript,
                            hash: farmAuthScriptHash,
                            cost: {
                                mem: 500000n,
                                steps: 200000000n,
                            },
                        },
                    };
                    // Write the object to a JSON file
                    return [4 /*yield*/, promises_1.default.writeFile(BUILT_VALIDATORS_JSON_FILENAME, toJson(builtValidators))];
                case 2:
                    // Write the object to a JSON file
                    _c.sent();
                    lockScript = sdk_1.Core.addressFromBech32("addr_test1wp8v2rexyjaxyppmaezyfz7fkwy059ewpde7l9xr4vhcp9qvrkvl0");
                    MyDatumSchema = sdk_1.Data.Object({
                        scriptRef: sdk_1.Data.Bytes(),
                    });
                    MyDatum = MyDatumSchema;
                    toDatum = function (script) {
                        var datum = {
                            scriptRef: script.hash(),
                        };
                        return sdk_1.Data.to(datum, MyDatum);
                    };
                    datum = {
                        scriptRef: builtValidators.inflation.script.hash(),
                    };
                    return [4 /*yield*/, blaze
                            .newTransaction()
                            .payAssets(lockScript, sdk_1.Value.zero(), toDatum(builtValidators.inflation.script))
                            .payAssets(lockScript, sdk_1.Value.zero(), toDatum(builtValidators.votingEscrow.script))
                            .payAssets(lockScript, sdk_1.Value.zero(), toDatum(builtValidators.farmFactory.script))
                            .payAssets(lockScript, sdk_1.Value.zero(), toDatum(builtValidators.wpFactory.script))
                            .payAssets(lockScript, sdk_1.Value.zero(), toDatum(builtValidators.veFactory.script))
                            .complete()];
                case 3:
                    tx0 = _c.sent();
                    return [4 /*yield*/, blaze.signTransaction(tx0)];
                case 4:
                    signedTx0 = _c.sent();
                    return [4 /*yield*/, blaze.submitTransaction(signedTx0)];
                case 5:
                    txHash0 = _c.sent();
                    console.log("Deploying validators (first batch). tx hash: " + txHash0);
                    console.log("Waiting for TX to be confirmed");
                    return [4 /*yield*/, blaze.provider.awaitTransactionConfirmation(txHash0)];
                case 6:
                    _c.sent();
                    return [4 /*yield*/, sleep(TX_CONFIRMATION_WAIT_TIME)];
                case 7:
                    _c.sent();
                    return [4 /*yield*/, blaze
                            .newTransaction()
                            .payAssets(lockScript, sdk_1.Value.zero(), toDatum(builtValidators.govProxy.script))
                            .payAssets(lockScript, sdk_1.Value.zero(), toDatum(builtValidators.permManager.script))
                            .payAssets(lockScript, sdk_1.Value.zero(), toDatum(builtValidators.mintWPAuthToken.script))
                            .payAssets(lockScript, sdk_1.Value.zero(), toDatum(builtValidators.mintVEIdentifierToken.script))
                            .complete()];
                case 8:
                    tx1 = _c.sent();
                    return [4 /*yield*/, blaze.signTransaction(tx1)];
                case 9:
                    signedTx1 = _c.sent();
                    return [4 /*yield*/, blaze.submitTransaction(signedTx1)];
                case 10:
                    txHash1 = _c.sent();
                    console.log("Deploying validators (2nd batch). tx hash: " + txHash1);
                    console.log("Waiting for TX to be confirmed");
                    return [4 /*yield*/, blaze.provider.awaitTransactionConfirmation(txHash1)];
                case 11:
                    _c.sent();
                    return [4 /*yield*/, sleep(TX_CONFIRMATION_WAIT_TIME)];
                case 12:
                    _c.sent();
                    return [4 /*yield*/, blaze
                            .newTransaction()
                            .payAssets(lockScript, sdk_1.Value.zero(), toDatum(builtValidators.mintVECompositionToken.script))
                            .payAssets(lockScript, sdk_1.Value.zero(), toDatum(builtValidators.weightingPower.script))
                            .payAssets(lockScript, sdk_1.Value.zero(), toDatum(builtValidators.smartFarm.script))
                            .complete()];
                case 13:
                    tx2 = _c.sent();
                    return [4 /*yield*/, blaze.signTransaction(tx2)];
                case 14:
                    signedTx2 = _c.sent();
                    return [4 /*yield*/, blaze.submitTransaction(signedTx2)];
                case 15:
                    txHash2 = _c.sent();
                    console.log("Deploying validators (3rd batch). tx hash: " + txHash2);
                    console.log("Waiting for TX to be confirmed");
                    return [4 /*yield*/, blaze.provider.awaitTransactionConfirmation(txHash2)];
                case 16:
                    _c.sent();
                    return [4 /*yield*/, sleep(TX_CONFIRMATION_WAIT_TIME)];
                case 17:
                    _c.sent();
                    return [2 /*return*/, [txHash0, txHash1, txHash2]];
            }
        });
    });
}
function createEntities(blaze, dv, nftDetails, daoInput) {
    return __awaiter(this, void 0, void 0, function () {
        var permManagerAuthToken, veFactoryAuthToken, gtToken, farmFactoryAuthToken, inflationAuthToken, wpFactoryAuthToken, toAddr, qty, splashToken, inflationAssets, inflationTokenMap, inflationValue, smartFarmFactoryTokenMap, smartFarmFactoryValue, wpFactoryTokenMap, wpFactoryValue, veFactoryTokenMap, veFactoryValue, permManagerTokenMap, permManagerValue, tx, signedTx, txHash, mintFarmAuthScript, mintFarmAuthScriptHash, newFarmId, farmAssetName, farmAuthToken, factoryOutDatum, farmFactoryAddr, utxos, mintFarmAuthTokenMap, step0, farmFactoryTokenMap, farmFactoryValue, step1, farmTx, signedFarmTx, farmTxHash, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    permManagerAuthToken = nftDetails.perm_auth.policyId +
                        nftDetails.perm_auth.assetName;
                    veFactoryAuthToken = nftDetails.ve_factory_auth.policyId +
                        nftDetails.ve_factory_auth.assetName;
                    gtToken = nftDetails.gt.policyId + nftDetails.gt.assetName;
                    farmFactoryAuthToken = nftDetails.factory_auth.policyId +
                        nftDetails.factory_auth.assetName;
                    inflationAuthToken = nftDetails.inflation_auth.policyId +
                        nftDetails.inflation_auth.assetName;
                    wpFactoryAuthToken = nftDetails.wp_factory_auth.policyId +
                        nftDetails.wp_factory_auth.assetName;
                    toAddr = function (script) {
                        return sdk_1.Core.addressFromValidator(sdk_1.Core.NetworkId.Testnet, script);
                    };
                    qty = 10000000n;
                    splashToken = SPLASH_POLICY_ID + SPLASH_ASSET_NAME;
                    inflationAssets = [
                        [inflationAuthToken, 1n],
                        [splashToken, INFLATION_BOX_INITIAL_SPLASH_QTY],
                    ];
                    inflationTokenMap = new Map();
                    inflationTokenMap.set(inflationAuthToken, 1n);
                    inflationTokenMap.set(splashToken, INFLATION_BOX_INITIAL_SPLASH_QTY);
                    inflationValue = sdk_1.Value.makeValue(qty);
                    inflationValue.setMultiasset(inflationTokenMap);
                    smartFarmFactoryTokenMap = new Map();
                    smartFarmFactoryTokenMap.set(farmFactoryAuthToken, 1n);
                    smartFarmFactoryValue = sdk_1.Value.makeValue(5n * qty);
                    smartFarmFactoryValue.setMultiasset(smartFarmFactoryTokenMap);
                    wpFactoryTokenMap = new Map();
                    wpFactoryTokenMap.set(wpFactoryAuthToken, 1n);
                    wpFactoryValue = sdk_1.Value.makeValue(qty);
                    wpFactoryValue.setMultiasset(wpFactoryTokenMap);
                    veFactoryTokenMap = new Map();
                    veFactoryTokenMap.set(veFactoryAuthToken, 1n);
                    veFactoryTokenMap.set(gtToken, BigInt(nftDetails.gt.quantity));
                    veFactoryValue = sdk_1.Value.makeValue(qty);
                    veFactoryValue.setMultiasset(veFactoryTokenMap);
                    permManagerTokenMap = new Map();
                    permManagerTokenMap.set(permManagerAuthToken, 1n);
                    permManagerValue = sdk_1.Value.makeValue(qty);
                    permManagerValue.setMultiasset(permManagerTokenMap);
                    return [4 /*yield*/, blaze.newTransaction()
                            .addReferenceInput(dv.inflation.referenceUtxo)
                            .addReferenceInput(dv.farmFactory.referenceUtxo)
                            .addReferenceInput(dv.wpFactory.referenceUtxo)
                            .addReferenceInput(dv.veFactory.referenceUtxo)
                            .addReferenceInput(dv.govProxy.referenceUtxo)
                            .addReferenceInput(dv.permManager.referenceUtxo)
                            .payAssets(toAddr(dv.inflation.script), inflationValue, sdk_1.Data.to(daoInput.inflation, plutus_ts_11.TokenInflationInflation.epoch))
                            .payAssets(toAddr(dv.farmFactory.script), smartFarmFactoryValue, sdk_1.Data.to(daoInput.farmFactory, plutus_ts_9.TokenSmartFarmFarmFactory.state))
                            .payAssets(toAddr(dv.wpFactory.script), wpFactoryValue, sdk_1.Data.to(daoInput.wpFactory, plutus_ts_6.GovernanceWeightingPollWpFactory.state))
                            .payAssets(toAddr(dv.veFactory.script), veFactoryValue, sdk_1.Data.to(daoInput.veFactory, plutus_ts_5.GovernanceVeFactoryVeFactory.conf))
                            .payLovelace(toAddr(dv.govProxy.script), qty)
                            .payAssets(toAddr(dv.permManager.script), permManagerValue, sdk_1.Data.void()).complete()];
                case 1:
                    tx = _a.sent();
                    return [4 /*yield*/, blaze.signTransaction(tx)];
                case 2:
                    signedTx = _a.sent();
                    return [4 /*yield*/, blaze.submitTransaction(signedTx)];
                case 3:
                    txHash = _a.sent();
                    console.log("Creating entities. TX hash: " + txHash);
                    console.log("Waiting for TX to be confirmed");
                    return [4 /*yield*/, blaze.provider.awaitTransactionConfirmation(txHash)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, sleep(TX_CONFIRMATION_WAIT_TIME)];
                case 5:
                    _a.sent();
                    console.log("Entities created.");
                    mintFarmAuthScript = new plutus_ts_8.TokenSmartFarmMintFarmAuthToken(SPLASH_POLICY_ID, nftDetails.factory_auth.policyId);
                    mintFarmAuthScriptHash = mintFarmAuthScript.hash();
                    console.log("mint_farm_auth_script_hash: " + mintFarmAuthScriptHash);
                    newFarmId = daoInput.farmFactory.lastFarmId + 1n;
                    console.log("new farm id: " + newFarmId);
                    farmAssetName = new sdk_1.Core.CborWriter().writeBigInteger(newFarmId)
                        .encodeAsHex();
                    console.log("farm asset name: " + farmAssetName);
                    farmAuthToken = mintFarmAuthScriptHash + farmAssetName;
                    factoryOutDatum = {
                        lastFarmId: newFarmId,
                        farmSeedData: daoInput.farmFactory.farmSeedData,
                    };
                    farmFactoryAddr = toAddr(dv.farmFactory.script);
                    console.log(farmFactoryAddr);
                    return [4 /*yield*/, blaze.provider.getUnspentOutputs(farmFactoryAddr)];
                case 6:
                    utxos = (_a.sent())
                        .filter(function (utxo) { return utxo.input().transactionId() === txHash; });
                    console.log(utxos);
                    mintFarmAuthTokenMap = new Map();
                    mintFarmAuthTokenMap.set(farmAuthToken, 1n);
                    step0 = blaze.newTransaction()
                        .addReferenceInput(dv.farmFactory.referenceUtxo)
                        .addInput(utxos[1], sdk_1.Data.to("CreateFarm", plutus_ts_9.TokenSmartFarmFarmFactory.action))
                        .addMint(sdk_1.Core.PolicyId(mintFarmAuthScriptHash), mintFarmAuthTokenMap, sdk_1.Data.to({ MintAuthToken: { factoryInIx: 0n } }, plutus_ts_8.TokenSmartFarmMintFarmAuthToken.action));
                    farmFactoryTokenMap = new Map();
                    farmFactoryTokenMap.set(farmFactoryAuthToken, 1n);
                    farmFactoryValue = sdk_1.Value.makeValue(5n * qty);
                    console.log("added minting to TX");
                    step1 = step0.payAssets(toAddr(dv.farmFactory.script), farmFactoryValue, sdk_1.Data.to(factoryOutDatum, plutus_ts_9.TokenSmartFarmFarmFactory.state));
                    console.log("add output to factory ");
                    _a.label = 7;
                case 7:
                    _a.trys.push([7, 13, , 14]);
                    return [4 /*yield*/, step1
                            .payAssets(toAddr(mintFarmAuthScript), // remember: same validator as smart-farm
                        sdk_1.Value.makeValue(qty, [farmAuthToken, 1n]), sdk_1.Data.to(dv.permManager.hash, plutus_ts_1.TokenSmartFarmSmartFarm.permManagerAuthPolicy)).complete()];
                case 8:
                    farmTx = _a.sent();
                    //const farmTx = await farmTx0.complete({ nativeUplc: true });
                    // const farmTx = await farmTx0.complete();
                    console.log("Trying to sign TX");
                    return [4 /*yield*/, blaze.signTransaction(farmTx)];
                case 9:
                    signedFarmTx = _a.sent();
                    console.log("TX successfully signed");
                    return [4 /*yield*/, blaze.submitTransaction(signedFarmTx)];
                case 10:
                    farmTxHash = _a.sent();
                    console.log("Creating smart_farm and farm_factory. TX hash: " + farmTxHash);
                    console.log("Waiting for TX to be confirmed");
                    return [4 /*yield*/, blaze.provider.awaitTransactionConfirmation(farmTxHash)];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, sleep(TX_CONFIRMATION_WAIT_TIME)];
                case 12:
                    _a.sent();
                    console.log("smart_farm and farm_factory created.");
                    return [3 /*break*/, 14];
                case 13:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 14];
                case 14: return [2 /*return*/];
            }
        });
    });
}
function getDeployedValidators(blaze, builtValidators, deployedValidatorsTxId) {
    return __awaiter(this, void 0, void 0, function () {
        var builtValidatorsKeys, left, mid, right, utxosByOutRefsRequest, validatorsUtxos_1, deployedValidators, filepath, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    builtValidatorsKeys = Object.keys(builtValidators);
                    left = builtValidatorsKeys.slice(0, 5).map(function (_, index) { return (new sdk_1.Core.TransactionInput(sdk_1.Core.TransactionId(deployedValidatorsTxId[0]), BigInt(index))); });
                    mid = builtValidatorsKeys.slice(5, 8).map(function (_, index) { return (new sdk_1.Core.TransactionInput(sdk_1.Core.TransactionId(deployedValidatorsTxId[1]), BigInt(index))); });
                    right = builtValidatorsKeys.slice(8, builtValidatorsKeys.length).map(function (_, index) { return (new sdk_1.Core.TransactionInput(sdk_1.Core.TransactionId(deployedValidatorsTxId[2]), BigInt(index))); });
                    utxosByOutRefsRequest = left.concat(mid).concat(right);
                    return [4 /*yield*/, blaze.provider.resolveUnspentOutputs(utxosByOutRefsRequest)];
                case 1:
                    validatorsUtxos_1 = _a.sent();
                    deployedValidators = builtValidatorsKeys.reduce(function (acc, key, index) {
                        var _a;
                        var _b = builtValidators[key], script = _b.script, hash = _b.hash, cost = _b.cost;
                        var referenceUtxo = validatorsUtxos_1[index];
                        return __assign((_a = {}, _a[key] = {
                            script: script,
                            hash: hash,
                            referenceUtxo: referenceUtxo,
                            cost: cost,
                        }, _a), acc);
                    }, {});
                    console.log(deployedValidators);
                    filepath = DEPLOYED_VALIDATORS_JSON_FILENAME;
                    // Write the object to a JSON file
                    return [4 /*yield*/, promises_1.default.writeFile(filepath, toJson(deployedValidators))];
                case 2:
                    // Write the object to a JSON file
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("Failed to get deployed validators:", error_2);
                    throw error_2;
                case 4: return [2 /*return*/];
            }
        });
    });
}
// From: https://stackoverflow.com/a/58253280
function toJson(data) {
    if (data !== undefined) {
        return JSON.stringify(data, function (_, v) { return typeof v === "bigint" ? "".concat(v, "#bigint") : v; })
            .replace(/"(-?\d+)#bigint"/g, function (_, a) { return a; });
    }
}
// Utility function to generate a new wallet seed
//async function generateSeed() {
//  const lucid = await getLucid();
//  const seedPhrase = lucid.utils.generateSeedPhrase();
//  const fromSeed = walletFromSeed(
//    seedPhrase,
//    {
//      addressType: "Base",
//      accountIndex: 0,
//    },
//  );
//  console.log(seedPhrase);
//  console.log(fromSeed.address);
//}
//
//function computePrivateKeyFromSeedPhrase(seedPhrase: string) {
//  const entropy = mnemonicToEntropy(seedPhrase);
//
//  // Encode the string into a Uint8Array
//  console.log(
//    Bip32PrivateKey.from_bip39_entropy(Core.fromHex(entropy), new Uint8Array())
//      .to_bech32(),
//  );
//  const s = walletFromSeed(seedPhrase, {
//    addressType: "Base",
//    accountIndex: 0,
//  });
//  console.log(s.address);
//}
function mintTokens(asset_name, quantity) {
    return __awaiter(this, void 0, void 0, function () {
        var scriptPK, before, scriptAll, mintingPolicy, script, _a, blaze, _, policyId, unit, tx, signedTx, txHash;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    scriptPK = new sdk_1.Core.ScriptPubkey(sdk_1.Core.Ed25519KeyHashHex(""));
                    before = new sdk_1.Core.TimelockExpiry(sdk_1.Core.Slot(123));
                    scriptAll = new sdk_1.Core.ScriptAll([
                        sdk_1.Core.NativeScript.newScriptPubkey(scriptPK),
                        sdk_1.Core.NativeScript.newTimelockExpiry(before),
                    ]);
                    mintingPolicy = sdk_1.Core.NativeScript.newScriptAll(scriptAll);
                    script = sdk_1.Core.Script.newNativeScript(mintingPolicy);
                    return [4 /*yield*/, (0, wallet_ts_1.getBlaze)()];
                case 1:
                    _a = _b.sent(), blaze = _a[0], _ = _a[1];
                    policyId = sdk_1.Core.PolicyId(mintingPolicy.hash());
                    unit = policyId + asset_name;
                    console.log("policy id: " + policyId);
                    return [4 /*yield*/, blaze.newTransaction()
                            .provideScript(script)
                            .addMint(policyId, new Map().set(unit, quantity), sdk_1.Data.void())
                            .setValidUntil(sdk_1.Core.Slot(69321696 + 1000))
                            .complete()];
                case 2:
                    tx = _b.sent();
                    return [4 /*yield*/, blaze.signTransaction(tx)];
                case 3:
                    signedTx = _b.sent();
                    console.log("Minting test tokens");
                    return [4 /*yield*/, blaze.submitTransaction(signedTx)];
                case 4:
                    txHash = _b.sent();
                    return [4 /*yield*/, blaze.provider.awaitTransactionConfirmation(txHash)];
                case 5:
                    _b.sent();
                    console.log("Mint TX hash: " + txHash);
                    return [2 /*return*/];
            }
        });
    });
}
//async function payToAddress(addr: string) {
//  const lucid = await getLucid();
//  const _ = await setupWallet(lucid);
//  const tx = await lucid.newTx().payToAddress(addr, { lovelace: 4810000000n })
//    .complete();
//  const signedTx = await tx.sign().complete();
//
//  console.log("Pay to " + addr);
//  const txHash = await signedTx.submit();
//  console.log("TX hash: " + txHash);
//}
function stringToHex(s) {
    var encoder = new TextEncoder();
    var uint8Array = encoder.encode(s);
    return new sdk_1.Core.CborWriter().writeByteString(uint8Array).encodeAsHex();
}
// generateSeed();
//payToAddress(
//  "addr_test1qr02lf68hu4n4t5wdgfkn0ddql36z8jr060ytc4e0gscy57qc3u5cmx09wr5wkwngx5gvrmjppaatgdqj5c8v3q406sszrxkn6",
//);
// main();
mintTokens(LQ_NAME, INFLATION_BOX_INITIAL_SPLASH_QTY);
// mintTokens(SPLASH_ASSET_NAME, 2n * INFLATION_BOX_INITIAL_SPLASH_QTY);
