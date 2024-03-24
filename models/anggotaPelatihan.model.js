const { sequelize } = require('../config/sequelize.config');
const DataTypes = require('sequelize');

const AnggotaPelatihan = sequelize.define(
    'anggota_pelatihan',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            get() {
                return parseInt(this.getDataValue('id'));
            },
        },
        id_user_pelatihan: {
            type: DataTypes.BIGINT,
        },
        id_pelatihan: {
            type: DataTypes.BIGINT,
        },
        id_nilai: {
            type: DataTypes.BIGINT,
        },
        id_categori_pelatihan: {
            type: DataTypes.BIGINT,
        },
    },
    {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    }
);


module.exports = AnggotaPelatihan;