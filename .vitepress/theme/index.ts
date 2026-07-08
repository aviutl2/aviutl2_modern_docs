// https://vitepress.dev/guide/custom-theme
import { jaModel, Parser } from "budoux";
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme-without-fonts";
import "./style.css";
import "./custom.scss";
import TranslatedWarningContainer from "./TranslatedWarningContainer.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "layout-top": () => h(TranslatedWarningContainer),
    });
  },
  enhanceApp() {
    if (!import.meta.env.SSR) {
      const patchedGlobal = globalThis as unknown as {
        __au2dm_budouxParser: Parser;
      };
      patchedGlobal.__au2dm_budouxParser = new Parser(jaModel);
    }
  },
} satisfies Theme;
