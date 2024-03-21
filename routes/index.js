const express = require('express');
const router = express.Router();
const usersRouteV2 = require('./users.v2.route');
const authMiddleware = require('../utils/auth.util');
// var cookieParser = require('cookie-parser');
const validate = require('../utils/validate.util');
const UserService = require('../services/users.v2.service');
const user = require('../controllers/users.v2.controller');
// router.use(cookieParser());
const baseApiPathV2 = '/v2';

// router.use(`/${baseApiPathV2}`, usersRouteV2);
router.use(baseApiPathV2, usersRouteV2);

router.use(authMiddleware);

router.get("/me", (req, res) => {
    try {
        res.json(req.account);
    } catch (error) {
        res.status(404);
        res.send("belum login")
    }
});
// router.get(baseApiPathV2 + "/me",
//     UserService.Login
// );



module.exports = router;
