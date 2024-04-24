const router = require('express').Router();

const blogRoutes = require('./blog-routes');
const commentRoutes = require('./comment-routes');
//const authRoutes = require('./')
const userRoutes = require('./user-routes');


router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);
router.use('/user', userRoutes);


module.exports = router;