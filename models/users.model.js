const { sequelize } = require('../config/sequelize.config');
const DataTypes = require('sequelize');

const Users = sequelize.define(
    'users',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            get() {
                return parseInt(this.getDataValue('id'));
            },
        },
        username: {
            type: DataTypes.TEXT,
        },
        password: {
            type: DataTypes.TEXT,
        },
        nama: {
            type: DataTypes.TEXT,
        },
        alamat: {
            type: DataTypes.TEXT,
        },
        tanggal_lahir: {
            type: DataTypes.DATE,
        },
        umur: {
            type: DataTypes.INTEGER,
        },
        bio: {
            type: DataTypes.TEXT,
        },
        foto: {
            type: DataTypes.TEXT,
        },
        angkatan: {
            type: DataTypes.INTEGER,
        },
        role: {
            type: DataTypes.ENUM('anggota', "pendidikan", 'pembina'),
        },
    },
    {
        freezeTableName: true,
        // timestamps: true, 
        createdAt: false,
        updatedAt:false,
    }
);

Users.checkUsername = (username) => {
    return Users.findOne({
        where: {
            username
        }
    })
}

module.exports = Users;
