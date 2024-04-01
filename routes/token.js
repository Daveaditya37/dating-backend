const jwt = require('jsonwebtoken');

// Route for user login
router.post('/login', async (req, res) => {
    try {
        // Authenticate user...

        // If authentication is successful, generate JWT token
        const token = jwt.sign({ userId: user._id }, '3b5f74ac76aca1de255badaf251cb954f7bc8dd864788cbe61bcc647705f6f199a48ba64e3ac26bc66a24f32c58df75c35b1ae39635c4c31772c97dfef9a72f3', { expiresIn: '1h' });

        // Send the token back to the client
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
