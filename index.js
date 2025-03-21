const express = require('express')
const cors = require('cors')
require('dotenv').config();

const {PORT} = process.env;

const app = express();

console.log("ahhhhhh")

app.get('/niah', (req, res) => res.send('hello world'))
app.listen(PORT, ()=> {
  console.log(`Server running on port: ${PORT}`)
})