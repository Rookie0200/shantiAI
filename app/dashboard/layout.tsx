"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/dashboard/sidebar"
import { DashboardContent } from "@/components/dashboard/dashboard-content"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-teal-900/10">
        <AppSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <SidebarInset className="flex-1 flex flex-col min-w-0">
          <DashboardContent activeTab={activeTab} />
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}