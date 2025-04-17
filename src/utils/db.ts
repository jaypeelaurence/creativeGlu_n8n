import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://leapifyAdmin:YYLnJOpwpxuuLupj@leapify-dev.y7twds4.mongodb.net/';
const options = {};

const  clientPromise = new MongoClient(uri, options).connect();

export default clientPromise;