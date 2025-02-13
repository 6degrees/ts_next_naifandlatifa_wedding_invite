"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

export default function HotelDiscountCard() {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const marker = useRef<maptilersdk.Marker | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    maptilersdk.config.apiKey = "mVfew9iwlBZORvlHa7K5";

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/45657a96-f776-451e-8f13-69961393d28b/style.json?key=mVfew9iwlBZORvlHa7K5`,
      center: [31.2320351, 30.0458889],
      zoom: 15,
    });

    marker.current = new maptilersdk.Marker({ color: "#7D7175" })
      .setLngLat([31.2320351, 30.0458889])
      .addTo(map.current);

    map.current.addControl(new maptilersdk.NavigationControl());
    map.current.addControl(new maptilersdk.FullscreenControl());

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div id="accommodation" className="space-y-12">
      {/* When & Where Section */}
      <Card className="rounded-xl p-6 bg-white/10 relative overflow-hidden">
        <CardHeader>
          <h2 className="text-4xl text-center text-empress-900 font-arbMuslimah font-bold">
            {t("accommodation.title")}
          </h2>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-xl font-arbMuslimah">{t("accommodation.date")}</p>
          <p className="text-xl font-arbMuslimah">{t("accommodation.time")}</p>
          <p className="text-xl font-arbMuslimah">{t("accommodation.location")}</p>
        </CardContent>
        <CardContent
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={mapContainer} className="w-full h-96 rounded-lg" />
          {/* Dark overlay on hover */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-500 ${
              isHovered ? "opacity-50" : "opacity-0"
            }`}
          />
          {/* Button appears on hover with hover effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Button
              asChild
              size="lg"
              className={`bg-white text-black font-semibold shadow-md transition duration-300 hover:bg-gray-100 hover:shadow-lg pointer-events-auto ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <a
                href="https://www.google.com/maps/place/The+Nile+Ritz-Carlton,+Cairo"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("location.getDirections")}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Special Discount Section */}
      {/* <a
        href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1738267348055&key=GRP&guestreslink2=true&app=resvlink"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center bg-white/10 border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 transition dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
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
      </a> */}
    </div>
  );
}
