const express = require('express');
const connectDB = require('./config/db');
const jwt = require('jsonwebtoken');
const userRoutes = require('./Routes/userRoutes');
const User = require('./Models/User');

const app = express();

connectDB();

app.use(express.json({extended: false}));



app.use('/auth', userRoutes);

app.use('/', (req, res) => {
    app.send('API RUNNING!')
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`)
});