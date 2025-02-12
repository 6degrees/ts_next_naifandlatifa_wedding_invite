"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { invitationData } from "@/data/invitation";
import { downloadICS } from "@/lib/calendar";
import {useTranslation} from "react-i18next";
import {useAppContext} from "@/context/AppContext";
import { motion } from "framer-motion";
import "../styles/fonts.css";


export default function InvitationCard() {
    const { t} = useTranslation();
    const { selectedLanguage, } = useAppContext();
    const { hosts, bride, groom, event } = invitationData;

    const handleAddToCalendar = () => {
        const startTime = new Date(event.date.timestamp);
        const endTime = new Date(startTime);
        endTime.setHours(endTime.getHours() + 4); // Assuming 4 hours duration
        downloadICS({
            title: t("wedding.title", { groom: groom.name[selectedLanguage], bride: bride.name[selectedLanguage] }),
            description: t("wedding.description", {host1: hosts.first[selectedLanguage], host2: hosts.second[selectedLanguage], groom: groom.name[selectedLanguage], bride: bride.name[selectedLanguage],}),
            location: t("wedding.location", {venue: event.venue.name, city: event.venue.city, country: event.venue.country,}),
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
        });
    };


    return (
        <Card className="mb-8 rounded-xl leading-none text-xl text-center text-empress bg-white/10  ">
            {/* <CardHeader><h1 className="text-4xl">{t("invitation.title")}</h1></CardHeader> */}
            <CardContent className="space-y-4 lg:space-y-12 flex flex-col items-center pt-10 ">
            <motion.img
          src="/logo.png"
          alt="Wedding Logo"
          className="w-36 h-auto mb-6 items-center "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
            <p className="font-medium font-arbMuslimah">{t("invitation.hostsIntro")}</p>
                <div>
                    <div className="flex items-center text-center justify-center gap-6 lg:gap-16">
                        {/* <p className="font-medium text-empress-700">{hosts.first[selectedLanguage]}</p>
                        <p className="">{t("invitation.and")}</p>
                        <p className="font-medium text-empress-700">{hosts.second[selectedLanguage]}</p> */}
                    </div>
                </div>
                <p className="font-arbMuslimah">{t("invitation.eventIntro")}</p>
                <div>
                    <div className="flex justify-center items-center gap-6 lg:gap-12">
                        {/* <div className=" text-empress-700">
                            <p>{bride.name[selectedLanguage]}</p>
                            <p>{t("invitation.bintOf", {"name": bride.fatherName[selectedLanguage]})}</p>
                        </div>
                        <p>{t("invitation.on")}</p>
                        <div className=" text-empress-700">
                            <p>{groom.name[selectedLanguage]}</p>
                            <p>{t("invitation.binOf", {"name": bride.fatherName[selectedLanguage]})}</p>
                        </div> */}
                    </div>
                </div>
                <div>
                    {/* <p> {t("invitation.eventDetails.dateIntro", {"date": `${event.date.day[selectedLanguage]} ${event.date.fullDate[selectedLanguage]}`})}</p>
                    <p> {t("invitation.eventDetails.timeIntro", {"time": `${event.time[selectedLanguage]}`})}</p>
                    <p> {t("invitation.eventDetails.locationIntro", {"location": `${event.venue.name[selectedLanguage]} ${event.venue.city[selectedLanguage]} ${event.venue.country[selectedLanguage]}`})}</p> */}
                </div>
                <p className="font-arbMuslimah mt-6">{t("invitation.gratitude")}</p>
                <div className="flex justify-center">
                    <Button onClick={handleAddToCalendar} variant="outline" className="gap-2 text-empress-600 hover:text-empress-700 font-arbMuslimah">
                        <Calendar className="h-5 w-5" />
                        {t("invitation.addToCalendar")}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
