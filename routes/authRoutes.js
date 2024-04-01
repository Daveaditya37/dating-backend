const express = require('express');
const router = express.Router();
const authController = require('C:\Users\davea\Downloads\backend\Controllers\authController.js');

// Route for user registration (signup)
router.post('/signup', authController.signup);n

// Route for user login
router.post('/login', authController.login);

module.exports = router;
