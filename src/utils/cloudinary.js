import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        //upload on cloudinary
        const response = cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        //file uploaded succesfully
        console.log("File is uploaded on cloudinary", (await response).url);

        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); //remove locally saved temporary file
        return null;
    }
};

export { uploadOnCloudinary };
