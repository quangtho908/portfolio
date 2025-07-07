'use client'

import {ReactElement} from "react";

type Props = {
  onClick?: () => void
  title: string,
  className?: string,
  icon?: ReactElement,
}

export default function AppLink({title, onClick, className, icon}: Props) {
  return (
    <div onClick={onClick} className={`cursor-pointer text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm ${className}`}>
      {icon}
      {title}
    </div>
  )
}