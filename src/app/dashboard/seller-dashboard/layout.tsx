'use client'


import { SellerAppSidebar } from '@/components/seller-app-sidebar'

import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { Separator } from '@radix-ui/react-separator'

// import { useState, useEffect } from "react";
import {  store } from '@/app/store'
import { Provider } from 'react-redux'

export default function layout({ children}) {
   
      
  return (
    <Provider store={store}>
       <SidebarProvider>
        <SellerAppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <div className="flex justify-end w-full items-center">
              <div className="flex justify-center items-center pe-8">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
        
              {children}
              

            
          </div>
        </SidebarInset>
      </SidebarProvider>
    </Provider>
 
  )
}
