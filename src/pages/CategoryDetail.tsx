import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ArticleCard } from '../components/ArticleCard';
import { articles, categories } from '../data/articles';
import { BookOpen } from 'lucide-react';

export const CategoryDetail: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  
  if (!categoryName) {
    return <Navigate to="/categories" replace />;
  }

  const categoryKey = Object.keys(categories).find(
    key => key.toLowerCase() === categoryName.toLowerCase()
  );

  if (!categoryKey) {
    return <Navigate to="/categories" replace />;
  }

  const category = categories[categoryKey];
  const categoryArticles = articles.filter(article => article.category === categoryKey);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full">
            <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {category.name}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
          {category.description}
        </p>
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium text-lg">
          {categoryArticles.length} {categoryArticles.length > 1 ? 'récits' : 'récit'}
        </div>
      </div>

      {/* Articles Grid */}
      {categoryArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <BookOpen className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Aucun récit dans cette catégorie
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Les récits de cette catégorie seront bientôt disponibles.
          </p>
        </div>
      )}
    </div>
  );
};