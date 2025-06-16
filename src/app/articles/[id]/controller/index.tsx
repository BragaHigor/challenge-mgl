import React, { ReactElement } from "react";
import { notFound } from "next/navigation";
import type { Article } from "@/types";
import ArticlesDetailView from "../view";

interface Params {
   params: { id: string };
}

export default async function ArticlesDetailController({
   params,
}: Params): Promise<ReactElement> {
   const { id } = params;
   const res = await fetch(
      `${
         process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000"
      }/articles/${id}`,
      { next: { revalidate: 60 } }
   );
   if (!res.ok) notFound();

   const article: Article = await res.json();
   return <ArticlesDetailView article={article} />;
}
