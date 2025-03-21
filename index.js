const express = require('express')
const cors = require('cors')
require('dotenv').config();

const {PORT, SERVER} = process.env;

const app = express();

console.log("ahhhhhh")
app.use(cors({
  origin: [`${SERVER}`],
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));

app.get('/niah', (req, res) => res.send('hello world'))
app.listen(PORT, ()=> {
  console.log(`Server running on port: ${PORT}`)
})