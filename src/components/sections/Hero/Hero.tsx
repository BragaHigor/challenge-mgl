import { JSX, useCallback, useContext } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { ArticlesContext } from "@/context/ArticlesContext";
import { BackgroundCircles } from "@/components/background/BackgroundCircles";

export function Hero(): JSX.Element {
   const { handleClearSearch } = useContext(ArticlesContext);

   const onClear = useCallback(() => {
      handleClearSearch();
   }, [handleClearSearch]);

   return (
      <section className="h-screen xl:h-[50rem] mb-3 relative">
         <BackgroundCircles />
         <div className="container mx-auto h-full flex flex-col justify-center items-center pt-12 xl:pt-0">
            <div className="w-full max-w-[43.75rem] text-center mx-auto flex flex-col gap-2">
               <div className="pretitle">
                  Mistura de arte, música e estilo de vida.
               </div>
               <h1 className="h1">
                  Descubra Paixões <br /> & Sabores
               </h1>
               <p className="tex-sm xl:text-lg font-light text-secondary mb-4 xl:mb-12 max-w-[30rem] xl:max-w-none mx-auto">
                  Explore experiências incríveis e compartilhe o que te inspira.
                  Conecte-se com pessoas que amam o que você ama.
               </p>
            </div>
            <div>
               <Searchbar />
               <div className="w-full mt-3 relative flex flex-col justify-center">
                  <p className="text-sm italic font-light text-secondary text-center mb-3 xl:mb-0">
                     Selecione pelo menos um campo ou deixe-o em branco para ver
                     todos os artigos.
                  </p>
                  <button
                     className="text-accent text-sm xl:absolute right-0"
                     onClick={onClear}
                  >
                     limpar as buscas
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
}
