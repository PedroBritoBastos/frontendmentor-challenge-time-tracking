"use client";

import { Card } from "@/src/components/Card";
import data from "@/src/services/data/data.json";
import { icons } from "@/src/data/iconsMap";
import { colors } from "@/src/data/colorsMap";

import { useFilterContext } from "../hooks/useFilterContext";

export function CardGrid() {
   const {
      filter
   } = useFilterContext();

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[170px] gap-6 pt-6 lg:w-[75%] xl:grid-cols-3 lg:grid-rows-2 lg:pt-0 lg:pl-6">
         {data.map((item, index) => (
            <Card
               key={index}
               data={item}
               icon={icons.get(item.title)}
               color={colors.get(item.title) || ""}
               timeframe={item.timeframes[filter]}
            />
         ))}
      </div>
   )
}