// Middlewares are used to write server side validation

const Joi = require('joi');

const signUpValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(30).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({message: "Bad request", error});
    }
    next();
}

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({message: "Bad request", error});
    }
    next();
}    

module.exports = {
    signUpValidation,
    loginValidation
}