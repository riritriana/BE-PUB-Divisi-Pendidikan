const express = require('express');
const router = express.Router();
const usersRouteV2 = require('./users.v2.route');
const authMiddleware = require('../utils/auth.util');

const baseApiPathV2 = 'v2';

router.use(`/${baseApiPathV2}`, usersRouteV2);
router.use(authMiddleware);

module.exports = router;
