import express from "express"
import { createBookingsController, deleteBookingsController, getBookingsController, updateBookingsController } from "../controller/booking.controller.js";
const router = express.Router();



router.get("/getBookings", getBookingsController)
router.post("/createBookings", createBookingsController)
router.put("/updateBookings", updateBookingsController)
router.delete("/deleteBookings", deleteBookingsController)




export default router;