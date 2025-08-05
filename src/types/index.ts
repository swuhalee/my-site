// 티스토리 API 타입 정의
export interface TistoryPost {
  id: string;
  title: string;
  postUrl: string;
  visibility: number;
  categoryId: string;
  comments: number;
  trackbacks: number;
  date: string;
  tags: string[];
  content: string;
  excerpt?: string;
}

export interface TistoryResponse {
  tistory: {
    status: string;
    item: {
      posts: TistoryPost[];
      totalCount: string;
      pageCount: string;
    };
  };
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  featured: boolean;
  url?: string;
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  live: string
  featured: boolean
}

export interface Skill {
  name: string
  percentage: number
  category: 'frontend' | 'backend' | 'tools'
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string[]
} 