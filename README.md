# Tailwind CSS Plugin - Scrollbar Variants

This plugin adds scrollbar variants

<br />

## Features

The built in Overflow class

```html
<div class="overflow-[<x|y>-]overlay">...</div>
```

| Prefix                  | Pseudo-Element                    |
| ----------------------- | --------------------------------- |
| `scrollbar`             | `::-webkit-scrollbar`             |
| `scrollbar-button`      | `::-webkit-scrollbar-button`      |
| `scrollbar-thumb`       | `::-webkit-scrollbar-thumb`       |
| `scrollbar-track`       | `::-webkit-scrollbar-track`       |
| `scrollbar-track-piece` | `::-webkit-scrollbar-track-piece` |
| `scrollbar-corner`      | `::-webkit-scrollbar-corner`      |
| `scrollbar-resizer`     | `::-webkit-resizer`               |

<br />

## Examples

x-axis margins

```html
<div class="scrollbar-track:mx-4">...</div>
```

Adjusted thumb opacity

```html
<div class="scrollbar-thumb:bg-opacity-[0.1]">...</div>
```

_Or get really crazy_

Adjusted background color and opacity (shorthand)

```html
<div class="scrollbar-thumb:bg-red-500/[0.26]">...</div>
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
