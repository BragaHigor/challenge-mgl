import { Input } from "@/components/ui/input";
import { ArticlesContext } from "@/context/ArticlesContext";
import { JSX, useCallback, useContext } from "react";
import { BiSearch } from "react-icons/bi";

export function ArticlesSearch(): JSX.Element {
   const { searchTerm, setSearchTerm } = useContext(ArticlesContext);

   const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
         setSearchTerm(e.target.value);
      },
      [setSearchTerm]
   );

   return (
      <div className="flex items-center gap-2.5 w-full xl:w-[11.875rem]">
         <label htmlFor="articles-search" className="sr-only">
            Buscar artigos
         </label>
         <div className="text-lg text-accent" aria-hidden="true">
            <BiSearch />
         </div>
         <Input
            id="articles-search"
            name="articles-search"
            value={searchTerm}
            placeholder="Pesquise aqui"
            onChange={handleChange}
            aria-label="Pesquisar artigos"
            className="w-full p-0 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
         />
      </div>
   );
}
