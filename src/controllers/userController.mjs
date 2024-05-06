import userModel from "../models/userModel.mjs";

const getdata = async (req,res)=>{
    try{
        const users=await userModel.find();
        return res.status(200).send({status:"ok",message:users})
    }
    catch(err){
        return res.status(500).send({status:"failed",message:err.message})
    }
}
const createdata = async (req,res)=>{
    try{
        const data=req.body;
        const userdata=await userModel.create(data);
        return res.status(201).send({status:"ok",message:userdata})
    }
    catch(err){
        return res.status(500).send({status:"failed",message:err.message})
    }
}
export {getdata,createdata};