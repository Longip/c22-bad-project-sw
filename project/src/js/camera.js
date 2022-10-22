import { Camera } from '@capacitor/camera'

document.querySelector('#take-photo').addEventListener('click', async () => {
    try {
        const photo = await Camera.getPhoto({
            resultType: 'uri',
        });

        const image = document.querySelector('#image');
        if (!image) {
            return;
        }
        image.src = photo.webPath;
    } catch (e) {
        console.warn('User cancelled', e);
    }
})
