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
  web: () => __vitePreload(() => import("./web.e2bd5614.js"), true ? ["assets/web.e2bd5614.js","assets/index.bd991f68.js","assets/modulepreload-polyfill.b7f2da20.js"] : void 0).then((m) => new m.CameraWeb())
});
var Directory;
(function(Directory2) {
  Directory2["Documents"] = "DOCUMENTS";
  Directory2["Data"] = "DATA";
  Directory2["Library"] = "LIBRARY";
  Directory2["Cache"] = "CACHE";
  Directory2["External"] = "EXTERNAL";
  Directory2["ExternalStorage"] = "EXTERNAL_STORAGE";
})(Directory || (Directory = {}));
var Encoding;
(function(Encoding2) {
  Encoding2["UTF8"] = "utf8";
  Encoding2["ASCII"] = "ascii";
  Encoding2["UTF16"] = "utf16";
})(Encoding || (Encoding = {}));
registerPlugin("Filesystem", {
  web: () => __vitePreload(() => import("./web.e2b65448.js"), true ? ["assets/web.e2b65448.js","assets/index.bd991f68.js"] : void 0).then((m) => new m.FilesystemWeb())
});
const takePhotoBtn = document.querySelector("#take-photo");
const profilePicFormElem = document.querySelector("#profile-pic-form");
takePhotoBtn.addEventListener("click", async () => {
  try {
    const photo = await Camera.getPhoto({
      resultType: "uri"
    });
    console.log("photo", photo);
    const imageElem = document.querySelector("#image");
    if (!imageElem) {
      return;
    }
    let photoUrl = photo.webPath;
    imageElem.src = photoUrl;
    console.log("imageElem.src: ", imageElem.src);
    profilePicFormElem.addEventListener("submit", async (e) => {
      e.preventDefault();
      const uriResult = await fetch(photoUrl);
      const blob = await uriResult.blob();
      let imageFile = new File([blob], "", { type: "image/png" });
      console.log(imageFile);
      const form = e.target;
      const formData = new FormData();
      formData.append("image", imageFile);
      const res = await fetch("/user/profilePicture", {
        method: "POST",
        body: formData
      });
    });
  } catch (e) {
    console.warn("User cancelled", e);
  }
});
export { CameraSource as C, CameraDirection as a };
