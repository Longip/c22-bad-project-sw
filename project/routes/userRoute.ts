import express, { Request, Response } from 'express'
import client from './main'
export const userRoutes = express.Router();
userRoutes.post('/login', login);



async function login(req: Request, res: Response) {

    const username = req.body.username
    const password = req.body.password

    if (!username || !password) {
        res.status(400).json({
            message: 'Invalid username or password'
        })
        return
    }

    let userResult = await client.query(
        `select * from users where username = $1`,
        [username]
    )
    let dbUser = userResult.rows[0]

    if (!dbUser) {
        res.status(400).json({
            message: 'Invalid username or password'
        })
        return
    }
}
