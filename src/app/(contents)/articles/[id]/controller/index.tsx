import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Article } from "@/types";
import ArticlesDetailView from "../view";

interface Params {
   params: { id: string };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
   const { id } = await params;
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`);
   if (!res.ok) return { title: "Artigo não encontrado" };
   const article: Article = await res.json();
   return {
      title: `Artigo ${article.id} | ${article.title}`,
      description: article.description.slice(0, 150),
      openGraph: {
         title: article.title,
         description: article.description.slice(0, 150),
         url: `/articles/${id}`,
         images: [
            {
               url: article.img_lg,
               width: 1200,
               height: 630,
               alt: article.title,
            },
         ],
         type: "article",
      },
      twitter: {
         card: "summary_large_image",
         title: article.title,
         description: article.description.slice(0, 150),
         images: [article.img_lg],
      },
      robots: {
         index: true,
         follow: true,
      },
   };
}

export default async function ArticlesDetailController({ params }: Params) {
   const { id } = await params;
   const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`,
      { next: { revalidate: 60 } }
   );

   if (!res.ok) notFound();

   const article: Article = await res.json();

   return <ArticlesDetailView article={article} />;
}
