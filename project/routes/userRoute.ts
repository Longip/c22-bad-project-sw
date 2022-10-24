import express from 'express'
import { UserController } from "../controllers/user-controller"
import { UserService } from "../services/user-service"
import { knex } from '../utils/db';


export const userRoutes = express.Router();

let userService = new UserService(knex)
let userController = new UserController(userService)


userRoutes.get('/me', userController.me);
userRoutes.post('/login', userController.login);
userRoutes.get('/login/google', userController.loginGoogle);
userRoutes.post('/register', userController.register);
userRoutes.post('/logout', userController.logout);
userRoutes.post('/profilePicture', userController.changeProfilePicture);
