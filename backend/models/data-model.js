const mongoose=require("mongoose")

const dataModel= mongoose.model("chocos", new mongoose.Schema({
    image:String,
    name:String,
    desc:String,
    price:Number,
    category:String,
    isPopular:Bool
}))

module.exports= dataModel