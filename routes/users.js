const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');

const router = express.Router();

const User = require('../models/User');

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

/*Since we use protect and authorize methods in all routes we can add then with router.use()*/
router.use(protect);
router.use(authorize('admin'));

router.route('/').get(advancedResults(User), getUsers).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
