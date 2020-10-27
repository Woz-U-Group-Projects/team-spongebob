const mongoose = require('mongoose')
const crypto = require('crypto')

const Schema = mongoose.Schema

//Create Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    max: 32
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  hashed_password: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  salt: String,
  role: {
    type: String,
    default: 'subscriber'
  },
  resetPasswordLink: {
    data: String,
    default: ''
  }
}, { timestamps: true })


userSchema
  .virtual('password')
  .set(password => {
    //Create Temp Variable called _password
    this._password = password

    //Generate Salt
    this.salt = this.makeSalt()

    //Encrypt Password
    this.hashed_password = this.encryptPassword(password)
  })
  .get(() => {
    return this._password
  })

  userSchema.method = {
    authenticate: plainText => {
      return this.encryptPassword(plainText) === this.hashed_password
    },

    encryptPassword: password => {
      if(!password) return ''
      try {
        return crypto
          .createHmac('sha1', this.salt)
          .update(password)
          .digest('hex')
      } catch (err) {
        return ''
      }
    },

    makeSalt: () => {
      return Math.round(new Date().valueOf() * Math.random())
    }
  }

  module.exports = mongoose.model('User', userSchema)