"use client";

import Image from "next/image";
import iconEllipsis from "@/assets/images/icon-ellipsis.svg";

import { useFilterContext } from "../hooks/useFilterContext";

type DataProps = {
   title: string;
   timeframes: {
      daily: {
         current: number;
         previous: number;
      },
      weekly: {
         current: number;
         previous: number;
      },
      monthly: {
         current: number;
         previous: number;
      }
   }
}

type CardProps = {
   data: DataProps;
   icon: string;
   color: string;
   timeframe: {
      current: number,
      previous: number
   };
}

export function Card({ data, icon, color, timeframe }: CardProps) {

   const { filter } = useFilterContext();

   const textMap = new Map([
      ["daily", "day"],
      ["weekly", "week"],
      ["monthly", "month"]
   ])

   return (
      <div className="w-full h-full flex flex-col justify-end text-white rounded-lg relative overflow-hidden" style={{ backgroundColor: `var(${color})` }}>
         <Image
            src={icon}
            alt="icon"
            className="w-20 h-20 absolute top-0 right-4"
         />
         <div className="bg-[var(--color-navy-900)] p-6 rounded-lg absolute bottom-0 w-full">
            <div className="flex items-center justify-between">
               <p className="font-[var(--font-weight-medium)]">{data.title}</p>
               <Image
                  src={iconEllipsis}
                  alt="ellipsis"
               />
            </div>
            <div className="flex items-center justify-between lg:flex-col lg:items-start">
               <p className="text-[2rem]">{`${timeframe.current}hrs`}</p>
               <p className="text-sm text-[var(--color-purple-500)]">{`Last ${textMap.get(filter)} - ${timeframe.previous}hrs`}</p>
            </div>
         </div>
      </div>
   )
}