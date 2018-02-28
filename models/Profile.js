const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  first_name:{
    type: String,
    required: true
  },
  middle_name: String,
  last_name:{
    type: String,
    required: true
  },
  address:{
    street:{
      type: String,
      required: true
    },
    city:{
      type: String,
      required: true
    },
    state:{
      type: String,
      required: true
    },
    zip_code:{
      type: Number,
      required: true
    }
  },
  phone_number:{
    type: Number,
    required: true
  },
  email:{
    type: String,
    required: true
  }
});

const Profile = module.exports = mongoose.model('Profile', profileSchema);
