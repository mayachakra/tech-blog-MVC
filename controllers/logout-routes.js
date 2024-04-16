const router = require('express').Router();

router.get('/logout', async (req,res) => {
    //const userLogin = await User.findAll();
    res.render('logout');
});

module.exports = router;