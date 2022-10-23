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
  web: () => __vitePreload(() => import("./web.0b736342.js"), true ? ["assets/web.0b736342.js","assets/index.bd991f68.js","assets/modulepreload-polyfill.b7f2da20.js"] : void 0).then((m) => new m.CameraWeb())
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
    let photoUrl = photo.webPath;
    imageElem.src = photoUrl;
    console.log("imageElem.src: ", imageElem.src);
    profilePicFormElem.addEventListener("submit", async (e) => {
      e.preventDefault();
      let reqObj = {
        url: `${photoUrl}`
      };
      console.log(reqObj);
      const res = await fetch("/user/profilePicture", {
        method: "POST",
        header: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reqObj)
      });
      console.log("submitted profile pic sucessfully");
      if (res.ok) {
        console.log("server has received the profile picture URL");
      } else {
        console.log("server failed to get the profile picture URL");
      }
    });
  } catch (e) {
    console.warn("User cancelled", e);
  }
});
export { CameraSource as C, CameraDirection as a };
