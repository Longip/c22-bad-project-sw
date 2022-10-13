import express from "express"
import { UserService } from "../services/user-service"



export class UserController {
    constructor(private userService: UserService) { }


    login = async (req: express.Request, res: express.Response) => {
        const username = req.body.username
        const password = req.body.password
        if (!username || !password) {
            res.status(400).json({
                message: 'Invalid username or password'
            })
            return
        }

        let dbUser = await this.userService.getUserByUsername(username)

        if (!dbUser) {
            res.status(400).json({
                message: 'Invalid username or password'
            })
            return
        }


    }

    register = async (req: express.Request, res: express.Response) => {
        const username = req.body.username
        const password = req.body.password
        console.log(username, password)

        if (!username || !password) {
            res.status(400).json({
                message: 'Missing or invalid information '
            })
            return
        }
        await this.userService.createUser(username, password)
        res.json({ message: 'Create successfully' })
    }

}

