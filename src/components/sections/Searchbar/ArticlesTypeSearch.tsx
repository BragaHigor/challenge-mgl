"use client";

import { BiLayer } from "react-icons/bi";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { useCallback, useContext } from "react";
import { ArticlesContext } from "@/context/ArticlesContext";

export function ArticlesTypeSearch() {
   const { articles, selectedType, setSelectedType } =
      useContext(ArticlesContext);

   const uniqueTypes = [
      "Todos os temas",
      ...new Set(articles.map((article) => article.type)),
   ];

   const handleChange = useCallback(
      (value: string) => {
         setSelectedType(value);
      },
      [setSelectedType]
   );

   return (
      <div className="flex items-center gap-2.5 w-full xl:w-[11.875rem] select-none">
         <span className="text-lg text-primary" aria-hidden="true">
            <BiLayer />
         </span>
         <Select
            value={selectedType}
            onValueChange={handleChange}
            aria-label="Filtrar por tema"
         >
            <SelectTrigger className="bg-transparent border-none focus:ring-0 focus:ring-offset-0 text-left p-0 capitalize text-primary">
               <SelectValue placeholder="Temas" />
            </SelectTrigger>
            <SelectContent>
               <SelectGroup>
                  {uniqueTypes.map((type) => (
                     <SelectItem
                        key={type}
                        value={type === "Todos os temas" ? null : type}
                        className="capitalize"
                     >
                        {type}
                     </SelectItem>
                  ))}
               </SelectGroup>
            </SelectContent>
         </Select>
      </div>
   );
}
