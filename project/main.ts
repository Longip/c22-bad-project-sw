console.log(`A`)

import express from "express";
import expressSession from 'express-session'
import { userRoutes } from './routes/userRoute'
import dotenv from 'dotenv';
import { Client } from 'pg';   //npm install pg @types/pg dotenv 
// import fetch from 'cross-fetch' //npm install cross-fetch
//npm install grant  dotenv @types/dotenv

export const app = express();

const PORT = 8080;

app.use(express.json());

// login 

app.post('/login', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    if (!username || !password) {
        res.status(400).json({
            message: 'Invalid username or password'
        })
        return
    }
    let userResult = await client.query(`SELECT * FROM users WHERE username = $1`, [username])
    let dbUser = userResult.rows[0]

    if (!dbUser) {
        res.status(400).json({
            message: 'Invalid username or password'
        })
        return
    }


})

//signup 

app.post('/signup', async (req, res) => {

    const username = req.body.username
    const password = req.body.password
    // console.log(username, password)

    if (!username || !password) {
        res.status(400).json({
            message: 'Missing information'
        })
        return
    }
    await client.query(`INSERT INTO users (username, password, created_at) VALUES ($1, $2, NOW())`, [username, password])
    res.json({ message: 'Create successful' })
})


// session + declare module

app.use(
    expressSession({
        secret: 'what to eat',
        resave: true,
        saveUninitialized: true,
    }),
)

declare module 'express-session' {
    interface SessionData {
        name?: string
    }
}


// connect DB 


dotenv.config();

export const client = new Client({
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});

client.connect();

app.use('/user', userRoutes)

app.use(express.static('public'));

app.use((req, res) => {
    res.redirect('/404.html')
})
console.log(`B`)
// app.listen(8080, () => {
//     console.log(`Listening on http://localhost:${PORT}`)
// })