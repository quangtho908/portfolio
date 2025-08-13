"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const GroupItem = ({
  label,
  children,
  onClick,
}: {
  label: string;
  children?: React.ReactNode;
  onClick?: () => void;
  badge?: string | null;
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div>
      {/* Main Item */}
      <button onClick={handleClick} className="my-nav_group-item">
        <div className="my-nav_group-item_label">
          <span className="my-nav_group-item_label_text">{label}</span>
        </div>

        <ChevronDown
          size={16}
          className={
            isExpanded
              ? "my-nav_group-item_icon_expanded"
              : "my-nav_group-item_icon"
          }
        />
      </button>

      {/* Dropdown Content */}
      {isExpanded && <div>{children}</div>}
    </div>
  );
};

export default GroupItem;
