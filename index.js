const express = require('express')
require("dotenv").config()
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello twitter')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login</h1>')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})