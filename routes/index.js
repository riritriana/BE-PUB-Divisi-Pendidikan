const express = require('express');
const router = express.Router();
const usersRouteV2 = require('./users.v2.route');
const divisiRouteV2 = require('./divisi.v2.route');
const baseApiPathV2 = '/v2';

router.use(baseApiPathV2, usersRouteV2);

router.use(baseApiPathV2, divisiRouteV2);
module.exports = router;
