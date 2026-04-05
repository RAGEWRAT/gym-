export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (url) return url.replace(/\/$/, "");
  return "https://ironforgegym.com";
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (path.startsWith("/")) return `${base}${path}`;
  return `${base}/${path}`;
}
