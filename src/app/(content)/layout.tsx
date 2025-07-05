import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/component/frame/Header";
import Footer from "@/component/frame/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stevdev Developer Service",
  description: "Stevdev service, web, application development",
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      {
        url: "/icons/icon.png",
        type: "image/png",
      }
    ],
    apple: [
      { url: "/icons/apple-icon.png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
