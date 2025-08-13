"use client";

import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/users/logout", {
        method: "POST",
        credentials: "include", // Important for sending cookies
      });
      if (response.ok) {
        // Redirect to login page or update UI
        window.location.href = "/admin/login";
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="logout-btn" onClick={handleLogout}>
      <LogOut size={20} /> Logout
    </div>
  );
}
