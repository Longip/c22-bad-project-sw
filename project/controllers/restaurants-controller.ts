import express from "express"
import { RestaurantService } from "../services/restaurants-service"
// import fetch from "cross-fetch"



export class RestaurantController {
    constructor(private restaurantService: RestaurantService) { }


    getByCategory = async (req: express.Request, res: express.Response) => {
        //add logic to change user category
        let userCategory = 1
        let cardResults = await this.restaurantService.getRestaurantInfoByCategory(userCategory)
        let result = cardResults.rows
        res.json({ result })
    }
    getByLocation = async (req: express.Request, res: express.Response) => {
        //add logic to change user location
        let district_id = 20
        let cardResults = await this.restaurantService.getRestaurantInfoByLocation(district_id)
        let result = cardResults.rows
        res.json({ result })
    }
}