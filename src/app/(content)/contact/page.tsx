import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

import CardContact from "@/components/contact/CardContact";
import type { Contact } from "@/utils/types/contact";

const contactInfo: Contact[] = [
  {
    icon: (
      <Image
        src={"/icons/email.svg"}
        alt={"Stevdev services"}
        width={40}
        height={40}
      />
    ),
    title: "Email",
    link: "mailto:quangtho.dev@gmail.com",
    description: "Send my email",
  },
  {
    icon: (
      <Image
        src={"/icons/facebook.svg"}
        alt={"Stevdev services"}
        width={40}
        height={40}
      />
    ),
    title: "Facebook",
    link: "https://www.facebook.com/tho.developer",
    description: "Connect Facebook",
  },
  {
    icon: (
      <Image
        src={"/icons/linkedin.svg"}
        alt={"Stevdev services"}
        width={35}
        height={35}
      />
    ),
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/quangtho/",
    description: "Professional LinkedIn",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 mx-auto h-32 w-32 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 opacity-20 blur-3xl"></div>
          <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600">
            <Mail className="h-16 w-16 text-white" />
          </div>
        </div>
        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          Contact with me
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          I am always ready to help you, let connect with me
        </p>
      </div>

      {/* Contact Cards */}
      <div className="mb-16 grid gap-8 md:grid-cols-3">
        {contactInfo.map((item, index) => (
          <CardContact contact={item} key={index} />
        ))}
      </div>
    </div>
  );
}
