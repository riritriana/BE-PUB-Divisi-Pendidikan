const { body } = require('express-validator');
const express = require('express');
const validate = require('../utils/validate.util');
const divisi = require('../controllers/divisi.v2.controller');
const router = express.Router();


router.post("/get-nama-anggota-pelatihan",
    // validate([
    //     body('username').notEmpty().withMessage('username is required'),
    //     body('password').notEmpty().withMessage('password is required')
    // ]
    // ),
    divisi.namaAnggotaPelatihan
);


router.post("/menambah-nilai-pelatihan",
    validate([
        body('id_user').notEmpty().withMessage('id_user is required'),
        body('jenis_nilai').notEmpty().withMessage('jenis_nilai is required'),
        body('nilai').notEmpty().withMessage('nilai is required')
    ]
    ),
    divisi.menambahNilaiPelatihan
);

module.exports = router;
