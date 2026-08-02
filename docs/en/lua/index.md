---
title: Lua Script
description: This page explains Lua scripts in AviUtl ExEdit2.
lang: en
---

<script setup>
import EnUiText from "../../components/EnUiText.vue";
</script>

# Lua Script

## About Lua Scripts

The Lua language can be used for scripts available from script control, script files (`*.anm2`, `*.obj2`, `*.cam2`, `*.scn2`, `*.tra2`), and text script control characters.
Several variables and functions are also extended.
※ Legacy script files (`*.anm`, `*.obj`, `*.cam`, `*.scn`, `*.tra`) can also be used, but some features are not supported.

## Notes

- The script character encoding is UTF-8. ※ Legacy script files use SJIS.
- Scripts are placed in the `ProgramData\aviutl2\Script\` folder and one level below it.
- Calling a script from another script may not work correctly.
- The "Clear Cache" operation reloads scripts, including shaders, but changes to setting items are not reflected.
- Some specifications may differ from the legacy script file format. ※ Such as arguments for pixel input/output functions.
- In script control, only the `table`, `string`, and `math` libraries can be used. `os`, `debug`, and `ffi.C` are excluded everywhere.

## Setting Items

Setting items can be added by specifying the following at the beginning of a script file.
※ If an item name is specified as `yyy::xxx`, only the part after the final `::`, `xxx`, can be displayed on the settings screen.
※ Item names must be unique within each script. This applies only to items whose setting values are saved.

### Define a Trackbar Item

Specifying something like `--track@variable name:item name,minimum value,maximum value,default value,step size,zero value label,operation multiplier` at the beginning of a script file enables a trackbar.
The step size, zero value label, and operation multiplier can be omitted.
For the step size, the minimum unit of the setting value can be specified as `1`, `0.1`, `0.01`, or `0.001`.
※ Values down to 0.000000001 can be specified, but they are adjusted according to the minimum and maximum value range. Internally, values are stored as 32-bit integers.
The zero value label specifies the string displayed on the trackbar when the setting value is 0.
The operation multiplier specifies the multiplier of the trackbar operation range relative to the setting value range, and can be 1.0 or less.
※ The legacy script file format `--track0:item name,minimum value,maximum value,default value,step size` can also be used. ※ For compatibility

```aulua
--track@vx:X Speed,-10,10,0
obj.ox = obj.ox + vx * obj.time
```

### Define a Trackbar Item Group

Specifying something like `--trackgroup@variable name 1,variable name 2,variable name 3:item name` at the beginning of a script file enables grouping of trackbar items.
List two or three previously defined trackbar item variable names.
※ The item name is not displayed, but it is used as the key name for saved data.

```aulua
--track@x:X Coordinate,-100000,100000,0
--track@y:Y Coordinate,-100000,100000,0
--track@z:Z Coordinate,-100000,100000,0
--trackgroup@x,y,z:Group
```

### Define a Checkbox Item

Specifying something like `--check@variable name:item name,default value (0 or 1, or true or false)` at the beginning of a script file enables a checkbox.
If the default value is `0` or `1`, the variable becomes the number type (`0`/`1`).
If the default value is `true` or `false`, the variable becomes the boolean type (`true`/`false`).
※ The legacy script file format `--check0:item name,default value (0 or 1)` can also be used. In that case, the variable is the boolean type. ※ For compatibility
Specifying something like `--checksection@variable name:item name,default value (true or false),initial value for per-section setting (true or false)` at the beginning of a script file enables a per-section checkbox.

```aulua noformat
--check@grav:Gravity,0
--check@speed:Speed,false
if grav == 1 then ...
if speed then ...
```

### Define a Color Setting Item

Specifying something like `--color@variable name:item name,default value` at the beginning of a script file enables a color setting item.
Specifying `nil` as the default value makes transparent color selectable.
※ The legacy script file format `--color:default value` can also be used. ※ For compatibility

```aulua
--color@col:Figure Color,0xffffff
obj.load("figure", "四角形", col, 100)
```

### Define a File Selection Item

Specifying something like `--file@variable name:item name` at the beginning of a script file enables a file selection item.
※ The legacy script file format `--file:` can also be used. ※ For compatibility

```aulua
--file@path:Image File
obj.load("image", path)
```

### Define a Folder Selection Item

Specifying something like `--folder@variable name:item name` at the beginning of a script file enables a folder selection item.

```aulua
--folder@path:Folder
```

### Define a Font Setting Item

Specifying something like `--font@variable name:item name,default value` at the beginning of a script file enables a font setting item.

```aulua
--font@font:Font Name,MS UI Gothic
obj.setfont(font, 50, deco, col1, col2)
```

### Define a Figure Setting Item

Specifying something like `--figure@variable name:item name,default value` at the beginning of a script file enables a figure setting item.

```aulua
--figure@fig:Tip Figure,三角形
obj.load("figure", fig, col, 100)
```

### Define a List Selection Item

Specifying something like `--select@variable name:item name=default value,choice=value,choice=value,choice=value` at the beginning of a script file enables a list selection item. The default value can be omitted.

```aulua
--select@deco:Decoration Type,Standard Text=0,Shadowed Text=1,Shadowed Text (Light)=2,Outlined Text=3,Outlined Text (Thin)=4,Outlined Text (Thick)=5,Outlined Text (Square)=6
obj.setfont(font, obj.track2, deco, col1, col2)
```

### Define a Text Setting Item

Specifying something like `--text@variable name:item name,default value` at the beginning of a script file enables a text setting item.
Specifying something like `--string@variable name:item name,default value` defines a single-line text setting item.

```aulua
--text@txt:Text,Default text\nNext line
--string@str:String,Default text
obj.load("text", txt)
```

### Define a Variable Item

Specifying something like `--value@variable name:item name,default value` at the beginning of a script file enables a variable item.
A variable item becomes a text input item and can define numbers, strings, and arrays.
※ The type changes according to the default value contents.

```aulua
--value@num:Number,0
--value@text:String,"0"
--value@table:Array,{0,0,0}
```

### Define a Generic Data Area

Specifying something like `--data@registered name:size (16 KB or less)` at the beginning of a script file enables a generic data area. ※ This is intended for script modules and DLLs.
`obj.data("registered name")` gets a pointer to the generic data area (userdata).
The default value is the userdata area cleared to 0.
※ If the saved generic data has a different size, it is initialized to the default value.

```aulua
--data@pos:8
local pos = obj.data("pos")
```

### Define a Setting Group

Specifying something like `--group:group name,default display state (true/false)` at the beginning of a script file groups the following setting items. The default display state can be omitted.
※ Specifying `--group` without a group name defines the end of the group.

```aulua
--group:Coordinates
```

### Define a Separator

Specifying something like `--separator:separator name` at the beginning of a script file adds a separator.

```aulua
--separator:Center Coordinates
```

### Define an Object Add Menu Label

Specifying something like `--label:label name` at the beginning of a script file sets the initial value for the hierarchy label in the object add menu.

```aulua
--label:Processing
```

### Filter Object Support

Specifying `--filter` at the beginning of a script file (`*.anm2`) enables support for filter objects.
※ `obj.getinfo("filter")` can be used to branch filter object processing.

In a filter object, the object contains the frame buffer image.
※ The frame buffer data is undefined. It can be used as a temporary buffer.

Filter objects have the following restrictions.

- Do not change the object size. ※ It is acceptable if the size is unchanged at the end.
- Do not change object variables. ※ It is acceptable if they are unchanged at the end.
- Filters after `obj.draw()` continue.
- `obj.effect()` without arguments is not processed.

※ There are probably other restrictions as well.

### Specify the Script Type

Specifying something like `--script:type` at the beginning of a script file specifies the script type (`luaJIT` or `lua`).
If omitted, `luaJIT` is used. ※ Legacy script files use `lua`.

```aulua
--script:lua
```

### Specify Script Information

Specifying something like `--information:label name` at the beginning of a script file sets script information.

```aulua
--information:Test Script ver2.00 by Kenkun
```

### Specify the Required Main Program Version Number

Specifying something like `--require:required main program version number` at the beginning of a script file sets the main program version required by the script.

```aulua
--require:2003500
```

### Define a Pixel Shader

At the beginning of a script file, a pixel shader can be written in HLSL inside a multiline comment such as `--[[pixelshader@registered name:`.
※ The registered name becomes the entry point.
The following inputs can be used for a pixel shader.

```hlsl
float4 psmain(float4 pos : SV_Position) : SV_Target
```

```hlsl
float4 psmain(float4 pos : SV_Position, float2 uv : TEXCOORD) : SV_Target
```

※ The signature is detected using shader reflection.
※ `uv` is set so the drawing range is 0.0 to 1.0.

```aulua
--[[pixelshader@psmain:
    float4 psmain(float4 pos: SV_Position): SV_Target {
        ...
    }
]]
```

### Define a Compute Shader

At the beginning of a script file, a compute shader can be written in HLSL inside a multiline comment such as `--[[computeshader@registered name:`.
※ The registered name becomes the entry point.

```aulua
--[[computeshader@csmain:
    [numthreads(1, 1, 1)]
    void csmain(uint2 id: SV_DispatchThreadID) {
        ...
    }
]]
```

### Other

※ The legacy script file format `--dialog` and `--param` can also be used. Individual setting items are created. ※ For compatibility

## Variables

Information about the target object is stored in the following variables.

| Variable                    | Description                                                                                                                                              | ReadOnly |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `obj.ox`<sup>1</sup>        | X coordinate relative to the base coordinate                                                                                                             |          |
| `obj.oy`<sup>1</sup>        | Y coordinate relative to the base coordinate                                                                                                             |          |
| `obj.oz`<sup>1</sup>        | Z coordinate relative to the base coordinate                                                                                                             |          |
| `obj.rx`<sup>1</sup>        | X-axis rotation angle (360.0 is one full rotation)                                                                                                       |          |
| `obj.ry`<sup>1</sup>        | Y-axis rotation angle (360.0 is one full rotation)                                                                                                       |          |
| `obj.rz`<sup>1</sup>        | Z-axis rotation angle (360.0 is one full rotation)                                                                                                       |          |
| `obj.cx`<sup>1</sup>        | Relative X coordinate of the center                                                                                                                      |          |
| `obj.cy`<sup>1</sup>        | Relative Y coordinate of the center                                                                                                                      |          |
| `obj.cz`<sup>1</sup>        | Relative Z coordinate of the center                                                                                                                      |          |
| `obj.sx`<sup>1</sup>        | Scale of the X coordinate (1.0 = original size)                                                                                                          |          |
| `obj.sy`<sup>1</sup>        | Scale of the Y coordinate (1.0 = original size)                                                                                                          |          |
| `obj.sz`<sup>1</sup>        | Scale of the Z coordinate (1.0 = original size)                                                                                                          |          |
| `obj.zoom`<sup>1, 2</sup>   | Scale (1.0 = original size)                                                                                                                              |          |
| `obj.aspect`<sup>1, 2</sup> | Aspect ratio (-1.0 to 1.0 / positive = horizontal compression / negative = vertical compression)                                                         |          |
| `obj.alpha`<sup>1</sup>     | Opacity (0.0 to 1.0 / 0.0 = transparent / 1.0 = opaque)                                                                                                  |          |
| `obj.x`                     | Display base coordinate X                                                                                                                                | Yes      |
| `obj.y`                     | Display base coordinate Y                                                                                                                                | Yes      |
| `obj.z`                     | Display base coordinate Z                                                                                                                                | Yes      |
| `obj.w`<sup>3</sup>         | Image size W                                                                                                                                             | Yes      |
| `obj.h`<sup>3</sup>         | Image size H                                                                                                                                             | Yes      |
| `obj.screen_w`              | Screen size W                                                                                                                                            | Yes      |
| `obj.screen_h`              | Screen size H                                                                                                                                            | Yes      |
| `obj.framerate`             | Frame rate                                                                                                                                               | Yes      |
| `obj.frame`<sup>4</sup>     | Current frame number relative to the object                                                                                                              | Yes      |
| `obj.time`<sup>4</sup>      | Current time relative to the object, in seconds                                                                                                          | Yes      |
| `obj.totalframe`            | Total number of object frames                                                                                                                            | Yes      |
| `obj.totaltime`             | Total object time, in seconds                                                                                                                            | Yes      |
| `obj.layer`                 | Layer where the object is placed; ※ the layer position of the drawing target object                                                                      | Yes      |
| `obj.index`<sup>5</sup>     | Number for multiple objects; ※ for individual objects                                                                                                    | Yes      |
| `obj.num`<sup>5</sup>       | Count for multiple objects (1 = single object / 0 = undefined); ※ for individual objects                                                                 | Yes      |
| `obj.id`                    | Object ID; ※ a unique ID for each application launch; ※ the unique ID of the drawing target object                                                       | Yes      |
| `obj.effect_id`             | ID of the target effect within the object; ※ a unique ID for each application launch; ※ the unique ID of the target filter effect or object input/output | Yes      |
| `obj.frame_s`               | Object start frame relative to the whole scene (integer starting from 0)                                                                                 |          |
| `obj.frame_e`               | Object end frame relative to the whole scene (integer starting from 0)                                                                                   |          |
| `obj.effect_layer`          | Layer containing the target effect; ※ the layer position of the object's own effect                                                                      | Yes      |
| `global.xxx`                | Table variable shared by scripts (`xxx` is any key name); ※ values are stored as binary-safe strings                                                     |          |

1. These are the current object setting values. They are separate from output item setting values such as standard drawing.
2. The calculation and application process for `zoom` and `aspect` differs depending on whether a legacy script file is used.
3. `w` and `h` are always the number of pixels in the object.
4. If the object is a scene change target, `frame` and `time` may exceed `totalframe` and `totaltime`.
5. `index` and `num` are set to multiple-object values when individual objects are set for text objects and similar objects. ※ Use `obj.multiobject()` when drawing as individual objects from a script.

Example:

```aulua
global.test = 123
print(global.test)
```

## Functions

The following functions are added to scripts.

### obj.mes(text)

Adds the specified text inside a text object.
This can be used only inside text in a text object.
※ It can also be used as `mes()` with `obj.` omitted.

- `text`: Specifies the text to display.

Example:

```aulua
obj.mes("This text is inserted and displayed")
```

### obj.effect([name,param1,value1,param2,value2,...])

Executes the specified filter effect. This can be used only with media objects.
When called without arguments, it executes filter effects after the script.

- `name`: Specifies the effect name.
- `param1`: Specifies the effect parameter name.
- `value1`: Specifies the effect parameter value.
- `param?` and `value?` pairs can be specified as many times as needed.

※ For settings other than trackbars and checkboxes, `param` and `value` are the names and values output in alias files and similar files.
※ Parameters in legacy script files are translated by referencing definitions in `effect.conf`. Missing definitions are added as needed.

Example:

```aulua
obj.effect("色調補正", "明るさ", 150, "色相", 180)
```

### obj.draw([ox,oy,oz,zoom,alpha,rx,ry,rz])

Draws the current object.
Normally, the object is drawn at the end even if nothing is done, but using `obj.draw()` allows the object to be drawn multiple times.
※ If `obj.draw()` is used, filter effects after the script are not executed.
※ Calling `obj.effect()` without arguments can execute filter effects after the script in advance.

- `ox`: Relative coordinate X
- `oy`: Relative coordinate Y
- `oz`: Relative coordinate Z
- `zoom`: Scale (1.0 = original size)
- `alpha`: Opacity (0.0 = transparent / 1.0 = opaque)
- `rx`: X-axis rotation angle (360.0 is one full rotation)
- `ry`: Y-axis rotation angle (360.0 is one full rotation)
- `rz`: Z-axis rotation angle (360.0 is one full rotation)

Example:

```aulua
obj.draw(2, 10, 0)
```

### obj.drawpoly(x0,y0,z0,x1,y1,z1,x2,y2,z2,x3,y3,z3[,u0,v0,u1,v1,u2,v2,u3,v3,alpha])

Draws any part of the current object as any quadrilateral.
※ It will not draw correctly unless the surface is a plane where all interior angles are 180 degrees or less.
※ The side where vertices 0 through 3 are clockwise is the front side.
※ If `obj.drawpoly()` is used, filter effects after the script are not executed.

- `x0,y0,z0`: Coordinates of quadrilateral vertex 0
- `x1,y1,z1`: Coordinates of quadrilateral vertex 1
- `x2,y2,z2`: Coordinates of quadrilateral vertex 2
- `x3,y3,z3`: Coordinates of quadrilateral vertex 3
- `u0,v0`: Coordinates in the object image corresponding to vertex 0
- `u1,v1`: Coordinates in the object image corresponding to vertex 1
- `u2,v2`: Coordinates in the object image corresponding to vertex 2
- `u3,v3`: Coordinates in the object image corresponding to vertex 3

Example:

```aulua
obj.drawpoly(-50, -50, 0, 50, -50, 0, 50, 50, 0, -50, 50, 0, 0, 0, obj.w, 0, obj.w, obj.h, 0, obj.h)
```

> [!NOTE]
> Unlike AviUtl1, these coordinates are object-local coordinates.
> In AviUtl1, they were the actual drawing coordinates.

### obj.drawpoly({table}[,alpha])

Arguments for multiple `obj.drawpoly()` calls can be specified in a table.
This draws faster than calling `obj.drawpoly()` multiple times.
The following table formats are supported. ※ Different formats cannot be mixed.

- `{x0,y0,z0,x1,y1,z1,x2,y2,z2,x3,y3,z3,u0,v0,u1,v1,u2,v2,u3,v3}`
- `{x0,y0,z0,x1,y1,z1,x2,y2,z2,x3,y3,z3,u0,v0,u1,v1,u2,v2,u3,v3,vx0,vy0,vz0,vx1,vy1,vz1,vx2,vy2,vz2,vx3,vy3,vz3}`
- `{x0,y0,z0,x1,y1,z1,x2,y2,z2,x3,y3,z3,r0,g0,b0,a0,r1,g1,b1,a1,r2,g2,b2,a2,r3,g3,b3,a3}`
- `{x0,y0,z0,x1,y1,z1,x2,y2,z2,x3,y3,z3,r0,g0,b0,a0,r1,g1,b1,a1,r2,g2,b2,a2,r3,g3,b3,a3,vx0,vy0,vz0,vx1,vy1,vz1,vx2,vy2,vz2,vx3,vy3,vz3}`

※ `vx`, `vy`, and `vz` are normal vectors.
※ `r`, `g`, `b`, and `a` are drawing colors (premultiplied alpha from 0.0 to 1.0). ※ When colors are specified, the object image is not used.

Example:

```aulua
table.insert(vertex, { x0, y0, 0, x1, y1, 0, x2, y2, 0, x3, y3, 0, u0, v0, u1, v1, u2, v2, u3, v3 })
table.insert(vertex, { x0, y0, 100, x1, y1, 100, x2, y2, 100, x3, y3, 100, u0, v0, u1, v1, u2, v2, u3, v3 })
obj.drawpoly(vertex)
```

### obj.drawpoly({table}\[,vertex_num,alpha\])

Quadrilaterals and triangles can be drawn by specifying a vertex list table.
The following table formats are supported. ※ Different formats cannot be mixed.

- `{x,y,z,u,v}`: Vertex coordinates + texture coordinates
- `{x,y,z,u,v,vx,vy,vz}`: Vertex coordinates + texture coordinates + normal vector
- `{x,y,z,r,g,b,a}`: Vertex coordinates + vertex color
- `{x,y,z,r,g,b,a,vx,vy,vz}`: Vertex coordinates + vertex color + normal vector
- `vertex_num`: Number of vertices in the face (4 &lt;default&gt;: quadrilateral / 3: triangle)

※ The table length must be divisible by the number of vertices in the face.
※ `u` and `v` are normalized coordinates of the object (0.0 to 1.0).
※ `vx`, `vy`, and `vz` are normal vectors.
※ `r`, `g`, `b`, and `a` are drawing colors (premultiplied alpha from 0.0 to 1.0). ※ When colors are specified, the object image is not used.
Example:

```aulua
vertex = {}
table.insert(vertex, { 0, 0, 0, 0, 0 })
table.insert(vertex, { 100, 0, 0, 1, 0 })
table.insert(vertex, { 100, 100, 0, 1, 1 })
table.insert(vertex, { 0, 100, 0, 0, 1 })
obj.drawpoly(vertex)
```

```aulua
vertex = {}
for z = 100, 1000, 100 do
    table.insert(vertex, { 0, 0, z, 1, 1, 1, 1 })
    table.insert(vertex, { 100, 0, z, 1, 1, 1, 1 })
    table.insert(vertex, { 100, 100, z, 1, 1, 1, 1 })
end
obj.drawpoly(vertex, 3)
```

### obj.load(\[type\],...)

Loads an image into the current object.
If `type` is omitted, it is detected automatically.
※ The previously loaded image is discarded.

#### Video File

`obj.load("movie",file[,time])`
`obj.load("movie.frame",file[,frame])`

Loads an image at the specified time from a video file.
※ `"movie.frame"` specifies a frame number and returns the total number of frames.

- `file`: Video filename
- `time`: Time to get, in seconds. If omitted, the current object time is used.
- Return value: Total video time in seconds. ※ Returns 0 on load failure.

Example:

```aulua
obj.load("movie", "c:\\test.avi")
```

#### Video File Information

`obj.load("movie.info",file)`

Gets video file information.
Only returns information without updating the current object information.

- `file`: Video filename
- Return value: Video frame count, frame rate (`rate`), and frame rate (`scale`). ※ Returns all 0 on load failure.

Example:

```aulua
obj.load("movie.info", "c:\\test.avi")
```

#### Image File

`obj.load("image",file)`
Loads an image file.

- `file`: Image filename
- Return value: `true` = success / `false` = load failure

Example:

```aulua
obj.load("image", "c:\\test.bmp")
```

#### Text

`obj.load("text",text[,speed,time,align])`
Loads text.
Control characters for color, size, and font can be used.
Setting `speed` and `time` can change the number of characters displayed.
※ This cannot be used for text objects.

- `text`: Text to load
- `speed`: Number of characters displayed per second for the `time` parameter
- `time`: Elapsed time for the `speed` parameter
- `align`: Text alignment type. ※ If a text alignment type is specified, center coordinates are set.
  - Horizontal writing:
    - `0`: <EnUiText scope="Effect" text="左寄せ[上]" />
    - `1`: <EnUiText scope="Effect" text="中央揃え[上]" />
    - `2`: <EnUiText scope="Effect" text="右寄せ[上]" />
    - `3`: <EnUiText scope="Effect" text="左寄せ[中]" />
    - `4`: <EnUiText scope="Effect" text="中央揃え[中]" />
    - `5`: <EnUiText scope="Effect" text="右寄せ[中]" />
    - `6`: <EnUiText scope="Effect" text="左寄せ[下]" />
    - `7`: <EnUiText scope="Effect" text="中央揃え[下]" />
    - `8`: <EnUiText scope="Effect" text="右寄せ[下]" />
  - Vertical writing:
    - `9`: <EnUiText scope="Effect" text="縦書 上寄[右]" />
    - `10`: <EnUiText scope="Effect" text="縦書 中央[右]" />
    - `11`: <EnUiText scope="Effect" text="縦書 下寄[右]" />
    - `12`: <EnUiText scope="Effect" text="縦書 上寄[中]" />
    - `13`: <EnUiText scope="Effect" text="縦書 中央[中]" />
    - `14`: <EnUiText scope="Effect" text="縦書 下寄[中]" />
    - `15`: <EnUiText scope="Effect" text="縦書 上寄[左]" />
    - `16`: <EnUiText scope="Effect" text="縦書 中央[左]" />
    - `17`: <EnUiText scope="Effect" text="縦書 下寄[左]" />
- Return value: `true` = success / `false` = load failure

Example:

```aulua
obj.load("text", "This text is loaded as an image")
```

#### Text Layout

`obj.load("text.layout",text[,speed,time,align])`

※ The `"textlayout"` specification can also be used.

Gets the image size of text loaded by `obj.load("text")`. ※ The arguments are the same.
Only returns the size without updating the current object information.
※ If a text alignment type is specified, center coordinates are also returned.

- Return value: Horizontal and vertical pixel counts

Example:

```aulua
w, h = obj.load("text.layout", "Size when this text is loaded as an image")
w, h, cx, cy = obj.load("text.layout", "With center coordinates", 0, 0, 0)
```

#### Figure

Loads a figure.
`obj.load("figure",name[,color,size,line,round,aspect])`

- `name`: Figure name or SVG filename
- `color`: Color (0x000000 to 0xffffff)
- `size`: Figure size
- `line`: Figure line width
- `round`: Whether to round corners (`true`: yes / `false` &lt;default&gt;: no)
- `aspect`: Aspect ratio (-1.0 to 1.0 / positive = horizontal compression / negative = vertical compression)
- Return value: `true` = success / `false` = load failure

Example:

```aulua
obj.load("figure", "円", 0xffffff, 100, true)
```

#### Frame Buffer

Loads from the frame buffer.
`load("framebuffer"[,x,y,w,h][,alpha])`

- `x,y,w,h`: Range to get from the frame buffer. If omitted, the entire buffer is used.
- `alpha`: Keep the alpha channel (`true`: yes / `false` &lt;default&gt;: no)
- Return value: `true` = success / `false` = load failure

#### Temporal Buffer

Loads from the temporal buffer.
※ The temporal buffer can be created with `obj.copybuffer()` and `obj.setoption()`.
`load("tempbuffer"[,x,y,w,h])`

- `x,y,w,h`: Range to get from the temporal buffer. If omitted, the entire buffer is used.
- Return value: `true` = success / `false` = load failure

#### Object on a Layer

Loads the object on the specified layer.
※ This does not work well when drawing processing is performed on the effect side, such as with individual objects.
`obj.load("layer",no[,effect])`

- `no`: Layer number (1 or greater)
- `effect`: Execute additional effects (`true`: yes / `false` &lt;default&gt;: no)
- Return value: `true` = success / `false` = load failure

#### Previous Object

Loads the previous object.
`obj.load("before");`
This can be used only before loading another object in a custom object.

- Return value: `true` = success / `false` = load failure

### obj.setfont(name,size[,type,col1,col2,bold,italic,charspacing,linespacing])

Specifies the font used for text in `obj.load()`.
※ This must be specified each time the script is called.

- `name`: Font name
- `size`: Font size
- `type`: Text decoration (0 to 6)
  - 0 = standard text / 1 = shadowed text / 2 = shadowed text (light)
  - 3 = outlined text / 4 = outlined text (thin) / 5 = outlined text (thick) / 6 = outlined text (square)
- `col1`: Text color (0x000000 to 0xffffff)
- `col2`: Shadow/outline color (0x000000 to 0xffffff)
- `bold`: Whether to use bold text (`true` / `false` &lt;default&gt;)
- `italic`: Whether to use italic text (`true` / `false` &lt;default&gt;)
- `charspacing`: Character spacing
- `linespacing`: Line spacing

### obj.getfont()

Gets the font settings used for text in `obj.load()`.

- Return value: Various font settings. ※ They are returned in the same order as the arguments of `obj.setfont()`.
  ※ The initial font name value is empty, which specifies the default.

Example:

```aulua
name, size, type = obj.getfont()
```

### obj.rand(st_num,ed_num[,seed,frame])

Generates a random number. Unlike normal random numbers, this generates random numbers so the same value is always produced for frames at the same time.
※ It can also be used as `rand()` with `obj.` omitted.

- `st_num`: Minimum random value
- `ed_num`: Maximum random value
- `seed`: Random seed. If omitted, a different random number is used for each object. If a positive value is specified, a different random number is used for each object even with the same seed. If a negative value is specified, the same random number is used for all objects with the same seed.
- `frame`: Frame number. If omitted, the current frame is used.

Example:

```aulua
obj.rand(10, 20)
```

### obj.rand1([seed,frame])

Generates a random number from 0.0 or greater to less than 1.0. Unlike normal random numbers, this generates random numbers so the same value is always produced for frames at the same time.
※ It can also be used as `rand1()` with `obj.` omitted.

- `seed`: Random seed. If omitted, a different random number is used for each object. If a positive value is specified, a different random number is used for each object even with the same seed. If a negative value is specified, the same random number is used for all objects with the same seed.
- `frame`: Frame number. If omitted, the current frame is used.

Example:

```aulua
obj.rand1()
```

### obj.setoption(name,value)

Sets various options for the current object.
※ This must be specified each time the script is called.

- `name`: Option name
- `value`: Option value

#### Hide Back Faces

`obj.setoption("culling",value)`

- `value`: 0 = show / 1 = hide

#### Face the Camera Direction

`obj.setoption("billboard",value)`

- `value`: 0 = do not face / 1 = horizontal only / 2 = vertical only / 3 = face

#### Blend Mode

`obj.setoption("blend",value[,option])`

- `value`:
  - `"none"`: normal
  - `"add"`: add
  - `"sub"`: subtract
  - `"mul"`: multiply
  - `"screen"`: screen
  - `"overlay"`: overlay
  - `"light"`: compare (light)
  - `"dark"`: compare (dark)
  - `"brightness"`: brightness
  - `"chroma"`: chroma
  - `"shadow"`: shadow
  - `"light_dark"`: light/dark
  - `"diff"`: difference
  - The following blend modes are for the temporal buffer only.
    - `"alpha_add"`: Color information is weighted averaged and alpha values are added
    - `"alpha_max"`: Color information is weighted averaged and the larger alpha value is used
    - `"alpha_sub"`: Color information is left unchanged and the alpha value is subtracted
    - `"alpha_add2"`: Color information is composited and alpha values are added
    - `"rgba_add"`: RGBA values are simply added. ※ This is lightweight because it only uses Direct3D BlendState processing.

※ Numeric specifications from the legacy script file format can also be used.
※ Using blend modes makes drawing processing heavier.

#### Change the Drawing Target to the Temporal Buffer

`obj.setoption("drawtarget","tempbuffer"[,w,h])`

- `w,h`: Temporal buffer size. If omitted, it is not initialized.

When the drawing target is set to the temporal buffer, drawing with `obj.draw()` and `obj.drawpoly()` is performed on the temporal buffer.
In this case, settings such as the object's coordinates are not applied, and drawing uses the argument coordinates as-is.
If a size is specified, the temporal buffer is initialized with transparent color.
The temporal buffer is shared by all objects.

#### Change the Drawing Target to the Frame Buffer

`obj.setoption("drawtarget","framebuffer")`
Sets the drawing target of `obj.draw()` and `obj.drawpoly()` to the frame buffer.
If drawing such as `draw()` has not been performed on the frame buffer, drawing is automatically performed on the frame buffer after the script ends even without changing this with `setoption()`.

#### Change the Status of Whether the Frame Buffer Was Drawn in the Script

`obj.setoption("draw_state",flag)`

- `flag`: `true` = drawn / `false` = not drawn

#### Object Focus Frame Mode

`obj.setoption("focus_mode",value)`

- `value`:
  - `"fixed_size"`: Use a fixed-size frame
  - `"no_resize"`: Use a frame without resizing

#### Set Camera Parameters

Sets various camera parameters.
This is not applied when the camera is in edit mode.
※ This can be used only with camera effects.
`obj.setoption("camera_param",cam)`

- `cam`: Camera parameters (table)
  - `cam.x`: Camera coordinate X
  - `cam.y`: Camera coordinate Y
  - `cam.z`: Camera coordinate Z
  - `cam.tx`: Camera target coordinate X
  - `cam.ty`: Camera target coordinate Y
  - `cam.tz`: Camera target coordinate Z
  - `cam.rz`: Camera tilt
  - `cam.ux`: Camera upward unit vector X
  - `cam.uy`: Camera upward unit vector Y
  - `cam.uz`: Camera upward unit vector Z
  - `cam.d`: Distance from the camera to the screen

Example:

```aulua
cam = obj.getoption("camera_param")
```

#### Set Camera Focus Parameters

Sets various camera focus parameters.  
※ This can be used only with camera effects.  
`obj.setoption("camera_focus",focus)`

- `focus`: Camera focus parameters (table)
  - `focus.x`: Camera focus coordinate X
  - `focus.y`: Camera focus coordinate Y
  - `focus.z`: Camera focus coordinate Z
  - `focus.bokeh`: Strength of camera depth blur

Example:

```aulua
focus = obj.getoption("camera_focus")
```

#### Sampler Mode

Changes the sampler used when drawing with `obj.draw()` and `obj.drawpoly()`.
※ If UV coordinates are specified as arguments in `obj.drawpoly()`, the UV coordinates are clipped to the area range. ※ For compatibility.
`obj.setoption("sampler",value)`

- `value`:
  - `"clip"`: Outside the area is transparent color. ※ This is the default setting for `obj.draw()`.
  - `"clamp"`: Outside the area uses the outermost color. ※ This is the default setting for `obj.drawpoly()`.
  - `"loop"`: Outside the area loops.
  - `"mirror"`: Outside the area loops while mirroring the area.
  - `"dot"`: Does not interpolate scaling. Outside the area is transparent color.
    ※ If omitted, the default setting is used.

### obj.getoption(name,...)

Gets various options for the current object.

- `name`: Option name

#### Trackbar Movement Mode

`obj.getoption("track_mode",value)`

- `value`: Trackbar variable name or number
  If defined with `--track@variable name:`, specify the variable name.
  If defined with `--track0:`, specify the number.
- Return value: No movement = 0
  For anything other than no movement, the movement mode name is returned.

Example:

```aulua
--track@vx:X Speed,-10,10,0
obj.getoption("track_mode", "vx")
```

#### Number of Object Sections

`obj.getoption("section_num")`

- Return value: Number of sections (number of intermediate points + 1)

#### Get Script Name

`obj.getoption("script_name"[,value][,skip])`

- `value`: Relative position above or below the filter effect (0 is self / negative is above / positive is below)
- `skip`: Whether to skip disabled filter effects (`true`: yes / `false` &lt;default&gt;: no)
- Return value: Script name. Empty text if the target is not a script.

Example:

```aulua
if obj.getoption("script_name") == obj.getoption("script_name", -1) then
```

#### Check GUI Display State

`obj.getoption("gui")`

- Return value: `true` = visible / `false` = hidden

※ It is hidden during video output.

#### Get Camera Control State

`obj.getoption("camera_mode")`

- Return value: 0 = not a camera control target / nonzero = camera control target

#### Get Camera Parameters

`obj.getoption("camera_param")`

- Return value: Camera parameters (table)

※ The table contents are the same as `obj.setoption("camera_param")`.

Example:

```aulua
cam = obj.getoption("camera_param")
```

#### Get Camera Focus Parameters

`obj.getoption("camera_focus")`

- Return value: Camera focus parameters (table)

※ The table contents are the same as `obj.setoption("camera_focus")`.

Example:

```aulua
focus = obj.getoption("camera_focus")
```

#### Check Whether Individual Objects Are Enabled

`obj.getoption("multi_object")`

- Return value: `true` = enabled / `false` = disabled

#### Get Blend Mode

`obj.getoption("blend")`

- Return value: Blend mode

※ This is the same as the `value` of `obj.setoption("blend")`.  
※ The blend mode of output items such as standard drawing is applied last.

#### Get Whether Back Faces Are Hidden

`obj.getoption("culling")`

- Return value: 0 = show / 1 = hide

#### Get Whether It Faces the Camera Direction

`obj.getoption("billboard")`

- Return value: 0 = do not face / 1 = horizontal only / 2 = vertical only / 3 = face

#### Get Drawing Target Information

`obj.getoption("drawtarget")`

- Return value: `"tempbuffer"` = temporal buffer / `"framebuffer"` = frame buffer

#### Get the Status of Whether the Frame Buffer Was Drawn in the Script

`obj.getoption("draw_state")`

- Return value: `true` = drawn / `false` = not drawn

### obj.getvalue(target[,time,section])

Gets setting values for the current object.

- `target`: Setting type
  - `0`: Trackbar 0 value
  - `1`: Trackbar 1 value
  - `2`: Trackbar 2 value
  - `3`: Trackbar 3 value
  - `"track.xxx"`: Trackbar value for variable name `xxx`. ※ Use `track.[variable name]` to get the value of a named trackbar.
  - `"x"`: Base coordinate X<sup>1</sup>
  - `"y"`: Base coordinate Y<sup>1</sup>
  - `"z"`: Base coordinate Z<sup>1</sup>
  - `"pos"`: Three base coordinate values<sup>1</sup>
  - `"rx"`: Base X-axis rotation angle<sup>1</sup>
  - `"ry"`: Base Y-axis rotation angle<sup>1</sup>
  - `"rz"`: Base Z-axis rotation angle<sup>1</sup>
  - `"angle"`: Three base rotation angle values<sup>1</sup>
  - `"cx"`: Base center coordinate X<sup>1</sup>
  - `"cy"`: Base center coordinate Y<sup>1</sup>
  - `"cz"`: Base center coordinate Z<sup>1</sup>
  - `"center"`: Three base center coordinate values<sup>1</sup>
  - `"sx"`: Base scale X (1.0 = original size)<sup>1</sup>
  - `"sy"`: Base scale Y (1.0 = original size)<sup>1</sup>
  - `"sz"`: Base scale Z (1.0 = original size)<sup>1</sup>
  - `"scale"`: Three base scale values<sup>1</sup>
  - `"zoom"`: Base scale (100 = original size)<sup>1, 2</sup>
    ※ Note that this differs from `obj.zoom` (1.0 = original size). ※ For compatibility.
  - `"aspect"`: Base aspect ratio (-1.0 to 1.0 / positive = horizontal compression / negative = vertical compression)<sup>1, 2</sup>. ※ For compatibility.
  - `"alpha"`: Base opacity (0.0 to 1.0 / 0.0 = transparent / 1.0 = opaque)<sup>1</sup>
  - `"time"`: Time relative to the object
  - `"frame_s"`: Object start frame relative to the whole scene (integer starting from 0)
  - `"frame_e"`: Object end frame relative to the whole scene (integer starting from 0)
  - `"layer7.x"`: Base coordinate X of the object on layer 7
    ※ Use `layer[layer number].[setting type]` to get values from objects on other layers.
    ※ Use `layer[layer number]` to check whether an object exists (`true`/`false`).
  - `"scenechange"`: Display ratio in a scene change (0.0 to 1.0). Available only for scene changes.
    ※ See the scene change script example for usage.
- `time`: Time, in seconds, for the point at which to get the value. If omitted, the current time is used.
- `section`: Section number used as the time reference. If omitted, the start point is used.
  - `0`: Start point
  - `1`: First intermediate point
  - `2`: Second intermediate point
  - `-1`: End point

1. The base values above are setting values for object output items, such as standard drawing.
2. `zoom` and `aspect` are calculated from the base scale XYZ values.

### obj.getvalue(effect,item[,time,section])

Gets setting values for the current object.

- `effect`: Target effect name, the value of `effect.name` in alias files.
  If there are multiple effects with the same name, an index can be specified with the `":n"` suffix, where `n` starts from 0.
  Disabled effects are excluded from targets.

- `item`: Target setting item name, the key name in alias files. ※ Names that are numbers cannot be used.
- `time`: Time, in seconds, for the point at which to get the value. If omitted, the current time is used.
- `section`: Section number used as the time reference. If omitted, the start point is used.
  - `0`: Start point
  - `1`: First intermediate point
  - `2`: Second intermediate point
  - `-1`: End point
- Return value: For trackbars, the setting value at the specified time.
  For per-section checkboxes, the setting value for the section at the specified time.
  For other items, a value in the same format as the setting value in the alias file.
  If the target does not exist, nothing is returned. ※ This can be checked with `nil`.

Example:

```aulua
font = obj.getvalue("テキスト", "フォント")
range = obj.getvalue("ぼかし:1", "範囲")
```

### obj.getvalue(layer,effect,item[,time,section])

Gets setting values for the object on the specified layer. ※ The object at the current time is targeted.

Except for the target layer argument, this is the same as `obj.getvalue(effect,item,...)`.

- `layer`: Target layer number (1 or greater)

### obj.setanchor(name,num[,option,..])

Displays anchor points.
When this function is called, it applies anchor point display settings and reflects moved anchors back to variables.
Changing the call order or number of calls may prevent correct reflection.

- `name`: Specifies the variable name that stores coordinates defined as an array in `--value` or `--dialog`. ※ Specify the variable name as a string.
  Specifying `"track"` references start, end, and intermediate point values from trackbars specified from `--track0`.
  If two or three variable names are listed separated by commas, it references start, end, and intermediate point values from each trackbar defined with `--track@xxx`.
  ※ If a table variable name is specified directly, only lines are displayed without anchor display or movement.
- `num`: Specifies the number of anchor points.
  If `name="track"`, specify 0. The number of anchor points becomes the number of start, end, and intermediate points.
- `option`: Various options can be listed.
  - `"line"`: Connects anchor points with lines.
  - `"loop"`: Connects anchor points with lines and closes the loop.
  - `"star"`: Connects each anchor point to the center of the object with lines.
  - `"arm"`: Connects anchor points and the center of the object with lines.
  - `"mesh",horizontal count,vertical count`: Connects anchor points with lines in a mesh. Specify the grid point counts in the following arguments.
  - `"color",color`: Changes the line color (RGB) for the above options. Specify the color (0x000000 to 0xffffff) in the following argument.
  - `"rgba",color`: Changes the line color (RGBA) for the above options. Specify a color including alpha (0x00000000 to 0xffffffff) in the following argument.
  - `"inout"`: Displays the above option lines as two sets, IN and OUT. The anchor count is split evenly.
  - `"xyz"`: Controls anchor points with 3D coordinates. ※ The default is 2D coordinates.
  - `"offset",X,Y`: Sets the display offset for anchor points. Specify offset values in the following arguments.
  - `"offset.xyz",X,Y,Z`: Sets the display offset for anchor points in 3D coordinates. Specify offset values in the following arguments.
  - `"screen"`: Controls anchor points with screen coordinates. ※ The default is object coordinates.
    ※ When used with camera control + shadow, the shadow area may shift slightly in the preview.
  - `"small"`: Displays small anchor points.
  - `{coordinate table}`: If the number of coordinates specified by `name` is incorrect, sets anchors using the specified coordinate table.
    ※ Items defined by `name` are updated when an anchor is moved.
- Return value: Number of anchor points obtained

Example:

```aulua
obj.setanchor("pos", 3)
n = obj.setanchor("track", 0, "line")
```

### obj.getpixel(x,y[,type])

Gets pixel information for the current object.
When called without arguments, it gets the number of pixels in the object.
※ To reduce VRAM access, `getpixel()` returns values from cached data.
Depending on the situation, the cache may not be updated and correct values may not be obtainable, such as with drawing related to `draw` and pixel operations.
Processing `obj.pixeloption("get",xxx)` can actively discard the cache.

- `x,y`: Coordinates of the pixel to get
- `type`: Pixel information type (`"col"`, `"rgb"`)
  ※ If omitted, the type specified by `obj.pixeloption("type")` is used. Normally this is `"col"`.
- Return value:
  - If the type is `"col"`
    Color information (0x000000 to 0xffffff) and opacity (0.0 = transparent / 1.0 = opaque)
    ```aulua
    col, a = obj.getpixel(0, 0, "col")
    ```
  - If the type is `"rgb"`
    8-bit RGBA information for each channel (0 to 255)
    ```aulua
    r, g, b, a = obj.getpixel(0, 0, "rgb")
    ```
  - If the type is `"yc"`
    Legacy internal YCbCr format

    ```aulua
    y, cb, cr, a = obj.getpixel(0, 0, "yc")
    ```

  - No arguments
    Horizontal and vertical pixel counts
    ```aulua
    w, h = obj.getpixel()
    ```

### obj.putpixel(x,y,...)

Rewrites pixel information for the current object.
When called without arguments, it gets the number of pixels in the object.
The type of pixel information passed is the type specified by `obj.pixeloption("type")`.
※ `putpixel()` is not fast because it runs through a compute shader for each pixel.

- `x,y`: Coordinates of the pixel to rewrite
- Color information:
  - If the type is `"col"`
    Color information (0x000000 to 0xffffff) and opacity (0.0 = transparent / 1.0 = opaque)
    `obj.putpixel(0,0,col,a)`
  - If the type is `"rgb"`
    8-bit RGBA information for each channel (0 to 255)
    `obj.putpixel(0,0,r,g,b,a)`
  - If the type is `"yc"`
    Internal YCbCr format
    `obj.putpixel(0,0,y,cb,cr,a)`

### obj.copypixel(dst_x,dst_y,src_x,src_y)

Copies pixel information for the current object.
※ `copypixel()` is not fast because it runs through a compute shader for each pixel.

- `dst_x,dst_y`: Destination coordinates
- `src_x,src_y`: Source coordinates

### obj.pixeloption(name,value)

Sets processing options for `obj.getpixel()`, `obj.putpixel()`, and `obj.copypixel()`.
※ This must be specified each time the script is called.

- `name`: Option name
- `value`: Option value

#### Specify the Pixel Information Type

`obj.pixeloption("type",value)`

- `value`: `"col"` / `"rgb"` / `"yc"`

#### Specify the Pixel Information Read Source

`obj.pixeloption("get",value)`

- `value`: `"object"` = object / `"framebuffer"` = frame buffer

#### Specify the Pixel Information Write Destination

`obj.pixeloption("put",value)`

- `value`: `"object"` = object / `"framebuffer"` = frame buffer

#### Specify the Blend Type When Writing

`obj.pixeloption("blend",value)`

- `value`: No arguments = replace / 0 = normal / 1 = add / 2 = subtract / 3 = multiply

### obj.getpixeldata(target[,format])

Reads data from an image buffer in RGBA (32-bit) format.
※ This function is intended for image processing using script modules or DLLs.
※ It is not fast because it gets data from VRAM.

- `target`: Image buffer to read
  - `"object"`: Object
  - `"tempbuffer"`: Temporal buffer
  - `"cache:xxxx"`: Cache buffer (`xxxx` is any name)
  - `"framebuffer"`: Frame buffer
- `format`: Image data format. ※ The default is RGBA 32-bit.
  - `"rgba"`: RGBA 32-bit
  - `"bgra"`: BGRA 32-bit
- Return value: Image data pointer (userdata), horizontal pixel count, vertical pixel count

Example:

```aulua
data, w, h = obj.getpixeldata("object", "rgba")
```

### obj.putpixeldata(target,data,w,h[,format])

Writes RGBA (32-bit) data to an image buffer.
※ This function is intended for image processing using script modules or DLLs.
※ It is not fast because it writes data to VRAM.

- `target`: Image buffer to write
  - `"object"`: Object
  - `"tempbuffer"`: Temporal buffer
  - `"cache:xxxx"`: Cache buffer (`xxxx` is any name)
  - `"framebuffer"`: Frame buffer. Only the same size is supported.
- `data`: Image data pointer (userdata)
- `w`: Horizontal pixel count
- `h`: Vertical pixel count
- `format`: Image data format. ※ The default is RGBA 32-bit.
  - `"rgba"`: RGBA 32-bit
  - `"bgra"`: BGRA 32-bit

Example:

```aulua
obj.putpixeldata("object", data, w, h, "rgba")
```

### obj.getaudio(buf,file,type,size)

Gets audio data from an audio file.
Gets data at the position relative to the object time.

- `buf`: Specifies the table that receives the data.
  ※ If `nil` is specified, the table is returned as the third return value.
- `file`: Audio filename. Specify `"audiobuffer"` to get the audio data being edited.
- `type`: Type of data to get
  - `"pcm"`: PCM sampling data (16-bit mono scale reference)
  - `"spectrum"`: Volume data by frequency
  - `"fourier"`: Data from discrete Fourier transform of the audio. `size` is not required.
    ※ This returns 1024 data points in 1/2048 increments from 1/2048 to 1/2 of the original frequency.
  - `"xxxx.l"`: Gets the left channel audio (`xxxx` is the acquired data type)
  - `"xxxx.r"`: Gets the right channel audio (`xxxx` is the acquired data type)
- `size`: Number of data points to get. Fewer than the specified value may be returned.
- Return value: Number of acquired data points, sampling rate

Example:

```aulua
n = obj.getaudio(buf, "audiobuffer", "spectrum", 32)
n, rate = obj.getaudio(buf, "c:\\test.wav", "pcm", 1000)
n, rate, buf = obj.getaudio(nil, "c:\\test.wav", "pcm.r", 1000)
```

### obj.copybuffer(dst,src)

Copies an image buffer.
※ The destination image buffer size is changed to the source size.

- `dst`: Destination buffer
  - `"tempbuffer"`: Temporal buffer
  - `"object"`: Object
  - `"cache:xxxx"`: Cache buffer (`xxxx` is any name)
  - `"framebuffer"`: Frame buffer. Only supported when the source is an object, temporal buffer, or cache buffer of the same size.
- `src`: Source buffer
  - `"framebuffer"`: Frame buffer
  - `"object"`: Object
  - `"tempbuffer"`: Temporal buffer
  - `"cache:xxxx"`: Cache buffer (`xxxx` is any name)
  - `"image:xxxx"`: Image file (`xxxx` is an image filename relative to the script folder)
- Return value: `true` = success / `false` = failure

Cache buffer names are shared by all objects.
Cache buffers are discarded for each frame drawing.

### obj.clearbuffer(target[,color])

Clears an image buffer.

- `target`: Buffer name to clear
  - `"object"`: Object
  - `"tempbuffer"`: Temporal buffer
  - `"framebuffer"`: Frame buffer
  - `"cache:xxxx"`: Cache buffer (`xxxx` is any name)
- `color`: Color (0x000000 to 0xffffff). ※ If omitted, transparent color is used.

### obj.clearbuffer(target,w,h[,color])

Changes the image buffer size and clears it.

- `target`: Buffer name to clear. The frame buffer size cannot be changed.
- `w`: Horizontal pixel count
- `h`: Vertical pixel count
- `color`: Color (0x000000 to 0xffffff). ※ If omitted, transparent color is used.

### obj.pixelshader(name,target,{resource,...}[,{constant,...},blend,sampler])

Runs a pixel shader.

- `name`: Shader registered name. ※ Specify the registered shader name as a string.
  Specify it like `registered name@script name` to use a shader definition from another script.
- `target`: Output buffer name
  This is set as the Direct3D render target.
  - `"object"`: Object
  - `"tempbuffer"`: Temporal buffer
  - `"framebuffer"`: Frame buffer
  - `"cache:xxxx"`: Cache buffer (`xxxx` is any name)
- `resource`: Array of buffer names to reference. If there is only one, the buffer name can be specified directly.
  These are set as Direct3D shader resources (`t0` and later).
  ※ If this is the same as the render target, it is duplicated and set.
  - `"object"`: Object
  - `"tempbuffer"`: Temporal buffer
  - `"framebuffer"`: Frame buffer
  - `"cache:xxxx"`: Cache buffer (`xxxx` is any name)
  - `"random"`: Random buffer, a 256x256 area with random values from 0.0 to 1.0. ※ This is DXGI_FORMAT_R32_FLOAT, only the R value.
- `constant`: Array of constants to reference
  This is set as a float array in the Direct3D constant buffer (`b0`).
- `blend`: Blend method for the output destination
  Changes the Direct3D BlendState. ※ The default is `"copy"`.
  - `"copy"`: Copies the output as-is
  - `"mask"`: Multiplies only the alpha value. ※ RGB values are not used.
  - `"draw"`: Alpha-blends the output
  - `"add"`: Additively blends the output
- `sampler`: Sampler type
  Sets the Direct3D SamplerState (`s0`). ※ The default is unset.
  - `"clip"`: Outside the area (outside the 0.0 to 1.0 range) is transparent color
  - `"clamp"`: Outside the area uses the boundary color
  - `"loop"`: Outside the area loops the area
  - `"mirror"`: Outside the area loops while mirroring the area
  - `"dot"`: Does not interpolate scaling. Outside the area is transparent color.

### obj.computeshader(name,{target},{resource,...}[,{constant,...},countX,countY,countZ,sampler])

Runs a compute shader.

- `name`: Shader registered name. ※ Specify the registered shader name as a string.
  Specify it like `registered name@script name` to use a shader definition from another script.
- `target`: Array of buffer names to read/write. If there is only one, the buffer name can be specified directly.
  These are set as Direct3D Unordered Access resources (`u0` and later).
  - `"object"`: Object
  - `"tempbuffer"`: Temporal buffer
  - `"framebuffer"`: Frame buffer
  - `"cache:xxxx"`: Cache buffer (`xxxx` is any name)
- `resource`: Array of buffer names to reference. If there is only one, the buffer name can be specified directly.
  These are set as Direct3D shader resources (`t0` and later).
  ※ If this is the same as an Unordered Access resource, it is duplicated and set.
  - `"object"`: Object
  - `"tempbuffer"`: Temporal buffer
  - `"framebuffer"`: Frame buffer
  - `"cache:xxxx"`: Cache buffer (`xxxx` is any name)
  - `"random"`: Random buffer, a 256x256 area with random values from 0.0 to 1.0. ※ This is DXGI_FORMAT_R32_FLOAT, only the R value.
- `constant`: Array of constants to reference
  This is set as a float array in the Direct3D constant buffer (`b0`).
- `countX`: Number of X-axis thread groups. ※ If omitted, 1 is used.
- `countY`: Number of Y-axis thread groups. ※ If omitted, 1 is used.
- `countZ`: Number of Z-axis thread groups. ※ If omitted, 1 is used.

- `sampler`: Sampler type
  Sets the Direct3D SamplerState (`s0`). ※ The default is unset.
  - `"clip"`: Outside the area (outside the 0.0 to 1.0 range) is transparent color
  - `"clamp"`: Outside the area uses the boundary color
  - `"loop"`: Outside the area loops the area
  - `"mirror"`: Outside the area loops while mirroring the area
  - `"dot"`: Does not interpolate scaling. Outside the area is transparent color.

### obj.getpoint(target[,option,option2])

Gets trackbar values.
This can be used only in trackbar movement scripts.

- `target`:
  - Integer: Trackbar value in each section
    0 = start point / 1 = first intermediate point / 2 = second intermediate point / ...
    `option` can specify the relative position of the related track to get.
  - `"index"`: Gets the position in the current section.
    If it is between the start point and the first intermediate point, it is represented as a decimal such as 0.5.
  - `"num"`: Gets the total number of start, end, and intermediate points.
  - `"time"`: Gets the current time.
    `option` can specify the section for which to get the time.
  - `"accelerate"`: Gets whether acceleration is set.
    Return value: `true` = enabled / `false` = disabled
  - `"decelerate"`: Gets whether deceleration is set.
    Return value: `true` = enabled / `false` = disabled
  - `"param"`: Gets trackbar setting values.
    If there are multiple setting values, multiple return values are returned.
  - `"link"`: Gets the index and total count for the related track.
    `index, num = obj.getpoint("link")`
    Related tracks are used to get values from other tracks for coordinates and similar values.
    Return value for X coordinate: 0,3 / Y coordinate: 1,3 / Z coordinate: 2,3
  - `"timecontrol"`: Gets the current value with time control applied.
    - `option`: Type of value to get
      - `"index"`: Gets the position in the section with time control applied
      - `"time"`: Gets the time with time control applied
      - `"value"`: Gets the time position for time control (start point = 0.0 / end point = 1.0)
        `option2` can specify the time to get. ※ If omitted, the current time is used.
  - `"frame_s"`: Gets the current object's start frame relative to the whole scene (integer starting from 0)
  - `"frame_e"`: Gets the current object's end frame relative to the whole scene (integer starting from 0)
  - `"framerate"`: Gets the frame rate.
  - `"default"`: Gets the default trackbar value. ※ For compatibility.
    `option` can specify the movement mode for the trackbar value to get. Specify the name.
    ※ This cannot be used if time control or setting value information is insufficient. The default value is returned.

### obj.getinfo(name,...)

Gets various environment information.

- `name`: Name of the information to get

#### Get the Script Folder Path

```aulua
obj.getinfo("script_path")
```

- Return value: Script folder path

#### Check Whether a Filter Object Is Being Processed

```aulua
obj.getinfo("filter")
```

- Return value: `true` = processing a filter object

#### Check Whether Video Is Being Output

```aulua
obj.getinfo("saving")
```

- Return value: `true` = outputting / `false` = not outputting

#### Get the Maximum Image Size

```aulua
max_x, max_y = obj.getinfo("image_max")
```

- Return value: Maximum image size (width, height)

#### Get the Maximum Frame Number Where an Object Exists

```aulua
obj.getinfo("frame_max")
```

- Return value: Maximum frame number (integer starting from 0)

#### Get the Maximum Layer Number Where an Object Exists

```aulua
obj.getinfo("layer_max")
```

- Return value: Maximum layer number (integer starting from 1)

#### Get Grid (BPM) Information

Gets the first BPM information.

```aulua
tempo, beat, offset = obj.getinfo("bpm")
```

- Return value: Tempo, beat, beat offset in seconds

#### Get Grid (BPM) List Information

```aulua
bpm = obj.getinfo("bpm_list")
```

- Return value: Array of BPM information tables
  - `bpm[1].tempo`: Tempo
  - `bpm[1].beat`: Beat
  - `bpm[1].start`: Start position in seconds
  - `bpm[1].offset`: Beat offset in seconds

#### Get Elapsed Time Since App Startup

```aulua
sec = obj.getinfo("clock")
```

- Return value: Elapsed time since app startup, in seconds
  ※ Measured with a performance counter.

#### Get Script Processing Time

```aulua
msec = obj.getinfo("script_time")
```

- Return value: Elapsed time since script execution started, in milliseconds
  ※ Measured with a performance counter.

#### Get Version Information

```aulua
version = obj.getinfo("version")
```

- Return value: Main program version number

### obj.data(name)

Gets a generic data area.
※ This is intended for script modules and DLLs.

- `name`: Registered name of the generic data area
- Return values: Pointer to the generic data area (userdata), size

Example:

```aulua
local data, size = obj.data("pos")
```

### obj.multiobject(num,func)

Draws an object multiple times as individual objects.

- `num`: Number of individual objects to draw
- `func`: Callback function for object drawing processing. It is called for the number of times to draw.
  The callback function can return the reference time offset, in seconds, for the individual object.

※ For usage, see the example for drawing multiple copies of an object as individual objects.

### obj.module(name)

Gets functions from a script module (`.mod2`).

- `name`: Module name, the base filename of the script module
- Return value: Function table from the script module

Example:

```aulua
local func = obj.module("ScriptModule")
local total = func.sum(1, 2, 3)
```

### obj.interpolation(time,x0,y0,z0,x1,y1,z1,x2,y2,z2,x3,y3,z3)

Calculates coordinates between p1 and p2 according to `time` (0 to 1), from the consecutive points p0 (x0, y0, z0), p1 (x1, y1, z1), p2 (x2, y2, z2), and p3 (x3, y3, z3).
※ The Y and Z coordinates can be omitted.

Example:

```aulua
x, y, z = obj.interpolation(time, x0, y0, z0, x1, y1, z1, x2, y2, z2, x3, y3, z3)
x, y = obj.interpolation(time, x0, y0, x1, y1, x2, y2, x3, y3)
```

### RGB(r,g,b)

Converts between color information (0x000000 to 0xffffff) and each red (0 to 255), green (0 to 255), and blue (0 to 255) component.
If two sets of `r,g,b` are specified, the color changes according to the object's elapsed time.

Example:

```aulua
col = RGB(r, g, b)
r, g, b = RGB(col)
col = RGB(r1, g1, b1, r2, g2, b2)
```

### HSV(h,s,v)

Converts between color information (0x000000 to 0xffffff) and each hue (0 to 360), saturation (0 to 100), and value (0 to 100) component.
If two sets of `h,s,v` are specified, the color changes according to the object's elapsed time.

Example:

```aulua
col = HSV(h, s, v)
h, s, v = HSV(col)
col = HSV(h1, s1, v1, h2, s2, v2)
```

### OR(a,b) / AND(a,b) / XOR(a,b)

Performs OR, AND, and XOR bit operations.

Example:

```aulua
c = OR(a, b)
```

### SHIFT(a,shift)

Performs an arithmetic shift. If `shift` is positive, it shifts left; if negative, it shifts right.

Example:

```aulua
b = SHIFT(a, 1)
```

### rotation(x0,y0,x1,y1,x2,y2,x3,y3,zoom,r)

Scales and rotates the specified coordinates around the origin (0,0).

- `x0,y0`: Coordinates of vertex 0
- `x1,y1`: Coordinates of vertex 1
- `x2,y2`: Coordinates of vertex 2
- `x3,y3`: Coordinates of vertex 3
- `zoom`: Scale (1.0 = original size)
- `r`: Rotation angle (360.0 is one full rotation)

Example:

```aulua
x0, y0, x1, y1, x2, y2, x3, y3 = rotation(x0, y0, x1, y1, x2, y2, x3, y3, zoom, r)
```

### require(modname)

The standard Lua `require()` function is hooked so its argument can use a UTF-8 string.  
※ Because Lua internally handles strings as Shift_JIS, paths related to `package.xxx` are stored in Shift_JIS.

### print(text[,...]), debug_print(text)

Outputs the specified string to the log.
If multiple arguments are specified, they are concatenated and output.
A log level can be specified as the first argument.
※ If an argument is a function or userdata, an empty string is output.
※ Settings can be changed from the log settings so output is also sent to OutputDebugString and similar destinations.

- `text`: Log string
  Log level specification (`"@info"`, `"@warn"`, `"@error"`, `"@verbose"`). ※ Only when this is the first argument.

Example:

```aulua
print("Log display")
print("@error", "Error display")
```

## About Lua/LuaJIT Binaries

The included `lua.dll` is built from version 5.1.4 from the Lua website with the 5.1.4-2 patch applied.

The included `luaJIT.dll` is built from version 2.1 from the LuaJIT website.

- Lua website
  <http://www.lua.org/>
- LuaJIT website
  <https://luajit.org/>
