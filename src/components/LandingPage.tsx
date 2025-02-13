"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Background from "@/components/Background";
import {useAppContext} from "@/context/AppContext";
import "../styles/fonts.css";

export default function LandingPage() {
  const { selectedLanguage, setSelectedLanguage } = useAppContext();


  const handleLanguageSelection = (lang: string) => {
    setSelectedLanguage(lang);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}         
      animate={{ opacity: 1 }}          
      exit={{ opacity: 0 }}            
      transition={{ duration: 0.9 }}     
      className="relative flex flex-col items-center justify-center min-h-screen text-white"
    >

      <Background />

   
      <div className="relative z-10 flex flex-col items-center">
        <motion.img
          src="/logo.png"
          alt="Wedding Logo"
          className="w-80 h-auto mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        <div className="flex gap-6">
          <motion.button
            className="px-6 py-3 text-lg font-semibold text-black bg-white-700 border border-white rounded-lg transition hover:bg-white hover:text-black font-arbMuslimah"
            onClick={() => handleLanguageSelection("ar")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            العربية
          </motion.button>

          <motion.button
            className="px-6 py-3 text-lg font-semibold text-black bg-white-700 border border-white rounded-lg transition hover:bg-white hover:text-black font-arbMuslimah"
            onClick={() => handleLanguageSelection("en")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            English
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
