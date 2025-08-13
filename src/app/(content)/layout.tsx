import "./globals.css";

import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";

import Footer from "@/components/frame/Footer";
import Header from "@/components/frame/Header";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web & App Solutions That Empower Your Business",
  description: `We specialize in crafting modern, high-impact websites and custom 
  applications that help your business stand out and grow. From intuitive UI/UX 
  design to robust backend development, we deliver tailored digital experiences 
  that drive real results. Let us help you turn your ideas into powerful digital 
  products that exceed expectations.`,
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      {
        url: "/icons/icon.png",
        type: "image/png",
      },
    ],
    apple: [{ url: "/icons/apple-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </LanguageProvider>
    </html>
  );
}
