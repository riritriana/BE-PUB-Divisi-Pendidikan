const { sequelize } = require('../config/sequelize.config');
const DataTypes = require('sequelize');

const JadwalPelatihan = sequelize.define(
    'jadwal_pelatihan',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            get() {
                return parseInt(this.getDataValue('id'));
            },
        },
        jam: {
            type: DataTypes.TEXT,
        },
        hari: {
            type: DataTypes.TEXT,
        },
    },
    {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    }
);
JadwalPelatihan.findJamHari = (jam, hari) => {
    return JadwalPelatihan.findOne({
        where: {
            jam,
            hari
        }
    })

}

module.exports = JadwalPelatihan;