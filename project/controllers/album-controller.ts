import { Request, Response } from "express"
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

    uploadToAlbum = async (req: Request, res: Response) => {
        try {
            let currentUser = req.session['user']
            let { files } = await formParse(req)
            for (let fieldName in files) {
                console.log((files[fieldName] as any).newFilename)
                await this.albumService.uploadToAlbum((files[fieldName] as any).newFilename, currentUser.id)
                //轉base 64俾python
            }
            res.status(200).send("Upload successful")
            return
        } catch (e) {
            console.log(e);

            res.status(400).send("Upload Fail")
            return
        }
    }

}