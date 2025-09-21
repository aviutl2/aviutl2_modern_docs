import { LanguageRegistration } from "shiki";

const autxtPatterns: LanguageRegistration["patterns"] = [
  {
    begin: "<\\?=?",
    patterns: [{ include: "source.aulua" }],
    end: "\\?>",
  },
];

export const autxtGrammar: LanguageRegistration = {
  name: "autxt",
  displayName: "AviUtl2 Message",
  embeddedLangsLazy: ["lua"],
  scopeName: "source.autxt",
  patterns: [...autxtPatterns],
  repository: {},
};
