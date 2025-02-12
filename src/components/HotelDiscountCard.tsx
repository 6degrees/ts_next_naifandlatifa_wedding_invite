import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Aref_Ruqaa, Lateef } from "next/font/google"
import {useTranslation} from "react-i18next";

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


export default function HotelDiscountCard() {
  const { t} = useTranslation();
  return (
    <div id="accommodation">
      <a
        href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1738267348055&key=GRP&guestreslink2=true&app=resvlink"
        target="_blank"
        rel="noopener noreferrer"
        className="block group transform transition-transform hover:scale-105">
        <Card className="mb-8 rounded-xl overflow-hidden relative min-h-[40vh] flex items-center justify-center">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://cache.marriott.com/content/dam/marriott-renditions/CAIRZ/cairz-exterior-0018-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*')`,
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-empress-800/60 group-hover:bg-empress-800/90 transition-colors duration-300" />
          
          {/* Content */}
          <div className="relative">
            <CardHeader>
              <h2 className={`${arefRuqaa.className} text-3xl text-center text-white`}>
                {t('accommodation.specialDiscount')}
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-center text-white">
                {t('accommodation.discountDetails')}
              </p>
            </CardContent>
          </div>
        </Card>
      </a>
    </div>
  )
}

