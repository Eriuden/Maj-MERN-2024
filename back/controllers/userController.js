import asyncHandler from "express-async-handler"

module.exports.authUser = asyncHandler(async(req,res) => {
    res.status(200).json({message:"auth"})
})

module.exports.registerUser = asyncHandler(async(req,res) => {
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

