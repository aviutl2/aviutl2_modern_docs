import rawLuaGrammar from "tm-grammars/grammars/lua.json" with { type: "json" };
import { LanguageRegistration } from "shiki";

const luaGrammar = rawLuaGrammar as unknown as LanguageRegistration;

const auluaPatterns: LanguageRegistration["patterns"] = [
  {
    match: "^(@)(.*)$",
    captures: {
      "1": { name: "keyword.control.aulua" },
      "2": { name: "entity.name.script.aulua" },
    },
  },
  {
    begin: "^(--([a-z0-9]+)(?:@([A-Z_a-z][0-9A-Z_a-z]*))?:)",
    beginCaptures: {
      "1": { name: "punctuation.definition.comment.aulua" },
      "2": { name: "keyword.control.aulua" },
      "3": { name: "entity.name.variable.aulua" },
    },
    name: "meta.directive.aulua",
    patterns: [
      { include: "#string" },
      {
        include: "#numeric",
      },
      {
        match: ",",
        name: "punctuation.separator.arguments.aulua",
      },
      {
        match: "-",
        name: "keyword.operator.arithmetic.aulua",
      },
      {
        match: "([^,=]+)(=)([^,]+)",
        captures: {
          "1": { name: "string.unquoted.aulua" },
          "2": { name: "keyword.operator.assignment.aulua" },
          "3": {
            patterns: [{ include: "#numeric" }, { include: "#string" }],
          },
        },
      },
      {
        begin: "(?=[^\\{][^,]*)",
        name: "string.unquoted.aulua",
        patterns: [{ include: "#escaped_char" }],
        end: "(?=,|$)",
      },
    ],
    end: "$",
  },
  {
    begin: "^--\\[\\[(computeshader|pixelshader)@([A-Z_a-z][0-9A-Z_a-z]*):",
    beginCaptures: {
      "0": { name: "punctuation.definition.comment.aulua" },
      "1": { name: "keyword.control.aulua" },
      "2": { name: "entity.name.variable.aulua" },
    },
    name: "meta.directive.shader.aulua",
    patterns: [
      {
        include: "source.hlsl",
      },
    ],
    end: "^\\]\\]$",
    endCaptures: {
      "0": { name: "punctuation.definition.comment.aulua" },
    },
  },
];
const auluaRepository: LanguageRegistration["repository"] = {
  numeric: {
    patterns: luaGrammar.patterns.filter((p) =>
      p.name?.startsWith("constant.numeric"),
    ),
  },
};

export const auluaGrammar: LanguageRegistration = {
  name: "aulua",
  displayName: "AviUtl2 Lua",
  embeddedLangsLazy: ["hlsl"],
  scopeName: "source.aulua",
  patterns: [...auluaPatterns, ...luaGrammar.patterns],
  repository: {
    ...auluaRepository,
    ...luaGrammar.repository,
  },
};
