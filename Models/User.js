const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        min: 6,
        required: [true, 'Must enter a username']
    },
    password: {
        type: String,
        min: 6,
        required: [true, 'Password must be at least 6 characters long.']
    }
});

module.exports = mongoose.model('user', UserSchema);