import { registerPlugin } from "@capacitor/core";
const CapacitorMusicControls = registerPlugin("CapacitorMusicControls", {
    web: () => import("./web.js").then((m) => new m.CapacitorMusicControlsWeb()),
});
export * from "./definitions.js";
export { CapacitorMusicControls };
//# sourceMappingURL=index.js.map