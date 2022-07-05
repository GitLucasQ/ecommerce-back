import { Schema, model } from "mongoose";

const CartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    products: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                ref: "Product"
            },
            name: String,
            quantity: Number,
            price: Number
        }
    ],
    modified: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true,
        versionKey: false
    });


export default model('Cart', CartSchema);