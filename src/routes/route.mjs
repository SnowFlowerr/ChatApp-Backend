import express from "express"
import { getdata,createdata,deletedata} from "../controllers/userController.mjs";

const router=express.Router();

router.get("/",getdata)
router.post("/createdata",createdata)
router.post("/deletedata",deletedata)
export default router;