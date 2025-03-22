"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {  Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, User, Sparkles } from "lucide-react"

interface Message {
    type: "bot"  | "user"
    content: string
    options?: string[]
}

export default function OnbaordingChat() {
    const router = useRouter()
    const [messages, setMessages] = useState<Message[]>([
       {
        type: "bot",
        content: "Welcome to KamalSinghania! I'm your AI Investment & Savings CoPilot. Lets set up your financial profile. What are your main financial goals?",
        options: [
            "Short-term savings (1-2 years)",
            "Long-term investments (5+ years)",
            "Retirement planning",
            "Emergency fund",
            "Wealth Building",
        ],
       },
    ])
    const [currentStep, setCurrentStep] = useState(0)
    const [selectedOptions, setSelectedOptions] = useState<Record<number, string[]>>({})
    
}