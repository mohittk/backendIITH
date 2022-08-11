const mongoose = require('mongoose');

const Student = mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: Number,
    Age: Number,
    isStudent: Boolean,
    highestQualification: String, 
    interests: JSON
});

module.exports = mongoose.model('Student', Student);