# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A starter for [p5.js](https://p5js.org) projects. Each top-level subdirectory is an **isolated sketch** — its own `index.html` + `sketch.js` — with no shared JS, no build step, and no framework. p5 loads from a CDN, so sketches open directly with `file://`.

This repo is meant to be forked and reused. Do not turn it into a bundled/React/TypeScript project. Do not add a dev server, bundler, or framework. If a sketch genuinely needs assets fetched at runtime (`loadImage` on a relative path, `loadJSON`, etc.), serve that one sketch ad-hoc — don't restructure the project.

## Creating a new sketch

```sh
./new <sketch-name>
```

Copies `template/index.html` and `template/sketch.js` into a new folder. Open the sketch's `index.html` directly in a browser.

## Conventions

- Sketches live in their own folder at the repo root. Don't nest deeper.
- The HTML template links `../style.css` — keep that relative path intact so the shared reset applies.
- p5 version is pinned in the template (`p5@1.11.3` via jsDelivr). Match it when adding new sketches.
- `jsconfig.json` enables `checkJs` — the editor surfaces JS type errors against `@types/p5`. Keep sketches plain JS (not TS).
- Use p5's global mode (`function setup()`, `function draw()` at top level), matching the template. Don't introduce instance mode unless a sketch genuinely needs it.

## Bun

`bun install` restores `@types/p5` and `@types/bun` for editor IntelliSense only — nothing is bundled or executed via Bun at runtime. Prefer `bun` over `npm`/`node` if tooling does get added later.
