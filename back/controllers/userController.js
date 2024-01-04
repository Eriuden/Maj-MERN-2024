import asyncHandler from "express-async-handler"

module.exports.authUser = asyncHandler(async(req,res) => {
    res.status(200).json({message:"auth"})
})

