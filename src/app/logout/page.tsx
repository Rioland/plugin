"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Remove all cookies
    Object.keys(Cookies.get()).forEach((cookie) => Cookies.remove(cookie));

    // Redirect to login
    router.push("/");
  }, []);

  return <p>Logging out...</p>;
}
