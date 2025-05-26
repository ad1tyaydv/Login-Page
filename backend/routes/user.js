const { Router } = require("express");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

const userRouter = Router();

userRouter.post("/signup", async function(req, res) {
    const { email, password, userName } = req.body;

    await userModel.create({
        email: email,
        password: password,
        userName: userName
    })
    
    res.json({
        message: "Signup succeeded"
    })
})

module.exports = {
    userRouter: userRouter
}