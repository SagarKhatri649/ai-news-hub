
import { Article } from '../data/articles';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  article: Article;
  size?: 'small' | 'medium' | 'large';
}

const ArticleCard = ({ article, size = 'medium' }: ArticleCardProps) => {
  return (
    <Link to={article.link} className="article-card block">
      <div className="relative">
        <img 
          src={article.image} 
          alt={article.title} 
          className={`w-full object-cover ${size === 'small' ? 'h-36' : size === 'large' ? 'h-64' : 'h-48'}`}
        />
        <div className="absolute bottom-0 left-0 bg-primary text-white text-xs px-2 py-1">
          {article.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className={`article-title ${size === 'small' ? 'text-base' : size === 'large' ? 'text-xl' : 'text-lg'}`}>
          {article.title}
        </h3>
        {size !== 'small' && (
          <p className="article-excerpt">{article.excerpt}</p>
        )}
        <div className="article-meta flex justify-between items-center">
          <span>{article.date}</span>
          {article.author && <span>By {article.author}</span>}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
