const { body } = require('express-validator');
const express = require('express');
const validate = require('../utils/validate.util');
const users = require('../controllers/users.v2.controller');
const authMiddleware = require('../utils/auth.util');
const router = express.Router();

router.post("/login", validate([
    body('username').notEmpty().withMessage('username is required'),
    body('password').notEmpty().withMessage('password is required')
]),
    users.login
);


router.use(authMiddleware);

router.get("/me", (req, res) => {
    try {
        res.json(req.account);
    } catch (error) {
        res.status(404);
        res.send("belum login")
    }
});
router.get("/get-jadwal-user",users.getJadwalUser);
module.exports = router;
