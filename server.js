const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./Routes/userRoutes');

const app = express();

connectDB();

app.use(express.json({extended: false}));



app.use('/auth', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`)
});