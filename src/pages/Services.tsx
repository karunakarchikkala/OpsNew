import React from 'react';
import { SEO } from '../components/layout/SEO';
import { Services as ServicesSection } from '../components/sections/Services';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Services" 
        description="Explore our full suite of software development, cloud, and digital marketing services." 
      />
      
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              Our Professional <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              We provide a full spectrum of digital services designed to help your business evolve, scale, and outperform the competition.
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-bold text-blue-600 tracking-wider uppercase mb-3">How We Work</h2>
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              Our Development <span className="text-blue-600">Journey</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your goals and user needs.' },
              { step: '02', title: 'Design', desc: 'Crafting the visual and technical architecture.' },
              { step: '03', title: 'Develop', desc: 'Agile development with frequent updates.' },
              { step: '04', title: 'Deploy', desc: 'Seamless launch and continuous support.' },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-black text-blue-50 mb-4 group-hover:text-blue-100 transition-colors">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 text-blue-100">
                    <ArrowRight size={40} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
