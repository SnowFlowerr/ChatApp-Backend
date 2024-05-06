import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import router from "./routes/route.mjs";

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://bhudeokrit:Uzhizz996x@cluster0.vxgwpky.mongodb.net/ChattingData?retryWrites=true&w=majority").then(()=>{console.log("Database Connected Successfuly")}).catch((err)=>{console.log(err)});

app.use('/',router);
app.listen(8000,()=>{
    console.log("Server has started at port",8000);
})