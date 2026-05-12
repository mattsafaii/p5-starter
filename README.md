# p5 Starter

A minimal starter for [p5.js](https://p5js.org). Each sketch lives in its own folder and runs straight from `file://` — no build step, no framework.

## Quick start

Click **Use this template** on GitHub, then:

```sh
./new my-sketch
open my-sketch/index.html
```

Edit `my-sketch/sketch.js` and refresh.

Run `bun install` to pull `@types/p5` for editor autocomplete (optional — nothing runs through a bundler).

## Live reload

To auto-refresh on save (and load local images/JSON, which `file://` blocks):

```sh
bunx live-server my-sketch
```

## Structure

```
template/         files copied when scaffolding
style.css         shared reset
new               scaffold script
<sketch-name>/    one folder per sketch
```

## License

[MIT](./LICENSE)
