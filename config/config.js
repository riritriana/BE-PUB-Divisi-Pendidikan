require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    host: process.env.HOST,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DB,
    pool_min: Number(process.env.POOL_MIN),
    pool_max: Number(process.env.POOL_MAX),
    pool_acquire: Number(process.env.POOL_ACQUIRE),
    pool_idle: Number(process.env.POOL_IDLE),
    url: process.env.URL,
    base_url: process.env.BASE_URL,
    node_url: process.env.NODE_URL,
    smtp_host: process.env.SMTP_HOST,
    smtp_port: Number(process.env.SMTP_PORT),
    smtp_user: process.env.SMTP_USER,
    smtp_pass: process.env.SMTP_PASS,
    google_api_key: process.env.GOOGLE_API_KEY,
    encrpytion_key : process.env.ENCRYPTION_KEY
};
