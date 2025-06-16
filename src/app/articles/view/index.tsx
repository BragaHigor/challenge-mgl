"use client";

import React, { ReactElement } from "react";
import Head from "next/head";
import { Hero } from "@/components/sections/Hero/Hero";
import { ArticlesList } from "@/components/sections/Articles/ArticlesList";

export default function ArticlesView(): ReactElement {
   return (
      <>
         <Head>
            <title>Todos os Artigos | Blog</title>
         </Head>
         <Hero />
         <main
            aria-label="Página com todos os artigos"
            className="container mx-auto px-4 py-8 bg-black-200"
         >
            <ArticlesList />
         </main>
      </>
   );
}
