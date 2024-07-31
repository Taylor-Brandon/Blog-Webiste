const router = require('express').Router();
const { User, Comment } = require('../models');


router.get('/', async (req, res) => {
    try {
        const dbCommentData = await Comment.findAll();
        console.log(dbCommentData);

        const comments = dbCommentData.map((comment) =>
            comment.get({ plain: true })
        );
        res.render('homepage', {
            comments,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/comment/:id', async (req, res) => {
    try {
        const dbCommentData = await Comment.findByPk(req.params.id);

        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }

        const comment = dbCommentData.get({ plain: true });

        res.render('comment', { comment });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/user/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id);

        if(!userData) {
            res.status(400).json({message: 'No user found with that id'});
            return;
        }
        const users = userData.get({ plain: true});
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
})


router.get('/login', (req, res) => {
    
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    res.render('signup');
  });
  



module.exports = router;


