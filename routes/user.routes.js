const router = require('express').Router();
const UserController = require('../controller/user.controller.js');

router.get("/register", UserController.register);

module.exports = router;