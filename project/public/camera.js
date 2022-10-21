import { Camera } from '@capacitor/camera'
let takePhotoBtn = document.querySelectorAll("#take-photo")



window.customElements.define(
    'capacitor-welcome',
    class extends HTMLElement {
        constructor() {
            super();

            SplashScreen.hide();

            const root = this.attachShadow({ mode: 'open' });

        }

        connectedCallback() {
            const self = this;

            // Camera API (Take photo / choose 1 image from album)

            self.shadowRoot.querySelector('#take-photo').addEventListener('click', async function (e) {
                try {
                    console.log("hihi")
                    const photo = await Camera.getPhoto({
                        resultType: 'uri',
                    });

                    const image = self.shadowRoot.querySelector('#image');
                    if (!image) {
                        return;
                    }
                    image.src = photo.webPath;
                } catch (e) {
                    console.warn('User cancelled', e);
                }
            });

        }
    }
);