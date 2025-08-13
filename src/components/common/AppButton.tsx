"use client";

import type { JSX } from "react";

type TypeButton = "fill" | "outline";

type ButtonPattern = {
  [key in TypeButton]: {
    original: string;
    hover: string;
  };
};

const styles: ButtonPattern = {
  fill: {
    original: "bg-primary-500 text-white border-2 border-primary-500",
    hover: "hover:bg-white hover:text-primary-500",
  },
  outline: {
    original: "border-2 border-primary-500 bg-white text-primary-500",
    hover: "hover:bg-primary-500 hover:text-white",
  },
};

type Props = {
  pattern?: TypeButton;
  title: string;
  icon?: JSX.Element;
  className?: string;
  onClick?: () => void;
};

export default function AppButton({
  pattern = "fill",
  title,
  icon,
  className,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center gap-3 rounded-lg px-6 py-2 font-medium transition-all duration-300 ${styles[pattern].original} ${styles[pattern].hover}  ${className} `}
    >
      {title}
      {icon || <></>}
    </button>
  );
}
