import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/layout/SEO';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowLeft, Clock, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" />;

  return (
    <>
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        type="article"
      />

      <article className="pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-sm font-bold text-blue-600 mb-8 hover:-translate-x-1 transition-transform">
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => (
                <span key={tag} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-between py-6 border-y border-gray-100 italic">
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <span className="flex items-center"><User size={16} className="mr-2 text-blue-600" /> {post.author}</span>
                <span className="flex items-center"><Calendar size={16} className="mr-2 text-blue-600" /> {post.date}</span>
                <span className="flex items-center"><Clock size={16} className="mr-2 text-blue-600" /> 5 min read</span>
              </div>
              <button className="text-gray-400 hover:text-blue-600 transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </header>

          <div className="rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl shadow-blue-100">
            <img src={post.image} alt={post.title} className="w-full h-auto" />
          </div>

          <div className="prose prose-lg max-w-none prose-blue prose-headings:font-black prose-headings:tracking-tight prose-p:text-gray-600 prose-p:leading-relaxed">
             <div className="markdown-body">
                <ReactMarkdown>{post.content}</ReactMarkdown>
             </div>
          </div>

          <footer className="mt-20 pt-12 border-t border-gray-100">
            <div className="bg-gray-50 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Want more insights?</h4>
                <p className="text-gray-500 text-sm">Subscribe to our newsletter for the latest tech updates.</p>
              </div>
              <div className="mt-6 md:mt-0 flex w-full md:w-auto">
                <input type="email" placeholder="email@example.com" className="bg-white border border-gray-200 rounded-l-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none w-full md:w-64" />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-r-xl text-sm font-bold hover:bg-blue-700 transition-colors">Join</button>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
};

export default BlogPostPage;
