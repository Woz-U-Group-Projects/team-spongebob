const express = require('express')
const router = express.Router()


//Controller Imports
const { registration, accountActivation, login } = require('../controllers/auth')


//Validators Import
const { userRegistrationValidator, userLoginValidator } = require('../validators/auth')
const { runValidation } = require('../validators')



//Routes
router.post('/registration',userRegistrationValidator, runValidation, registration)
router.post('/account-activation', accountActivation)
router.post('/login', userLoginValidator, runValidation, login)


module.exports = router