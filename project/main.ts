// console.log(`A`)
import express from "express";
import expressSession from 'express-session'
import { userRoutes } from './routes/userRoute'
import dotenv from 'dotenv';
import { Client } from 'pg';
import grant from 'grant';
import { restaurantsRoute } from "./routes/restaurantsRoute";

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

// Google Login
const grantExpress = grant.express({
    "defaults": {
        "origin": "http://localhost:8080",
        "transport": "session",
        "state": true,
    },
    "google": {
        "key": process.env.GOOGLE_CLIENT_ID || "",
        "secret": process.env.GOOGLE_CLIENT_SECRET || "",
        "scope": ["profile", "email"],
        "callback": "/user/login/google"
    }
});

app.use(grantExpress as express.RequestHandler);




app.use('/user', userRoutes)
app.use('/restaurants', restaurantsRoute);


app.post("/predict", async (req, res) => {
    try {
        console.log("start calling python", req.body)
        let results = await fetch("https://ai.eatwat7.today/get-food-identity", {
            method: "POST",
            body: req.body.image
        })
        let food_identity = await results.json();
        console.log(food_identity)
        console.log("Connecting to Sanic Server..")
        res.status(200).json(food_identity)
        console.log("Responded result from Sanic predict_server")
    } catch (error) {
        console.log(error)
        res.status(400).json({ "message": "Invalid" })
    }

})




app.use(express.static('public'));

app.use((req, res) => {
    res.redirect('/404.html')
})
// console.log(`B`)
app.listen(8080, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})