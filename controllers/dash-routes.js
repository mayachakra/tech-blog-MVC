const router = require('express').Router();

// /dashboard
router.get('/', async (req,res) => {
    //const userLogin = await User.findAll();
    res.render('dashboard');
});

module.exports = router;