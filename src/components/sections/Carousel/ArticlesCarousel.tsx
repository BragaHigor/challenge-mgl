"use client";

import React, { JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import { Article } from "@/types";
import { SkeletonGrid } from "../SkeletonGrid/SkeletonGrid";
import { ArticlesCard } from "../Articles/ArticlesCard";

interface ArticlesCarouselProps {
   articles: Article[];
   fallbackCount?: number;
}

export function ArticlesCarousel({
   articles,
   fallbackCount = 4,
}: ArticlesCarouselProps): JSX.Element {
   if (articles.length === 0) {
      return <SkeletonGrid itemCount={fallbackCount} />;
   }

   return (
      <Swiper
         slidesPerView={1}
         spaceBetween={30}
         pagination={{ dynamicBullets: true, clickable: true }}
         breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1310: { slidesPerView: 4 },
         }}
         modules={[Pagination]}
         className="w-full h-[31.25rem]"
      >
         {articles.map((article) => (
            <SwiperSlide key={article.id} className="select-none">
               <Link
                  href={`/articles/${article.id}`}
                  aria-label={`Ver artigo ${article.title}`}
               >
                  <ArticlesCard article={article} />
               </Link>
            </SwiperSlide>
         ))}
      </Swiper>
   );
}
