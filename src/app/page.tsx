"use client";

import { useContext } from "react";
import { ArticlesList } from "@/components/sections/Articles/ArticlesList";
import { ArticlesContext } from "@/context/ArticlesContext";
import { Hero } from "@/components/sections/Hero/Hero";

export default function Home() {
   const { showArticlesList } = useContext(ArticlesContext);
   return (
      <div>
         <Hero />
         <div className="flex flex-col justify-center items-center"></div>
         {showArticlesList ? (
            <div className="container mx-auto">
               <ArticlesList />
            </div>
         ) : (
            <div>
               <div className="container mx-auto">
                  <div>PRÓXIMOS ARTIGOS</div>
                  <div>SEÇÃO DE PROPAGANDA</div>
                  <div>ARTIGOS RECOMENDADOS</div>
               </div>
            </div>
         )}
      </div>
   );
}
