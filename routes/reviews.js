const express = require('express');
const {
  getReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview,
} = require('../controllers/reviews');

//Get course model
const Review = require('../models/Review');

/*You must pass {mergeParams: true} to the child router
if you want to access the params from the parent router.*/
const router = express.Router({ mergeParams: true });

//Get advande results middleware to quert in results
const advancedResults = require('../middleware/advancedResults');

//Auth methods
const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(
    advancedResults(Review, {
      path: 'bootcamp',
      select: 'name description',
    }),
    getReviews
  )
  .post(protect, authorize('user', 'admin'), addReview);

router
  .route('/:id')
  .get(getReview)
  .put(protect, authorize('user', 'admin'), updateReview)
  .delete(protect, authorize('user', 'admin'), deleteReview);

module.exports = router;
