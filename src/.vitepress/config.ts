import { defineConfig } from "vitepress"
import sidebar from "./config/sidebar"
import nav from "./config/nav"

const getYear = new Date().getFullYear()

export default defineConfig({
  title: "Playground",
  description:
    "Playground is a collaborative repository of coding challenges that we have collectively solved across all levels. These challenges are meticulously curated to assist us in enhancing our programming skills, acquiring new concepts, and honing our problem-solving abilities through consistent practice.",
  lang: "en-US",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/favicon.ico",
    siteTitle: "Playground",
    search: {
      provider: "local",
    },

    /** (Navbar) Menu */
    nav: nav,

    /** (Navbar) Social Links */
    socialLinks: [{ icon: "github", link: "https://github.com/noeyislearning/playground" }],

    /** (Sidebar) Menu */
    sidebar: sidebar,

    /** (Footer) */
    footer: {
      message: "Collected by Haizoen Community.",
      copyright: `All right reserved &copy; ${getYear}`,
    },
    returnToTopLabel: "Go to Top",
    sidebarMenuLabel: "Menu",
  },
})
