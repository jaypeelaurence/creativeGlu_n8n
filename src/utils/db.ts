import { MongoClient } from 'mongodb';

const uri = process.env.DB_URL as string;
const options = {};

const  clientPromise = new MongoClient(uri, options).connect();

export default clientPromise;