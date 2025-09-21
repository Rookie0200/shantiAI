"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Target, Plus, CheckCircle, Clock, Calendar, Trophy, Star, Zap } from "lucide-react"

const goals = [
  {
    id: 1,
    title: "Daily Meditation",
    description: "Meditate for at least 10 minutes every day",
    progress: 85,
    target: 30,
    current: 25,
    unit: "days",
    category: "Mindfulness",
    priority: "High",
    deadline: "2024-02-15",
    status: "active",
  },
  {
    id: 2,
    title: "Mood Tracking Consistency",
    description: "Log mood entries daily for better self-awareness",
    progress: 70,
    target: 7,
    current: 5,
    unit: "days/week",
    category: "Self-Care",
    priority: "Medium",
    deadline: "2024-02-10",
    status: "active",
  },
  {
    id: 3,
    title: "Stress Management",
    description: "Complete breathing exercises when feeling stressed",
    progress: 100,
    target: 10,
    current: 10,
    unit: "sessions",
    category: "Wellness",
    priority: "High",
    deadline: "2024-01-30",
    status: "completed",
  },
  {
    id: 4,
    title: "Sleep Quality",
    description: "Maintain 7+ hours of sleep with evening wind-down routine",
    progress: 60,
    target: 21,
    current: 12,
    unit: "nights",
    category: "Health",
    priority: "Medium",
    deadline: "2024-02-20",
    status: "active",
  },
]

export function GoalsTab() {
  const [showAddGoal, setShowAddGoal] = useState(false)

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Goals & Milestones</h1>
          <p className="text-muted-foreground">Track your progress and celebrate achievements</p>
        </div>
        <Button
          onClick={() => setShowAddGoal(true)}
          className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Goal
        </Button>
      </motion.div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-teal-500 text-white">
            <CardContent className="p-6 text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">1</h3>
              <p className="text-green-100">Goals Completed</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white">
            <CardContent className="p-6 text-center">
              <Target className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">3</h3>
              <p className="text-blue-100">Active Goals</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-red-500 text-white">
            <CardContent className="p-6 text-center">
              <Zap className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">78%</h3>
              <p className="text-orange-100">Average Progress</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Goals List */}
      <div className="space-y-4">
        {goals.map((goal, index) => (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card
              className={`border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm ${
                goal.status === "completed" ? "ring-2 ring-green-500" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3
                        className={`text-xl font-semibold ${
                          goal.status === "completed" ? "line-through text-muted-foreground" : ""
                        }`}
                      >
                        {goal.title}
                      </h3>
                      {goal.status === "completed" && <CheckCircle className="w-6 h-6 text-green-500" />}
                    </div>
                    <p className="text-muted-foreground mb-3">{goal.description}</p>

                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Badge variant="outline">{goal.category}</Badge>
                      <Badge variant={goal.priority === "High" ? "destructive" : "secondary"}>
                        {goal.priority} Priority
                      </Badge>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Due: {new Date(goal.deadline).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-bold mb-1">
                      {goal.current}/{goal.target}
                    </div>
                    <div className="text-sm text-muted-foreground">{goal.unit}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{goal.progress}%</span>
                  </div>
                  <Progress
                    value={goal.progress}
                    className={`h-3 ${goal.status === "completed" ? "opacity-50" : ""}`}
                  />
                </div>

                {goal.status === "active" && (
                  <div className="flex justify-end space-x-2 mt-4">
                    <Button variant="outline" size="sm">
                      <Clock className="w-4 h-4 mr-2" />
                      Update Progress
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-blue-500 to-teal-500">
                      <Target className="w-4 h-4 mr-2" />
                      Take Action
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>Recent Achievements</span>
            </CardTitle>
            <CardDescription>Celebrate your wellness milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "First Week Complete",
                  description: "Completed 7 days of mood tracking",
                  icon: "🎯",
                  date: "2 days ago",
                },
                {
                  title: "Meditation Master",
                  description: "10 consecutive days of meditation",
                  icon: "🧘‍♀️",
                  date: "1 week ago",
                },
                {
                  title: "Stress Buster",
                  description: "Used breathing exercises 5 times",
                  icon: "💨",
                  date: "3 days ago",
                },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800"
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <h4 className="font-semibold mb-1">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                  <p className="text-xs text-yellow-600 dark:text-yellow-400">{achievement.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Add Goal Modal */}
      {showAddGoal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowAddGoal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4">Add New Goal</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Goal Title</label>
                <Input placeholder="Enter your goal..." />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Description</label>
                <Input placeholder="Describe your goal..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Target</label>
                  <Input type="number" placeholder="30" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Unit</label>
                  <Input placeholder="days" />
                </div>
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setShowAddGoal(false)}>
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-blue-500 to-teal-500">Create Goal</Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
