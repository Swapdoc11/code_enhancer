const Joi = require('joi')

const reg_val_schema = Joi.object({
    email: Joi.string().email().lowercase().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','edu'] } }).required(),
    password: Joi.string().min(3).required()


    //email: Joi.string().email().lowercase().required(),
    //password: Joi.string().min(3).required()
    //repeat_password: Joi.ref('password')
})
module.exports = {
    reg_val_schema
}