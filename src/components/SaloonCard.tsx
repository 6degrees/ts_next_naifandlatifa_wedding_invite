import { Card, CardHeader } from "@/components/ui/card"
import { salons } from "@/data/salons"
import {useAppContext} from "@/context/AppContext";
import "../styles/fonts.css";

export default function SaloonCard() {
  const { selectedLanguage, } = useAppContext();


  const getLocationUrl = (salon: typeof salons[0]) => {
    if (salon.link) return salon.link
    return `https://www.google.com/maps/search/?api=1&query=${salon.location.lat},${salon.location.lng}`
  }

  return (
    <div id="salons" className="space-y-6 mt-8 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {salons.map((salon) => (
          <a
            key={salon.name['en']}
            href={getLocationUrl(salon)}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Card className="relative h-48 overflow-hidden rounded-xl">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out"
                style={{ 
                  backgroundImage: `url(${salon.image})`,
                  backgroundPosition: 'center'
                }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />
              {/* Content */}
              <CardHeader className="relative h-full flex items-center justify-center">
                <h3 className="text-2xl text-white text-center">
                  {salon.name[selectedLanguage]}
                </h3>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>
    </div>
  )
}
  
