import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  schema?: object | string;
}

export function SEO({ title, description, schema }: SEOProps) {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update JSON-LD Schema
    if (schema) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      
      const schemaContent = typeof schema === 'string' ? schema : JSON.stringify(schema);
      script.textContent = schemaContent;
    }

    // Cleanup function (optional, but good practice to avoid stale data if component unmounts)
    // However, for SEO, we usually want the tags to persist until the next page overwrites them.
    // So we might not strictly need to remove them on unmount, but let's keep it simple.
    
  }, [title, description, schema]);

  return null;
}
