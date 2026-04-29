import React from 'react';
import { SEO } from '../components/layout/SEO';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with TaskOps Solutions for custom software development, cloud strategy, and digital marketing inquiries." 
      />

      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              Let's Build Something <span className="text-blue-600">Great</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Have a project in mind? We'd love to hear about it. Our team is ready to help you navigate your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <div className="bg-blue-600 p-3 rounded-2xl text-white inline-block mb-6 shadow-lg shadow-blue-100">
                    <Mail size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Email Us</h4>
                  <p className="text-gray-500 text-sm mb-4">For general inquiries and support.</p>
                  <a href="mailto:tasksopssolutionpvtltd@gmail.com" className="text-blue-600 font-bold hover:underline">tasksopssolutionpvtltd@gmail.com</a>
                </div>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <div className="bg-blue-600 p-3 rounded-2xl text-white inline-block mb-6 shadow-lg shadow-blue-100">
                    <Phone size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Call Us</h4>
                  <p className="text-gray-500 text-sm mb-4">Monday - Saturday from 9am to 7pm.</p>
                  <div className="flex flex-col space-y-1">
                    <a href="tel:+919949344353" className="text-blue-600 font-bold hover:underline">+91 9949344353</a>
                    <a href="tel:+917680002434" className="text-blue-600 font-bold hover:underline">+91 7680002434</a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-10 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MessageSquare size={120} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-6 relative">Visit Our Office</h4>
                <div className="flex items-start space-x-4 mb-8 relative">
                   <div className="bg-white/10 p-2 rounded-lg text-blue-400">
                      <MapPin size={20} />
                   </div>
                   <address className="not-italic text-gray-400 text-lg leading-relaxed">
                     Plot no 120, Southern Part,<br />
                     Ghatkesar, Hyderabad,<br />
                     Telangana, 501301
                   </address>
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Plot+no+120,+Southern+Part,+Ghatkesar,+Hyderabad,+TG+501301" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors relative inline-block"
                >
                   View on Maps
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                    <option>Software Development</option>
                    <option>Cloud Solutions</option>
                    <option>Business Automation</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                  <textarea rows={5} placeholder="Tell us about your project..." className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 flex items-center justify-center space-x-2 active:scale-95 transition-all">
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
