import "dotenv/config";

import connectDB from "./db/index.js";

connectDB();

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
