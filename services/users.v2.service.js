const JsonResponse = require('../response/json.response');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('../config/config');
var express = require('express');
var app = express();

const Users = require('../models/users.model');

const Login = async (req) => {
    const { username, password } = req.body;
    const user = await Users.checkUsername(username);
    let msg = "gagal";
    let status = false;

    if (user) {
        if (await bcrypt.compare(password, user.password)) {
            msg = "berhasil hore";
            status = true;

            const payload = {
                id: user.id,
                username: user.username,
                role: user.role,
                name : user.nama
            };
            const token = jwt.sign(payload, config.encrpytion_key);
            return JsonResponse(status, msg, token)
        } else {
            msg = "Kata sandi salah.";
        }
    } else {
        msg = "Username tidak ditemukan.";
    }
    return JsonResponse(status, msg);
}

const GetJadwalUser = async(req)=>{
    let data={};
    if(req.account.role === "anggota"){
        data.jadwal= await Users.getJadwalUser();
    }
}
module.exports = {
    Login,
    GetJadwalUser
};
