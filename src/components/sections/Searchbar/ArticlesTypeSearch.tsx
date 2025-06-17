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
import { useCallback, useContext, useMemo } from "react";
import { ArticlesContext } from "@/context/ArticlesContext";
import { getTriggerClassName } from "../../../../utils/functions/getTriggerClassName";

export function ArticlesTypeSearch() {
   const { articles, selectedType, setSelectedType } =
      useContext(ArticlesContext);

   const uniqueTypes = useMemo(() => {
      const types = articles.map((a) => a.type);
      return ["Todos os temas", ...Array.from(new Set(types))];
   }, [articles]);

   const handleChange = useCallback(
      (value: string) => {
         setSelectedType(value);
      },
      [setSelectedType]
   );
   const triggerClassName = getTriggerClassName(!!selectedType);

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
            <SelectTrigger className={triggerClassName}>
               <SelectValue placeholder="Temas" />
            </SelectTrigger>
            <SelectContent>
               <SelectGroup>
                  {uniqueTypes.map((type) => (
                     <SelectItem key={type} value={type} className="capitalize">
                        {type}
                     </SelectItem>
                  ))}
               </SelectGroup>
            </SelectContent>
         </Select>
      </div>
   );
}
