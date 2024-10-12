import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }, 
    avatar: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    }
})

//user password encryption
userSchema.pre('save', async function(){
    const saltRounds = 10; // number of salts
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
})

const User = mongoose.model('User',userSchema);

export default User;