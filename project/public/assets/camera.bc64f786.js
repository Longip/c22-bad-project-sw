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
  web: () => __vitePreload(() => import("./web.2df7eb50.js"), true ? ["assets/web.2df7eb50.js","assets/index.bd991f68.js","assets/modulepreload-polyfill.b7f2da20.js"] : void 0).then((m) => new m.CameraWeb())
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
const Filesystem = registerPlugin("Filesystem", {
  web: () => __vitePreload(() => import("./web.e2b65448.js"), true ? ["assets/web.e2b65448.js","assets/index.bd991f68.js"] : void 0).then((m) => new m.FilesystemWeb())
});
const takePhotoBtn = document.querySelector("#take-photo");
const profilePicFormElem = document.querySelector("#profile-pic-form");
takePhotoBtn.addEventListener("click", async () => {
  try {
    const photo = await Camera.getPhoto({
      resultType: "CameraResultType.DataUrl"
    });
    console.log("photo", photo);
    let base64photo = photo.base64String;
    console.log("photo.base64String: ", base64photo);
    const imageElem = document.querySelector("#image");
    if (!imageElem) {
      return;
    }
    let photoUrl = photo.webPath;
    imageElem.src = photoUrl;
    console.log("imageElem.src: ", imageElem.src);
    profilePicFormElem.addEventListener("submit", async (e) => {
      e.preventDefault();
      const FILE_NAME = "";
      if (photo) {
        console.log("there is a photo");
        async function getUserProfile() {
          let userResult = await fetch("/user/me");
          if (!userResult.ok) {
            console.log("get user fail");
            return;
          }
          let userInfo = await userResult.json();
          console.log("userinfo: ", userInfo);
          let usernameAsFilename = userInfo.data.user.username;
          const FILE_NAME2 = usernameAsFilename + ".jpeg";
          console.log(FILE_NAME2);
        }
        getUserProfile();
      }
      const writeSecretFile = async () => {
        console.log("try to write file");
        await Filesystem.writeFile({
          path: `file://Users/mike/Documents/Road_of_Programming/tecky-practice/projects/Project3/c22-bad-project-sw/project/src/assets/user-profile-pictures/${FILE_NAME}`,
          data: base64photo,
          directory: `file://Users/mike/Documents/Road_of_Programming/tecky-practice/projects/Project3/c22-bad-project-sw/project/src/assets/user-profile-pictures/`
        });
        console.log("finished writing file");
      };
    });
  } catch (e) {
    console.warn("User cancelled", e);
  }
});
export { CameraSource as C, CameraDirection as a };
