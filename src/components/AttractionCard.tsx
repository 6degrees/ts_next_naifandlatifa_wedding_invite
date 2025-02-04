import { Card, CardHeader } from "@/components/ui/card"
import { attractions } from "@/data/attractions"

export default function AttractionCard() {
  const getLocationUrl = (attraction: typeof attractions[0]) => {
    if (attraction.link) return attraction.link
    return `https://www.google.com/maps/search/?api=1&query=${attraction.location.lat},${attraction.location.lng}`
  }

  return (
    <div id="attractions" className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {attractions.map((attraction) => (
          <a
            key={attraction.name}
            href={getLocationUrl(attraction)}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Card className="relative h-48 overflow-hidden rounded-xl">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out"
                style={{ backgroundImage: `url(${attraction.image})` }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />
              {/* Content */}
              <CardHeader className="relative h-full flex items-center justify-center">
                <h3 className="text-2xl text-white text-center">
                  {attraction.name}
                </h3>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>
    </div>
  )
}
  
  