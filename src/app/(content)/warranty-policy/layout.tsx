import {Metadata} from "next";

export const metadata: Metadata = {
  title: "STEVDEV | Warranty Policy",
  description: `At STEVDEV, we take pride in the quality of our services and products. 
  We offer a warranty to ensure your satisfaction and peace of mind.`
}

export default function WarrantyPolicyLayout({
 children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  )
}