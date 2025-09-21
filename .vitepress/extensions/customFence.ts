import { MarkdownRenderer } from "vitepress";
import type { RenderRule } from "markdown-it/lib/renderer.mjs";

// https://github.com/vuejs/vitepress/issues/4951#issuecomment-3315511521
export function customFence(options: {
  languageLabels: Record<string, string>;
}) {
  return (md: MarkdownRenderer) => {
    const fence: RenderRule = md.renderer.rules.fence!.bind(md.renderer.rules);
    md.renderer.rules.fence = (...args) => {
      return fence(...args).replace(
        /(?<=class="lang">)([^<]*)/,
        (_, p1) => options.languageLabels[p1] ?? p1,
      );
    };
  };
}
