import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://www.iqrati.com/";
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Iqrati",
  openGraph: {
    title: "Iqrati",
    images: [
      {
        url: new URL("/ex2.png", baseUrl).toString(),
        width: 1200,
        height: 600,
        alt: "Ghaffar Enterprises Square Logo",
      },
      {
        url: new URL("/ex2.png", baseUrl).toString(),
        width: 1200,
        height: 630,
        alt: "Ghaffar Enterprises Rectangle Logo",
      },
    ],
    type: "website",
    url: baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Iqrati",
    images: [
      {
        url: new URL("/ex2.png", baseUrl).toString(),
        width: 1200,
        height: 600,
        alt: "Ghaffar Enterprises Square Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
