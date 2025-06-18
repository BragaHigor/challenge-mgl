"use client";

import React, { ReactElement } from "react";
import Head from "next/head";
import { UpcomingArticles } from "@/components/sections/UpcommingArticles/UpcomingArticles";
import { AdsSection } from "@/components/sections/AdsSection/AdsSection";
import { RecommendedArticles } from "@/components/sections/RecommendedArticles/RecommendedArticles";
import { Hero } from "@/components/sections/Hero/Hero";

export default function HomeView(): ReactElement {
   return (
      <>
         <Head>
            <title>Página Inicial | Blog</title>
            <meta
               name="description"
               content="Bem-vindo ao Blog: seu hub de arte, música e lifestyle."
            />
         </Head>
         <Hero />
         <main className="container mx-auto px-4">
            <section aria-label="Artigos populares" className="py-8">
               <UpcomingArticles />
            </section>
            <section aria-label="Anúncios promocionais" className="py-8">
               <AdsSection />
            </section>
            <section aria-label="Artigos recomendados" className="py-8">
               <RecommendedArticles />
            </section>
         </main>
      </>
   );
}
