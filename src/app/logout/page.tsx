/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast, Toaster } from "sonner";
 // Import the updated API service
import { useAuthStore } from "@/stores/userStore";
import { AuthApi } from "@/utils/api-calls";

export default function LogoutPage() {
  const router = useRouter();
  const { logout } = useAuthStore();

  useEffect(() => {
    const handleLogout = async () => {
      const token = Cookies.get("token");

      try {
        if (token) {
          await AuthApi.logout(token);
          toast.success("Successfully logged out");
        }
      } catch (error: any) {
        console.error("Error during logout:", error);
        toast.error(error.message || "Failed to logout");
      } finally {
        // Clear all cookies
        Object.keys(Cookies.get()).forEach((cookie) => Cookies.remove(cookie));

        // Clear auth state
        logout();

        // Redirect to login
        router.push("/login");
      }
    };

    handleLogout();
  }, [router, logout]);

  return (
    <div>
      <Toaster position="top-center" />
      <p>Logging out...</p>
    </div>
  );
}