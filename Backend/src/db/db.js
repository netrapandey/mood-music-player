const mongoose=require('mongoose')
require('dotenv').config()
function connectDB(){
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Connected to MongoDB")
})
.catch((err)=>{
    console.log("error connecting to MongoDB: ",err.message)
})
}
module.exports=connectDB;