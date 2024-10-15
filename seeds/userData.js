const { User } = require('../models');

const userData = [
    {
        id: 1, 
        username: 'CodeExplorer123',
        email: '2829@gmail.com',
        password: '73jfibn2002%93b&id',
    },
    {
        id: 2, 
        username: 'DevWizard',
        email: '73blndw@gmail.com',
        password: '123456789',
    },
    {
        id: 3, 
        username: 'PixelCrafter',
        email: 'pixel@gmail.com',
        password: '929n%88929*02u8nv',
    },
    {
        id: 4, 
       username: 'BugHunter42',
        email: 'bug@gmail.com',
        password: 'iLoveAni8280$',
    },
    {
        id: 5, 
        username: 'StackMaster',
        email: 'johnDoe@yahoo.com',
        password: '9929dbbe2891n',
    },
    {
        id: 6, 
        username: 'ScriptGuru',
        email: 'g.Johnson@yahoo.com',
        password: '123Password123',
    },
    {
        id: 7,
        username: 'TheDebugger',
        email: 'greenYoda@hotmail.com',
        password: '99202bf93d902',
    },
    {
        id: 8,
        username: 'UI_UX_Maestro',
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