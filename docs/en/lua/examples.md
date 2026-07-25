---
title: "Lua Script: Examples"
description: This page provides examples of Lua scripts in AviUtl ExEdit2.
lang: en
---

# Examples

## Example: Use a Script in Text

The following text displays a time counter for the object time.

```autxt
Current object time=<?mes(string.format("%02d:%02d.%02d", obj.time / 60, obj.time % 60, (obj.time * 100) % 100))?>
```

## Example: Change Object Coordinates and Angle Over Time

The following script moves the object to the right and rotates it clockwise over time.

```aulua
obj.ox = obj.ox + obj.time * 10
obj.rz = obj.rz + obj.time * 360
```

## Example: Apply a Filter Effect to an Object

The following script makes the object become brighter and darker over time.

```aulua
i = math.cos(obj.time * math.pi * 2) * 50
obj.effect("色調補正", "明るさ", 100 + i)
```

## Example: Draw an Object Multiple Times

The following script draws 10 copies of the object in a circle.

```aulua
n = 10
l = obj.w * 2
for i = 0, n do
    r = 360 * i / n
    x = math.sin(r * math.pi / 180) * l
    y = -math.cos(r * math.pi / 180) * l
    obj.draw(x, y, 0, 1, 1, 0, 0, r)
end
```

## Example: Draw Multiple Copies as Individual Objects

The following script draws strings as individual objects.

```aulua
local text = { "A", "B", "C", "D", "E" }
local ox = 0
obj.multiobject(#text, function()
    obj.load("text", text[obj.index + 1])
    obj.ox = ox
    ox = ox + obj.w
end)
obj.ox = 0
```

## Example: Register Multiple Animation Effects, Custom Objects, and Other Scripts in One File

If the filename of a script file (`*.anm2`, `*.obj2`, `*.scn2`, `*.cam2`, `*.tra2`) starts with `@`, and each script starts with a definition such as `@name` as shown below, multiple scripts can be defined together.
※ The scripts in `script.anm2` and `script.obj2` also use this format.

### File Contents for Multiple Registration: `@multi-registration-example.anm`

```aulua
@sample1
--track0:Speed,-10,10,10
obj.ox = obj.ox + obj.track0 * obj.time
@sample2
--track0:Speed,-10,10,10
obj.oy = obj.oy + obj.track0 * obj.time
```

### File Contents for Single Registration: `single-registration-example.anm`

```aulua
--track0:Speed,-10,10,10
obj.ox = obj.ox + obj.track0 * obj.time
```

## Example: Scene Change Script

The following script crossfades over time.
In a scene change script, the frame buffer contains the image before the scene change, and the image object after the scene change contains the image after the scene change. The script uses `obj.getvalue("scenechange")` to get the ratio that determines which one is displayed.
※ `0` means the object side, and `1` means the frame buffer side.

```aulua
a = 1 - obj.getvalue("scenechange")
obj.draw(0, 0, 0, 1, a)
```

## Example: Display Anchor Points and Get Coordinates

The following scripts display anchor points and get their coordinates.

### Using an Array Variable Item

```aulua
--value@pos:Coordinates,{}
num = 3
obj.setanchor("pos", num, "loop")
for i = 0, num - 1 do
    x = pos[i * 2 + 1]
    y = pos[i * 2 + 2]
end
```

※ For 3D coordinates, each XYZ coordinate triplet is stored in the array.
※ `pos={}` can also contain initial values.

### Using Trackbars

```aulua
--track@x:X,-100000,100000,0
--track@y:Y,-100000,100000,0
--track@z:Z,-100000,100000,0
--trackgroup@x,y,z:Group
num = obj.setanchor("x,y,z", 0, "xyz", "line")
for i = 0, num - 1 do
    x = obj.getvalue("track.x", 0, i)
    y = obj.getvalue("track.y", 0, i)
    z = obj.getvalue("track.z", 0, i)
end
```

### Using `obj.setanchor()` Multiple Times

```aulua
--value@pos1:Coordinates 1,{}
--value@pos2:Coordinates 2,{}
obj.setanchor("pos1", 4, "loop", "color", RGB(0, 255, 255))
obj.setanchor("pos2", 2, "line", "color", RGB(0, 255, 0))
```

## Example: Trackbar Movement Script

The following script moves a trackbar value from the start point to the end point at a constant speed.
Normal object-related variables and functions cannot be used in trackbar movement scripts.
Specifying `--twopoint` at the beginning of a script file (`*.tra2`) ignores intermediate points.
Specifying something like `--speed:initial acceleration value (0/1),initial deceleration value (0/1)` enables acceleration and deceleration settings.
Specifying `--param:initial value` enables numeric trackbar setting values.
Specifying `--param:item name,initial value` sets an item name for the settings dialog.
Specifying `--param:item name/check,initial value` creates a checkbox item. Its value is 0 or 1.
Specifying `--param:item name/select/choice=value/choice=value,initial value` creates a list selection item.
Specifying multiple `--param` lines allows multiple setting values.
※ Changing the order of the specifications prevents saved setting values from being retrieved correctly.
Specifying `--timecontrol` enables time control editing for the trackbar.

```aulua
index, ratio = math.modf(obj.getpoint("index"))
st = obj.getpoint(index)
ed = obj.getpoint(index + 1)
return st + (ed - st) * ratio
```

### When Multiple Setting Values Are Specified

```aulua
param1, param2 = obj.getpoint("param")
```

### Creating Checkbox or List Selection Items in the Settings Dialog

```aulua
--param:Acceleration/check,0
--param:Type/select/Linear=1/Curve=2,1
```

## Example: Use a Pixel Shader

The following script adjusts the brightness of the object.

```aulua
--track@bright:Brightness,-100,100,0,0.01
--[[pixelshader@psmain:
cbuffer constant0: register(b0) {
    float bright;
};
float4 psmain(float4 pos: SV_Position): SV_Target {
    return float4(bright, bright, bright, 1);
}
]]
obj.pixelshader("psmain", "object", nil, { bright / 100 }, "add")
```
