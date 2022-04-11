const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/home', function (req, res) {
    res.send('this is home page ')
  })

  app.get('/signin', function (req, res) {
    res.send('this is signin page ')
  })

  app.get('/signup', function (req, res) {
    res.send('this is signup page ')

    app.get('/contactus', function (req, res) {
        res.send('contactus page')
      })
  })
app.listen(3000)