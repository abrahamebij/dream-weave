"use client";

import { ImgData } from "@/hooks/useCreateImage";
import Img from "../ui/Img";
import { SchemaEncoder, SDK } from "@somnia-chain/streams";
import { createWalletClient, custom, toHex } from "viem";
import { useEffect, useState } from "react";
import { initSomnia } from "@/lib/somnia";
import { useGetSession } from "@/hooks/useSession";
import { useRouter } from "next/navigation";

interface DreamResultProps {
  dreamText: string;
  result: ImgData;
  onBack: () => void;
}

export const DreamResult = ({
  dreamText,
  result,
  onBack,
}: DreamResultProps) => {
  const [loading, setLoading] = useState(false);
  const { data, isPending } = useGetSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !data?.walletAddress) {
      router.push("/login");
    }
  }, [data?.walletAddress, isPending, router]);

  const handleSaveToChain = async () => {
    try {
      setLoading(true);
      const { schemaId, schema, sdk } = await initSomnia(
        data?.walletAddress as `0x${string}`
      );
      console.log("sdk: ", sdk);
      console.log("schema: ", schema);
      console.log("schemaId: ", schemaId);

      // if (!window.ethereum) {
      //   alert("Please connect a wallet first.");
      //   return;
      // }

      // // Connect user wallet
      // const wallet = createWalletClient({
      //   transport: custom(window.ethereum),
      // });

      // const sdk = new SDK({
      //   wallet,
      //   public: getPublicClient(),
      // });

      // const schema =
      //   "uint64 timestamp, string dream, string tags, string interpretation, string color";

      const encoder = new SchemaEncoder(schema);

      const encodedData = encoder.encodeData([
        { name: "timestamp", value: Date.now().toString(), type: "uint64" },
        { name: "dream", value: dreamText.trim(), type: "string" },
        { name: "tags", value: result.tags, type: "string" },
        {
          name: "interpretation",
          value: result.interpretation,
          type: "string",
        },
        { name: "color", value: result.imgColor, type: "string" },
      ]);

      // Create deterministic ID from dream text
      const id = toHex(dreamText.trim().slice(0, 32), { size: 32 });
      console.log("id: ", id);

      // Your actual schemaId (replace this)
      // const schemaId = process.env.NEXT_PUBLIC_SOMNIA_SCHEMA_ID as `0x${string}`;

      const tx = await sdk.streams.set([
        {
          id,
          schemaId,
          data: encodedData,
        },
      ]);

      console.log("TX:", tx);
      // alert("Saved to blockchain!");
    } catch (err) {
      console.error(err);
      alert("Error occurred while saving.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full">
        <button
          onClick={onBack}
          className="mb-8 text-white/70 hover:text-white transition-colors flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to dreams</span>
        </button>

        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Your Dream
                </h2>
                <p className="text-white/80 leading-relaxed">{dreamText}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  AI Interpretation
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {result?.interpretation}
                </p>
              </div>

              <div className="flex flex-1 items-end">
                <button
                  onClick={handleSaveToChain}
                  disabled={loading}
                  className="bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium disabled:opacity-50"
                >
                  {loading ? "Saving..." : "Save to Chain"}
                </button>
              </div>
            </div>

            <div className="relative">
              <div
                style={{ backgroundColor: result?.imgColor || "gray" }}
                className="aspect-square rounded-2xl overflow-hidden"
              >
                {result?.img && (
                  <Img
                    src={result?.img}
                    alt="Dream visualization Image"
                    className="w-full h-full object-cover opacity-80"
                  />
                )}
              </div>
              <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                Generated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
