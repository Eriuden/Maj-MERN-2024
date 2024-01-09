import asyncHandler from "express-async-handler"
import User from "../models/userModel"
import generateWebToken from "../utils/genToken"

module.exports.authUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body

    const user = await User.findOne({email})

    if (user && (await user.matchPassword(password))) {
        generateWebToken(res,user._id)
        res.status(201).json({
            _id: user._id,
            name:user.name,
            email:user.email,
        })
    } else {
        res.status(400)
        throw new Error("email ou mot de passe invalide")
    }
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
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({message: "Déconnexion"})
})

module.exports.getUserProfile = asyncHandler(async(req,res) => {

    const user = {
        _id: req.user._id,
        name:req.user.name,
        email: req.user.email
    }
    res.status(200).json(user)
})

module.exports.updateUserProfile = asyncHandler(async(req,res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email

        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email:updatedUser.email
        })
        
    } else {
        res.status(404)
        throw new Error("User not found")
    }
})

