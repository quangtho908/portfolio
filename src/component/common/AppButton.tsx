import {JSX} from "react";

type TypeButton = 'fill' | 'outline';

type ButtonPattern = {
  [key in TypeButton]: {
    original: string;
    hover: string;
  };
};

const styles: ButtonPattern = {
  fill: {
    original: 'bg-international-orange-500 text-white border-2 border-international-orange-500',
    hover: 'hover:bg-white hover:text-international-orange-500',
  },
  outline: {
    original: 'border-2 border-international-orange-500 bg-white text-international-orange-500',
    hover: 'hover:bg-international-orange-500 hover:text-white',
  }
}

type Props = {
  pattern?: TypeButton;
  title: string;
  icon?: JSX.Element;
  className?: string;
  onClick?: () => void;
}

export default function AppButton({pattern = "fill", title, icon, className, onClick}: Props) {
  return (
    <button
      onClick={onClick}
      className={`${styles[pattern].original} ${styles[pattern].hover} flex justify-center items-center gap-3 cursor-pointer px-6 py-2 rounded-lg font-medium transition-all duration-300 ${className}`}
    >
      {title}
      {icon ? icon : <></>}
    </button>
  )
}