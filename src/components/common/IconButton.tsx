import type { JSX } from "react";

type Props = {
  onClick?: () => void;
  disabled?: boolean;
  icon?: JSX.Element;
};

export default function IconButton({ onClick, disabled, icon }: Props) {
  return (
    <button
      onClick={onClick}
      className="text-tapa-600 hover:text-primary-500 flex h-12 w-12 transform cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      disabled={disabled}
    >
      {icon}
    </button>
  );
}
