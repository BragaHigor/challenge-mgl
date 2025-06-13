"use client";

import {
   createContext,
   useEffect,
   useState,
   useMemo,
   useCallback,
} from "react";
import {
   Article,
   ArticlesContextValue,
   ArticlesProviderProps,
   Filters,
} from "./types";

export const ArticlesContext = createContext<ArticlesContextValue>(
   {} as ArticlesContextValue
);

export function ArticlesProvider({ children }: ArticlesProviderProps) {
   const [articles, setArticles] = useState<Article[]>([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   const [searchTerm, setSearchTerm] = useState("");
   const [appliedFilters, setAppliedFilters] = useState<Filters>({
      searchTerm: "",
   });

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
               setError("Erro desconhecido");
            }
         } finally {
            setIsLoading(false);
         }
      };

      fetchArticles();
   }, []);

   const filteredArticles = useMemo(() => {
      const term = appliedFilters.searchTerm.toLowerCase().trim();
      if (!term) return articles;

      return articles.filter((article) => {
         const inType = article.type.toLowerCase().includes(term);
         const inDate = article.date.toLowerCase().includes(term);
         const inTitle = article.title.toLowerCase().includes(term);
         const inDescription = article.description.toLowerCase().includes(term);
         const inAuthor = article.author.some((a) =>
            a.name.toLowerCase().includes(term)
         );

         return inType || inDate || inTitle || inDescription || inAuthor;
      });
   }, [articles, appliedFilters.searchTerm]);

   const handleSubmit = useCallback(() => {
      setAppliedFilters({ searchTerm });
   }, [searchTerm]);

   const handleClearSearch = useCallback(() => {
      setSearchTerm("");
      setAppliedFilters({ searchTerm: "" });
   }, []);

   const contextValue = useMemo<ArticlesContextValue>(
      () => ({
         articles,
         filteredArticles,
         isLoading,
         error,
         searchTerm,
         setSearchTerm,
         handleSubmit,
         handleClearSearch,
      }),
      [
         articles,
         filteredArticles,
         isLoading,
         error,
         searchTerm,
         handleSubmit,
         handleClearSearch,
      ]
   );

   return (
      <ArticlesContext.Provider value={contextValue}>
         {children}
      </ArticlesContext.Provider>
   );
}
