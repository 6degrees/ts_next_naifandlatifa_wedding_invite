"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { invitationData } from "@/data/invitation";
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';

export default function LocationMap() {
    const [isHovered, setIsHovered] = useState(false);
    const { location } = invitationData;
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<maptilersdk.Map | null>(null);
    const marker = useRef<maptilersdk.Marker | null>(null);

    useEffect(() => {
        if (map.current || !mapContainer.current) return;

        maptilersdk.config.apiKey = 'mVfew9iwlBZORvlHa7K5';
        
        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/45657a96-f776-451e-8f13-69961393d28b/style.json?key=mVfew9iwlBZORvlHa7K5`,
            center: [location.lng, location.lat],
            zoom: 15,
        });

        // Add marker
        marker.current = new maptilersdk.Marker({color: "#7D7175"})
            .setLngLat([location.lng, location.lat])
            .addTo(map.current);

        // Add navigation control
        map.current.addControl(new maptilersdk.NavigationControl());

        // Add fullscreen control
        map.current.addControl(new maptilersdk.FullscreenControl());

        return () => {
            if (map.current) {
                map.current.remove();
                map.current = null;
            }
        };
    }, [location.lng, location.lat]);

    return (
        <div id="location">
            <Card 
                className="relative overflow-hidden rounded-xl mb-8" 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
            >
                <CardContent className="p-0">
                    <div ref={mapContainer} className="w-full h-[600px]" />
                    {/* Dark overlay */}
                    <div 
                        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                            isHovered ? "opacity-80" : "opacity-10 pointer-events-none"
                        }`}
                    />
                    {/* Button container */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <Button 
                            asChild 
                            variant="secondary" 
                            size="lg" 
                            className={`shadow-lg rounded-xl transition-opacity duration-500 pointer-events-auto ${
                                isHovered ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <a 
                                href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                الحصول على الاتجاهات
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
