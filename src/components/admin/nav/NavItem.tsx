import Link from "next/link";

const NavItem = ({
  label,
  variant = "default",
  href,
  disabled = false,
}: {
  label: string;
  href?: string;
  variant?: "default" | "danger" | "primary";
  disabled?: boolean;
}) => {
  const variantClasses = {
    default: "text-gray-700 hover:bg-gray-100",
    danger: "text-red-600 hover:bg-red-50",
    primary: "text-blue-600 hover:bg-blue-50",
  };

  return (
    <Link
      href={href || "#"}
      className={`my-nav_item_link ${
        disabled ? "cursor-not-allowed text-gray-400" : variantClasses[variant]
      }`}
    >
      <div className="my-nav_item">{label}</div>
    </Link>
  );
};

export default NavItem;
