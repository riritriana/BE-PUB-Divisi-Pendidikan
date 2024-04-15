const Pelatihan = require("../models/pelatihan.model");

const AddPelatihan = async (req) => {
    let msg = "gagal";
    let status = false;
    let data = [];
    if (req.account.role === "pembina") {
        const { name, id_categori_pelatihan, id_jadwal, id_pelatihan_user } = req.bodu;
        data = await Pelatihan.create({
            name,
            id_categori_pelatihan,
            id_pelatihan_user,
            id_jadwal,
        });
        msg = "berhasil hore";
        status = true;
    }
    return JsonResponse(status, msg, data); s

}
module.exports = {
    AddPelatihan
}