import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:String,
    profile:String,
    chat:String,
    time:String,
    email:String,
    video:String,
    img:String,
},{timestamps:true});
export default mongoose.model('user',userSchema);