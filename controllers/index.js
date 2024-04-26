const router = require('express').Router();
const homeRoutes = require('./home-routes');
const dashRoutes = require('./dash-routes');
const blogRoutes = require('./api/blog-routes');

const apiRoutes = require('./api/index')

router.use('/', homeRoutes);
router.use('/dashboard', dashRoutes); //this is whats giving issues with middleware
//gives middleware error
router.use('/api', apiRoutes);
router.use('/blog', blogRoutes);


module.exports = router;