import { ObjectId } from "mongodb";
import { BookingCollection } from '../databaseCofig/databaseConfig.js';

export const getBookingsController = async (req, res) => {
    console.log("booking list api is working..!")
    try {
        const bookings = await BookingCollection.find().toArray();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getBookingController = async (req, res) => {
    const { id } = req.params;
    try {
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: "Invalid booking id" });
        }

        const booking = await BookingCollection.findOne({ _id: new ObjectId(id) });

        if (!booking) {
            return res.status(404).json({ success: false, message: "Booking not found" });
        }

        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to get booking", error: error.message });
    }
};

export const createBookingsController = async (req, res) => {
    const bookingData = req.body;
    console.log(bookingData);
    try {
        const newBooking = await BookingCollection.insertOne(bookingData);
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateBookingsController = async (req, res) => {
    const { id } = req.params;
    try {
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: "Invalid booking id" });
        }

        const updateData = { ...req.body };
        delete updateData._id;

        const response = await BookingCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updateData }
        );

        if (!response.matchedCount) {
            return res.status(404).json({ success: false, message: "Booking not found" });
        }

        const updatedBooking = await BookingCollection.findOne({ _id: new ObjectId(id) });

        res.status(200).json({
            success: true,
            message: "Booking updated successfully",
            data: updatedBooking,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to update booking", error: error.message });
    }
};

export const deleteBookingsController = async (req, res) => {
    const { id } = req.params;
    try {
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: "Invalid booking id" });
        }

        const deletedBooking = await BookingCollection.deleteOne({ _id: new ObjectId(id) });

        if (!deletedBooking.deletedCount) {
            return res.status(404).json({ success: false, message: "Booking not found" });
        }

        res.status(200).json({
            success: true,
            message: "Booking deleted successfully",
            data: deletedBooking,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to delete booking", error: error.message });
    }
};
