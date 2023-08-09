// this file is used as a file for creating and passing middlewares.
// here middlewares for routes will be creaed and will be added to the router as an arguement.

// we have used npm i multer-gridfs-storage this is a middleware used to store uploaded files directly on mongodb.
// we have also used npm i multer this is a middleware used for handling the multipart/form data that is primarily used for uploading files



import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';
import multer from 'multer';
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


// this object is treated as a function and takes arguments.
const storage = new GridFsStorage({
    url: `mongodb+srv://${username}:${password}@cluster0.wqkaoxw.mongodb.net/?retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) =>{
        const match = ["image/png", "image/jpg", "image/jpeg"];

        if (match.indexOf(file.memeType) === -1){
            return `${Date.now()}-blog-${file.originalname}`;
        }
        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }

});

export default multer({ storage });