import express from "express";
import { createStudiosController,
     deleteStudiosController, 
     getAllStudiosController, 
     updateStudiosController } from "../controller/studios.controller.js";
import { uploadMiddleware, uploadImageController } from "../controller/upload.controller.js";


const router = express.Router();


router.get("/getStudios", getAllStudiosController)
router.post("/createStudios", createStudiosController)
router.post("/uploadImage", uploadMiddleware, uploadImageController)
router.put("/updateStudios", updateStudiosController)
router.delete("/deleteStudios/:id", deleteStudiosController)






export default router;