
import { Link } from 'react-router-dom';
import { Article } from '../data/articles';

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  return (
    <Link to={article.link} className="block relative group overflow-hidden rounded-md shadow-md">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
          <div className="bg-primary text-white text-xs inline-block px-2 py-1 mb-2">
            {article.category}
          </div>
          <h2 className="text-white text-xl md:text-2xl font-medium line-clamp-3 mb-2">
            {article.title}
          </h2>
          <p className="text-gray-200 text-sm md:text-base line-clamp-2 mb-2">
            {article.excerpt}
          </p>
          <div className="flex justify-between items-center text-gray-300 text-xs">
            <span>{article.date}</span>
            {article.author && <span>By {article.author}</span>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedArticle;
