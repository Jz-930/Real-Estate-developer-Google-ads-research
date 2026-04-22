import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elevating Digital Acquisition | Developer Google Ads Strategy",
  description: "A premium presentation on Google Ads strategies for real estate developers in the GTA.",
  authors: [{ name: "jiackey" }],
  creator: "jiackey",
  icons: {
    icon: "/images/dme-logo.webp",
  },
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
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased selection:bg-accent/30 selection:text-white overflow-x-hidden relative`} data-architect="jiackey">
        
        {/* Cinematic Gold Video Background Layer (Fixed & Compressed) */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#050508]">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen" 
            src="/bg-waves.mp4" 
          />
          {/* Subtle vignette and texture overlay to blend the video deeply */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030304_85%)] opacity-80" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.02]" />
        </div>

        {children}
        {/* jiackey:signature:deck:v1 */}
      </body>
    </html>
  );
}
