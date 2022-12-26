/**Libraries */

const express = require('express');
const app = express();
const createErrors = require('http-errors')
const port = 3000

/**Routes */

const Authroute = require('./Routes/Authroute')
const { verifyAccessToken } = require('./helpers/jwt_helper')
require('dotenv').config()
require('./helpers/init_mongodb')

/** Middleware for extract the Data */

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/** For Route Handling */

app.use('/auth', Authroute)
app.get('/',verifyAccessToken, async (req, res, next) => {
    console.log(req.headers);
    res.send("Hello Form Express")
})

/*** For Error handling */

app.use(async (req, res, next) => {
    next(createErrors.NotFound())
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        },
    })
})

app.listen(port, () => {
    console.log("listening ", port)
})