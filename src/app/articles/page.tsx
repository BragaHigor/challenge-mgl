"use client";

import React, { ReactElement } from "react";
import { ArticlesProvider } from "@/context/ArticlesContext";
import { Hero } from "@/components/sections/Hero/Hero";
import { ArticlesList } from "@/components/sections/Articles/ArticlesList";

export default function Articles(): ReactElement {
   return (
      <ArticlesProvider>
         <Hero />
         <main
            aria-label="Página com todos os artigos"
            className="container mx-auto px-4 py-8 bg-black-200"
         >
            <ArticlesList />
         </main>
      </ArticlesProvider>
   );
}
