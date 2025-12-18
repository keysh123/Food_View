const express=require('express')
const cookieParser = require('cookie-parser')
const connectToDB = require('./db/db')
const authRouter = require('./routes/auth.route')

connectToDB();
const app=express()
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
module.exports=app