const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const authMiddleware = require('./middlewares/auth');
const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')
const { mongoUri } = require('./config/index.js')

const isDev = process.env.NODE_ENV === 'development';
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

if (isDev) app.use(require('cors')())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/api', authMiddleware, apiRouter)

// catch 404 and forward to error handler
app.use(function (req, res) {
  res.status(404).send('-')
})

// error handler
app.use(function (err, req, res) {
  res.status(err.status || 500).send('')
})


mongoose.set('strictQuery', false);
mongoose.connect(mongoUri, {
  minPoolSize: 10,
  autoIndex: true,
});
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

module.exports = app
