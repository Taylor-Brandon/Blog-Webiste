const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreign_key: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreign_key: 'user_id',
});

module.exports = { User, Post };