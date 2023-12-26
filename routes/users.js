const mongoose = require('mongoose');

const plm = require("passport-local-mongoose");

mongoose.connect('mongodb://localhost:27017/mydatabase');


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
   password: {
    type: String,
   
  },
   posts: [{
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Post'
   }],
    dp: {
    type: String, 
    },
    email: {
    type: String,
    unique: true,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
});

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);


