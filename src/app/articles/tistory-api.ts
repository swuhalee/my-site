import { TistoryResponse, TistoryPost, Article } from '@/types';

// RSS 피드에서 포스트 가져오기
export async function fetchRssPosts(): Promise<Article[]> {
  try {
    const response = await fetch('https://suhalee.tistory.com/rss');
    const xmlText = await response.text();
    
    // XML 파싱
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    
    const items = xmlDoc.querySelectorAll('item');
    const articles: Article[] = [];
    
    items.forEach((item, index) => {
      const title = item.querySelector('title')?.textContent || '';
      const link = item.querySelector('link')?.textContent || '';
      const description = item.querySelector('description')?.textContent || '';
      const pubDate = item.querySelector('pubDate')?.textContent || '';
      const author = item.querySelector('author')?.textContent || 'suhalee';
      const categories = Array.from(item.querySelectorAll('category')).map(cat => cat.textContent || '');
      
      // HTML 태그 제거하고 텍스트만 추출
      const stripHtml = (html: string) => {
        return html
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&nbsp;/g, ' ')
          .replace(/<[^>]*>/g, '')
          .replace(/\s+/g, ' ')
          .trim();
      };
      
      // 읽기 시간 계산 (한국어 기준: 분당 약 300자)
      const calculateReadTime = (content: string) => {
        const wordCount = stripHtml(content).length;
        const minutes = Math.ceil(wordCount / 300);
        return `${minutes} min read`;
      };
      
      // 날짜 포맷팅
      const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      };
      
      const excerpt = stripHtml(description).substring(0, 150) + '...';
      
      articles.push({
        id: String(index + 1),
        title,
        excerpt,
        content: description,
        author,
        date: formatDate(pubDate),
        category: categories[0] || '블로그',
        tags: categories,
        featured: index < 2, // 처음 2개를 featured로 설정
        url: link
      });
    });
    
    return articles;
  } catch (error) {
    console.error('RSS 피드 파싱 중 오류:', error);
    return [];
  }
}

// 서버 사이드에서 RSS 피드 가져오기 (Next.js API 라우트용)
export async function fetchRssPostsServer(): Promise<Article[]> {
  try {
    const response = await fetch('https://suhalee.tistory.com/rss');
    const xmlText = await response.text();
    
    // XML 파싱을 위한 간단한 파서
    const parseXml = (xml: string) => {
      const items: any[] = [];
      const itemRegex = /<item>([\s\S]*?)<\/item>/g;
      let match;
      
      while ((match = itemRegex.exec(xml)) !== null) {
        const itemContent = match[1];
        
        const title = itemContent.match(/<title>(.*?)<\/title>/)?.[1] || '';
        const link = itemContent.match(/<link>(.*?)<\/link>/)?.[1] || '';
        const description = itemContent.match(/<description>([\s\S]*?)<\/description>/)?.[1] || '';
        const pubDate = itemContent.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || '';
        const author = itemContent.match(/<author>(.*?)<\/author>/)?.[1] || 'suhalee';
        const categories: string[] = [];
        
        const categoryRegex = /<category>(.*?)<\/category>/g;
        let categoryMatch;
        while ((categoryMatch = categoryRegex.exec(itemContent)) !== null) {
          categories.push(categoryMatch[1]);
        }
        
        items.push({
          title,
          link,
          description,
          pubDate,
          author,
          categories
        });
      }
      
      return items;
    };
    
    const items = parseXml(xmlText);
    const articles: Article[] = [];
    
    items.forEach((item, index) => {
      // HTML 태그 제거하고 텍스트만 추출
      const stripHtml = (html: string) => {
        return html
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&nbsp;/g, ' ')
          .replace(/<[^>]*>/g, '')
          .replace(/\s+/g, ' ')
          .trim();
      };
      
      // 읽기 시간 계산 (한국어 기준: 분당 약 300자)
      const calculateReadTime = (content: string) => {
        const wordCount = stripHtml(content).length;
        const minutes = Math.ceil(wordCount / 300);
        return `${minutes} min read`;
      };
      
      // 날짜 포맷팅
      const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      };
      
      const excerpt = stripHtml(item.description).substring(0, 150) + '...';
      
      articles.push({
        id: String(index + 1),
        title: item.title,
        excerpt,
        content: item.description,
        author: item.author,
        date: formatDate(item.pubDate),
        category: item.categories[0] || '블로그',
        tags: item.categories,
        featured: index < 2, // 처음 2개를 featured로 설정
        url: item.link
      });
    });
    
    return articles;
  } catch (error) {
    console.error('RSS 피드 파싱 중 오류:', error);
    return [];
  }
}

// 환경변수에서 티스토리 설정 가져오기
const TISTORY_ACCESS_TOKEN = process.env.TISTORY_ACCESS_TOKEN;
const TISTORY_BLOG_NAME = process.env.TISTORY_BLOG_NAME;

// 티스토리 API에서 포스트 가져오기 (기존 함수 유지)
export async function fetchTistoryPosts(page: number = 1, count: number = 20): Promise<TistoryPost[]> {
  if (!TISTORY_ACCESS_TOKEN || !TISTORY_BLOG_NAME) {
    console.warn('티스토리 API 설정이 없습니다. 환경변수를 확인해주세요.');
    return [];
  }

  try {
    const url = `https://www.tistory.com/apis/post/list?access_token=${TISTORY_ACCESS_TOKEN}&output=json&blogName=${TISTORY_BLOG_NAME}&page=${page}&count=${count}`;
    
    const response = await fetch(url);
    const data: TistoryResponse = await response.json();
    
    if (data.tistory.status === '200') {
      return data.tistory.item.posts;
    } else {
      console.error('티스토리 API 오류:', data);
      return [];
    }
  } catch (error) {
    console.error('티스토리 API 호출 중 오류:', error);
    return [];
  }
}

// 티스토리 포스트를 Article 형식으로 변환
export function convertTistoryPostToArticle(post: TistoryPost): Article {
  // HTML 태그 제거하고 텍스트만 추출
  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  };

  // 읽기 시간 계산 (한국어 기준: 분당 약 300자)
  const calculateReadTime = (content: string) => {
    const wordCount = stripHtml(content).length;
    const minutes = Math.ceil(wordCount / 300);
    return `${minutes} min read`;
  };

  // 날짜 포맷팅
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt || stripHtml(post.content).substring(0, 150) + '...',
    content: post.content,
    author: '티스토리 블로그', // 또는 실제 작성자 정보
    date: formatDate(post.date),
    category: '블로그', // 카테고리 정보가 있다면 사용
    tags: post.tags || [],
    featured: false, // 필요에 따라 설정
    url: post.postUrl
  };
}

// 모든 티스토리 포스트 가져오기 (RSS 기반으로 변경)
export async function getAllTistoryArticles(): Promise<Article[]> {
  return await fetchRssPostsServer();
} 