"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Percent } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "@/context/AppContext";

export default function TravelWithUsSection() {
  const { t } = useTranslation();
  const { selectedLanguage } = useAppContext();

  // Determine font class based on language
  const fontClass = selectedLanguage === "ar" ? "font-nympha" : "font-arbMuslimah";

  return (
    <div id="travel" className="space-y-8 mt-8">
      {/* Travel with Abdo Al Swify */}
      <div
        className="relative bg-cover bg-center rounded-xl overflow-hidden shadow-lg flex flex-col sm:flex-row"
        style={{ backgroundImage: "url('/cairo.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative flex flex-col justify-center p-6 sm:p-12 w-full sm:w-1/2 text-center sm:text-left">
          <Card className="bg-transparent text-white">
            <CardHeader className={`flex items-center gap-2 ${fontClass}`}>
              <Car className="w-6 h-6 text-white" />
              <h2 className={`text-3xl sm:text-4xl font-bold text-white ${fontClass}`}>
                {t("location.title")}
              </h2>
            </CardHeader>
            <CardContent className={`space-y-3 ${fontClass}`}>
              <p className={`text-lg sm:text-xl ${fontClass}`}>{t("location.description")}</p>
              <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
                {/* ✅ Fix: Explicitly set text-black in buttons */}
                <Button asChild className="bg-white text-black font-semibold rounded-lg px-6 py-2 sm:px-8 sm:py-3 transition hover:bg-gray-200 w-full sm:w-auto">
                  <a href="https://wa.me/00201119774784" target="_blank" rel="noopener noreferrer">
                    {t("location.whatsapp")}
                  </a>
                </Button>

                <Button asChild className="bg-white text-black font-semibold rounded-lg px-6 py-2 sm:px-8 sm:py-3 transition hover:bg-gray-200 w-full sm:w-auto">
                  <a href="https://www.snapchat.com/add/abddoashraf7" target="_blank" rel="noopener noreferrer">
                    {t("location.snapchat")}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Special Discount Section */}
      <div
        className="relative bg-cover bg-center rounded-xl overflow-hidden shadow-lg flex flex-col sm:flex-row"
        style={{ backgroundImage: "url('/Ritz2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative flex flex-col justify-center p-6 sm:p-12 w-full sm:w-1/2 text-center sm:text-left">
          <Card className="bg-transparent text-white">
            <CardHeader className={`flex items-center gap-2 ${fontClass}`}>
              <Percent className="w-6 h-6 text-white" />
              <h2 className={`text-3xl sm:text-4xl font-bold text-white ${fontClass}`}>
                {t("accommodation.specialDiscount")}
              </h2>
            </CardHeader>
            <CardContent className={`space-y-3 ${fontClass}`}>
              <p className={`text-lg sm:text-xl ${fontClass}`}>{t("accommodation.discountDetails")}</p>
              <div className="mt-4">
                <Button asChild className="bg-white text-black font-semibold rounded-lg px-6 py-2 sm:px-8 sm:py-3 transition hover:bg-gray-200 w-full sm:w-auto">
                  <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1738267348055&key=GRP&guestreslink2=true&app=resvlink"
                    target="_blank"
                    rel="noopener noreferrer">
                    {t("accommodation.view")}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
