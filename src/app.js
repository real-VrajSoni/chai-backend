import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import { ApiError } from "./utils/apiError.js";
import { ApiResponse } from "./utils/apiResponse.js";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);

app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res
            .status(400)
            .json(
                new ApiResponse(400, null, `File upload error: ${err.message}`)
            );
    }

    if (err instanceof ApiError) {
        return res
            .status(err.statusCode)
            .json(new ApiResponse(err.statusCode, null, err.message));
    }
    console.error(`${err.name}: ${err.message}`);
    const message =
        process.env.NODE_ENV !== "production"
            ? err.message
            : "Internal Server Error";
    return res.status(500).json(new ApiResponse(500, null, message));
});

export { app };
