"use client";

import type { JSX } from "react";
import React from "react";

import AppButton from "@/components/common/AppButton";
import type { Contact } from "@/utils/types/contact";

type Props = {
  contact: Contact;
};

export default function CardContact({ contact }: Props): JSX.Element {
  return (
    <div className="group relative transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300"></div>
      <div className="relative flex flex-col justify-center p-8 text-center">
        <div className="mb-6 flex justify-center">{contact.icon}</div>
        <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300">
          {contact.title}
        </h3>
        <p className="mb-4 text-gray-600 transition-colors duration-300">
          {contact.description}
        </p>
        <AppButton
          title="Contact"
          onClick={() => window.open(contact.link, "_blank")}
        />
      </div>
    </div>
  );
}
