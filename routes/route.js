const express=require('express');
const router=express.Router();
const Users=require('../schema/user')

router.get("/user",async(req,res)=>{
    try{
        const user = await Users.find({},{name:1, _id:0});
        res.status(200).json({
            user
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message : e.message
    
        })
    }
})


router.post("/register",async (req,res)=>{
   
        try{
            const user = await Users.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            res.status(201).json({
                status: "Success",
                user
        
            })
    
        }catch(e){
            res.status(500).json({
                status: "Failed",
                message : e.message
        
            })
        }
    })

router.post("/login",async(req,res)=>{
    try{
        const { email, password } = req.body
        const user = await Users.findOne({ $and: [ {email} , {password}] });

        if (user) {
            res.status(200).json({
                user
            })
        }else{
            res.status(404).json({
                message:"user is not found"
            })
        }
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message : e.message
    
        })
    }
})

router.put("/user/:id",async(req,res)=>{
    try{
        const user = await Users.updateOne({_id: req.params.id}, req.body)
        res.status(200).json({
            status: "Success",
            user
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message : e.message
    
        })
    }
})


module.exports = router;