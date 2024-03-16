const { Sequelize } = require('sequelize');
const config = require('./config');
const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql', // Menggunakan MySQL sebagai dialect
    timezone: '+07:00',
    pool: {
        max: config.pool_max,
        min: config.pool_min,
        acquire: config.pool_acquire,
        idle: config.pool_idle,
    },
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false
    //     }
    // },
});

const sequelize_db = new Sequelize(
    config.database,
    config.user,
    config.password,
    {
        host: config.host,
        dialect: 'mysql', // Menggunakan MySQL sebagai dialect
        timezone: '+07:00',
        pool: {
            max: config.pool_max,
            min: config.pool_min,
            acquire: config.pool_acquire,
            idle: config.pool_idle,
        },
        // dialectOptions: {
        //     ssl: {
        //         require: true,
        //         rejectUnauthorized: false
        //     }
        // },
    }
);

module.exports = {
    sequelize,
    sequelize_db,
};
