import { Lateef } from "next/font/google"

const lateef = Lateef({
  subsets: ["arabic"],
  weight: "400",
  display: "swap",
})

export default function Navbar() {
  return (
    <nav className="top-0 z-50">
      <div className="container mx-auto px-4">
        <ul className={`${lateef.className} flex justify-center space-x-12 space-x-reverse py-4 text-empress-600 text-xl`}>
          <li>
            <a href="#accommodation" className="hover:text-empress-800 transition-colors">
              تفاصيل الحفل
            </a>
          </li>
          <li>
            <a href="#location" className="hover:text-empress-800 transition-colors">
              السفر والإقامة
            </a>
          </li>
          {/* <li>
            <a href="#attractions" className="hover:text-empress-800 transition-colors">
              معالم سياحية
            </a>
          </li> */}
          <li>
            <a href="#salons" className="hover:text-empress-800 transition-colors">
              صالونات التجميل والتصفيف
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
} 