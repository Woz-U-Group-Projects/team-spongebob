const express = require('express')
const router = express.Router()


//Controller Imports
const { registration } = require('../controllers/auth')


//Validators Import
const { runValidation } = require('../validators')
const { userRegistrationValidator } = require('../validators/auth')



//Routes
router.post('/registration',userRegistrationValidator, runValidation, registration)


module.exports = router