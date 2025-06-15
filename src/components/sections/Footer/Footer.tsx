"use client";

import Image from "next/image";
import Link from "next/link";
import { JSX, useMemo } from "react";

interface SocialIcon {
   src: string;
   path: string;
}

const SOCIAL_ICONS: SocialIcon[] = [
   { src: "/assets/footer/facebook.svg", path: "#" },
   { src: "/assets/footer/instagram.svg", path: "#" },
   { src: "/assets/footer/pinterest.svg", path: "#" },
   { src: "/assets/footer/x.svg", path: "#" },
   { src: "/assets/footer/youtube.svg", path: "#" },
];

export function Footer(): JSX.Element {
   const iconLinks = useMemo(
      () =>
         SOCIAL_ICONS.map((icon, id) => (
            <Link
               href={icon.path}
               key={id}
               className="relative w-[1.25rem] h-[1.25rem] text-primary"
               aria-label={`Visitar ${
                  icon.src.split("/").pop()?.split(".")[0]
               }`}
            >
               <Image
                  src={icon.src}
                  alt="Icones redes sociais"
                  width={20}
                  height={20}
               />
            </Link>
         )),
      []
   );

   return (
      <footer className="bg-accent bg-pattern bg-cover bg-blend-multiply pt-16">
         <div className="container mx-auto border-b border-white/40">
            <div className="flex flex-col max-w-[46.875rem] mx-auto text-center">
               <div className="mb-9">
                  <h2 className="h2 mb-3">Seus Artigos Sempre Com Você</h2>
                  <p>
                     Cadastre-se em nossa newsletter para receber artigos
                     exclusivos e dicas privilegiadas.
                  </p>
               </div>
               <form
                  className="relative flex items-center mb-[4.5rem]"
                  action="#"
               >
                  <label htmlFor="footer-email" className="sr-only">
                     Digite seu e-mail para newsletter
                  </label>
                  <input
                     id="footer-email"
                     name="email"
                     type="email"
                     placeholder="Digite seu e-mail"
                     className="pl-8 w-full h-[3.75rem] rounded-full outline-none placeholder:text-primary/80 text-primary text-sm"
                  />
                  <button
                     type="submit"
                     aria-label="Cadastrar newsletter"
                     className="bg-secondary hover:bg-secondary-hover transition-colors w-[7.125rem] h-[3.25rem] rounded-full text-sm uppercase absolute right-1"
                  >
                     Cadastre-se
                  </button>
               </form>
               <div className="mb-[4.5rem] flex gap-8 justify-center">
                  {iconLinks}
               </div>
            </div>
         </div>
         <div className="py-8">
            <div className="container mx-auto">
               <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                  <Link
                     href="/"
                     aria-label="Voltar ao topo"
                     className="relative flex w-[4.875rem] h-[1.875rem]"
                  >
                     <Image src="/assets/footer/logo.svg" alt="Logo" fill />
                  </Link>
                  <p className="text-sm">
                     Copyright &copy; 2025. Todos os direitos reservados.
                  </p>
               </div>
            </div>
         </div>
      </footer>
   );
}
