"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "sonner";

export default function LogoutPage() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const { error } = await supabase.auth.signOut();

        if (error) {
          console.error("Logout Error:", error);
          toast.error("Something went wrong!");
        } else {
          toast.success("Logged out successfully!");
          router.push("/");
        }
      } catch (err) {
        console.error(err);
        toast.error("Unexpected error occurred!");
      }
    };

    handleLogout();
  }, [router, supabase]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg font-medium">Logging you out...</p>
    </div>
  );
}
