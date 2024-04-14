const { sequelize } = require('../config/sequelize.config');
const DataTypes = require('sequelize');

const CategoriPelatihan = sequelize.define(
    'categori_pelatihan',
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
    },
    {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    }
);



module.exports = CategoriPelatihan;