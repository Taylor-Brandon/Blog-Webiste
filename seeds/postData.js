const { Post } = require('../models');

const postData = [
    {
        id: 1, 
        title: 'CSS Wireframe',
        description: 'Creating this project really helps with honing in CSS skills',
        user_id: 2,
    },
    {
        id: 2,
        title: 'Project Planner',
        description: 'Project Planner can demonstate jQuery skills',
        user_id: 3,
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;