import express from "express";

const app = express();
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
    // let userInfo = await client.query(`SELECT * FROM users WHERE username = $1`, [username])
    // let dbUserInfo = userInfo.rows[0]


})



app.use(express.static('public'));

app.use((req, res) => {
    res.redirect('/404.html')
})

app.listen(8080, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})