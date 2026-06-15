import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY , 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    

const uploadOnCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        //Upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {resource_type: "auto"})
        //File has been uploaded Succesfully
        console.log("File is uploaded Successfully", response.url)
        fs.unlinkSync(localFilePath)
        return response
    }catch(error){
        fs.unlinkSync(localFilePath) // Remove the localSaved temp file as the upload was not successful
        return null
    }
}

export {uploadOnCloudinary}




    