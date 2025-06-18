"use client";

import { useMemo } from "react";
import { ptBR } from "date-fns/locale";
import { format, parseISO } from "date-fns";
import { BiCalendar, BiLayer } from "react-icons/bi";
import { Article } from "@/types";

interface ArticlesInfoProps {
   article: Article;
}

export function ArticlesInfo({ article }: ArticlesInfoProps) {
   const dbDate = article.date;
   const displayDate = useMemo(() => {
      const dateObj = parseISO(dbDate);
      return dbDate
         ? format(dateObj, "dd 'de' MMM, yyyy", { locale: ptBR })
         : "Data";
   }, [dbDate]);

   const dateTimeAttr = `${displayDate}T${article.hour}`;

   return (
      <div className="flex flex-col xl:flex-row gap-4 items-start justify-between">
         <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
               <BiCalendar
                  aria-hidden="true"
                  className="text-2xl text-accent"
               />
               <time dateTime={dateTimeAttr} className="text-lightText">
                  Publicado: {displayDate} ● {article.hour}
               </time>
            </div>
         </div>
         <div className="flex items-center gap-2">
            <BiLayer className="text-2xl text-accent" />
            <p className="capitalize text-lightText">Tema: {article.type}</p>
         </div>
      </div>
   );
}
