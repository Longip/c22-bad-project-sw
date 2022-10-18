// console.log(`A`)
import express from "express";
import expressSession from 'express-session'
import { userRoutes } from './routes/userRoute'
import dotenv from 'dotenv';
import { Client } from 'pg';
import grant from 'grant';
import { restaurantsRoute } from "./routes/restaurantsRoute";
import formidable from 'formidable'


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


//formidable
const uploadDir = 'uploads'
const form = formidable({
    uploadDir,
    // filename(name, ext, part, form) {
    // 	return `${new Date().getDay}`
    // },
    keepExtensions: true,
    maxFiles: 1,
    maxFileSize: 20000 * 1024 ** 2,
    filter: part => part.mimetype?.startsWith('image/') || false,
})

app.use(grantExpress as express.RequestHandler);




app.use('/user', userRoutes)
app.use('/restaurants', restaurantsRoute);









app.use(express.static('public'));
app.use(express.static('uploads'))

app.use((req, res) => {
    res.redirect('/404.html')
})
// console.log(`B`)
app.listen(8080, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})