"use client";

import React, { JSX, useCallback, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArticlesContext } from "@/context/ArticlesContext";

export function Header(): JSX.Element {
   const { handleClearSearch } = useContext(ArticlesContext);

   const onClear = useCallback(() => {
      handleClearSearch();
   }, [handleClearSearch]);

   return (
      <header className="absolute inset-x-0 z-10">
         <div className="container mx-auto h-full border-b border-accent/10 py-4 xl:py-6">
            <div className="flex justify-between items-center h-full">
               <Link
                  href="/"
                  onClick={onClear}
                  aria-label="Ir para a página inicial"
               >
                  <Image
                     src="/assets/header/logo.svg"
                     width={30}
                     height={30}
                     alt="Logo do Blog"
                     priority
                  />
               </Link>
            </div>
         </div>
      </header>
   );
}
