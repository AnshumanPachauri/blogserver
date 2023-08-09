import mongoose from "mongoose";

// here a new schema is created to store the token key
const tokenSchema = mongoose.Schema({
    token: {
        type: String,
        required: true
    }
})

// mongoose.model function creates a new collection that takes collection name and its schema as input arguments.
const token = mongoose.model('token', tokenSchema);
// the collection name is 'token' and the schema implemented in this collection is tokenSchema.

export default token;