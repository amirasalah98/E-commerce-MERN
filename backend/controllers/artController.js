const Art= require('../models/Art')

exports.getArt= async(req,res)=>{
    try{
        const artworks= await Art.find()
        res.json(artworks)
    }catch(error){
        res.status(500).json({message:'Error',error: error.message})
    }
}