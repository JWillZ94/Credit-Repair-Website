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
  firstName:{
    type: String,
    required: true
  },
  middleName: String,
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
    zipCode:{
      type: Number,
      required: true
    }
  },
  phoneNumber:{
    type: Number,
    required: true
  },
  email:{
    type: String,
    required: true
  }
});

const Profile = module.exports = mongoose.model('Profile', profileSchema);
