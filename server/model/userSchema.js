import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        min: 5,
        max: 20
    }
    , lastName: {
        type: String,
        trim: true,
        min: 5,
        max: 20
    },
    username: {
        type: String,
        trim: true,
        min: 5,
        max: 20,
        index: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unque: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})
const user = mongoose.model('user', userSchema);
export default user;