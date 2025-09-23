"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Brain, Sparkles, Heart, Smile } from "lucide-react";

const chatMessages = [
  {
    id: 1,
    sender: "luna",
    message:
      "Hello John! I'm Luna, your AI wellness companion. How are you feeling today?",
    timestamp: "10:30 AM",
    type: "greeting",
  },
  {
    id: 2,
    sender: "user",
    message:
      "Hi Luna! I'm feeling a bit anxious about my presentation tomorrow.",
    timestamp: "10:32 AM",
    type: "concern",
  },
  {
    id: 3,
    sender: "luna",
    message:
      "I understand that presentations can feel overwhelming. Let's work through this together. What specifically about the presentation is making you feel anxious?",
    timestamp: "10:33 AM",
    type: "support",
  },
  {
    id: 4,
    sender: "user",
    message:
      "I'm worried I'll forget what to say or that people will judge me.",
    timestamp: "10:35 AM",
    type: "worry",
  },
  {
    id: 5,
    sender: "luna",
    message:
      "Those are very common concerns, and it's completely normal to feel this way. Would you like to try a quick breathing exercise to help calm your nerves? I can also share some presentation tips that might help boost your confidence.",
    timestamp: "10:36 AM",
    type: "suggestion",
  },
];

export default function TherapyTab() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(chatMessages);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "user",
        message: message,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        type: "message",
      };
      setMessages([...messages, newMessage]);
      setMessage("");

      // Simulate Luna's response
      setTimeout(() => {
        const lunaResponse = {
          id: messages.length + 2,
          sender: "luna",
          message:
            "Thank you for sharing that with me. I'm here to support you through this. How would you like to proceed?",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          type: "support",
        };
        setMessages((prev) => [...prev, lunaResponse]);
      }, 1500);
    }
  };

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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Chat with Luna
          </h1>
          <p className="text-muted-foreground">
            Your AI wellness companion is here to support you
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
          >
            Online
          </Badge>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm h-[600px] flex flex-col">
            <CardHeader className="border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      <Brain className="w-5 h-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900" />
                </div>
                <div>
                  <h3 className="font-semibold">Luna AI</h3>
                  <p className="text-sm text-muted-foreground">
                    Your wellness companion
                  </p>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] ${
                      msg.sender === "user" ? "order-2" : "order-1"
                    }`}
                  >
                    <div
                      className={`p-4 rounded-2xl ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.message}</p>
                    </div>
                    <p
                      className={`text-xs text-muted-foreground mt-1 ${
                        msg.sender === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      {msg.timestamp}
                    </p>
                  </div>
                  {msg.sender === "luna" && (
                    <Avatar className="w-8 h-8 mr-2 order-1">
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">
                        <Brain className="w-4 h-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </motion.div>
              ))}
            </CardContent>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message to Luna..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          {/* Luna's Insights */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-semibold">Luna's Insights</h3>
              </div>
              <p className="text-sm text-purple-100 mb-4">
                Based on our conversation, I notice you're experiencing
                presentation anxiety. This is very common!
              </p>
              <Button className="w-full bg-white/20 hover:bg-white/30 border-white/30">
                View Suggestions
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
              >
                <Heart className="w-4 h-4 mr-2 text-red-500" />
                Breathing Exercise
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
              >
                <Smile className="w-4 h-4 mr-2 text-yellow-500" />
                Mood Check-in
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
              >
                <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
                Guided Meditation
              </Button>
            </CardContent>
          </Card>

          {/* Session Stats */}
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Today's Session</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Duration</span>
                <span className="text-sm font-medium">12 minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Messages</span>
                <span className="text-sm font-medium">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Mood</span>
                <Badge
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                >
                  Anxious
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
