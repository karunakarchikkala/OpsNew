import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_NAME } from '../../constants';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  type = 'website' 
}) => {
  const fullTitle = title ? `${title} | ${COMPANY_NAME}` : `${COMPANY_NAME} | Software Development & Cloud Solutions`;
  const metaDescription = description || "TaskOps Solutions provides expert software development, cloud computing, and business automation services for modern enterprises.";
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical || window.location.href} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={window.location.href} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  );
};
