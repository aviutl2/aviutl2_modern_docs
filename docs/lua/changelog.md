---
title: Luaスクリプト：更新履歴
description: AviUtl ExEdit2のLuaスクリプトの更新履歴について説明しています。
---

# 更新履歴

## 2.00 beta48 <Badge text='2026/5/30' />

- `obj.load("layer")`の対象が個別オブジェクトの場合の処理の修正と説明を追加
- `obj.setanchor()`のオプションに`"screen"`の指定を追加

## 2.00 beta45 <Badge text='2026/5/10' />

- 設定項目の項目名の一部のみを表示させる指定を修正
- `obj.multiobject()`のコールバック関数の返却値で個別オブジェクトの基準時間を変更出来るようにした

## 2.00 beta43 <Badge text='2026/4/26' />

- `--font`のデフォルト値のフォントが無い場合に例外になるのを修正
- `obj.load("text.layout")`で文字揃え種別を指定した時に中心座標を返却するようにした

## 2.00 beta42 <Badge text='2026/4/18' />

- `obj.load("movie")`の読み込み失敗時の返却を以前の値に修正 ※互換対応

## 2.00 beta41a <Badge text='2026/4/12' />

- `obj.load()`の読み込み失敗時にオブジェクトの画像をクリアするように修正

## 2.00 beta41 <Badge text='2026/4/12' />

- `obj.load()`で読み込み失敗を返却するようにした
- `obj.load()`に`"movie.frame"`、`"movie.info"`、`"text.layout"`の指定を追加

## 2.00 beta40a <Badge text='2026/4/5' />

- `--separator`の定義を追加した時にスクリプトが動作しなくなるのを修正

## 2.00 beta40 <Badge text='2026/4/5' />

- `obj.load("text")`に文字揃え種別の引数を追加
- `obj.getvalue()`に`"pos"`、`"angle"`、`"center"`、`"scale"`の指定を追加
- `--separator`の定義を追加

## 2.00 beta39 <Badge text='2026/3/29' />

- `error()`で引数messageが無い場合に落ちるのを修正
- `obj.setoption("blend")`で合成モードの指定が無い時は通常を設定するように修正

## 2.00 beta38 <Badge text='2026/3/22' />

- `obj.multiobject()`の終了時に元の`obj.index`、`obj.num`値に戻すように修正
- `obj.getpoint("default")`に移動モードの指定を追加
- `--track`の定義にゼロ値名称,操作倍率の引数を追加
- 設定項目の項目名の一部のみを表示させる指定を追加

## 2.00 beta37 <Badge text='2026/3/14' />

- `print()`関数でログを出力するように修正 ※`debug_print()`も同様の機能に修正します
- `obj.setoption("blend","alpha_sub")`の計算を修正
- `--trackgroup`の定義を追加
- `obj.setanchor()`に複数のトラックバー項目から値を参照する指定を追加
- `obj.pixelshader()`、`obj.computeshader()`に他のスクリプトのシェーダー定義を利用する指定を追加
- `obj.getpoint("default")`を追加

## 2.00 beta36 <Badge text='2026/3/8' />

- オブジェクトが空の状態の時に`obj.load("tempbuffer",x,y,w,h)`で仮想バッファの領域指定が反映されないのを修正
- `obj.multiobject()`を追加 ※`obj.index`、`obj.num`は`obj.multiobject()`の処理内で変更する形に修正します
- `obj.setanchor()`のオプションに`"small"`、`"mesh"`、`"rgba"`、デフォルト座標の指定を追加
- `obj.setoption("blend")`に`"rgba_add"`の指定を追加
- `obj.setoption("focus_mode")`に`"no_resize"`の指定を追加
- `--checksection`の定義を追加

## 2.00 beta35 <Badge text='2026/2/28' />

- `obj.index`、`obj.num`を変更出来るようにした
- `--require`の定義を追加

## 2.00 beta34 <Badge text='2026/2/23' />

- `obj.load("textlayout")`でオブジェクトのパラメータがクリアされていたのを修正

## 2.00 beta32 <Badge text='2026/2/8' />

- `obj.id`の値を描画対象のオブジェクトIDとなるように修正
- `obj.getvalue()`にエフェクト・設定項目名の指定方法を追加
- `obj.setfont()`に太文字、斜体、文字間隔、行間隔の引数を追加
- `obj.load()`に`"textlayout"`の指定を追加

## 2.00 beta30 <Badge text='2026/1/25' />

- `obj.getvalue()`に`"track.xxx"`の指定方法を追加
- `--string`の定義を追加

## 2.00 beta29 <Badge text='2026/1/17' />

- オブジェクトがシーンチェンジ対象の時の`obj.frame`、`obj.time`の値を修正

## 2.00 beta28a <Badge text='2026/1/12' />

- `--folder`の定義を追加

## 2.00 beta28 <Badge text='2026/1/11' />

- `obj.getoption("gui")`の返却が正しくないのを修正
- `obj.clearbuffer()`にサイズ変更の引数を追加

## 2.00 beta26 <Badge text='2025/12/27' />

- フィルタオブジェクトから`obj.effect()`を利用した時にフィルタ効果として処理されないのを修正
- オブジェクトの出力が基本出力の時に仮想バッファへの`obj.draw()`が処理されないのを修正
- トラックバー移動スクリプトの`--param`を複数指定出来るようにした

## 2.00 beta24 <Badge text='2025/12/14' />

- フィルタオブジェクト対応向けの`--filter`の定義、`obj.getinfo("filter")`を追加

## 2.00 beta23a <Badge text='2025/12/7' />

- `obj.getinfo("bpm")`を追加

## 2.00 beta23 <Badge text='2025/12/6' />

- `obj.getvalue()`に`"frame_s"`、`"frame_e"`の指定を追加

## 2.00 beta22a <Badge text='2025/12/2' />

- `--group`にグループの終端の設定方法を追加

## 2.00 beta22 <Badge text='2025/11/30' />

- `--group`の定義を追加
- `obj.getpoint("timecontrol")`の引数を追加

## 2.00 beta21 <Badge text='2025/11/22' />

- `obj.setoption("sampler")`のサンプラーの種類を追加

## 2.00 beta20 <Badge text='2025/11/16' />

- `obj.sx`、`obj.sy`、`obj.sz`の項目を追加
- `obj.getvalue()`に基準拡大率(`"sx"`、`"sy"`、`"sz"`)の指定を追加

## 2.00 beta19 <Badge text='2025/11/8' />

- グループ制御に追加したスクリプトの`obj.draw()`が正しく描画されないのを修正
- `obj.getvalue("scenechange")`の精度を修正
- `obj.computeshader()`にサンプラーの指定を追加
- `obj.pixelshader()`、`obj.computeshader()`の`resource`に`"random"`を追加
- `obj.data()`、`--data`の定義を追加

## 2.00 beta18a <Badge text='2025/11/2' />

- `--dialog`の`/chk`をnumber型で返却するように修正
- `obj.effect_id`を追加

## 2.00 beta18 <Badge text='2025/11/1' />

- `obj.rand1()`の乱数範囲を調整
- `obj.pixelshader()`にサンプラーの指定を追加
- ピクセルシェーダー定義の説明を追加
- チェックボックス項目定義に`boolean`型にする指定を追加
- `obj.getoption("track_mode")`の説明を追加

## 2.00 beta17 <Badge text='2025/10/26' />

- `obj.rand()`の最大最小値の引数の精度を修正
- `obj.rand1()`を追加

## 2.00 beta16 <Badge text='2025/10/19' />

- オブジェクトが無い状態で引数無しの`obj.getpixel()`の返却が正しくないのを修正
- `obj.getvalue()`にオブジェクトの存在確認の指定方法を追加

## 2.00 beta15 <Badge text='2025/10/12' />

- `obj.module()`を追加
- `obj.getaudio()`に音声チャンネルの指定方法を追加

## 2.00 beta14 <Badge text='2025/10/5' />

- テキスト設定項目に入力したバックスラッシュ文字が正しく変数に反映されないのを修正
- `obj.id`を追加

## 2.00 beta13 <Badge text='2025/9/27' />

- テキスト設定項目に入力したダブルクォート文字が正しく変数に反映されないのを修正
- `obj.getpixeldata()`、`obj.putpixeldata()`を追加
- `obj.getinfo("version")`を追加

## 2.00 beta12 <Badge text='2025/9/21' />

- `obj.getvalue("layer.x")`で指定したレイヤーにオブジェクトが無い場合は値を返却しないように修正
- シーンチェンジスクリプトで`obj.setanchor()`を利用出来るように修正
- 設定項目の定義にテキスト設定項目(`--text`)を追加
- `obj.getvalue()`に基準中心座標(`"cx"`、`"cy"`、`"cz"`)の指定を追加

## 2.00 beta11 <Badge text='2025/9/13' />

- スクリプト制御、スクリプトファイルの種別で含めるライブラリを変更
- `obj.copybuffer()`でオブジェクトを更新した時に一部の`obj`変数の変更が破棄されるのを修正
- `obj.layer`の値を描画対象のオブジェクトのレイヤー番号となるように修正
- `obj.drawpoly()`の配列指定(座標+色+法線)が正しく描画出来ないのを修正
- `obj.drawpoly()`に頂点リストのテーブルで指定する方法を追加
- `obj.getinfo("clock")`、`obj.getinfo("script_time")`を追加

## 2.00 beta10 <Badge text='2025/9/7' />

- `obj.setanchor()`で直接テーブル変数を指定した場合に落ちるのを修正
- スクリプト制御に不要なluaのライブラリ関数を含めないように修正

## 2.00 beta9 <Badge text='2025/8/30' />

- トラックバー移動スクリプトでの`obj.rand`のデフォルトの種の計算を修正
- テキストの個別オブジェクトの表示タイミングが`obj`変数に反映されないのを修正

## 2.00 beta8 <Badge text='2025/8/24' />

- 出力ログの内容によって落ちる場合があるのを修正
- `obj.getpixel()`のキャッシュ処理の修正と処理説明を追加
- `obj.putpixel()`、`obj.copypixel()`を追加
- `obj.pixeloption()`のオプションを一部追加
- `obj.setoption()`の合成モードの処理を一部修正

## 2.00 beta6 <Badge text='2025/8/10' />

- `obj.copybuffer()`で画像ファイルのコピーが正しく反映されない場合があるのを修正
- `obj.copybuffer()`でオブジェクトを更新した時に`obj`変数が更新されていないのを修正
- オブジェクトの画像が無い状態で`obj.drawpoly()`を呼び出すと落ちる場合があるのを修正

## 2.00 beta5 <Badge text='2025/8/3' />

- `obj.effect()`のパラメータ値を数値型で指定した場合の対策を追加

## 2.00 beta4 <Badge text='2025/7/27' />

- 仮想バッファ、キャッシュバッファが正しく生成されない場合があるのを修正

## 2.00 beta2 <Badge text='2025/7/12' />

- `copybuffer()`のコピー先種別を追加
