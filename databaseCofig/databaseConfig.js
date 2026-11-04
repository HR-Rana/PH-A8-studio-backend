import "dotenv/config";
import { MongoClient } from 'mongodb';

const client = new MongoClient(`mongodb://ariyanmahmud02019_db_user:${process.env.DB_PASSWORD}@ac-trsoayj-shard-00-00.sizzebj.mongodb.net:27017,ac-trsoayj-shard-00-01.sizzebj.mongodb.net:27017,ac-trsoayj-shard-00-02.sizzebj.mongodb.net:27017/?ssl=true&replicaSet=atlas-cf30ok-shard-0&authSource=admin`);


export async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("You successfully connected to MongoDB!");
        return client;
    } catch (err) {
        console.dir(err);
    }

}


const database = await connectToMongoDB();
const db = database.db("Studio-Space");
export const studiosCollection = db.collection("studios-list");
export const BookingCollection = db.collection("booking-list");
