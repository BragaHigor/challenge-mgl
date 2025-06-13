interface AuthorSocial {
   icon: string;
   path: string;
}

interface Author {
   img_avatar: string;
   name: string;
   social: AuthorSocial[];
}

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
   isLoading: boolean;
   error: string | null;
}
