
<!-- cspell: disable bracketsstartstop -->
<div align="center">

  <h1><code>node-deno-template</code></h1>

  <strong>A template for creating libraries compatible with both Node.js and Deno. Using Typescript, Jest, and ESLint with a full CD pipeline</strong>

  <p>
    <a href="https://github.com/josh-hemphill/maxminddb-deno/releases"><img src="https://img.shields.io/github/v/tag/josh-hemphill/node-deno-template?sort=semver&style=flat-square" alt="version" /></a>
    <a href="https://github.com/josh-hemphill/maxminddb-deno/actions/workflows/test.yml"><img src="https://img.shields.io/github/workflow/status/josh-hemphill/maxminddb-deno/Test?label=Tests&style=flat-square" alt="Test Status" /></a>
    <a href="https://github.com/josh-hemphill/maxminddb-deno/actions/workflows/build.yml"><img src="https://img.shields.io/github/workflow/status/josh-hemphill/maxminddb-deno/Build?label=Build&style=flat-square" alt="Build Status" /></a>
    <a href="https://npmjs.org/package/node-deno-template"><img src="https://img.shields.io/static/v1?label=&message=NPM&color=informational&style=flat-square" alt="NPM" /></a>
    <a href="https://deno.land/x/maxminddb/mod.ts"><img src="https://img.shields.io/static/v1?label=&message=Deno&logo=deno&color=informational&style=flat-square" alt="Deno Page" /></a>
    <a href="https://doc.deno.land/https/deno.land/x/maxminddb/mod.ts"><img src="https://img.shields.io/static/v1?label=&message=API-Doc&color=informational&style=flat-square&logo=deno" alt="API doc" /></a>
    <a href="https://libraries.io/npm/node-deno-template"><img src="https://img.shields.io/librariesio/release/npm/node-deno-template?label=Deps&style=flat-square" alt="Libraries.io dependency status for latest release" /></a>
    <a href="https://openbase.io/js/node-deno-template?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge"><img src="https://badges.openbase.io/js/rating/node-deno-template.svg" alt="Rate on Openbase" /></a>
    <a href="https://codecov.io/gh/josh-hemphill/node-deno-template"><img src="https://img.shields.io/codecov/c/github/josh-hemphill/node-deno-template.svg?style=flat-square" alt="Codecov" /></a>
  </p>

</div>

<br />

## Install

### Node.js & Browser

```bash
npm install node-deno-template
```

```js
/* ES Module / Typescript */ import { hello_world } from "node-deno-template";
/* CommonJS */ const { hello_world } = require("node-deno-template");
```

### Deno

```js
import hello_world from "https://deno.land/x/node-deno-template/mod.ts"
```

### Import in HTML

```html
<script type="text/javascript" src="dist/node-deno-template.js"></script> <!-- For UMD module -->
<script type="text/javascript" src="dist/node-deno-template.poly.iife.js"></script> <!-- For global IIFE with polyfills -->
<script type="module" src="dist/node-deno-template.esm.js"></script> <!-- For ES Module -->
```

### From CDN

```html
<script type="text/javascript" src="https://unpkg.com/node-deno-template"></script>
```

## Examples

For a full list see the [examples directory](./example/) (coming)

### Play with it

[CodePen (suggested)](##) (coming soon)

[JSFiddle](##) (coming soon)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
