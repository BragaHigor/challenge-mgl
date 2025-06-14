import React, { JSX } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header(): JSX.Element {
   return (
      <header className="absolute inset-x-0 z-10">
         <div className="container mx-auto h-full border-b border-white/10 py-4 xl:py-6">
            <div className="flex justify-between items-center h-full">
               <Link href="/" aria-label="Ir para a página inicial">
                  <Image
                     src="/assets/header/logo.svg"
                     width={50}
                     height={50}
                     alt="Logo do Blog"
                     priority
                  />
               </Link>
            </div>
         </div>
      </header>
   );
}
