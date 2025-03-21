const express = require('express')
const cors = require('cors')
require('dotenv').config();

const {PORT} = process.env;

const app = express();

app.listen(PORT, ()=> {
  console.log(`Server running on port: ${PORT}`)
})