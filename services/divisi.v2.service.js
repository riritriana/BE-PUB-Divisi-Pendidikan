const AnggotaPelatihan = require("../models/anggotaPelatihan.model");
const Nilai = require("../models/nilai.model");
const JsonResponse = require("../response/json.response");

const NamaAnggotaPelatihan = async (req) => {
    let msg = "gagal";
    let status = false;
    let data = [];
    if (req.account.role === "pendidikan") {
        data = await AnggotaPelatihan.getNamaAnggotaPelatiahn();
        status = true;
        msg = "berhasil hore";
    } else {
        msg = "Tidak dapat diakses ";
    }
    return JsonResponse(status, msg, data);
}

const MenambahNilaiPelatihan = async (req) => {
    let msg = "gagal";
    let status = false;
    let data = [];
    if (req.account.role === "pendidikan") {
        console.log(req.body);
        const { id_user, jenis_nilai, nilai } = req.body;
        const id_nilai = await AnggotaPelatihan.findOne({ where: { id_user_pelatihan: id_user }, attributes: ["id_nilai"] })
        if (jenis_nilai === "Kuis") {
            const nilaiPelatihan = await Nilai.findByPk(parseInt(id_nilai.id_nilai));
            if (nilaiPelatihan) {
                let kuisKosong = "";
                for (let i = 1; i <= 14; i++) {
                    const kuis = "kuis_" + i;
                    if (nilaiPelatihan[kuis] === null) {
                        kuisKosong = kuis;
                        break;
                    }
                }
                if (kuisKosong) {
                   await nilaiPelatihan.update({ [kuisKosong]: nilai });
                    msg = `Nilai ${kuisKosong} berhasil diisi dengan nilai ${nilai}`;
                    status = true;
                } else {
                    msg = "Semua kuis sudah memiliki nilai";
                }
            }
        } else if (jenis_nilai === "UTS") {

        } else {

        }
        status = true;
        msg = "berhasil hore";
    } else {
        msg = "Tidak dapat diakses ";
    }
    return JsonResponse(status, msg, data);
}
module.exports = {
    NamaAnggotaPelatihan,
    MenambahNilaiPelatihan
}