import "dotenv/config";

import connectDB from "./db/index.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 8000;

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("connection FAILED: ", error);
            throw error;
        });

        app.listen(PORT, () => {
            console.log(`Server is running at PORT: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGODB connection failed", err);
    });

/*
import express from "express";

const app = express();

//1st approach use iffe (async ()=>{    try{}catch{} })  ()

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on("error", (error) => {
            console.log("ERROR: ", error);
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listning on Port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("ERROR: ", error);
        throw error;
    }
})();
*/
