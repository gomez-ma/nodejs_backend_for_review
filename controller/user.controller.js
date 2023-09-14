const UserService = require('../services/user.service.js');

exports.register = (req, res) => {
    try {
        const { email, password } = req.body; // req.body.email, req.body.password
        const response = UserService.registerUser(email, password);
        res.json({status: true, success: 'User registered successfully'});
    } catch (err) {
        throw err;
    }
};