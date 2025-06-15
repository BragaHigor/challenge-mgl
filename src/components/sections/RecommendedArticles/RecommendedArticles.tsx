"use client";

import { JSX, useContext, useMemo } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { ArticlesContext } from "@/context/ArticlesContext";
import { ArticlesCarousel } from "../Carousel/ArticlesCarousel";
import { Article } from "@/types";

export function RecommendedArticles(): JSX.Element {
   const { articles } = useContext(ArticlesContext);

   const recommendedArticles = useMemo<Article[]>(
      () => articles.filter((article) => article.recommended),
      [articles]
   );

   return (
      <section className="mb-12">
         <div className="mb-12 text-center">
            <h3 className="pretitle">Recomendados para você</h3>
            <h2 className="h2">Artigos Que Você Possa Gostar</h2>
         </div>
         <ArticlesCarousel articles={recommendedArticles} />
      </section>
   );
}
