
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ArticleCard from '@/components/ArticleCard';
import FeaturedArticle from '@/components/FeaturedArticle';
import NewsletterForm from '@/components/NewsletterForm';
import Footer from '@/components/Footer';
import { featuredArticles, latestArticles, aiInterviews, mlArticles } from '@/data/articles';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        {/* Featured Articles Section */}
        <section className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.map((article) => (
              <FeaturedArticle key={article.id} article={article} />
            ))}
          </div>
        </section>
        
        {/* Latest Articles Section */}
        <section className="section-container">
          <h2 className="section-title">Latest Articles On AI</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {latestArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <PaginationControls />
          </div>
        </section>
        
        {/* AI Interviews Section */}
        <section  id="interviews" className="section-container">
          <h2 className="section-title">AI Interviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiInterviews.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <PaginationControls />
          </div>
        </section>

        {/* Two Column Section: Latest ML + Newsletter */}
        <section className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Latest on Machine Learning */}
            <div className="lg:col-span-2">
              <h2 className="section-title">Latest On Machine Learning</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {mlArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <PaginationControls />
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="lg:col-span-1">
              <NewsletterForm />
            </div>
          </div>
        </section>
        
        {/* Banner */}
        <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Drive Your Knowledge Growth and Stay Updated with AI Trends
            </h2>
            <p className="text-lg mb-6">
              Join the AI News Hub community for exclusive insights and analysis
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Pagination component
const PaginationControls = () => {
  return (
    <div className="inline-flex items-center border border-gray-200 rounded-md overflow-hidden">
      <button className="px-3 py-1 border-r border-gray-200 hover:bg-gray-100 flex items-center">
        <ChevronLeft size={16} />
        <span className="ml-1">Prev</span>
      </button>
      <span className="px-3 py-1 bg-primary text-white">1</span>
      <button className="px-3 py-1 border-l border-gray-200 hover:bg-gray-100 flex items-center">
        <span className="mr-1">Next</span>
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default Index;
