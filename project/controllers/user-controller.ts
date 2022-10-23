import express from "express"
import { UserService } from "../services/user-service"
import { checkPassword } from "../utils/hash"
import fetch from "cross-fetch"
import crypto from "crypto"
import { User } from "../model/User"

// export const app = express();
// app.use(express.json());

export class UserController {
    constructor(private userService: UserService) { }


    login = async (req: express.Request, res: express.Response) => {
        const username = req.body.username
        const password = req.body.password

        // Check input
        if (!username || !password) {
            res.status(400).json({
                message: 'Invalid username or password'
            })
            return
        }

        // Check DB
        let userResult = await this.userService.getUserByUsername(username)
        let dbUser: User = userResult.rows[0]

        if (!dbUser) {
            res.status(400).json({
                message: 'No such user'
            })
            return
        }

        // If such username exists, and the password matches with the hashedPassword
        let isValid = await checkPassword(password, dbUser["password"]!)

        if (isValid) {
            console.log('login successfully')
            delete dbUser['password']
            req.session['user'] = dbUser

            res.status(200).redirect('/homepage.html')
        }
        else {
            res.status(401).json({
                message: 'wrong password'
            })
        }


    }

    location = async (req: express.Request, res: express.Response) => {
        const latitude = req.body.latitude
        const longitude = req.body.longitude
        const location = {x: latitude, y: longitude}
        req.session['location'] = location
        // console.log(req.session['location'].latitude)
        // console.log(req.session['location'].longitude)
    }

    loginGoogle = async (req: express.Request, res: express.Response) => {
        const accessToken = req.session?.['grant'].response.access_token;
        console.log("accessToken: ", accessToken)
        const fetchRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            method: "get",
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });
        const result = await fetchRes.json();
        console.log("google result:", result)

        // Create a random password for Google users
        const randomString = crypto.randomBytes(32).toString("hex")

        const username = result.email
        const password = randomString
        const email = result.email

        let userResult = await this.userService.getUserByUsername(username)
        let dbUser: User = userResult.rows[0]
        req.session['user'] = dbUser
        if (dbUser) {
            res.redirect('/homepage.html')
            return
        }
        await this.userService.createUser(username, password, email)
        res.redirect('/homepage.html')

    }

    register = async (req: express.Request, res: express.Response) => {
        console.log("server side receives signal")
        console.log("request body: ", req.body)
        const username = req.body.username
        const password = req.body.password

        console.log(username, password)

        let userResult = await this.userService.getUserByUsername(username)
        let dbUser: User = userResult.rows[0]

        if (dbUser) {
            console.log("user found in DB")
            console.log(dbUser)
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
        await this.userService.createUser(username, password, null)

        res.json({ message: 'Create successfully' })
    }

    //logout

    logout = async (req: express.Request, res: express.Response) => {
        req.session.destroy(() => {
            console.log('user logged out')
        })
        res.redirect('/index.html')
    }

    // Update profile picture
    changeProfilePicture = async (req: express.Request, res: express.Response) => {

        console.log("request body: ", req.body)
        console.log("hello")
        let url = req.body.url

        console.log("Server receive this: ", url)

        res.status(200).json({
            message: "received profile picture"
        })
    }


}
