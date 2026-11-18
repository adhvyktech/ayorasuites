import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'hotel';
  ogImage?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  canonicalPath = '/',
  ogType = 'website',
  ogImage = '/images/ayora-logo.jpg',
  schema
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to create or update meta tag
    const setMeta = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper to create or update link tag
    const setLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    const siteUrl = 'https://ayorasuites.com';
    const fullCanonicalUrl = `${siteUrl}${canonicalPath === '/' ? '' : canonicalPath}`;
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);
    if (keywords.length > 0) {
      setMeta('name', 'keywords', keywords.join(', '));
    }
    setLink('canonical', fullCanonicalUrl);

    // 3. Open Graph Tags
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullCanonicalUrl);
    setMeta('property', 'og:type', ogType === 'hotel' ? 'website' : ogType);
    setMeta('property', 'og:image', fullOgImage);
    setMeta('property', 'og:site_name', 'Ayora Suites');

    // 4. Twitter Tags
    setMeta('property', 'twitter:card', 'summary_large_image');
    setMeta('property', 'twitter:title', title);
    setMeta('property', 'twitter:description', description);
    setMeta('property', 'twitter:image', fullOgImage);

    // 5. Dynamic JSON-LD Structured Data
    if (schema) {
      let script = document.getElementById('page-json-ld');
      if (!script) {
        script = document.createElement('script');
        script.id = 'page-json-ld';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

    return () => {
      // Optional cleanup of page specific schema if unmounting
      const script = document.getElementById('page-json-ld');
      if (script) {
        script.remove();
      }
    };
  }, [title, description, keywords, canonicalPath, ogType, ogImage, schema]);

  return null;
};
