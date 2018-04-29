# edPlayground's Creation Engine

Create levels for your own edPlayground course.

## Basic setup

###### Plunker

The easiest option means using Plunker:

https://plnkr.co/edit/sSdtCpChQdlDweyrBsRy

Select **Fork** to start developing.

###### Local Development

You can also make your own development environment, just make sure to add this script tag at the bottom of your html file and before the level script.

```html
<script src="http://localhost:8080/cdn/playground.js"></script>
```
*Coming soon (localhost is a placeholder here)*

## API Reference

###### Pixi.js App
<a href="#app" name="app">#</a> playground.<b>app</b>

Exposes the Pixi.js app that runs under edPlayground's code, you can use it as you want, even mixing pixi.js code with edPlayground's specific funtions.

http://pixijs.download/dev/docs/index.html

###### Basic shapes

<a href="#rectangle" name="rectangle">#</a> playground.<b>rectangle(x, y, w, h, styles)</b>

Creates and returns a rectangle at **x**, **y** position, of **w** and **h** size and with optional **styles**.

<a href="#circle" name="circle">#</a> playground.<b>circle(x, y, r, styles)</b>

Creates and returns a circle at **x**, **y** position, of **r** radius and with optional **styles**.

<a href="#styles" name="styles">#</a> Styles</b>

Used for styling rectangles and circles

```javascript
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

If you want to host the image in the level itself, you have to get a valid **data uri** in Base64 format. I recommend using this tool: 

https://websemantics.uk/tools/image-to-data-uri-converter

###### Element and Behaviours

Every basic shape and every sprite are a [Pixi.js Container](http://pixijs.download/dev/docs/PIXI.Container.html) and you can modify every one of their properties, like **x** and **y**, **scale** and **rotation**, **width** and **height**, etc.

<a href="#elementcreate" name="elementcreate">#</a> playground.<b>element.create(container, isInteractive)</b>

Creates and returns an **element**. The **container** can be a rectangle, a circle or a sprite. If you set **isInteractive** to **true**, you will be able to set a functions that triggers when the element is clicked or tapped.

```javascript
var circle = playground.circle(200, 200, 25, { fillColor: 0xFFFF0B })
var player = playground.element.create(circle, true);

player.interact(function(event) {
  player.scale.x += 1;
  player.scale.y += 1;
});
```

An element is also a **container**, but unlike basic shapes or sprites, elements can be interactible and they appear on screen.

<a href="#elementrectangle" name="elementrectangle">#</a> playground.<b>element.rectangle(x, y, w, h, styles, isInteractive)</b>

<a href="#elementcircle" name="elementcircle">#</a> playground.<b>element.circle(x, y, r, styles, isInteractive)</b>

<a href="#elementsprite" name="elementsprite">#</a> playground.<b>element.sprite(x, y, name, styles, isInteractive)</b>

These functions are shortcuts:

```javascript
var circle = playground.circle(200, 200, 25, { fillColor: 0xFFFF0B });
var player = playground.element.create(circle, true);
```
*VS*
```javascript
var player = playground.element.circle(200, 200, 35, { fillColor: 0xFFFF0B }, true);
```

###### Events

An edPlayground level can trigger these events:

- playground.**onLevelFinished**. You have to trigger this event when the level is finished, so the edPlayground app knows when to stop and submit the results. Trigger it using playground.**finishLevel()**.

###### Sensors

*TODO*

