// console.log(`A`)
import express from "express";
import expressSession from 'express-session'
import { userRoutes } from './routes/userRoute'
import dotenv from 'dotenv';
import { Client } from 'pg';
import grant from 'grant';
import { restaurantsRoute } from "./routes/restaurantsRoute";
import { albumRoute } from "./routes/albumRoute";
import fs from "fs";
import { uploadDir } from './utils/upload'
import cors from "cors";

// import formidable from 'formidable'
// import jsonfile from 'jsonfile';
// import path from 'path';


import fetch from 'cross-fetch';
export const app = express();
const PORT = 8080;


app.use(express.json());

let bodyParser = require('body-parser')
app.use(bodyParser.text({ limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors())
app.use(
    expressSession({
        secret: 'what to eat',
        resave: true,
        saveUninitialized: true,
    }),
)


declare module 'express-session' {
    interface SessionData {
        name?: String,
        user: any,
        grant: any,
        location?: any,
        food_category: any,
        profile_pic?: String,
        percentage?: any
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
        "origin": "http://localhost:8080", // To be changed to the elastic IP if not working on AWS server
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


fs.mkdirSync(uploadDir, { recursive: true })


app.use('/user', userRoutes)
app.use('/restaurants', restaurantsRoute);
app.use('/album', albumRoute)


app.post("/predict", async (req, res) => {
    try {
        console.log('Calling AI server :', process.env.AI_SERVER_URL)
        console.log("start calling python", req.body)
        let results = await fetch(`${process.env.AI_SERVER_URL}/get-food-identity`, {
            method: "POST",
            body: req.body.image
        })
        let food_identity = await results.json();
        console.log(food_identity)
        console.log("Connecting to Sanic Server..")
        res.status(200).json(food_identity)
        console.log("Responded result from Sanic Se/predict_serverrver")
    } catch (error) {
        console.log(error)
        res.status(400).json({ "message": "Invalid" })
    }

})








app.use(express.static('public'));
app.use("/uploads", express.static('uploads'))

app.use((req, res) => {
    res.redirect('/404.html')
})
// console.log(`B`)
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})
