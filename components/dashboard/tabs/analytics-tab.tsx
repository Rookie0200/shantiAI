"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, BarChart3, Calendar, Target, Brain, Heart, Activity } from "lucide-react"

export function AnalyticsTab() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Analytics & Insights</h1>
        <p className="text-muted-foreground">Track your mental wellness progress over time</p>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Weekly Mood Average",
            value: "7.2",
            change: "+0.8",
            trend: "up",
            icon: Heart,
            color: "from-pink-500 to-red-500",
          },
          {
            title: "Session Completion",
            value: "85%",
            change: "+12%",
            trend: "up",
            icon: Target,
            color: "from-blue-500 to-teal-500",
          },
          {
            title: "Stress Level",
            value: "3.2",
            change: "-1.1",
            trend: "down",
            icon: Brain,
            color: "from-purple-500 to-indigo-500",
          },
          {
            title: "Active Days",
            value: "12",
            change: "+3",
            trend: "up",
            icon: Calendar,
            color: "from-green-500 to-teal-500",
          },
        ].map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{metric.title}</p>
                    <p className="text-3xl font-bold">{metric.value}</p>
                    <div className="flex items-center space-x-1 mt-2">
                      {metric.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-green-500" />
                      )}
                      <span className="text-sm text-green-600 font-medium">{metric.change}</span>
                    </div>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center`}
                  >
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Mood Trends */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-blue-500" />
                <span>30-Day Mood Trend</span>
              </CardTitle>
              <CardDescription>Your emotional patterns over the past month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between space-x-2">
                {Array.from({ length: 30 }, (_, i) => {
                  const height = Math.random() * 80 + 20
                  const isToday = i === 29
                  return (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: i * 0.02 }}
                      className={`flex-1 rounded-t-sm ${
                        isToday
                          ? "bg-gradient-to-t from-blue-500 to-purple-500"
                          : "bg-gradient-to-t from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500"
                      }`}
                    />
                  )
                })}
              </div>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Brain className="w-4 h-4 text-blue-500" />
                  <span className="font-medium text-blue-700 dark:text-blue-300">AI Analysis</span>
                </div>
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  Your mood has shown steady improvement over the past month, with particularly strong patterns on
                  weekends. Consider maintaining your current routine while focusing on midweek stress management.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Activity Breakdown */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6"
        >
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Activity Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { activity: "Meditation", time: "45 min", percentage: 35, color: "bg-purple-500" },
                { activity: "Breathing", time: "30 min", percentage: 25, color: "bg-blue-500" },
                { activity: "Journaling", time: "25 min", percentage: 20, color: "bg-green-500" },
                { activity: "Chat Sessions", time: "20 min", percentage: 15, color: "bg-pink-500" },
                { activity: "Other", time: "10 min", percentage: 5, color: "bg-gray-500" },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.activity}</span>
                    <span className="text-muted-foreground">{item.time}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className={`h-2 rounded-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-500 to-blue-500 text-white">
            <CardContent className="p-6">
              <div className="text-center">
                <Activity className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Weekly Goal</h3>
                <p className="text-2xl font-bold mb-2">4/5 Days</p>
                <p className="text-sm text-teal-100 mb-4">
                  You're almost there! One more active day to reach your weekly goal.
                </p>
                <Progress value={80} className="bg-white/20" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Detailed Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-purple-500" />
              <span>Personalized Insights</span>
            </CardTitle>
            <CardDescription>AI-powered recommendations based on your data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-green-600 dark:text-green-400">✅ What's Working Well</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <span>Consistent morning meditation routine showing positive mood impact</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <span>Weekend activities correlate with higher mood scores</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <span>Regular chat sessions with Luna providing good support</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">💡 Recommendations</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <span>Try adding a midweek breathing exercise to maintain momentum</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <span>Consider evening wind-down activities for better sleep patterns</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <span>Explore gratitude journaling to enhance positive mood trends</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
