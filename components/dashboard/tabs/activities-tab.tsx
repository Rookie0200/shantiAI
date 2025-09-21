"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Play, Pause, Heart, Brain, TreePine, Waves, Sun, Moon, Clock, CheckCircle, Star } from "lucide-react"

const activities = [
  {
    id: 1,
    title: "Morning Breathing",
    description: "Start your day with calm, focused breathing",
    duration: "5 min",
    category: "Breathing",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    completed: true,
    difficulty: "Beginner",
  },
  {
    id: 2,
    title: "Forest Walk Meditation",
    description: "Immersive nature sounds for deep relaxation",
    duration: "15 min",
    category: "Meditation",
    icon: TreePine,
    color: "from-green-500 to-teal-500",
    completed: false,
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "Ocean Waves Relaxation",
    description: "Let the sound of waves wash away your stress",
    duration: "20 min",
    category: "Relaxation",
    icon: Waves,
    color: "from-blue-500 to-cyan-500",
    completed: false,
    difficulty: "Beginner",
  },
  {
    id: 4,
    title: "Mindful Body Scan",
    description: "Progressive relaxation for mind and body",
    duration: "12 min",
    category: "Mindfulness",
    icon: Brain,
    color: "from-purple-500 to-indigo-500",
    completed: false,
    difficulty: "Advanced",
  },
  {
    id: 5,
    title: "Evening Wind Down",
    description: "Prepare for restful sleep with gentle exercises",
    duration: "10 min",
    category: "Sleep",
    icon: Moon,
    color: "from-indigo-500 to-purple-500",
    completed: false,
    difficulty: "Beginner",
  },
  {
    id: 6,
    title: "Energy Boost Session",
    description: "Quick exercises to revitalize your energy",
    duration: "8 min",
    category: "Energy",
    icon: Sun,
    color: "from-yellow-500 to-orange-500",
    completed: false,
    difficulty: "Intermediate",
  },
]

export function ActivitiesTab() {
  const [activeActivity, setActiveActivity] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayActivity = (id: number) => {
    setActiveActivity(id)
    setIsPlaying(true)
  }

  const handlePauseActivity = () => {
    setIsPlaying(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Therapeutic Activities</h1>
        <p className="text-muted-foreground">Guided exercises to support your mental wellness journey</p>
      </motion.div>

      {/* Active Session */}
      {activeActivity && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{activities.find((a) => a.id === activeActivity)?.title}</h3>
                  <p className="text-purple-100">{activities.find((a) => a.id === activeActivity)?.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl mb-2">🧘‍♀️</div>
                  <Badge className="bg-white/20 text-white border-white/30">
                    {activities.find((a) => a.id === activeActivity)?.duration}
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Progress</span>
                  <span className="text-sm">3:24 / 15:00</span>
                </div>
                <Progress value={22} className="h-2 bg-white/20" />

                <div className="flex items-center justify-center space-x-4">
                  <Button
                    onClick={isPlaying ? handlePauseActivity : () => setIsPlaying(true)}
                    className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 border-white/30"
                  >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {["All", "Breathing", "Meditation", "Relaxation", "Mindfulness", "Sleep", "Energy"].map((category) => (
          <Button
            key={category}
            variant={category === "All" ? "default" : "outline"}
            size="sm"
            className={category === "All" ? "bg-gradient-to-r from-blue-500 to-teal-500" : ""}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Activities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card
              className={`border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 ${
                activity.completed ? "ring-2 ring-green-500" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${activity.color} flex items-center justify-center`}
                  >
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                  {activity.completed && <CheckCircle className="w-6 h-6 text-green-500" />}
                </div>
                <CardTitle className="text-lg">{activity.title}</CardTitle>
                <CardDescription>{activity.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{activity.duration}</span>
                  </div>
                  <Badge variant="secondary">{activity.difficulty}</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline">{activity.category}</Badge>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => handlePlayActivity(activity.id)}
                  className={`w-full ${
                    activity.completed
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
                  }`}
                  disabled={activeActivity === activity.id && isPlaying}
                >
                  {activity.completed ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Completed
                    </>
                  ) : activeActivity === activity.id && isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 mr-2" />
                      Playing...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Start Activity
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Today's Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-500 to-blue-500 text-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="w-5 h-5" />
              <span>Recommended for You</span>
            </CardTitle>
            <CardDescription className="text-teal-100">Based on your mood and recent activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h4 className="font-semibold mb-2">🌅 Morning Routine</h4>
                <p className="text-sm text-teal-100 mb-3">
                  Start with breathing exercises followed by a short meditation
                </p>
                <Button className="bg-white/20 hover:bg-white/30 border-white/30 text-sm">Begin Routine</Button>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h4 className="font-semibold mb-2">🌙 Evening Calm</h4>
                <p className="text-sm text-teal-100 mb-3">Wind down with relaxing sounds and body scan meditation</p>
                <Button className="bg-white/20 hover:bg-white/30 border-white/30 text-sm">Start Routine</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
