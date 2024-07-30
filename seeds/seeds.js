const sequelize = require('../config/connection');
const seedComment = require('./commentData');
//const seedComment = require('./commentData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedComment();
  console.log('Done!');

  process.exit(0);
};

seedAll();