---
title: Quick Guide
description: A quick guide to various AviUtl ExEdit2 operations.
---

<script setup>
import EnUiText from "../components/EnUiText.vue";
</script>

# Quick Guide

This is a quick operation guide. ※ More detailed explanations are planned for the future.  
The basic operations are similar to the previous ExEdit.

## <EnUiText scope="Menu" text="ファイル" /> Menu

Loads and saves projects, and exports editing data to files.

## <EnUiText scope="Menu" text="編集" /> Menu

Provides editing operations and clears loaded caches.

## <EnUiText scope="Menu" text="表示" /> Menu

Shows or hides each window.

## <EnUiText scope="Menu" text="設定" /> Menu

Configures shortcut keys, menu display order, backups, cache size, and other settings.

## <EnUiText scope="Menu" text="その他" /> Menu

Shows version information and script information.

## Window Operations

Various windows can be placed inside the application window.  
Drag the border of each window to resize it or swap its position.  
Use <EnUiText scope="Menu" text="表示" /> on the menu bar to show or hide each window.  
Use <EnUiText scope="Menu" text="ウィンドウ配置" /> in each window's right-click menu to change its display area group.  
※ <EnUiText scope="Menu" text="ウィンドウを分離" /> separates the window into its own window.
※ When <EnUiText scope="Menu" text="ウィンドウのグループ化" /> is enabled, grouped windows in the same area are collected and selectable as tabs.
Use <EnUiText scope="Menu" text="オプション" /> in each window's right-click menu to change behavior settings related to that window.

## <EnUiText scope="Menu" text="レイヤー編集" />

Objects such as image files can be placed and displayed at any time position on a layer.  
Object drawing and filter processing are executed in order from top to bottom.

Hold <kbd>Ctrl</kbd> while operating objects to select multiple objects.  
※ Grouped objects are also selected.  
Hold <kbd>Ctrl</kbd> and double-click an object to select objects on the same layer.  
※ If you double-click the start or end point of an object, objects before the start point or after the end point can be selected.  
Hold <kbd>Ctrl</kbd>+<kbd>Shift</kbd> and click to select all objects within the selected object range.
Hold <kbd>Ctrl</kbd> and click a layer name to select only the objects on that layer.  
※ If you drag the mouse while holding <kbd>Ctrl</kbd>, objects on other layers can also be selected.  
Hold <kbd>Ctrl</kbd> and drag the mouse to select objects in a rectangular range.

When operating an object's start or end point, objects in the same group that share the same start or end position also move.  
When operating an object's start, end, or intermediate point while holding <kbd>Shift</kbd>, the area before or after the selected point moves.
While an object or its start, end, or intermediate point is selected by clicking, the cursor keys can move its position.
Shortcut key operations for splitting or deleting an intermediate point while it is selected apply to that intermediate point.
Hold <kbd>Alt</kbd> and double-click an object to move to the scene referenced by that object.

Hold <kbd>Shift</kbd> while moving the displayed frame to enter frame range selection mode.  
※ Double-click the frame range selection display at the top to clear the range selection.

Media files and alias files (`.object`) can be loaded by drag and drop.  
Click a layer name to toggle the layer's visibility.  
※ Shortcut key operations for delete or rename while a layer is selected by clicking apply to that layer.
Drag a layer name to change the layer position.  
Hold <kbd>Alt</kbd> and click a layer name to toggle the visibility of other layers.  
Drag with the right mouse button to scroll layers.  
In the editing area, hold <kbd>Ctrl</kbd> and drag with the right mouse button horizontally to change the layer zoom level.
In the layer name area, hold <kbd>Ctrl</kbd> and drag with the right mouse button vertically to change the layer height.

Various operations are available from the right-click menu.
Object alignment operations use the selected object at the right-click position when the menu was opened as the reference.
※ If there is no object at the right-click position, the last selected object is used as the reference.
※ Alignment operations may be restricted by intermediate points or the positions of other objects.
※ Unselected objects between selected objects may also be moved together.
※ <kbd>Alt</kbd>+click operations may be unavailable depending on the right-click drag operation settings in the common operation settings.

## Layer Settings

Displays settings for the selected layer.
Coordinates and volume can be adjusted for all media objects on the layer.
※ This does not affect target objects for camera control.

## <EnUiText scope="Menu" text="プレビュー編集" />

Displays a preview of the currently displayed frame.  
The control bar at the bottom can change the displayed frame, play the preview, and perform other operations.

Previewed objects can be moved by dragging with the mouse.
Scale anchors at the object's vertices can change the scale by dragging with the mouse.
The scale can also be changed by <kbd>Alt</kbd>+dragging the object itself.
※ If the input settings contain a <EnUiText scope="Effect" text="サイズ" /> item and it is set to <EnUiText scope="Effect" text="移動無し" />, the size is adjusted instead of the scale.
Scale anchors can also change the Z-axis rotation setting with <kbd>Alt</kbd>+drag.
※ Object anchors may not display correctly depending on the combination of filter effects.

When rotation anchor display is enabled, a rotation anchor appears at the center of the object.
Drag the rotation anchor to rotate the object on the vertical and horizontal axes.
Hold <kbd>Alt</kbd> while dragging to rotate on the depth axis.
Hold <kbd>Alt</kbd> and double-click to face the object forward.

For camera control, drag with the right mouse button to change the camera viewpoint.  
The average level of the volume level meter is about 400 ms during playback and the average value for one frame during editing.

Media files, project files, and alias files (`.object`) can be added to the layer at the current frame position by drag and drop.

Use <kbd>Ctrl</kbd>+mouse wheel to change the preview screen zoom level around the mouse position.
Drag with the wheel button to scroll the preview screen.
Various operations are available from the right-click menu.

## Scene Playback

Displays a preview of the displayed frame for the specified scene.
The control bar at the bottom can change the displayed frame, play the preview, and perform other operations.

It can follow movement of the editing frame in the same scene or a referenced scene.
Referenced scene synchronization works when a scene object or a filter such as a mask that references a scene exists.
※ Referenced scene synchronization may not work correctly depending on the scene object settings.
※ The playback speed must be set to <EnUiText scope="Effect" text="移動無し" /> in the forward direction, and the playback position must be set to <EnUiText scope="Effect" text="再生範囲" />.

Click the preview screen to play, or drag with the mouse to move the displayed frame.
Use <kbd>Ctrl</kbd>+mouse wheel to change the preview screen zoom level around the mouse position.
Drag with the right mouse button to scroll the preview screen.
Various operations are available from the right-click menu.

## <EnUiText scope="Menu" text="オブジェクト設定" />

Displays the settings for the object selected from the layer.  
Drag a filter name to change the position of the filter item.
※ Shortcut key operations such as copy, paste, and delete while a filter item is selected by clicking apply to that filter item.

The numeric part of a trackbar can be entered directly. ※ Press <kbd>Tab</kbd> while entering a value to move to the next candidate.  
※ If the option to move to the clicked slider position is enabled, double-clicking can enter input mode.
Values can also be changed by dragging the numeric part.  
※ If the option to show the slider knob is enabled, values can also be changed by dragging the knob.
Hold <kbd>Shift</kbd> while dragging to make finer adjustments.
Hold <kbd>Alt</kbd> and click to move to the clicked slider position.
Numeric values and list items can also be changed with <kbd>Ctrl</kbd>+mouse wheel.

If an object has a setting item that references a scene, hold <kbd>Alt</kbd> and double-click that setting item's button to move to the referenced scene.

When an object is selected, pressing <kbd>Tab</kbd> (default setting) moves to an object on the current frame.
If that object is already selected, it moves to the object on the next layer.  
Hold <kbd>Shift</kbd> to move in the reverse direction.

When setting items are changed while multiple objects are selected, the changes are applied to all selected objects.
※ Some items, such as files and scenes, and cases where filter positions differ are not applied.

The right-click menu can change default values used when creating or initializing objects.
For objects with media input, settings combined with the output are saved as the default values.
※ Defaults cannot be set as output defaults. ※ Such as particle output defaults.

The icon menu can create presets for setting items.
Presets can save and recall either only the current settings or settings that include filter effects from the current item onward.
※ If filter effects from the current item onward are included, applying the preset replaces the current item and later items.
When creating a preset, you can specify which setting items to save.
Setting items outside the target range keep their previous values even after the preset is applied.

If the selected object is a media object with settings such as coordinates,
the numeric keypad <kbd>2</kbd><kbd>4</kbd><kbd>6</kbd><kbd>8</kbd> moves it, <kbd>/</kbd><kbd>\*</kbd> rotates it, and <kbd>-</kbd><kbd>+</kbd> changes its scale.

The setting file can be changed by dragging and dropping a supported media file.  
Drag with the right mouse button to scroll the settings screen.  
Various operations are available from the right-click menu.

## <EnUiText scope="Menu" text="メディアエクスプローラー" />

Displays Windows Explorer.  
The control bar at the top can move between displayed folders.  
The right-click menu on the top control bar can manage bookmarks, change window placement, and show the application data folder.  
※ Files placed in the application data folder are reflected after restarting the application.

## <EnUiText scope="Menu" text="シーンリスト" />

Displays the scene list.  
Drag a scene name to change the scene position.
※ Shortcut key operations such as copy, paste, and delete while a scene is selected by clicking apply to that scene.

Scenes can be added by dragging and dropping media files or scene files.
※ Object files (`exo`) from the previous ExEdit can be added as scenes, but many parts may not load correctly because of various specification differences.

Drag with the right mouse button to scroll the list screen.
Various operations are available from the right-click menu.
※ Scene copies are reference copies.

## <EnUiText scope="Menu" text="オブジェクトリスト" />

Displays a list of objects on the current frame.  
Drag with the right mouse button to scroll the list screen.  
Various operations are available from the right-click menu.

## <EnUiText scope="Menu" text="色設定" />

Sets the color of the selected object.  
Click the settings icon for a color setting item in <EnUiText scope="Menu" text="オブジェクト設定" /> to display settings for that target item.
If multiple objects are selected when the settings icon is clicked, multiple objects can be changed.

The switch icon at the top can create and change palettes.  
Preset names can be set for palette colors.  
Preset names are added to the selection list for color setting items in <EnUiText scope="Menu" text="オブジェクト設定" />.  
Preset names can be referenced from text scripts.

## <EnUiText scope="Menu" text="時間制御編集" />

Edits time control settings for the selected object.  
If the trackbar movement method in <EnUiText scope="Menu" text="オブジェクト設定" /> supports time control, click the settings icon to display settings for the target item.

Time control can adjust the time axis from the start to the end of an object.  
The horizontal axis is the value axis from the start value to the end value, and the vertical axis is the time axis from the start time to the end time.  
For <EnUiText scope="Effect" text="直線移動(時間制御)" /> and <EnUiText scope="Effect" text="補間移動(時間制御)" />, intermediate point times are ignored and the times from the time control settings are applied.  
When the setting to link intermediate points and control points is enabled, they are automatically arranged so that their times are synchronized.  
※ When linked, control points cannot be added, and the horizontal and vertical axes cannot be moved.

The list icon at the top can load and create presets.  
Various operations are available from the right-click menu.  
Copy and paste operations target the entire time control setting.

## <EnUiText scope="Menu" text="テキスト編集" />

Edits the text of the selected object.  
Editing is available when the object's input item contains text.

In text editing, <kbd>Ctrl</kbd>+<kbd>Space</kbd> can use input assistance.  
In the font-name control character section, candidates for configured fonts are displayed.  
In the color-code control character section, candidates for configured preset colors are displayed.  
In the emoji control character section, candidates for registered emojis are displayed.  
In other areas, a control character template menu is displayed.
While a range is selected, <kbd>Ctrl</kbd>+<kbd>plus/minus keys on the numeric keypad</kbd> assists with entering size control characters.
While a range is selected, <kbd>Ctrl</kbd>+<kbd>cursor keys</kbd> assists with entering coordinate control characters.

## Alias

Aliases can be created for objects, filters, and numeric items with the current setting values from <EnUiText scope="Menu" text="オブジェクト設定" /> and other areas.

The alias save folder is `ProgramData\aviutl2\Alias`.  
※ There is currently no delete function, so delete files directly.

## Shortcut Keys

Shortcut keys can be registered from <EnUiText scope="Menu" text="設定" /> -> <EnUiText scope="Menu" text="ショートカットキーの設定" /> in the window menu.  
Click the target shortcut key field, then press a key to change it.

## Object Add Menu

The display order, hierarchy, and visibility of the object add menu can be changed from <EnUiText scope="Menu" text="設定" /> -> <EnUiText scope="Menu" text="オブジェクト追加メニューの設定" /> in the window menu.

Drag the target item field with the mouse to change the display order.  
Click the target label field to select or edit the display hierarchy name.  
Specify text separated by `\` in the label name to create multiple hierarchy levels.
Various operations are available from the right-click menu.

## Trackbar Move Menu

The display order, hierarchy, and visibility of the trackbar movement method menu can be changed from <EnUiText scope="Menu" text="設定" /> -> <EnUiText scope="Menu" text="トラックバー移動メニューの設定" /> in the window menu.

Drag the target item field with the mouse to change the display order.  
Click the target label field to select or edit the display hierarchy name.  
Specify text separated by `\` in the label name to create multiple hierarchy levels.
Various operations are available from the right-click menu.

## Time Control Preset Menu

The display order, hierarchy, and visibility of the time control preset list menu can be changed from <EnUiText scope="Menu" text="設定" /> -> <EnUiText scope="Menu" text="時間制御メニューの設定" /> in the window menu.

Drag the target item field with the mouse to change the display order.  
Click the target label field to select or edit the display hierarchy name.  
Specify text separated by `\` in the label name to create multiple hierarchy levels.
Various operations are available from the right-click menu.

## Preset Color Menu

The display order, hierarchy, and visibility of the preset color menu can be changed from <EnUiText scope="Menu" text="設定" /> -> <EnUiText scope="Menu" text="プリセット色メニューの設定" /> in the window menu.

Drag the target item field with the mouse to change the display order.  
Click the target label field to select or edit the display hierarchy name.  
Specify text separated by `\` in the label name to create multiple hierarchy levels.
Various operations are available from the right-click menu.

## Font Menu

The display order, hierarchy, and visibility of the font menu can be changed from <EnUiText scope="Menu" text="設定" /> -> <EnUiText scope="Menu" text="フォントメニューの設定" /> in the window menu.
※ All fonts are displayed in the dropdown list.
An option is available to apply the settings to list boxes as well.

Drag the target item field with the mouse to change the display order.  
Click the target label field to select or edit the display hierarchy name.  
Specify text separated by `\` in the label name to create multiple hierarchy levels.
Various operations are available from the right-click menu.

## Input Plugin Settings

The priority order and supported extensions of input plugins can be changed from <EnUiText scope="Menu" text="設定" /> -> <EnUiText scope="Menu" text="入力プラグインの設定" /> in the window menu.  
When loading media files, plugins with configured supported extensions are used.

Drag the target plugin field with the mouse to change its priority order.  
The right-click menu can perform operations such as configuring the target plugin.

## Backup History

Automatic backups, edit resume, and history list settings can be configured from <EnUiText scope="Menu" text="設定" /> -> <EnUiText scope="Menu" text="バックアップ履歴の設定" /> in the window menu.  
The backup save folder is `ProgramData\aviutl2\Backup`.

## Cache Size

Various cache size settings can be changed from <EnUiText scope="Menu" text="設定" /> -> <EnUiText scope="Menu" text="キャッシュサイズの設定" /> in the window menu.
The VRAM data cache only caches still images.
※ If set to 0, the VRAM data cache is disabled.

## Common Operation Settings

Overall common operation settings can be changed from <EnUiText scope="Menu" text="設定" /> -> <EnUiText scope="Menu" text="共通操作の設定" /> in the window menu.

## Screen and Color Settings

High-DPI display and YUV input/output conversion settings can be changed from <EnUiText scope="Menu" text="設定" /> -> <EnUiText scope="Menu" text="画面の設定" /> in the window menu.  
※ DPI changes while the application is running are not reflected.  
※ In high-DPI environments, enlarged size display may be difficult to see.

## Language Settings

The language can be changed from <EnUiText scope="Menu" text="設定" /> -> <EnUiText scope="Menu" text="言語の設定" /> in the window menu.  
Languages can be added by placing language files (`.aul2`) in `ProgramData\aviutl2\Language`.  
Language files (`.aul2`) can also be set by dragging and dropping them onto the preview screen.

## Add Media Objects

Media objects can be added from the right-click menu in the <EnUiText scope="Menu" text="レイヤー編集" /> window.
Media objects are drawn in order from the upper layers.
If a filter effect is placed on a layer from <EnUiText scope="Menu" text="フィルタ効果を追加" /> in the right-click menu, the filter effect is applied to the immediately preceding media object.

## Add Filter Objects

Filter objects can be added from the right-click menu in the <EnUiText scope="Menu" text="レイヤー編集" /> window.
Filter objects can apply filters to the current drawing buffer.

## <EnUiText text="動画ファイル" />

Loads the specified video file. AVI files can be loaded by default.
If the playback position is <EnUiText scope="Effect" text="移動無し" /> or <EnUiText scope="Effect" text="再生範囲" /> and loop playback is not used, the playback position is adjusted when changing or splitting the object's start and end positions.
※ Depending on the playback speed setting, adjustment may not be possible.

## <EnUiText text="画像ファイル" />

Loads the specified image file. BMP, PNG, JPG, and GIF files can be loaded by default.
Image files supported by Windows Imaging Component (WIC) can be loaded, but their extensions must be registered for WICImageFileReader from the input plugin settings.

## <EnUiText text="音声ファイル" />

Loads the specified audio file. WAV files can be loaded by default.
If the playback position is <EnUiText scope="Effect" text="移動無し" /> or <EnUiText scope="Effect" text="再生範囲" />, the playback speed is <EnUiText scope="Effect" text="移動無し" />, and loop playback is not used, the playback position is adjusted when changing or splitting the object's start and end positions.

## Text

Displays text.  
Control characters can be used in text.

### Change Color (Text Color, Shadow/Outline Color)

`<#[RGB value (hex)][,RGB value]>` ※ Preset colors can be specified instead of RGB values.
Changes the text color and shadow/outline color.

Example: `<#ffffff>` `<#000000,ffffff>` `<#>` `<#red>`

### Change Size

`<s[text size]>`
`<s[font size][,font name][,decoration (B=bold/I=italic/S=strikethrough)][,outline size]>`

Changes the text size. ※ Fonts and other settings can also be changed, but changing them with `<@font>` is recommended.
※ Adding plus, minus, or `*` to the font size makes it a relative specification.

Example: `<s32>` `<s+10>` `<s*1.5>` `<s>`

### Change Font and Text Decoration

`<@[font name][,text decoration (0-6/B/I/S)]>`

Changes the font and text decoration.
Text decoration:

- `0`: standard text
- `1`: shadowed text
- `2`: shadowed text (light)
- `3`: outlined text
- `4`: outlined text (thin)
- `5`: outlined text (thick)
- `6`: outlined text (square)

Style:

- `B`: bold
- `I`: italic
- `S`: strikethrough

※ Multiple styles can be specified after the text decoration number.
※ Strikethrough cannot be used for individual objects.

Example: `<@Meiryo>` `<@Meiryo,3>` `<@Meiryo,6BI>` `<@>`

### Change Font Style

`<@+[style (B=bold/I=italic/S=strikethrough)]>` ※ adds a font style
`<@-[style (B=bold/I=italic/S=strikethrough)]>` ※ removes a font style

Adds or removes styles from the current font.

Example: `<@+B>` `<@-B>`

### Apply Preset

`<$[preset name]>`

Applies settings for enabled target items in the text preset. ※ Only items that can be changed with control characters are applied.
※ Size, character spacing, line spacing, and display speed use the values at the start point.
※ `<$>` resets all setting items that can be changed by presets to the initial text values.

For individual objects, filter effects from the current item onward are also applied. ※ They are added as filters.

Example: `<$preset name>` `<$>`

### Change Display Speed

`<r[display speed]>`

Changes the text display speed.

Example: `<r10>` `<r>`

### Display Wait

`<w[wait time (seconds)]>`

Waits to display until the specified time has elapsed.
Adding `*` before the time waits for that time multiplied by the number of displayed characters.

Example: `<w5>` `<w0.5>` `<w*0.2>`

### Clear Display

`<c[wait time until clear (seconds)]>` ※ The immediately following line break is ignored.

Clears the text after waiting for the specified time. ※ If omitted, the text is cleared immediately.

Example: `<c>` `<c5>` `<c*0.2>`

### Specify Coordinates

`<p[X coordinate][,Y coordinate][,Z coordinate]>`

Changes the text display position to the specified coordinates. ※ Depending on the value, it may not draw correctly.
Adding plus or minus to coordinates makes them relative coordinate specifications.
For relative specifications, `<p>` can return to the base coordinates. ※ Absolute specifications and line breaks update the base.

Example: `<p+10>` `<p20,40,80>` `<p+20,+40>` `<p>`

### Change Character and Line Spacing

`<gw[character spacing]>`
`<gh[line spacing]>`

Changes character spacing and line spacing.

Example: `<gw10>` `<gh10>` `<gw>` `<gh>`

### Specify Text Transformation

`<tw[horizontal scale]>`
`<th[width scale]>`
`<tr[angle]>`

Changes the vertical/horizontal scale and angle of displayed text. ※ Depending on the value, it may not draw correctly.
Adding plus or minus to the angle makes it a relative angle specification.

Example: `<tw0.8>` `<th0.8>` `<tr90>` `<tr+45>` `<tw>` `<th>` `<tr>`

### Display Emoji

`<&[emoji name]>`

Displays a registered image file as an emoji.  
※ Emoji image files must be placed in the application data font file folder.

Example: `<&emoji>` `<&like>`

### Specify Furigana (Ruby)

`</>[kanji]<![scale][+]>[furigana]></>`

Specifies furigana display for a text block.
※ Depending on the combination with control characters, it may not draw correctly.
Adding the plus specification expands line spacing to include furigana.

Example: `</>control characters<!>kontororu moji</>`
`</>line spacing expansion<!+>gyokan kakucho</>`
`</>character spacing adjustment<!0.4><gw8><#ff8888>jikan chosei<#><gw></>`

### Comments and Text Block Separators

`<//[comment]//>` ※ Comments can include line breaks.
`</>` ※ Separates text blocks. By default, the entire line is one block.

Comments that do not affect display can be written.

Example: `<// fix later //>`

### Script

`<?[script]?>`
`<?=[argument for the script function mes()]?>`

Executes a script and displays the returned string.
※ For script specifications, see [Lua Script](./lua/index).

Example: `<?obj.rz=obj.time*360?>` `<?=string.format("%02d:%02d",obj.time/60,obj.time%60)?>`

## Figure

Displays a solid-color background or simple shapes.  
If an SVG file is specified from the figure type button, it can be used as a figure.  
Placing SVG files in `ProgramData\aviutl2\Figure` adds them to the figure types.

## Frame Buffer

Imports data from the current drawing buffer.  
Use this when applying a filter to the entire screen.

## <EnUiText text="画像合成(オブジェクト)" />

Composites image-composition target objects on lower layers into a single image.
※ The lower layer range can be specified with the number of target layers.
※ The image composition object is drawn at the bottom of the target layers.
※ Target objects are not targets of group control or camera control. The image composition object becomes the target instead.
※ Depending on the filter combinations of the target objects, the result may not behave as intended.
※ If target objects are not placed on the same plane, the display or behavior may not match the intended result.

## Group Control

Adjusts drawing coordinates, volume, and other values for group-control target objects on lower layers.
※ The lower layer range can be specified with the number of target layers.
Adding filter effects can apply filter effects to all target media objects.

## Camera Control

Draws camera-control target objects on lower layers according to the camera coordinates and the direction of the target point.
※ The lower layer range can be specified with the number of target layers.
※ Target objects are drawn together at the bottom of the target layers.
※ During preview, the grid display for camera control is drawn to the frame buffer.
※ If a light source is set when no ambient light setting exists, ambient light is set automatically.
※ If the shadow range is large, shadows may not draw correctly.
※ Up to 10 light sources can be added for camera control.

## Scene Change

Adds a scene transition effect.

Place it so that the start frame of the scene change aligns with the frame position where the scene switches.  
If the beginning of the scene change is placed at the end of a video file object, video playback continues.
※ If a scene change is inside a camera-control target range, the scene-change target area is drawn first.
※ Depending on the combination with time control, the result may not behave as intended.

Placing monochrome PNG files that define wipe effects in `ProgramData\aviutl2\Transition` adds them to the scene change types.

## <EnUiText text="モーションブラー" />

Blurs the image along the time axis.
Depending on the combination of objects and filter effects, processing may not work correctly.
※ If display starts from the middle of an object because of seeking or dropped frames during playback, it will not display correctly.
※ If motion blur is inside a camera-control target range, the blurred part is drawn first.
※ Motion blur is disabled for camera-control target ranges in the editing viewpoint.

## Partial Filter

Applies filter effects added to the partial filter only to part of the screen.
※ Some filters may not process correctly.
※ If a partial filter is inside a camera-control target range, the partial-filter target area is drawn first.

## Clipping Object

When a media object is set as a clipping object, target objects on lower layers can be clipped and drawn in the shape of the clipping object.
※ Clipping objects can be toggled from the icon at the top of <EnUiText scope="Menu" text="オブジェクト設定" />.

If the target object is group control or camera control, all objects targeted by that group control or camera control become clipping targets.

If multiple clipping objects are placed on layers above the target object, the clipping objects are composited and used for clipping.

## Reference Expressions

Reference expressions can be set from the click menu for numeric item names in <EnUiText scope="Menu" text="オブジェクト設定" />.  
When a reference expression is set, the final value can be calculated by referencing values from the current item or other items.

### Example: Reference Another Item in the Same Effect

`X`  
`サイズ`

### Example: Reference an Item in Another Effect on the Same Object

`ぼかし.範囲`  
`図形.X`

### Example: Reference an Effect Item on an Object in Another Layer

`layer1.ぼかし.範囲`  
`above.X` ※ references the nearest object above  
`under.X` ※ references the nearest object below  
`above2.X` ※ references the object two layers above  
`under2.X` ※ references the object two layers below  
`レイヤー名.ぼかし.範囲` ※ can specify a layer by name when a layer name is set

### Example: Calculate Values from Referenced Items

`X*2`  
`layer1.X-100`  
`@abs(layer7.X)/2`

### Example: Reference Using the Current Item Name

If the item name is `$`, it is expanded to the current item name.

`above.$`  
`$+1`

### Functions Available in Reference Expressions

Function names are prefixed with `@`.

- `@min(a,b)` / `@max(a,b)` / `@abs(v)` ...: functions from Lua's math library
- `@clamp(v,min,max)`: additional custom function

※ Some item names may not be referenceable, such as names containing symbols or starting with numbers.  
※ When referencing the first effect on another layer, the effect name can be omitted.  
※ If the referenced effect is media input, output items are also included.

## Scripts and Plugins

Adding script files can add animation effects, custom objects, camera effects, scene changes, and trackbar movement methods.
※ Each script becomes an individual object or filter effect item.

Adding plugin files can add input file types, output file types, editing windows, objects, and filter effect types.

Plugins and scripts consisting of package files or single files can also be installed by dragging and dropping them onto the preview screen.
※ Multiple plugin and script files can be dragged and dropped together.

Files installed from package files can also be uninstalled from <EnUiText scope="Dialog" text="パッケージ情報" />.

## Fonts and Emojis

If font files that are not installed on the system (`*.ttf`, `*.ttc`, `*.otf`, `*.otc`) are placed in `ProgramData\aviutl2\Font`, they are added to the font list.
If emoji image files (`*.svg`, `*.png`, `*.bmp`) are placed there, they are added as emoji types that can be used from control characters.  
※ Files with the same base filename are registered as only one emoji.

※ One level below the folder is also included.

## Layout

Although these settings cannot be changed from the UI, placing a `style.conf` settings file can change display layouts, colors, fonts, and other settings.

Create a file based on the `style.conf` file in the installation folder, modify the items you want to change, and place it at `ProgramData\aviutl2\style.conf` to apply the changes.  
※ It is also acceptable to include only the section items you want to change.

The `system.conf` settings file can use a setting item that rejects external modules.

## Batch Output

File output for editing data can be processed in batches.
Batches can be added from the batch registration button in the file save dialog for AVI file output and various plugin outputs.

The batch output dialog can be displayed from <EnUiText scope="Menu" text="ファイル" /> -> Batch Output in the window menu.
Batch output can be started and various settings can be configured from the batch output dialog.
※ Some output plugins do not keep output settings on the batch side.

## Installer

The installer supports the following command-line options.

```txt
AviUtl2_setup.exe [option]
(no arguments)          : installation wizard
-uninstall              : uninstall wizard
-I (installation path)  : install; ※ must be run with administrator privileges
-U                      : uninstall; ※ must be run with administrator privileges
-F                      : associate files with the application; ※ must be specified before -I
-S                      : create a desktop shortcut; ※ must be specified before -I
-L                      : copy language files; ※ must be specified before -I
```
