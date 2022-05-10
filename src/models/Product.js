import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    name: String,
    price: Number,
    photo: String
},
    {
        timestamps: true,
        versionKey: false
    });

export default model('Product', ProductSchema);