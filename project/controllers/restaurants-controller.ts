import express from "express"
import { RestaurantsService } from "../services/restaurants-service"
// import fetch from "cross-fetch"



export class RestuarantController {
    constructor(private restaurantsService: RestaurantsService) { }


    displayCard = async (req: express.Request, res: express.Response) => {
        // console.log(req.body)
        let cardResults = await this.restaurantsService.getRestaurantInfo(1)
        let result = cardResults.rows
        console.log(cardResults.rows)
        res.json({ result })
    }

}