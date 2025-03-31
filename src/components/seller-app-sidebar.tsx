import * as React from "react"

// import { SearchForm } from "@/components/search-form"
// import { VersionSwitcher } from "@/components/version-switcher"
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
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Start",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard/seller-dashboard",
        },
        {
          title: "My Proposals",
          url: "#",
        },
        {
          title: "Saved",
          url: "#",
        },
        {
          title: "Messages",
          url: "#",
        },
        {
          title: "Invoice",
          url: "#",
        },
        {
          title: "Payment",
          url: "#",
        },
        {
          title: "Statement",
          url: "#",
        },
      ],
    },
    {
      title: "Organize and Manage",
      url: "#",
      items: [
        {
          title: "Manage Services",
          url: "#",
        },
        {
          title: "Manage Jobs",
          url: "#",
        },
        {
          title: "Manage Project",
          url: "#",
        },
        {
          title: "Add Services",
          url: "#",
        },
        {
          title: "Create Project",
          url: "#",
        },
        
      ],
    },
    {
      title: "Account",
      url: "#",
      items: [
        {
          title: "Profile",
          url: "/dashboard/seller-dashboard/profiles",
          isActive: true,
        },
        {
          title: "Log Out",
          url: "#",
        },
        
       
      ],
    },
  
  
  
  ],
}

export function SellerAppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
       <div className="flex flex-row items-center py-4 border-b border-gray-200">
        <img src="/images/logo-2.svg" width={30} height={30} />
         <div className="ml-2 text-gray-700 text-sm">Seller Dashboard</div>
       </div>
        {/* <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        /> */}
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
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
  )
}
