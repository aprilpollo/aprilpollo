"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface OpenContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const OpenContext = createContext<OpenContextProps | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <OpenContext.Provider value={{ open, setOpen }}>
      {children}
    </OpenContext.Provider>
  );
};

export const useOpen = () => {
  const context = useContext(OpenContext);
  if (!context) {
    throw new Error("useOpen must be used within an SearchProvider");
  }
  return context;
};