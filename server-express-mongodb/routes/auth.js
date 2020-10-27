const express = require('express')
const router = express.Router()


//Controller Imports
const { registration } = require('../controllers/auth')




//Routes
router.post('registration', registration)


module.exports = router