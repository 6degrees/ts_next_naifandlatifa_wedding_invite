"use client";

import { useRouter } from "next/navigation";
import Background from "@/components/Background"; // ✅ Import the background

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
      {/* Background Video */}
      <Background />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo (Smaller Size) */}
        <img src="/logo.png" alt="Wedding Logo" className="w-36 h-auto mb-6" />

        {/* Language Selection Buttons */}
        <div className="flex gap-6">
          <button
            className="px-6 py-3 text-lg font-semibold text-black bg-white-700 border border-white rounded-lg transition hover:bg-white hover:text-black"
            onClick={() => router.push("/ar")}
          >
            العربية
          </button>

          <button
            className="px-6 py-3 text-lg font-semibold text-black bg-white-700 border border-white rounded-lg transition hover:bg-white hover:text-black"
            onClick={() => router.push("/en")}
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
}
