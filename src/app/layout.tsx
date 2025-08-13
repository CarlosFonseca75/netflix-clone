import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Netflix Clone",
  description:
    "🎬 A Netflix-inspired frontend built with Next.js and SCSS — cinematic and responsive.",
  keywords: [
    "netflix",
    "netflix-clone",
    "frontend",
    "nextjs",
    "scss",
    "react",
    "movies",
    "typescript",
    "ui-clone",
    "web-app",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
