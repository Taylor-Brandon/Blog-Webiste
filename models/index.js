const User = require('./User');
const Comment = require('./Comment');

User.hasMany(Comment, {
    foreign_key: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreign_key: 'user_id',
});

module.exports = { User, Comment };