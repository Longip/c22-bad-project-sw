import { Request, Response } from "express"
import fs from "fs"
import { AlbumService } from "../services/album-service"
import { formParse } from "../utils/upload"

export class AlbumController {
    constructor(private albumService: AlbumService) { }

    me = async (req: Request, res: Response) => {
        res.json({
            message: 'Success retrieve user',
            data: {
                user: req.session['user'] ? req.session['user'] : null
            }
        })
    }


    //uploadToAlbum + pass photo to model
    uploadToAlbum = async (req: Request, res: Response) => {
        try {
            let currentUser = req.session['user']
            let { files } = await formParse(req)
            let albumJSONArray = []
            for (let fieldName in files) {
                await this.albumService.uploadToAlbum((files[fieldName] as any).newFilename, currentUser.id)
            }
            const albumResult = await this.albumService.getAlbum(currentUser.id);
            for (let fieldName of albumResult) {
                // console.log(fieldName.image_source)
                let notYet64 = `uploads/${fieldName.image_source}`
                let buff = fs.readFileSync(`${notYet64}`)
                let base64data = buff.toString('base64')
                // console.log(base64data)
                albumJSONArray.push({
                    file: base64data
                })
            }
            // console.log(albumJSONArray)



            console.log("start calling python")
            for (let i = 0; i < albumJSONArray.length; i++) {
                let results = await fetch("https://ai.eatwat7.today/get-food-identity", {
                    method: "POST",
                    body: JSON.stringify(albumJSONArray[i].file)
                })
                let finalResult = (await results.json())
                console.log(finalResult)
            }


            // let food_identity = await results.json();
            // console.log(food_identity)
            // console.log("Connecting to Sanic Server..")
            // res.status(200).json(food_identity)
            // console.log("Responded result from Sanic Server")



            res.status(200).send("Upload successful")
            return
        } catch (e) {
            console.log(e);

            res.status(400).send("Upload Fail")
            return
        }
    }

    // async function identityClassifier(image){
    //     // identity="Zeus"
    //     let image_base64 = image.toDataURL('image/jpeg').replace(/^data:image\/jpeg;base64,/, "");
    //     let results=await fetch("http://localhost:8080/login", {
    //       method: "POST",
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({"image_base64":image_base64})
    //     });

    getAlbum = async (req: Request, res: Response) => {
        let currentUser = req.session['user']
        const albumResult = await this.albumService.getAlbum(currentUser.id);

        res.json(albumResult)

        return
    }

    deletePhotoFromAlbum = async (req: Request, res: Response) => {
        try {
            const photoName = req.body.index
            console.log(photoName)


            await this.albumService.deletePhoto(photoName)

            res.json({
                message: 'del success'
            })
        } catch (e) {
            console.log('error : ' + e)
            res.status(500).json({
                message: 'del fail'
            })
        }
    }

}