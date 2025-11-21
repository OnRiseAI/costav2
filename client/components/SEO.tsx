import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  schema?: object | string;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "")
    .replace(/-+/g, "-");
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

    // Update JSON-LD Schema: create a uniquely identifiable script element per page
    if (schema) {
      try {
        const id = `ld-json-${slugify(title)}`;
        let script = document.getElementById(id) as HTMLScriptElement | null;
        if (!script) {
          script = document.createElement("script");
          script.setAttribute("type", "application/ld+json");
          script.setAttribute("id", id);
          document.head.appendChild(script);
        }

        const schemaContent =
          typeof schema === "string" ? schema : JSON.stringify(schema);
        script.textContent = schemaContent;
      } catch (e) {
        // If serialization fails, write a single JSON-LD to console for debugging
        // but don't block rendering.
        // eslint-disable-next-line no-console
        console.warn("Failed to set JSON-LD schema", e);
      }
    }

    // Note: we intentionally do not remove the script on unmount so that search bots
    // crawling may still find the last applied schema if they land on the page.
  }, [title, description, schema]);

  return null;
}
