import Sequelize from "sequelize"
import sequelize from '../config/db.js'

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  email: {
    type: Sequelize.STRING
  },

  password: {
    type: Sequelize.STRING
  }
}) 

export default User;
