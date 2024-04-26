const { BlogPost } = require('../models');

const router = require('express').Router();

router.get('/', async (req,res) => {
    const blogPosts = await BlogPost.findAll();
    res.render('homepage', { blogPosts });
});

router.get('/login', async (req,res) => {
    //const userLogin = await User.findAll();
    res.render('login');
});


router.get('/logout', async (req,res) => {
    //const userLogin = await User.findAll();
    res.render('logout');
});


router.get('/signup', async (req,res) => {
    //const userLogin = await User.findAll();
    res.render('signup');
});


module.exports = router;