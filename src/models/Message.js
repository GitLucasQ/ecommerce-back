import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'Author'
    }],
    text: String
},
    {
        timestamps: true,
        versionKey: false
    });

export default model('Message', MessageSchema);    