import express from "express"
import { getdata,createdata} from "../controllers/userController.mjs";

const router=express.Router();

router.get("/",getdata)
router.post("/createdata",createdata)
export default router;