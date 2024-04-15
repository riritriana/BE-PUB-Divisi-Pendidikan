const JadwalPelatihan = require("../models/jadwalPelatihan.model");
const Pelatihan = require("../models/pelatihan.model");
const JsonResponse = require("../response/json.response");

const AddPelatihan = async (req) => {
    let msg = "gagal";
    let status = false;
    let data = [];
    if (req.account.role === "pembina") {
        const { name, id_categori_pelatihan, hari, jam, id_pelatihan_instruktur } = req.body;
        const check = await Pelatihan.findAll({ where: { name, id_categori_pelatihan } });
        if (check.length > 0) {
            msg = "Nama Kelompok sudah di pakek";
        } else {
            const id_jadwal = await JadwalPelatihan.findJamHari(jam, hari);
            data = await Pelatihan.create({
                name,
                id_categori_pelatihan,
                id_pelatihan_user: id_pelatihan_instruktur,
                id_jadwal: id_jadwal.id,
            });
            msg = "berhasil hore";
            status = true;
        }

    }
    return JsonResponse(status, msg, data); s

}
module.exports = {
    AddPelatihan
}