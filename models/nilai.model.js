const { sequelize } = require('../config/sequelize.config');
const DataTypes = require('sequelize');

const Nilai = sequelize.define(
    'nilai',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        kuis_1: DataTypes.INTEGER,
        kuis_2: DataTypes.INTEGER,
        kuis_3: DataTypes.INTEGER,
        kuis_4: DataTypes.INTEGER,
        kuis_5: DataTypes.INTEGER,
        kuis_6: DataTypes.INTEGER,
        kuis_7: DataTypes.INTEGER,
        kuis_8: DataTypes.INTEGER,
        kuis_9: DataTypes.INTEGER,
        kuis_10: DataTypes.INTEGER,
        kuis_11: DataTypes.INTEGER,
        kuis_12: DataTypes.INTEGER,
        kuis_13: DataTypes.INTEGER,
        kuis_14: DataTypes.INTEGER,
        uts: DataTypes.INTEGER,
        UAS: DataTypes.INTEGER
    },
    {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    }
);

module.exports = Nilai;
