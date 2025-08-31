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
