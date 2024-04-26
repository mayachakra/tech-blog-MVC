const router = require('express').Router();
const blogRoutes = require('./blog-routes');
const commentRoutes = require('./comment-routes');
//const authRoutes = require('./')
const userRoutes = require('./user-routes');
const dashRoutes = require('./dashboard-routes');


router.use('/blog', blogRoutes);
router.use('/comments', commentRoutes);
router.use('/user', userRoutes);
router.use('/dashboard', dashRoutes);



module.exports = router;