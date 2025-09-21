"use client";

import {
  Brain,
  Home,
  MessageCircle,
  BarChart3,
  Activity,
  Target,
  Heart,
  BookOpen,
  Users,
  Settings,
  Shield,
  Calendar,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

interface MenuItem {
  title: string;
  icon: any; // or any other type based on how you render icons
  id: string;
  badge?: string;
  urgent?: boolean;
}
interface MenuGroup {
  title: string;
  items: MenuItem[];
}
const menuItems:MenuGroup[] = [
  {
    title: "Main",
    items: [
      { title: "Overview", icon: Home, id: "overview" },
      { title: "Chat with Luna", icon: MessageCircle, id: "chat", badge: "AI" },
      { title: "Mood Tracker", icon: BarChart3, id: "mood" },
      { title: "Activities", icon: Activity, id: "activities" },
    ],
  },
  {
    title: "Progress",
    items: [
      { title: "Analytics", icon: BarChart3, id: "analytics" },
      { title: "Goals", icon: Target, id: "goals" },
      { title: "Journal", icon: BookOpen, id: "journal" },
      { title: "Sessions", icon: Calendar, id: "sessions" },
    ],
  },
  {
    title: "Support",
    items: [
      { title: "Crisis Support", icon: Shield, id: "crisis", urgent: true },
      { title: "Community", icon: Users, id: "community" },
      { title: "Resources", icon: Heart, id: "resources" },
    ],
  },
];

interface AppSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function AppSidebar({ activeTab, setActiveTab }: AppSidebarProps) {
  return (
    <Sidebar className="border-r border-gray-200 dark:border-gray-800 shrink-0">
      <SidebarHeader className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              MindfulAI
            </h2>
            <p className="text-xs text-muted-foreground">
              Your Wellness Companion
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 flex-1 overflow-y-auto">
        {menuItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => setActiveTab(item.id)}
                      isActive={activeTab === item.id}
                      className={`w-full justify-start space-x-3 py-3 px-3 rounded-lg transition-all duration-200 ${
                        activeTab === item.id
                          ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      } ${item.urgent ? "border-l-4 border-red-500" : ""}`}
                    >
                      <item.icon
                        className={`w-5 h-5 ${
                          item.urgent ? "text-red-500" : ""
                        }`}
                      />
                      <span className="font-medium">{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {item.urgent && (
                        <span className="ml-auto w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-200 dark:border-gray-800 shrink-0">
        <div className="flex items-center space-x-3 mb-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">John Doe</p>
            <p className="text-xs text-muted-foreground">Premium Member</p>
          </div>
          <ThemeToggle />
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full bg-transparent"
          onClick={() => setActiveTab("settings")}
        >
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
