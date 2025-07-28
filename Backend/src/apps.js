const express=require('express')
const songRoutes=require('./routes/song.routes')

const apps=express()
apps.use(express.json())

apps.use('/',songRoutes)



module.exports=apps