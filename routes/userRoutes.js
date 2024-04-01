const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

// Protected route
router.get('/protected', verifyToken, (req, res) => {
    // If token is valid, req.userId will contain the user ID
    res.json({ message: 'This is a protected route', userId: req.userId });
});

module.exports = router;
