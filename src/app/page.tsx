"use client";

import { useContext } from "react";
import { ArticlesList } from "@/components/sections/Articles/ArticlesList";
import { ArticlesContext } from "@/context/ArticlesContext";
import { Hero } from "@/components/sections/Hero/Hero";
import { UpcomingArticles } from "@/components/sections/UpcommingArticles/UpcomingArticles";

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
                  <UpcomingArticles />
                  <div>SEÇÃO DE PROPAGANDA</div>
                  <div>ARTIGOS RECOMENDADOS</div>
               </div>
            </div>
         )}
      </div>
   );
}
