import { getAllTistoryArticles } from './tistory-api';

export default async function Articles() {
  const articles = await getAllTistoryArticles();

  const categories = ["All", "블로그", "개발", "일상", "Flutter", "iOS", "Safari", "extension", "xcode"];

  return (
    <div className="max-w-6xl mx-auto mb-20">
      <h1 className="text-3xl font-bold text-black mt-4 mb-8">Articles</h1>
      
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-none border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-black mb-6">Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {articles.filter(a => a.featured).map((article) => (
            <article key={article.id} className="bg-gray-50 p-6 rounded-none border border-gray-300 hover:border-orange-500 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  {article.category}
                </span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{article.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                {article.title}
              </h3>
              <p className="text-gray-700 mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
                {article.tags.length > 3 && (
                  <span className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded">
                    +{article.tags.length - 3}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">by {article.author}</span>
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                >
                  Read →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* All Articles */}
      <section>
        <h2 className="text-2xl font-semibold text-black mb-6">All Articles</h2>
        <div className="space-y-6">
          {articles.map((article) => (
            <article key={article.id} className="bg-gray-50 p-6 rounded-none border border-gray-300 hover:border-orange-500 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-600">•</span>
                    <span className="text-sm text-gray-600">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                    {article.tags.length > 3 && (
                      <span className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded">
                        +{article.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">by {article.author}</span>
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                    >
                      Read →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
} 