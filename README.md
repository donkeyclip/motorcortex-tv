# MotorCortex-Tv

**Table of Contents**

- [MotorCortex-Tv](#motorcortex-tv)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [TVNoise](#tvnoise)
  - [ImageGlitch](#imageglitch)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-tv/demo/index.html)

# Intro / Features
Using MotorCortex-Τv your clip will look like a TV without signal. 

This Plugin exposes two incidents:
- TVNoise
- ImageGlitch
# Getting Started

## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-tv
# OR
$ yarn add @donkeyclip/motorcortex-tv
```

## Importing and Loading

```javascript
import { loadPlugin } from "@donkeyclip/motorcortex";
import tvDefinition from "@donkeyclip/motorcortex-abstracts";
const Plugin = loadPlugin(tvDefinition);
```

# Creating Incidents

## TVNoise

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

### TVNoise Attrs

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

### ImageGlitch Attrs

| Name   |                 Are                  | Values |
| ------ | :----------------------------------: | -----: |
| imgUrl | the image url to apply the effect on |    url |

# Adding Incidents in your clip

```javascript
clipName.addIncident(incidentName,startTime);
```

# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)

