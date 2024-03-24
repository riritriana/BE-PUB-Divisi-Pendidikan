const { sequelize } = require('../config/sequelize.config');
const DataTypes = require('sequelize');

const Pelatihan = sequelize.define(
    'pelatihan',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            get() {
                return parseInt(this.getDataValue('id'));
            },
        },
        name: {
            type: DataTypes.TEXT,
        },
        id_categori_pelatihan: {
            type: DataTypes.BIGINT,
        },
        id_pelatihan_user: {
            type: DataTypes.BIGINT,
        },
    },
    {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    }
);


module.exports = Pelatihan;