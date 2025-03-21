const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { PORT } = process.env;

const app = express();

console.log("Servidor iniciado...");

// Lista de orígenes permitidos
const allowedOrigins = [
  'https://shaddai.vercel.app',
  'https://facturacion-shaddai-front.vercel.app',
  'https://facturacion-shaddai-front-sebastianlonres-projects.vercel.app'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true
}));

app.options('*', (req, res) => {
  res.header("Access-Control-Allow-Origin", allowedOrigins.join(', '));
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  res.sendStatus(200);
});

app.get('/niah', (req, res) => res.send('hello world'));

app.listen(PORT || 3000, () => {
  console.log(`Server running on port: ${PORT || 3000}`);
});
