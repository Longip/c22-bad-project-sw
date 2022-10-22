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
  web: () => __vitePreload(() => import("./web.3f19aaa4.js"), true ? ["assets/web.3f19aaa4.js","assets/index.bd991f68.js","assets/modulepreload-polyfill.b7f2da20.js"] : void 0).then((m) => new m.CameraWeb())
});
const takePhotoBtn = document.querySelector("#take-photo");
const profilePicFormElem = document.querySelector("#profile-pic-form");
takePhotoBtn.addEventListener("click", async () => {
  try {
    const photo = await Camera.getPhoto({
      resultType: "uri"
    });
    const imageElem = document.querySelector("#image");
    if (!imageElem) {
      return;
    }
    imageElem.src = photo.webPath;
    console.log("imageElem.src: ", imageElem.src);
    let newProfilePic = await fetch(photo.webPath);
    console.log("hello");
    console.log("newProfilePic: ", newProfilePic);
    profilePicFormElem.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData();
      formData.append("image", newProfilePic);
      console.log("formData: ", formData);
      const res = await fetch("/user/profilePicture", {
        method: "POST",
        body: formData
      });
      console.log("submitted profile pic sucessfully");
    });
  } catch (e) {
    console.warn("User cancelled", e);
  }
});
export { CameraSource as C, CameraDirection as a };
