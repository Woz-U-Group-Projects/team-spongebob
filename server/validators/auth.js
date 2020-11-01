const { check } = require('express-validator')


exports.userRegistrationValidator = [
  //Validate Name
  check('name')
  .not()
  .isEmpty()
  .withMessage('Name is required'),

  //Validate Email
  check('email')
  .not()
  .isEmpty()
  .withMessage('Email is required'),

  //Validate Password
  check('password')
  .isLength({ min: 6 })
  .withMessage('Password must be at least 6 characters long')
]


exports.userLoginValidator = [
  //Validate Email
  check('email')
  .not()
  .isEmpty()
  .withMessage('Email is required'),

  //Validate Password
  check('password')
  .isLength({ min: 6 })
  .withMessage('Password must be at least 6 characters long')
]
