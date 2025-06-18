"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ArticleDetailLoading() {
   return (
      <section
         role="status"
         aria-busy="true"
         aria-label="Carregando artigo"
         className="min-h-screen flex flex-col xl:flex-row gap-6 p-4 xl:p-16"
      >
         <div className="flex-1">
            <div className="flex flex-row justify-between w-[50rem]">
               <Skeleton className="w-[15rem] h-4 rounded bg-secondary/50 mb-10" />
               <Skeleton className="w-[8rem] h-4 rounded bg-secondary/50 mb-10" />
            </div>
            <Skeleton className="h-[30rem] w-[50rem] rounded-2xl bg-secondary/50" />
            <div className="mt-6 space-y-4">
               {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton
                     key={i}
                     className="w-[50rem] h-4 rounded bg-secondary/50"
                  />
               ))}
            </div>
         </div>
         <aside className="xl:w-1/3 space-y-6 mt-20">
            <Skeleton className="h-8 rounded bg-secondary/50 w-[25rem]" />
            <div className="p-4 bg-secondary/20 rounded-2xl space-y-4 w-[25rem]">
               <Skeleton className="w-32 h-4 rounded bg-secondary/50" />
               <div className="flex items-center gap-4">
                  <Skeleton className="w-12 h-12 rounded-full bg-secondary/50" />
                  <div className="flex-1 space-y-2 p-10">
                     <Skeleton className="w-1/2 h-4 rounded bg-secondary/50" />
                     <div className="flex gap-2">
                        {Array.from({ length: 3 }).map((_, j) => (
                           <Skeleton
                              key={j}
                              className="w-6 h-6 rounded-full bg-secondary/50"
                           />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </aside>
      </section>
   );
}
