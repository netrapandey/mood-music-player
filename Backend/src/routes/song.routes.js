const express=require('express')
const multer=require('multer');
const uploadFile = require('../service/storage.service');

const router=express.Router();
const upload=multer({storage:multer.memoryStorage()})

router.post('/songs',upload.single("audio"),async(req,res)=>{
    console.log(req.body)
    console.log(req.file);
    const filedata= await uploadFile(req.file)
    console.log(filedata)
    res.setMaxListeners(201).json({
    message:"song created succesfully",
    song:req.body

    })
})



module.exports=router