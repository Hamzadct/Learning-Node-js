const express = require('express')
const app = express()

app.set("view engine", "ejs")


app.use(function(res, req, next){
    console.log("Hello from middleware")
    next()
})

app.get('/', function (req, res) {
  res.render('index')

})

app.get('/profile', function (req, res) {
    res.render ('profile')
  })
  
  app.get('/profile/:username' , function (req, res){
    res.send(`Hiii ${req.params.username}`)
  })

app.listen(3001)