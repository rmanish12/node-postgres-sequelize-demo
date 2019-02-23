const Sequelize = require('sequelize');
const sequelize = require('./dbconfig')

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    firstName: { type: Sequelize.STRING },
    age: { type: Sequelize.INTEGER }
});

User.sync().then(() => {
    // Table created    
  });

User.create({
    id: 3,
    firstName: 'testuser1',
    age: 20
})

User.create({
    id: 4,
    firstName: 'testuser2',
    age: 21
})

User.findAll().then((users) => {
    console.log(users)
})