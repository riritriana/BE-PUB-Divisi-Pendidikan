const { sequelize } = require('../config/sequelize.config');
const DataTypes = require('sequelize');
const Pelatihan = require('./pelatihan.model');
const Users = require('./users.model');

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
//relasi
AnggotaPelatihan.belongsTo(Users, { foreignKey: 'id_user_pelatihan' });
AnggotaPelatihan.belongsTo(Pelatihan, { foreignKey: 'id_pelatihan' });


// query

AnggotaPelatihan.getNamaAnggotaPelatiahn = () => {
    return AnggotaPelatihan.findAll({
        attributes: ['id'],
        include: [
            {
                model: Users,
                attributes: ["id",'nama'],
                required: true
            },
            {
                model: Pelatihan,
                attributes: ['id'],
                required: true
            }
        ]
    })
}



module.exports = AnggotaPelatihan;