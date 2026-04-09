// const Art= require('../models/Art')
const products= require("../products.json")
exports.getArt= async(req,res)=>{
    try{
        // const artworks= await Art.find()
        res.json(products)
    }catch(error){
        res.status(500).json({message:'Error',error: error.message})
    }
}