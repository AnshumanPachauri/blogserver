// this file connects server to database
import mongoose from "mongoose";
// import router from "../routes/route";


// here the connection function is defined which takes username and password and connects to cloud mondogb.
// this url is provided by mongodb itself.
// this function is called in index.js where the connection is started.
const connection = async(username,password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.wqkaoxw.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useNewUrlParser : true});
        console.log("DataBase Connected Successfully HEHE");
    }
    catch(error){
        console.log("Error While Connecting To DataBase",error);
    }
}

export default connection;