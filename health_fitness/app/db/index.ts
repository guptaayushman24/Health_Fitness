// const mongoose = require('mongoose');
// const connectionURL:string= 'mongodb://localhost:27017/Health_Fitness'
// async function databaseconnection(){
//    try{
//     await mongoose.connect(connectionURL);
//     console.log("Mongodb Connected");
//    }
//    catch(err){
//     console.log(err);
   
// }
// }
// databaseconnection()
// export{}
// module.exports = databaseconnection();


import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/Health_Fitness";

// Prevent multiple connections in development
let isConnected = false;

async function connectToDatabase() {
  if (isConnected) {
    console.log("Using existing MongoDB connection ✅");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("MongoDB Connected ✅");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
  }
}
export default connectToDatabase;
