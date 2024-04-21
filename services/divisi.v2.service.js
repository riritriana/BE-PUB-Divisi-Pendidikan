const AnggotaPelatihan = require("../models/anggotaPelatihan.model");
const CategoriPelatihan = require("../models/categoriPelatihan.model");
const JadwalPelatihan = require("../models/jadwalPelatihan.model");
const Nilai = require("../models/nilai.model");
const Pelatihan = require("../models/pelatihan.model");
const Users = require("../models/users.model");
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

const GetNamaPelatihanInstrukturAnggota = async (req) => {
    let msg = "gagal";
    let status = false;
    let data = {};

    if (req.account.role === "pendidikan") {
        const { id_user } = req.body;
        const instruktur = await Pelatihan.getNamaPelatihanInstruktur(id_user);

        if (instruktur) {
            let anggota = await AnggotaPelatihan.getNilaiAnggota(instruktur.id);


            data = {
                instruktur,
                anggota
            }
            msg = "berhasil hore";
            status = true;
        }
    }

    return JsonResponse(status, msg, data);
}

const GetJadwal = async (req) => {
    let msg = "gagal";
    let status = false;
    let data = {};
    if (req.account.role === "pendidikan") {
        const { id_user } = req.body;
        data.jadwal = await Pelatihan.getJadwal(id_user);
        data.nama_anggota = await AnggotaPelatihan.getNamaAnggotaPelatiahn();
        msg = "berhasil hore";
        status = true;
    }
    return JsonResponse(status, msg, data);
}

const GetCategori = async (req) => {
    let msg = "gagal";
    let status = false;
    let data = [];
    if (req.account.role === "pembina") {
        data = await CategoriPelatihan.findAll();
        msg = "berhasil hore";
        status = true;
    }
    return JsonResponse(status, msg, data); s

}

const GetHari = async (req) => {
    let msg = "gagal";
    let status = false;
    let data = [];
    console.log(req.account.role);
    if (req.account.role === "pembina" || req.account.role === "pendidikan") {
        data = await JadwalPelatihan.findAll({ attributes: ["id", "hari"], group: ['hari'], order: [['id', 'ASC']] });
        msg = "berhasil hore";
        status = true;
    }
    return JsonResponse(status, msg, data);

}

const GetJam = async (req) => {
    let msg = "gagal";
    let status = false;
    let data = [];
    console.log(req.account.role);
    if (req.account.role === "pembina" || req.account.role === "pendidikan") {
        data = await JadwalPelatihan.findAll({ attributes: ["id", "jam"], group: ['jam'], order: [['id', 'ASC']] });
        msg = "berhasil hore";
        status = true;
    }
    return JsonResponse(status, msg, data); s

}
const GetInstruktur = async (req) => {
    let msg = "gagal";
    let status = false;
    let data = [];
    if (req.account.role === "pembina") {
        data = await Users.findAll({ attributes: ["id", "nama"], where: { role: "pendidikan" }, group: ['nama'], order: [['id', 'ASC']] });
        msg = "berhasil hore";
        status = true;
    }
    return JsonResponse(status, msg, data); s

}

module.exports = {
    NamaAnggotaPelatihan,
    MenambahNilaiPelatihan,
    GetNamaPelatihanInstrukturAnggota,
    GetJadwal,
    GetCategori,
    GetHari,
    GetJam,
    GetInstruktur
}