const JWT = require('jsonwebtoken')
const creatError = require('http-errors')
/** It is helps to generating the access tokens */

module.exports = {
    signedAccessToken: (userId) => {
        return new Promise((resolve, reject) => {
            const payload = {}
            const secret = process.env.ACCESS_TOKEN_SECRET;
            const options = {
                expiresIn: '1h',
                issuer: 'jadhavreadymade',
                audience: userId
            }
            JWT.sign(payload, secret, options, (err, token) => {
                if (err) {
                    console.log(err.message);
                    reject(creatError.InternalServerError())
                }
                resolve(token)
            })
        })
    },
    signedRefreshToken: (userId) => {
        return new Promise((resolve, reject) => {
            const payload = {}
            const secret = process.env.REFRESH_TOKEN_SECRET;
            const options = {
                expiresIn: '1y',
                issuer: 'jadhavreadymade',
                audience: userId
            }
            JWT.sign(payload, secret, options, (err, token) => {
                if (err) {
                    console.log(err.message);
                    reject(creatError.InternalServerError())
                }
                resolve(token)
            })
        })
    },
    verifyAccessToken: (req, res, next) => {
        if (!req.headers['authorization']) return next(creatError.Unauthorized())
        const authHeader = req.headers['authorization']
        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]

        JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if (err) {
                return next(creatError.Unauthorized())
            }
            req.payload = payload
            next()
        })

    },
    verifyRefeshToken: (token) => {
        return new Promise((resolve, reject) => {
            JWT.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
                if (err) reject(next(creatError.Unauthorized()))
                const userId = payload.aud
                resolve(userId)

            })
        }
        )
    }

}