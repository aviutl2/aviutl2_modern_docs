// https://vitepress.dev/guide/custom-theme
import { jaModel, Parser } from "budoux";
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
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
