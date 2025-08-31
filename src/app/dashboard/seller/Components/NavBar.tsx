/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/clients";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Bell, HelpCircle, User, Settings, LogOut, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import Preloading from "@/components/preloading";

interface PluginNavbarProps {
  children?: React.ReactNode;
}

const PluginNavbar: React.FC<PluginNavbarProps> = ({ children }) => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();
  const router = useRouter();

  // Fetch profile from Supabase
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError || !user) {
          console.error("No logged-in user:", userError);
          router.push("/");
          return;
        }

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
      } catch (err) {
        console.error("Unexpected error:", err);
        router.push("/");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router, supabase]);

  // Dropdown renderer
  const renderDropdown = (items: string[]) => (
    <div className="absolute top-full mt-0 left-0 bg-[#1f1f1f] border border-gray-700 rounded shadow-lg w-48 z-50">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="px-4 py-2 hover:bg-[#2c2c2c] cursor-pointer text-lg"
          onClick={() => {
            if (item === "Find Jobs") router.push("/dashboard/seller/jobs");
            else if (item === "Saved Jobs") router.push("/dashboard/seller/jobs/saved-jobs");
            else if (item === "Proposals") router.push("/dashboard/seller/all-proposals");
            else if (item === "Offers") router.push("/dashboard/seller/offers");
            else if (item === "Invites") router.push("/dashboard/seller/invites");
            else if (item === "Active Contract") router.push("/dashboard/seller/active-contract");
            else if (item === "Contract History") router.push("/dashboard/seller/contract-history");
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );

  if (loading) {
    return (
      <Preloading />
    );
  }

  return (
    <div className="h-screen bg-black text-white">
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800 relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/Logo-yellow.png" alt="Plugin Logo" width={100} height={100} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {/* Find Jobs */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("find-jobs")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <div className="cursor-pointer">Find Jobs ▾</div>
            {hoveredMenu === "find-jobs" &&
              renderDropdown(["Find Jobs", "Saved Jobs", "Proposals", "Offers", "Invites"])}
          </div>

          {/* Deliver Jobs */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("deliver-jobs")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <div className="cursor-pointer">Deliver Jobs ▾</div>
            {hoveredMenu === "deliver-jobs" &&
              renderDropdown(["Active Contract", "Contract History"])}
          </div>

          <div className="cursor-pointer" onClick={() => router.push("/dashboard/seller/wallet")}>
            Wallet
          </div>
          <div className="cursor-pointer" onClick={() => router.push("/dashboard/seller/messages")}>
            Messages
          </div>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Input
            placeholder="Search..."
            className="bg-[#1f1f1f] border-none text-white placeholder:text-gray-400 hidden md:block"
          />

          <div className="hidden md:flex items-center gap-4">
            <Bell className="w-8 h-8" />
            <HelpCircle className="w-8 h-8" />
            <UserDropdown profile={profile} />
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#111] text-white flex flex-col items-start px-6 py-4 gap-4 md:hidden z-50 border-t border-gray-700">
            <Input
              placeholder="Search..."
              className="bg-[#1f1f1f] border-none text-white placeholder:text-gray-400"
            />
            <div
              className="relative"
              onMouseEnter={() => setHoveredMenu("find-jobs")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <div className="cursor-pointer">Find Jobs ▾</div>
              {hoveredMenu === "find-jobs" &&
                renderDropdown(["Job Listings", "Saved Jobs", "Categories"])}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setHoveredMenu("deliver-jobs")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <div className="cursor-pointer">Deliver Jobs ▾</div>
              {hoveredMenu === "deliver-jobs" &&
                renderDropdown(["My Deliveries", "Active Jobs"])}
            </div>
            <div className="cursor-pointer" onClick={() => router.push("/dashboard/seller/wallet")}>
              Wallet
            </div>
            <div className="cursor-pointer" onClick={() => router.push("/dashboard/seller/messages")}>
              Messages
            </div>
            <div className="cursor-pointer" onClick={() => router.push("/dashboard/seller/profile")}>
              Profile
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="mx-auto w-full">{children}</main>
    </div>
  );
};

export default PluginNavbar;

/* ----------------- USER DROPDOWN ----------------- */
function UserDropdown({ profile }: { profile: any }) {
  const supabase = createClient();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer rounded-full border-2 border-white">
          <AvatarImage src={profile?.avatar_url ?? "/images/avatar.jpg"} alt="User" />
          <AvatarFallback>AT</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="w-72 rounded-2xl bg-[#5B5E6F] text-white p-4 shadow-lg"
      >
        <div className="flex items-center space-x-3 border-b border-white/20 pb-4 mb-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={profile?.avatar_url ?? "/images/avatar.jpg"} />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-lg">{profile?.full_name || "Unknown User"}</div>
            <div className="text-sm text-white/70">Freelancer</div>
          </div>
        </div>

        <DropdownMenuItem
          className="flex items-center gap-3 text-base font-medium cursor-pointer hover:bg-white/10 rounded-md p-2"
          onClick={() => router.push("/dashboard/seller/profile")}
        >
          <User className="text-yellow-400" size={20} />
          Profile
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center gap-3 text-base font-medium cursor-pointer hover:bg-white/10 rounded-md p-2"
          onClick={() => router.push("/dashboard/seller/settings")}
        >
          <Settings className="text-yellow-400" size={20} />
          Settings
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex items-center gap-3 text-base font-medium cursor-pointer hover:bg-white/10 rounded-md p-2"
          onClick={handleLogout}
        >
          <LogOut className="text-yellow-400" size={20} />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
