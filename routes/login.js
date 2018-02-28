const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('log-in');
});

// AUTHENTICATION STUFF
// LOG INTO PROFILE WITH CORRECT ID

module.exports = router;
