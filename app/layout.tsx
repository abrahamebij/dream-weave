import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Providers } from "@/providers";
import { Navigation } from "@/components/Navigation";
import { StarField } from "@/components/StarField";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "700", "600"],
});

export const metadata: Metadata = {
  title: "DreamWeave - Visualize Your Dreams",
  description:
    "Transform your dreams into beautiful visualizations with AI-powered interpretation and blockchain storage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${grotesk.className} antialiased bg-dream-main relative`}
      >
        <StarField />
        <Navigation />
        <Toaster richColors position="top-right" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
