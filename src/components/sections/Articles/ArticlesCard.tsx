import { ArticlesContext } from "@/context/ArticlesContext";
import { Article } from "@/types";
import Image from "next/image";
import { JSX, useContext } from "react";
import { BiCalendar, BiTime, BiUser } from "react-icons/bi";

interface ArticleCardProps {
   article: Article;
}

export function ArticlesCard({ article }: ArticleCardProps): JSX.Element {
   const { formatDate } = useContext(ArticlesContext);

   const dbDate = article.date;
   const formattedDate = formatDate(dbDate);

   return (
      <article className="bg-secondary/20  hover:bg-secondary/50 transition-colors rounded-3xl overflow-hidden flex flex-col justify-start h-[27.5rem] w-[20rem] sm:w-full mx-auto sm:mx-0 p-4">
         <div className="relative w-full h-[20rem] mb-10">
            <Image
               src={article.img_sm}
               alt={article.title}
               fill
               quality={100}
               sizes="(max-width: 640px) 100vw, 20rem"
               className="rounded-2xl object-cover"
            />
            <span className="text-primary absolute -bottom-6 left-4 bg-accent w-[6.875rem] h-12 text-[0.8125rem] uppercase font-medium rounded-full flex items-center justify-center">
               {article.type}
            </span>
         </div>
         <div className="pl-4 flex flex-col justify-between h-1/2">
            <div>
               <div className="flex items-center text-accent mb-2 gap-3">
                  <div className="flex items-center gap-1">
                     <BiCalendar aria-hidden="true" />
                     <time
                        dateTime={formattedDate}
                        className="text-[0.9375rem] text-lightText/70"
                     >
                        {formattedDate}
                     </time>
                  </div>
                  <div className="flex items-center gap-1">
                     <BiTime aria-hidden="true" />
                     <span className="text-[0.9375rem] text-lightText/70">
                        {article.hour}
                     </span>
                  </div>
               </div>

               <h4 className="h4 ">{article.title}</h4>
            </div>
            <div className="flex items-center gap-2 pb-2">
               <BiUser aria-hidden="true" className="text-xl text-accent" />
               <p className="text-sm font-light text-lightText/70">
                  {article.author[0].name}
               </p>
            </div>
         </div>
      </article>
   );
}
