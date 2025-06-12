const express = require("express")
const userRoutes = express.Router()
const userController = require("../controllers/user.controllers")

userRoutes.post("/create" , userController.createUserController)

userRoutes.get("/showUsers" , userController.showUserController)

userRoutes.put("/update/:id", userController.updateUserController)

userRoutes.delete("/delete/:id", userController.deleteController)

module.exports = userRoutes