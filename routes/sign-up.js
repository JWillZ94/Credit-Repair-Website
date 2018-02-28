const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

Profile = require('../models/Profile');

router.get('/', (req, res) => {
  res.render('sign-up');
});

router.post('/', (req, res) => {
  Profile.create(req.body, (err, profile) => {
    if (err) {
      throw err;
    }
    // res.json(profile);
    console.log(profile);
  });
});

module.exports = router;
