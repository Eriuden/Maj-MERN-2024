import asyncHandler from "express-async-handler"
import User from "../models/userModel"
import generateWebToken from "../utils/genToken"

module.exports.authUser = asyncHandler(async(req,res) => {
    res.status(200).json({message:"auth"})
})

module.exports.registerUser = asyncHandler(async(req,res) => {
    const {name, email, password} = req.body

    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error("Utilisateur déjà enregistré")
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        generateWebToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error("Données invalides")
    }
    res.status(200).json({message:"inscrit"})
})

module.exports.logoutUser = asyncHandler(async(req,res) => {
    res.status(200).json({message:"Déconnecté"})
})

module.exports.getUserProfile = asyncHandler(async(req,res) => {
    res.status(200).json({message:"Profil utilisateur"})
})

module.exports.updateUserProfile = asyncHandler(async(req,res) => {
    res.status(200).json({message:"Profil utilisateur mis à jour"})
})

