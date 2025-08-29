// router/auth-router.js
const express = require('express');
const router = express.Router();
const authcontrollers = require('../controllers/auth-controller.js');

router.route("/").get(authcontrollers.home);

router.route("/register").get(authcontrollers.register);
module.exports = router;
