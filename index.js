import express from "express";
import { MongoClient } from 'mongodb';
import cors from "cors"
import path from "path";
import "dotenv/config";
import userRouter from './router/user.router.js'
import studiosRouter from './router/studios.router.js'
import { uploadsDir } from './controller/upload.controller.js'

const app = express();
const PORT = 5000




// middleware
app.use(cors())
app.use(express.json())
app.use("/uploads", express.static(uploadsDir))



// const client = new MongoClient(`mongodb://ariyanmahmud02019_db_user:${process.env.DB_PASSWORD}@ac-trsoayj-shard-00-00.sizzebj.mongodb.net:27017,ac-trsoayj-shard-00-01.sizzebj.mongodb.net:27017,ac-trsoayj-shard-00-02.sizzebj.mongodb.net:27017/?ssl=true&replicaSet=atlas-cf30ok-shard-0&authSource=admin`);


// export async function connectToMongoDB() {
//     try {
//         await client.connect();
//         console.log("You successfully connected to MongoDB!");
//         return client;
//     } catch (err) {
//         console.dir(err);
//     }

// }


// const database = await connectToMongoDB().catch(console.dir);
// const db = database.db("studioDB");
// export const studiosCollection = db.collection("studios");


app.use("/api", studiosRouter);
app.use("/api", userRouter);




app.get("/", (req, res) => {
    res.send("Studio's Express server is running")
})




app.listen(PORT, (req, res) => {
    console.log("express server is running at ", PORT)
})