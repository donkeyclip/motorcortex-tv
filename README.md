# motorcortex-tv

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-tv/demo/index.html)

## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-tv
# OR
$ yarn add @donkeyclip/motorcortex-tv
```

## Loading

```javascript
import { loadPlugin } from "@donkeyclip/motorcortex";
import tvDefinition from "@donkeyclip/motorcortex-abstracts";
const Plugin = loadPlugin(tvDefinition);
```

# Create incident

## CrossMoveRight

```javascript
const tvNoise = new TVPlugin.TVNoise(
  {
    width: 800,
    height: 600,
    sound: true,
  },
  {
    duration: 6000,
    selector: "#container",
  }
);
```

### CrossMoveRight Attrs

| Name     |            Are             | Values |
| -------- | :------------------------: | -----: |
| width    |    width of the canvas     |    num |
| height   |    height of the canvas    |    num |
| duration | the duration of the effect |    num |
| sound    | iclude noise sound or not  |   bool |

## imageGlitch

```javascript
const imageGlitch = new TVPlugin.ImageGlitch(
  {
    imgUrl:
      "https://images.hdqwalls.com/wallpapers/minimal-sunset-landscape-4k-w5.jpg",
  },
  {
    selector: "#glitchContainer",
    containerParams: {
      width: "800px",
      height: "600px",
    },
  }
);
```

### CrossMoveRightOutline Attrs

| Name   |                 Are                  | Values |
| ------ | :----------------------------------: | -----: |
| imgUrl | the image url to apply the effect on |    url |

## License

[MIT License](https://opensource.org/licenses/MIT)

[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
