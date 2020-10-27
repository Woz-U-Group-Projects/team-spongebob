const User = require('../models/user')
const jwt = require('jsonwebtoken')

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey



exports.registration = (req, res) => {
  
  const { name, email, password } = req.body

  User.findOne({ email }).exec((err, user) => {
    if(user){
      return res.status(400).json({
        error: 'Email is taken'
      })
    }

    const
  })
}