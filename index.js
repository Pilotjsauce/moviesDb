import "dotenv/config";
import express from "express"
import mongoose from "mongoose";
import moviesRouter from "./routes/moviesRouter.js";


 const app=express();
 app.use(express.json());
 
app.use(moviesRouter)
 

 app.listen(process.env.PORT,() =>{
    console.log(`App is now listening on port ${process.env.PORT}`);
 })

 //mongoose boilerplate
 mongoose.connect(process.env.MONGODB_CONNECTION_URL);
const db = mongoose.connection;

db.once("open", () =>{
    console.log("Database is connected")
});
