# Dumb(ish) prototype builder thing
Get prototypes out like there's no tomorrow. Using Photoshop, Illustrator, Sketch and the like was fun while it lasted. Let's face it, they don't work any more. Prototype web apps on the web, for the web.

## List of tools
- ✅ React (no fancy stuff)
- ✅ SASS support
- ✅ LESS support
- ✅ PostCSS
- ✅ [Flexboxgrid](https://github.com/kristoferjoseph/flexboxgrid) + [normalize.css](https://github.com/necolas/normalize.css)
- ✅ Webpack:
    - ✅ Autoprefixer
    - ✅ Babel 6
    - ✅ Watch / hot reload (no fancy stuff)
    - ✅ ESLint
    - Make that prototype already 🙌! 

## Setup
```bash
npm i
```

## Run
```bash
npm run proto
```

## Linting
```bash
npm run lint
```

*Webpack lints automatically on save. To disable it, comment out the `preLoaders` part in `config/webpack.js`.*

## License
[MIT](https://github.com/danmindru/politically-correct-dumb-prototype-boiler/blob/master/LICENSE)
