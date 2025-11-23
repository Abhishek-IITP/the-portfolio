const site_url =
  process.env.NEXT_PUBLIC_APP_URL || "https://the-abhishek-portfolio.vercel.app/";

export const siteConfig = {
  name: "Abhishek | Full Stack Developer",
  description:
    "Personal portfolio website showcasing my projects and skills as a full stack developer",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    twitter: "https://x.com/abhishek_891",
    github: "https://github.com/Abhishek-IITP",
  },
  mailSupport: "abhishekmohanty7325@gmail.com",
};
