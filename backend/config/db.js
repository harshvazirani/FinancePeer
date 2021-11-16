import Sequelize from "sequelize";

var sequelize = new Sequelize(
    "database",
    process.env.USER,
    process.env.PASSWORD,
    {
      host: "localhost",
      dialect: "sqlite",
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      // Data is stored in the file `database.sqlite` in the folder `db`.
      storage: "db/database.sqlite"
    }
  );
  
  // Authenticate with the database
sequelize
    .authenticate()
    .then(function() {
      console.log("Connection established.");
    })
    .catch(function(err) {
      console.log("Unable to connect to database: ", err);
    });

export default sequelize;