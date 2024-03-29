import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },

    email: {
        type:String,
        required:true,
        unique: true
    },

    password: {
        type:String,
        required:true
    }
}, {
    timeStamps: true
})

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = bcrypt.hash(this.password, salt)
})

userSchema.methods.matchPassword = async function(enteredPass) {
    return await bcrypt.compare(enteredPass, this.password)
}

const User = mongoose.model("User", userSchema)

export default User

