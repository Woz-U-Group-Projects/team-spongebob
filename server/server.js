const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()


//Initiate Express App
const app = express()


//DB Connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(() => console.log('Team Spongebob says - DB is Connected ...'))
.catch(err => console.log('DB Connection Error: ', err))

//Routes Import
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

//Application Middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
//app.use(cors()) // ALLOWS ALL ORIGINS
if(process.env.NODE_ENV = 'development'){
  app.use(cors({origin:`http://localhost:3000`}))
}

//Middleware
app.use('/api', authRoutes)
app.use('/api', userRoutes)


const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Team Spongebob says - Server is running on port ${port} ...`)
})