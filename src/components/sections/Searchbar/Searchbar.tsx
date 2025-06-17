"use client";

import { JSX, useContext } from "react";
import { ArticlesContext } from "@/context/ArticlesContext";
import { ArticlesSearch } from "./ArticlesSearch";
import { ArticlesAuthorSearch } from "./ArticlesAuthorSearch";
import { ArticlesDateSearch } from "./ArticlesDateSearch";
import { ArticlesTypeSearch } from "./ArticlesTypeSearch";
import { BiRightArrowAlt } from "react-icons/bi";

export function Searchbar(): JSX.Element {
   const { handleSubmit } = useContext(ArticlesContext);
   return (
      <div className="bg-accent w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-max p-8 xl:pl-8 xl:pr-2 h-auto xl:h-[4.375rem] rounded-3xl xl:roundend-full backgrop-blur-[1.25rem] flex flex-col xl:flex-row items-center gap-6 mx-auto text-sm z-50">
         <ArticlesSearch />
         <div className="hidden xl:flex border-l border-accent/10 h-5" />
         <ArticlesAuthorSearch />
         <div className="hidden xl:flex border-l border-accent/10 h-5" />
         <ArticlesDateSearch />
         <div className="hidden xl:flex border-l border-accent/10 h-5" />
         <ArticlesTypeSearch />
         <button
            onClick={handleSubmit}
            aria-label="Buscar artigos"
            className="w-full xl:w-[3.375rem] h-[3.375rem] rounded-[2.5rem] xl:rounded-full bg-secondary hover:bg-secondary-hover transition-all flex items-center justify-center"
         >
            <BiRightArrowAlt className="text-3xl text-primary" />
         </button>
      </div>
   );
}
