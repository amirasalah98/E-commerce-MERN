const mongoose= require('mongoose')

const artSchema= new mongoose.Schema({
    title:String,
    price:Number,
    category:String,
    size:String
})
module.exports=mongoose.model('Art',artSchema)