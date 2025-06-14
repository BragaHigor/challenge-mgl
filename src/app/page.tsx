"use client";

import { useContext } from "react";
import { ArticlesList } from "@/components/sections/Articles/ArticlesList";
import { Searchbar } from "@/components/sections/Searchbar/Searchbar";
import { ArticlesContext } from "@/context/ArticlesContext";

export default function Home() {
   const { showArticlesList, handleClearSearch } = useContext(ArticlesContext);
   return (
      <div>
         <div className="flex flex-col justify-center items-center">
            <Searchbar />
            <button className="text-accent" onClick={() => handleClearSearch()}>
               limpar busca
            </button>
         </div>
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
