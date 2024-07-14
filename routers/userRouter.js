const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Login route
router.post('/login',userController.login);

// Signup route
router.post('/signup', userController.signup);

module.exports = router;