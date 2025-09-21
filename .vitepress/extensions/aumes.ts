import { LanguageRegistration } from "shiki";

const aumesPatterns: LanguageRegistration["patterns"] = [
  {
    begin: "<\\?",
    patterns: [{ include: "source.aulua" }],
    end: "\\?>",
  },
];

export const aumesGrammar: LanguageRegistration = {
  name: "aumes",
  displayName: "AviUtl2 Message",
  embeddedLangsLazy: ["lua"],
  scopeName: "source.aumes",
  patterns: [...aumesPatterns],
  repository: {},
};
