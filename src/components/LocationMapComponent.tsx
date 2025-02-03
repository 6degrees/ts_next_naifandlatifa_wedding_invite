"use client"
import { useEffect } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { invitationData } from "@/data/invitation"

export default function LocationMapComponent() {
  const { location } = invitationData

  useEffect(() => {
    // Initialize map
    const map = L.map("map", {
      zoomControl: false,
      center: [location.lat, location.lng],
      zoom: 16,
      minZoom: 2,
      maxZoom: 18,
      scrollWheelZoom: false,
      fadeAnimation: true,
      markerZoomAnimation: true,
      inertia: true,
      inertiaDeceleration: 3000,
    })

    // Add custom zoom control
    L.control
      .zoom({
        position: "topleft",
      })
      .addTo(map)

    // Add Mapbox tiles with custom style
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/foursquare/ck7qbe9t20y6v1iqkyeolw8hk/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZm91cnNxdWFyZSIsImEiOiJjRGRqOVZZIn0.rMLhJeqI_4VnU2YdIJvD3Q",
      {
        attribution: "© Mapbox © OpenStreetMap",
        maxZoom: 18,
        minZoom: 2,
        opacity: 1,
        detectRetina: true,
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(map)

    // Add marker with default icon
    const marker = L.marker([location.lat, location.lng]).addTo(map)

    // Add popup and open it immediately
    const popup = L.popup({
      closeButton: true,
      closeOnClick: false,
      autoClose: false,
    })
      .setLatLng([location.lat, location.lng])
      .setContent(
        `
      <div class="text-center p-2">
        <h3 class="font-bold mb-1">موقع الحفل</h3>
        <p class="text-sm text-gray-600">فندق نايل ريتز كارلتون</p>
      </div>
    `
      )
      .openOn(map)

    // Cleanup
    return () => {
      map.remove()
    }
  }, [])

  return <div id="map" className="relative w-full h-96" />
} 