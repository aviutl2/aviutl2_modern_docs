---
title: Changelog
description: Explains the AviUtl ExEdit2 changelog.
lang: en
---

# Changelog

## v2.1.4 <Badge text='2026/8/8' />

- Fixed calculations for Lens Blur and Blur (Light Intensity).
- Adjusted the precision of the Grid (BPM) start position setting.
- Fixed Change Object Length not allowing an object to be changed to one frame.
- Added an option to Object Settings to display its window when an object is focused.
- Added an option to Layer Editing to select a layer when an object is clicked.
- Changed several operations to bring individual windows to the front.
- Added several display items to System Information.
- Improved resource management in rendering.
- Improved GUI drawing event management.
- Fixed several typos.

## v2.1.3a <Badge text='2026/8/2' />

- Fixed an issue where some symbols in mark notes were not saved correctly.
- Adjusted the order of items in the mark list's right-click menu.

## v2.1.3 <Badge text='2026/8/2' />

- Fixed DPI settings not being reflected in the display size of control points in time control editing.
- Fixed the unsaved indicator not appearing in the window title when no filename is specified.
- Fixed grid (BPM) visibility determination based on the layer editing zoom level.
- Adjusted playback position display by frame number to account for the configured time precision.
- Adjusted the frame position used to display the grid (BPM) start position.
- Made the grid (BPM) start position movable by dragging.
- Preserved some initial directories in file selection dialogs.
- Added an audio output toggle icon to the file output dialog.
- Added a feature for marking frames in layer editing.

## v2.1.2 <Badge text='2026/7/25' />

- Fixed audio retrieval for AVI file input.
- Fixed an issue where cutting and closing a selected range could fail to close the gap correctly.
- Changed the scene list to scroll to the selected scene when switching scenes.
- Changed trackbar setting values to be preserved when switching between movement types that support time control.
- Added an option to link intermediate points and control points when changing a trackbar movement type to time control.
- Added operations to several menus for toggling clipping objects and camera control targets.
- Added an option to layer editing to stop preview playback with a click.
- Improved dialog display processing.

## v2.1.1 <Badge text='2026/7/18' />

- Changed missing tooltip items in language files to display the Default text.
- Fixed text emoji images not displaying correctly when loaded through a plugin.
- Changed tooltips to be hidden when the application becomes inactive.
- Fixed a crash in the right-click menu when there is no target for time control editing.
- Added support for changing the editing screen zoom level in time control editing.
- Changed time control editing to operate intermediate points when intermediate points and control points are linked.
- Changed selection of an adjacent object to also select adjacent objects in its group.
- Added support for manipulating object center coordinates by <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+dragging in preview editing.
- Added an option to include the main window position when saving layouts.
- Added an option to group the slider increment and decrement buttons in object settings.
- Added options to adjust the frame rate in video file settings.
- Improved audio retrieval for AVI file input.

## v2.1.0 <Badge text='2026/7/12' />

- Fixed an issue where the same item could be displayed multiple times in language file information.
- Added a setting to link intermediate points and control points for linear movement (time control) and interpolation movement (time control).
- Added provisional support for requests to reconvert text in text editing items.

## v2.0.54 <Badge text='2026/7/7' />

- Fixed a crash that could occur when changing a trackbar movement method while time control editing was shown.
- Fixed edit section functions that return strings crashing in filter plugins and script modules.
- Fixed a crash that could occur when freeing script module metatables.
- Adjusted the display width of the shortcut key settings dialog.
- Adjusted the object settings display when text display speed is 0.
- Added support for defining differential files for the Default language in language files.
- Added support for defining tooltip text for object setting items in language files.

## 2.00 beta53a <Badge text='2026/7/5' />

- Added support for assigning shortcut keys to the Grid (BPM) settings in the window menu.
- Changed the initial Grid (BPM) values to keep only tempo and time signature.
- Added a time signature offset item to Grid (BPM) settings.

## 2.00 beta53 <Badge text='2026/7/4' />

- Added support for configuring multiple BPM values in Grid (BPM) settings.
- Added Grid (BPM) settings to Scene Operations under Edit in the window menu.
- Updated the trackbar movement menu to include items that are added only for specific types.
- Added support for creating aliases for numeric items in object settings.
- Added reference expression syntax for specifying a layer and specifying an item on the current object.
- Added an option to copy to the clipboard in PNG format.

## 2.00 beta52 <Badge text='2026/6/28' />

- Fixed positions not being reflected when detached windows were visible during layout changes.
- Included one lower folder level when scanning application data alias files.
- Added emoji to text control characters.

## 2.00 beta51 <Badge text='2026/6/20' />

- Added support for specifying multiple sub-language settings in language files.
- Made pasting filter items in object settings also apply settings such as display state.
- Temporarily added Spot Light (Camera Control) and Point Light (Camera Control).
- Fixed several typos.

## 2.00 beta50 <Badge text='2026/6/14' />

- Fixed a crash that could occur depending on conditions when creating filter plugin effects.
- Updated several icon display colors to use the text color from `style.conf`.
- Fixed differential language file settings not being merged as overwrites.
- Added language information and sub-language items to language file (`.aul2`) settings.
- Added a Language File Information menu under Other in the window menu.
- Made video-related caches be discarded when clearing a project.
- Included one lower folder level when scanning application data fonts.
- Prevented object decorations from becoming too small when layer height is small.
- Made project data from the start of batch output be restored when batch output ends.
- Added support for configuring the action after batch output completes.

## 2.00 beta49 <Badge text='2026/6/7' />

- Added codec settings for AVI file input and output.
- Changed the notification message shown when file output fails.
- Added settings to enable or disable per-section checks in object settings.
- Adjusted the display of per-section checkboxes in object settings.
- Added a repeat playback option to preview playback.
- Added a font file folder to application data.
- Added an option in font menu settings to also apply changes to list boxes.
- Updated project files to save frame range selection information.
- Temporarily added batch output support.

## 2.00 beta48 <Badge text='2026/5/30' />

- Fixed the custom object star not drawing correctly when the scene is square.
- Adjusted the display of per-section checkboxes in object settings.
- Changed the maximum time-axis zoom ratio in layer editing.
- Temporarily added video compression support for AVI file output.
- Improved VCM and ACM control processing.

## 2.00 beta47 <Badge text='2026/5/24' />

- Fixed how numeric items in reference expressions are detected in object settings.
- Fixed a crash when splitting an object with reference expressions set.
- Fixed the calculation order for text character transforms. ※ Except for individual objects.
- Made mouse-wheel zooming in preview editing use the mouse position as the reference point.
- Added Select Objects at Current Frame (Reverse Order) to Edit in the window menu.
- Added a setting item to `system.conf` for rejecting external modules.
- Adjusted the display color of hidden objects.

## 2.00 beta46 <Badge text='2026/5/17' />

- Fixed a crash when object splitting made the image size too fine.
- Replaced control characters in font names with spaces.
- Adjusted the display color of objects on hidden layers.

## 2.00 beta45 <Badge text='2026/5/10' />

- Added support for toggling Camera Control, Group Control, and Clipping Object for multiple objects at once.
- Added support for toggling filter effect visibility and locks for multiple objects at once.
- Added support for pasting and deleting filter effects on multiple objects at once.

## 2.00 beta44 <Badge text='2026/5/4' />

- Changed the operation for toggling other layers' visibility from double-click to <kbd>Alt</kbd>+click.
- Made each item in the scene settings dialog selectable from lists.
- Added a feature for creating presets in the scene settings dialog.
- Temporarily added reference expression settings to numeric items in object settings.

## 2.00 beta43b <Badge text='2026/4/28' />

- Fixed plugin function behavior.

## 2.00 beta43a <Badge text='2026/4/26' />

- Fixed package files not being installed to the correct path.

## 2.00 beta43 <Badge text='2026/4/26' />

- Fixed font list retrieval processing.
- Fixed text item tooltips not being translated.
- Made scene caches during output distinct from preview caches.
- Added a Layout Settings menu under View in the window menu.
- Adjusted the display of group items in object settings.
- Adjusted the margin size in object settings.

## 2.00 beta42 <Badge text='2026/4/18' />

- Added an option to use the frame range selection as the playback range.
- When playback starts after filling the playback buffer to its maximum, the buffered section now repeats.
- Added support for selecting all objects on another layer by dragging the layer name while holding <kbd>Ctrl</kbd>.
- Made double-clicking a layer name toggle the visibility of other layers.
- Made the current layer visible when toggling the visibility of other layers.
- Added Show/Hide Layers Other Than Current to Layer Operations under Edit in the window menu.
- Changed text editing targets to objects whose input items contain text.
- Fixed some icon buttons not being shown after closing and reopening object settings.
- Made scene and file selections also appear in mask image selection lists in object settings.
- Changed the color scheme of list selection items in object settings.
- Added input assistance key combination settings to common operation settings.

## 2.00 beta41a <Badge text='2026/4/12' />

- Fixed slightly different script function behavior.

## 2.00 beta41 <Badge text='2026/4/12' />

- Made pasted and duplicated objects on layers become selected.
- Prevented unnecessary rendering during frame movement operations.
- Fixed filter plugin initial values not being applied correctly.
- Changed text reference range calculation to occur when line breaks are inserted.
- Fixed text drawing range calculation.
- Added support for changing preview playback speed.
- Added an option to play preview audio when moving frames.

## 2.00 beta40a <Badge text='2026/4/5' />

- Fixed some script definitions not working correctly.

## 2.00 beta40 <Badge text='2026/4/5' />

- Added Interpolation Movement (Rotation) to trackbar movement methods.
- Added Layer Editing Only to the Alt+left-click drag operation setting in common operation settings.
- Added preset, character decoration, ruby text, character spacing, line spacing, transform, and comment to text control characters.
- Added X-coordinate-only specification and resetting relative specification to text control character coordinate specification.
- Adjusted text editing input assistance processing and added input assistance menu items.
- Changed text line height calculation to occur when characters are displayed.
- Adjusted text glyph and decoration center coordinates so the display reference position does not change.
- Made existing preset names selectable from lists in creation dialogs for presets and similar items.
- Prevented time control preset creation from saving with the default preset name.
- Added Save Alias to File to the layer editing menu.

## 2.00 beta39 <Badge text='2026/3/29' />

- Fixed special blend modes being applied during composited drawing for Image Composition (Object).
- Updated several scripts to restore the blend mode to Normal when they finish.
- Added operation and display options for object rotation anchors in preview editing.
- Added Alt+drag scaling operations for objects in preview editing.
- Added Alt+drag rotation operations for object scaling anchors in preview editing.
- Added a Face Media Forward menu item under Edit in the window menu.
- Added choices for object orientation in camera control options.
- Added Linear Movement (Rotation) to trackbar movement methods.
- Changed several mouse pointer shapes.

## 2.00 beta38a <Badge text='2026/3/22' />

- Fixed freezing when some script definition values were incorrect.

## 2.00 beta38 <Badge text='2026/3/22' />

- Fixed adjustment processing for playback position and object length when changing media object start and end positions.
- Prevented pull-down menus for list selection items from being hidden under the taskbar.
- Added Restart Application to Edit in the window menu.
- Added an operation in layer editing to select all objects inside the selected object selection.
- Made Alt-clicking a trackbar name show the setting value dialog.
- Added support for changing D&D priority among text, model, and shape (`.svg`) files.
- Improved object coordinate conversion processing.

## 2.00 beta37 <Badge text='2026/3/14' />

- Updated WaveFileReader to handle PCM files using WAVE_FORMAT_EXTENSIBLE.
- Fixed object operations sometimes not working correctly after splitting while click-selecting an object.
- Adjusted playback position when changing start/end positions or splitting media objects whose playback speed is not No Movement.
- When splitting or deleting an intermediate point by shortcut while click-selecting one, that intermediate point is now targeted.
- Added an option to keep the start position fixed when correcting media object length in layer editing.
- Added operations to fit video and image objects to the scene screen size.
- Added a center-item anchor to the Shatter filter effect.

## 2.00 beta36a <Badge text='2026/3/8' />

- Fixed script anchor setting functions not working correctly with some arguments.

## 2.00 beta36 <Badge text='2026/3/8' />

- Made right-clicking a window title bar show the system menu.
- Adjusted circular object anchors to display at their center coordinates.
- Fixed the drawing order of camera control target objects.
- Fixed compositing for overlapping image areas caused by transforms in Simple Transform.
- Adjusted the initial values of Simple Transform and Simple Transform (Camera Control).
- Added a Mesh Transform script.

## 2.00 beta35 <Badge text='2026/2/28' />

- Fixed object names not being applied when objects are duplicated.
- Fixed clipping object settings not being applied to Image Composition (Object).
- Fixed layer settings not being applied to Image Composition (Object).
- Changed the display color of Image Composition (Object) in layer editing.
- Added Virtual Buffer Output to object output types.
- Added Virtual Buffer to image input setting items for filter effects.
- Added an option to prioritize selected object anchors in preview editing.
- Added operations to move scenes from layer editing objects and object setting items.
- Added scene movement menus to Scene Operations under Edit in the window menu.
- Added Lock Object Anchor Operations to Edit in the window menu.
- Adjusted input operations in the shortcut key settings dialog.
- Added a description for clipping objects.
- Added taskbar progress display.

## 2.00 beta34 <Badge text='2026/2/23' />

- Changed auto-scroll to move left when a text object contains no line breaks.
- Added support for negative values in the wheel operation unit for slider movement amount settings.
- Changed the default value of Select Object Group on Click (Preview) to OFF.
- Added Select Objects at Current Frame to object selection in layer editing.
- Added Layer Operations and Scene Operations menus under Edit in the window menu.
- Added search fields to list views in several dialogs.
- Added Image Composition (Object).

## 2.00 beta33 <Badge text='2026/2/14' />

- Fixed Interpolation Movement, Interpolation Movement (Time Control), and Linear Movement (Time Control) for XY two-axis setting items.
- Fixed end time calculation when a video object's playback position uses the playback range.
- Fixed snapping when moving object anchors while holding <kbd>Shift</kbd>.
- Fixed intermediate point display positions when the layer editing cursor shape is not Frame Range.
- Made layer editing select the section at the clicked position on an object.
- Added display of the selected object section in layer editing.
- Made the background color of frame positions in object settings use the object type color.
- Added support for <kbd>Ctrl</kbd>+mouse-wheel operations on numeric and list items in object settings.
- Added increment/decrement buttons and a wheel operation unit item to slider movement amount settings in object settings.
- Added an option to show knobs on sliders in object settings.

## 2.00 beta32 <Badge text='2026/2/8' />

- Fixed anchor display for partial filters.
- When a partial filter is in the camera control target range, drawing now proceeds up to the partial filter first.
- Fixed incorrect drawing when a scene change is in the group control target range.
- Fixed scene change object switch lists not being shown.
- Added Package Information to the Other menu.
- Changed the D2D multithread option.
- Added log color settings to `style.conf`.

## 2.00 beta31 <Badge text='2026/2/1' />

- Fixed incorrect drawing when a scene change is in the camera control target range.
- Fixed incorrect drawing when multiple camera controls exist on frames in the same scene.
- Added playback speed and loop playback settings to sequential image file loading.
- Adjusted how video time positions are converted to frame positions.
- Added information shown when installing plugins and scripts.
- Added a window that displays system information.

## 2.00 beta30a <Badge text="2026/1/25" />

- Fixed the order sometimes being incorrect when pasting multiple filter effects.
- Added shortcuts for object alignment operations.

## 2.00 beta30 <Badge text="2026/1/25" />

- Fixed output setting items not being shown when an object has no input setting items.
- Made grouped windows preserve size as much as possible when toggling visibility.
- Prevented clicks from being suppressed when activating from windows other than list selection items.
- Fixed the order being incorrect when pasting multiple filter effects.
- Fixed the Wipe Reverse (Out) setting not being applied correctly.
- Fixed how video time positions are converted to frame positions.
- Suppressed automatic backups during preview playback.
- Made the window title show `*` when there are unsaved changes.
- Made layer height settings be stored per scene.
- Added a setting for whether objects are targets of group control.
- Added operations to align selected objects.
- Changed the application icon.

## 2.00 beta29 <Badge text="2026/1/17" />

- Added file output settings to scene settings.
- Made output file names during file output be stored per scene.
- Added a setting for whether to extend objects when inserting empty frames.
- Added operations to align selected objects.
- Improved resize filter processing.

## 2.00 beta28a <Badge text="2026/1/12" />

- Fixed setting group items not being shown correctly in the settings window.
- Fixed titles not being shown in some windows when detached.
- Fixed script name sections in language files not corresponding to trackbar setting values.
- When multiple linked targets exist for frame movement in scene playback, the one closest to the current position is now used.

## 2.00 beta28 <Badge text="2026/1/11" />

- Fixed text undo sometimes not being reflected in object display names.
- Fixed frame number display for the playback position not updating when opening or closing settings in the settings window.
- Fixed a deadlock that could occur in image filters that reference scene audio data.
- Added a window that displays histograms.
- Added filters that reference scenes as linked targets for frame movement in scene playback.
- Adjusted display of items being edited by color selection or time control in the settings window.
- Added support for changing preview zoom with <kbd>Ctrl</kbd>+mouse wheel in preview editing.
- Added support for scrolling the preview view by dragging with the wheel button in preview editing.
- Made output settings also change when switching objects in object settings.
- Added support for placing multiple language files as one language setting.

## 2.00 beta27 <Badge text="2026/1/3" />

- Fixed IME control not being disabled when the app starts.
- Adjusted stored window positions when they are outside the visible area.
- Made DPI settings apply to intermediate point display size in layer editing.
- Fixed display names sometimes not changing when text is changed from a plugin.
- Added an option to link scene playback to edit frame movement operations.
- Added drag auto-scroll speed settings to common operation settings.
- Added an option to use the current frame as the reference for mouse-wheel zooming in layer editing.
- Added scene objects as targets for the option to show playback position as a frame number.
- Adjusted displayed frame numbers when showing playback position as frame numbers.
- Adjusted floating-point error in counters.

## 2.00 beta26 <Badge text="2025/12/27" />

- Made moving an object's intermediate point also move group objects.
- Suppressed scroll adjustments caused by final frame changes while dragging objects.
- Fixed moving object start/end points while holding <kbd>Shift</kbd> in layer editing.
- Made clicking a selected object again cancel selection.
- Fixed displayed frame positions for Grid (BPM).
- Added the Rotation filter effect.
- Added tile-style settings to the Mosaic filter.
- Added a window for playing any scene.
- Added an option for whether the layer editing cursor shape is Frame Range.
- Added an option to move adjacent objects when moving object start/end points in layer editing.
- Made <kbd>Alt</kbd>+mouse-wheel operations in layer editing scroll in the opposite axis.

## 2.00 beta25 <Badge text="2025/12/20" />

- Fixed control-type object color settings not being applied.
- Added depth blur and focus layer settings to Camera Control.
- Added output end adjustment settings to Particle Output.
- Added shortcuts for media movement operations.
- Added an option for whether cursor movement snaps to objects in layer editing.
- Adjusted anchor display for Motion Blur and Off-screen Drawing.
- Added support for detaching plugin windows.

## 2.00 beta24a <Badge text="2025/12/14" />

- Fixed a crash when adding a scene change.

## 2.00 beta24 <Badge text="2025/12/14" />

- Added the Motion Blur filter effect.
- Added filter objects and adjusted the Add Object menu and object colors.
- Fixed the Glow filter's fixed size sometimes not being applied.
- Fixed VRAM image cache control processing.
- Fixed exclusive control for object drawing.

## 2.00 beta23a <Badge text="2025/12/7" />

- Fixed a crash that could occur when showing settings for some objects.
- Added object name settings and shortcut key operations.
- Made delete and rename key operations while clicking a layer name target the layer.

## 2.00 beta23 <Badge text="2025/12/6" />

- Made scrolling follow item movement in object settings and scene lists.
- Fixed a crash that could occur when dragging and dropping files into object settings.
- Added file drag-and-drop support in object settings for several filter effects.
- Added support for setting scenes and similar sources as pattern images for the Border and Outline filter effects.
- Made preview playback return to the playback start position after playing to the end.
- Made copy, paste, delete, and cut key operations while clicking object settings target filter items.
- Adjusted insertion positions when adding filter items in object settings.
- Added support for entering formulas in numeric setting items in object settings.
- Added scene copy and paste operations to the scene list.
- Made copy, paste, delete, and duplicate key operations while clicking the scene list target scenes.
- Added features to create scenes from files and save scenes to files.

## 2.00 beta22a <Badge text="2025/12/2" />

- Fixed the center coordinates of the Image Composition filter effect.

## 2.00 beta22 <Badge text="2025/11/30" />

- Fixed layer settings not being duplicated when duplicating scenes.
- Added support for setting multi-level labels in dialogs such as Add Alias.
- When filter effects reference scenes, they now reference within the scene's frame range.
- Added the Image Composition filter effect.
- Made control points other than the current one snap targets in time control editing.
- Added support for showing subgroup items in object settings.

## 2.00 beta21 <Badge text="2025/11/22" />

- Fixed Image Loop filter offset settings not being applied.
- Made anchors display as much as possible for individual objects.
- Fixed some anchors not displaying correctly when center coordinates differ from the object center.
- Fixed scene change video reference frames sometimes not drawing correctly.
- Fixed the edit data update flag being cleared when saving automatic backups.
- Fixed incorrect drawing when Off-screen Drawing is added to Group Control.
- Changed the default button in overwrite/delete confirmation dialogs to Cancel.
- Changed the confirmation dialog shown when exiting the application.
- Added a setting to make areas outside the range transparent in the Kaleidoscope filter.
- Added support for renaming color setting palettes.
- Added support for applying object setting presets to multiple selected objects.
- Added support for applying addition or switching to the same filter to multiple selected objects in object settings.
- Added Cut and Cut and Close Gap features for all layers in the selected range.
- Added folder items for application data.

## 2.00 beta20 <Badge text="2025/11/16" />

- Fixed scene change video reference frame calculation.
- Made objects with media input use initial values, including output.
- Fixed grouped Media Explorer tab names not changing when paths change.
- Fixed object paste positions for shortcut keys and similar operations.
- Added a background color item to scene settings.
- Added operations to change zoom ratio and layer height in layer editing.
- Added a feature to create presets in object settings.
- Added support for specifying labels when creating color setting palettes.
- Made object center coordinates snap targets in preview editing.
- Skipped automatic backup when no editing operation has been performed.
- When opening from backup history, the project name is now cleared and not included in recent history.
- Added shortcut keys and adjusted some default settings.
- Adjusted some default scene change settings.

## 2.00 beta19a <Badge text="2025/11/9" />

- Fixed exclusive control not working correctly when script execution modules differ.
- Fixed display time position precision for scene change filters.
- Added an option to layer settings for changing the setting target when selecting layers.
- Changed layer editing tooltip content.

## 2.00 beta19 <Badge text="2025/11/8" />

- Added horizontal scrolling to the log display.
- Adjusted tab names when Media Explorer is grouped.
- Added an auto-scroll option to text objects.
- Added fluctuation and distortion settings to the Particle filter.
- Added layer settings.

## 2.00 beta18b <Badge text='2025/11/2' />

- Fixed the target layer range for Time Control (Object) sometimes not being applied correctly.

## 2.00 beta18a <Badge text="2025/11/2" />

- Fixed plugin and script features.

## 2.00 beta18 <Badge text="2025/11/1" />

- Fixed a crash that could occur when outputting audio as PCM (float) 32-bit.
- Fixed color code input in object settings not being reflected in the color settings window.
- Fixed scene references sometimes not displaying correctly when they span multiple levels.
- Limited backup file history target files to the default file name format.
- Added backup file creation for unhandled exceptions and application hangs.
- Added a confirmation for restoring a project when the previous session did not exit normally.
- Added support for installing single-file plugins and scripts by drag and drop.

## 2.00 beta17 <Badge text="2025/10/26" />

- When dragging and dropping media files, one-frame video with audio is now detected as an audio file.
- Fixed alias files (`.object`) with intermediate points sometimes failing to paste.
- Fixed total time calculation in the footer display.
- Added display items to the file output dialog.
- Added an option to separate audio when dragging and dropping video files.
- Added an option to match scene settings to a video file when dragging and dropping into an empty scene.
- Added support for grouping windows by window display area.

## 2.00 beta16a <Badge text='2025/10/19' />

- Fixed size and coordinate input assistance not being applied correctly in text editing.

## 2.00 beta16 <Badge text="2025/10/19" />

- Fixed images with transparency not drawing correctly in Image Loop.
- Fixed conversion processing when upsampling audio data.
- Adjusted the character spacing upper limit for text objects and the range of drawn objects.
- Added input assistance for size and coordinate specification in text editing.
- Added a settings file for the text editing input assistance menu.
- Added support for detaching each window into an individual window.

## 2.00 beta15 <Badge text="2025/10/12" />

- Fixed drawing processing for the Border filter.
- Fixed some slider items not showing the current position.
- Added an option to add shadows to Parallel Light (Camera Control).
- Adjusted camera control drawing processing.

## 2.00 beta14 <Badge text="2025/10/5" />

- Fixed a crash that could occur when adding a filter that cannot be combined with partial filters.
- Fixed the conversion formula from BT.601 to RGB.
- Changed the maximum number for backup file and file history settings to 100.
- Added an option to display audio waveforms as absolute values in layer editing.
- Added Movement Amount Specification to trackbar movement methods.

## 2.00 beta13 <Badge text="2025/9/27" />

- Fixed a crash when an image file specified an invalid path.
- Fixed drawing processing for the Gradient filter.
- Adjusted the determination of whether data is cached in VRAM.
- Added a filter effect that adds an outline.
- Added an Ignore Intermediate Points setting to Linear Movement (Time Control).
- Added an option to show intermediate point time positions in time control editing.
- Added an option to show the layer editing scroll bar at the top.
- Added a common operation setting that treats <kbd>Alt</kbd>+left-click drag as right-click drag.
- Expanded object setting items that can be changed collectively when multiple objects are selected.
- Added support for editing multiple objects in color settings.

## 2.00 beta12 <Badge text="2025/9/21" />

- Fixed a crash that could occur while Grid (XY Axis) was displayed.
- Fixed scenes using a shape background not displaying correctly when referenced.
- Added support for unlinking grouped settings such as XYZ in object settings.
- Added an option for selected objects to follow when moving the displayed frame.
- Added a button to clear file selection in file setting items.
- Added file drag-and-drop support for script-related file setting items.
- Made time control editing control points snap to the cursor and intermediate points.
- Changed how intermediate point positions are displayed in time control editing.
- Added strikethrough to text control character decorations.
- Added a feature to duplicate scenes.

## 2.00 beta11a <Badge text="2025/9/14" />

- Fixed model file loading.

## 2.00 beta11 <Badge text="2025/9/13" />

- Fixed a crash when automatic length adjustment is enabled for text objects.
- Fixed a crash that could occur when moving object start/end points as a group.
- Fixed playback position and related values not being adjusted when moving object start/end points as a group.
- Made group settings be saved in aliases containing multiple objects.
- Changed the drawing method for Drop Shadow.
- Added a setting for whether dialogs are confirmed with the <kbd>Enter</kbd> key.
- Added a setting to play a sound (WAV file) when file output completes.
- Added sequential image output (PNG/JPG) to file output.
- Added file input for uncompressed images (BMP/TGA).
- Added a distance setting to Target-Centered Rotation.
- Added support for caching image data in VRAM (GPU-side memory).
- Temporarily added support for loading model files (`.obj`).

## 2.00 beta10 <Badge text="2025/9/7" />

- Added the Extended Color Setting filter effect.
- Added an object that reads audio buffers.
- Added a pattern image file setting to the Border filter.
- Added an option to display playback position as a frame number.
- Added a way to make labels multi-level in various selection list menu settings.
- Added an operation and option to move object setting sliders to the clicked position.
- Added a feature to show Grid (XY Axis) in the preview editing view.
- Made Grid (BPM) and Grid (Camera Control) settings be stored per project scene.
- Made the project's initial values on startup use the values from the previous new project creation.
- Added confirmation dialogs when adding plugin and script files.
- Removed compatibility support for 32-bit DLL input/output plugins.
- Removed MediaFoundationReader.

## 2.00 beta9 <Badge text="2025/8/30" />

- Updated WaveFileReader to load audio files in PCM 16-bit 1ch and PCM 24-bit formats.
- Fixed the display clear control character for text objects not working correctly.
- Fixed display timing for individual text objects not being reflected in fade effects and similar effects.
- Fixed the maximum automatic length adjustment for scene objects being one frame too short.
- Fixed correction processing when dragging objects on layers.
- Fixed random seed calculation for Random Movement.
- Added support for creating aliases from multiple objects.
- Changed the upper limit in seconds for playback positions of video files and similar media.
- Moved settings used when video files are loaded in YUV format to object settings.
- Added an option for whether the volume level meter updates outside preview playback.

## 2.00 beta8 <Badge text="2025/8/24" />

- Fixed layer range display breaking when object length changes.
- Made unrelated filters be removed when changing an object's output type.
- Made group objects also move when moving object start/end points.
- Made <kbd>Ctrl</kbd>+double-clicking an object select objects on the same layer.
- Made operations on intermediate points while holding <kbd>Shift</kbd> move before and after the intermediate point.
- Made new project settings become the initial values for the next new project.
- Made audio waveform retrieval wait while outputting or playing.
- Made audio separation separate by the number of multitracks.
- Adjusted audio waveform display color settings.
- Adjusted blend mode processing for image drawing.
- Adjusted exclusive control for input plugins.
- Added WaveFileReader to input plugins.
- Added changing the length of selected object sections and evenly spacing intermediate points.
- Added a feature to show a volume level meter during preview playback.

## 2.00 beta7 <Badge text="2025/8/16" />

- Fixed shortcut keys sometimes not being saved correctly.
- Fixed preview editing zoom in/out from the View menu not working.
- Fixed a crash that could occur when discarding caches while retrieving audio waveforms.
- Fixed setting items and related behavior for Basic Output, the default framebuffer output type.
- Changed the option to play after filling the playback buffer to its maximum into a separate operation.
- Added a mechanism for loading multitrack video. ※ MediaFoundationFileReader support is temporary.
- Added cut, copy, and paste features for filter items in object settings.
- Added Time Control (Object), which adjusts time positions of objects on layers.
- Added menu items to show Application Data and Website under Other in the window menu.

## 2.00 beta6 <Badge text="2025/8/10" />

- Adjusted frame drop and buffering control for preview playback.
- Prevented log display updates during preview playback.
- Added support for wheel operations when text editing is not focused.
- Split object cut behavior into operations that close the timeline gap and operations that do not.
- Added a feature to close objects to the left side of the timeline.
- Added a feature to cut objects to the selected frame range.
- Added a feature to show audio waveforms on audio objects in layer editing.
- Added text files (`.txt`) to drag-and-drop operations for layer editing, text editing, and similar areas.
- Added tooltips for objects in layer editing.

## 2.00 beta5 <Badge text="2025/8/3" />

- Fixed full-width characters no longer being allowed in scripts inside text.
- Fixed display colors for video file objects with no audio or audio only.
- Made the selected object after cut or split be the later-side object.
- Fixed script filter effects added to Group Control sometimes not being applied.
- Fixed window maximized state not being reflected on the next startup.
- Separated preview stop and pause buttons and shortcuts.
- Added slider movement amount settings to object setting options.
- Added an option to always show object names from the beginning in layer editing.
- Added a feature to separate audio objects from video objects.
- Added a feature to move to the start/end frames of the frame range selection.
- Added a feature to move the current frame by the configured movement amount.

## 2.00 beta4 <Badge text="2025/7/27" />

- Fixed resize settings sometimes not being applied correctly.
- Added support for line breaks in scripts inside text.
- Fixed line breaks sometimes not being reflected in text editing.
- Fixed fade-out processing for Volume Fade.
- Added support for splitting objects at intermediate point positions.
- Fixed a crash that could occur when script list selection items had no default specified.
- Fixed a crash when file output completed at the timing where file output was being interrupted.
- Added a way to change save destinations for environment settings and similar files to the `data` folder directly under the executable.
- Added an option to make mouse-wheel operations in layer editing scroll vertically.
- Added frame range selection operations and support for cutting and file output of the selected range.
- Temporarily added support for surrogate pair characters and color fonts in text objects.
- Added Object Selection to the layer editing menu.

## 2.00 beta3 <Badge text="2025/7/20" />

- Fixed a deadlock when the number of image prefetch tasks reached the limit.
- Fixed a crash that could occur depending on audio waveform display settings.
- Fixed AVI 2.0 files not being read correctly.
- Fixed object length adjustment when playback speed changes for video files and similar media.
- Fixed undo not being reflected for size items when resizing in the preview editing view.
- Made line breaks be reflected correctly when pasting in text editing.
- Fixed the upper frame rate limit in scene settings.
- Added support for setting the current layer as the target layer for Camera Control.
- Added support for fonts with different weights.
- Added support for high-DPI environments.
- Added screen and color settings.
- Added supported formats for input/output plugins.
- Added support for setting language files by drag and drop.

## 2.00 beta2 <Badge text="2025/7/12" />

- Fixed output coordinates for Randomly Output from Movement Range Coordinates in Particle Output.
- Fixed Wipe, Fade, and Volume Fade sometimes not working correctly.
- Fixed a crash when using Select Objects at Current Frame with no object selected.
- Fixed a crash that could occur when referencing scenes that use scripts or scene changes.
- Fixed scene recursion suppression processing.
- Fixed the number of digits for counter initial values.
- Fixed icon display in object settings.
- Made some non-fatal exceptions be ignored.
- Added shortcut keys and fixed some initial values.
- Added a feature to select objects before or after the selected object.
- Added a feature to change selected object length.
- Added a feature to duplicate selected objects.
- Added a feature to move to a specified time.
- Added an option to add intermediate points and split at the current frame in layer editing.
- Added a menu item to show application data folders in Media Explorer.

## 2.00 beta1 <Badge text="2025/7/7" />

- Released the beta version.
