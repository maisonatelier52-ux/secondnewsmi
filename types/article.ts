export type ArticleDescription =
  | string
  | {
      subtitle?: string;
      text?: string;
      wordCount?: number;
      [key: string]: any;
    };

export interface ArticleAuthor {
  name?: string;
  role?: string;
  bio?: string;
  image?: string;
  slug?: string;
  email?: string;
  [key: string]: any;
}

export interface Article {
  category: string;
  title: string;
  slug: string;
  image?: string;
  date?: string;
  shortdescription?: string;
  description?: ArticleDescription[];
  author: ArticleAuthor;
  [key: string]: any;
}

export interface WireTickerItem {
  timeAgo: string;
  category: string;
  title: string;
  slug: string;
}

