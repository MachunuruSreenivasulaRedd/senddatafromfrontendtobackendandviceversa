const express = require('express')
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/", cors(), async(req,res)=> {
    console.log(res)
})
app.post("/", async(req,res)=> {
    const {data} = req.body
    try{
    const userDetails = {
        userName: data.userName,
        Email: data.Email,
        age: data.age,
        location: data.location
    }
    await collection.insertMany([{...userDetails}])
    const allData = await collection.find({})
    res.json(allData)
   }
   catch(e){
    res.json("fail")
   }
})



app.listen(8000, () => {console.log("server started at 5000")})