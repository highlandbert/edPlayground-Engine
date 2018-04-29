# edPlayground-Engine

Create levels for an edPlayground course.

## Basic setup

###### Plunker

The easiest option means using Plunker:

https://plnkr.co/edit/sSdtCpChQdlDweyrBsRy

Select **Fork** to start developing.

###### Local Development

You can also make your own development environment, just make sure to add this script tag at the bottom of your html file and before the level script.

```
<script src="http://localhost:8080/cdn/playground.js"></script>
```
*Coming soon (localhost is a placeholder here)*

## Overview

###### Pixi.js App
<a href="#app" name="app">#</a> playground.<b>app</b>

Exposes the Pixi.js app that runs under edPlayground's code, you can use it as you want, even mixing pixi.js code with the playground specific funtions.

###### Basic shapes

<a href="#rectangle" name="rectangle">#</a> playground.<b>rectangle(x, y, w, h, styles)</b>

Creates and returns a rectangle at **x**, **y** position, of **w** and **h** size and with optional **styles**.

<a href="#circle" name="circle">#</a> playground.<b>circle(x, y, r, styles)</b>

Creates and returns a circle at **x**, **y** position, of **r** radius and with optional **styles**.

<a href="#styles" name="styles">#</a> Styles</b>

Used for styling rectangles and circles

```
{
  lineWidth: 0,
  borderRadius: 0,
  lineColor: 0xCCCCCC,
  fillColor: 0xCCCCCC,
  alpha: 1
}
```

###### Sprites

<a href="#sprite" name="sprite">#</a> playground.<b>sprite(x, y, uri, styles)</b>

Creates and returns a sprite at **x**, **y** position, located in **uri** and with optional **styles**.

If you want to host the image for the sprite in the level, you have to get a valid **data uri** in Base64 format. The easiest option is this tool: 

https://websemantics.uk/tools/image-to-data-uri-converter

###### Element and Behaviours

<a href="#elementcreate" name="elementcreate">#</a> playground.<b>element.create( container, isInteractive )</b>

###### Events
