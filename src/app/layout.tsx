import "./globals.css";
import "../styles/fonts.css";
import type React from "react";
import {Metadata} from "next";
import i18n from "i18next";
import {AppProvider} from "@/context/AppContext";
import I18nProvider from "@/components/I18nProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://naifandlatifa.com"),
  title: "نايف ولطيفة | دعوة زفاف",
  description: "يتشرفان بدعوتكم لحضور حفل زفافهما يوم الخميس ٨ مايو ٢٠٢٥ في فندق نايل ريتز كارلتون، القاهرة",
  openGraph: {
    type: "website",
    url: "https://naifandlatifa.com",
    title: "نايف ولطيفة | دعوة زفاف",
    description: "يتشرفان بدعوتكم لحضور حفل زفافهما يوم الخميس ٨ مايو ٢٠٢٥ في فندق نايل ريتز كارلتون، القاهرة",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "نايف ولطيفة",
      },
    ],
    siteName: "نايف ولطيفة",
  },
  twitter: {
    card: "summary_large_image",
    title: "نايف ولطيفة | دعوة زفاف",
    description: "يتشرفان بدعوتكم لحضور حفل زفافهما يوم الخميس ٨ مايو ٢٠٢٥ في فندق نايل ريتز كارلتون، القاهرة",
    images: ["/Logo.png"],
    creator: "@6degrees",
    site: "@6degrees",
  },
  applicationName: "نايف ولطيفة",
  keywords: ["دعوة زفاف", "نايف", "لطيفة", "زفاف", "حفل زفاف", "فندق نايل ريتز كارلتون", "القاهرة"],
  authors: [{name: "6degrees", url: "https://6degrees.com.sa"}],
  creator: "6degrees",
  publisher: "6degrees",
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  manifest: "/manifest.json",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
      <AppProvider>
        <html lang={i18n.language || "ar"} dir={i18n.language === "en" ? "ltr" : "rtl"}>
        <head>
          <title></title>
          <meta name="apple-mobile-web-app-title" content="Naif&Latifa"/>
        </head>
        <body>
        <I18nProvider>{children}</I18nProvider>
        </body>
        </html>
      </AppProvider>
  );
}
