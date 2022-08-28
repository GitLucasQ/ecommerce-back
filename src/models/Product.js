import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    name: String,
    price: Number,
    photo: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    }
},
    {
        timestamps: true,
        versionKey: false
    });

export default model('Product', ProductSchema);