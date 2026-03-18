const express= require("express")
const mongoose= require("mongoose")
const dotenv= require("dotenv")
dotenv.config();
const cors = require("cors");

const app= express()
const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: "https://artisty-mern.netlify.app"
}));
const artRoutes =require('./routes/art')
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/orders');
app.use(express.json())
app.use('/api/art',artRoutes)
app.use('/api/auth', authRoutes);
app.use('/api', orderRoutes);
app.get("/api/health", (req, res) => {
  res.status(200).send("OK");
});
async function startServer() {
    try{
        await mongoose.connect(process.env.mongoURI)
        console.log("MongoDB connected successfully")
        
        app.listen(PORT,()=>{
             console.log(`Server is running on port ${PORT}`)
        })
        
    }catch(error){
 console.error('MongoDB connection failed:',error)
 process.exit(1);
    }
}
startServer()
