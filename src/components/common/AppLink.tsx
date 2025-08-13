"use client";

import type { ReactElement } from "react";

type Props = {
  onClick?: () => void;
  title: string;
  className?: string;
  icon?: ReactElement;
};

export default function AppLink({ title, onClick, className, icon }: Props) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer text-sm text-gray-600 transition-colors duration-300 hover:text-orange-500 ${className}`}
    >
      {icon}
      {title}
    </div>
  );
}
