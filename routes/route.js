import express from 'express';
import { signupUser,loginUser } from '../controller/user-controller.js';
import {uploadImage} from '../controller/image-comtroller.js';
// this is a middleware that will be used on the router.
import upload from '../utils/upload.js';

// this files creats the api endpoints for the router.

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);

// we have used npm i multer-gridfs-storage this is a middleware used to store uploaded files directly on mongodb.
router.post('/file/upload', upload.single('file'), uploadImage);
// here this upload.single() is a middle ware. 

export default router; 