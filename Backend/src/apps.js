const express=require('express')
const songRoutes=require('./routes/song.routes')
const cors = require('cors')
const apps=express()
apps.use(cors())
apps.use(express.json())


apps.use('/',songRoutes)



module.exports=apps