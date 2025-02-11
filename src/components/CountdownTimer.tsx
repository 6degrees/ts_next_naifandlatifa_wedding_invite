"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { invitationData } from "@/data/invitation"
import {useTranslation} from "react-i18next";

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const weddingDate = new Date(invitationData.event.date.timestamp)

    const calculateTimeLeft = () => {
      const difference = +weddingDate - +new Date()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    // Update countdown every second
    const timer = setInterval(calculateTimeLeft, 1000)

    // Initial calculation
    calculateTimeLeft()

    // Cleanup interval on unmount
    return () => clearInterval(timer)
  }, [])

  return (
    <Card dir="rtl" className="mb-8 rounded-xl bg-empress-50/50">
      <CardContent className="p-6">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="flex flex-col">

            <span className="text-4xl font-bold text-empress-600">{timeLeft.days}</span>
            <span className="text-sm text-empress">{t('countdown.days')}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-empress-600">{timeLeft.hours}</span>
            <span className="text-sm text-empress">{t('countdown.hours')}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-empress-600">{timeLeft.minutes}</span>
            <span className="text-sm text-empress">{t('countdown.minutes')}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-empress-600">{timeLeft.seconds}</span>
            <span className="text-sm text-empress">{t('countdown.seconds')}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 