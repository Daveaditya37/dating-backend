const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Get the token from the request headers
    const token = req.headers.authorization;

    // Check if token exists
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // Verify the token
    jwt.verify(token, '3b5f74ac76aca1de255badaf251cb954f7bc8dd864788cbe61bcc647705f6f199a48ba64e3ac26bc66a24f32c58df75c35b1ae39635c4c31772c97dfef9a72f3', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }
        // If token is valid, save decoded user ID to request object
        req.userId = decoded.userId;
        next();
    });
};

module.exports = verifyToken;
