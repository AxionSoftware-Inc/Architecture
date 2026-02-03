import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Apex Architecture | Premium Arxitektura va Dizayn",
  description:
    "Apex Architecture - zamonaviy arxitektura loyihalari, interyer dizayni va mukammal qurilish yechimlari. Biz bilan kelajakni quring.",
  keywords: ["arxitektura", "dizayn", "qurilish", "apex architecture", "loyiha", "uzbekistan arxitektura"],
  authors: [{ name: "Apex Architecture" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className={`${cormorant.variable} ${manrope.variable} antialiased font-body`}>
        {children}
      </body>
    </html>
  );
}
