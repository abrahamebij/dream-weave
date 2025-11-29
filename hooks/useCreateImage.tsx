"use client";
import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "./useSession";

 type ImgResponse = {
  success: boolean;
  msg: string;
  data: ImgData;
};

export type ImgData = { tags: string; interpretation: string; img: string, imgColor: string }
export function useCreateImage() {
  return useMutation({
    mutationFn: async ({ prompt }: { prompt: string }) => {
      const response: ImgResponse = await apiFetch("/api/create-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      // if (!response.ok) {
      //   throw new Error('Failed to create image');
      // }

      return response.data;
      // return response.results[0].urls.regular;
    },
  });
}
