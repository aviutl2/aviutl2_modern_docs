import path from "node:path";
import { defineConfig } from "vitepress";
import markdownItBudoux from "markdown-it-budoux";
import llmstxt from "vitepress-plugin-llms";
import license from "rollup-plugin-license";
import { auluaGrammar } from "../extensions/aulua.ts";
import { autxtGrammar } from "../extensions/autxt.ts";
import { asterisk } from "../extensions/asterisk.ts";
import jaConfig from "./ja.ts";
import enConfig from "./en.ts";
import yaml from "@rollup/plugin-yaml";

const logoPngUrl = "/aviutl2.png";
const description = "AviUtl2のドキュメントを見やすくした非公式サイト";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "AviUtl2 Modern Docs",
  description: description,
  cleanUrls: true,
  locales: {
    root: {
      label: "日本語",
      ...jaConfig,
    },
    en: {
      label: "English",
      link: "/en",
      ...enConfig,
    },
  },
  vite: {
    plugins: [
      yaml(),
      {
        name: "add-license-banner",
        generateBundle(_, bundle) {
          const banner = `/** Check THIRD_PARTY_NOTICES.txt for license details. */`;
          for (const file of Object.values(bundle)) {
            if (file.type === "chunk") {
              file.code = `${banner}\n${file.code}`;
            }
          }
        },
      },
      license({
        cwd: process.cwd(),

        thirdParty: {
          output: {
            file: path.join(
              import.meta.dirname,
              "dist",
              "THIRD_PARTY_NOTICES.txt",
            ),
            encoding: "utf-8",
          },
        },
      }),
      llmstxt({
        excludeIndexPage: false,
        customTemplateVariables: {
          title: "AviUtl2 Modern Docs",
        },
      }),
    ],
    server: {
      allowedHosts: true,
    },
  },
  transformHead(ctx) {
    ctx.head.push(
      [
        "meta",
        {
          property: "og:title",
          content: ctx.pageData.title,
        },
      ],
      [
        "meta",
        {
          property: "og:site_name",
          content: "AviUtl2 Modern Docs",
        },
      ],
      [
        "meta",
        {
          property: "og:description",
          content: ctx.pageData.description || description,
        },
      ],
      [
        "meta",
        {
          property: "og:type",
          content: "website",
        },
      ],
      [
        "meta",
        {
          property: "og:image",
          content: logoPngUrl,
        },
      ],
      [
        "meta",
        {
          name: "twitter:card",
          content: "summary",
        },
      ],
      [
        "meta",
        {
          name: "twitter:title",
          content: ctx.pageData.title,
        },
      ],
      [
        "meta",
        {
          name: "twitter:description",
          content: ctx.pageData.description || description,
        },
      ],
      [
        "meta",
        {
          name: "twitter:image",
          content: logoPngUrl,
        },
      ],
      [
        "link",
        {
          rel: "icon",
          href: logoPngUrl,
        },
      ],
      [
        "link",
        {
          rel: "apple-touch-icon",
          href: logoPngUrl,
        },
      ],
    );
  },
  themeConfig: {
    outline: {
      level: [2, 3],
    },
    externalLinkIcon: true,

    logo: logoPngUrl,

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/aviutl2/aviutl2_modern_docs",
      },
    ],
  },
  markdown: {
    breaks: true,
    config: (md) => {
      md.use(markdownItBudoux({ language: "ja" }));
      md.use(asterisk);
    },
    languageLabel: {
      aulua: "AviUtl2 Lua",
      autxt: "AviUtl2 Text",
    },
    shikiSetup: async (shiki) => {
      await shiki.loadLanguage("hlsl");
      await shiki.loadLanguage(auluaGrammar);
      await shiki.loadLanguage(autxtGrammar);
    },
  },
});
