import { SDK } from "@somnia-chain/streams"
import { createPublicClient, createWalletClient, http } from 'viem'
import { somniaTestnet } from 'viem/chains'

export const schema =
  "uint64 timestamp, string dream, string tags, string interpretation, string color";

export async function initSomnia(walletAddress: `0x${string}`) {
  // const session = await getSession()

  const publicClient = createPublicClient({
    chain: somniaTestnet,
    transport: http(somniaTestnet.rpcUrls.default.http[0])
  });

  const walletClient = createWalletClient({
    chain: somniaTestnet,
    transport: http(somniaTestnet.rpcUrls.default.http[0]),
  });

  const sdk = new SDK({
    public: publicClient,
    wallet: walletClient,
  });

  const schemaId = await sdk.streams.computeSchemaId(schema) as `0x${string}`;
  const nonce = await publicClient.getTransactionCount({
    address: walletAddress,
    blockTag: 'pending',
  });

  return { sdk, schemaId, nonce, schema };
}
