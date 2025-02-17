"use client";  

import LandingPage from "@/components/LandingPage";
import InvitationCard from "@/components/InvitationCard";
import LocationMap from "@/components/LocationMap";
import SaloonCard from "@/components/SaloonCard";
import HotelDiscountCard from "@/components/HotelDiscountCard";
import CountdownTimer from "@/components/CountdownTimer";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence } from "framer-motion";
import Background from "@/components/Background";
import {useTranslation} from "react-i18next";
import {useAppContext} from "@/context/AppContext";

export default function Home() {
  const { t } = useTranslation();
  const { selectedLanguage, } = useAppContext();

  return (
    <main className="min-h-screen relative">
      {!selectedLanguage ? (<LandingPage />) : (
        <>
          <Background />
          <div className="relative z-10 p-4">
            <div className="container mx-auto">
              <Tabs defaultValue="home" className="w-full">
                <TabsList dir="rtl" className="w-full p-2 grid grid-cols-2 sm:grid-cols-3 md:flex gap-2 md:gap-4 h-auto">
                  <TabsTrigger className="text-sm sm:text-base md:text-lg lg:text-xl px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 min-w-[100px] text-center" value="home">
                    {t('nav.home')}
                  </TabsTrigger>
                  <TabsTrigger className="text-sm sm:text-base md:text-lg lg:text-xl px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 min-w-[100px] text-center" value="accommodation">
                    {t('nav.accommodation')}
                  </TabsTrigger>
                  <TabsTrigger className="text-sm sm:text-base md:text-lg lg:text-xl px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 min-w-[100px] text-center" value="location">
                    {t('nav.location')}
                  </TabsTrigger>
                  <TabsTrigger className="text-sm sm:text-base md:text-lg lg:text-xl px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 min-w-[100px] text-center" value="salons">
                    {t('nav.salons')}
                  </TabsTrigger>
                </TabsList>
                <AnimatePresence mode="wait">
                  <div className="mt-8">
                    <TabsContent value="home" className="space-y-8 lg:space-y-12">
                      <InvitationCard />
                      <CountdownTimer />
                    </TabsContent>
                    <TabsContent value="accommodation">
                      <HotelDiscountCard />
                    </TabsContent>
                    <TabsContent value="location">
                      <LocationMap />
                    </TabsContent>
                    <TabsContent value="salons">
                      <SaloonCard />
                    </TabsContent>
                  </div>
                </AnimatePresence>
              </Tabs>
              <Footer />
            </div>
          </div>
        </>
      )}
    </main>
  );
}
