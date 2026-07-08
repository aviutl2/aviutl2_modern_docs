---
name: update-contents
description: "Update the contents of this documentation"
targets: ["*"]
---

# update-contents

## 1. diffを取る

`scripts`ディレクトリ下で`rake`を実行すると`scripts/tmp/aviutl2.txt.diff`と`scripts/tmp/lua.txt.diff`が生成されます。

## 2. diffを確認し、更新する

`./scripts/tmp/aviutl2/aviutl2.txt`と`./scripts/tmp/aviutl2_prev/aviutl2.txt`を比較し、それに基づいて`./docs/`下を更新してください。
また、`./scripts/tmp/aviutl2/lua.txt`と`./scripts/tmp/aviutl2_prev/lua.txt`を比較し、それに基づいて`./docs/lua`下を更新してください。
なお、`./scripts/tmp/aviutl2.txt.diff`、`./scripts/tmp/lua.txt.diff`にそれぞれの差分が出力されています。

書き換えガイド：

- キーは`<kbd>Ctrl</kbd>`のように`<kbd>`タグで囲む
- `「C:\ProgramData\aviutl2」`のように、鍵括弧でパスやファイル名を示している部分合は`` `C:\ProgramData\aviutl2` ``のようにインラインコードにする
- Lua部分など、半角である必要のある部分以外は全角括弧を使う

## 3. 英語版を更新する

`./docs/en/`下の英語版も更新してください。
なお、`<EnUiText />`コンポーネントを用いるとエディタの翻訳を流用できます。
`docs/components/ui/en_editor.yml`、`docs/components/ui/en_effects.yml`を参照してください。

## 4. 更新内容をコミットする

`git commit -am "feat: beta{version}を反映"`のようにコミットします。
