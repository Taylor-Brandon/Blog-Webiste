const router = require('express').Router();
const { User, Comment, Post } = require('../../models');


router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({ where: { email: req.body.email } });

    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorect password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = dbUserData.id;
      console.log(dbUserData.id);
      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/signup', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.logged_in = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/post/:id', async (req, res) => {
  const userId = req.session.user_id;
  if (!userId) {
      return res.status(401).json({ message: 'You must be logged in to comment.' });
  }

  console.log('Session Data:', req.session);

  try {
      const dbCommentData = await Comment.create({
          description: req.body.description,
          user_id: userId, 
          post_id: req.params.id
      });
      res.status(200).json(dbCommentData);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to add comment.', error: err });
  }
});

router.post('/postForm', async (req, res) => {
  const userId = req.session.user_id;
  if (!userId) {
    return res.status(401).json({ message: 'You must be logged in to add a post!'});
  }
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      description: req.body.description,
      user_id: userId
    });
    res.status(200).json(dbPostData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to add Post!', err });
  }
});

router.post('/editPost/:id', async (req, res) => {
  try {
  const postData = await Post.findByPk(req.params.id);
  if (!postData) {
    res.json(404).send('Post not found with this id');
  } 
    postData.title = req.body.title;
    postData.description = req.body.description;
    await postData.save();
    res.status(200).json({ message: 'Post updated Successfully!'});
} catch (err) {
  res.status(500).json({ message: 'Failed to update post', error: err.message });
}
});

router.delete('/deletePost/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res.json(404).send('Post not found with this id!');
    }

    await postData.destroy();
    res.status(200).json({ message: 'Post successfully deleted!'});
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete post!', error: err.message });
  }
});

module.exports = router;
