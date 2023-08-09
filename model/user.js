import mongoose from "mongoose";
// this is the file that defines the signup schema(structure that will bw stored in database);

const userSchema = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    username :{
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    }
})
// this is the schema of the data of user that will be stored.

const User = mongoose.model('user', userSchema);
// this function will create a collection in the database according to the schema provided.
// in my sql there are tables but in mongodb there are collections.


export default User;