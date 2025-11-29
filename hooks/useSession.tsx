"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { WalletClient } from "viem";
import { SessionData } from "@/lib/session"; // Assuming you have this type from iron-session
import { queryClient } from "@/providers";
import { toast } from "sonner";

// --- Helper Fetch Function ---
// A simple wrapper for fetch that handles errors and JSON
export const apiFetch = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const errorBody = await res.json();
    toast.error(errorBody.error || "An API error occurred");
    throw new Error(errorBody.error || "An API error occurred");
  }

  return res.json();
};

// --- Authentication Hooks ---

/**
 * 1. Get Session Hook
 * Fetches the current user's session data from our API route.
 *
 * NOTE: You must create 'app/api/auth/me/route.ts'
 * This route should call getSession() and return the session data.
 */
export const useGetSession = () => {
  return useQuery<SessionData>({
    queryKey: ["session"],
    queryFn: () => apiFetch("/api/auth/me"),
    // retry: false, // Don't retry on 401/403
  });
};

/**
 * 2. Login Hook (Sign-In with Ethereum)
 * This mutation handles the entire login flow:
 * 1. Gets a nonce (message) from the API
 * 2. Asks the user to sign it with their wallet
 * 3. Sends the signature to the API for verification
 */
interface LoginParams {
  walletClient: WalletClient;
  walletAddress: `0x${string}`;
  // signature: `0x${string}`;
}

export const useLogin = () => {
  return useMutation({
    mutationFn: async ({ walletAddress, walletClient }: LoginParams) => {
      // Step 1: Get nonce (message) from the server
      const { message } = await apiFetch("/api/auth/nonce");

      // Step 2: User signs the message
      const signature = await walletClient.signMessage({
        account: walletAddress,
        message: message,
      });

      // Step 3: Send signature to server for verification
      await apiFetch("/api/auth/verify", {
        method: "POST",
        body: JSON.stringify({ message, signature, walletAddress }),
      });
      return signature;
    },
    onSuccess: () => {
      // When login succeeds, refetch the session data
      queryClient.invalidateQueries({ queryKey: ["session"] });
    },
  });
};

/**
 * 3. Logout Hook
 * Calls the API route to destroy the user's session.
 */
export const useLogout = () => {
  return useMutation({
    mutationFn: () => apiFetch("/api/auth/logout", { method: "POST" }),
    onSuccess: () => {
      // When logout succeeds, clear the session data
      queryClient.setQueryData(["session"], null);
    },
  });
};
