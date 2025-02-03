"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { invitationData } from "@/data/invitation";

// Dynamically import Leaflet with no SSR
const LocationMapComponent = dynamic(() => import("./LocationMapComponent"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-96 flex items-center justify-center bg-gray-100">
            جاري تحميل الخريطة...
        </div>
    ),
});

export default function LocationMap() {
    const [isHovered, setIsHovered] = useState(false);
    const { location } = invitationData;

    return (
        <div id="location">
            <Card className="relative overflow-hidden rounded-xl mb-8" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <CardContent className="p-0">
                    <LocationMapComponent />
                    <div className={`absolute inset-0 group bg-black transition-opacity duration-500 z-[9999] ${isHovered ? "opacity-80" : "opacity-20 pointer-events-none"} flex items-center justify-center`}>
                        <Button asChild variant="secondary" size="lg" className="shadow-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <a href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`} target="_blank" rel="noopener noreferrer">
                                الحصول على الاتجاهات
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
