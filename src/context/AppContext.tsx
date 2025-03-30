import React, { createContext, useState, ReactNode } from 'react';

interface AppContextType {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const AppContext = createContext<AppContextType>({
  currentPage: 'home',
  setCurrentPage: () => {},
});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <AppContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </AppContext.Provider>
  );
}; 