import express from "express"
import { RestaurantService } from "../services/restaurants-service"
// import fetch from "cross-fetch"



export class RestaurantController {
    constructor(private restaurantService: RestaurantService) { }


    getByCategory = async (req: express.Request, res: express.Response) => {
        let userCategory = await this.restaurantService.getUserCategory(req.session['user'].id)
        let category_idtemp = userCategory.rows[0].category_id
        console.log(`getting rest by category_id = ${category_idtemp}`)

        //add logic to change user category
        let cardResults = await this.restaurantService.getRestaurantInfoByCategory(category_idtemp)
        let result = cardResults.rows
        res.json({ result })
    }
    getByLocation = async (req: express.Request, res: express.Response) => {
        console.log("getting rest by location")
        let locationResults = await this.restaurantService.getOneLocationForEachDistrict()
        //get user location
        let userLocation = req.session['location']
        console.log("user's location is : " + userLocation)
        // let userLocation = { x: 22.3195844803184, y: 114.208513498306 }
        let userDistrict: any

        for (let row of locationResults.rows) {
            if (row.id == 1) {
                userDistrict = row.id
            } else {
                if ((locationResults.rows[userDistrict - 1].coordinates.x - userLocation.x)**2 > (row.coordinates.x - userLocation.x)**2 && (locationResults.rows[userDistrict - 1].coordinates.y - userLocation.y)**2 > (row.coordinates.y - userLocation.y)**2) {
                    userDistrict = row.id
                }
            }


        }
        let cardResults = await this.restaurantService.getRestaurantInfoByLocation(userDistrict)
        let result = cardResults.rows
        res.json({ result })
    }
}