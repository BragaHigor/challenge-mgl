"use client";

import { useContext } from "react";
import { ArticlesContext } from "@/context/ArticlesContext";
import { BiCalendar, BiLayer } from "react-icons/bi";
import { Article } from "@/types";

interface ArticlesInfoProps {
   article: Article;
}

export function ArticlesInfo({ article }: ArticlesInfoProps) {
   const { formatDate } = useContext(ArticlesContext);

   const formattedDate = formatDate(article.date);
   const dateTimeAttr = `${article.date}T${article.hour}`;

   return (
      <div className="flex flex-col xl:flex-row gap-4 items-start justify-between">
         <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
               <BiCalendar
                  aria-hidden="true"
                  className="text-2xl text-accent"
               />
               <time dateTime={dateTimeAttr}>
                  Publicado: {formattedDate} ● {article.hour}
               </time>
            </div>
         </div>
         <div className="flex items-center gap-2">
            <BiLayer className="text-2xl text-accent" />
            <p className="capitalize">Tema: {article.type}</p>
         </div>
      </div>
   );
}
