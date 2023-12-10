// importuję zmienne środowiskowe
require('dotenv').config();
// importuję expresa
const express = require('express');
 
// tworzę instancję expresa
const app = express();
 
//poloczenie z baza
const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mh94mdz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);

//odpalic logger
const morgan = require('morgan');
app.use(morgan('combined'));

// parsuję body
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// routy
//przepisy
const przepisyRoutes = require('./api/routes/przepisy');
app.use('/przepisy', przepisyRoutes);
//użytkownicy
const userRoutes = require('./api/routes/users');
app.use('/users', userRoutes);
 
app.use((req, res, next) => {
  res.status(404).json({ wiadomosc: 'Nie ma nic tu' });
});
 
module.exports = app;