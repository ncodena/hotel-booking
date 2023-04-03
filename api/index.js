import  express  from "express";
import dotenv, { config } from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"

const app = express()
dotenv.config()
const connect = async ()=>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected")
  } catch (error) {
    throw error
  }
}
mongoose.connection.on('disconnected', () => {
    console.log("mongo disconnected");
  })
app.use("/api/auth", authRoute); 
app.use("/api/hotels", hotelsRoute); 
app.use("/api/rooms", roomsRoute); 
app.use("/api/users", usersRoute); 

app.listen(8801, ()=>{
    connect()
    console.log("connected to back!")
})
