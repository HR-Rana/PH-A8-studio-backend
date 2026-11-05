import express from "express"
import { createBookingsController, deleteBookingsController, getBookingController, getBookingsController, updateBookingsController } from "../controller/booking.controller.js";
const router = express.Router();



router.get("/getBookings", getBookingsController)
router.get("/getBookings/:id", getBookingController)
router.post("/createBookings", createBookingsController)
router.put("/updateBookings/:id", updateBookingsController)
router.delete("/deleteBookings/:id", deleteBookingsController)




export default router;
