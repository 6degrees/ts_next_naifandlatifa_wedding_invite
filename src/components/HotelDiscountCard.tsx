"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function HotelDiscountCard() {
  const { t } = useTranslation();

  return (
    <div id="accommodation" className="space-y-12">
      {/* When & Where Section */}
      <Card className="rounded-xl p-6 bg-white/10">
        <CardHeader>
          <h2 className="text-3xl text-center text-empress-900 font-NymphaTrial">
            {t("accommodation.title")}
          </h2>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-xl">{t("accommodation.date")}</p>
          <p className="text-xl">{t("accommodation.time")}</p>
          <p className="text-xl">{t("accommodation.location")}</p>
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
      <Card className="p-6 bg-empress-10 rounded-xl shadow-lg">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl text-empress-900 font-ArbMuslimah">
              {t("accommodation.specialDiscount")}
            </h2>
            <p className="mt-2 text-lg text-empress-700">
              {t("accommodation.discountDetails")}
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <Button
              as="a"
              href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1738267348055&key=GRP&guestreslink2=true&app=resvlink"
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              className="px-6 py-3 text-lg font-semibold text-black bg-white-700 border border-white rounded-lg transition hover:bg-white hover:text-black"
            >
              {t("accommodation.view")}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
