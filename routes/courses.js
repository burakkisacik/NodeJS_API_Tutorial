const express = require('express');
const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courses');

//Get course model
const Course = require('../models/Course');

//Get advande results middleware to quert in results
const advancedResults = require('../middleware/advancedResults');

/*You must pass {mergeParams: true} to the child router
if you want to access the params from the parent router.*/
const router = express.Router({ mergeParams: true });

//Auth methods
const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(
    advancedResults(Course, {
      path: 'bootcamp',
      select: 'name description',
    }),
    getCourses
  )
  .post(protect, authorize('publisher', 'admin'), addCourse);

router
  .route('/:id')
  .get(getCourse)
  .put(protect, authorize('publisher', 'admin'), updateCourse)
  .delete(protect, authorize('publisher', 'admin'), deleteCourse);

module.exports = router;
