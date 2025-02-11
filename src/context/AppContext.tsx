"use client";

import {createContext, useContext, useState, useEffect} from "react";

const AppContext = createContext<any>(null);

export function AppProvider({children}: { children: React.ReactNode }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
      <AppContext.Provider value={{selectedLanguage, setSelectedLanguage}}>
        {children}
      </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
