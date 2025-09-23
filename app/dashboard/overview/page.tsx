"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Brain, MessageCircle, Target, Heart, Sparkles, Clock, Award, Zap } from "lucide-react"
import { useSession } from "@/lib/contexts/session"

export default function OverviewTab() {
  const { user } = useSession()
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-2xl p-8 text-white"
      >
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.username} 👋</h1>
              <p className="text-blue-100 text-lg">
                You're doing great on your wellness journey. Luna is here to support you today.
              </p>
            </div>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <Brain className="w-10 h-10 text-white" />
            </motion.div>
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Current Streak", value: "12 days", icon: Zap, color: "from-orange-500 to-red-500", change: "+2" },
          {
            title: "Sessions This Week",
            value: "5",
            icon: MessageCircle,
            color: "from-blue-500 to-teal-500",
            change: "+1",
          },
          { title: "Mood Average", value: "7.2/10", icon: Heart, color: "from-pink-500 to-purple-500", change: "+0.5" },
          { title: "Goals Completed", value: "3/5", icon: Target, color: "from-green-500 to-teal-500", change: "+1" },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <Badge
                      variant="secondary"
                      className="mt-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                    >
                      {stat.change}
                    </Badge>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Today's Focus */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <span>Today's Focus</span>
              </CardTitle>
              <CardDescription>Recommended activities based on your progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "Morning Meditation", duration: "10 min", completed: true, type: "meditation" },
                { title: "Mood Check-in", duration: "2 min", completed: false, type: "mood" },
                { title: "Breathing Exercise", duration: "5 min", completed: false, type: "breathing" },
                { title: "Gratitude Journal", duration: "5 min", completed: false, type: "journal" },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${activity.completed ? "bg-green-500" : "bg-gray-300"}`} />
                    <div>
                      <p className={`font-medium ${activity.completed ? "line-through text-muted-foreground" : ""}`}>
                        {activity.title}
                      </p>
                      <p className="text-sm text-muted-foreground">{activity.duration}</p>
                    </div>
                  </div>
                  {!activity.completed && (
                    <Button size="sm" variant="outline">
                      Start
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6"
        >
          {/* Chat with Luna */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Chat with Luna</h3>
                  <p className="text-sm text-purple-100">Your AI companion is online</p>
                </div>
              </div>
              <Button className="w-full bg-white/20 hover:bg-white/30 border-white/30">Start Conversation</Button>
            </CardContent>
          </Card>

          {/* Weekly Progress */}
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Weekly Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Mood Tracking</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Daily Activities</span>
                  <span>70%</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Journal Entries</span>
                  <span>60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Achievement */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
            <CardContent className="p-6 text-center">
              <Award className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">New Achievement!</h3>
              <p className="text-sm text-yellow-100">7-day meditation streak completed</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Completed breathing exercise", time: "2 hours ago", type: "activity" },
                { action: "Mood check-in: Feeling good (8/10)", time: "4 hours ago", type: "mood" },
                { action: "Chat session with Luna", time: "Yesterday", type: "chat" },
                { action: "Added journal entry", time: "2 days ago", type: "journal" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.action}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
