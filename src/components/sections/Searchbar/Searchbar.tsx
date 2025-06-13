"use client";

import { useContext } from "react";
import { ArticlesSearch } from "./ArticlesSearch";
import { ArticlesContext } from "@/context/ArticlesContext";

export function Searchbar() {
   const { handleSubmit } = useContext(ArticlesContext);
   return (
      <div className="bg-white/5 w-[90vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-max p-8 xl:pl-8 xl:pr-2 h-auto xl:h-[4.375rem] rounded-3xl xl:roundend-full backgrop-blur-[1.25rem] flex flex-col xl:flex-row items-center gap-6 mx-auto text-sm">
         <ArticlesSearch />
         <div>Tema</div>
         <div>Autor</div>
         <div>Data</div>
         <button onClick={handleSubmit} className="btn btn-accent">
            Pesquisar
         </button>
      </div>
   );
}
