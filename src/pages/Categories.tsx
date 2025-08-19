import React from 'react';
import { Link } from 'react-router-dom';
import { articles, categories } from '../data/articles';
import { BookOpen, Tag } from 'lucide-react';

export const Categories: React.FC = () => {
  const categoriesWithCounts = Object.entries(categories).map(([key, category]) => ({
    key,
    ...category,
    count: articles.filter(article => article.category === key).length
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full">
            <Tag className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Catégories de récits
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Explorez nos différentes thématiques pour découvrir les souvenirs et témoignages 
          qui vous touchent le plus. Chaque catégorie rassemble des récits authentiques 
          sur des aspects particuliers de la vie et de l'histoire.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoriesWithCounts.map((category) => (
          <Link
            key={category.key}
            to={`/categories/${category.key.toLowerCase()}`}
            className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors duration-200">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-lg font-semibold">
                  {category.count}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {category.name}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {category.description}
              </p>
              
              <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 font-medium">
                <span className="text-lg">Découvrir les récits</span>
                <svg className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Partagez vos propres souvenirs</h2>
        <p className="text-xl mb-6 text-blue-100">
          Votre histoire compte. Contribuez à enrichir notre collection de mémoires précieuses.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-3 bg-white text-blue-600 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <BookOpen className="h-5 w-5 mr-2" />
          Nous contacter
        </Link>
      </div>
    </div>
  );
};