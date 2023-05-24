require('dotenv').config();

const express = require('express');
var path = require('path');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

const routes = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


app.use('/api', routes);
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})