import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/layout/SEO';
import { NAV_ITEMS, SERVICES, BLOG_POSTS } from '../constants';
import { ChevronRight } from 'lucide-react';

const Sitemap: React.FC = () => {
  return (
    <>
      <SEO title="Sitemap" description="Navigate through all pages of the TaskOps Solutions website." />
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-gray-900 mb-12 border-b pb-4">Sitemap</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold text-blue-600 mb-6 uppercase tracking-wider">Main Pages</h2>
              <ul className="space-y-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="flex items-center text-gray-600 hover:text-blue-600 font-medium">
                      <ChevronRight size={16} className="mr-2" /> {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/privacy" className="flex items-center text-gray-600 hover:text-blue-600 font-medium">
                    <ChevronRight size={16} className="mr-2" /> Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="flex items-center text-gray-600 hover:text-blue-600 font-medium">
                    <ChevronRight size={16} className="mr-2" /> Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-blue-600 mb-6 uppercase tracking-wider">Our Services</h2>
              <ul className="space-y-4">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <Link to="/services" className="flex items-center text-gray-600 hover:text-blue-600 font-medium">
                      <ChevronRight size={16} className="mr-2" /> {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-blue-600 mb-6 uppercase tracking-wider">Latest from Blog</h2>
              <ul className="space-y-4">
                {BLOG_POSTS.map((post) => (
                  <li key={post.id}>
                    <Link to={`/blog/${post.slug}`} className="flex items-center text-gray-600 hover:text-blue-600 font-medium">
                      <ChevronRight size={16} className="mr-2" /> {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
