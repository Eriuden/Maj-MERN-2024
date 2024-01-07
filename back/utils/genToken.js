import jwt from "jsonwebtoken"

const generateWebToken = (res, userId) => {
    const token = jwt.sign({userId} , process.env.TOKEN_SECRET, {
        expiresIn:"30d"
    })

    res.cookie("jwt", token, {
        httpOnly:true,
        secure: process.env.NODE_ENV !== "dev",
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000
    })
}

export default generateWebToken