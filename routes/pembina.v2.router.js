const { body } = require('express-validator');
const express = require('express');
const validate = require('../utils/validate.util');
const pembina = require('../controllers/pembina.v2.controller');
const router = express.Router();


router.post("/add-pelatihan",
    validate([
        body('name').notEmpty().withMessage('name is required'),
        body('id_categori_pelatihan').notEmpty().withMessage('id_categori_pelatihan is required'),
        body('id_pelatihan_instruktur').notEmpty().withMessage('id_pelatihan_instruktur is required'),
        body('hari').notEmpty().withMessage('hari is required'),
        body('jam').notEmpty().withMessage('jam is required'),
    ]),
    pembina.addpelatihan
);


module.exports = router;
