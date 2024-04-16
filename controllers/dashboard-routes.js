const router = require('express').Router();
const { BlogPost, User } = require('../models');

//all posts (read)
router.get('/', async (req,res) => {
    const userId = req.session.userId;
    const userPosts = await BlogPost.findAll({
        where: {user_id: userId}
    });
    res.json(userPosts);
});

//post (create)
router.post('/', async (req, res) => {
    const userId = req.session.userId;
    const {title, content} = req.body;
    const newPost = await BlogPost.create({
        title, content, user_id: userId
    });
    res.status(201).json(newPost);
});


//update
router.put('/:id', async (req, res) => {
    const userId = req.session.userId;
    const postId = req.params.id;
    const {title, content} = req.body;
    const updatedPost = await BlogPost.create(
        {title, content}, {where: {id: postId, user_id: userId}
    });
    res.status(201).json(updatedPost);
});

//delete
router.delete('/:id', async (req, res) => {
    const userId = req.session.userId;
    const postId = req.params.id;
    await BlogPost.destroy(
        {where: {id: postId, user_id: userId}
    });
    res.sendStatus(204);
    console.log('post delted!');
});


module.exports = router;