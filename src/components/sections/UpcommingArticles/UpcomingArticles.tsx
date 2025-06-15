"use client";

import { JSX, useCallback, useContext, useMemo, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArticlesContext } from "@/context/ArticlesContext";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types";
import { ArticlesCarousel } from "../Carousel/ArticlesCarousel";

const CATEGORY_CONFIG = [
   { value: "all", label: "Todos", icon: null },
   { value: "sport", label: "Sport", icon: "/assets/categories/sport.svg" },
   { value: "music", label: "Music", icon: "/assets/categories/music.svg" },
   { value: "food", label: "Food", icon: "/assets/categories/food.svg" },
   { value: "art", label: "Art", icon: "/assets/categories/art.svg" },
];

export function UpcomingArticles(): JSX.Element {
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
                  {CATEGORY_CONFIG.map(({ value, label, icon }) => (
                     <TabsTrigger
                        key={value}
                        value={value}
                        className="flex items-center"
                     >
                        {icon && (
                           <span aria-hidden="true" className="mr-2">
                              <Image src={icon} width={18} height={18} alt="" />
                           </span>
                        )}
                        {label}
                     </TabsTrigger>
                  ))}
               </TabsList>
            </Tabs>
            <Link
               href="#"
               className="uppercase border-b-2 border-accent text-sm font-semibold text-accent"
            >
               Ver todos os artigos
            </Link>
         </div>
         <ArticlesCarousel articles={filteredArticles} />
      </section>
   );
}
