const router = require('express').Router();
const { User, Post } = require('../models');


router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll();
        console.log(dbPostData);

        const posts = dbPostData.map((post) =>
            post.get({ plain: true })
        );
        res.render('homepage', {
            posts,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


module.exports = router;


