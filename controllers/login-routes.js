const router = require('express').Router();

router.get('/login', async (req,res) => {
    //const userLogin = await User.findAll();
    res.render('login');
});

module.exports = router;