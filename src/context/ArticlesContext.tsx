"use client";

import { createContext, useEffect, useState, useMemo, ReactNode } from "react";
import { Article, ArticlesContextValue } from "./types";

export const ArticlesContext = createContext<ArticlesContextValue>({
   articles: [],
   isLoading: false,
   error: null,
});

interface ArticlesProviderProps {
   children: ReactNode;
}

export function ArticlesProvider({ children }: ArticlesProviderProps) {
   const [articles, setArticles] = useState<Article[]>([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchArticles = async () => {
         setIsLoading(true);
         setError(null);

         try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const res = await fetch(`${apiUrl}/articles`);

            if (!res.ok) {
               throw new Error(
                  `Erro ao buscar artigos: ${res.status} ${res.statusText}`
               );
            }
            const data: Article[] = await res.json();
            setArticles(data);
         } catch (err: unknown) {
            if (err instanceof Error) {
               setError(err.message);
            } else {
               setError(String(err));
            }
         } finally {
            setIsLoading(false);
         }
      };

      fetchArticles();
   }, []);

   const contextValue = useMemo<ArticlesContextValue>(
      () => ({ articles, isLoading, error }),
      [articles, isLoading, error]
   );

   return (
      <ArticlesContext.Provider value={contextValue}>
         {children}
      </ArticlesContext.Provider>
   );
}
