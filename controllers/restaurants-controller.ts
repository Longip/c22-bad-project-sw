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
        // console.log(`getting rest by location... latitude: ${req.session['location'].x},longitude: ${req.session['location'].y}`)
        let result = await this.restaurantService.getTheNearestDistrict(req.session['location'].x, req.session['location'].y)
        let userDistrict = result.rows[0].district_id
        console.log(`getting rest by district_id ${userDistrict}`)

        let cardResults = await this.restaurantService.getRestaurantInfoByLocation(userDistrict)
        let finalResult = cardResults.rows
        res.json( [finalResult] )
    }
}