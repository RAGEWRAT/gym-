import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const OG_IMAGE =
  process.env.NEXT_PUBLIC_OG_IMAGE?.trim() ||
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop&q=80";

export function buildPageMeta(
  opts: { title: string; description: string; path: string } | { absoluteTitle: string; description: string; path: string }
): Metadata {
  const url = absoluteUrl(opts.path);
  const titleBlock: Metadata["title"] =
    "absoluteTitle" in opts ? { absolute: opts.absoluteTitle } : opts.title;
  const ogTitle =
    "absoluteTitle" in opts ? opts.absoluteTitle : `${opts.title} | IronForge Gym`;
  return {
    title: titleBlock,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: opts.description,
      url,
      siteName: "IronForge Gym",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "IronForge Gym — strength and conditioning in Kanpur",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: opts.description,
      images: [OG_IMAGE],
    },
  };
}
