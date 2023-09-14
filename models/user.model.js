const db = require('../config/db.js');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    email : {
        type: String,
        lowercase: true,
        required: [true, "Email can't be empty!"],
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Email format is not correct!"
        ],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
},{timestamps:true});

// ใช้ในขณะที่มีการบันทึกรหัสผ่าน
userSchema.pre("save", async function(){
    var user = this;
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);

        user.password = hash;
    } catch (error) {
        throw error;
    }
});

const UserModel = db.model('user', userSchema);
module.exports = UserModel;