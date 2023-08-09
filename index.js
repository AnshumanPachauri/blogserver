// Entry point of the server.

import express from "express";
import connection from "./database/db.js";
import dotenv from 'dotenv';
import router from "./routes/route.js";
import cors from 'cors';
// cors is used for cross origin error which occurs because 
// frontend is on another port i.e 3000 and backend is on another port i.e 8000
import bodyParser from "body-parser";


dotenv.config();

const server = express();

server.use(cors());
server.use(bodyParser.json({ extended: true }));
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/',router);

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// the connection function will be called from database file ie db.js

server.listen(PORT, () => {console.log(`server is running on port : ${PORT} hehehe  ...`)});
connection(USERNAME,PASSWORD);