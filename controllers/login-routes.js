/*const router = require('express').Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');


//post (create)
router.post('/', async (req, res) => {
    const {username, password} = req.body;

    //check
    const user = 
    const newPost = await BlogPost.create({
        title, content, user_id: userId
    });
    res.status(201).json(newPost);
});
*/

//const { User } = require('../models');

const router = require('express').Router();

router.get('/login', async (req,res) => {
    //const userLogin = await User.findAll();
    res.render('login');
});

module.exports = router;