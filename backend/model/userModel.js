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
        required: true,
        Selection: false
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
userSchema.pre('save', async function(next){
    const saltRounds = 10; // number of salts
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
})

const userModel = mongoose.model('User',userSchema);

export default userModel;