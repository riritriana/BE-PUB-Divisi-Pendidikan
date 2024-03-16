const express = require('express');
const router = express.Router();
const facilityRouteV2 = require('./facility.v2.route');

const baseApiPathV2 = 'v2';

router.use(`/${baseApiPathV2}`, facilityRouteV2);

module.exports = router;
