import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, User } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (featured) {
    return (
      <article className="relative group">
        <Link to={`/article/${article.id}`} className="block">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center space-x-4 text-sm mb-3">
                <span className="bg-blue-600 px-3 py-1 rounded-full font-medium">
                  {article.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime} min</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-200 transition-colors duration-200">
                {article.title}
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <Link to={`/article/${article.id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full font-medium">
              {article.category}
            </span>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} min</span>
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-tight">
            {article.title}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              <User className="h-4 w-4" />
              <span className="text-lg">{article.author}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Tag className="h-4 w-4 text-gray-400" />
              <div className="flex flex-wrap gap-1">
                {article.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-sm text-gray-500 dark:text-gray-400">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};