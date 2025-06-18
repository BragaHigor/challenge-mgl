"use client";

import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover } from "@/components/ui/popover";
import { BiCalendar, BiChevronDown } from "react-icons/bi";
import { JSX, useCallback, useContext, useMemo } from "react";
import { ArticlesContext } from "@/context/ArticlesContext";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { ptBR } from "date-fns/locale";

export function ArticlesDateSearch(): JSX.Element {
   const { selectedDate, setSelectedDate } = useContext(ArticlesContext);

   const handleDateChange = useCallback(
      (date?: Date) => {
         setSelectedDate(date);
      },
      [setSelectedDate]
   );

   const displayDate = useMemo(() => {
      return selectedDate
         ? format(selectedDate, "PPP", { locale: ptBR })
         : "Data";
   }, [selectedDate]);

   return (
      <div className="flex items-center gap-2.5 w-full xl:w-[11.875rem] select-none">
         <span className="text-lg text-primary" aria-hidden="true">
            <BiCalendar />
         </span>
         <Popover>
            <PopoverTrigger asChild>
               <button
                  className="flex items-center justify-between w-full bg-transparent border-none focus:ring-0 focus:outline-none text-left p-0"
                  aria-label="Selecionar data"
               >
                  <span className="truncate text-primary">{displayDate}</span>
                  <BiChevronDown
                     className="ml-2 text-[1.625rem] text-primary"
                     aria-hidden="true"
                  />
               </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-secondary border-0 text-white z-10">
               <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateChange}
               />
            </PopoverContent>
         </Popover>
      </div>
   );
}
