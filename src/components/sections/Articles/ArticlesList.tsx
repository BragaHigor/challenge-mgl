"use client";

import { ArticlesContext } from "@/context/ArticlesContext";
import { JSX, useContext } from "react";
import { Articles } from "./Articles";
import { SkeletonGrid } from "../SkeletonGrid/SkeletonGrid";
import { Article } from "@/context/types";

export function ArticlesList(): JSX.Element {
   const { filteredArticles, isLoading, error } = useContext(ArticlesContext);

   if (error) {
      return (
         <section role="alert" className="p-4 text-red-600">
            <p>Erro: {error}</p>
         </section>
      );
   }

   if (isLoading) {
      return (
         <section
            role="status"
            aria-busy="true"
            aria-label="Carregando artigos"
         >
            <SkeletonGrid />
         </section>
      );
   }

   if (filteredArticles.length === 0) {
      return (
         <section aria-live="polite" className="p-4 text-center">
            <p>Nenhum artigo encontrado.</p>
         </section>
      );
   }

   return (
      <section aria-label="Lista de artigos">
         <ul>
            {filteredArticles.map((article: Article) => (
               <li key={article.id}>
                  <Articles articles={article} />
               </li>
            ))}
         </ul>
      </section>
   );
}
