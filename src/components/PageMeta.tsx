import { useEffect } from "react";

interface PageMetaProps {
  /** Page title. Appended with " | Punk Rock Anthropology" unless `exact` is true. */
  title: string;
  /** Meta description. Shown in search results + social previews. Keep under 160 chars. */
  description: string;
  /** If true, uses `title` verbatim without the site-name suffix. */
  exact?: boolean;
}

const SITE_NAME = "Punk Rock Anthropology";

/**
 * Sets <title> and <meta name="description"> for the current route.
 * Runs on mount and cleans up on unmount so navigation always reflects
 * the active page's metadata.
 */
export function PageMeta({ title, description, exact = false }: PageMetaProps) {
  useEffect(() => {
    const previousTitle = document.title;
    const fullTitle = exact ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    let descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDesc = descEl?.content ?? "";
    if (!descEl) {
      descEl = document.createElement("meta");
      descEl.name = "description";
      document.head.appendChild(descEl);
    }
    descEl.content = description;

    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const previousOgTitle = ogTitle?.content ?? "";
    if (ogTitle) ogTitle.content = fullTitle;

    const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    const previousOgDesc = ogDesc?.content ?? "";
    if (ogDesc) ogDesc.content = description;

    return () => {
      document.title = previousTitle;
      if (descEl) descEl.content = previousDesc;
      if (ogTitle) ogTitle.content = previousOgTitle;
      if (ogDesc) ogDesc.content = previousOgDesc;
    };
  }, [title, description, exact]);

  return null;
}
