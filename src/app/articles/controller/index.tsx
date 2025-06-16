import React, { ReactElement } from "react";
import type { Metadata } from "next";
import ArticlesView from "../view";

export const metadata: Metadata = {
   title: "Todos os Artigos",
   description: "Veja todos os artigos sobre arte, música e estilo de vida.",
   openGraph: {
      title: "Todos os Artigos | Blog",
      description: "Navegue por todos os artigos disponíveis.",
      url: "/articles",
   },
};

export default async function ArticlesController(): Promise<ReactElement> {
   return <ArticlesView />;
}
