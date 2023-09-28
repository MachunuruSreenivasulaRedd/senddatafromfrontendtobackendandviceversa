const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/fullstackproject")
.then(()=> {
    console.log("connected mongoDb successfully")
})
.catch(() => {
    console.log("connection Failed")
})

const newSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

const collection = mongoose.model("userDetails", newSchema)

module.exports = collection