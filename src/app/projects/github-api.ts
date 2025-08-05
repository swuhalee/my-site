export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  topics: string[];
  license: {
    name: string;
  } | null;
  fork: boolean;
  archived: boolean;
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    
    if (!response.ok) {
      throw new Error(`GitHub API 호출에 실패했습니다: ${response.status}`);
    }
    
    const data = await response.json();
    
    // 포크가 아니고 아카이브되지 않은 저장소만 필터링
    const filteredRepos = data
      .filter((repo: GitHubRepo) => !repo.fork && !repo.archived)
      .map((repo: GitHubRepo) => ({
        ...repo,
        stargazers_count: Number(repo.stargazers_count) || 0,
        forks_count: Number(repo.forks_count) || 0
      }))
      .sort((a: GitHubRepo, b: GitHubRepo) => {
        // 포크 수와 별 수의 합계로 정렬 (내림차순)
        const aScore = a.stargazers_count + a.forks_count;
        const bScore = b.stargazers_count + b.forks_count;
  
        return bScore - aScore;
      });
    
    return filteredRepos;
  } catch (error) {
    console.error('GitHub API 호출 중 오류 발생:', error);
    throw error;
  }
} 