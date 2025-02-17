"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { invitationData } from "@/data/invitation";
import { downloadICS } from "@/lib/calendar";
import { useTranslation } from "react-i18next";
import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";
import "../styles/fonts.css";

export default function InvitationCard() {
  const { t } = useTranslation();
  const { selectedLanguage }: { selectedLanguage: "en" | "ar" } = useAppContext();
  const { hosts, bride, groom, event } = invitationData;
  

  const handleAddToCalendar = () => {
    const startTime = new Date(event.date.timestamp);
    const endTime = new Date(startTime);
    endTime.setHours(endTime.getHours() + 4); // Assuming 4 hours duration
    downloadICS({
      title: t("wedding.title", {
        groom: groom.name[selectedLanguage],
        bride: bride.name[selectedLanguage],
      }),
      description: t("wedding.description", {
        host1: hosts.first[selectedLanguage],
        host2: hosts.second[selectedLanguage],
        groom: groom.name[selectedLanguage],
        bride: bride.name[selectedLanguage],
      }),
      location: t("wedding.location", {
        venue: event.venue.name,
        city: event.venue.city,
        country: event.venue.country,
      }),
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
    });
  };

  const fontClass = selectedLanguage === "ar" ? "font-nympha" : "font-arbMuslimah";

  return (
    <Card className={`mb-8 rounded-xl leading-none text-xl text-center text-empress bg-white/10 ${fontClass}`}>
      <CardContent className="space-y-4 lg:space-y-12 flex flex-col items-center pt-10">
        <motion.img
          src="/logo.png"
          alt="Wedding Logo"
          className="w-36 h-auto mb-6 items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <p className={`font-medium ${fontClass}`}>{t("invitation.hostsIntro")}</p>
        <p className={`${fontClass}`}>{t("invitation.eventIntro")}</p>
        {/* <p className={`mt-6 ${fontClass}`}>{t("invitation.gratitude")}</p> */}
        <div className="flex justify-center">
          <Button
            onClick={handleAddToCalendar}
            variant="outline"
            className={`gap-2 text-empress-600 hover:text-empress-700 ${fontClass}`}
          >
            <Calendar className="h-5 w-5" />
            {t("invitation.addToCalendar")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
