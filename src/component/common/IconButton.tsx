import {JSX} from "react";

type Props = {
  onClick?: () => void;
  disabled?: boolean;
  icon?: JSX.Element;
}

export default function IconButton ({onClick, disabled, icon}: Props) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-tapa-600 hover:text-international-orange-500 transition-all duration-300 transform hover:scale-110"
      disabled={disabled}
    >
      {icon}
    </button>
  )
}