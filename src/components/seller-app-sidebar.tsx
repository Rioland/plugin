"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
// import { RootState } from "@/app/store";
// import { useSelector, useDispatch } from "react-redux";

// Sidebar navigation data
const data = {
  navMain: [
    {
      title: "Start",
      items: [
        { title: "Dashboard", url: "/dashboard/seller-dashboard" },
        { title: "My Proposals", url: "/dashboard/my-proposals" },
        { title: "Saved", url: "/dashboard/saved" },
        { title: "Messages", url: "/dashboard/messages" },
        { title: "Invoice", url: "/dashboard/invoice" },
        { title: "Payment", url: "/dashboard/payment" },
        { title: "Statement", url: "/dashboard/statement" },
      ],
    },
    {
      title: "Organize and Manage",
      items: [
        { title: "Manage Services", url: "/dashboard/manage-services" },
        { title: "Manage Jobs", url: "/dashboard/manage-jobs" },
        { title: "Manage Project", url: "/dashboard/manage-project" },
        { title: "Add Services", url: "/dashboard/add-services" },
        { title: "Create Project", url: "/dashboard/create-project" },
      ],
    },
    {
      title: "Account",
      items: [
        { title: "Profile", url: "/dashboard/seller-dashboard/profiles" },
        { title: "kyc", url: "/dashboard/seller-dashboard/kyc" },
        { title: "Log Out", url: "/logout" },
      ],
    },
  ],
};

export function SellerAppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname(); // Get current route
  // const getCurrentPage = useSelector((state: RootState) => state.sellerNavbar);
  // const dispatch = useDispatch();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex flex-row items-center py-4 border-b border-gray-200">
          <img src="/images/logo-2.svg" width={30} height={30} />
          <div className="ml-2 text-gray-700 text-sm">Seller Dashboard</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
