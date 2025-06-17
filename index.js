import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const PORT=process.env.PORT || 3000

const app =express()

app.use(cors())
app.use(express.json())

if (!process.env.MONGO_URI) {
    console.error("Error: MONGO_URI environment variable is not set.");
    process.exit(1);
}

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("MongoDB Connected");
        app.listen(PORT,()=>console.log(`Server at http://localhost:${PORT}`))
    })
    .catch((err)=> console.error("MongoDB error:",err))


