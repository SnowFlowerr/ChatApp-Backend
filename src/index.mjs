import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import router from "./routes/route.mjs";
import dotenv from 'dotenv'

const app=express();
app.use(express.json());
app.use(cors());

dotenv.config()
const connectApp=()=>{
    mongoose.connect(process.env.MONGODB).then(()=>{
        console.log("Database Connected")
    }).catch((error)=>{
        console.log(error);
        throw error;
    })
}
connectApp()

app.use('/',router);
app.listen(8000,()=>{
    console.log("Server has started at port",8000);
})