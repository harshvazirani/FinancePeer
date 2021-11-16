import Sequelize from "sequelize";
import sequelize from '../config/db.js'

const Data = 
  sequelize.define(
    "data",
    {
      userId: {
        type: Sequelize.INTEGER
      },

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },

      title: {
        type: Sequelize.TEXT
      },

      body: {
        type: Sequelize.TEXT
      }
    },
    {
      freezeTableName: true, // Model tableName will be the same as the model name
    }
  );

export default Data;
