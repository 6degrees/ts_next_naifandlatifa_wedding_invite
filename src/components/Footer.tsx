import { Poppins } from "next/font/google"
import {useTranslation} from "react-i18next";

const poppins = Poppins({
  subsets: ['latin'],
  weight: "400",
  display: "swap",
})

export default function Footer() {
  const { t} = useTranslation();
  return (
    <footer className="py-8 text-center text-empress">
      <p className="text-sm">
        {t("footer.preparedWith")}{" "}
        <span role="img" aria-label="heart" className="text-red-500">
          ❤️
        </span>{" "}
        {t("footer.by")}{" "}
        <a
          href="https://www.6degrees.com.sa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-empress-600 hover:text-empress-700 transition-colors underline underline-offset-4"
        >
          {t("footer.company")}
        </a>
      </p>
    </footer>
  )
} 