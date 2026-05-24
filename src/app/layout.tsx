import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://deepanshu-sharma-portfolio.vercel.app"),
  title: "Deepanshu Sharma | Full Stack Developer",
  description:
    "Deepanshu Sharma is a Full Stack Developer building scalable web apps, AI-powered systems, and real-time platforms.",
  openGraph: {
    title: "Deepanshu Sharma | Full Stack Developer",
    description:
      "Portfolio of Deepanshu Sharma featuring full stack, AI, and real-time engineering work.",
    url: "https://deepanshu-sharma-portfolio.vercel.app",
    siteName: "Deepanshu Sharma Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepanshu Sharma | Full Stack Developer",
    description:
      "Full Stack Developer crafting scalable platforms, AI solutions, and modern web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
