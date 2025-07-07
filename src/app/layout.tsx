
// import type { Metadata } from "next";

import "./globals.css";

import { Metadata } from "next";
import QuerysProvider from "@/components/Providers/QuerysProvider";






export const metadata: Metadata = {
  title: "Plugin",
  description: "Develop by Riotech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased h-full`}
      >
        <QuerysProvider>
          {children}
        </QuerysProvider>

      </body>
    </html>
  );
}
