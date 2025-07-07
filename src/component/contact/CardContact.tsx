'use client'

import React, {JSX} from "react";
import {Contact} from "@/utils/types/contact";
import AppButton from "@/component/common/AppButton";

type Props = {
  contact: Contact;
}

export default function CardContact({contact}: Props): JSX.Element {
  return (
    <div
      className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300"></div>
      <div className="relative flex flex-col p-8 text-center justify-center">
        <div className="mb-6 flex justify-center">
          {contact.icon}
        </div>
        <h3
          className="text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300">
          {contact.title}
        </h3>
        <p className="text-gray-600 mb-4 transition-colors duration-300">
          {contact.description}
        </p>
        <AppButton title="Contact" onClick={() => window.open(contact.link, '_blank')} />
      </div>
    </div>
  )
}