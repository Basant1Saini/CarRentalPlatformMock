const express = require('express');
const router = express.Router();
const {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} = require('../controllers/carController');
const { protect, admin } = require('../middleware/auth');
const { validateCar } = require('../utils/validators');

router.route('/').get(getCars).post(protect, admin, validateCar, createCar);
router
  .route('/:id')
  .get(getCarById)
  .put(protect, admin, updateCar)
  .delete(protect, admin, deleteCar);

module.exports = router;