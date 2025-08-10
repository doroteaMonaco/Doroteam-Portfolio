import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  url?: string;
  type?: string;
  image?: string;
  person?: {
    name: string;
    jobTitle?: string;
    email?: string;
    url?: string;
    sameAs?: string[];
  };
};

export function SEO({ title, description, url, type = "website", image, person }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setProperty = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);

    const canonicalHref = url || window.location.href;
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalHref);

    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:type", type);
    setProperty("og:url", canonicalHref);
    if (image) setProperty("og:image", image);

    // JSON-LD Person
    if (person) {
      const scriptId = "structured-data-person";
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;
      const data = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: person.name,
        jobTitle: person.jobTitle,
        email: person.email,
        url: person.url || canonicalHref,
        sameAs: person.sameAs || [],
      };
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(data);
    }
  }, [title, description, url, type, image, person]);

  return null;
}

export default SEO;
