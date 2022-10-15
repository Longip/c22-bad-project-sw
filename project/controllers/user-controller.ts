import express from "express"
import { UserService } from "../services/user-service"
import { checkPassword } from "../utils/hash"


export class UserController {
    constructor(private userService: UserService) { }


    login = async (req: express.Request, res: express.Response) => {
        const username = req.body.username
        const password = req.body.password

        // If no input
        if (!username || !password) {
            res.status(400).json({
                message: 'Invalid username or password'
            })
            return
        }

        let userResult = await this.userService.getUserByUsername(username)
        let dbUser = userResult.rows[0]

        //If such username does not exist
        if (!dbUser) {
            res.status(400).json({
                message: 'No such user'
            })
            return
        }

        // If such username exists, and the password matches with the hashedPassword
        let isValid = await checkPassword(password, dbUser["password"])

        if (isValid) {
            console.log('login successfully')
            res.status(200).json({
                message: 'login successfully'
            })
        }
        else {
            res.status(401).json({
                message: 'wrong password'
            })
        }
    }

    register = async (req: express.Request, res: express.Response) => {
        console.log("server side receives signal")
        console.log("request body: ", req.body)
        const username = req.body.username
        const password = req.body.password

        console.log(username, password)

        let userResult = await this.userService.getUserByUsername(username)
        let dbUser = userResult.rows[0]

        if (dbUser) {
            console.log("user found in DB")
            res.status(400).json({
                message: 'User already exists'
            })
            return
        }

        if (!username || !password || username.length > 12 || password.length > 12) {
            res.status(400).json({
                message: 'Missing or invalid information'
            })
            return
        }
        await this.userService.createUser(username, password)

        res.json({ message: 'Create successfully' })
    }
}

