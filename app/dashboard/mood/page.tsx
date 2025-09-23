"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart3, Brain } from "lucide-react"

const moodData = [
  { day: "Mon", mood: 7, emoji: "😊" },
  { day: "Tue", mood: 6, emoji: "🙂" },
  { day: "Wed", mood: 8, emoji: "😄" },
  { day: "Thu", mood: 5, emoji: "😐" },
  { day: "Fri", mood: 9, emoji: "🤩" },
  { day: "Sat", mood: 7, emoji: "😊" },
  { day: "Sun", mood: 8, emoji: "😄" },
]

const moodEmojis = [
  { value: 1, emoji: "😢", label: "Very Sad", color: "bg-red-500" },
  { value: 2, emoji: "😞", label: "Sad", color: "bg-red-400" },
  { value: 3, emoji: "😕", label: "Down", color: "bg-orange-400" },
  { value: 4, emoji: "😐", label: "Neutral", color: "bg-yellow-400" },
  { value: 5, emoji: "🙂", label: "Okay", color: "bg-yellow-500" },
  { value: 6, emoji: "😊", label: "Good", color: "bg-green-400" },
  { value: 7, emoji: "😄", label: "Happy", color: "bg-green-500" },
  { value: 8, emoji: "🤩", label: "Great", color: "bg-blue-500" },
  { value: 9, emoji: "😍", label: "Amazing", color: "bg-purple-500" },
  { value: 10, emoji: "🥳", label: "Fantastic", color: "bg-pink-500" },
]

export default function MoodTab() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Mood Tracker</h1>
        <p className="text-muted-foreground">Track and understand your emotional patterns</p>
      </motion.div>

      {/* Quick Mood Check-in */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 text-white">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">How are you feeling right now?</h2>
              <div className="grid grid-cols-5 gap-4 mb-6">
                {moodEmojis.slice(0, 5).map((mood) => (
                  <Button
                    key={mood.value}
                    variant="ghost"
                    className="h-16 w-16 text-3xl hover:bg-white/20 rounded-full"
                  >
                    {mood.emoji}
                  </Button>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-4 mb-6">
                {moodEmojis.slice(5, 10).map((mood) => (
                  <Button
                    key={mood.value}
                    variant="ghost"
                    className="h-16 w-16 text-3xl hover:bg-white/20 rounded-full"
                  >
                    {mood.emoji}
                  </Button>
                ))}
              </div>
              <Button className="bg-white/20 hover:bg-white/30 border-white/30">Log Mood Entry</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Weekly Overview */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-blue-500" />
                <span>This Week's Mood</span>
              </CardTitle>
              <CardDescription>Your emotional journey over the past 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Mood Chart */}
                <div className="grid grid-cols-7 gap-4">
                  {moodData.map((day, index) => (
                    <div key={day.day} className="text-center">
                      <div className="text-xs text-muted-foreground mb-2">{day.day}</div>
                      <div
                        className="w-full bg-gray-200 dark:bg-gray-700 rounded-full mb-2"
                        style={{ height: "100px" }}
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${day.mood * 10}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-full flex items-end justify-center pb-2"
                        >
                          <span className="text-white text-xs font-medium">{day.mood}</span>
                        </motion.div>
                      </div>
                      <div className="text-2xl">{day.emoji}</div>
                    </div>
                  ))}
                </div>

                {/* Insights */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Brain className="w-4 h-4 text-blue-500" />
                    <span className="font-medium text-blue-700 dark:text-blue-300">AI Insights</span>
                  </div>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    Your mood has been trending upward this week! Friday was your best day. Consider what made that day
                    special and try to incorporate those elements into other days.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sidebar Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          {/* Current Mood */}
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Current Mood</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-6xl mb-4">😊</div>
              <p className="text-2xl font-bold mb-2">Good</p>
              <p className="text-sm text-muted-foreground">Last updated 2 hours ago</p>
            </CardContent>
          </Card>

          {/* Mood Stats */}
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Mood Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Weekly Average</span>
                  <span className="font-medium">7.1/10</span>
                </div>
                <Progress value={71} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl mb-1">📈</div>
                  <div className="text-sm text-muted-foreground">Trending</div>
                  <div className="font-medium text-green-600">Up</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🔥</div>
                  <div className="text-sm text-muted-foreground">Streak</div>
                  <div className="font-medium">5 days</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mood Factors */}
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Mood Factors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { factor: "Sleep Quality", impact: "High", icon: "🛌", color: "text-green-600" },
                { factor: "Exercise", impact: "Medium", icon: "🏃‍♂️", color: "text-yellow-600" },
                { factor: "Social Time", impact: "High", icon: "👥", color: "text-green-600" },
                { factor: "Work Stress", impact: "Low", icon: "💼", color: "text-red-600" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-medium">{item.factor}</span>
                  </div>
                  <Badge variant="secondary" className={item.color}>
                    {item.impact}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
