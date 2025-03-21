const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { PORT, SERVER } = process.env;

const app = express();

console.log("ahhhhhh");

app.use(cors({
  origin: SERVER ? [SERVER] : '*',
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true
}));

app.options('*', (req, res) => {
  res.header("Access-Control-Allow-Origin", SERVER || '*');
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.sendStatus(200);
});

app.get('/niah', (req, res) => res.send('hello world'));

app.listen(PORT || 3000, () => {
  console.log(`Server running on port: ${PORT || 3000}`);
});
