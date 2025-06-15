import React, { JSX } from "react";
import Image from "next/image";
import Link from "next/link";

export function AdsSection(): JSX.Element {
   return (
      <section
         className=" w-full md:h-[22.75rem] bg-accent mb-16 rounded-2xl bg-pattern bg-cover bg-blend-multiply p-10 xl:p-20 flex items-center justify-center"
         aria-label="Anúncio de ofertas de app"
      >
         <div className="flex flex-col xl:flex-row items-center gap-6">
            <div className="flex-1 text-center xl:text-left">
               <h2 className="h2 mb-4">Inove seu dia a dia com tecnologia.</h2>
               <p className="max-w-[25.625rem] mx-auto xl:mx-0">
                  Smartphones, fones, acessórios e muito mais com ofertas
                  especiais. Baixe o app e aproveite os descontos 💥📱🎧
               </p>
            </div>
            <div className="flex-1 flex flex-col md:flex-row items-center justify-end gap-4">
               <Link
                  href="#"
                  aria-label="Baixar na App Store"
                  className="relative flex w-[12rem] h-[4rem]"
               >
                  <Image
                     src="/assets/ads/app-store.svg"
                     alt="Download na App Store"
                     fill
                     className="object-contain"
                  />
               </Link>
               <Link
                  href="#"
                  aria-label="Baixar no Google Play"
                  className="relative flex w-[13.5rem] h-[4rem]"
               >
                  <Image
                     src="/assets/ads/google-play.svg"
                     alt="Download no Google Play"
                     fill
                     className="object-contain"
                  />
               </Link>
            </div>
         </div>
      </section>
   );
}
