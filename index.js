const express = require("express");
require("dotenv").config()
const PORT = process.env.PORT || 8080
const app = express();
app.use(express.json())

app.get("/", (req,res)=>{
    res.status(200).json({msg:"This is test route"})
})

app.get("/home", (req,res)=>{
    res.status(200).json({msg:"This is home route"})
})
app.listen(PORT, ()=>{
    console.log("Server started on Port", PORT)
})