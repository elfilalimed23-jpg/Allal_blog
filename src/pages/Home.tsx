import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleCard } from '../components/ArticleCard';
import { articles, categories } from '../data/articles';
import { ArrowRight, BookOpen, Heart } from 'lucide-react';

export const Home: React.FC = () => {
  const featuredArticle = articles[0];
  const recentArticles = articles.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Préservons nos <span className="text-blue-600 dark:text-blue-400">mémoires précieuses</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Un espace dédié au partage de souvenirs, d'histoires familiales et de témoignages 
            qui traversent les générations. Chaque récit est un trésor à préserver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/archive"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Découvrir tous les récits
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white text-lg font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <Heart className="h-5 w-5 mr-2" />
              Notre mission
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Récit à la une
            </h2>
          </div>
          <ArticleCard article={featuredArticle} featured />
        </section>
      )}

      {/* Recent Articles */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Derniers récits
          </h2>
          <Link
            to="/archive"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-lg font-medium group"
          >
            Voir tous les articles
            <ArrowRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Categories Preview */}
      <section className="mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Explorez par thématique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(categories).slice(0, 6).map(([key, category]) => {
              const articleCount = articles.filter(article => article.category === key).length;
              return (
                <Link
                  key={key}
                  to={`/categories/${key.toLowerCase()}`}
                  className="group p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {category.name}
                    </h3>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      {articleCount}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {category.description}
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/categories"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Voir toutes les catégories
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Notre communauté de mémoires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-bold mb-2">{articles.length}</div>
            <div className="text-xl text-blue-100">Récits partagés</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">{Object.keys(categories).length}</div>
            <div className="text-xl text-blue-100">Thématiques</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">
              {articles.reduce((sum, article) => sum + article.readTime, 0)}
            </div>
            <div className="text-xl text-blue-100">Minutes de lecture</div>
          </div>
        </div>
      </section>
    </div>
  );
};
