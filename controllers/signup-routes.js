const router = require('express').Router();

router.get('/signup', async (req,res) => {
    //const userLogin = await User.findAll();
    res.render('signup');
});

module.exports = router;