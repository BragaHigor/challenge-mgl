import { useCallback, useContext } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { ArticlesContext } from "@/context/ArticlesContext";

export function Hero() {
   const { handleClearSearch } = useContext(ArticlesContext);

   const onClear = useCallback(() => {
      handleClearSearch();
   }, [handleClearSearch]);

   return (
      <section className="h-screen xl:h-[50rem] mb-3 relative">
         <div className="container mx-auto h-full flex flex-col justify-center items-center pt-12 xl:pt-0">
            <div className="w-full max-w-[43.75rem] text-center mx-auto flex flex-col gap-2">
               <div className="pretitle">
                  Mistura de arte, música e estilo de vida.
               </div>
               <h1 className="h1">
                  Descubra Paixões <br /> & Sabores
               </h1>
               <p className="tex-sm xl:text-lg font-light text-white/80 mb-4 xl:mb-12 max-w-[30rem] xl:max-w-none mx-auto">
                  Explore experiências incríveis e compartilhe o que te inspira.
                  Conecte-se com pessoas que amam o que você ama.
               </p>
            </div>
            <div>
               <Searchbar />
               <div className="w-full mt-3 relative flex flex-col justify-center">
                  <p className="text-sm italic font-light text-white/70 text-center mb-3 xl:mb-0">
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
         <div className="absolute bg-primary top-0 left-0 w-[50vw] h-full bg-hero_bg1 bg-blend-color-dodge bg-no-repeat bg-cover -z-10 opacity-5"></div>
         <div className="absolute bg-primary top-0 right-0 w-[50vw] h-full bg-hero_bg2 bg-blend-lighten bg-no-repeat bg-cover -z-10 opacity-5"></div>
      </section>
   );
}
