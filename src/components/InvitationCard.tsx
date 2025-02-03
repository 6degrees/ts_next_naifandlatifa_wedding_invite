import { Aref_Ruqaa, Lateef } from "next/font/google"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { invitationData } from "@/data/invitation"

const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: "400",
  display: "swap",
})

const lateef = Lateef({
  subsets: ["arabic"],
  weight: "400",
  display: "swap",
})

export default function InvitationCard() {
  const { hosts, bride, groom, event } = invitationData

  return (
    <Card className="mb-8 rounded-xl">
      <CardHeader>
        <h1 className={`${arefRuqaa.className} text-7xl text-center text-empress-600`}>دعوة زفاف</h1>
      </CardHeader>
      <CardContent className={`text-center text-empress ${lateef.className}`}>
        <p className="text-base">تتشرف</p>
        <div className={`flex items-center text-center justify-center gap-8 lg:gap-16 ${arefRuqaa.className}`}>
          <p className="text-2xl">{hosts.first}</p>
          <p className="text-4xl">و</p>
          <p className="text-2xl">{hosts.second}</p>
        </div>
        <p className="text-xl">بدعوتكم لحضور حفل زفاف</p>
        

        {/* Names layout */}
        <div className="flex justify-center items-center gap-12">
          {/* Bride side */}
          <div className="text-center">
            <p className={`${arefRuqaa.className} text-4xl text-empress-600 mb-1`}>{bride.name}</p>
            <p className="text-lg">بنت {bride.fatherName}</p>
          </div>
          
          {/* Middle */}
          <div className="text-center">
            <p className="text-xl">على</p>
          </div>
          
          {/* Groom side */}
          <div className="text-center">
            <p className={`${arefRuqaa.className} text-4xl text-empress-600 mb-1`}>{groom.name}</p>
            <p className="text-lg">بن {groom.fatherName}</p>
          </div>

        </div>

        <div className="space-y-6 mt-6">
          <p className="text-xl">وذلك بمشيئة الله تعالى يوم {event.date.day} {event.date.fullDate}</p>
          <p className="text-xl">في تمام الساعة {event.time}</p>
          <p className="text-xl">في {event.venue.name} {event.venue.city} {event.venue.country}</p>
        </div>
        <p className="text-lg mt-6">شاكرين لكم تلبية الدعوة</p>
      </CardContent>
    </Card>
  )
}

