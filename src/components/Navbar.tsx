import { useTranslation } from "react-i18next";
import { useAppContext } from "@/context/AppContext";
import "../styles/fonts.css";

export default function Navbar() {
  const { t } = useTranslation();
  const { selectedLanguage } = useAppContext();

  // Dynamically assign font based on selected language
  const fontClass = selectedLanguage === "ar" ? "font-nymphaTrial" : "font-arbMuslimah";

  return (
    <nav className="top-0 z-50">
      <div className="container mx-auto px-4">
        <ul className={`flex justify-center space-x-12 space-x-reverse py-4 text-empress-600 text-xl ${fontClass}`}>
          <li>
            <a href="#accommodation" className="hover:text-empress-800 transition-colors">
              {t("nav.accommodation")}
            </a>
          </li>
          <li>
            <a href="#location" className="hover:text-empress-800 transition-colors">
              {t("nav.location")}
            </a>
          </li>
          <li>
            <a href="#salons" className="hover:text-empress-800 transition-colors">
              {t("nav.salons")}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
