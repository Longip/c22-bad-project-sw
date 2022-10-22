import { Camera } from '@capacitor/camera'

const takePhotoBtn = document.querySelector('#take-photo')
const profilePicFormElem = document.querySelector("#profile-pic-form")



takePhotoBtn.addEventListener('click', async () => {
    try {
        const photo = await Camera.getPhoto({
            resultType: 'uri',
        });

        const imageElem = document.querySelector('#image');
        if (!imageElem) {
            return;
        }
        let photoUrl = photo.webPath;

        imageElem.src = photoUrl
        console.log("imageElem.src: ", imageElem.src)


        // let newProfilePic = await fetch(photoUrl)
        // console.log("hello")
        // console.log("newProfilePic: ", newProfilePic)


        const fetchAsBlob = photoUrl => fetch(photoUrl)
            .then(response => response.blob());

        console.log("fetchAsBlob: ", fetchAsBlob)

        // const convertBlobToBase64 = blob => new Promise((resolve, reject) => {
        //     const reader = new FileReader;
        //     reader.onerror = reject;
        //     reader.onload = () => {
        //         resolve(reader.result);
        //     };
        //     reader.readAsDataURL(blob);
        // });




        // send the new profile picture to the server
        profilePicFormElem.addEventListener("submit", async (e) => {
            e.preventDefault()
            const form = e.target
            const formData = new FormData()

            formData.append("image", newProfilePic)
            console.log("formData: ", formData)
            const res = await fetch('/user/profilePicture', {
                method: "POST",
                body: formData
            })
            console.log("submitted profile pic sucessfully")

        })





    } catch (e) {
        console.warn('User cancelled', e);
    }
})



