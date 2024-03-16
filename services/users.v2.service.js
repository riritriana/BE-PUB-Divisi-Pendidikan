const JsonResponse = require('../response/json.response');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require('../models/users.model');
const config = require('../config/config');


const Login = async (req) => {
    const { username, password } = req.body;
    const user = await Users.checkUsername(username);
    let msg = "gagal"
    let status = false;
    let data = [];
    if (user) {
        if (await bcrypt.compare(password, user.password)) {
            const payload = {
                id: user.id,
                username: user.username,
                role: user.role
            };
            data = jwt.sign(payload, config.encrpytion_key);
            msg = "Login berhasil";
            status = true;
            return [JsonResponse(status, msg, data), "jwt"]
        } else {
            msg = "Kata sandi salah.";
        }
    } else {

        msg = "Username tidak ditemukan.";
    }
    return [JsonResponse(status, msg, data), "salah"];
}

// const a = async () => {
//     const salt = await bcrypt.genSalt(); // fdsfsfs
//     const hash = await bcrypt.hash("123456789", salt);
//     console.log(hash);
// }
// a();
module.exports = {
    Login
}