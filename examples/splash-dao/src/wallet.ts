import { Blaze, Blockfrost, Core, HotWallet } from "@blaze-cardano/sdk";
import fs from "node:fs/promises";

export async function getBlaze(): Promise<
  [Blaze<Blockfrost, HotWallet>, string]
> {
  const seed = await fs.readFile("./seed.txt", "ascii");
  const blockFrostProjectId = await fs.readFile("./token.txt", "ascii");
  const entropy = Core.mnemonicToEntropy(seed, Core.wordlist);
  const masterkey = Core.Bip32PrivateKey.fromBip39Entropy(
    Buffer.from(entropy),
    "",
  );
  const pubKey = (await masterkey.toPublic()).hex();
  const networkId = Core.NetworkId.Testnet;
  const provider = new Blockfrost({
    network: "cardano-preprod",
    projectId: blockFrostProjectId,
  });
  const wallet = await HotWallet.fromMasterkey(
    masterkey.hex(),
    provider,
    networkId,
  );
  const blaze = await Blaze.from(provider, wallet);
  return [blaze, pubKey];
}
