"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Pause, Volume2, Shield, Star, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rotate-45 opacity-60" />
        <div className="absolute top-32 right-20 w-3 h-3 bg-pink-400 rounded-full opacity-70" />
        <div className="absolute bottom-40 left-20 w-6 h-6 bg-orange-400 rotate-45 opacity-50" />
        <div className="absolute top-60 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
        <div className="absolute bottom-60 right-1/3 w-5 h-5 bg-yellow-300 rotate-45 opacity-40" />

        {/* Floating sparkles */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-40 right-40"
        >
          <Sparkles className="w-6 h-6 text-yellow-400 opacity-60" />
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-32 left-40"
        >
          <Sparkles className="w-4 h-4 text-pink-400 opacity-50" />
        </motion.div>
      </div>

      <div className="mx-auto px-8 2xl:max-w-[1400px] relative py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 px-4 py-2"
              >
                <Shield className="w-4 h-4 mr-2" />
                HIPAA Compliant & Secure
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                Your Mental <br />
                Health{" "}
                <span className="relative">
                  Matter
                  <span className="absolute -top-2 -right-8 text-4xl">✨</span>
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  You <span className="font-semibold text-gray-900 dark:text-white">dont</span> have
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  to <span className="font-semibold text-gray-900 dark:text-white">struggle</span> in
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">silence!</p>
              </div>

              <Button
                variant="outline"
                className="bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                LEARN MORE
              </Button>
            </div>

            {/* Audio Player */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-4 flex items-center space-x-4 max-w-sm"
            >
              <Button
                size="sm"
                className="w-10 h-10 rounded-full bg-white text-gray-900 hover:bg-gray-100 p-0"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </Button>

              <div className="flex-1 flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 rounded-full transition-all duration-300 ${
                        isPlaying && i < 8 ? "bg-white h-6 animate-pulse" : "bg-gray-600 h-3"
                      }`}
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        height: isPlaying && i < 8 ? `${Math.random() * 20 + 10}px` : "12px",
                      }}
                    />
                  ))}
                </div>
              </div>

              <Volume2 className="w-4 h-4 text-gray-400" />
            </motion.div>
          </motion.div>

          {/* Center - Main Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Main head silhouette with cosmic interior */}
              <div className="relative w-80 h-96 mx-auto">
                {/* Head silhouette */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-t-full rounded-bl-3xl rounded-br-lg transform rotate-12">
                  {/* Cosmic background inside head */}
                  <div className="absolute inset-4 rounded-t-full rounded-bl-3xl rounded-br-lg overflow-hidden bg-gradient-to-br from-blue-800 via-purple-800 to-indigo-900">
                    {/* Stars */}
                    <div className="absolute top-8 left-8 w-1 h-1 bg-yellow-300 rounded-full animate-pulse" />
                    <div className="absolute top-16 right-12 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-300" />
                    <div className="absolute bottom-20 left-12 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-700" />
                    <div className="absolute top-20 left-1/2 w-0.5 h-0.5 bg-yellow-200 rounded-full animate-pulse delay-1000" />

                    {/* Floating planets */}
                    <motion.div
                      animate={{ y: [-5, 5, -5], x: [-2, 2, -2] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="absolute top-12 right-8 w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500"
                    />
                    <motion.div
                      animate={{ y: [5, -5, 5], x: [2, -2, 2] }}
                      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-16 right-12 w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-500"
                    />
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                      className="absolute top-1/2 left-8 w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500"
                    />

                    {/* Central meditation figure */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="relative"
                      >
                        {/* Meditation circle */}
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 flex items-center justify-center relative">
                          {/* Person silhouette */}
                          <div className="w-16 h-20 relative">
                            {/* Head */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-200 rounded-full" />
                            {/* Body */}
                            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-orange-300 rounded-t-full" />
                            {/* Arms in meditation pose */}
                            <div className="absolute top-7 left-2 w-3 h-3 bg-orange-300 rounded-full" />
                            <div className="absolute top-7 right-2 w-3 h-3 bg-orange-300 rounded-full" />
                            {/* Legs crossed */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-4 bg-orange-300 rounded-full" />
                          </div>

                          {/* Meditation aura */}
                          <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            className="absolute inset-0 rounded-full border-2 border-yellow-300"
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Floating elements */}
                    <motion.div
                      animate={{ y: [-8, 8, -8], rotate: [0, 180, 360] }}
                      transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="absolute top-6 left-6 w-3 h-3 bg-yellow-400 rotate-45"
                    />
                    <motion.div
                      animate={{ y: [8, -8, 8], rotate: [360, 180, 0] }}
                      transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="absolute bottom-8 right-6 w-2 h-2 bg-pink-400 rounded-full"
                    />
                  </div>
                </div>

                {/* Decorative elements around head */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-4 -left-4 w-12 h-12 rounded-full border-4 border-gray-800 dark:border-gray-200 flex items-center justify-center bg-white dark:bg-gray-800"
                >
                  <Star className="w-6 h-6 text-orange-500 fill-current" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Hope Card */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                    <span className="text-white text-sm">🌙</span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    There <span className="font-semibold text-gray-900 dark:text-white">hope</span> when
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  your <span className="font-semibold text-gray-900 dark:text-white">brain</span> tells
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">you there isnt</p>
              </CardContent>
            </Card>

            {/* Grief Card */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Grief <span className="text-gray-500 dark:text-gray-400 font-normal">/ grif /</span>
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Each day we learn of the griefs and tribulations which affect our constituents or ourselves.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
