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

function upsertMeta(
  attribute: "name" | "property",
  attributeValue: string,
  content: string,
) {
  const selector = `meta[${attribute}="${attributeValue}"]`;
  let element = document.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export function SEO({ title, description, schema }: SEOProps) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    document.title = title;

    upsertMeta("name", "description", description);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);

    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    const ogTypeSelector = 'meta[property="og:type"]';
    let ogType = document.querySelector(
      ogTypeSelector,
    ) as HTMLMetaElement | null;
    if (!ogType) {
      ogType = document.createElement("meta");
      ogType.setAttribute("property", "og:type");
      ogType.setAttribute("content", "website");
      document.head.appendChild(ogType);
    }

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
        // eslint-disable-next-line no-console
        console.warn("Failed to set JSON-LD schema", e);
      }
    }
  }, [title, description, schema]);

  return null;
}
