`./scripts/tmp/aviutl2/aviutl2.txt`と`./scripts/tmp/aviutl2_prev/aviutl2.txt`を比較し、それに基づいて`./docs/`下を更新してください。
また、`./scripts/tmp/aviutl2/lua.txt`と`./scripts/tmp/aviutl2_prev/lua.txt`を比較し、それに基づいて`./docs/lua`下を更新してください。

ファイルを読み取るときは`cat`コマンドを使ってください（Gemini CLIの制約上、gitignoreされているファイルはtoolが直接読み取れません）。
この作業が完了したら、`./scripts/tmp/aviutl2_version.txt`を`./scripts/latest.txt`にコピーしてください。

後の更新を考慮して、この作業を行うのに必要であろう情報をこのファイルに追記してください。
コミットは作業終了後に自動で行われるため、コミットは不要です。

--- 以下、追記部分 ---

### 更新手順

1. `scripts/tmp/aviutl2/aviutl2.txt` と `scripts/tmp/aviutl2_prev/aviutl2.txt` を比較し、`docs/changelog.md` を更新する。
2. `scripts/tmp/aviutl2/lua.txt` と `scripts/tmp/aviutl2_prev/lua.txt` を比較し、`docs/lua/changelog.md` および `docs/lua/index.md` を更新する。
    - `docs/lua/index.md` の更新では、`obj.putpixel()`, `obj.copypixel()` の追加、`obj.pixeloption()` および `obj.setoption()` の変更を反映する。
3. `scripts/tmp/aviutl2_version.txt` の内容を `scripts/latest.txt` にコピーする。
