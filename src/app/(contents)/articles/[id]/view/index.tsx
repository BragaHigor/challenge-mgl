"use client";

import React, { ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";
import { ArticlesInfo } from "@/components/sections/InfoArticles/ArticlesInfo";
import { AuthorsInfo } from "@/components/sections/InfoArticles/AuthorsInfo";
import type { Article } from "@/types";

interface ArticlesDetailViewProps {
   article: Article;
}

export default function ArticlesDetailView({
   article,
}: ArticlesDetailViewProps): ReactElement {
   return (
      <>
         <Head>
            <title>{article.title} | Blog</title>
         </Head>
         <section className="min-h-screen flex items-center py-8 sm:py-32">
            <div className="container mx-auto">
               <div className="w-full max-w-[37.5rem] xl:max-w-none mx-auto">
                  <div
                     id="article-info"
                     className="relative xl:max-w-[41.875rem] h-[6.25rem] xl:h-[3.125rem] mt-16 sm:mt-0 scroll-mt-32"
                  >
                     <ArticlesInfo article={article} />
                  </div>
                  <div className="flex flex-col gap-8 xl:gap-24 xl:flex-row pt-10 pb-12 sm:py-0 xl:mb-24">
                     <div className="relative w-full h-[20rem] xl:max-w-[41.875rem] xl:h-[31.25rem] rounded-2xl overflow-hidden mb-12 xl:mb-0">
                        <Image
                           src={article.img_lg}
                           fill
                           alt={article.title}
                           className="object-cover"
                        />
                     </div>
                     <div className="flex w-full max-w-[28.75rem] flex-col justify-center gap-8 flex-1 sm:mb-12 xl:mb-0">
                        <h2 className="text-lg xl:text-[2rem] leading-[120%] font-semibold mb-4 text-accent">
                           {article.title}
                        </h2>
                        <div className="w-full max-w-[28.75rem]">
                           <AuthorsInfo article={article} />
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col xl:flex-row gap-8 xl:gap-24">
                     <div className="w-full xl:max-w-[41.875rem] flex flex-col gap-8 xl:gap-12">
                        <p className="text-accent">{article.description}</p>
                        <p className="text-accent">{article.description}</p>
                        <p className="text-accent">{article.description}</p>
                        <p className="text-accent">{article.description}</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
