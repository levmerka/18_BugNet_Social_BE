const router = require('express').Router();
const userRoute = require('./api/user');
const thoughtRoute = require('./api/thought')
router.use('/users', userRoutes);

router.use((req, res) => {
  return res.send('');
});

module.exports = router;