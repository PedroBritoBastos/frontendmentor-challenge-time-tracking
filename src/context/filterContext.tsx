"use client"

import { createContext } from "react"
import { useState } from "react"

import data from "@/src/services/data/data.json";

type Props = {
   filter: string;
   changeFilter: (mode: string) => void;
}

export const Context = createContext<Props | null>(null);

export default function Provider({ children }: { children: React.ReactNode }) {
   const [filter, setFilter] = useState("daily");

   function changeFilter(mode: string) {
      setFilter(mode);
   }

   return (
      <Context.Provider value={{ filter, changeFilter }}>
         {children}
      </Context.Provider>
   )
}