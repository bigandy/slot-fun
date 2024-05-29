# `slot-fun`

A Web Component for investigating what can be done using the `<slot />` in web components.

**[Demo](https://bigandy.github.io/slot-fun/demo.html)** | **[Further reading](https://darn.es/web-component-github-starter-template/)**

## Examples

General usage example:

```html
<script type="module" src="slot-fun.js"></script>

<slot-fun>
  <button>Button</button>
</slot-fun>
```

Example using a fallback method:

```html
<script type="module" src="slot-fun.js"></script>

<slot-fun>
  <button>Button</button>
  <a href="#">Anchor</a>
</slot-fun>
<style>
  slot-fun:not(:defined) button,
  slot-fun:defined a {
    display: none;
  }
</style>
```

Example using options or additional fallback method:

```html
<script type="module" src="slot-fun.js"></script>

<slot-fun attribute="value">
  <button>Button</button>
</slot-fun>
<style>
  slot-fun[attribute="value"] {
    outline: 1px solid red;
  }
</style>
```

## Features

This Web Component allows you to:

- Check for…

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@bigandy/slot-fun): `npm install @bigandy/slot-fun`
1. [Download the source manually from GitHub](https://github.com/bigandy/slot-fun/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

### Usage

Make sure you include the `<script>` in your project (choose one of these):

```html
<!-- Host yourself -->
<script type="module" src="slot-fun.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://www.unpkg.com/@bigandy/slot-fun@1.0.0/slot-fun.js"
></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script type="module" src="https://esm.sh/@bigandy/slot-fun@1.0.0"></script>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/component-template)
