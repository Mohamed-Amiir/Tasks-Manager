const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
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
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }]
});

// Add a method to generate a token for the user
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, 'yourSecretKey');
    return token;
};

const User = mongoose.model('users', userSchema);

module.exports = User;