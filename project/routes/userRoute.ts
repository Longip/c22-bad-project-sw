import express from 'express'
import { UserController } from "../controllers/user-controller"
import { UserService } from "../services/user-service"
export const userRoutes = express.Router();

let userService = new UserService()
let userController = new UserController(userService)


userRoutes.post('/login', userController.login);
userRoutes.post('/register', userController.register);
