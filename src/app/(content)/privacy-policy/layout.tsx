import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STEVDEV | Privacy Policy",
  description: `Welcome to STEVDEV! These Privacy Policy.`,
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
