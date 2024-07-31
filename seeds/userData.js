const { User } = require('../models');

const userData = [
    {
        id: 1, 
        username: 'star-wars-fan1992',
        email: 'sWarsFan@gmail.com',
        password: '73jfibn2002%93b&id',
    },
    {
        id: 2, 
        username: 'DisneyAdult_',
        email: 'disneyFan@gmail.com',
        password: '123456789',
    },
    {
        id: 3, 
        username: 'AhsokaTano_23',
        email: 'funEmail@gmail.com',
        password: '929n%88929*02u8nv',
    },
    {
        id: 4, 
       username: 'SarahSkywalker',
        email: 'sSkywalker@gmail.com',
        password: 'iLoveAni8280$',
    },
    {
        id: 5, 
        username: 'Lukes_Padawan21',
        email: 'jParker@gmail.com',
        password: '9929dbbe2891n',
    },
    {
        id: 6, 
        username: 'BenSolo<3',
        email: 'g.Johnson@yahoo.com',
        password: '123Password123',
    },
    {
        id: 7,
        username: 'Mando94',
        email: 'greenYoda@hotmail.com',
        password: '99202bf93d902',
    },
    {
        id: 8,
        username: 'sithLord2000',
        email: 'j.smith@gmail.com',
        password: 'jake2003'
    },
];

const seedUser = async () => {
    await User.bulkCreate(userData, {
      individualHooks: true, 
    });
  };
  

module.exports = seedUser;