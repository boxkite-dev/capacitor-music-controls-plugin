import { registerPlugin } from "@capacitor/core";

import type { CapacitorMusicControlsPlugin } from "./definitions.js";

const CapacitorMusicControls = registerPlugin<CapacitorMusicControlsPlugin>(
  "CapacitorMusicControls",
  {
    web: () => import("./web.js").then((m) => new m.CapacitorMusicControlsWeb()),
  }
);

export * from "./definitions.js";
export { CapacitorMusicControls };
