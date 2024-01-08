import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import User from "../models/userModel"

const protect = asyncHandler(async(req, res, next) => {
    let token 

    token = req.cookies.jwt

    if (token) {
        try{
            const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
            req.user = await User.findById(decoded.userId).select("-password")

            next()
        } catch (err) {
            res.status(401)
            throw new Error("Non autorisé, token invalide")
        }
    } else {
        res.status(401)
        throw new Error("Non autorisé, pas de token")
    }
})

export { protect }