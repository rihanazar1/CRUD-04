require("dotenv").config()
const mongoose = require("mongoose")


const connect = () => {
    mongoose.connect(process.env.MONGO_URI)

    .then(()=>{
        console.log("database connected successfully")
    })
    .catch((err)=>{
        console.log("connection denied")
    })
}

module.exports = connect