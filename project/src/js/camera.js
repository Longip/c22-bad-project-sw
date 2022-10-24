import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera'
import { Filesystem, Directory } from '@capacitor/filesystem'
import { FilesystemDirectory } from '@capacitor/core'
import fs from 'fs'




const takePhotoBtn = document.querySelector('#take-photo')
const profilePicFormElem = document.querySelector("#profile-pic-form")

const IMAGE_DIR = "assets/user-profile-pictures"

takePhotoBtn.addEventListener('click', async () => {
    try {

        // Take photo
        const photo = await Camera.getPhoto({
            resultType: "CameraResultType.DataUrl",
        });
        console.log("photo", photo)
        let base64photo = photo.base64String
        console.log("photo.base64String: ", base64photo)

        // display only
        const imageElem = document.querySelector('#image');
        if (!imageElem) {
            return;
        }
        let photoUrl = photo.webPath;
        imageElem.src = photoUrl
        console.log("imageElem.src: ", imageElem.src)

        profilePicFormElem.addEventListener("submit", async (e) => {
            e.preventDefault()
            const FILE_NAME = ""

            // get username to use it as filename
            if (photo) {
                console.log("there is a photo")
                async function getUserProfile() {
                    let userResult = await fetch('/user/me')
                    if (!userResult.ok) {
                        console.log('get user fail')
                        return
                    }

                    let userInfo = await userResult.json()
                    console.log("userinfo: ", userInfo)

                    let usernameAsFilename = userInfo.data.user.username
                    const FILE_NAME = usernameAsFilename + ".jpeg"
                    console.log(FILE_NAME)

                }
                getUserProfile()
            }

            // // send the base64string to the server
            // let base64Result = await fetch("/user/profilePicture", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         "photo64": `${base64photo}`
            //     })
            // })

            const writeSecretFile = async () => {
                console.log("try to write file")
                await Filesystem.writeFile({
                    path: `file://Users/mike/Documents/Road_of_Programming/tecky-practice/projects/Project3/c22-bad-project-sw/project/src/assets/user-profile-pictures/${FILE_NAME}`,
                    data: base64photo,
                    directory: `file://Users/mike/Documents/Road_of_Programming/tecky-practice/projects/Project3/c22-bad-project-sw/project/src/assets/user-profile-pictures/`
                });
                console.log("finished writing file")

            };


        })


    } catch (e) {
        console.warn('User cancelled', e);
    }
})



