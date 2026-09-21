export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://linkinbio-mellow.vercel.app/sitemap.xml",
    host: "https://linkinbio-mellow.vercel.app",
  };
}
