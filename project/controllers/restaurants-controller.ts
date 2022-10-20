import express from "express"
import { RestaurantsService } from "../services/restaurants-service"
// import fetch from "cross-fetch"



export class RestuarantController {
    constructor(private restaurantsService: RestaurantsService) { }


    getByCategory = async (req: express.Request, res: express.Response) => {
        //add logic to change userCategory
        let userCategory = 14
        let cardResults = await this.restaurantsService.getRestaurantInfo(userCategory)
        let result = cardResults.rows
        res.json({ result })
    }

}