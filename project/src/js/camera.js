import { Camera } from '@capacitor/camera'

const takePhotoBtn = document.querySelector('#take-photo')
const profilePicFormElem = document.querySelector("#profile-pic-form")



takePhotoBtn.addEventListener('click', async () => {
    try {
        const photo = await Camera.getPhoto({
            resultType: 'uri',
        });

        // display only
        const imageElem = document.querySelector('#image');
        if (!imageElem) {
            return;
        }
        let photoUrl = photo.webPath;

        imageElem.src = photoUrl
        console.log("imageElem.src: ", imageElem.src)

        // send the new profile picture to the server
        profilePicFormElem.addEventListener("submit", async (e) => {
            e.preventDefault()
            let reqObj = {
                url: `${photoUrl}`
            }
            console.log(reqObj)

            const res = await fetch('/user/profilePicture', {
                method: "POST",
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqObj)
            })
            console.log("submitted profile pic sucessfully")

            if (res.ok) {
                console.log("server has received the profile picture URL")
            } else {
                console.log("server failed to get the profile picture URL")
            }
        })





    } catch (e) {
        console.warn('User cancelled', e);
    }
})



