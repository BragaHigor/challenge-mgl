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
import { getTriggerClassName } from "../../../../utils/functions/getTriggerClassName";

export function ArticlesAuthorSearch(): JSX.Element {
   const { articles, selectedAuthor, setSelectedAuthor } =
      useContext(ArticlesContext);

   const uniqueAuthors = useMemo(() => {
      const names = articles.flatMap((a) => a.author.map((x) => x.name));
      return ["Todos os autores", ...Array.from(new Set(names))];
   }, [articles]);

   const handleChange = useCallback(
      (value: string) => {
         setSelectedAuthor(value);
      },
      [setSelectedAuthor]
   );

   const triggerClassName = getTriggerClassName(!!selectedAuthor);

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
            <SelectTrigger className={triggerClassName}>
               <SelectValue placeholder="Autores" />
            </SelectTrigger>
            <SelectContent>
               <SelectGroup>
                  {uniqueAuthors.map((author) => (
                     <SelectItem key={author} value={author}>
                        {author}
                     </SelectItem>
                  ))}
               </SelectGroup>
            </SelectContent>
         </Select>
      </div>
   );
}
