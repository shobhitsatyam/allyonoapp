import { useEffect } from 'react';

export default function SeoHead({
  title = "Yono Games & Gaming App Information | AllyonoApp",
  description = "Explore Yono games, gaming app information, new app updates and useful gaming guides on AllyonoApp.",
  canonicalUrl = "https://allyonoapp.app/",
  ogType = "website",
  ogImage = "https://allyonoapp.app/og-image.png",
  ogSiteName = "AllyonoApp",
  twitterCard = "summary_large_image",
  robots = "index, follow, max-image-preview:large",
  jsonLd = null
}) {
  useEffect(() => {
    // 1. Document title
    if (title) {
      document.title = title;
    }

    // Helper function to update or create meta tags
    const updateMetaTag = (selector, nameOrProperty, attributeName, content) => {
      if (!content) return;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, nameOrProperty);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper function to update canonical link
    const updateCanonical = (url) => {
      if (!url) return;
      let element = document.querySelector('link[rel="canonical"]');
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
      }
      element.setAttribute('href', url);
    };

    // 2. Primary Meta Tags
    updateMetaTag('meta[name="description"]', 'description', 'name', description);
    updateMetaTag('meta[name="robots"]', 'robots', 'name', robots);
    updateMetaTag('meta[name="title"]', 'title', 'name', title);

    // Remove legacy keywords tag if present
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.remove();
    }

    // 3. Canonical URL
    updateCanonical(canonicalUrl);

    // 4. Open Graph Tags
    updateMetaTag('meta[property="og:title"]', 'og:title', 'property', title);
    updateMetaTag('meta[property="og:description"]', 'og:description', 'property', description);
    updateMetaTag('meta[property="og:url"]', 'og:url', 'property', canonicalUrl);
    updateMetaTag('meta[property="og:type"]', 'og:type', 'property', ogType);
    updateMetaTag('meta[property="og:image"]', 'og:image', 'property', ogImage);
    updateMetaTag('meta[property="og:site_name"]', 'og:site_name', 'property', ogSiteName);

    // 5. Twitter Card Tags
    updateMetaTag('meta[property="twitter:card"]', 'twitter:card', 'property', twitterCard);
    updateMetaTag('meta[property="twitter:title"]', 'twitter:title', 'property', title);
    updateMetaTag('meta[property="twitter:description"]', 'twitter:description', 'property', description);
    updateMetaTag('meta[property="twitter:url"]', 'twitter:url', 'property', canonicalUrl);
    updateMetaTag('meta[property="twitter:image"]', 'twitter:image', 'property', ogImage);

    // 6. JSON-LD Structured Data
    let jsonLdScript = document.getElementById('dynamic-json-ld');
    if (jsonLd) {
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.id = 'dynamic-json-ld';
        jsonLdScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(jsonLd);
    } else if (jsonLdScript) {
      jsonLdScript.remove();
    }

    return () => {
      // Optional cleanup on unmount if needed
    };
  }, [title, description, canonicalUrl, ogType, ogImage, ogSiteName, twitterCard, robots, jsonLd]);

  return null;
}
