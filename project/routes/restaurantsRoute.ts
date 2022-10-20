import express from 'express'
import { RestuarantController } from "../controllers/restaurants-controller"
import { RestaurantsService } from "../services/restaurants-service"
import { knex } from '../utils/db';


export const restaurantsRoute = express.Router();

let restaurantsService = new RestaurantsService(knex)
let restaurantsController = new RestuarantController(restaurantsService)


restaurantsRoute.get('/category', restaurantsController.getByCategory);