const JsonResponse = require('../response/json.response');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('../config/config');
var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');

app.use(cookieParser());

const Users = require('../models/users.model');

// login(req, res) {
//     const token = jwt.sign(rows[0], "rahasia");
//     if (rows[0].email) {
//         res.send({
//             token: token,
//             role: "user",
//         });
//     } else {
//         res.send({
//             token: token,
//             role: "admin",
//         });
//     }
// }

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
                role: user.role
            };
            const token = jwt.sign(payload, config.encrpytion_key);


            if (user.role === "pendidikan") {
                return JsonResponse(status, msg, { token, role: "pendidikan" })
            } else if (user.role === "anggota") {
                return JsonResponse(status, msg, { token, role: "anggota" })
            }else {
                return JsonResponse(status, msg, { token, role: "pembina" })
            }
        } else {
            msg = "Kata sandi salah.";
        }
    } else {
        msg = "Username tidak ditemukan.";
    }

    return JsonResponse(status, msg);
}



module.exports = {
    Login
};
