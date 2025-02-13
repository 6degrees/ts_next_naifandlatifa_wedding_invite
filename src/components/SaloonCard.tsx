import { salons } from "@/data/salons";
import { useAppContext } from "@/context/AppContext";
import "../styles/fonts.css";

export default function SaloonCard() {
  const { selectedLanguage } = useAppContext();

  const getLocationUrl = (salon) => {
    if (salon.link) return salon.link;
    return `https://www.google.com/maps/search/?api=1&query=${salon.location.lat},${salon.location.lng}`;
  };

  return (
    <div id="salons" className="space-y-8 mt-8 pt-8">
      {/* Page Title and Description */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-empress-900 font-arbMuslimah">
          {selectedLanguage === "ar"
            ? "استكشف أفضل صالونات التجميل والمصففين المحليين"
            : "Discover Top Local Makeup Artists & Hair Stylists"}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {selectedLanguage === "ar"
            ? "جعلنا من السهل عليك اكتشاف مصففي الشعر وخبراء المكياج المحليين، مع أفضل التقييمات لتجربة لا تُنسى."
            : "We've made it easy for you to explore top-rated local hair stylists and makeup artists for an unforgettable experience."}
        </p>
      </div>

      {/* Salon Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {salons.map((salon) => (
          <a
            key={salon.name["en"]}
            href={getLocationUrl(salon)}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden rounded-lg shadow-lg transition hover:scale-105 h-96"
          >
            {/* Full-Width Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${salon.image})`,
              }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Text Content */}
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <h3 className="text-2xl font-bold tracking-tight text-white font-arbMuslimah">
                {salon.name[selectedLanguage] || salon.name["en"]}
              </h3>
              <p className="mt-2 text-sm text-gray-200">
                {salon.description?.[selectedLanguage] || "Explore this salon."}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
