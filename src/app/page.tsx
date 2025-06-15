"use client";

import { ReactElement, useContext } from "react";
import { ArticlesList } from "@/components/sections/Articles/ArticlesList";
import { ArticlesContext } from "@/context/ArticlesContext";
import { Hero } from "@/components/sections/Hero/Hero";
import { UpcomingArticles } from "@/components/sections/UpcommingArticles/UpcomingArticles";
import { RecommendedArticles } from "@/components/sections/RecommendedArticles/RecommendedArticles";
import { AdsSection } from "@/components/sections/AdsSection/AdsSection";

export default function Home(): ReactElement {
   const { showArticlesList } = useContext(ArticlesContext);
   return (
      <>
         <Hero />
         <main className="container mx-auto px-4">
            {showArticlesList ? (
               <section aria-label="Lista de artigos" className="py-8">
                  <ArticlesList />
               </section>
            ) : (
               <>
                  <section aria-label="Artigos populares" className="py-8">
                     <UpcomingArticles />
                  </section>

                  <section aria-label="Anúncios promocionais" className="py-8">
                     <AdsSection />
                  </section>

                  <section aria-label="Artigos recomendados" className="py-8">
                     <RecommendedArticles />
                  </section>
               </>
            )}
         </main>
      </>
   );
}
