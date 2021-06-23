# Tailwind CSS Plugin - Scrollbar Variants

This plugin adds scrollbar variants

<br />

## Features

The built in Scrollbar class
```html
<div class="scrollbar-rounded">
  ...
<div>
```

The built in Overflow class
```html
<div class="overflow-[<x|y>-]overlay">
  ...
<div>
```

| Prefix                  | Pseudo-Element                    |
|-------------------------|-----------------------------------|
| `scrollbar`             | `::-webkit-scrollbar`             |
| `scrollbar-button`      | `::-webkit-scrollbar-button`      |
| `scrollbar-thumb`       | `::-webkit-scrollbar-thumb`       |
| `scrollbar-track`       | `::-webkit-scrollbar-track`       |
| `scrollbar-track-piece` | `::-webkit-scrollbar-track-piece` |
| `scrollbar-corner`      | `::-webkit-scrollbar-corner`      |
| `scrollbar-resizer`     | `::-webkit-resizer`               |

<br />

## Examples

Rounded scrollbar with x-axis margins
```html
<div class="scrollbar-rounded scrollbar-track:mx-4">
  ...
<div>
```

Rounded scrollbar with adjusted thumb opacity
```html
<div class="scrollbar-rounded scrollbar-thumb:bg-opacity-[0.1]">
  ...
<div>
```

_Or get really crazy_

Rounded scrollbar with adjusted background color and opacity (shorthand)
```html
<div class="scrollbar-rounded scrollbar-thumb:bg-red-500/[0.26]">
  ...
<div>
```

<br />

## Installation

Add it at the end of the plugins list in your `tailwind.config.js` file.

```js
module.exports = {
  // ...
  plugins: [
    // ...
    require("tailwind-scrollbar-variant"),
  ],
};
```

<br />

## Options

Customize defaults for `scrollbar-rounded` class:
```js
module.exports = {
  // ...
  plugins: [
    // ...
    require("tailwind-scrollbar-variant")({
      button: {
        display: "none",
        height: "0px",
        width: "0px"
      },
      corner: {
        bgColor: "transparent"
      },
      scrollbar: {
        height: "14px",
        scrollbarWidth: "thin",
        width: "14px"
      },
      thumb: {
        bgOpacity: "0.15",
        borderColor: "transparent",
        borderRadius: "7px",
        borderStyle: "solid",
        borderWidth: "4px",
        height: "auto",
        width: "auto"
      }
    }),
  ],
};
```
