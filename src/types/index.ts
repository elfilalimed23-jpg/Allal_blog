export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  coverImage: string;
  author: string;
  readTime: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  count: number;
}