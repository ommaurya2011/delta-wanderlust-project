const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMonngoose = require("passport-local-mongoose");

const userSchema = new Schema ({
    email: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalMonngoose);

module.exports = mongoose.model("User", userSchema);