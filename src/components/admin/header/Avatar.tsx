import React from "react";

const ProfilePicture = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" className="header_profile_icon_bg" />
      <circle cx="12" cy="9" r="3" className="header_profile_icon_character" />
      <path
        d="M6.168 18.849C6.718 16.761 9.165 15 12 15s5.282 1.761 5.832 3.849"
        className="header_profile_icon_character"
      />
    </svg>
  );
};

export default ProfilePicture;
