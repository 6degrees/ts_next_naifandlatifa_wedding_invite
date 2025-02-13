"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function HotelDiscountCard() {
  const { t } = useTranslation();

  return (
    <div id="accommodation" className="space-y-12">
      {/* When & Where Section */}
      <Card className="rounded-xl p-6 bg-white/10">
        <CardHeader>
          <h2 className="text-4xl text-center text-empress-900 font-arbMuslimah font-bold ">
            {t("accommodation.title")}
          </h2>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-xl font-arbMuslimah">{t("accommodation.date")}</p>
          <p className="text-xl font-arbMuslimah">{t("accommodation.time")}</p>
          <p className="text-xl font-arbMuslimah">{t("accommodation.location")}</p>
        </CardContent>
        <CardContent>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.092679405453!2d31.231620015463234!3d30.047709881884012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841cb60418ab9%3A0xb6189e7e967d2e4f!2sThe%20Nile%20Ritz-Carlton%2C%20Cairo!5e0!3m2!1sen!2seg!4v1613129455227!5m2!1sen!2seg"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          />
        </CardContent>
      </Card>

      {/* Special Discount Section */}
      <a
        href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1738267348055&key=GRP&guestreslink2=true&app=resvlink"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center  bg-white/10 border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 transition dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://cache.marriott.com/content/dam/marriott-renditions/CAIRZ/cairz-exterior-0018-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"
          alt="Hotel Image"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-arbMuslimah">
            {t("accommodation.specialDiscount")}
          </h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-arbMuslimah">
            {t("accommodation.discountDetails")}
          </p>
        </div>
      </a>
    </div>
  );
}
