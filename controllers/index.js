const router = require('express').Router();
const homeRoutes = require('./home-routes');
const dashRoutes = require('./dashboard-routes');
//const loginRoutes = require('./login-routes');
//const signupRoutes = require('./signup-routes');
const blogRoutes = require('./api/blog-routes');
//const commentRoutes = require('./api/comment-routes');
//const logoutRoutes = require('./logout-routes');
const apiRoutes = require('./api/index')

router.use('/', homeRoutes);
router.use('/dashboard', dashRoutes);
router.use('/api', apiRoutes);
router.use('/blog', blogRoutes);


/*
router.use('/login', loginRoutes);
router.use('/blog', blogRoutes);
router.use('/signup', signupRoutes);
router.use('/api', apiRoutes);
router.use('/logout', logoutRoutes);
router.use('/comment', commentRoutes);
*/

/*
router.get('/', (req,res) => {
    res.render('homepage');
});

router.get('/dashboard', (req,res) => {
    res.render('dashboard');
});
*/
module.exports = router;