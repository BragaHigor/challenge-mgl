import { ReactElement } from "react";
import Link from "next/link";
import { BackgroundCircles } from "@/components/background/BackgroundCircles";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "404 – Página não encontrada | Blog",
   description:
      "Oops! A página que você procura não foi encontrada em Blog. Confira nossos artigos e conteúdos inspiradores.",
   robots: {
      index: false,
      follow: true,
   },
   openGraph: {
      title: "404 – Página não encontrada | Blog",
      description:
         "A página solicitada não existe ou foi removida. Volte e descubra novos artigos!",
      url: "http://localhost:3000/404",
      siteName: "Blog",
      type: "website",
   },
};

export default function NotFound(): ReactElement {
   return (
      <main
         role="main"
         className="h-screen flex flex-col justify-center items-center text-center px-4"
      >
         <BackgroundCircles aria-hidden="true" />
         <h1 className="text-5xl font-bold text-accent mb-4">
            Página não encontrada
         </h1>
         <p className="text-secondary text-lg mb-8">
            A página que você procura não existe ou foi removida.
         </p>
         <Link
            href="/"
            className="bg-accent hover:bg-accent-hover text-white font-medium py-2 px-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
         >
            Voltar para o início
         </Link>
      </main>
   );
}
