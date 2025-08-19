import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArticleCard } from '../components/ArticleCard';
import { SearchBox } from '../components/SearchBox';
import { articles, categories } from '../data/articles';
import { Search as SearchIcon, Filter } from 'lucide-react';

export const Search: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get initial search query from URL params
  const urlParams = new URLSearchParams(location.search);
  const initialQuery = urlParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchResults, setSearchResults] = useState(articles);

  const performSearch = useCallback(() => {
    let results = articles;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      results = results.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query)) ||
        article.author.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory) {
      results = results.filter(article => article.category === selectedCategory);
    }

    setSearchResults(results);
  }, [searchQuery, selectedCategory]);

  useEffect(() => {
    performSearch();
  }, [performSearch]);

  useEffect(() => {
    // Update URL when search query changes
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedCategory) params.set('category', selectedCategory);
    
    const newUrl = params.toString() ? `/search?${params.toString()}` : '/search';
    navigate(newUrl, { replace: true });
  }, [searchQuery, selectedCategory, navigate]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full">
            <SearchIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Recherche dans les récits
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Trouvez facilement les souvenirs et témoignages qui vous intéressent. 
          Utilisez la barre de recherche et les filtres pour affiner vos résultats.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-12">
        <div className="space-y-6">
          {/* Search Box */}
          <SearchBox onSearch={handleSearch} />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">Catégorie :</span>
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

            {(searchQuery || selectedCategory) && (
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                Effacer les filtres
              </button>
            )}
          </div>

          {/* Active filters display */}
          {(searchQuery || selectedCategory) && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
              <span className="text-lg text-gray-600 dark:text-gray-300 font-medium">Recherche active :</span>
              {searchQuery && (
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">
                  "{searchQuery}"
                </span>
              )}
              {selectedCategory && (
                <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full">
                  {categories[selectedCategory]?.name}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Search Results */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {searchQuery ? `Résultats pour "${searchQuery}"` : 'Tous les récits'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {searchResults.length} {searchResults.length > 1 ? 'résultats' : 'résultat'}
          </p>
        </div>

        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchResults.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <SearchIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Aucun résultat trouvé
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
              {searchQuery 
                ? `Aucun récit ne correspond à "${searchQuery}". Essayez avec d'autres mots-clés.`
                : "Aucun récit ne correspond aux filtres sélectionnés."
              }
            </p>
            <div className="space-y-4">
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Effacer les filtres
              </button>
              <div className="text-lg text-gray-500 dark:text-gray-400">
                <p>Suggestions :</p>
                <ul className="mt-2 space-y-1">
                  <li>• Vérifiez l'orthographe des mots-clés</li>
                  <li>• Essayez des termes plus généraux</li>
                  <li>• Utilisez des synonymes</li>
                  <li>• Explorez les catégories</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Popular Search Terms */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Recherches populaires
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            'enfance', 'famille', 'grand-mère', 'village', 'guerre', 
            'souvenirs', 'traditions', 'recettes', 'lettres', 'école'
          ].map(term => (
            <button
              key={term}
              onClick={() => handleSearch(term)}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-lg"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
