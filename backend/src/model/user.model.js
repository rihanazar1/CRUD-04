const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    image:{
        type: String,
        required: true
    },

    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    age:{
        type: Number,
        required: true
    },

    bio:{
        type: String,
        required: true
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel 