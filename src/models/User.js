import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs';

const passportLocalMonggose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
},
    {
        timestamps: true,
        versionKey: false
    });


UserSchema.methods.encryptPassword = async (password) => {
    const generetedSalt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, generetedSalt);
}

UserSchema.methods.validatePassword = async (password, comparePassword) => {
    return await bcrypt.compare(password, comparePassword)
}

// UserSchema.plugin(passportLocalMonggose);

export default model('User', UserSchema);