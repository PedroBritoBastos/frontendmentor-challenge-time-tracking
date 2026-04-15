"use client"

import Image from "next/image";
import imageJeremy from "@/assets/images/image-jeremy.png";

import { useState } from "react";
import { useFilterContext } from "../hooks/useFilterContext";

export function Navbar() {
   const { filter, changeFilter } = useFilterContext();
   const [active, setActive] = useState(1);


   return (
      <nav className="w-full h-fit bg-[var(--color-navy-900)] text-white rounded-lg lg:w-[25%] lg:h-full">

         {/* Profile Container */}
         <div className="flex lg:flex-col items-center lg:items-start justify-center gap-4 p-6 bg-[var(--color-purple-600)] rounded-lg">
            {/* profile photo */}
            <div className="w-[5rem] h-[5rem] rounded-full border-3 border-white ">
               <Image
                  src={imageJeremy}
                  alt="profile"
                  className="h-full w-full"
               />
            </div>

            {/* name */}
            <div className="lg:my-5">
               <p className="text-xs text-[var(--background)] font-[var(--font-weight-regular)]">Report for</p>
               <p className="lg:text-4xl">Jeremy Robson</p>
            </div>
         </div>

         {/* Options Container */}
         <div className="flex lg:flex-col text-[1rem] justify-evenly lg:items-start lg:gap-2 p-6">
            <button className="hover:text-white cursor-pointer" style={{ color: filter === "daily" ? "white" : "var(--color-purple-500" }} onClick={(e) => changeFilter("daily")}>Daily</button>
            <button className="hover:text-white cursor-pointer" style={{ color: filter === "weekly" ? "white" : "var(--color-purple-500" }} onClick={(e) => changeFilter("weekly")}>Weekly</button>
            <button className="hover:text-white cursor-pointer" style={{ color: filter === "monthly" ? "white" : "var(--color-purple-500" }} onClick={(e) => changeFilter("monthly")}>Monthly</button>
         </div>
      </nav>
   )
}