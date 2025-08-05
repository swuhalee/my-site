import { fetchGitHubRepos } from './github-api';
import StarIcon from '../components/icons/StarIcon';
import ForkIcon from '../components/icons/ForkIcon';
import LicenseIcon from '../components/icons/LicenseIcon';

export default async function Projects() {
  const repos = await fetchGitHubRepos('swuhalee');

  // 스타가 많은 프로젝트를 featured로 설정
  const featuredRepos = repos.slice(0, 3);
  const allRepos = repos;

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <h1 className="text-3xl font-bold text-black mt-4 mb-8">Projects</h1>
      
      {/* Featured Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-black mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRepos.map((repo) => (
            <div key={repo.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-300 transition-all duration-300">
              {/* Repository Name */}
              <h3 className="text-xl font-semibold text-black mb-3 line-clamp-2">{repo.name}</h3>
              
              {/* Meta Info */}
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <StarIcon className="w-4 h-4 mr-1 text-yellow-500" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center">
                  <ForkIcon className="w-4 h-4 mr-1 text-gray-600" />
                  {repo.forks_count}
                </span>
                {repo.language && (
                  <span className="text-orange-600 font-medium">{repo.language}</span>
                )}
              </div>
              
              {/* Description */}
              <p className="text-gray-700 mb-4 line-clamp-3 text-sm leading-relaxed">
                {repo.description || '설명이 없습니다.'}
              </p>
              
              {/* Topics */}
              {repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span key={topic} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
                  {repo.topics.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      +{repo.topics.length - 3}
                    </span>
                  )}
                </div>
              )}
              
              {/* License */}
              {repo.license && (
                <div className="mb-4 text-xs text-gray-500 flex items-center">
                  <LicenseIcon className="w-3 h-3 mr-1" />
                  {repo.license.name}
                </div>
              )}
              
              {/* Links */}
              <div className="flex space-x-4 pt-4 border-t border-gray-100">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center"
                >
                  GitHub
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                  >
                    Live Demo
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Projects */}
      <section>
        <h2 className="text-2xl font-semibold text-black mb-6">All Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allRepos.map((repo) => (
            <div key={repo.id} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md hover:border-orange-300 transition-all duration-300">
              {/* Repository Name */}
              <h3 className="text-lg font-semibold text-black mb-3 line-clamp-2">{repo.name}</h3>
              
              {/* Meta Info */}
              <div className="flex items-center space-x-3 mb-3 text-xs text-gray-500">
                <span className="flex items-center">
                  <StarIcon className="w-3 h-3 mr-1 text-yellow-500" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center">
                  <ForkIcon className="w-3 h-3 mr-1 text-gray-600" />
                  {repo.forks_count}
                </span>
                {repo.language && (
                  <span className="text-orange-600 font-medium">{repo.language}</span>
                )}
              </div>
              
              {/* Description */}
              <p className="text-gray-700 mb-3 text-sm line-clamp-2 leading-relaxed">
                {repo.description || '설명이 없습니다.'}
              </p>
              
              {/* Topics */}
              {repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {repo.topics.slice(0, 2).map((topic) => (
                    <span key={topic} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
                  {repo.topics.length > 2 && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      +{repo.topics.length - 2}
                    </span>
                  )}
                </div>
              )}
              
              {/* Links */}
              <div className="flex space-x-3 pt-3 border-t border-gray-100">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 text-sm font-medium"
                >
                  GitHub
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 