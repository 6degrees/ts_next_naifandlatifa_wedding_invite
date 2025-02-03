import "./globals.css"
import { Noto_Kufi_Arabic, Aref_Ruqaa, Lateef } from "next/font/google"
import type React from "react" // Import React
import { Metadata } from "next"

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  display: "swap",
})

const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: "400",
  display: "swap",
})

const lateef = Lateef({
  subsets: ["arabic"],
  weight: "400",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://naifandlatifa.com'),
  title: "نايف ولطيفة | دعوة زفاف",
  description: "يتشرفان بدعوتكم لحضور حفل زفافهما يوم الخميس ٨ مايو ٢٠٢٥ في فندق نايل ريتز كارلتون، القاهرة",
  openGraph: {
    type: 'website',
    url: 'https://naifandlatifa.com',
    title: 'نايف ولطيفة | دعوة زفاف',
    description: 'يتشرفان بدعوتكم لحضور حفل زفافهما يوم الخميس ٨ مايو ٢٠٢٥ في فندق نايل ريتز كارلتون، القاهرة',
    images: [
      {
        url: '/Logo.png',
        width: 1200,
        height: 630,
        alt: 'نايف ولطيفة',
      }
    ],
    siteName: 'نايف ولطيفة'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نايف ولطيفة | دعوة زفاف',
    description: 'يتشرفان بدعوتكم لحضور حفل زفافهما يوم الخميس ٨ مايو ٢٠٢٥ في فندق نايل ريتز كارلتون، القاهرة',
    images: ['/Logo.png'],
    creator: '@6degrees',
    site: '@6degrees',
  },
  applicationName: 'نايف ولطيفة',
  keywords: ['دعوة زفاف', 'نايف', 'لطيفة', 'زفاف', 'حفل زفاف', 'فندق نايل ريتز كارلتون', 'القاهرة'],
  authors: [{ name: '6degrees', url: 'https://6degrees.com.sa' }],
  creator: '6degrees',
  publisher: '6degrees',
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#7D7175',
  manifest: '/manifest.json',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
      <meta name="apple-mobile-web-app-title" content="Naif&Latifa" />


      </head>
      <body className={lateef.className}>{children}</body>
    </html>
  )
}

