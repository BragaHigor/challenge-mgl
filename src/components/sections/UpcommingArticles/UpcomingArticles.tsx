"use client";

import { useCallback, useContext, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArticlesContext } from "@/context/ArticlesContext";
import { ArticlesCard } from "../Articles/ArticlesCard";
import { SkeletonGrid } from "../SkeletonGrid/SkeletonGrid";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types";

export function UpcomingArticles() {
   const { articles } = useContext(ArticlesContext);
   const [category, setCategory] = useState<string>("all");

   const filteredArticles = useMemo<Article[]>(() => {
      return category === "all"
         ? articles
         : articles.filter((a) => a.type === category);
   }, [articles, category]);

   const handleCategoryChange = useCallback((value: string) => {
      setCategory(value);
   }, []);

   return (
      <section className="mb-16">
         <div className="mb-12 text-center">
            <h3 className="pretitle">Os principais temas</h3>
            <h2 className="h2">Artigos Populares</h2>
         </div>
         <div className="flex flex-col xl:flex-row items-center justify-between mb-12">
            <Tabs
               value={category}
               onValueChange={handleCategoryChange}
               className="bg-transparent w-full max-w-[37.5rem] h-full flex justify-center items-center mb-12 xl:mb-0"
            >
               <TabsList className="flex flex-col lg:flex-row gap-6 bg-transparent w-full h-full">
                  <TabsTrigger value="all">Todos</TabsTrigger>
                  <TabsTrigger value="sport">
                     <span aria-hidden="true" className="mr-2">
                        <Image
                           src="/assets/categories/sport.svg"
                           width={18}
                           height={18}
                           alt=""
                        />
                     </span>
                     Sport
                  </TabsTrigger>
                  <TabsTrigger value="music">
                     <span aria-hidden="true" className="mr-2">
                        <Image
                           src="/assets/categories/music.svg"
                           width={18}
                           height={18}
                           alt=""
                        />
                     </span>
                     Music
                  </TabsTrigger>
                  <TabsTrigger value="food">
                     <span aria-hidden="true" className="mr-2">
                        <Image
                           src="/assets/categories/food.svg"
                           width={18}
                           height={18}
                           alt=""
                        />
                     </span>
                     Food
                  </TabsTrigger>
                  <TabsTrigger value="art">
                     <span aria-hidden="true" className="mr-2">
                        <Image
                           src="/assets/categories/art.svg"
                           width={18}
                           height={18}
                           alt=""
                        />
                     </span>
                     Art
                  </TabsTrigger>
               </TabsList>
            </Tabs>

            <Link
               href="#"
               className="uppercase border-b-2 border-accent text-sm font-semibold text-accent"
            >
               Ver todos os artigos
            </Link>
         </div>
         {filteredArticles.length > 0 ? (
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
               {filteredArticles.map((article) => (
                  <SwiperSlide key={article.id} className="select-none">
                     <Link href="">
                        <ArticlesCard article={article} />
                     </Link>
                  </SwiperSlide>
               ))}
            </Swiper>
         ) : (
            <SkeletonGrid itemCount={4} />
         )}
      </section>
   );
}
