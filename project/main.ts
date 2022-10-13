// console.log(`A`)
import express from "express";
import expressSession from 'express-session'
import { userRoutes } from './routes/userRoute'
import dotenv from 'dotenv';
import { Client } from 'pg';

export const app = express();
const PORT = 8080;


app.use(express.json());


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
// console.log(`B`)
app.listen(8080, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})