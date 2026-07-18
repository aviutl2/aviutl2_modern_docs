---
title: Overview
description: This page provides an overview of AviUtl ExEdit2.
lang: en
---

# AviUtl ExEdit2 version 2.1.1 by ＫＥＮくん

## Introduction

This tool allows you to display and process multiple videos, images, and text in arbitrary locations and output them to files.
I hope this tool will be helpful for your video creation.

## System Requirements

- Windows 10 (64-bit) or later is supported.
- A CPU with AVX2 support is required.
- DirectX 11.3 or later is required.
- A GPU with ROV support is required.
  ※ Testing has been performed in a Windows 10 + GTX 1650 environment.

## Usage Notes

This program is freeware.
The author assumes no responsibility for any damage that may occur from using this program.

Use external files such as plugins and scripts at your own risk.
※ External programs may contain malware or similar risks, so caution is required.

This program may also be used for commercial work.
For items other than this program, such as assets and extensions, check their respective terms of use.
Please refrain from redistributing the program files to an unspecified large audience.

Licenses for the libraries used by this program are listed in the included [credits.txt](./credits/index.md).

## Compatibility

- The internal formats are RGBA 16-bit float (premultiplied alpha) and PCM 32-bit float.
- Because the internal design differs from previous AviUtl and ExEdit versions, behavior may differ.
- Plugins using older 32-bit DLLs and scripts that bundle DLLs generally cannot be used.
- Compatibility with previous ExEdit scripts is supported, but some features are not supported.
- The previous clipping by the object above has been removed. Instead, clipping objects mask lower-level objects.

## Notes

- Standard file input supports AVI, WAV, BMP, PNG, JPG, and GIF files.
- Standard file output supports uncompressed AVI, PNG, and JPG.
- Image files supported by Windows Imaging Component (WIC) can be loaded, but their extensions must be configured.
- Operations such as adding or deleting scenes currently do not support Undo.
- The maximum image size is the DirectX 11 Texture2D maximum size (16384x16384).

## File Placement

- If you do not use the installer, place the main program and included files in any folder.
- Environment settings and similar files are saved in the `ProgramData\aviutl2` folder. ※ Normally, this is `C:\ProgramData\aviutl2`.
- The plugin folder is `ProgramData\aviutl2\Plugin`. ※ One level below that folder is also included.
- The script folder is `ProgramData\aviutl2\Script`. ※ One level below that folder is also included.
- If font files (`*.ttf`, `*.ttc`, `*.otf`, `*.otc`) are placed in `ProgramData\aviutl2\Font`, they are added to the font list. ※ One level below that folder is also included.
- If emoji image files (`*.svg`, `*.png`, `*.bmp`) are placed in `ProgramData\aviutl2\Font`, they are added as emojis that can be used from control characters. ※ Files with the same base filename are registered as only one emoji.
- If you create a `data` folder in the folder where the main program files are placed, environment settings and similar files will be saved inside that `data` folder.
