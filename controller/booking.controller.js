import { BookingCollection } from './../databaseCofig/databaseConfig.js';

export const getBookingsController = async (req, res) => {
    try {
        const bookings = await BookingCollection.find().toArray();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
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
    const bookingId = req.params.id;
    const bookingData = req.body;
    try {
        const updatedBooking = await BookingCollection.replaceOne({ _id: bookingId }, bookingData);
        res.status(200).json(updatedBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteBookingsController = async (req, res) => {
    const bookingId = req.params.id;
    try {
        const deletedBooking = await BookingCollection.deleteOne({ _id: bookingId });
        res.status(200).json(deletedBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

