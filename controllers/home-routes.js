const { BlogPost } = require('../models');

const router = require('express').Router();

router.get('/', async (req,res) => {
    const blogPosts = await BlogPost.findAll();
    res.render('homepage', { blogPosts });
});

module.exports = router;