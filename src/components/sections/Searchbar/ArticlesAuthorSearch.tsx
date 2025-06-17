"use client";

import { JSX, useCallback, useContext, useMemo } from "react";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { ArticlesContext } from "@/context/ArticlesContext";
import { BiUser } from "react-icons/bi";

export function ArticlesAuthorSearch(): JSX.Element {
   const { articles, selectedAuthor, setSelectedAuthor } =
      useContext(ArticlesContext);

   const uniqueAuthors = useMemo(() => {
      const names = articles.flatMap((article) =>
         article.author.map((a) => a.name)
      );
      return ["Todos os autores", ...Array.from(new Set(names))];
   }, [articles]);

   const handleChange = useCallback(
      (value: string) => {
         setSelectedAuthor(value);
      },
      [setSelectedAuthor]
   );

   return (
      <div className="flex items-center gap-2.5 w-full xl:w-[11.875rem] select-none">
         <span className="text-lg text-primary" aria-hidden="true">
            <BiUser />
         </span>
         <Select
            value={selectedAuthor}
            onValueChange={handleChange}
            aria-label="Filtrar por autor"
         >
            <SelectTrigger className="bg-transparent border-none focus:ring-0 focus:ring-offset-0 text-left p-0 text-primary">
               <SelectValue placeholder="Autores" />
            </SelectTrigger>
            <SelectContent>
               <SelectGroup>
                  {uniqueAuthors.map((author) => (
                     <SelectItem
                        key={author}
                        value={author === "Todos os autores" ? null : author}
                     >
                        {author}
                     </SelectItem>
                  ))}
               </SelectGroup>
            </SelectContent>
         </Select>
      </div>
   );
}
