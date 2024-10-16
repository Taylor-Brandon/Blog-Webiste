const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreign_key: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreign_key: 'user_id',
});

Comment.belongsTo(Post, {
    foreign_key: 'post_id',
});

module.exports = { User, Post, Comment };