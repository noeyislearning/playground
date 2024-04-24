import { defineConfig } from "vitepress"

const getYear = new Date().getFullYear()

export default defineConfig({
  title: "Playground",
  description:
    "Playground is a collaborative repository of coding challenges that we have collectively solved across all levels. These challenges are meticulously curated to assist us in enhancing our programming skills, acquiring new concepts, and honing our problem-solving abilities through consistent practice.",
  lang: "en-US",
  cleanUrls: true,
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "Playground",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "LeetCode", link: "/leetcode/" },
    ],

    sidebar: {
      "/leetcode/": [
        {
          text: "Python",
          items: [
            {
              text: "Valid Parentheses",
              link: "/leetcode/valid-parentheses",
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/noeyislearning/playground" },
      { icon: "linkedin", link: "https://twitter.com/noeyislearning" },
      { icon: "discord", link: "https://discord.gg/haizoencommunity" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: `All right reserved &copy; ${getYear}`,
    },
    returnToTopLabel: "Go to Top",
    sidebarMenuLabel: "Menu",
  },
})
