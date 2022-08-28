import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
    name: String,    
},
    {
        timestamps: true,
        versionKey: false
    });

export default model('Category', CategorySchema);