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
} from "../types";
import { parseISO } from "date-fns";

export const ArticlesContext = createContext<ArticlesContextValue>(
   {} as ArticlesContextValue
);

export function ArticlesProvider({ children }: ArticlesProviderProps) {
   const [articles, setArticles] = useState<Article[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);
   const [showArticlesList, setShowArticlesList] = useState<boolean>(false);

   const [searchTerm, setSearchTerm] = useState<string>("");
   const [selectedAuthor, setSelectedAuthor] = useState<string>("");
   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
   const [selectedType, setSelectedType] = useState<string>("");

   const [appliedFilters, setAppliedFilters] = useState<Filters>({
      searchTerm: "",
      selectedAuthor: "",
      selectedDate: null as Date | null,
      selectedType: "",
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
      const authorFilter = (appliedFilters.selectedAuthor ?? "")
         .toLowerCase()
         .trim();
      const typeFilter = (appliedFilters.selectedType ?? "")
         .toLowerCase()
         .trim();

      return articles.filter((article) => {
         const matchesTerm =
            term === "" ||
            [
               article.type,
               article.date,
               article.title,
               article.description,
            ].some((field) => field.toLowerCase().includes(term)) ||
            article.author.some((a) => a.name.toLowerCase().includes(term));

         const matchesAuthor =
            authorFilter === "" ||
            authorFilter === "todos os autores" ||
            article.author.some((a) => a.name.toLowerCase() === authorFilter);

         const matchesDate = appliedFilters.selectedDate
            ? parseISO(article.date).toDateString() ===
              appliedFilters.selectedDate.toDateString()
            : true;

         const matchesType =
            typeFilter === "" ||
            typeFilter === "todos os temas" ||
            article.type.toLowerCase() === typeFilter;

         return matchesTerm && matchesAuthor && matchesDate && matchesType;
      });
   }, [
      appliedFilters.searchTerm,
      appliedFilters.selectedAuthor,
      appliedFilters.selectedDate,
      appliedFilters.selectedType,
      articles,
   ]);

   const handleSubmit = useCallback(() => {
      setIsLoading(true);
      setShowArticlesList(true);
      setAppliedFilters({
         searchTerm,
         selectedAuthor,
         selectedDate,
         selectedType,
      });
      setIsLoading(false);
   }, [searchTerm, selectedAuthor, selectedDate, selectedType]);

   const handleClearSearch = useCallback(() => {
      setSearchTerm("");
      setAppliedFilters({
         searchTerm: "",
         selectedAuthor: "",
         selectedDate: null,
         selectedType: "",
      });
      setShowArticlesList(false);
      setSelectedAuthor("");
      setSelectedDate(null);
      setSelectedType("");
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
         showArticlesList,
         selectedAuthor,
         setSelectedAuthor,
         selectedDate,
         setSelectedDate,
         selectedType,
         setSelectedType,
      }),
      [
         articles,
         filteredArticles,
         isLoading,
         error,
         searchTerm,
         handleSubmit,
         handleClearSearch,
         showArticlesList,
         selectedAuthor,
         setSelectedAuthor,
         selectedDate,
         setSelectedDate,
         selectedType,
         setSelectedType,
      ]
   );

   return (
      <ArticlesContext.Provider value={contextValue}>
         {children}
      </ArticlesContext.Provider>
   );
}
