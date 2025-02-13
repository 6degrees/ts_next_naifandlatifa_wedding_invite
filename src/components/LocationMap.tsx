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
    <div id="travel" className="space-y-12 mt-12">
      {/* Travel with Abdo Al Swify */}
      <div
        className="relative bg-cover bg-center rounded-xl overflow-hidden shadow-lg"
        style={{ backgroundImage: "url('/cairo.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative p-12 text-center lg:text-left">
          <Card className="bg-transparent text-white">
            <div className="p-6 space-y-6">
              <CardHeader className={`flex items-center gap-2 ${fontClass}`}>
                <Car className="w-6 h-6 text-white" />
                <h2 className={`text-4xl font-bold text-white ${fontClass} mb-4`}>
                  {t("location.title")}
                </h2>
              </CardHeader>
              <CardContent className={`space-y-3 ${fontClass}`}>
                <p className={`text-lg ${fontClass}`}>{t("location.description")}</p>
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                  <Button
                    as="a"
                    href="https://wa.me/00201119774784"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white text-black font-semibold rounded-lg transition hover:bg-gray-200"
                  >
                    {t("location.whatsapp")}
                  </Button>
                  <Button
                    as="a"
                    href="https://www.snapchat.com/add/abddoashraf7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white text-black font-semibold rounded-lg transition hover:bg-gray-200"
                  >
                    {t("location.snapchat")}
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>

      {/* Special Discount Section */}
      <div
        className="relative bg-cover bg-center rounded-xl overflow-hidden shadow-lg"
        style={{ backgroundImage: "url('/Ritz2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative p-12 text-center lg:text-left">
          <Card className="bg-transparent text-white">
            <div className="p-6 space-y-6">
              <CardHeader className={`flex items-center gap-2 ${fontClass}`}>
                <Percent className="w-6 h-6 text-white" />
                <h2 className={`text-4xl font-bold text-white ${fontClass} mb-4`}>
                  {t("accommodation.specialDiscount")}
                </h2>
              </CardHeader>
              <CardContent className={`space-y-3 ${fontClass}`}>
                <p className={`text-lg ${fontClass}`}>{t("accommodation.discountDetails")}</p>
                <div className="mt-6">
                  <Button
                    as="a"
                    href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1738267348055&key=GRP&guestreslink2=true&app=resvlink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white text-black font-semibold rounded-lg transition hover:bg-gray-200"
                  >
                    {t("accommodation.view")}
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}


 


// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { invitationData } from "@/data/invitation";
// import * as maptilersdk from "@maptiler/sdk";
// import "@maptiler/sdk/dist/maptiler-sdk.css";
// import { useTranslation } from "react-i18next";

// export default function LocationMap() {
//   const { t } = useTranslation();
//   const [isHovered, setIsHovered] = useState(false);
//   const { location } = invitationData;
//   const mapContainer = useRef<HTMLDivElement>(null);
//   const map = useRef<maptilersdk.Map | null>(null);
//   const marker = useRef<maptilersdk.Marker | null>(null);

//   useEffect(() => {
//     if (map.current || !mapContainer.current) return;

//     maptilersdk.config.apiKey = "mVfew9iwlBZORvlHa7K5";

//     map.current = new maptilersdk.Map({
//       container: mapContainer.current,
//       style: `https://api.maptiler.com/maps/45657a96-f776-451e-8f13-69961393d28b/style.json?key=mVfew9iwlBZORvlHa7K5`,
//       center: [location.lng, location.lat],
//       zoom: 15,
//     });

//     marker.current = new maptilersdk.Marker({ color: "#7D7175" })
//       .setLngLat([location.lng, location.lat])
//       .addTo(map.current);

//     map.current.addControl(new maptilersdk.NavigationControl());
//     map.current.addControl(new maptilersdk.FullscreenControl());

//     return () => {
//       if (map.current) {
//         map.current.remove();
//         map.current = null;
//       }
//     };
//   }, [location.lng, location.lat]);

//   return (
//     <div id="location">
//       <Card
//         className="relative overflow-hidden rounded-xl mb-8"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <CardContent className="p-0">
//           <div ref={mapContainer} className="w-full h-[600px]" />

//           <div
//             className={`absolute inset-0 bg-black transition-opacity duration-500 ${
//               isHovered ? "opacity-30" : "opacity-10 pointer-events-none"
//             }`}
//           />


//           <div
//             className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
//               isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//             }`}
//           >
//             <Button
//               asChild
//               variant="secondary"
//               size="lg"
//               className="shadow-lg rounded-xl"
//             >
//               <a
//                 href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {t("location.getDirections")}
//               </a>
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
