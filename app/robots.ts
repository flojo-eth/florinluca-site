import type { MetadataRoute } from "next";
import { SITE_URL, INDEXABLE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Staging (florinluca.ro): INDEXABLE === false → block everything so the
  // prototype never gets indexed while the live content lives on
  // pensiunea-amonte.ro. Flip INDEXABLE at migration to open it up.
  if (!INDEXABLE) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
