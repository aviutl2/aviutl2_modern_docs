import { MarkdownRenderer } from "vitepress";
import { StateInline } from "markdown-it/index.js";
import { RenderRuleRecord } from "markdown-it/lib/renderer.mjs";

const asteriskMark = "※";
const debug = false;

// https://github.com/markdown-it/markdown-it/blob/master/lib/rules_inline/text.mjs
function text(state: StateInline, silent: boolean) {
  const terminators = "\n!#$%&*+-:<=>@[\\]^_`{}~" + asteriskMark;
  let pos = state.pos;

  while (pos < state.posMax && !terminators.includes(state.src[pos])) {
    pos++;
  }

  if (pos === state.pos) {
    return false;
  }

  if (!silent) {
    state.pending += state.src.slice(state.pos, pos);
  }

  state.pos = pos;

  return true;
}

type MyEnv = {
  asteriskOpen: number;
};

export function asterisk(md: MarkdownRenderer) {
  md.inline.ruler.at("text", text);
  md.inline.ruler.after("text", "asterisk", (state) => {
    if (state.src[state.pos] !== asteriskMark) {
      return false;
    }
    state.push("asterisk", "span", 1);
    state.pos += 1;
    return true;
  });

  md.renderer.rules.asterisk = (_tokens, _idx, _options, env, _self) => {
    const myEnv = env as MyEnv;
    myEnv.asteriskOpen ??= 0;
    myEnv.asteriskOpen += 1;
    return debug ? "AST_OPEN" : "<span class='asterisk-text'><span class='asterisk-mark'>※</span>";
  };

  eolHook(md, "hardbreak");
  eolHook(md, "softbreak");
  eolHook(md, "paragraph_close");
  eolHook(md, "td_close");
}

function eolHook(md: MarkdownRenderer, ruleName: keyof RenderRuleRecord) {
  const original = md.renderer.rules[ruleName];
  md.renderer.rules[ruleName] = (tokens, idx, options, env, self) => {
    const myEnv = env as MyEnv;
    let prepend = "";
    while (myEnv.asteriskOpen > 0) {
      prepend += debug ? "AST_CLOSE" : "</span>";
      myEnv.asteriskOpen -= 1;
    }
    return (
      prepend +
      (original?.(tokens, idx, options, env, self) ??
        md.renderer.renderToken(tokens, idx, options))
    );
  };
}
