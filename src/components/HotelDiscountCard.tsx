"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { useTranslation } from "react-i18next";
import { useAppContext } from "@/context/AppContext";

export default function HotelDiscountCard() {
  const { t } = useTranslation();
  const { selectedLanguage } = useAppContext();

  // Dynamically set font class based on language
  const fontClass = selectedLanguage === "ar" ? "font-nymphaTrial" : "font-arbMuslimah";

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
      <Card className="rounded-xl p-6 bg-white/10">
        <CardHeader>
          <h2 className={`text-4xl text-center text-empress font-bold ${fontClass}`}>
            {t("accommodation.title")}
          </h2>
        </CardHeader>
        <CardContent className={`text-center space-y-4 text-empress ${fontClass}`}>
          <p className="text-xl">{t("accommodation.date")}</p>
          <p className="text-xl">{t("accommodation.time")}</p>
          <p className="text-xl">{t("accommodation.location")}</p>
        </CardContent>
        <CardContent className="relative overflow-hidden rounded-xl">
          <div
            ref={mapContainer}
            className="w-full h-[600px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          {/* Dark overlay */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-500 ${
              isHovered ? "opacity-30" : "opacity-10 pointer-events-none"
            }`}
          />
          {/* Button container */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
              isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="shadow-lg rounded-xl"
            >
              <a
                href="https://www.google.com/maps/place/The+Nile+Ritz-Carlton,+Cairo,+1113+Nile+Corniche,+Ismailia,+El+Nil,+Cairo+Governorate+11221,+Egypt/@30.0458889,31.2320351,16z/data=!4m6!3m5!1s0x145840e569aa99ad:0xc9fcbc4a106d88ca!8m2!3d30.0458889!4d31.2320351!16s%2Fg%2F11ggngvc60?hl=en-sa&source=lnms"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("location.getDirections")}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
