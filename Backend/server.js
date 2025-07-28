require('dotenv').config()
const apps=require('./src/apps')
const connectDB = require('./src/db/db')


connectDB();


apps.listen(3000,()=>{
    console.log("Server is running on port 3000")
})