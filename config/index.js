'use strict';

import Sequelize from 'sequelize';

const sequelize =  new Sequelize('Demodatabase', 'postgres', '1@Cheeseball', {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    logging: false
  });
  
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
