const express=require('express')
require("dotenv").config();
const cookieParser = require('cookie-parser')
const cors = require('cors')
const connectToDB = require('./db/db')
const authRouter = require('./routes/auth.route')
const foodRouter = require('./routes/foods.route')
connectToDB();
const app=express()
app.use(cookieParser())
app.use(express.json())

app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true
}))
app.use("/api/auth",authRouter)
app.use("/api/food",foodRouter)
module.exports=app