const express = require('express')
const router = express.Router()
const createError = require("http-errors")
const User = require('../Models/User.model')
const { reg_val_schema } = require('../helpers/validation_schema')
const { signedAccessToken, signedRefreshToken, verifyRefeshToken } = require('../helpers/jwt_helper')

router.post('/register', async (req, res, next) => {
    try {

        //const { email, password } = req.body
        //if (!email || !password) throw createError.BadRequest()

        const result = await reg_val_schema.validateAsync(req.body)
        console.log(result.email);

        const doesExist = await User.findOne({ email: result.email })
        console.log(doesExist);
        if (doesExist) throw createError.Conflict(`${result.email} is already Present in DB`)

        const user = new User(result)/** The result contain both the field email and password */
        //const user = new User({ email, password })/** email:email is not written because email and password key and value are same */
        const savedUser = await user.save()
        const accessToken = await signedAccessToken(savedUser.id)
        const refreshToken = await signedRefreshToken(savedUser.id)
        res.send({ accessToken, refreshToken })

    } catch (error) {
        if (error.isJoi === true) error.status = 422
        next(error)
    }

})
router.post('/login', async (req, res, next) => {
    try {
        const result = await reg_val_schema.validateAsync(req.body)
        const userFound = await User.findOne({ email: result.email })
        if (!userFound) throw createError.NotFound("User not registered")
        const isMatch = await userFound.isValidPassword(result.password)
        if (!isMatch) throw createError.Unauthorized("Username/Password is not valid")
        const accessToken = await signedAccessToken(userFound.id)
        res.json({ accessToken })
    } catch (error) {
        if (error.isJoi) return next(createError.BadRequest('Invalid Username and Password'))
        next(error)
    }
})
router.post('/refresh-token', async (req, res, next) => {
    try {
        const { refresh_Token } = req.body
        if (!refresh_Token) next(createError.BadRequest)
        const userId = await verifyRefeshToken(refresh_Token)

        const accessToken = await signedAccessToken(userId)
        const refreshToken = await signedRefreshToken(userId)
        res.json({ accessToken, refreshToken })
    } catch (error) {
        next(error)
    }

})
router.delete('/logout', async (req, res, next) => {

})

module.exports = router