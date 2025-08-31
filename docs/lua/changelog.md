# 更新履歴

## 2.00 beta9 <Badge text='2025/8/30' />

- トラックバー移動スクリプトでのobj.randのデフォルトの種の計算を修正
- テキストの個別オブジェクトの表示タイミングがobj変数に反映されないのを修正

## 2.00 beta8 <Badge text='2025/8/24' />

- 出力ログの内容によって落ちる場合があるのを修正
- obj.getpixel()のキャッシュ処理の修正と処理説明を追加
- obj.putpixel(),obj.copypixel()を追加
- obj.pixeloption()のオプションを一部追加
- obj.setoption()の合成モードの処理を一部修正

## 2.00 beta6 <Badge text='2025/8/10' />

- obj.copybuffer()で画像ファイルのコピーが正しく反映されない場合があるのを修正
- obj.copybuffer()でオブジェクトを更新した時にobj変数が更新されていないのを修正
- オブジェクトの画像が無い状態でobj.drawpoly()を呼び出すと落ちる場合があるのを修正

## 2.00 beta5 <Badge text='2025/8/3' />

- obj.effect()のパラメータ値を数値型で指定した場合の対策を追加

## 2.00 beta4 <Badge text='2025/7/27' />

- 仮想バッファ、キャッシュバッファが正しく生成されない場合があるのを修正

## 2.00 beta2 <Badge text='2025/7/12' />

- copybuffer()のコピー先種別を追加
