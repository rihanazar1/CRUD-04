const express = require("express")
const app = express()
const cors = require("cors")
const userRoutes = require("./routes/user.routes")

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())

app.use("/user", userRoutes) 

module.exports = app