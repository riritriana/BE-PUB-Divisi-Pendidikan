const jwt = require("jsonwebtoken");
const config = require("../config/config");

function authMiddleware(req, res, next) {
    
    console.log("<datanya");
    const token = req.cookies.jwt;
    if (token) {
        try {
            req.user = jwt.verify(token, config.encrpytion_key);
            if (req.method === "GET" || req.method === "POST") {
                next();
            } else {
                res.status(401).send("Anda tidak diizinkan melakukan tindakan ini.");
            }
        } catch {
            res.status(401).send("Token tidak valid.");
        }
    } else {
        res.status(401).send("Anda belum login.");
    }
}

module.exports =  authMiddleware;