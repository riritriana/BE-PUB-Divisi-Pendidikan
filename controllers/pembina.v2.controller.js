const PembinaService = require('../services/pembina.v2.service');

const addpelatihan  = async (req, res, next) => {
    try {
        const result = await PembinaService.AddPelatihan(req);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const getJadwalPembina = async (req, res, next) => {
    try {
        const result = await PembinaService.GetJadwalPembina(req);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    addpelatihan,
    getJadwalPembina
};
