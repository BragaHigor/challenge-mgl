import { Dispatch, ReactNode, SetStateAction } from "react";

export interface Article {
   id: string;
   type: string;
   img_sm: string;
   img_lg: string;
   date: string;
   hour: string;
   title: string;
   description: string;
   author: Author[];
   recommended: boolean;
}

export interface ArticlesContextValue {
   articles: Article[];
   filteredArticles: Article[];
   isLoading: boolean;
   error: string | null;
   searchTerm: string;
   setSearchTerm: Dispatch<SetStateAction<string>>;
   handleSubmit: () => void;
   handleClearSearch: () => void;
   showArticlesList: boolean;
   selectedAuthor: string;
   setSelectedAuthor: Dispatch<SetStateAction<string>>;
   selectedDate: Date | null;
   setSelectedDate: Dispatch<SetStateAction<Date | null>>;
   selectedType: string;
   setSelectedType: Dispatch<SetStateAction<string>>;
}

export interface ArticlesProviderProps {
   children: ReactNode;
}

interface AuthorSocial {
   icon: string;
   path: string;
}

interface Author {
   img_avatar: string;
   name: string;
   social: AuthorSocial[];
}

export interface Filters {
   searchTerm: string;
   selectedAuthor: string;
   selectedDate: Date | null;
   selectedType: string;
}
