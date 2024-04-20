const { sequelize } = require('../config/sequelize.config');
const DataTypes = require('sequelize');
const Pelatihan = require('./pelatihan.model');
const Users = require('./users.model');
const Nilai = require('./nilai.model');

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
AnggotaPelatihan.belongsTo(Nilai, { foreignKey: 'id_nilai' });
//angota ada id_pelatihan
// query

AnggotaPelatihan.getNamaAnggotaPelatiahn = () => {
    return AnggotaPelatihan.findAll({
        attributes: ['id'],
        include: [
            {
                model: Users,
                attributes: ["id", 'nama'],
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

AnggotaPelatihan.getNamaAnggotaPelatiahnBYID = (id_pelatihan) => {
    console.log(id_pelatihan);
    return AnggotaPelatihan.findAll({
        attributes: ['id'],
        where: {
            id_pelatihan
        },
        include: [
            {
                model: Users,
                attributes: ["id", 'nama'],
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



// Query menggunakan relasi
AnggotaPelatihan.getNilaiAnggota = (id_pelatihan) => {
    return AnggotaPelatihan.findAll({
        attributes: ['id', 'id_user_pelatihan'],
        include: [
            {
                model: Users,
                attributes: ['id', 'nama']
            },
            {
                model: Nilai,
            }
        ],
        where: {
            id_pelatihan
        }
    })
}


module.exports = AnggotaPelatihan;