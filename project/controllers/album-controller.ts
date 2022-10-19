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