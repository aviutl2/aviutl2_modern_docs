---
title: "Lua Script: Changelog"
description: This page explains the changelog for Lua scripts in AviUtl ExEdit2.
lang: en
---

# Changelog

## 2.1.0 <Badge text='2026/7/12' />

- Changed `obj.getoption("camera_param")` and `obj.getoption("camera_focus")` to return default values when the object is not subject to camera control.
- Changed `obj.setoption("camera_param")` and `obj.setoption("camera_focus")` not to produce an error when the object is not subject to camera control.
- Changed the return value of `obj.getoption("camera_mode")` to a numeric type.

## 2.00 beta53a <Badge text='2026/7/5' />

- Changed the return value of `obj.getinfo("bpm_list")`
- Added `"frame_max"` and `"layer_max"` to `obj.getinfo()`
- Added `"drawtarget"` and `"draw_state"` to `obj.getoption()`
- Added `"frame_s"` and `"frame_e"` specifications to `obj.getpoint()`

## 2.00 beta53 <Badge text='2026/7/4' />

- Changed `obj.getvalue()` so disabled specified effects are not targeted
- Added `obj.getinfo("bpm_list")`
- Added `"blend"`, `"culling"`, and `"billboard"` to `obj.getoption()`
- Added `obj.getfont()`

## 2.00 beta52 <Badge text='2026/6/28' />

- Added `obj.setoption("camera_focus")` and `obj.getoption("camera_focus")`

## 2.00 beta50 <Badge text='2026/6/14' />

- Added an initial value argument for per-section settings to the `--checksection` definition
- Changed variables in the `global` table to be stored as binary-safe strings
- Added `obj.getvalue(layer,effect,item,...)`

## 2.00 beta49 <Badge text='2026/6/7' />

- Changed the return value for per-section checkboxes in `obj.getvalue()`
- Added the script-shared `global` table

## 2.00 beta48 <Badge text='2026/5/30' />

- Fixed processing and added explanations for when the target of `obj.load("layer")` is an individual object
- Added the `"screen"` option to `obj.setanchor()`

## 2.00 beta45 <Badge text='2026/5/10' />

- Fixed the specification for displaying only part of a setting item name
- Made it possible to change the reference time of individual objects with the return value of the callback function in `obj.multiobject()`

## 2.00 beta43 <Badge text='2026/4/26' />

- Fixed an exception when the default font value for `--font` does not exist
- Changed `obj.load("text.layout")` to return center coordinates when a text alignment type is specified

## 2.00 beta42 <Badge text='2026/4/18' />

- Restored the return value on `obj.load("movie")` load failure to the previous value. ※ For compatibility

## 2.00 beta41a <Badge text='2026/4/12' />

- Changed `obj.load()` to clear the object image when loading fails

## 2.00 beta41 <Badge text='2026/4/12' />

- Changed `obj.load()` to return load failures
- Added `"movie.frame"`, `"movie.info"`, and `"text.layout"` specifications to `obj.load()`

## 2.00 beta40a <Badge text='2026/4/5' />

- Fixed scripts not working when a `--separator` definition is added

## 2.00 beta40 <Badge text='2026/4/5' />

- Added a text alignment type argument to `obj.load("text")`
- Added `"pos"`, `"angle"`, `"center"`, and `"scale"` specifications to `obj.getvalue()`
- Added the `--separator` definition

## 2.00 beta39 <Badge text='2026/3/29' />

- Fixed a crash when `error()` has no `message` argument
- Changed `obj.setoption("blend")` to set normal blending when no blend mode is specified

## 2.00 beta38 <Badge text='2026/3/22' />

- Changed `obj.multiobject()` to restore the original `obj.index` and `obj.num` values when it ends
- Added movement mode specification to `obj.getpoint("default")`
- Added zero-value name and operation multiplier arguments to the `--track` definition
- Added a specification for displaying only part of a setting item name

## 2.00 beta37 <Badge text='2026/3/14' />

- Changed the `print()` function to output logs. ※ `debug_print()` is also changed to the same behavior
- Fixed the calculation for `obj.setoption("blend","alpha_sub")`
- Added the `--trackgroup` definition
- Added a specification to `obj.setanchor()` for referencing values from multiple trackbar items
- Added a specification to `obj.pixelshader()` and `obj.computeshader()` for using shader definitions from other scripts
- Added `obj.getpoint("default")`

## 2.00 beta36 <Badge text='2026/3/8' />

- Fixed the temporal buffer area specification not being applied by `obj.load("tempbuffer",x,y,w,h)` when the object is empty
- Added `obj.multiobject()`. ※ `obj.index` and `obj.num` are changed inside `obj.multiobject()` processing
- Added `"small"`, `"mesh"`, `"rgba"`, and default coordinate specifications to the options for `obj.setanchor()`
- Added `"rgba_add"` specification to `obj.setoption("blend")`
- Added `"no_resize"` specification to `obj.setoption("focus_mode")`
- Added the `--checksection` definition

## 2.00 beta35 <Badge text='2026/2/28' />

- Made `obj.index` and `obj.num` changeable
- Added the `--require` definition

## 2.00 beta34 <Badge text='2026/2/23' />

- Fixed object parameters being cleared by `obj.load("textlayout")`

## 2.00 beta32 <Badge text='2026/2/8' />

- Changed `obj.id` to be the object ID of the drawing target
- Added effect and setting item name specification methods to `obj.getvalue()`
- Added bold, italic, character spacing, and line spacing arguments to `obj.setfont()`
- Added `"textlayout"` specification to `obj.load()`

## 2.00 beta30 <Badge text='2026/1/25' />

- Added the `"track.xxx"` specification method to `obj.getvalue()`
- Added the `--string` definition

## 2.00 beta29 <Badge text='2026/1/17' />

- Fixed the values of `obj.frame` and `obj.time` when the object is a scene change target

## 2.00 beta28a <Badge text='2026/1/12' />

- Added the `--folder` definition

## 2.00 beta28 <Badge text='2026/1/11' />

- Fixed an incorrect return value from `obj.getoption("gui")`
- Added a size-change argument to `obj.clearbuffer()`

## 2.00 beta26 <Badge text='2025/12/27' />

- Fixed `obj.effect()` from filter objects not being processed as a filter effect
- Fixed `obj.draw()` to the temporal buffer not being processed when the object output is basic output
- Made it possible to specify multiple `--param` entries in trackbar movement scripts

## 2.00 beta24 <Badge text='2025/12/14' />

- Added the `--filter` definition and `obj.getinfo("filter")` for filter object support

## 2.00 beta23a <Badge text='2025/12/7' />

- Added `obj.getinfo("bpm")`

## 2.00 beta23 <Badge text='2025/12/6' />

- Added `"frame_s"` and `"frame_e"` specifications to `obj.getvalue()`

## 2.00 beta22a <Badge text='2025/12/2' />

- Added a method for setting the end of a group to `--group`

## 2.00 beta22 <Badge text='2025/11/30' />

- Added the `--group` definition
- Added arguments to `obj.getpoint("timecontrol")`

## 2.00 beta21 <Badge text='2025/11/22' />

- Added sampler types to `obj.setoption("sampler")`

## 2.00 beta20 <Badge text='2025/11/16' />

- Added the `obj.sx`, `obj.sy`, and `obj.sz` items
- Added base scale (`"sx"`, `"sy"`, `"sz"`) specifications to `obj.getvalue()`

## 2.00 beta19 <Badge text='2025/11/8' />

- Fixed scripts added to group control not drawing correctly with `obj.draw()`
- Fixed the precision of `obj.getvalue("scenechange")`
- Added sampler specification to `obj.computeshader()`
- Added `"random"` to `resource` in `obj.pixelshader()` and `obj.computeshader()`
- Added `obj.data()` and the `--data` definition

## 2.00 beta18a <Badge text='2025/11/2' />

- Changed `/chk` in `--dialog` to return the number type
- Added `obj.effect_id`

## 2.00 beta18 <Badge text='2025/11/1' />

- Adjusted the random number range of `obj.rand1()`
- Added sampler specification to `obj.pixelshader()`
- Added an explanation of pixel shader definitions
- Added a specification for making checkbox item definitions the `boolean` type
- Added an explanation of `obj.getoption("track_mode")`

## 2.00 beta17 <Badge text='2025/10/26' />

- Fixed the precision of the minimum and maximum arguments of `obj.rand()`
- Added `obj.rand1()`

## 2.00 beta16 <Badge text='2025/10/19' />

- Fixed the return value of `obj.getpixel()` with no arguments being incorrect when there is no object
- Added an object existence check specification method to `obj.getvalue()`

## 2.00 beta15 <Badge text='2025/10/12' />

- Added `obj.module()`
- Added audio channel specification methods to `obj.getaudio()`

## 2.00 beta14 <Badge text='2025/10/5' />

- Fixed backslash characters entered in text setting items not being reflected correctly in variables
- Added `obj.id`

## 2.00 beta13 <Badge text='2025/9/27' />

- Fixed double quote characters entered in text setting items not being reflected correctly in variables
- Added `obj.getpixeldata()` and `obj.putpixeldata()`
- Added `obj.getinfo("version")`

## 2.00 beta12 <Badge text='2025/9/21' />

- Changed `obj.getvalue("layer.x")` so it does not return a value when the specified layer has no object
- Fixed `obj.setanchor()` so it can be used in scene change scripts
- Added text setting items (`--text`) to setting item definitions
- Added base center coordinate (`"cx"`, `"cy"`, `"cz"`) specifications to `obj.getvalue()`

## 2.00 beta11 <Badge text='2025/9/13' />

- Changed included libraries depending on script control and script file type
- Fixed some `obj` variable changes being discarded when updating objects with `obj.copybuffer()`
- Changed `obj.layer` to be the layer number of the drawing target object
- Fixed array specification (coordinates + color + normals) in `obj.drawpoly()` not drawing correctly
- Added a method for specifying `obj.drawpoly()` with a vertex list table
- Added `obj.getinfo("clock")` and `obj.getinfo("script_time")`

## 2.00 beta10 <Badge text='2025/9/7' />

- Fixed a crash when specifying a table variable directly with `obj.setanchor()`
- Changed script control so unnecessary Lua library functions are not included

## 2.00 beta9 <Badge text='2025/8/30' />

- Fixed default seed calculation for `obj.rand` in trackbar movement scripts
- Fixed the display timing of individual text objects not being reflected in `obj` variables

## 2.00 beta8 <Badge text='2025/8/24' />

- Fixed possible crashes depending on output log contents
- Added fixes and a processing explanation for the cache handling of `obj.getpixel()`
- Added `obj.putpixel()` and `obj.copypixel()`
- Added some options to `obj.pixeloption()`
- Fixed some blend mode processing in `obj.setoption()`

## 2.00 beta6 <Badge text='2025/8/10' />

- Fixed image file copies not being reflected correctly in some cases with `obj.copybuffer()`
- Fixed `obj` variables not being updated when updating objects with `obj.copybuffer()`
- Fixed possible crashes when calling `obj.drawpoly()` while the object has no image

## 2.00 beta5 <Badge text='2025/8/3' />

- Added handling for when `obj.effect()` parameter values are specified as number values

## 2.00 beta4 <Badge text='2025/7/27' />

- Fixed temporal buffers and cache buffers not being generated correctly in some cases

## 2.00 beta2 <Badge text='2025/7/12' />

- Added copy destination types to `copybuffer()`
