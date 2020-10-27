const User = require('../models/user')



exports.registration = (req, res) => {
  
  const { name, email, password } = req.body

  User.findOne({ email }).exec((err, user) => {
    
  })
}