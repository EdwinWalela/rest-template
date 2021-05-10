const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:String,
    username:String,
    password:String,
    mobile:String,
});

const User = mongoose.model('User',UserSchema);

module.exports = User;