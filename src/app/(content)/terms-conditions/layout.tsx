import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STEVDEV | Terms & Conditions",
  description: `Welcome to STEVDEV! These Terms and Conditions govern your use of our website and services. 
  By accessing or using our services, you agree to comply with and be bound by these Terms.`,
};

export default function TermsConditionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
