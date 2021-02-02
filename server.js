const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.send("Hello World!");
});


const PORT = process.env.Port || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`)
});