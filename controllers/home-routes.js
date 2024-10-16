const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll();
        console.log(dbPostData);

        const posts = dbPostData.map((post) =>
            post.get({ plain: true })
        );
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    } 
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
     res.redirect('/');
     return;
    }
    res.render('signup');
 });

module.exports = router;


