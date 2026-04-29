import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { BLOG_POSTS } from '../../constants';

export const BlogPreview: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-base font-bold text-blue-600 tracking-wider uppercase mb-3">Latest Insights</h2>
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              From Our <span className="text-blue-600">Blog</span>
            </h3>
          </div>
          <Link
            to="/blog"
            className="mt-6 md:mt-0 text-blue-600 font-bold flex items-center hover:translate-x-2 transition-transform"
          >
            View All Posts <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {BLOG_POSTS.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col h-full group"
            >
              <Link to={`/blog/${post.slug}`} className="relative h-64 mb-6 overflow-hidden rounded-3xl block">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600">
                  {post.tags[0]}
                </div>
              </Link>
              
              <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
                <span className="flex items-center"><User size={14} className="mr-1" /> {post.author}</span>
              </div>

              <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h4>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="mt-auto">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors"
                >
                  Read More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
