const { body } = require('express-validator');
const express = require('express');
const validate = require('../utils/validate.util');
const users = require('../controllers/users.v2.controller');
const router = express.Router();

router.post("/login", validate([
    body('username').notEmpty().withMessage('username is required'),
    body('password').notEmpty().withMessage('password is required')
]),
    users.login
);


module.exports = router;
