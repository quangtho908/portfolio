import {Mail} from "lucide-react";
import Image from "next/image";
import React from "react";
import CardContact from "@/component/contact/CardContact";
import {Contact} from "@/utils/types/contact";

const contactInfo: Contact[] = [
  {
    icon: <Image src={"/icons/email.svg"} alt={"Stevdev services"} width={40} height={40} />,
    title: "Email",
    link: "mailto:quangtho.dev@gmail.com",
    description: "Send my email"
  },
  {
    icon: <Image src={"/icons/facebook.svg"} alt={"Stevdev services"} width={40} height={40} />,
    title: "Facebook",
    link: "https://www.facebook.com/tho.developer",
    description: "Connect Facebook"
  },
  {
    icon: <Image src={"/icons/linkedin.svg"} alt={"Stevdev services"} width={35} height={35} />,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/quangtho/",
    description: "Professional LinkedIn"
  }
];

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="relative mb-8">
          <div
            className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-3xl opacity-20 w-32 h-32 mx-auto"></div>
          <div
            className="relative w-32 h-32 mx-auto bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
            <Mail className="w-16 h-16 text-white"/>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Contact with me
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          I am always ready to help you, let connect with me
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {contactInfo.map((item, index) => (
          <CardContact contact={item} key={index} />
        ))}
      </div>
    </div>
  )
}