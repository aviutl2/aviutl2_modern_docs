`./scripts/tmp/aviutl2/aviutl2.txt`と`./scripts/tmp/aviutl2_prev/aviutl2.txt`を比較し、それに基づいて`./docs/`下を更新してください。
また、`./scripts/tmp/aviutl2/lua.txt`と`./scripts/tmp/aviutl2_prev/lua.txt`を比較し、それに基づいて`./docs/lua`下を更新してください。

ファイルを読み取るときは`cat`コマンドを使ってください（Gemini CLIの制約上、gitignoreされているファイルはtoolが直接読み取れません）。
この作業が完了したら、`./scripts/tmp/aviutl2_version.txt`を`./scripts/latest.txt`にコピーしてください。

後の更新を考慮して、この作業を行うのに必要であろう情報をこのファイルに追記してください。
コミットは作業終了後に自動で行われるため、コミットは不要です。

書き換えガイド：
- キーは`<kbd>Ctrl</kbd>`のように`<kbd>`タグで囲む
- `「C:\ProgramData\aviutl2」`のように、鍵括弧でパスやファイル名を示している部分合は`` `C:\ProgramData\aviutl2` ``のようにインラインコードにする
- Lua部分など、半角である必要のある部分以外は全角括弧を使う

--- 以下、追記部分 ---

Last updated: 2025/08/31
Update process completed.

Last updated: 2026/04/12
Update process completed for aviutl2beta41.zip.

Last updated: 2026/04/12
Update process completed for aviutl2beta41a.zip.

Last updated: 2026/04/18
Update process completed for aviutl2beta42.zip.

Last updated: 2026/04/26
Update process completed for aviutl2beta43.zip.

Last updated: 2026/04/26
Update process completed for aviutl2beta43a.zip.

Last updated: 2026/04/28
Update process completed for aviutl2beta43b.zip. Lua diff was empty; updated docs/index.md, docs/changelog.md, and scripts/latest.txt.

Last updated: 2026/05/04
Update process completed for aviutl2beta44.zip. Lua diff was empty; updated docs/index.md, docs/usage.md, docs/changelog.md, and scripts/latest.txt. aviutl2 diff changed the layer-name operation from double-click to Alt+click, added a note about right-click drag settings affecting Alt+click, added the reference expression section before scripts/plugins, and added the beta44 changelog entry.

Last updated: 2026/05/10
Update process completed for aviutl2beta45.zip. Updated docs/index.md, docs/changelog.md, docs/lua/index.md, docs/lua/changelog.md, and scripts/latest.txt. aviutl2 diff only added the beta45 changelog entry; lua diff changed the yyy::xxx display rule to use the text after the last :: and added obj.multiobject() callback return support for per-object base time offsets in seconds.

Last updated: 2026/05/17
Update process completed for aviutl2beta46.zip. Lua diff was empty; updated docs/index.md, docs/usage.md, docs/changelog.md, and scripts/latest.txt. aviutl2 diff changed the version header to beta46, added the installer command-line options section after layout/style.conf, and added the beta46 changelog entry.

Last updated: 2026/05/24
Update process completed for aviutl2beta47.zip. Updated docs/index.md, docs/usage.md, docs/changelog.md, docs/lua/binaries.md, scripts/latest.txt, and scripts/prompt.md. aviutl2 diff changed the version header to beta47, added a credits.txt license notice, added the beta47 changelog entry, documented preview zoom as mouse-position based, and noted system.conf external-module rejection. lua diff moved the Lua/LuaJIT binary section before the changelog and removed bundled Lua/LuaJIT license text because licenses are now collected in credits.txt.
