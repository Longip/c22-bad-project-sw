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
        let locationResults = await this.restaurantService.getOneLocationForEachDistrict()
        //get user location
        let userLocaiton = { x: 22.3195844803184, y: 114.208513498306 }
        let userDistrict: any

        for (let row of locationResults.rows) {
            console.log(row.id)
            if (row.id == 1) {
                userDistrict = row.id
            } else {
                if ((locationResults.rows[userDistrict - 1].coordinates.x - userLocaiton.x)**2 > (row.coordinates.x - userLocaiton.x)**2 && (locationResults.rows[userDistrict - 1].coordinates.y - userLocaiton.y)**2 > (row.coordinates.y - userLocaiton.y)**2) {
                    userDistrict = row.id
                }
            }


        }
        let cardResults = await this.restaurantService.getRestaurantInfoByLocation(userDistrict)
        let result = cardResults.rows
        res.json({ result })
    }
}