"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { invitationData } from "@/data/invitation";
import { downloadICS } from "@/lib/calendar";

export default function InvitationCard() {
    const { hosts, bride, groom, event } = invitationData;

    const handleAddToCalendar = () => {
        const startTime = new Date(event.date.timestamp);
        const endTime = new Date(startTime);
        endTime.setHours(endTime.getHours() + 4); // Assuming 4 hours duration

        downloadICS({
            title: `حفل زفاف ${groom.name} و ${bride.name}`,
            description: `يتشرف ${hosts.first} و ${hosts.second} بدعوتكم لحضور حفل زفاف ${groom.name} و ${bride.name}`,
            location: `${event.venue.name}, ${event.venue.city}, ${event.venue.country}`,
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
        });
    };

    return (
        <Card className="mb-8 rounded-xl leading-none text-xl text-center text-empress bg-white/60">
            <CardHeader>
                <h1 className="text-4xl">دعوة زفاف</h1>
            </CardHeader>
            <CardContent className="space-y-8 lg:space-y-12 ">
            <p className="font-medium">تتشرف</p>
                <div>
                    
                    <div className="flex items-center text-center justify-center gap-6 lg:gap-16">



                        <p className="font-medium text-empress-700">{hosts.first}</p>
                        <p className="">و</p>
                        <p className="font-medium text-empress-700">{hosts.second}</p>
                    </div>
                </div>

                <p className="">بدعوتكم لحضور حفل زفاف</p>

                <div>
                    

                    <div className="flex justify-center items-center gap-6 lg:gap-12">
                        <div className=" text-empress-700">
                            <p>{bride.name}</p>
                            <p>بنت {bride.fatherName}</p>
                        </div>

                        <p>على</p>


                        <div className=" text-empress-700">
                            <p>{groom.name}</p>
                            <p>بن {groom.fatherName}</p>
                        </div>
                    </div>

                </div>

                <div>
                    <p>
                        وذلك بمشيئة الله تعالى يوم {event.date.day} {event.date.fullDate}
                    </p>
                    <p>في تمام الساعة {event.time}</p>
                    <p>
                        في {event.venue.name} {event.venue.city} {event.venue.country}
                    </p>
                </div>
                <p className=" mt-6">شاكرين لكم تلبية الدعوة</p>

                <div className="flex justify-center">
                    <Button
                        onClick={handleAddToCalendar}
                        variant="outline"
                        className="gap-2 text-empress-600 hover:text-empress-700"
                    >
                        <Calendar className="h-5 w-5" />
                        إضافة إلى التقويم
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
