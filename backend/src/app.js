const express=require('express')
require("dotenv").config();
const cookieParser = require('cookie-parser')
const connectToDB = require('./db/db')
const authRouter = require('./routes/auth.route')
const foodRouter = require('./routes/foods.route')
connectToDB();
const app=express()
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/food",foodRouter)
module.exports=app