const User = require('../models/user')
const jwt = require('jsonwebtoken')

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)



exports.registration = (req, res) => {
  
  const { name, email, password } = req.body

  User.findOne({ email }).exec((err, user) => {
    if(user){
      return res.status(400).json({
        error: 'Email is taken'
      })
    }

    const token = jwt.sign({name, email, password}, process.env.JWT_ACCOUNT_ACTIVATION, {expiresIn: '10m'} )

    const emailData = {
      to: email,
      from: process.env.EMAIL_FROM, // Use the email address or domain you verified above
      subject: `Email Verification `,
      html: `
      <p>Please follow link to activate account</p>
      <p>${process.env.CLIENT_URL}/auth/activate</p>
      <hr>
      <p>This email msy contian sensetive inforamtion</p>
      `,
    }

    sgMail.send(emailData).then(sent => {
      return res.json({
        message: `Email was sent to ${email}. Follow instruction to activate account`
      })
    })
  })
}