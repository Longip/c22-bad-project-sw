import "./modulepreload-polyfill.b7f2da20.js";
import { r as registerPlugin, _ as __vitePreload } from "./index.bd991f68.js";
var CameraSource;
(function(CameraSource2) {
  CameraSource2["Prompt"] = "PROMPT";
  CameraSource2["Camera"] = "CAMERA";
  CameraSource2["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function(CameraDirection2) {
  CameraDirection2["Rear"] = "REAR";
  CameraDirection2["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function(CameraResultType2) {
  CameraResultType2["Uri"] = "uri";
  CameraResultType2["Base64"] = "base64";
  CameraResultType2["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
const Camera = registerPlugin("Camera", {
  web: () => __vitePreload(() => import("./web.1021274f.js"), true ? ["assets/web.1021274f.js","assets/index.bd991f68.js","assets/modulepreload-polyfill.b7f2da20.js"] : void 0).then((m) => new m.CameraWeb())
});
document.querySelector("#take-photo").addEventListener("click", async () => {
  try {
    const photo = await Camera.getPhoto({
      resultType: "uri"
    });
    const image = document.querySelector("#image");
    if (!image) {
      return;
    }
    image.src = photo.webPath;
  } catch (e) {
    console.warn("User cancelled", e);
  }
});
export { CameraSource as C, CameraDirection as a };
