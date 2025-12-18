const { body } = require('express-validator');

const validateRegister = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
];

const validateLogin = [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').notEmpty().withMessage('Password is required')
];

const validateCar = [
  body('make').notEmpty().withMessage('Make is required'),
  body('model').notEmpty().withMessage('Model is required'),
  body('year').isNumeric().withMessage('Year must be a number'),
  body('category').notEmpty().withMessage('Category is required'),
  body('pricePerDay').isNumeric().withMessage('Price per day must be a number')
];

const validateBooking = [
  body('car').notEmpty().withMessage('Car ID is required'),
  body('startDate').isISO8601().withMessage('Valid start date is required'),
  body('endDate').isISO8601().withMessage('Valid end date is required')
];

module.exports = {
  validateRegister,
  validateLogin,
  validateCar,
  validateBooking
};