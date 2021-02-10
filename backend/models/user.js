const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password:{
    type: String,
    required: true
  },
}, {
  timestamps: true,
});

const UserExercise = mongoose.model('UserExercise', userSchema);

module.exports = UserExercise;