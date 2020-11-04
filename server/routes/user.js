const express = require('express')
const router = express.Router()


//Controller Imports
const { requireLogin } = require('../controllers/auth')
const { read, update } = require('../controllers/user')


//Routes
router.get('/user/:id', requireLogin, read)
router.put('/user/update', requireLogin, update )



module.exports = router