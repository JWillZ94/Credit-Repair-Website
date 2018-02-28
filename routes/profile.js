const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

Profile = require('../models/Profile');

router.get('/', (req, res) => { // Finds all profiles
  Profile.find((err, profiles) => {
    if (err) {
      throw err;
    }
    res.render('profile', {
      profiles: profiles
    });
  });
});

router.get('/update', (req, res) => {
  res.render('update-profile');
});

router.get('/:id', (req, res) => { // Find profile by id
  Profile.findById(req.params.id, (err, profile) => { // findById(req.params.id
    if (err) {
      throw err;
    }
    res.render('profile');
  });
});

router.put('/update', (req, res) => { // Updates a profile by username
  Profile.findOneAndUpdate({type: 'username'}, req.body, (err, profile) => {
    if (err) {
      throw err;
    }
    res.json(profile);
  });
});

router.delete('/delete', (req, res) => { // Deletes a profile by username
  Profile.deleteOne({type: 'username'}, req.body, (err, profile) => {
    if (err) {
      throw err;
    }
    res.json(profile);
  });
});

module.exports = router;
