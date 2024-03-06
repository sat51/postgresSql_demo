import express from 'express';
import { Router } from 'express';
import User from "../models/users.model.js"



const router = express.Router();
router.use(express.json());
router.get('/get',async(req,res)=>{
    try{
        const users = await User.findAll();
        res.json(users);
    }catch(error){
        res.status(500).json({err:"Internal Server Error"})
    }
})

router.post('/add',async(req,res)=>{
    const {name,email} = req.body;
    try{
        const user = await User.create({name,email});
        res.status(200).json({user});
    }
    catch(error){
        res.status(500).json({error:"Internal Server"})
    }
})

router.put('/update/:id',async(req,res)=>{
    const {name,email} = req.body;
    const id = req.params.id;
    try{
        const result = await User.update({name,email},{where:{id}});
        res.status(200).json({result});
    }catch(error){
        res.status(500).json({error:"Internal Server error"});
    }
})

router.delete('/delete/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        await User.destroy({where:{id}});
        res.status(200).json({message:"User deleted successfully"});

    }catch(err){
        res.status(500).json({message:"Internal Server Error"});
    }

})

export default router;