import express from "express";
import { RestaurantController } from "../controllers/restaurants-controller";
import { RestaurantService } from "../services/restaurants-service";
import { knex } from "../utils/db";
import { isLoggedIn } from "../utils/guard";

export const restaurantsRoute = express.Router();

let restaurantsService = new RestaurantService(knex);
let restaurantsController = new RestaurantController(restaurantsService);

restaurantsRoute.get("/category", isLoggedIn, restaurantsController.getByCategory);
restaurantsRoute.get("/location", isLoggedIn, restaurantsController.getByLocation);
