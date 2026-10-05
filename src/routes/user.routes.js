import { Router } from "express";
import {
    registerUser,
    loginUser,
    loggedOutUser,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1,
        },
        {
            name: "coverImage",
            maxCount: 1,
        },
    ]),
    registerUser
);

router.route("/login").post(loginUser);

//secure route
router.route("/logout").post(verifyJWT, loggedOutUser);

export default router;
