"use client"

import { OverviewTab } from "./tabs/overview-tab"
import { ChatTab } from "./tabs/chat-tab"
import { MoodTab } from "./tabs/mood-tab"
import { ActivitiesTab } from "./tabs/activities-tab"
import { AnalyticsTab } from "./tabs/analytics-tab"
import { GoalsTab } from "./tabs/goals-tab"
import { JournalTab } from "./tabs/journal-tab"
import { SessionsTab } from "./tabs/sessions-tab"
import { CrisisTab } from "./tabs/crisis-tab"
import { CommunityTab } from "./tabs/community-tab"
import { ResourcesTab } from "./tabs/resources-tab"
import { SettingsTab } from "./tabs/settings-tab"

interface DashboardContentProps {
  activeTab: string
}

export function DashboardContent({ activeTab }: DashboardContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab />
      case "chat":
        return <ChatTab />
      case "mood":
        return <MoodTab />
      case "activities":
        return <ActivitiesTab />
      case "analytics":
        return <AnalyticsTab />
      case "goals":
        return <GoalsTab />
      case "journal":
        return <JournalTab />
      case "sessions":
        return <SessionsTab />
      case "crisis":
        return <CrisisTab />
      case "community":
        return <CommunityTab />
      case "resources":
        return <ResourcesTab />
      case "settings":
        return <SettingsTab />
      default:
        return <OverviewTab />
    }
  }

  return (
    <div className="flex-1 w-full overflow-auto">
      <div className="p-6 max-w-full">{renderContent()}</div>
    </div>
  )
}
