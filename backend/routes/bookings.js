const express = require('express');
const router = express.Router();
const {
  getBookings,
  createBooking,
  updateBooking,
  cancelBooking,
} = require('../controllers/bookingController');
const { protect } = require('../middleware/auth');
const { validateBooking } = require('../utils/validators');

router.route('/').get(protect, getBookings).post(protect, validateBooking, createBooking);
router.route('/:id').put(protect, updateBooking).delete(protect, cancelBooking);

module.exports = router;