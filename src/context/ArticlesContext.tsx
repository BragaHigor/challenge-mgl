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
      const today = appliedFilters.selectedDate;

      const selectedDateString = today
         ? today.toISOString().slice(0, 10)
         : null;

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
            authorFilter === "Todos os autores" ||
            article.author.some((a) => a.name.toLowerCase() === authorFilter);

         const matchesDate = selectedDateString
            ? article.date === selectedDateString
            : true;

         const matchesType = appliedFilters.selectedType
            ? article.type.toLowerCase() ===
              appliedFilters.selectedType.toLowerCase()
            : true;

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
      setTimeout(() => {
         setIsLoading(false);
      }, 2500);
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
