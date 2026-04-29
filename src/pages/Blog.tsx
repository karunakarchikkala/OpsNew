import React from 'react';
import { SEO } from '../components/layout/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const BlogPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Blog & Insights" 
        description="Latest technology trends, coding best practices, and business automation insights from TaskOps Solutions." 
      />

      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              Tech <span className="text-blue-600">Insights</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              Stay ahead of the curve with our latest articles on software engineering, cloud architecture, and digital strategy.
            </p>
            
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search articles..."
                className="w-full bg-white border border-gray-200 rounded-full py-4 pl-12 pr-6 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col group h-full"
              >
                <Link to={`/blog/${post.slug}`} className="relative h-64 mb-6 overflow-hidden rounded-[2rem] block">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-blue-600">
                    {post.tags[0]}
                  </div>
                </Link>
                
                <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                  <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
                  <span className="flex items-center"><User size={14} className="mr-1" /> {post.author}</span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4 line-clamp-2">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-bold text-blue-600"
                  >
                    Read Full Article <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
