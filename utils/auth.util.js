const jwt = require("jsonwebtoken");
const config = require("../config/config");

// function authMiddleware(req, res, next) {
//     console.log(req.cookies);
//     const token = req.cookie.token;

//     console.log(token,"<datanya");

//     if (token) {
//         console.log("masuk");
//         try {
//             req.user = jwt.verify(token, config.encrpytion_key);
//             if (req.method === "GET" || req.method === "POST") {
//                 next();
//             } else {
//                 res.status(401).send("Anda tidak diizinkan melakukan tindakan ini.");
//             }
//         } catch {
//             res.status(401).send("Token tidak valid.");
//         }
//     } else {

//         console.log("enggak yah");
//         res.status(401).send("Anda belum login.");
//     }
// }

function authMiddleware(req, res, next) {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, config.encrpytion_key, async (err, decoded) => {
            if (!err) {
                req.account = decoded;
                next();
            } else {
                res.status(401).send("Token salah.");
            }
        });
    } else {
        res.send("Token belum dimasukkan");
    }
}

module.exports = authMiddleware;