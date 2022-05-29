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
    }
},
    {
        timestamps: true,
        versionKey: false
    });


UserSchema.statics.encryptPassword = async (password) => {
    const generetedSalt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, generetedSalt);
}

UserSchema.statics.validatePassword = async (password, comparePassword) => {
    console.log('comparando');
    return await bcrypt.compare(password, comparePassword)
}

// UserSchema.plugin(passportLocalMonggose);

export default model('User', UserSchema);