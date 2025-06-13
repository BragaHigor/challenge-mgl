import { ArticlesList } from "@/components/sections/Articles/ArticlesList";
import { Searchbar } from "@/components/sections/Searchbar/Searchbar";

export default function Home() {
   return (
      <div>
         <Searchbar />
         <div className="container mx-auto">
            <ArticlesList />
         </div>
      </div>
   );
}
