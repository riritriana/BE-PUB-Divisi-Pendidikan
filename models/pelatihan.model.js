const { sequelize } = require('../config/sequelize.config');
const DataTypes = require('sequelize');
const Users = require('./users.model');
const CategoriPelatihan = require('./categoriPelatihan.model');
const JadwalPelatihan = require('./jadwalPelatihan.model.js');

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
    id_jadwal: {
      type: DataTypes.BIGINT
    }
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);


Users.hasMany(Pelatihan, { foreignKey: 'id_pelatihan_user' });
Pelatihan.belongsTo(Users, { foreignKey: 'id_pelatihan_user' });

CategoriPelatihan.hasMany(Pelatihan, { foreignKey: 'id_categori_pelatihan' });
Pelatihan.belongsTo(CategoriPelatihan, { foreignKey: 'id_categori_pelatihan' });

Pelatihan.belongsTo(JadwalPelatihan, { foreignKey: 'id_jadwal' });

// Query menggunakan relasi
Pelatihan.getNamaPelatihanInstruktur = (id) => {
  return Pelatihan.findOne({
    attributes: ['id', 'name'],
    include: [
      {
        model: Users,
        attributes: ['id', 'nama'],
        where: { id }
      },
      {
        model: CategoriPelatihan,
        attributes: ['id', 'name']
      },
    ]
  });
}

Pelatihan.getJadwal = (id) => {
  return Pelatihan.findOne({
    include: [
      {
        model: Users,
        attributes: ["nama", "role"],
        where: { id }
      },
      JadwalPelatihan,
      {
        model: CategoriPelatihan,
        attributes: ['id', 'name']
      },

    ]
  })
}

module.exports = Pelatihan;