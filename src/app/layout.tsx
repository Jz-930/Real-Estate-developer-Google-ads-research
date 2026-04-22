import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elevating Digital Acquisition | Developer Google Ads Strategy",
  description: "A premium presentation on Google Ads strategies for real estate developers in the GTA.",
  authors: [{ name: "jiackey" }],
  creator: "jiackey",
  other: {
    "crafted-by": "jiackey",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-origin="jiackey" suppressHydrationWarning>
      {/* <!-- created by jiackey | DME Studio | handcrafted consulting deck --> */}
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased selection:bg-accent/30 selection:text-white overflow-x-hidden`} data-architect="jiackey">
        {children}
        {/* jiackey:signature:deck:v1 */}
      </body>
    </html>
  );
}
