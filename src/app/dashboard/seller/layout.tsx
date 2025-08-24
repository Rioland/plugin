"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/clients";

interface SellerDashboardLayoutProps {
  children: React.ReactNode;
}

export default function SellerDashboardLayout({ children }: SellerDashboardLayoutProps) {
  const router = useRouter();
  const supabase = createClient();

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Get current user
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError || !user) {
          console.error("User not found:", userError?.message);
          router.push("/");
          return;
        }

        // Fetch profile from Supabase
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Error fetching profile:", error.message);
          router.push("/");
          return;
        }

        setProfile(data);

        // If onboarding is incomplete, redirect
        if (!data.business_type ) {
          router.push("/dashboard/seller/select-bussiness-type");
          return;
        }
        
        // If onboarding is incomplete, redirect
        if (!data.business_type || !data.skills || data.skills.length === 0) {
          router.push("/dashboard/seller/onboarding");
          return;
        }

      } catch (err) {
        console.error("Unexpected error:", err);
        router.push("/");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router, supabase]);

  // Show loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Loading your dashboard...
      </div>
    );
  }

  return <>{children}</>;
}
