"use client";

import { ArticlesContext } from "@/context/ArticlesContext";
import { JSX, useContext } from "react";
import { ArticlesCard } from "./ArticlesCard";
import { SkeletonGrid } from "../SkeletonGrid/SkeletonGrid";
import { Article } from "@/types";
import Link from "next/link";

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
         <section aria-live="polite" className="h-[80vh]">
            <p className="text-white/80 text-center mt-6">
               Nenhum artigo encontrado.
            </p>
         </section>
      );
   }

   return (
      <section className="pt-20" aria-label="Lista de artigos">
         <h4 className="h4 mb-6">
            {filteredArticles.length} resultados encontrados.
         </h4>
         <ul className="grid grid-cols-1 xl:grid-cols-4 gap-[1.875rem] mb-32">
            {filteredArticles.map((article: Article) => (
               <li key={article.id}>
                  <Link
                     href={`/articles/${article.id}`}
                     aria-label={`Ver artigo ${article.title}`}
                  >
                     <ArticlesCard article={article} />
                  </Link>
               </li>
            ))}
         </ul>
      </section>
   );
}
