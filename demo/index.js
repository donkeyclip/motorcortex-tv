import Player from "@donkeyclip/motorcortex-player";
import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex/";
import TVPluginDef from "../dist/motorcortex-tv.esm";
const TVPlugin = loadPlugin(TVPluginDef);

const myClip = new HTMLClip({
  html: `
    <div>
      <div id="container"></div>
    </div>
  `,
  css: `
    #container{
      width: 800px;
      height: 600px;
    }
  `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "800px",
    height: "600px",
  },
});

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

myClip.addIncident(tvNoise, 0);
new Player({ clip: myClip });
