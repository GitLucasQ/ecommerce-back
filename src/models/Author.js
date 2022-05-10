import { Schema, model } from "mongoose";

const AuthorSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    age: Number,
    alias: String,
    avatar: String
},
    {
        timestamps: true,
        versionKey: false
    });

export default model('Author', AuthorSchema);