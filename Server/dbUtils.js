function validateUserfromDB(email, password){

const mongoose = require('mongoose');

// Example User schema (replace with your actual schema)
const User = mongoose.model('User', new mongoose.Schema({
    email: String,
    password: String
}));

function validateUserfromDB(email, password) {
    // Replace with MongoDB logic
    // Example:
    // return User.findOne({ email, password });
    throw new Error('validateUserfromDB not implemented for MongoDB yet');
}

module.exports = {
    validateUserfromDB,
    User
};