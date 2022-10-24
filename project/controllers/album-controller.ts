import { Request, Response } from "express"
import fs from "fs"
import { AlbumService } from "../services/album-service"
import { formParse } from "../utils/upload"
import fetch from "cross-fetch"
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

            let resultArray = {
                japanese_food: { category_id: 1, qty: 0 }, dim_sum: { category_id: 2, qty: 0 }, curry: { category_id: 3, qty: 0 }, hot_pot: { category_id: 4, qty: 0 },
                dessert: { category_id: 5, qty: 0 }, bakery: { category_id: 6, qty: 0 }, pizza: { category_id: 7, qty: 0 }, steak: { category_id: 8, qty: 0 }, bbq: { category_id: 9, qty: 0 },
                seafood: { category_id: 10, qty: 0 }, noodles: { category_id: 11, qty: 0 }, beverage: { category_id: 12, qty: 0 }, fast_food: { category_id: 13, qty: 0 }, burger: { category_id: 14, qty: 0 }
            }

            console.log("start calling python")
            for (let i = 0; i < albumJSONArray.length; i++) {
                let results = await fetch("https://ai.eatwat7.today/get-food-identity", {
                    method: "POST",
                    body: JSON.stringify(albumJSONArray[i].file)
                })
                let finalResult = (await results.json())
                if (finalResult.classname == "Japanese") {
                    resultArray.japanese_food.qty = resultArray.japanese_food.qty + 1
                } else if (finalResult.classname == "Dim_sum") {
                    resultArray.dim_sum.qty = resultArray.dim_sum.qty + 1
                } else if (finalResult.classname == "Curry") {
                    resultArray.curry.qty = resultArray.curry.qty + 1
                } else if (finalResult.classname == "Hot_pot") {
                    resultArray.hot_pot.qty = resultArray.hot_pot.qty + 1
                } else if (finalResult.classname == "Dessert") {
                    resultArray.dessert.qty = resultArray.dessert.qty + 1
                } else if (finalResult.classname == "Bakery") {
                    resultArray.bakery.qty = resultArray.bakery.qty + 1
                } else if (finalResult.classname == "Pizza") {
                    resultArray.pizza.qty = resultArray.pizza.qty + 1
                } else if (finalResult.classname == "Steak") {
                    resultArray.steak.qty = resultArray.steak.qty + 1
                } else if (finalResult.classname == "BBQ") {
                    resultArray.bbq.qty = resultArray.bbq.qty + 1
                } else if (finalResult.classname == "Seafood") {
                    resultArray.seafood.qty = resultArray.seafood.qty + 1
                } else if (finalResult.classname == "Noodles") {
                    resultArray.noodles.qty = resultArray.noodles.qty + 1
                } else if (finalResult.classname == "Beverage") {
                    resultArray.beverage.qty = resultArray.beverage.qty + 1
                } else if (finalResult.classname == "Fast_food") {
                    resultArray.fast_food.qty = resultArray.fast_food.qty + 1
                } else if (finalResult.classname == "Burger") {
                    resultArray.burger.qty = resultArray.burger.qty + 1
                }

            }
            let temp_num = 0
            let top1
            for (let result in resultArray) {
    
                console.log(`${result}: ${resultArray[result].qty}`)
                if (resultArray[result].qty > temp_num) {
                    temp_num = resultArray[result].qty
                    top1 = { category_id: resultArray[result].category_id, qty: resultArray[result].qty }
                }
            }
            console.log("Top 1 Category: ");
            console.log(top1);
            await this.albumService.updateCategory(req.session['user'].id, top1?.category_id)

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