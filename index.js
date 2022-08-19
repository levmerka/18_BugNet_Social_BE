const router = require('express').Router();
const userRoutes = require('./api/userRoutes');

router.use('/users', userRoutes);

router.use((req, res) => {
  return res.send('');
});

module.exports = router;