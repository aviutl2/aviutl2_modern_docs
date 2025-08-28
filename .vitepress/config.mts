import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "AviUtl2 Docs Mirror",
  description: "AviUtl2のドキュメントの非公式ミラー。",
  cleanUrls: true,
  markdown: {
    breaks: true,
  },
  themeConfig: {
    nav: [{ text: "ホーム", link: "/" }],

    sidebar: [
      {
        text: "aviutl2.txt",
        items: [
          { text: "はじめに", link: "/" },
          { text: "簡易説明", link: "/usage" },
          { text: "更新履歴", link: "/changelog" },
        ],
      },
      {
        text: "lua.txt",
        base: "/lua/",
        items: [
          { text: "Luaスクリプト", link: "/" },
          { text: "使用例", link: "/examples" },
          { text: "更新履歴", link: "/changelog" },
          { text: "バイナリについて", link: "/binaries" },
        ],
      },
      { text: "このサイトについて", link: "/about" },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/sevenc-nanashi/aviutl2_docs_mirror",
      },
    ],

    externalLinkIcon: true,
    skipToContentLabel: "内容にジャンプ",
    langMenuLabel: "言語",
    lastUpdatedText: "最終更新",
    sidebarMenuLabel: "メニュー",
    notFound: {
      title: "ページが見つかりません",
      linkLabel: "トップページに戻る",
      linkText: "トップページへ",
      quote: "お探しのページは見つかりませんでした。",
    },
    lightModeSwitchTitle: "ライトモードに切り替え",
    darkModeSwitchLabel: "外観",
    darkModeSwitchTitle: "ダークモードに切り替え",
    returnToTopLabel: "上までスクロール",
    outline: {
      label: "このページの内容",
      level: [2, 3],
    },

    docFooter: {
      prev: "前へ",
      next: "次へ",
    },

    footer: {
      message:
        "AviUtl2 Unofficial Mirrorは有志が作成した非公式ミラーサイトです。",
      copyright: "(c) 2025 Nanashi. / Original work by KEN-kun.",
    },
  },
});
