import express from "express";
import { createStudiosController,
     deleteStudiosController, 
     getAllStudiosController, 
     updateStudiosController } from "../controller/studios.controller.js";

import {uploadMiddleware} from "../controller/upload.controller.js"

const router = express.Router();


router.get("/getStudios", getAllStudiosController)
router.post("/createStudios", uploadMiddleware, createStudiosController)
router.put("/updateStudios/:id", uploadMiddleware, updateStudiosController)
router.delete("/deleteStudios/:id", deleteStudiosController)

router.use((error, req, res, next) => {
  if (error) {
    const status = error.message?.includes("File too large") ? 413 : 400;
    return res.status(status).json({
      success: false,
      message: error.message ?? "Image upload failed",
    });
  }
  next();
})






export default router;