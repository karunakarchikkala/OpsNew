import React from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../../constants';

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-blue-600 tracking-wider uppercase mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            Comprehensive Digital <span className="text-blue-600">Solutions</span>
          </h3>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            From architecture to deployment, we provide the end-to-end technical expertise your business needs to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {IconComponent && <IconComponent size={30} />}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-600 font-bold text-sm">
                  Learn More <LucideIcons.ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
