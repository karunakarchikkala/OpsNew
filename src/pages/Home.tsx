import React from 'react';
import { SEO } from '../components/layout/SEO';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { BlogPreview } from '../components/sections/BlogPreview';
import { motion } from 'motion/react';
import { CheckCircle2, Shield, Zap, Target } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <SEO />
      <Hero />
      
      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-blue-600 rounded-[3rem] p-12 relative z-10">
                <h3 className="text-3xl font-bold text-white mb-8">Why TaskOps Solutions?</h3>
                <div className="space-y-6">
                  {[
                    { icon: Shield, title: 'Secure by Design', desc: 'Enterprise-grade security built into every line of code we write.' },
                    { icon: Zap, title: 'Extreme Performance', desc: 'Blazing fast load times and optimized workflows for better UX.' },
                    { icon: Target, title: 'Strategic Approach', desc: 'We don\'t just code; we solve business problems with strategy.' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-white/20 p-2 rounded-xl text-white">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-base font-bold text-blue-600 tracking-wider uppercase mb-3">Our Value Proposition</h2>
              <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                Accelerate Your Digital <span className="text-blue-600">Evolution</span>
              </h3>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                In an era where technology defines market leaders, we bridge the gap between complex requirements and high-quality software output. Our agile methodology ensures transparency and rapid deployment.
              </p>
              <ul className="space-y-4">
                {['100% Mobile Responsive Design', 'Scalable Cloud Infrastructure', 'AI-Driven Process Automation', 'Dedicated Post-Launch Support'].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700 font-medium">
                    <CheckCircle2 size={20} className="text-blue-600 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Services />

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-6 gap-4 rotate-12 -translate-y-20">
             {Array.from({ length: 48 }).map((_, i) => (
               <div key={i} className="w-full aspect-square border border-white rounded-lg" />
             ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Join 50+ global companies that trust TaskOps Solutions for their mission-critical digital projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-xl shadow-blue-800">
              Schedule a Discovery Call
            </button>
            <button className="bg-transparent text-white border border-white/30 px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <BlogPreview />
    </>
  );
};

export default Home;
