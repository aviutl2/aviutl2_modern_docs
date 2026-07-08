import { defineAdditionalConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineAdditionalConfig({
  lang: "en",
  themeConfig: {
    sidebar: [
      {
        text: "aviutl2.txt",
        base: "/en",
        items: [
          { text: "Overview", link: "/" },
          { text: "Usage", link: "/usage" },
          { text: "Changelog", link: "/changelog" },
        ],
      },
      {
        text: "lua.txt",
        base: "/en/lua",
        items: [
          { text: "Lua Script", link: "/" },
          { text: "Examples", link: "/examples" },
          { text: "Changelog", link: "/changelog" },
        ],
      },
      {
        text: "credits.txt",
        base: "/en/credits",
        items: [{ text: "Credits", link: "/" }],
      },
      { text: "About this page", link: "/en/about" },
    ],
  },
});
