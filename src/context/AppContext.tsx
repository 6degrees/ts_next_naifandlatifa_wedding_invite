"use client";
import {createContext, useContext, useState, useEffect} from "react";
import i18next from "i18next";

const AppContext = createContext<any>(null);

export function AppProvider({children}: { children: React.ReactNode }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {
    i18next.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
      <AppContext.Provider value={{selectedLanguage, setSelectedLanguage}}>
        {children}
      </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
