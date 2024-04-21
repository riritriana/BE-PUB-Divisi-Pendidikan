const AnggotaPelatihan = require("../models/anggotaPelatihan.model");
const JadwalPelatihan = require("../models/jadwalPelatihan.model");
const Pelatihan = require("../models/pelatihan.model");
const JsonResponse = require("../response/json.response");

const AddPelatihan = async (req) => {
    let msg = "gagal";
    let status = false;
    let data = [];
    if (req.account.role === "pembina") {
        const { name, id_categori_pelatihan, hari, jam, id_pelatihan_instruktur } = req.body;
        console.log(req.body);
        const check = await Pelatihan.findAll({ where: { name, id_categori_pelatihan } });
        if (check.length > 0) {
            msg = "Nama Kelompok sudah di pakek";
        } else {
            const id_jadwal = await JadwalPelatihan.findJamHari(jam, hari);
            if (id_jadwal) {
                data = await Pelatihan.create({
                    name,
                    id_categori_pelatihan,
                    id_pelatihan_user: id_pelatihan_instruktur,
                    id_jadwal: id_jadwal.id,
                });

                msg = "berhasil hore";
                status = true;
            } else {
                msg = "jadwal Tidak Ditemukan"
            }

        }

    }
    return JsonResponse(status, msg, data); s
}

const GetJadwalPembina = async (req) => {
    let msg = "gagal";
    let status = false;
    let data = {};
    if (req.account.role === "pembina") {
        data.jadwal = await Pelatihan.getJadwalPembina();
        for (const val of data.jadwal) {
            const dataANggota = await AnggotaPelatihan.getNamaAnggotaPelatiahnBYID(val.id);
            val.dataValues.kumpulan_anggota = dataANggota;
        }
        msg = "berhasil hore";
        status = true;
    }
    return JsonResponse(status, msg, data);
}

const UbahJadwalPelatihan = async (req) => {
    let msg = "gagal";
    let status = false;
    let data = {};
    if (req.account.role === "pembina") {
        const { id, jam, hari } = req.body;
        const pelatihan = await Pelatihan.findByPk(id);
        if (pelatihan) {
            const jadwal = await JadwalPelatihan.findJamHari(jam, hari);
            if (jadwal) {
                pelatihan.id_jadwal = jadwal.id;
                await pelatihan.save();
                msg = "berhasil hore";
                status = true;
            } else {
                msg = "Tidak di temukan data Jadwal";
            }
        } else {
            msg = "Tidak di temukan data Pelatihan";
        }
    }
    return JsonResponse(status, msg, data);
}

const DeletePelatihan = async (req) => {
    let msg = "gagal";
    let status = false;
    let data = {};
    if (req.account.role === "pembina") {
        const { id } = req.body;
        console.log(id);
        const deleteAnggota = AnggotaPelatihan.destroy({
            where: {
                id_pelatihan: id
            }
        })
        if (deleteAnggota) {
            const pelatihan = await Pelatihan.destroy({
                where: {
                    id
                }
            });
            if (pelatihan) {
                status = true;
                msg = "Berhasil menghapus Pelatihan ";
            } else {
                msg = "Tidak di temukan data Pelatihan";
            }
        }


    }
    return JsonResponse(status, msg, data);
}

module.exports = {
    AddPelatihan,
    GetJadwalPembina,
    UbahJadwalPelatihan,
    DeletePelatihan
}