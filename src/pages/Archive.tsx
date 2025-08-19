import React, { useState, useMemo } from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { SearchBox } from '../components/SearchBox';
import { articles, categories } from '../data/articles';
import { Archive as ArchiveIcon, Filter, Calendar, SortDesc } from 'lucide-react';

export const Archive: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  const filteredAndSortedArticles = useMemo(() => {
    let filtered = articles;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query)) ||
        article.author.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Sort articles
    filtered.sort((a, b) => {
      let comparison = 0;
      
      if (sortBy === 'date') {
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        comparison = a.title.localeCompare(b.title);
      }
      
      return sortOrder === 'desc' ? -comparison : comparison;
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy, sortOrder]);

  const totalArticles = articles.length;
  const years = [...new Set(articles.map(article => new Date(article.date).getFullYear()))].sort((a, b) => b - a);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full">
            <ArchiveIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Archive des récits
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Parcourez l'ensemble de nos {totalArticles} récits et souvenirs partagés. 
          Utilisez les filtres ci-dessous pour trouver exactement ce que vous cherchez.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-12">
        <div className="space-y-6">
          {/* Search Box */}
          <SearchBox onSearch={setSearchQuery} />

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">Filtres :</span>
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Toutes les catégories</option>
                {Object.entries(categories).map(([key, category]) => (
                  <option key={key} value={key}>{category.name}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <SortDesc className="h-5 w-5 text-gray-400" />
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">Trier par :</span>
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
                className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="date">Date</option>
                <option value="title">Titre</option>
              </select>
              
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'desc' | 'asc')}
                className="px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="desc">{sortBy === 'date' ? 'Plus récent' : 'Z → A'}</option>
                <option value="asc">{sortBy === 'date' ? 'Plus ancien' : 'A → Z'}</option>
              </select>
            </div>
          </div>

          {/* Active filters display */}
          {(searchQuery || selectedCategory) && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
              <span className="text-lg text-gray-600 dark:text-gray-300 font-medium">Filtres actifs :</span>
              {searchQuery && (
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm">
                  Recherche: "{searchQuery}"
                </span>
              )}
              {selectedCategory && (
                <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm">
                  Catégorie: {categories[selectedCategory]?.name}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="mb-8">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {filteredAndSortedArticles.length} {filteredAndSortedArticles.length > 1 ? 'récits trouvés' : 'récit trouvé'}
          {searchQuery && ` pour "${searchQuery}"`}
        </p>
      </div>

      {/* Articles Grid */}
      {filteredAndSortedArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <ArchiveIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Aucun récit trouvé
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Essayez de modifier vos critères de recherche ou de supprimer certains filtres.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('');
            }}
            className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}

      {/* Years Timeline */}
      <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <Calendar className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400" />
          Chronologie des récits
        </h2>
        <div className="flex flex-wrap gap-3">
          {years.map(year => {
            const yearCount = articles.filter(article => 
              new Date(article.date).getFullYear() === year
            ).length;
            
            return (
              <div
                key={year}
                className="bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-lg text-center"
              >
                <div className="text-lg font-bold text-gray-900 dark:text-white">{year}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {yearCount} {yearCount > 1 ? 'récits' : 'récit'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};