import InvitationCard from "@/components/InvitationCard"
import LocationMap from "@/components/LocationMap"
import AttractionCard from "@/components/AttractionCard"
import SaloonCard from "@/components/SaloonCard"
import TipsSection from "@/components/TipsSection"
import HotelDiscountCard from "@/components/HotelDiscountCard"
import CountdownTimer from "@/components/CountdownTimer"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

// Add static page generation
export const dynamic = 'force-static'
export const revalidate = false

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 relative">
    
      {/* Top right background image */}
      <div 
        className="absolute top-0 right-0 w-[632px] h-[807px] z-0"
        style={{
          backgroundImage: "url('/top-right.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',
          pointerEvents: 'none',
          position: 'fixed'
        }}
      />

      {/* Bottom left background image */}
      <div 
        className="absolute bottom-0 left-0 w-[622px] h-[767px] z-0"
        style={{
          backgroundImage: "url('/bottom-left.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom left',
          pointerEvents: 'none',
          position: 'fixed'
        }}
      />

      <Navbar />
      <div className="relative z-10 container space-y-24 mx-auto px-4 py-8">
        <InvitationCard />
        <CountdownTimer />
        <HotelDiscountCard />
        <LocationMap />
        <AttractionCard />
        <SaloonCard />
        <TipsSection />
        <Footer />
      </div>
    </main>
  )
}

