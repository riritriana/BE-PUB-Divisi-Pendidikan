const DivisiService = require('../services/divisi.v2.service');

const namaAnggotaPelatihan  = async (req, res, next) => {
    try {
        const result = await DivisiService.NamaAnggotaPelatihan(req);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const menambahNilaiPelatihan = async (req, res, next) => {
    try {
        const result = await DivisiService.MenambahNilaiPelatihan(req);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const getNamaPelatihanInstrukturAnggota = async (req, res, next) => {
    try {
        const result = await DivisiService.GetNamaPelatihanInstrukturAnggota(req);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    namaAnggotaPelatihan,
    menambahNilaiPelatihan,
    getNamaPelatihanInstrukturAnggota
};
